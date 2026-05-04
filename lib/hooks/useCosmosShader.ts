'use client'

import { useEffect } from 'react'

// ============================================================================
// SHADER — Matthias Hurrle (@atzedent) adaptado a WebGL1 y tintado azul VOCAI.
// Idéntico al validado en /public/mockup.html.
// Original WebGL2 #version 300 es → eliminado el header, `out vec4 O`
// reemplazado por `gl_FragColor`, loops `for (float i...)` pasados a `int`
// para compat WebGL1.
// ============================================================================

const VERTEX_SHADER = /* glsl */ `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;
  uniform vec2  resolution;
  uniform float time;

  #define FC gl_FragCoord.xy
  #define T  time
  #define R  resolution
  #define MN min(R.x, R.y)

  float rnd(vec2 p) {
    p = fract(p * vec2(12.9898, 78.233));
    p += dot(p, p + 34.56);
    return fract(p.x * p.y);
  }

  float noise(in vec2 p) {
    vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
    float a = rnd(i),
          b = rnd(i + vec2(1.0, 0.0)),
          c = rnd(i + vec2(0.0, 1.0)),
          d = rnd(i + 1.0);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float t = 0.0, a = 1.0;
    mat2 m = mat2(1.0, -0.5, 0.2, 1.2);
    for (int i = 0; i < 5; i++) {
      t += a * noise(p);
      p *= 2.0 * m;
      a *= 0.5;
    }
    return t;
  }

  float clouds(vec2 p) {
    float d = 1.0, t = 0.0;
    for (int k = 0; k < 3; k++) {
      float i = float(k);
      float a = d * fbm(i * 10.0 + p.x * 0.2 + 0.2 * (1.0 + i) * p.y + d + i * i + p);
      t = mix(t, d, a);
      d = a;
      p *= 2.0 / (i + 1.0);
    }
    return t;
  }

  void main(void) {
    vec2 uv = (FC - 0.5 * R) / MN;
    vec2 st = uv * vec2(2.0, 1.0);
    vec3 col = vec3(0.0);

    float bg = clouds(vec2(st.x + T * 0.5, -st.y));
    uv *= 1.0 - 0.3 * (sin(T * 0.2) * 0.5 + 0.5);

    vec3 starTint  = vec3(0.45, 0.70, 1.30);
    vec3 coralTint = vec3(1.40, 0.55, 0.45);
    vec3 cloudTint = vec3(0.04, 0.10, 0.32);

    for (int j = 1; j < 12; j++) {
      float i = float(j);
      uv += 0.1 * cos(i * vec2(0.1 + 0.01 * i, 0.8) + i * i + T * 0.5 + 0.1 * uv.x);
      vec2 p = uv;
      float d = length(p);

      // 1 de cada 4 estrellas en coral, el resto en azul/cyan.
      // (i = 4 y 8 → 2 coral / 11 estrellas, ~18%)
      vec3 currentTint = (mod(i, 4.0) < 1.0) ? coralTint : starTint;

      col += 0.00125 / d * (cos(sin(i) * vec3(1.0, 2.0, 3.0)) + 1.0) * currentTint;

      float b = noise(i + p + bg * 1.731);
      col += 0.002 * b / length(max(p, vec2(b * p.x * 0.02, p.y))) * currentTint;

      col = mix(col, vec3(bg) * cloudTint, d);
    }

    gl_FragColor = vec4(col, 1.0);
  }
`

declare global {
  interface Window {
    __heroVisible?: boolean
    __startShaderLoop?: () => void
  }
}

/**
 * Monta el shader cosmos en el canvas indicado y arranca el render loop.
 *   - Mobile: pausa total cuando window.__heroVisible === false
 *   - Desktop: throttle a 30fps cuando window.__heroVisible === false
 *   - Expone window.__startShaderLoop() para reanudar (el scroll handler
 *     lo llama cuando el hero vuelve a entrar en viewport)
 */
export function useCosmosShader(canvasId = 'hero-shader-canvas') {
  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null
    if (!canvas) return

    let active = true
    let rafId: number | null = null
    let lastFrameTime = 0
    let cleanup: (() => void) | null = null

    const isMobile = window.matchMedia('(max-width: 767px)').matches

    // Import dinámico para no inflar el bundle inicial del server.
    void import('three').then((THREE) => {
      if (!active) return

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      const scene = new THREE.Scene()
      const camera = new THREE.Camera()
      camera.position.z = 1

      const uniforms = {
        time: { value: 1.0 },
        resolution: { value: new THREE.Vector2() },
      }

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
      })

      const geometry = new THREE.PlaneGeometry(2, 2)
      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      function resize() {
        const w = window.innerWidth
        const h = window.innerHeight
        renderer.setSize(w, h, false)
        uniforms.resolution.value.x = renderer.domElement.width
        uniforms.resolution.value.y = renderer.domElement.height
      }
      resize()
      window.addEventListener('resize', resize)

      // Por defecto el hero está visible al cargar
      window.__heroVisible = true

      function loop(now: number) {
        if (!active) {
          rafId = null
          return
        }

        // Mobile: si el hero NO está visible, parar el loop (cancelAnimationFrame)
        if (isMobile && !window.__heroVisible) {
          rafId = null
          return
        }

        rafId = requestAnimationFrame(loop)

        // Desktop: throttle 30fps fuera del hero
        if (!isMobile && !window.__heroVisible) {
          const minDelta = 1000 / 30
          if (now - lastFrameTime < minDelta) return
          lastFrameTime = now
          uniforms.time.value += 0.032
          renderer.render(scene, camera)
          return
        }

        // Hero visible: 60fps normal
        lastFrameTime = now
        uniforms.time.value += 0.016
        renderer.render(scene, camera)
      }

      // API expuesta para que el scroll handler reanude la loop
      window.__startShaderLoop = () => {
        if (rafId == null && active) {
          rafId = requestAnimationFrame(loop)
        }
      }

      window.__startShaderLoop()

      cleanup = () => {
        window.removeEventListener('resize', resize)
        if (rafId != null) {
          cancelAnimationFrame(rafId)
          rafId = null
        }
        try {
          geometry.dispose()
          material.dispose()
          renderer.dispose()
        } catch {
          // dispose puede fallar si el contexto WebGL ya fue perdido — ignoramos
        }
      }
    })

    return () => {
      active = false
      if (cleanup) cleanup()
      delete window.__heroVisible
      delete window.__startShaderLoop
    }
  }, [canvasId])
}
