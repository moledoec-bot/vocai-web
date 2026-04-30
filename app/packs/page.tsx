import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'

export const metadata: Metadata = {
  title: 'Packs de Contenido y Marketing | VOCAI',
  description:
    'Elige tu pack: BÁSICO (90€/h), PLUS (190€), PACK GRABA (349€/mes), PACK CREA (850€/mes) o PACK DOMINA (1.400€/mes). Podcast, reels y marketing en Alicante.',
  openGraph: {
    title: 'Packs de Contenido y Marketing | VOCAI',
    description: 'Desde 90€/hora: estudio profesional, reels, marca personal y automatizaciones IA.',
    url: 'https://vocai.es/packs',
  },
  alternates: { canonical: 'https://vocai.es/packs' },
}

type Pack = {
  name: string
  icon: string
  tagline: string
  contentBadges: string[]
  popularBadge: string | null
  originalPrice: string
  price: string
  priceUnit: string
  features: string[]
  color: string
}

const packs: Pack[] = [
  {
    name: 'BÁSICO',
    icon: '🎙️',
    tagline: 'Graba contenido profesional en nuestro estudio',
    contentBadges: ['CRUDO · SIN EDITAR'],
    popularBadge: null,
    originalPrice: '120€/hora',
    price: '90€',
    priceUnit: '/hora +IVA',
    features: [
      'Grabación en estudio profesional',
      'Entrega al momento',
    ],
    color: '#2979FF',
  },
  {
    name: 'PLUS',
    icon: '⚡',
    tagline: 'Tu contenido grabado y editado, listo para publicar',
    contentBadges: ['CON EDICIÓN'],
    popularBadge: null,
    originalPrice: '249€',
    price: '190€',
    priceUnit: '+IVA',
    features: [
      'Grabación en estudio profesional',
      '1 hora de grabación',
      '3 reels editados',
      'Audio y multicámara ×3',
      'Entrega en 48/72hs',
    ],
    color: '#00D68F',
  },
  {
    name: 'PACK GRABA',
    icon: '📦',
    tagline: 'Contenido recurrente para tu marca',
    contentBadges: ['CON EDICIÓN'],
    popularBadge: null,
    originalPrice: '549€/mes',
    price: '349€',
    priceUnit: '/mes +IVA',
    features: [
      'Grabación en estudio profesional',
      '3 horas de grabación',
      '6 reels editados',
      'Audio y multicámara ×3',
      'Entrega en 48/72hs',
    ],
    color: '#9B59B6',
  },
  {
    name: 'PACK CREA',
    icon: '🚀',
    tagline: 'Tu marca personal en piloto automático',
    contentBadges: ['CON EDICIÓN', 'MARKETING & IA PARA TU NEGOCIO'],
    popularBadge: 'MÁS POPULAR',
    originalPrice: '1.300€/mes',
    price: '850€',
    priceUnit: '/mes +IVA',
    features: [
      'Grabación en estudio profesional',
      '6 horas de grabación',
      '8 reels editados',
      'Audio y multicámara ×3',
      'Gestión de redes sociales',
      'Sitio web con posicionamiento SEO',
      'Asistente digital IA diario',
      'Consultoría para automatizar tu negocio',
    ],
    color: '#FF6B6B',
  },
  {
    name: 'PACK DOMINA',
    icon: '👑',
    tagline: 'El ecosistema completo para crecer',
    contentBadges: ['CON EDICIÓN', 'MARKETING & IA PARA TU NEGOCIO', 'SERVICIO FULL · TODO INCLUIDO'],
    popularBadge: null,
    originalPrice: '3.000€/mes',
    price: '1.400€',
    priceUnit: '/mes +IVA',
    features: [
      'Grabación en estudio profesional',
      '6 horas de grabación',
      '12 reels editados',
      'Audio y multicámara ×3',
      'Gestión de redes sociales',
      'Sitio web con posicionamiento SEO',
      'Asistente digital IA diario',
      'Consultoría para automatizar tu negocio',
      'Automatizaciones',
      'Embudos de venta',
      'CRM',
      'Meta Ads gestionadas',
    ],
    color: '#FFB020',
  },
]

const comparisonRows: {
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
  { feature: 'Consultoría automatización', basico: false, plus: false, graba: false, crea: true, domina: true },
  { feature: 'Automatizaciones', basico: false, plus: false, graba: false, crea: false, domina: true },
  { feature: 'Embudos de venta', basico: false, plus: false, graba: false, crea: false, domina: true },
  { feature: 'CRM', basico: false, plus: false, graba: false, crea: false, domina: true },
  { feature: 'Meta Ads gestionadas', basico: false, plus: false, graba: false, crea: false, domina: true },
]

const tableHeaders = [
  { label: 'BÁSICO', color: '#2979FF', price: '90€/h', original: '120€/h' },
  { label: 'PLUS', color: '#00D68F', price: '190€', original: '249€' },
  { label: 'GRABA', color: '#9B59B6', price: '349€/mes', original: '549€/mes' },
  { label: 'CREA', color: '#FF6B6B', price: '850€/mes', original: '1.300€/mes' },
  { label: 'DOMINA', color: '#FFB020', price: '1.400€/mes', original: '3.000€/mes' },
]

