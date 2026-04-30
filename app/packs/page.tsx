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
    features: ['Grabación en estudio profesional', 'Entrega al momento'],
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
    features: ['Grabación en estudio profesional', '1 hora de grabación', '3 reels editados', 'Audio y multicámara ×3', 'Entrega en 48/72hs'],
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
    features: ['Grabación en estudio profesional', '3 horas de grabación', '6 reels editados', 'Audio y multicámara ×3', 'Entrega en 48/72hs'],
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
  { q: '¿Hay permanencia?', a: 'No. Puedes cancelar o cambiar de pack en cualquier momento con 15 días de preaviso. Sin compromisos.' },
  { q: '¿Puedo empezar por el BÁSICO y subir después?', a: 'Sí, y es lo que recomendamos. Empieza por donde te sientas cómodo y escala cuando estés listo.' },
  { q: '¿Los precios incluyen IVA?', a: 'No, los precios indicados son +IVA. Te facturamos con todos los detalles.' },
  { q: '¿Qué pasa con el contenido que grabamos? ¿Es mío?', a: 'Sí, todo el contenido que generamos es 100% tuyo. Recibes los archivos originales sin marca de agua.' },
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
      <section className="relative min-h-[60vh] flex items-end pt-32 pb-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 25% 30%, rgba(255,107,107,0.18) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 80% 80%, rgba(41,121,255,0.15) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <span className="text-xs uppercase tracking-widest text-[#FF6B6B] font-bold">Packs</span>
          <h1 className="mt-4 text-6xl md:text-8xl font-black tracking-tight leading-[1.0] max-w-5xl">
            Elegí tu nivel.{' '}
            <span className="gradient-text">Crecé a tu ritmo.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Cinco packs diseñados para empresas y profesionales. Empezás hoy, escalás cuando estés listo. Sin permanencia.
          </p>
        </div>
      </section>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* PACK CARDS */}
      <FadeIn>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-start">
            {packs.map((pack) => (
              <div
                key={pack.name}
                className={`relative card-premium rounded-3xl p-6 ${pack.popularBadge ? 'card-premium-coral' : ''}`}
                style={
                  pack.popularBadge
                    ? { borderColor: 'rgba(255,107,107,0.45)', boxShadow: '0 12px 40px -16px rgba(255,107,107,0.3)' }
                    : undefined
                }
              >
                {pack.popularBadge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-[#FF6B6B] text-white text-[10px] font-black rounded-full uppercase tracking-widest whitespace-nowrap">
                      {pack.popularBadge}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <span className="text-3xl mb-3 block">{pack.icon}</span>
                  <h2
                    className="text-sm font-black uppercase tracking-widest mb-1"
                    style={{ color: pack.color }}
                  >
                    {pack.name}
                  </h2>
                  <p className="text-slate-400 text-xs font-light leading-relaxed mb-3">{pack.tagline}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {pack.contentBadges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-block px-2 py-0.5 bg-white/5 text-slate-400 text-[10px] font-semibold rounded border border-white/10 leading-tight"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <span className="inline-block px-2 py-0.5 bg-[#FF6B6B]/15 text-[#FF6B6B] text-[10px] font-bold rounded uppercase tracking-widest mb-3">
                    Lanzamiento
                  </span>

                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm text-slate-500 line-through">{pack.originalPrice}</span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-white">{pack.price}</span>
                    <span className="text-slate-400 text-sm mb-1">{pack.priceUnit}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {pack.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-slate-300 font-light leading-relaxed">
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
                  className="block w-full py-2.5 rounded-full font-bold text-xs text-center transition-all duration-300 hover:scale-105 uppercase tracking-widest"
                  style={{
                    backgroundColor: pack.popularBadge ? pack.color : 'transparent',
                    color: pack.popularBadge ? '#fff' : pack.color,
                    border: `1.5px solid ${pack.color}`,
                  }}
                >
                  {pack.name === 'BÁSICO' ? 'Reservar ahora →' : 'Más información →'}
                </a>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* COMPARISON TABLE */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#2979FF] font-bold">Comparativa</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Mirá lo que incluye cada nivel.
              </h2>
            </div>
            <div className="overflow-x-auto rounded-3xl border border-white/5">
              <table className="w-full text-sm min-w-[760px] border-collapse">
                <thead>
                  <tr className="bg-[#0f1629]">
                    <th className="text-left px-6 py-6 text-slate-400 font-medium uppercase text-xs tracking-widest w-[26%] border-b border-white/5">
                      Características
                    </th>
                    {tableHeaders.map(({ label, color, price, original }) => (
                      <th key={label} className="px-3 py-6 text-center border-b border-white/5">
                        <span className="block font-black text-sm uppercase tracking-widest" style={{ color }}>{label}</span>
                        <span className="block text-xs text-slate-500 line-through font-normal mt-1">{original}</span>
                        <span className="block text-xs font-bold mt-0.5" style={{ color }}>{price}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(({ feature, basico, plus, graba, crea, domina }, i) => (
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
                    {tableHeaders.map(({ price, original, color }) => (
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

      {/* FAQ */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-[#FFB020] font-bold">FAQ</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Preguntas frecuentes.
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="card-premium rounded-3xl p-8">
                  <h3 className="text-white font-bold text-lg mb-2">{q}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              ¿No sabés qué pack elegir?
            </h2>
            <p className="mt-6 text-xl text-slate-400 font-light leading-relaxed">
              Contanos tu situación y te recomendamos el pack perfecto para vos. Sin compromiso.
            </p>
            <div className="mt-10">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20no%20s%C3%A9%20qu%C3%A9%20pack%20es%20el%20mejor%20para%20m%C3%AD%2C%20%C2%BFme%20ayud%C3%A1is%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block px-10 py-4 rounded-full font-bold text-base uppercase tracking-widest"
              >
                Pídenos recomendación →
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
