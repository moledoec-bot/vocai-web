import type { Metadata } from 'next'
import Link from 'next/link'

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

const services = [
  { icon: '🎙️', name: 'ESTUDIO', href: '/estudio', desc: 'Graba con calidad broadcast en Alicante' },
  { icon: '📦', name: 'GRABA', href: '/packs', desc: 'Pack entrada: estudio + reels editados' },
  { icon: '🚀', name: 'CREA', href: '/packs', desc: 'Marca personal completa con IA incluida' },
  { icon: '👑', name: 'DOMINA', href: '/packs', desc: 'Automatizaciones + ads + CRM' },
  { icon: '🤖', name: 'SOLUCIONES IA', href: '/soluciones-ia', desc: 'IA aplicada a tu negocio hoy' },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background — REEMPLAZAR con: <Image src="/images/estudio-hero.jpg" alt="Estudio VOCAI" fill className="object-cover" priority /> */}
        <div className="absolute inset-0 bg-[#1a1a2e]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#0a0e1a]/60" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            La voz de tu negocio,{' '}
            <span className="gradient-text">potenciada por IA.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Estudio de podcast, marketing digital e inteligencia artificial para empresas y profesionales en Alicante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packs"
              className="px-8 py-4 bg-[#2979FF] hover:bg-[#1a6aff] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 text-lg"
            >
              Ver packs →
            </Link>
            <Link
              href="/estudio"
              className="px-8 py-4 border-2 border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white font-bold rounded-xl transition-all duration-300 text-lg"
            >
              Reservar estudio →
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map(({ icon, title, text }) => (
            <div
              key={title}
              className="bg-[#111827] rounded-2xl p-8 border border-white/5 hover:border-[#2979FF]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-4xl mb-4 block">{icon}</span>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 bg-[#111827]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Todo lo que necesita tu negocio
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Un ecosistema completo de servicios diseñados para que crezcas a tu ritmo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map(({ icon, name, href, desc }) => (
              <Link
                key={name}
                href={href}
                className="bg-[#111827] rounded-2xl p-6 border border-white/5 hover:border-[#2979FF]/50 transition-all duration-300 hover:-translate-y-1 group text-center"
              >
                <span className="text-3xl mb-3 block">{icon}</span>
                <h3 className="text-[#2979FF] font-black text-sm tracking-wide mb-2 group-hover:text-white transition-colors">
                  {name}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">El estudio</h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Tecnología de primer nivel en el corazón de Alicante.
          </p>
          {/* REEMPLAZAR estos placeholders con imágenes reales del estudio en /public/images/ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-[#1a1a2e] rounded-xl aspect-square flex items-center justify-center text-gray-600 text-xs border border-white/5"
              >
                {/* REEMPLAZAR con: <Image src={`/images/estudio-${i}.jpg`} alt="Estudio VOCAI" fill className="object-cover rounded-xl" /> */}
                Foto estudio {i}
              </div>
            ))}
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

      {/* ECOSYSTEM */}
      <section className="py-20 px-4 bg-[#111827]/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">El ecosistema VOCAI</h2>
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
                  className="bg-[#111827] rounded-xl p-5 border border-[#2979FF]/20"
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

      {/* TESTIMONIALS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-400 text-center mb-12">Resultados reales de negocios reales.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, company, text }) => (
              <div
                key={name}
                className="bg-[#111827] rounded-2xl p-8 border border-white/5"
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

      {/* FINAL CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center rounded-3xl gradient-bg p-12 shadow-2xl shadow-[#2979FF]/20">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            ¿Listo para que tu negocio tenga voz?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Cuéntanos tu idea. La primera consulta es gratuita.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20los%20servicios%20de%20VOCAI`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-[#2979FF] font-black rounded-xl hover:scale-105 transition-transform duration-300 text-lg shadow-lg"
          >
            Hablemos →
          </a>
        </div>
      </section>
    </>
  )
}
