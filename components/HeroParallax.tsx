'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'

export default function HeroParallax() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo navy con gradiente azul-coral y parallax */}
      <div ref={bgRef} className="absolute inset-0 scale-110 will-change-transform"
        style={{
          background: 'linear-gradient(135deg, #0a0e1a 0%, #0d1b3e 40%, #1a0e1a 70%, #1f0f0d 100%)',
        }}
        aria-hidden="true"
      />
      {/* Resplandor azul superior-izquierda */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 20% 30%, rgba(41,121,255,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Resplandor coral inferior-derecha */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 45% at 80% 75%, rgba(255,107,107,0.14) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Contenido centrado */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 drop-shadow-lg">
          La voz de tu negocio,{' '}
          <span className="gradient-text">potenciada por IA.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 drop-shadow">
          Estudio de podcast, marketing digital e inteligencia artificial para empresas y profesionales en Alicante.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/packs"
            className="px-8 py-4 bg-[#2979FF] hover:bg-[#1a6aff] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 text-lg shadow-lg shadow-[#2979FF]/30"
          >
            Ver packs →
          </Link>
          <Link
            href="/estudio"
            className="px-8 py-4 border-2 border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white font-bold rounded-xl transition-all duration-300 text-lg backdrop-blur-sm"
          >
            Reservar estudio →
          </Link>
        </div>
      </div>

      {/* Flecha scroll hacia abajo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
