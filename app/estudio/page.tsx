import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'

export const metadata: Metadata = {
  title: 'Estudio de Podcast en Alicante | VOCAI',
  description:
    'Graba podcast, vídeo y contenido profesional en nuestro estudio en Alicante. Técnico incluido desde 90€/hora. Vídeo 4K multicámara, audio broadcast.',
  openGraph: {
    title: 'Estudio de Podcast en Alicante | VOCAI',
    description: 'Graba con calidad de primer nivel. Técnico incluido desde 90€/hora.',
    url: 'https://vocai.es/estudio',
  },
  alternates: { canonical: 'https://vocai.es/estudio' },
}

const features = [
  { icon: '📹', text: 'Vídeo multicámara 4K' },
  { icon: '🎤', text: 'Audio profesional broadcast' },
  { icon: '💡', text: 'Iluminación de estudio' },
  { icon: '🎨', text: 'Set configurable' },
  { icon: '👨‍💻', text: 'Técnico en sala incluido' },
  { icon: '☁️', text: 'Entrega por Drive / WeTransfer' },
]

const profiles = [
  { num: '01', title: 'Empresas y pymes', text: 'Crea contenido de marca que genera confianza y cierra ventas.' },
  { num: '02', title: 'Podcasters', text: 'Graba tu podcast con calidad profesional sin invertir en equipo propio.' },
  { num: '03', title: 'Profesionales y consultores', text: 'Posicionate como referente con vídeo y audio de primer nivel.' },
  { num: '04', title: 'Agencias y productoras', text: 'Alquila el estudio para tus producciones. Técnico incluido.' },
]

export default function EstudioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end pt-32 pb-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(41,121,255,0.18) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 80% 80%, rgba(255,107,107,0.14) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <span className="inline-block px-3 py-1 bg-[#2979FF]/10 border border-[#2979FF]/30 rounded-full text-[#2979FF] text-[10px] font-bold uppercase tracking-widest mb-6">
            📍 Camino del Faro 37, Cabo las Huertas, Alicante
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.0] max-w-5xl">
            Estudio de podcast y contenido{' '}
            <span className="gradient-text">profesional en Alicante.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Grabá lo que quieras con calidad de primer nivel. Técnico en sala incluido.{' '}
            <span className="line-through text-slate-600">120€/h</span>{' '}
            <span className="text-white font-semibold">90€/h</span>{' '}
            <span className="text-[#FF6B6B] text-sm font-semibold">(precio lanzamiento)</span>
          </p>
          <div className="mt-10">
            <a
              href="https://cal.com/vocai/vocai-estudio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block px-10 py-4 rounded-full font-bold text-base uppercase tracking-widest"
            >
              Reservar ahora →
            </a>
          </div>
        </div>
      </section>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* PRICE HIGHLIGHT */}
      <FadeIn>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto card-premium rounded-3xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div>
              <span className="inline-block px-2 py-0.5 bg-[#FF6B6B]/15 text-[#FF6B6B] text-[10px] font-bold rounded uppercase tracking-widest mb-3">
                Lanzamiento
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-slate-500 line-through">120€/h</span>
                <span className="text-6xl font-black text-[#2979FF]">90€</span>
                <span className="text-slate-400 text-sm">+IVA / hora</span>
              </div>
            </div>
            <ul className="text-slate-300 font-light space-y-1">
              <li>✅ Mínimo 1 hora</li>
              <li>✅ Sin permanencia</li>
            </ul>
            <ul className="text-slate-300 font-light space-y-1">
              <li>✅ Técnico incluido</li>
              <li>✅ Entrega inmediata</li>
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* WHAT'S INCLUDED */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase tracking-widest text-[#2979FF] font-bold">¿Qué incluye?</span>
                <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                  Todo listo para que aparezcas tú.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 self-end">
                <p className="text-xl text-slate-400 font-light leading-relaxed">
                  Tecnología broadcast, set configurable y un equipo que te acompaña desde que entrás hasta que publicás.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ icon, text }) => (
                <div key={text} className="card-premium rounded-3xl p-8 flex items-center gap-5">
                  <span className="text-3xl flex-shrink-0">{icon}</span>
                  <span className="text-white font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* GALLERY */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#FF6B6B] font-bold">El estudio</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Diseñado para que la cámara te quiera.
              </h2>
            </div>
            <div
              className="relative rounded-3xl overflow-hidden border border-white/5 aspect-[16/9] flex items-center justify-center"
              style={{
                background:
                  'linear-gradient(135deg, #0d1b3e 0%, #0f1629 50%, #1a0e1a 100%)',
              }}
            >
              <div className="text-center px-6">
                <span className="block text-6xl mb-3" aria-hidden="true">📸</span>
                <p className="text-white/90 font-bold text-xl tracking-wide">Fotos próximamente</p>
                <p className="text-slate-400 text-sm mt-1 font-light">Estamos preparando una nueva sesión del estudio.</p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* FOR WHOM */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#FFB020] font-bold">Para quién es</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Si tenés algo que decir, este es tu sitio.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {profiles.map(({ num, title, text }) => (
                <div key={num} className="card-premium rounded-3xl p-8">
                  <span className="deco-number block mb-5">{num}</span>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* UPSELL */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-6xl mx-auto card-premium rounded-[2.5rem] p-12 md:p-16">
            <span className="inline-block px-3 py-1 bg-[#FFB020]/15 text-[#FFB020] rounded-full text-[10px] font-bold uppercase tracking-widest mb-5">
              ¿Querés más?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] max-w-3xl">
              Combiná el estudio con el Pack GRABA.
            </h2>
            <p className="mt-6 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              <span className="line-through text-slate-600">550€/mes</span>{' '}
              → desde <span className="text-white font-semibold">350€/mes</span> tenés estudio + técnico + 6 reels editados al mes.{' '}
              <span className="text-[#FF6B6B] text-sm font-semibold">Precio lanzamiento.</span>
            </p>
            <div className="mt-10">
              <Link
                href="/packs"
                className="btn-primary inline-block px-10 py-4 rounded-full font-bold text-base uppercase tracking-widest"
              >
                Ver Pack GRABA →
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* FINAL CTA */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              ¿Cuándo grabamos?
            </h2>
            <p className="mt-6 text-xl text-slate-400 font-light leading-relaxed">
              Decinos qué querés grabar y te hacemos un presupuesto personalizado en menos de 24 horas.
            </p>
            <div className="mt-10">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20consultar%20disponibilidad%20del%20estudio`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral inline-block px-10 py-4 rounded-full font-bold text-base uppercase tracking-widest"
              >
                Reservar por WhatsApp →
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
