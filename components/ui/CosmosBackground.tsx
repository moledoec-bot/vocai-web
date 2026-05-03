'use client'

import { useEffect } from 'react'
import { useCosmosShader } from '@/lib/hooks/useCosmosShader'
import { useScrollDriven } from '@/lib/hooks/useScrollDriven'

/**
 * Renderiza el canvas cosmos fixed full-viewport y monta:
 *   - useCosmosShader   → shader Matthias Hurrle azul VOCAI + loop
 *   - useScrollDriven   → curva opacity, parallax, navbar, tilts
 *   - body.is-loaded    → dispara las animaciones de entrada del hero
 *                         (word-reveal, hero-sub, hero-ctas)
 */
export default function CosmosBackground() {
  useCosmosShader('hero-shader-canvas')
  useScrollDriven()

  useEffect(() => {
    // Dos rAFs para asegurar que el primer paint ya ocurrió antes de
    // disparar las animaciones de entrada.
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        document.body.classList.add('is-loaded')
      })
      // guardamos raf2 en una closure; el cleanup se queda con raf1
      void raf2
    })

    return () => {
      cancelAnimationFrame(raf1)
      document.body.classList.remove('is-loaded')
    }
  }, [])

  return <canvas id="hero-shader-canvas" aria-hidden />
}
