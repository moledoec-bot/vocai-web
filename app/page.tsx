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
    num: '01',
    title: 'Estudio profesional propio',
    text: 'No subcontratamos. Tecnología broadcast, técnico en sala y un set diseñado para que tu marca se vea como las grandes. En el corazón de Alicante.',
  },
  {
    num: '02',
    title: 'Contenido que convierte',
    text: 'Del guion a la publicación. Tú apareces, nosotros nos ocupamos del resto. Reels, podcast y posts pensados para crecer, no para llenar.',
  },
  {
    num: '03',
    title: 'IA que hace crecer tu negocio',
    text: 'Asistentes de WhatsApp, automatizaciones reales y agentes a medida. Recuperás horas. Tu equipo se concentra en lo que de verdad importa.',
  },
]

const levels = [
  { icon: '🎙️', name: 'BÁSICO', desc: 'Graba en nuestro estudio profesional', originalPrice: '120€/hora', price: '90€', unit: '/hora +IVA', badge: null as string | null, color: '#2979FF', href: '/packs', cta: 'Más información →' },
  { icon: '⚡', name: 'PLUS', desc: 'Grabado y editado, listo para publicar', originalPrice: '249€', price: '190€', unit: '+IVA', badge: null as string | null, color: '#00D68F', href: '/packs', cta: 'Más información →' },
  { icon: '📦', name: 'PACK GRABA', desc: 'Contenido recurrente para tu marca', originalPrice: '549€/mes', price: '349€', unit: '/mes +IVA', badge: null as string | null, color: '#9B59B6', href: '/packs', cta: 'Más información →' },
  { icon: '🚀', name: 'PACK CREA', desc: 'Tu marca personal en piloto automático', originalPrice: '1.300€/mes', price: '850€', unit: '/mes +IVA', badge: 'MÁS POPULAR' as string | null, color: '#FF6B6B', href: '/packs', cta: 'Más información →' },
  { icon: '👑', name: 'PACK DOMINA', desc: 'El ecosistema completo para crecer', originalPrice: '3.000€/mes', price: '1.400€', unit: '/mes +IVA', badge: null as string | null, color: '#FFB020', href: '/packs', cta: 'Más información →' },
]

