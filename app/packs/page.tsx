import type { Metadata } from 'next'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'

export const metadata: Metadata = {
  title: 'Packs de Contenido y Marketing | VOCAI',
  description:
    'Elige tu pack: GRABA (350€/mes), CREA (850€/mes) o DOMINA (1.400€/mes). Podcast, reels, redes sociales e IA para tu negocio en Alicante.',
  openGraph: {
    title: 'Packs de Contenido y Marketing | VOCAI',
    description: 'Desde 350€/mes: estudio, técnico, reels, marca personal y automatizaciones IA.',
    url: 'https://vocai.es/packs',
  },
  alternates: { canonical: 'https://vocai.es/packs' },
}

const packs = [
  {
    name: 'GRABA',
    icon: '📦',
    price: '350',
    badge: null,
    tagline: 'Empieza a grabar contenido profesional',
    features: [
      '4 horas de estudio al mes',
      'Técnico en sala incluido',
      '6 reels editados/mes',
      'Entrega por Drive/WeTransfer',
      'Soporte por WhatsApp',
    ],
    color: '#2979FF',
  },
  {
    name: 'CREA',
    icon: '🚀',
    price: '850',
    badge: 'MÁS POPULAR',
    tagline: 'Tu marca personal en piloto automático',
    features: [
      'Todo lo del pack GRABA',
      'Guion de contenido mensual',
      'Gestión de redes sociales',
      'Estrategia de marca personal',
      'Asesoramiento IA mensual',
      '12 reels editados/mes',
      'Informe de resultados mensual',
    ],
    color: '#FF6B6B',
  },
  {
    name: 'DOMINA',
    icon: '👑',
    price: '1.400',
    badge: null,
    tagline: 'El ecosistema completo para crecer',
    features: [
      'Todo lo del pack CREA',
      'CRM configurado y gestionado',
      'Automatizaciones de negocio',
      'Meta Ads gestionadas',
      'Dashboard de métricas',
      'Sesión estratégica mensual',
      'Soporte prioritario 24/7',
    ],
    color: '#FFB020',
  },
]

const comparisonRows = [
  { feature: 'Horas de estudio/mes', graba: '4h', crea: '8h', domina: '12h' },
  { feature: 'Técnico en sala', graba: true, crea: true, domina: true },
  { feature: 'Reels editados/mes', graba: '6', crea: '12', domina: '20' },
  { feature: 'Guion de contenido', graba: false, crea: true, domina: true },
  { feature: 'Gestión de redes', graba: false, crea: true, domina: true },
  { feature: 'Estrategia de marca', graba: false, crea: true, domina: true },
  { feature: 'Asesoramiento IA', graba: false, crea: true, domina: true },
  { feature: 'CRM gestionado', graba: false, crea: false, domina: true },
  { feature: 'Automatizaciones', graba: false, crea: false, domina: true },
  { feature: 'Meta Ads gestionadas', graba: false, crea: false, domina: true },
  { feature: 'Dashboard métricas', graba: false, crea: false, domina: true },
  { feature: 'Informe mensual', graba: false, crea: true, domina: true },
  { feature: 'Sesión estratégica', graba: false, crea: false, domina: true },
  { feature: 'Soporte', graba: 'WhatsApp', crea: 'WhatsApp', domina: 'Prioritario 24/7' },
]

