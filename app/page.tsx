import type { Metadata } from 'next'
import Link from 'next/link'
import HeroParallax from '@/components/HeroParallax'
import FadeIn from '@/components/FadeIn'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'

export const metadata: Metadata = {
  title: 'VOCAI — La voz de tu negocio, potenciada por IA',
  description:
    'Estudio de podcast, marketing digital e inteligencia artificial para empresas y profesionales en Alicante.',
  openGraph: {
    title: 'VOCAI — La voz de tu negocio, potenciada por IA',
    description:
      'Estudio de podcast, marketing digital e inteligencia artificial para empresas y profesionales en Alicante.',
    url: 'https://vocai.es',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://vocai.es' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VOCAI',
  description: 'Estudio de podcast, marketing digital e inteligencia artificial en Alicante',
  url: 'https://vocai.es',
  telephone: '+34000000000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Camino del Faro 37',
    addressLocality: 'Cabo las Huertas',
    addressRegion: 'Alicante',
    postalCode: '03540',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.3734,
    longitude: -0.4074,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '14:00' },
  ],
}

const valueProps = [
  {
    icon: '🎙️',
    title: 'Estudio profesional propio',
    text: 'No subcontratamos. Tecnología de primer nivel en Alicante.',
  },
  {
    icon: '📈',
    title: 'Contenido que convierte',
    text: 'Desde el guion hasta la publicación. Tú solo apareces.',
  },
  {
    icon: '🤖',
    title: 'IA que hace crecer tu negocio',
    text: 'Automatizaciones reales para ganar tiempo y dinero.',
  },
]

const levels = [
  {
    icon: '🎙️',
    name: 'BÁSICO',
    desc: 'Graba en nuestro estudio profesional',
    originalPrice: '120€/hora',
    price: '90€',
    unit: '/hora +IVA',
    badge: null as string | null,
    color: '#2979FF',
    href: '/packs',
    cta: 'Más información →',
  },
  {
    icon: '⚡',
    name: 'PLUS',
    desc: 'Grabado y editado, listo para publicar',
    originalPrice: '249€',
    price: '190€',
    unit: '+IVA',
    badge: null as string | null,
    color: '#00D68F',
    href: '/packs',
    cta: 'Más información →',
  },
  {
    icon: '📦',
    name: 'PACK GRABA',
    desc: 'Contenido recurrente para tu marca',
    originalPrice: '549€/mes',
    price: '349€',
    unit: '/mes +IVA',
    badge: null as string | null,
    color: '#9B59B6',
    href: '/packs',
    cta: 'Más información →',
  },
  {
    icon: '🚀',
    name: 'PACK CREA',
    desc: 'Tu marca personal en piloto automático',
    originalPrice: '1.300€/mes',
    price: '850€',
    unit: '/mes +IVA',
    badge: 'MÁS POPULAR' as string | null,
    color: '#FF6B6B',
    href: '/packs',
    cta: 'Más información →',
  },
  {
    icon: '👑',
    name: 'PACK DOMINA',
    desc: 'El ecosistema completo para crecer',
    originalPrice: '3.000€/mes',
    price: '1.400€',
    unit: '/mes +IVA',
    badge: null as string | null,
    color: '#FFB020',
    href: '/packs',
    cta: 'Más información →',
  },
]

const homeComparisonRows: {
  feature: string
  basico: boolean | string
  plus: boolean | string
  graba: boolean | string
  crea: boolean | string
  domina: boolean | string
}[] = [
  { feature: 'Grabación en estudio', basico: true, plus: true, graba: true, crea: true, domina: true },
  { feature: 'Horas de grabación', basico: 'Por hora', plus: '1h', graba: '3h', crea: '6h', domina: '6h' },
  { feature: 'Reels editados', basico: '—', plus: '3', graba: '6', crea: '8', domina: '12' },
  { feature: 'Audio y multicámara ×3', basico: false, plus: true, graba: true, crea: true, domina: true },
  { feature: 'Entrega', basico: 'Al momento', plus: '48/72hs', graba: '48/72hs', crea: '48/72hs', domina: '48/72hs' },
  { feature: 'Gestión de redes', basico: false, plus: false, graba: false, crea: true, domina: true },
  { feature: 'Sitio web con SEO', basico: false, plus: false, graba: false, crea: true, domina: true },
  { feature: 'Asistente digital IA', basico: false, plus: false, graba: false, crea: true, domina: true },
  { feature: 'Automatizaciones', basico: false, plus: false, graba: false, crea: false, domina: true },
  { feature: 'Meta Ads gestionadas', basico: false, plus: false, graba: false, crea: false, domina: true },
]

