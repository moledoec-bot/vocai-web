import type { Metadata } from 'next'
import ContactoForm from './ContactoForm'
import FadeIn from '@/components/FadeIn'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'

export const metadata: Metadata = {
  title: 'Contacto | VOCAI',
  description:
    'Contacta con VOCAI en Alicante. Estudio de podcast, marketing digital e inteligencia artificial. Te respondemos en menos de 24 horas.',
  openGraph: {
    title: 'Contacto | VOCAI',
    description: 'Cuéntanos tu proyecto. Te respondemos en menos de 24 horas.',
    url: 'https://vocai.es/contacto',
  },
  alternates: { canonical: 'https://vocai.es/contacto' },
}

export default function ContactoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-16 px-4 text-center section-glow-blue">
        <div className="relative max-w-2xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-[1.05] tracking-tight">
            Hablemos <span className="gradient-text">sin rodeos</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl">
            Cuéntanos tu proyecto y te respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      <FadeIn>
        <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="bg-[#0f1629] rounded-3xl p-8 border border-[#2979FF]/15 hover:border-[#2979FF]/30 hover:shadow-xl hover:shadow-[#2979FF]/10 transition-all duration-300">
            <h2 className="text-2xl font-black mb-3">Envíanos un mensaje</h2>
            <p className="text-gray-400 text-sm mb-8">
              Al enviar, se abrirá WhatsApp con tu mensaje ya escrito. Fácil y directo.
            </p>
            <ContactoForm />
          </div>

          {/* CONTACT INFO + MAP */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#0f1629] rounded-3xl p-8 border border-[#2979FF]/15 hover:border-[#2979FF]/30 hover:shadow-xl hover:shadow-[#2979FF]/10 transition-all duration-300">
              <h2 className="text-2xl font-black mb-6">Información de contacto</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">📍</span>
                  <div>
                    <p className="text-white font-semibold">Ubicación</p>
                    <p className="text-gray-400">Camino del Faro 37,</p>
                    <p className="text-gray-400">Cabo las Huertas, Alicante</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">💬</span>
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <a
                      href={`https://wa.me/${WA_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline"
                    >
                      Escríbenos ahora
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">📸</span>
                  <div>
                    <p className="text-white font-semibold">Instagram</p>
                    <a
                      href="https://www.instagram.com/vocai.st/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2979FF] hover:underline"
                    >
                      @vocai.es
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">🕐</span>
                  <div>
                    <p className="text-white font-semibold">Horario</p>
                    <p className="text-gray-400">Lun–Vie: 9:00 – 19:00</p>
                    <p className="text-gray-400">Sábado: 10:00 – 14:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#2979FF]/15 flex-grow min-h-[280px]">
              <iframe
                src="https://maps.google.com/maps?q=Camino+del+Faro+37,+Cabo+las+Huertas,+Alicante+03540&output=embed&hl=es&z=17"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación VOCAI — Cabo las Huertas, Alicante"
              />
            </div>
          </div>
        </div>
        </section>
      </FadeIn>
    </>
  )
}
