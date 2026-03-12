import type { Metadata } from 'next'
import Link from 'next/link'

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
  { icon: '💼', title: 'Empresas y pymes', text: 'Crea contenido de marca que genera confianza y cierra ventas.' },
  { icon: '🎤', title: 'Podcasters', text: 'Graba tu podcast con calidad profesional sin invertir en equipo propio.' },
  { icon: '👤', title: 'Profesionales y consultores', text: 'Posiciónate como referente en tu sector con vídeo y audio de primer nivel.' },
  { icon: '🏢', title: 'Agencias y productoras', text: 'Alquila nuestro estudio para tus producciones. Técnico incluido.' },
]

export default function EstudioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        {/* REEMPLAZAR con imagen real: <Image src="/images/estudio-hero.jpg" alt="Estudio VOCAI Alicante" fill className="object-cover" priority /> */}
        <div className="absolute inset-0 bg-[#1a1a2e]" />
        <div className="absolute inset-0 bg-[#0a0e1a]/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#2979FF]/20 border border-[#2979FF]/40 rounded-full text-[#2979FF] text-sm font-semibold mb-6">
            📍 Cabo las Huertas, Alicante
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            Estudio de Podcast y Contenido{' '}
            <span className="gradient-text">Profesional en Alicante</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Graba lo que quieras con calidad de primer nivel. Técnico incluido. Desde 90€/hora.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20reservar%20el%20estudio%20de%20VOCAI`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Reservar ahora →
          </a>
        </div>
      </section>

      {/* PRICE HIGHLIGHT */}
      <section className="py-12 px-4 bg-[#2979FF]/10 border-y border-[#2979FF]/20">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
          <div>
            <span className="text-5xl font-black text-[#2979FF]">90€</span>
            <span className="text-gray-400 ml-2">+IVA / hora</span>
          </div>
          <div className="h-12 w-px bg-white/10 hidden sm:block" />
          <div className="text-gray-300">
            <p>✅ Mínimo 1 hora</p>
            <p>✅ Sin permanencia</p>
          </div>
          <div className="h-12 w-px bg-white/10 hidden sm:block" />
          <div className="text-gray-300">
            <p>✅ Técnico incluido</p>
            <p>✅ Entrega inmediata del material</p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">¿Qué incluye?</h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Todo lo que necesitas para grabar contenido profesional, listo para publicar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon, text }) => (
              <div
                key={text}
                className="bg-[#111827] rounded-xl p-6 border border-white/5 hover:border-[#2979FF]/40 transition-all duration-300 flex items-center gap-4"
              >
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <span className="text-white font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-4 bg-[#111827]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">El estudio por dentro</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`bg-[#1a1a2e] rounded-xl border border-white/5 flex items-center justify-center text-gray-600 text-xs ${
                  i === 1 ? 'col-span-2 md:col-span-2 aspect-video' : 'aspect-square'
                }`}
              >
                {/* REEMPLAZAR con: <Image src={`/images/estudio-interior-${i}.jpg`} alt="Interior estudio VOCAI" fill className="object-cover rounded-xl" /> */}
                Foto interior estudio {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">¿Para quién es?</h2>
          <p className="text-gray-400 text-center mb-12">
            Si tienes algo que decir, este es tu sitio.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map(({ icon, title, text }) => (
              <div
                key={title}
                className="bg-[#111827] rounded-2xl p-6 border border-white/5 hover:border-[#2979FF]/40 transition-all duration-300"
              >
                <span className="text-3xl mb-3 block">{icon}</span>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPSELL */}
      <section className="py-20 px-4 bg-[#111827]/50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-[#FFB020]/20 text-[#FFB020] rounded-full text-xs font-semibold mb-4">
            ¿QUIERES MÁS?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            Combina el estudio con el Pack GRABA
          </h2>
          <p className="text-gray-400 mb-8">
            Desde 350€/mes tienes estudio ilimitado + técnico + 6 reels editados al mes. Sin preocuparte de nada.
          </p>
          <Link
            href="/packs"
            className="inline-block px-8 py-4 bg-[#2979FF] hover:bg-[#1a6aff] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
          >
            Ver Pack GRABA →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">¿Cuándo grabamos?</h2>
          <p className="text-gray-400 mb-8">
            Dinos qué quieres grabar y te hacemos un presupuesto personalizado en menos de 24 horas.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20consultar%20disponibilidad%20del%20estudio`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Reservar por WhatsApp →
          </a>
        </div>
      </section>
    </>
  )
}
