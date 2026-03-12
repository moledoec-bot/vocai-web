import type { Metadata } from 'next'
import Link from 'next/link'

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
  {
    icon: '🤝',
    title: 'Cercanía',
    desc: 'Tratamos a cada cliente como un socio. Estamos disponibles, somos directos y nunca dejamos una duda sin respuesta.',
  },
  {
    icon: '⚡',
    title: 'Agilidad',
    desc: 'Ejecutamos rápido. De la idea al primer episodio publicado en menos de una semana.',
  },
  {
    icon: '🎯',
    title: 'Resultados',
    desc: 'Todo lo que hacemos tiene un objetivo medible. Si no genera resultados, lo cambiamos.',
  },
  {
    icon: '🤖',
    title: 'Tecnología accesible',
    desc: 'Hacemos la IA sencilla. No necesitas entender cómo funciona, solo ver cómo te ayuda.',
  },
  {
    icon: '🌱',
    title: 'Crecimiento conjunto',
    desc: 'Crecemos cuando nuestros clientes crecen. Eso alinea nuestros intereses desde el primer día.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#2979FF]/20 border border-[#2979FF]/40 rounded-full text-[#2979FF] text-sm font-semibold mb-6">
            📍 Cabo las Huertas, Alicante
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6">
            Somos <span className="gradient-text">VOCAI</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Un equipo que cree que cualquier negocio merece comunicarse con la misma calidad que las grandes marcas — y la tecnología para hacerlo ya existe.
          </p>
        </div>
      </section>

      {/* TEAM PHOTO */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* REEMPLAZAR con foto real del equipo: <Image src="/images/equipo-vocai.jpg" alt="Equipo VOCAI" width={900} height={500} className="rounded-3xl w-full object-cover" /> */}
          <div className="w-full aspect-video bg-[#1a1a2e] rounded-3xl border border-white/5 flex items-center justify-center text-gray-600 text-sm">
            Foto del equipo VOCAI — reemplazar con /public/images/equipo-vocai.jpg
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center">Nuestra historia</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              VOCAI nació de una pregunta simple: <strong className="text-white">¿por qué las pymes en Alicante no tienen acceso a la misma calidad de comunicación que las grandes empresas?</strong>
            </p>
            <p>
              Vimos cómo negocios increíbles perdían clientes frente a competidores con menos producto pero mejor presencia. La diferencia no era el talento — era la comunicación.
            </p>
            <p>
              Decidimos construir el estudio que nos hubiera gustado tener: tecnología de primer nivel, un equipo que entiende de negocio y la inteligencia artificial como aliada para hacer más con menos.
            </p>
            <p>
              Hoy ayudamos a empresas y profesionales de toda la provincia a <strong className="text-white">grabarse, publicarse y automatizarse</strong> — sin que tengan que convertirse en expertos en tecnología para hacerlo.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-4 bg-[#111827]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">Nuestros valores</h2>
          <p className="text-gray-400 text-center mb-12">Lo que nos guía en cada decisión.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#0a0e1a] rounded-2xl p-6 border border-white/5 hover:border-[#2979FF]/40 transition-all duration-300 text-center"
              >
                <span className="text-3xl mb-3 block">{icon}</span>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">Dónde estamos</h2>
          <p className="text-gray-400 text-center mb-10">
            Camino del Faro 37, Cabo las Huertas, Alicante · CP 03540
          </p>
          <div className="rounded-2xl overflow-hidden border border-white/10 h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.0!2d-0.4074!3d38.3734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6236c85bcaf1cd%3A0x4c5d3f5c2a8e0b3d!2sPlaya%20San%20Juan%2C%20Alicante!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación VOCAI — Playa San Juan, Alicante"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">¿Hablamos?</h2>
          <p className="text-gray-400 mb-8">
            Cuéntanos tu proyecto. Siempre respondemos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20VOCAI`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#2979FF] hover:bg-[#1a6aff] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Escríbenos →
            </a>
            <Link
              href="/contacto"
              className="px-8 py-4 border-2 border-white/20 text-white hover:border-[#2979FF] font-bold rounded-xl transition-all duration-300"
            >
              Ver contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
