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
      <section className="relative min-h-[60vh] flex items-end pt-32 pb-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(41,121,255,0.18) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 50% 80%, rgba(255,107,107,0.14) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <span className="text-xs uppercase tracking-widest text-[#FF6B6B] font-bold">Contacto</span>
          <h1 className="mt-4 text-6xl md:text-8xl font-black tracking-tight leading-[1.0] max-w-5xl">
            Hablemos <span className="gradient-text">sin rodeos.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Contanos tu proyecto y te respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      <div className="divider-soft max-w-7xl mx-auto" />

      <FadeIn>
        <section className="py-20 px-4 pb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* FORM */}
            <div className="lg:col-span-7 card-premium rounded-3xl p-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Envianos un mensaje</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-10">
                Al enviar, se abre WhatsApp con tu mensaje ya escrito. Fácil y directo.
              </p>
              <ContactoForm />
            </div>

            {/* CONTACT INFO + MAP */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="card-premium rounded-3xl p-10">
                <h2 className="text-2xl font-bold tracking-tight mb-8">Información de contacto</h2>
                <ul className="space-y-6 text-sm">
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">📍</span>
                    <div>
                      <p className="text-white font-semibold mb-0.5">Ubicación</p>
                      <p className="text-slate-400 font-light">Camino del Faro 37,</p>
                      <p className="text-slate-400 font-light">Cabo las Huertas, Alicante</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">💬</span>
                    <div>
                      <p className="text-white font-semibold mb-0.5">WhatsApp</p>
                      <a
                        href={`https://wa.me/${WA_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:underline"
                      >
                        Escribinos ahora
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">📸</span>
                    <div>
                      <p className="text-white font-semibold mb-0.5">Instagram</p>
                      <a
                        href="https://www.instagram.com/vocai.st/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2979FF] hover:underline"
                      >
                        @vocai.st
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">🕐</span>
                    <div>
                      <p className="text-white font-semibold mb-0.5">Horario</p>
                      <p className="text-slate-400 font-light">Lun–Vie: 9:00 – 19:00</p>
                      <p className="text-slate-400 font-light">Sábado: 10:00 – 14:00</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl overflow-hidden border border-white/5 flex-grow min-h-[280px]">
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
