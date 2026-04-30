'use client'

import Link from 'next/link'
import { ShaderAnimation } from '@/components/ui/shader-animation'

export default function HeroParallax() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo: shader animado VOCAI */}
      <div className="absolute inset-0" aria-hidden="true">
        <ShaderAnimation className="w-full h-full" intensity={1} />
      </div>

      {/* Capa de oscurecimiento sutil para legibilidad */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(10,14,26,0.35) 0%, rgba(10,14,26,0.7) 100%)',
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8 drop-shadow-2xl">
          La voz de tu negocio,{' '}
          <span className="gradient-text">potenciada por IA.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 drop-shadow">
          Estudio de podcast, marketing digital e inteligencia artificial para empresas y profesionales en Alicante.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/packs"
            className="px-8 py-4 bg-[#2979FF] hover:bg-[#1a6aff] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#2979FF]/40 text-lg shadow-lg shadow-[#2979FF]/30"
          >
            Ver packs →
          </Link>
          <Link
            href="/estudio"
            className="px-8 py-4 border-2 border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B6B]/40 text-lg backdrop-blur-sm"
          >
            Reservar estudio →
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
