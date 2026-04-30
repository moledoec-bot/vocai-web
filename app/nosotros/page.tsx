import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'

export const metadata: Metadata = {
  title: 'Nosotros — Quiénes somos | VOCAI',
  description:
    'Somos el estudio de podcast y IA de Alicante. Conoce el equipo, la historia y los valores de VOCAI.',
  openGraph: {
    title: 'Nosotros — Quiénes somos | VOCAI',
    description: 'Estudio de podcast, marketing digital e IA en Cabo las Huertas, Alicante.',
    url: 'https://vocai.es/nosotros',
  },
  alternates: { canonical: 'https://vocai.es/nosotros' },
}

const values = [
  { num: '01', title: 'Cercanía', desc: 'Tratamos a cada cliente como un socio. Estamos disponibles, somos directos y nunca dejamos una duda sin respuesta.' },
  { num: '02', title: 'Agilidad', desc: 'Ejecutamos rápido. De la idea al primer episodio publicado en menos de una semana.' },
  { num: '03', title: 'Resultados', desc: 'Todo lo que hacemos tiene un objetivo medible. Si no genera resultados, lo cambiamos.' },
  { num: '04', title: 'Tecnología accesible', desc: 'Hacemos la IA sencilla. No necesitas entender cómo funciona, solo ver cómo te ayuda.' },
  { num: '05', title: 'Crecimiento conjunto', desc: 'Crecemos cuando nuestros clientes crecen. Eso alinea nuestros intereses desde el primer día.' },
]

export default function NosotrosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end pt-32 pb-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 70% 30%, rgba(41,121,255,0.18) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255,107,107,0.14) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <span className="inline-block px-3 py-1 bg-[#2979FF]/10 border border-[#2979FF]/30 rounded-full text-[#2979FF] text-[10px] font-bold uppercase tracking-widest mb-6">
            📍 Camino del Faro 37, Cabo las Huertas, Alicante
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.0] max-w-5xl">
            Somos <span className="gradient-text">VOCAI.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Un equipo que cree que cualquier negocio merece comunicarse con la misma calidad que las grandes marcas — y la tecnología para hacerlo ya existe.
          </p>
        </div>
      </section>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* TEAM PHOTO */}
      <FadeIn>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div
              className="w-full aspect-[16/9] rounded-3xl border border-white/5 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #0d1b3e 0%, #0f1629 50%, #1a0e1a 100%)',
              }}
            >
              <div className="text-center px-6">
                <span className="block text-6xl mb-3" aria-hidden="true">📸</span>
                <p className="text-white/90 font-bold text-xl tracking-wide">Foto del equipo próximamente</p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* STORY */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-[#FF6B6B] font-bold">Nuestra historia</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
                De la frustración al estudio.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-slate-300 font-light leading-[1.85] text-lg">
              <p>
                VOCAI nació de una pregunta simple: <strong className="text-white font-semibold">¿por qué las pymes en Alicante no tienen acceso a la misma calidad de comunicación que las grandes empresas?</strong>
              </p>
              <p>
                Vimos cómo negocios increíbles perdían clientes frente a competidores con menos producto pero mejor presencia. La diferencia no era el talento — era la comunicación.
              </p>
              <p>
                Decidimos construir el estudio que nos hubiera gustado tener: tecnología de primer nivel, un equipo que entiende de negocio y la inteligencia artificial como aliada para hacer más con menos.
              </p>
              <p>
                Hoy ayudamos a empresas y profesionales de toda la provincia a <strong className="text-white font-semibold">grabarse, publicarse y automatizarse</strong> — sin que tengan que convertirse en expertos en tecnología para hacerlo.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* VALUES */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#FFB020] font-bold">Valores</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Lo que nos guía en cada decisión.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map(({ num, title, desc }) => (
                <div key={num} className="card-premium rounded-3xl p-8">
                  <span className="deco-number block mb-5">{num}</span>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* LOCATION */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-[#2979FF] font-bold">Dónde estamos</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Cabo las Huertas, Alicante.
              </h2>
              <p className="mt-6 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
                📍 Camino del Faro 37, frente al mar.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/5 h-[420px]">
              <iframe
                src="https://maps.google.com/maps?q=Camino+del+Faro+37,+Cabo+las+Huertas,+Alicante+03540&output=embed&hl=es&z=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación VOCAI — Cabo las Huertas, Alicante"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              ¿Hablamos?
            </h2>
            <p className="mt-6 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              Contanos tu proyecto. Siempre respondemos en menos de 24 horas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20VOCAI`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block px-10 py-4 rounded-full font-bold text-base uppercase tracking-widest"
              >
                Escribinos →
              </a>
              <Link
                href="/contacto"
                className="btn-coral inline-block px-10 py-4 rounded-full font-bold text-base uppercase tracking-widest text-center"
              >
                Ver contacto
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
