'use client'

// TODO CP3: implementar hook que monta el shader cosmos en el canvas:
//   - Three.js como ESM desde esm.sh (la build UMD ya no existe en v0.150+)
//   - Shader Matthias Hurrle adaptado a WebGL1, tintado azul VOCAI
//   - Loop con requestAnimationFrame + flag window.__heroVisible
//   - En mobile cancela el RAF cuando el hero NO está visible
//   - En desktop throttle a 30fps fuera del hero
//   - Expone window.__startShaderLoop para reanudar desde el scroll handler
// Por ahora stub.
export function useCosmosShader(_canvasId: string) {
  // Placeholder. La lógica real se monta en CP3.
}
