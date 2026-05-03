'use client'

import { useEffect } from 'react'

/**
 * Scroll-driven effects globales (idénticos al mockup validado):
 *   - Curva de opacity del canvas cosmos: 1.0 → 0.40 → 0.08
 *   - Parallax del .hero-copy (translateY proporcional al scroll)
 *   - Navbar .is-scrolled cuando scrollY > 40
 *   - Tilt del .spline-placeholder (-2deg → +2deg) según posición en viewport
 *   - Parallax leve de elementos [data-parallax] (signo + factor)
 *   - Flag window.__heroVisible para coordinar con useCosmosShader
 *
 * Todo throttled con requestAnimationFrame. Respeta prefers-reduced-motion.
 * Reduce intensidad en mobile (parallax × 0.5).
 */
export function useScrollDriven() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches

    const canvas = document.getElementById(
      'hero-shader-canvas'
    ) as HTMLCanvasElement | null
    const hero = document.getElementById('hero')
    const heroCopy = document.querySelector<HTMLElement>('.hero-copy')
    const navbar = document.querySelector<HTMLElement>('.navbar')
    const splineEls = document.querySelectorAll<HTMLElement>('[data-tilt-on-scroll]')
    const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]')

    const PARALLAX_HERO = isMobile ? 0.08 : 0.15
    const PARALLAX_CARDS_MULT = isMobile ? 0.5 : 1.0

    let ticking = false
    let lastScrollY = window.scrollY

    const heroH = () => (hero ? hero.offsetHeight : window.innerHeight)

    function update() {
      const y = lastScrollY
      const heroHeight = heroH()

      // --- Curva opacity del canvas cosmos ---
      if (canvas) {
        const p = Math.max(0, y / heroHeight)
        let opacity: number
        if (p < 0.8) {
          opacity = 1.0 - (p / 0.8) * 0.6 // 1.00 → 0.40
        } else if (p < 1.0) {
          opacity = 0.4 - ((p - 0.8) / 0.2) * 0.32 // 0.40 → 0.08
        } else {
          opacity = 0.08
        }
        canvas.style.opacity = opacity.toFixed(3)
      }

      // --- Hero visible flag (coordina con shader loop) ---
      const heroVisibleNow = y < heroHeight
      if (heroVisibleNow !== window.__heroVisible) {
        window.__heroVisible = heroVisibleNow
        if (heroVisibleNow && typeof window.__startShaderLoop === 'function') {
          window.__startShaderLoop()
        }
      }

      // --- Parallax del copy del hero ---
      if (heroCopy) {
        const offset = y * PARALLAX_HERO
        heroCopy.style.transform = `translateY(${offset.toFixed(1)}px)`
      }

      // --- Navbar scrolled state ---
      if (navbar) {
        if (y > 40) navbar.classList.add('is-scrolled')
        else navbar.classList.remove('is-scrolled')
      }

      // --- Tilt sutil del Spline placeholder según posición en viewport ---
      const wH = window.innerHeight
      splineEls.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const p = 1 - Math.max(0, Math.min(1, center / wH))
        const rot = (p * 4 - 2).toFixed(2) // -2deg a +2deg
        el.style.transform = `rotate(${rot}deg)`
      })

      // --- Parallax leve de cards [data-parallax] ---
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const factor = parseFloat(el.dataset.parallax ?? '0')
        const dist = (center - wH / 2) * factor * PARALLAX_CARDS_MULT
        if (el.classList.contains('is-visible')) {
          el.style.transform = `translateY(${dist.toFixed(1)}px)`
        }
      })

      ticking = false
    }

    function onScroll() {
      lastScrollY = window.scrollY
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}