const homeTableHeaders = [
  { label: 'BÁSICO', color: '#2979FF', price: '90€/h', original: '120€/h' },
  { label: 'PLUS', color: '#00D68F', price: '190€', original: '249€' },
  { label: 'GRABA', color: '#9B59B6', price: '349€/mes', original: '549€/mes' },
  { label: 'CREA', color: '#FF6B6B', price: '850€/mes', original: '1.300€/mes' },
  { label: 'DOMINA', color: '#FFB020', price: '1.400€/mes', original: '3.000€/mes' },
]

const testimonials = [
  {
    name: 'Carlos Martínez',
    company: 'Asesoría Martínez & Asociados',
    text: 'En 3 meses, mi podcast tiene 1.200 escuchas mensuales y mi cartera creció un 40%. VOCAI cambió cómo me ven mis clientes.',
    // ⬇️ REEMPLAZAR con foto real del cliente
    avatar: null,
  },
  {
    name: 'Ana López',
    company: 'Clínica Dental López',
    text: 'El asistente de WhatsApp con IA nos ahorra 3 horas diarias. Ahora atendemos leads mientras dormimos.',
    avatar: null,
  },
  {
    name: 'Roberto Sánchez',
    company: 'Inmobiliaria Costa Blanca',
    text: 'Los reels que produce VOCAI consiguen más engagement que todo lo que publicábamos antes. Vale cada euro.',
    avatar: null,
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <HeroParallax />

      {/* VALUE PROPS */}
      <FadeIn>
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map(({ icon, title, text }) => (
              <div
                key={title}
                className="bg-[#0f1629] rounded-2xl p-8 border border-[#2979FF]/15 hover:border-[#2979FF]/50 hover:shadow-xl hover:shadow-[#2979FF]/15 transition-all duration-300 hover:-translate-y-1.5"
              >
                <span className="text-4xl mb-4 block">{icon}</span>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ELIGE TU NIVEL */}
      <FadeIn>
        <section className="relative py-20 px-4 bg-[#0a0e1a] section-glow-blue overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 tracking-tight">
            Elige tu nivel
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Empieza donde quieras. Sin permanencia. Precios especiales de lanzamiento.
          </p>

          {/* 5 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
            {levels.map((level) => (
              <div
                key={level.name}
                className={`shimmer-card relative bg-[#0f1629] rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 ${
                  level.badge
                    ? 'border-[#FF6B6B]/60 shadow-xl shadow-[#FF6B6B]/15 hover:shadow-2xl hover:shadow-[#FF6B6B]/25'
                    : 'border-[#2979FF]/15 hover:border-[#2979FF]/45 hover:shadow-xl hover:shadow-[#2979FF]/15'
                }`}
              >
                {level.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-[#FF6B6B] text-white text-xs font-black rounded-full tracking-wider whitespace-nowrap">
                      {level.badge}
                    </span>
                  </div>
                )}
                <div className="text-center mb-5">
                  <span className="text-3xl mb-2 block">{level.icon}</span>
                  <h3 className="font-black text-sm tracking-wide mb-1" style={{ color: level.color }}>
                    {level.name}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3 leading-relaxed">{level.desc}</p>
                  <span className="inline-block px-2 py-0.5 bg-[#FF6B6B]/15 text-[#FF6B6B] text-xs font-semibold rounded mb-2">
                    Precio lanzamiento
                  </span>
                  <div className="flex items-center justify-center gap-2 mb-0.5">
                    <span className="text-sm text-gray-500 line-through">{level.originalPrice}</span>
                  </div>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-3xl font-black text-white">{level.price}</span>
                    <span className="text-gray-400 text-xs mb-1">{level.unit}</span>
                  </div>
                </div>
                <Link
                  href={level.href}
                  className="block w-full py-2.5 rounded-xl font-bold text-xs text-center transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: level.badge ? level.color : 'transparent',
                    color: level.badge ? '#fff' : level.color,
                    border: `2px solid ${level.color}`,
                  }}
                >
                  {level.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm min-w-[760px] border-collapse">
              <thead>
                <tr className="bg-[#0a0e1a]">
                  <th className="text-left px-5 py-5 text-gray-400 font-medium w-[26%] border-b border-white/10">
                    Características
                  </th>
                  {homeTableHeaders.map(({ label, color, price, original }) => (
                    <th key={label} className="px-3 py-5 text-center border-b border-white/10">
                      <span className="block font-black text-sm" style={{ color }}>{label}</span>
                      <span className="block text-xs text-gray-500 line-through font-normal mt-0.5">{original}</span>
                      <span className="block text-xs font-bold mt-0.5" style={{ color }}>{price}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {homeComparisonRows.map(({ feature, basico, plus, graba, crea, domina }, i) => (
                  <tr
                    key={feature}
                    className={`border-b border-white/5 transition-colors hover:bg-white/[0.03] ${
                      i % 2 === 0 ? 'bg-white/[0.015]' : 'bg-transparent'
                    }`}
                  >
                    <td className="px-5 py-4 text-gray-300 text-sm">{feature}</td>
                    {([basico, plus, graba, crea, domina] as (boolean | string)[]).map((val, j) => (
                      <td key={j} className="px-3 py-4 text-center align-middle">
                        {typeof val === 'boolean' ? (
                          <span className="flex justify-center items-center">
                            {val ? (
                              <span className="inline-flex w-6 h-6 rounded-full bg-[#00D68F]/15 items-center justify-center">
                                <svg className="w-3.5 h-3.5 text-[#00D68F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                            ) : (
                              <span className="inline-flex w-6 h-6 rounded-full bg-white/5 items-center justify-center">
                                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </span>
                            )}
                          </span>
                        ) : (
                          <span className="text-gray-300 text-xs font-medium">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-[#0a0e1a]">
                  <td className="px-5 py-5 font-bold text-white text-sm">Precio +IVA</td>
                  {homeTableHeaders.map(({ price, original, color }) => (
                    <td key={price} className="px-3 py-5 text-center">
                      <span className="block text-xs text-gray-500 line-through">{original}</span>
                      <span className="font-black text-sm" style={{ color }}>{price}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </section>
      </FadeIn>

      {/* GALLERY */}
      <FadeIn>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 tracking-tight">El estudio</h2>
            <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
              Tecnología de primer nivel en el corazón de Alicante.
            </p>
            <div className="gallery-placeholder relative rounded-2xl overflow-hidden border border-[#2979FF]/15 aspect-[16/9] sm:aspect-[16/7] flex items-center justify-center">
              <div className="text-center px-4">
                <span className="block text-5xl sm:text-6xl mb-3" aria-hidden="true">📸</span>
                <p className="text-white/90 font-bold text-lg sm:text-xl tracking-wide">Fotos próximamente</p>
                <p className="text-white/50 text-sm mt-1">Estamos preparando una nueva sesión del estudio.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/estudio"
                className="inline-flex items-center gap-2 text-[#2979FF] hover:text-white font-semibold transition-colors duration-300"
              >
                Ver el estudio completo →
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ECOSYSTEM */}
      <FadeIn>
        <section className="py-20 px-4 bg-[#0a0e1a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">El ecosistema VOCAI</h2>
          <p className="text-gray-400 mb-16 max-w-xl mx-auto">
            Cada servicio está diseñado para conectarse con el siguiente. Empieza donde quieras.
          </p>

          {/* Ecosystem visual */}
          <div className="relative">
            {/* Center */}
            <div className="flex justify-center mb-8">
              <div className="w-28 h-28 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-[#2979FF]/30">
                <span className="text-white font-black text-xl">VOCAI</span>
              </div>
            </div>
            {/* Surrounding nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: '🎙️', label: 'Estudio' },
                { icon: '📦', label: 'Contenido' },
                { icon: '🤖', label: 'IA' },
                { icon: '📈', label: 'Crecimiento' },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="bg-[#0f1629] rounded-xl p-5 border border-[#2979FF]/15 hover:border-[#2979FF]/45 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2979FF]/15 transition-all duration-300"
                >
                  <span className="text-2xl block mb-2">{icon}</span>
                  <span className="text-white text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-12 text-lg text-gray-300 font-medium max-w-2xl mx-auto">
            "Cada servicio de VOCAI está diseñado para que crezcas. Empieza donde quieras. Llega donde mereces."
          </p>
        </div>
        </section>
      </FadeIn>

      {/* TESTIMONIALS */}
      <FadeIn>
        <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 tracking-tight">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-400 text-center mb-12">Resultados reales de negocios reales.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, company, text }) => (
              <div
                key={name}
                className="bg-[#0f1629] rounded-2xl p-8 border border-[#2979FF]/15 hover:border-[#2979FF]/45 hover:shadow-xl hover:shadow-[#2979FF]/15 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* REEMPLAZAR con foto real: <Image src="/images/testimonial-X.jpg" ... /> */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2979FF] to-[#FF6B6B] flex items-center justify-center text-white font-bold text-lg mb-4">
                  {name[0]}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-gray-500 text-xs">{company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </FadeIn>

      {/* FINAL CTA */}
      <FadeIn>
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center rounded-3xl gradient-bg p-12 shadow-2xl shadow-[#2979FF]/20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              ¿Listo para que tu negocio tenga voz?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Cuéntanos tu idea. La primera consulta es gratuita.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20los%20servicios%20de%20VOCAI`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-[#2979FF] font-black rounded-xl hover:scale-105 transition-all duration-300 text-lg shadow-lg hover:shadow-2xl"
            >
              Hablemos →
            </a>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
