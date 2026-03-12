'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/estudio', label: 'Estudio' },
  { href: '/packs', label: 'Packs' },
  { href: '/soluciones-ia', label: 'Soluciones IA' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-black tracking-tight gradient-text">
              VOCAI
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#2979FF] ${
                  pathname === href ? 'text-[#2979FF]' : 'text-gray-300'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-[#FF6B6B] hover:bg-[#ff5252] text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Hablemos
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white transition-colors"
            aria-label="Abrir menú"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0e1a] border-t border-white/5">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors duration-300 hover:text-[#2979FF] ${
                  pathname === href ? 'text-[#2979FF]' : 'text-gray-300'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 bg-[#FF6B6B] text-white text-sm font-semibold rounded-lg text-center transition-colors duration-300"
            >
              Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
