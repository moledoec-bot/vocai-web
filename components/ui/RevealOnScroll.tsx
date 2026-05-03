'use client'

import { useEffect, useRef, type ReactNode } from 'react'

// IntersectionObserver wrapper: agrega .reveal y, al entrar al viewport,
// .is-visible. Tras 1s libera will-change con .is-settled.
// La animación CSS vive en globals.css (fade + translateY + out-expo 800ms).
interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  /** Inline transition-delay (para staggers manuales). */
  delayMs?: number
  /** Cuánto del elemento debe ser visible para disparar (0..1). */
  threshold?: number
}

export default function RevealOnScroll({
  children,
  className = '',
  delayMs = 0,
  threshold = 0.15,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            window.setTimeout(() => el.classList.add('is-settled'), 1000)
            io.unobserve(el)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
