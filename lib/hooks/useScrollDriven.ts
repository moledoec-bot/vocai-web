'use client'

import { useEffect } from 'react'

/**
 * Scroll-driven effects globales (idénticos al mockup validado):
 *   - Setup inicial de stagger: por cada `.stagger`, asigna transition-delay
 *     incremental a sus hijos `.reveal` (default 80ms desktop, 40ms mobile;
 *     override con data-stagger-step="N" en el contenedor).
 *   - IntersectionObserver global: cualquier `.reveal` recibe `.is-visible`
 *     al entrar al viewport (threshold 0.15). Tras 1s libera will-change.
 *   - Curva de opacity del canvas cosmos: 1.0 → 0.40 → 0.08
 *   - Parallax del .hero-copy (translateY proporcional al scroll)
 *   - Navbar .is-scrolled cuando scrollY > 40
 *   - Tilt del .spline-placeholder (-2deg → +2deg) según posición en viewport
 *   - Parallax leve de elementos [data-parallax] (signo + factor)
 *   - Flag window.__heroVisible para coordinar con useCosmosShader
 *
 * Todo throttled con requestAnimationFrame. Respeta prefers-reduced-motion.
 */
export function useScrollDriven() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches

    // ------------------------------------------------------------------
    // 1) Stagger setup: asigna transition-delay incremental a hijos .reveal
    //    de cada contenedor .stagger
    // ------------------------------------------------------------------
    const STAGGER_DEFAULT = isMobile ? 40 : 80
    document.querySelectorAll<HTMLElement>('.stagger').forEach((group) => {
      const step = Number.parseInt(group.dataset.staggerStep ?? '', 10) || STAGGER_DEFAULT
      const stepFinal = isMobile ? Math.round(step * 0.6) : step
      const reveals = group.querySelectorAll<HTMLElement>(':scope > .reveal')
      reveals.forEach((child, i) => {
        child.style.transitionDelay = `${i * stepFinal}ms`
      })
    })

    // ------------------------------------------------------------------
    // 2) IO global para .reveal — agrega .is-visible al entrar
    // ------------------------------------------------------------------
    let io: IntersectionObserver | null = null
    if (reduced) {
      // Reduced motion: marcar todo como visible directo
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        el.classList.add('is-visible')
      })
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement
              el.classList.add('is-visible')
              window.setTimeout(() => el.classList.add('is-settled'), 1000)
              io!.unobserve(el)
            }
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      )
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        io!.observe(el)
      })
    }

    // ------------------------------------------------------------------
    // 3) Scroll handler RAF-throttled
    // ------------------------------------------------------------------
    if (reduced) return () => io?.disconnect()

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

      if (canvas) {
        const p = Math.max(0, y / heroHeight)
        let opacity: number
        if (p < 0.8) {
          opacity = 1.0 - (p / 0.8) * 0.6
        } else if (p < 1.0) {
          opacity = 0.4 - ((p - 0.8) / 0.2) * 0.32
        } else {
          opacity = 0.08
        }
        canvas.style.opacity = opacity.toFixed(3)
      }

      const heroVisibleNow = y < heroHeight
      if (heroVisibleNow !== window.__heroVisible) {
        window.__heroVisible = heroVisibleNow
        if (heroVisibleNow && typeof window.__startShaderLoop === 'function') {
          window.__startShaderLoop()
        }
      }

      if (heroCopy) {
        const offset = y * PARALLAX_HERO
        heroCopy.style.transform = `translateY(${offset.toFixed(1)}px)`
      }

      if (navbar) {
        if (y > 40) navbar.classList.add('is-scrolled')
        else navbar.classList.remove('is-scrolled')
      }

      const wH = window.innerHeight
      splineEls.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const p = 1 - Math.max(0, Math.min(1, center / wH))
        const rot = (p * 4 - 2).toFixed(2)
        el.style.transform = `rotate(${rot}deg)`
      })

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
      io?.disconnect()
    }
  }, [])
}
