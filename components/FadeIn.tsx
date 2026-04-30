'use client'

import { useEffect, useRef, type ReactNode, type HTMLAttributes } from 'react'

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delayMs?: number
  threshold?: number
  once?: boolean
}

export default function FadeIn({
  children,
  delayMs = 0,
  threshold = 0.15,
  once = true,
  className = '',
  ...rest
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              node.classList.add('is-visible')
            }, delayMs)
            if (once) observer.unobserve(node)
          } else if (!once) {
            node.classList.remove('is-visible')
          }
        })
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [delayMs, threshold, once])

  return (
    <div ref={ref} className={`fade-in-on-scroll ${className}`} {...rest}>
      {children}
    </div>
  )
}
