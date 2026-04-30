import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'

export const metadata: Metadata = {
  title: 'Soluciones IA para Empresas | VOCAI',
  description:
    'Automatiza tu negocio con inteligencia artificial. Asistente WhatsApp, lector de facturas, control de stock y más. Consulta gratuita en Alicante.',
  openGraph: {
    title: 'Soluciones IA para Empresas | VOCAI',
    description: 'IA aplicada a tu negocio hoy. Automatizaciones reales para ganar tiempo y dinero.',
    url: 'https://vocai.es/soluciones-ia',
  },
  alternates: { canonical: 'https://vocai.es/soluciones-ia' },
}

const solutions = [
  { icon: '💬', title: 'Asistente WhatsApp IA', desc: 'Un chatbot inteligente conectado a tu WhatsApp Business que responde preguntas, recoge datos de leads y agenda citas las 24 horas del día.', benefit: 'Ahorro típico: 3h diarias en atención al cliente', color: '#00D68F' },
  { icon: '📄', title: 'Lector de albaranes y facturas', desc: 'Sube una foto o PDF y la IA extrae automáticamente proveedor, importe, fecha y concepto. Lo registra en tu hoja de cálculo o software contable.', benefit: 'Ahorro típico: de 30 min/día a 2 min/día', color: '#2979FF' },
  { icon: '📦', title: 'Control de stock y gastos', desc: 'Sistema que monitoriza tu inventario en tiempo real, detecta roturas de stock y genera alertas automáticas. Sin hojas de cálculo manuales.', benefit: 'Cero roturas de stock inesperadas', color: '#FFB020' },
  { icon: '📰', title: 'Asistente de novedades de tu sector', desc: 'La IA lee las noticias de tu sector cada día y te envía un resumen personalizado cada mañana por WhatsApp o email.', benefit: 'Ahorro típico: 45 min/día en lectura', color: '#FF6B6B' },
  { icon: '⚙️', title: 'Solución a medida', desc: 'Si tienes un proceso repetitivo que consume tiempo de tu equipo, probablemente se pueda automatizar. Diagnóstico gratuito para identificar oportunidades.', benefit: 'Diagnóstico gratuito sin compromiso', color: '#8B5CF6' },
]

const steps = [
  { num: '01', title: 'Diagnóstico gratuito', desc: 'Analizamos tu negocio e identificamos los procesos que más tiempo consumen y pueden automatizarse con IA.' },
  { num: '02', title: 'Propuesta personalizada', desc: 'Te presentamos una solución concreta con tiempo de implementación y ROI estimado. Sin tecnicismos.' },
  { num: '03', title: 'Implementación y formación', desc: 'Lo activamos todo, lo probamos contigo y formamos a tu equipo para que lo use desde el primer día.' },
]

export default function SolucionesIAPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end pt-32 pb-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 30% 30%, rgba(0,214,143,0.18) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 80% 80%, rgba(41,121,255,0.16) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <span className="inline-block px-3 py-1 bg-[#00D68F]/10 border border-[#00D68F]/30 rounded-full text-[#00D68F] text-[10px] font-bold uppercase tracking-widest mb-6">
            🤖 Inteligencia artificial aplicada
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.0] max-w-5xl">
            IA que trabaja{' '}
            <span className="gradient-text">para tu negocio.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Automatizaciones reales para empresas y profesionales. Sin tecnicismos, sin presupuestos desorbitados. Resultados desde la primera semana.
          </p>
          <div className="mt-10">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20una%20consulta%20gratuita%20sobre%20soluciones%20IA%20para%20mi%20negocio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#00D68F] hover:bg-[#00bc7d] text-[#0a0e1a] font-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00D68F]/40 text-base uppercase tracking-widest"
            >
              Consulta gratuita →
            </a>
          </div>
        </div>
      </section>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* SOLUTIONS */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase tracking-widest text-[#2979FF] font-bold">Nuestras soluciones</span>
                <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                  Soluciones probadas. Resultados medibles.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 self-end">
                <p className="text-xl text-slate-400 font-light leading-relaxed">
                  Cada solución se implementa en días, no en meses. Y cada euro invertido tiene un retorno claro.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map(({ icon, title, desc, benefit, color }) => (
                <div key={title} className="card-premium rounded-3xl p-8 flex flex-col">
                  <span className="text-4xl mb-5">{icon}</span>
                  <h3 className="text-xl font-bold mb-3 leading-tight">{title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-5 flex-grow">{desc}</p>
                  <div
                    className="text-xs font-bold px-3 py-1.5 rounded-full self-start uppercase tracking-wider"
                    style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}40` }}
                  >
                    ✓ {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* PROCESS */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#FF6B6B] font-bold">Cómo trabajamos</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Sencillo, rápido y sin sorpresas.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map(({ num, title, desc }) => (
                <div key={num} className="card-premium rounded-3xl p-10">
                  <span className="deco-number block mb-6">{num}</span>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20"
              style={{
                background:
                  'radial-gradient(ellipse 80% 90% at 30% 30%, rgba(0,214,143,0.18) 0%, transparent 60%), radial-gradient(ellipse 80% 90% at 80% 80%, rgba(41,121,255,0.15) 0%, transparent 60%), #0f1629',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                <div className="lg:col-span-8">
                  <span className="block text-4xl mb-4">🤖</span>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                    ¿Cuánto tiempo perdés en tareas repetitivas?
                  </h2>
                  <p className="mt-6 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
                    En 30 minutos de consulta gratuita identificamos qué procesos pueden automatizarse y te damos un plan concreto.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20una%20consulta%20gratuita%20sobre%20soluciones%20IA%20para%20mi%20negocio`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-[#00D68F] hover:bg-[#00bc7d] text-[#0a0e1a] font-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00D68F]/40 text-base uppercase tracking-widest"
                  >
                    Consulta gratuita →
                  </a>
                  <p className="text-slate-500 text-xs mt-4 lg:text-right">Sin compromiso. Respondemos en 24h.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