const faqs = [
  {
    q: '¿Hay permanencia?',
    a: 'No. Puedes cancelar o cambiar de pack en cualquier momento con 15 días de preaviso. Sin compromisos.',
  },
  {
    q: '¿Puedo empezar por el BÁSICO y subir después?',
    a: 'Sí, y es lo que recomendamos. Empieza por donde te sientas cómodo y escala cuando estés listo.',
  },
  {
    q: '¿Los precios incluyen IVA?',
    a: 'No, los precios indicados son +IVA. Te facturamos con todos los detalles.',
  },
  {
    q: '¿Qué pasa con el contenido que grabamos? ¿Es mío?',
    a: 'Sí, todo el contenido que generamos es 100% tuyo. Recibes los archivos originales sin marca de agua.',
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#00D68F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function PacksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-12 px-4 text-center section-glow-blue">
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-[1.05] tracking-tight">
            Elige tu nivel.{' '}
            <span className="gradient-text">Crece a tu ritmo.</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl">
            Cinco packs diseñados para que empieces hoy y escales cuando estés listo. Sin permanencia.
          </p>
        </div>
      </section>

      {/* PACK CARDS */}
      <FadeIn>
        <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-start">
          {packs.map((pack) => (
            <div
              key={pack.name}
              className={`shimmer-card relative bg-[#0f1629] rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-1.5 ${
                pack.popularBadge
                  ? 'border-[#FF6B6B]/60 shadow-xl shadow-[#FF6B6B]/15 hover:shadow-2xl hover:shadow-[#FF6B6B]/25'
                  : 'border-[#2979FF]/15 hover:border-[#2979FF]/45 hover:shadow-xl hover:shadow-[#2979FF]/15'
              }`}
            >
              {pack.popularBadge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-[#FF6B6B] text-white text-xs font-black rounded-full tracking-wider whitespace-nowrap">
                    {pack.popularBadge}
                  </span>
                </div>
              )}

              <div className="text-center mb-5">
                <span className="text-4xl mb-3 block">{pack.icon}</span>
                <h2
                  className="text-base font-black tracking-wide mb-1"
                  style={{ color: pack.color }}
                >
                  {pack.name}
                </h2>
                <p className="text-gray-400 text-xs mb-3 leading-relaxed">{pack.tagline}</p>

                {/* Content type badges */}
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  {pack.contentBadges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-block px-2 py-0.5 bg-white/5 text-gray-400 text-[10px] font-semibold rounded border border-white/10 leading-tight"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Launch price badge */}
                <span className="inline-block px-2 py-0.5 bg-[#FF6B6B]/15 text-[#FF6B6B] text-xs font-semibold rounded mb-2">
                  Precio lanzamiento
                </span>

                <div className="flex items-center justify-center mb-1">
                  <span className="text-sm text-gray-500 line-through">{pack.originalPrice}</span>
                </div>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-black text-white">{pack.price}</span>
                  <span className="text-gray-400 text-sm mb-1">{pack.priceUnit}</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {pack.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={
                  pack.name === 'BÁSICO'
                    ? 'https://cal.com/vocai/vocai-estudio'
                    : `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20m%C3%A1s%20info%20sobre%20el%20${encodeURIComponent(pack.name)}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2.5 rounded-xl font-bold text-sm text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: pack.popularBadge ? pack.color : 'transparent',
                  color: pack.popularBadge ? '#fff' : pack.color,
                  border: `2px solid ${pack.color}`,
                }}
              >
                {pack.name === 'BÁSICO' ? 'Reservar ahora →' : 'Más información →'}
              </a>
            </div>
          ))}
        </div>
        </section>
      </FadeIn>

      {/* COMPARISON TABLE */}
      <FadeIn>
        <section className="py-20 px-4 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-12 tracking-tight">Comparativa completa</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm min-w-[760px] border-collapse">
              <thead>
                <tr className="bg-[#0a0e1a]">
                  <th className="text-left px-5 py-5 text-gray-400 font-medium w-[26%] border-b border-white/10">
                    Características
                  </th>
                  {tableHeaders.map(({ label, color, price, original }) => (
                    <th key={label} className="px-3 py-5 text-center border-b border-white/10">
                      <span className="block font-black text-sm" style={{ color }}>{label}</span>
                      <span className="block text-xs text-gray-500 line-through font-normal mt-0.5">{original}</span>
                      <span className="block text-xs font-bold mt-0.5" style={{ color }}>{price}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(({ feature, basico, plus, graba, crea, domina }, i) => (
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
                {/* Price row */}
                <tr className="bg-[#0a0e1a]">
                  <td className="px-5 py-5 font-bold text-white text-sm">Precio +IVA</td>
                  {tableHeaders.map(({ price, original, color }) => (
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

      {/* FAQ */}
      <FadeIn>
        <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-12 tracking-tight">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="bg-[#0f1629] rounded-xl p-6 border border-[#2979FF]/15 hover:border-[#2979FF]/45 hover:shadow-lg hover:shadow-[#2979FF]/15 transition-all duration-300"
              >
                <h3 className="text-white font-bold mb-2">{q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">¿No sabes qué pack elegir?</h2>
          <p className="text-gray-400 mb-8">
            Cuéntanos tu situación y te recomendamos el pack perfecto para ti. Sin compromiso.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20no%20s%C3%A9%20qu%C3%A9%20pack%20es%20el%20mejor%20para%20m%C3%AD%2C%20%C2%BFme%20ayud%C3%A1is%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#2979FF] hover:bg-[#1a6aff] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#2979FF]/40 text-lg"
          >
            Pídenos recomendación →
          </a>
        </div>
        </section>
      </FadeIn>
    </>
  )
}