const faqs = [
  {
    q: '¿Hay permanencia?',
    a: 'No. Puedes cancelar o cambiar de pack en cualquier momento con 15 días de preaviso. Sin compromisos.',
  },
  {
    q: '¿Puedo empezar por el pack GRABA y subir después?',
    a: 'Sí, y es lo que recomendamos. Empieza por donde te sientas cómodo y escala cuando estés listo.',
  },
  {
    q: '¿Los precios incluyen IVA?',
    a: 'No, los precios indicados son +IVA. Te facturamos mensualmente con todos los detalles.',
  },
  {
    q: '¿Qué pasa con el contenido que grabamos? ¿Es mío?',
    a: 'Sí, todo el contenido que generamos es 100% tuyo. Recibes los archivos originales sin marca de agua.',
  },
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#00D68F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function PacksPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Elige tu nivel.{' '}
            <span className="gradient-text">Crece a tu ritmo.</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Tres packs diseñados para que empieces hoy y escales cuando estés listo. Sin permanencia.
          </p>
        </div>
      </section>

      {/* PACK CARDS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packs.map((pack) => (
            <div
              key={pack.name}
              className={`relative bg-[#111827] rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                pack.badge
                  ? 'border-[#FF6B6B]/60 shadow-xl shadow-[#FF6B6B]/10'
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              {pack.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-[#FF6B6B] text-white text-xs font-black rounded-full tracking-wider">
                    {pack.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <span className="text-4xl mb-3 block">{pack.icon}</span>
                <h2
                  className="text-xl font-black tracking-wide mb-1"
                  style={{ color: pack.color }}
                >
                  {pack.name}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{pack.tagline}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-black text-white">{pack.price}€</span>
                  <span className="text-gray-400 text-sm mb-1">/mes +IVA</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pack.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20m%C3%A1s%20info%20sobre%20el%20pack%20${encodeURIComponent(pack.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl font-bold text-sm text-center transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: pack.badge ? pack.color : 'transparent',
                  color: pack.badge ? '#fff' : pack.color,
                  border: `2px solid ${pack.color}`,
                }}
              >
                Empezar con {pack.name} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-4 bg-[#111827]/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Comparativa completa</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm min-w-[520px] border-collapse">
              {/* Header */}
              <thead>
                <tr className="bg-[#0a0e1a]">
                  <th className="text-left px-6 py-5 text-gray-400 font-medium w-1/2 border-b border-white/10">
                    Características
                  </th>
                  {[
                    { label: 'GRABA', color: '#2979FF', price: '350€' },
                    { label: 'CREA', color: '#FF6B6B', price: '850€' },
                    { label: 'DOMINA', color: '#FFB020', price: '1.400€' },
                  ].map(({ label, color, price }) => (
                    <th key={label} className="px-4 py-5 text-center border-b border-white/10 w-[16%]">
                      <span className="block font-black text-base" style={{ color }}>{label}</span>
                      <span className="block text-xs text-gray-500 font-normal mt-0.5">{price}/mes</span>
                    </th>
                  ))}
                </tr>
              </thead>
              {/* Body */}
              <tbody>
                {comparisonRows.map(({ feature, graba, crea, domina }, i) => (
                  <tr
                    key={feature}
                    className={`border-b border-white/5 transition-colors hover:bg-white/[0.03] ${
                      i % 2 === 0 ? 'bg-white/[0.015]' : 'bg-transparent'
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-300 text-sm">{feature}</td>
                    {([graba, crea, domina] as (boolean | string)[]).map((val, j) => (
                      <td key={j} className="px-4 py-4 text-center align-middle">
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
                  <td className="px-6 py-5 font-bold text-white text-sm">Precio/mes +IVA</td>
                  {[
                    { price: '350€', color: '#2979FF' },
                    { price: '850€', color: '#FF6B6B' },
                    { price: '1.400€', color: '#FFB020' },
                  ].map(({ price, color }) => (
                    <td key={price} className="px-4 py-5 text-center">
                      <span className="font-black text-base" style={{ color }}>{price}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-[#111827] rounded-xl p-6 border border-white/5">
                <h3 className="text-white font-bold mb-2">{q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">¿No sabes qué pack elegir?</h2>
          <p className="text-gray-400 mb-8">
            Cuéntanos tu situación y te recomendamos el pack perfecto para ti. Sin compromiso.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20no%20s%C3%A9%20qu%C3%A9%20pack%20es%20el%20mejor%20para%20m%C3%AD%2C%20%C2%BFme%20ayud%C3%A1is%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#2979FF] hover:bg-[#1a6aff] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Pídenos recomendación →
          </a>
        </div>
      </section>
    </>
  )
}