const homeComparisonRows: { feature: string; basico: boolean | string; plus: boolean | string; graba: boolean | string; crea: boolean | string; domina: boolean | string }[] = [
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

const services = [
  { icon: '🎙️', title: 'Estudio y grabación', text: 'Podcast, vídeo multicámara 4K y audio broadcast con técnico incluido.' },
  { icon: '📦', title: 'Contenido recurrente', text: 'Reels editados, episodios y publicaciones mensuales para no parar de crecer.' },
  { icon: '🤖', title: 'Inteligencia artificial', text: 'Agentes, asistentes WhatsApp y automatizaciones a medida.' },
  { icon: '📈', title: 'Marketing digital', text: 'SEO, redes sociales y Meta Ads gestionadas por nuestro equipo.' },
]

const testimonials = [
  { name: 'Carlos Martínez', company: 'Asesoría Martínez & Asociados', text: 'En 3 meses, mi podcast tiene 1.200 escuchas mensuales y mi cartera creció un 40%. VOCAI cambió cómo me ven mis clientes.' },
  { name: 'Ana López', company: 'Clínica Dental López', text: 'El asistente de WhatsApp con IA nos ahorra 3 horas diarias. Ahora atendemos leads mientras dormimos.' },
  { name: 'Roberto Sánchez', company: 'Inmobiliaria Costa Blanca', text: 'Los reels que produce VOCAI consiguen más engagement que todo lo que publicábamos antes. Vale cada euro.' },
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

      {/* VALUE PROPS — números grandes 01/02/03 */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#2979FF] font-bold">Por qué VOCAI</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
                Hacemos de tu negocio una marca que se ve, se escucha y se elige.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {valueProps.map(({ num, title, text }) => (
                <div key={num} className="card-premium rounded-3xl p-10">
                  <span className="deco-number block mb-6">{num}</span>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* SERVICIOS — grid izquierda */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase tracking-widest text-[#FF6B6B] font-bold">Servicios</span>
                <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                  Todo lo que necesita tu marca, bajo un mismo techo.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 self-end">
                <p className="text-xl text-slate-400 font-light leading-relaxed">
                  Empezás por donde quieras y vas escalando. Sin intermediarios, sin permanencia, sin sorpresas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map(({ icon, title, text }) => (
                <div key={title} className="card-premium rounded-3xl p-8 flex items-start gap-6">
                  <span className="text-4xl flex-shrink-0">{icon}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-slate-400 font-light leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* PRECIOS / NIVELES */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#FFB020] font-bold">Niveles</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
                Elegí el ritmo. Crecé sin permanencia.
              </h2>
              <p className="mt-6 text-xl text-slate-400 font-light leading-relaxed">
                Cinco packs pensados para empresas y profesionales en cualquier etapa. Precios especiales de lanzamiento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-20">
              {levels.map((level) => (
                <div
                  key={level.name}
                  className={`relative card-premium rounded-3xl p-6 ${
                    level.badge ? 'card-premium-coral' : ''
                  }`}
                  style={
                    level.badge
                      ? { borderColor: 'rgba(255,107,107,0.4)', boxShadow: '0 12px 40px -16px rgba(255,107,107,0.3)' }
                      : undefined
                  }
                >
                  {level.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 bg-[#FF6B6B] text-white text-[10px] font-black rounded-full tracking-widest whitespace-nowrap uppercase">
                        {level.badge}
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <span className="text-3xl mb-3 block">{level.icon}</span>
                    <h3 className="font-black text-sm tracking-widest mb-1 uppercase" style={{ color: level.color }}>
                      {level.name}
                    </h3>
                    <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">{level.desc}</p>
                    <span className="inline-block px-2 py-0.5 bg-[#FF6B6B]/15 text-[#FF6B6B] text-[10px] font-bold rounded uppercase tracking-wider mb-2">
                      Lanzamiento
                    </span>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm text-slate-500 line-through">{level.originalPrice}</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black text-white">{level.price}</span>
                      <span className="text-slate-400 text-xs mb-1">{level.unit}</span>
                    </div>
                  </div>
                  <Link
                    href={level.href}
                    className="block w-full py-2.5 rounded-full font-bold text-xs text-center transition-all duration-300 hover:scale-105 uppercase tracking-widest"
                    style={{
                      backgroundColor: level.badge ? level.color : 'transparent',
                      color: level.badge ? '#fff' : level.color,
                      border: `1.5px solid ${level.color}`,
                    }}
                  >
                    {level.cta}
                  </Link>
                </div>
              ))}
            </div>

            {/* Comparativa */}
            <div className="overflow-x-auto rounded-3xl border border-white/5">
              <table className="w-full text-sm min-w-[760px] border-collapse">
                <thead>
                  <tr className="bg-[#0f1629]">
                    <th className="text-left px-6 py-6 text-slate-400 font-medium uppercase text-xs tracking-widest w-[26%] border-b border-white/5">
                      Características
                    </th>
                    {homeTableHeaders.map(({ label, color, price, original }) => (
                      <th key={label} className="px-3 py-6 text-center border-b border-white/5">
                        <span className="block font-black text-sm uppercase tracking-widest" style={{ color }}>{label}</span>
                        <span className="block text-xs text-slate-500 line-through font-normal mt-1">{original}</span>
                        <span className="block text-xs font-bold mt-0.5" style={{ color }}>{price}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {homeComparisonRows.map(({ feature, basico, plus, graba, crea, domina }, i) => (
                    <tr
                      key={feature}
                      className={`border-b border-white/5 transition-colors hover:bg-white/[0.02] ${
                        i % 2 === 0 ? 'bg-white/[0.012]' : 'bg-transparent'
                      }`}
                    >
                      <td className="px-6 py-4 text-slate-300 text-sm font-light">{feature}</td>
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
                                  <svg className="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </span>
                              )}
                            </span>
                          ) : (
                            <span className="text-slate-300 text-xs font-medium">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-[#0f1629]">
                    <td className="px-6 py-5 font-bold text-white text-sm uppercase tracking-widest">Precio +IVA</td>
                    {homeTableHeaders.map(({ price, original, color }) => (
                      <td key={price} className="px-3 py-5 text-center">
                        <span className="block text-xs text-slate-500 line-through">{original}</span>
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

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* ESTUDIO */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-[#2979FF] font-bold">Nuestro estudio</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Un espacio para grabar lo que tu marca quiere decir.
              </h2>
              <p className="mt-6 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
                Vídeo multicámara 4K, audio broadcast, set configurable y técnico en sala. En Cabo las Huertas, Alicante. Listo desde 90€/hora.
              </p>
              <Link
                href="/estudio"
                className="mt-8 inline-flex items-center gap-2 text-[#2979FF] hover:text-white font-semibold uppercase tracking-widest text-xs transition-colors duration-300"
              >
                Ver el estudio →
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/5 aspect-square flex items-center justify-center bg-gradient-to-br from-[#0d1b3e] via-[#0f1629] to-[#1a0e1a]">
                <div className="text-center px-6">
                  <span className="block text-6xl mb-3" aria-hidden="true">📸</span>
                  <p className="text-white/90 font-bold text-lg tracking-wide">Fotos próximamente</p>
                  <p className="text-slate-400 text-sm mt-1 font-light">Nueva sesión del estudio en preparación.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* TESTIMONIOS */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#FFB020] font-bold">Lo que dicen</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Resultados reales, de negocios reales.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map(({ name, company, text }) => (
                <div key={name} className="card-premium rounded-3xl p-8 flex flex-col">
                  <p className="text-slate-300 leading-relaxed mb-6 font-light text-lg">&ldquo;{text}&rdquo;</p>
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2979FF] to-[#FF6B6B] flex items-center justify-center text-white font-bold text-sm">
                      {name[0]}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{name}</p>
                      <p className="text-slate-500 text-xs">{company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA FINAL — gradiente sutil */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20"
              style={{
                background:
                  'radial-gradient(ellipse 80% 90% at 30% 30%, rgba(41,121,255,0.18) 0%, transparent 60%), radial-gradient(ellipse 80% 90% at 80% 80%, rgba(255,107,107,0.15) 0%, transparent 60%), #0f1629',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                <div className="lg:col-span-8">
                  <span className="text-xs uppercase tracking-widest text-[#FF6B6B] font-bold">Empecemos</span>
                  <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                    ¿Listo para que tu negocio tenga voz?
                  </h2>
                  <p className="mt-6 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
                    Contanos tu idea. La primera consulta es gratuita y respondemos en menos de 24 horas.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20los%20servicios%20de%20VOCAI`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block px-10 py-4 rounded-full font-bold text-base uppercase tracking-widest"
                  >
                    Hablemos →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
