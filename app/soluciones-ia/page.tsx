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
  {
    icon: '💬',
    title: 'Asistente WhatsApp IA',
    desc: 'Un chatbot inteligente conectado a tu WhatsApp Business que responde preguntas, recoge datos de leads y agenda citas las 24 horas del día.',
    benefit: 'Ahorro típico: 3h diarias en atención al cliente',
    color: '#00D68F',
  },
  {
    icon: '📄',
    title: 'Lector de albaranes y facturas',
    desc: 'Sube una foto o PDF y la IA extrae automáticamente proveedor, importe, fecha y concepto. Lo registra en tu hoja de cálculo o software contable.',
    benefit: 'Ahorro típico: de 30 min/día a 2 min/día',
    color: '#2979FF',
  },
  {
    icon: '📦',
    title: 'Control de stock y gastos',
    desc: 'Sistema que monitoriza tu inventario en tiempo real, detecta roturas de stock y genera alertas automáticas. Sin hojas de cálculo manuales.',
    benefit: 'Cero roturas de stock inesperadas',
    color: '#FFB020',
  },
  {
    icon: '📰',
    title: 'Asistente de novedades de tu sector',
    desc: 'La IA lee las noticias de tu sector cada día y te envía un resumen personalizado cada mañana por WhatsApp o email. Siempre informado, sin perder tiempo.',
    benefit: 'Ahorro típico: 45 min/día en lectura',
    color: '#FF6B6B',
  },
  {
    icon: '⚙️',
    title: 'Solución a medida',
    desc: 'Si tienes un proceso repetitivo que consume tiempo de tu equipo, probablemente se pueda automatizar. Hacemos un diagnóstico gratuito para identificar oportunidades.',
    benefit: 'Diagnóstico gratuito sin compromiso',
    color: '#8B5CF6',
  },
]

const steps = [
  {
    num: '01',
    title: 'Diagnóstico gratuito',
    desc: 'Analizamos tu negocio e identificamos los procesos que más tiempo consumen y pueden automatizarse con IA.',
  },
  {
    num: '02',
    title: 'Propuesta personalizada',
    desc: 'Te presentamos una solución concreta con tiempo de implementación y ROI estimado. Sin tecnicismos.',
  },
  {
    num: '03',
    title: 'Implementación y formación',
    desc: 'Lo activamos todo, lo probamos contigo y formamos a tu equipo para que lo use desde el primer día.',
  },
]

export default function SolucionesIAPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-16 px-4 text-center section-glow-blue">
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-[#00D68F]/20 border border-[#00D68F]/40 rounded-full text-[#00D68F] text-sm font-semibold mb-6">
            🤖 Inteligencia Artificial Aplicada
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
            IA que trabaja{' '}
            <span className="gradient-text">para tu negocio</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Automatizaciones reales para empresas y profesionales. Sin tecnicismos, sin presupuestos desorbitados. Resultados desde la primera semana.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20una%20consulta%20gratuita%20sobre%20soluciones%20IA%20para%20mi%20negocio`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#00D68F] hover:bg-[#00bc7d] text-[#0a0e1a] font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00D68F]/40 text-lg"
          >
            Solicitar consulta gratuita →
          </a>
        </div>
      </section>

      {/* SOLUTIONS */}
      <FadeIn>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 tracking-tight">Nuestras soluciones</h2>
            <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
              Soluciones probadas, rápidas de implementar y con resultados medibles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map(({ icon, title, desc, benefit, color }) => (
                <div
                  key={title}
                  className="bg-[#0f1629] rounded-2xl p-8 border border-[#2979FF]/15 hover:border-[#2979FF]/45 hover:shadow-xl hover:shadow-[#2979FF]/15 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                >
                  <span className="text-4xl mb-4">{icon}</span>
                  <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{desc}</p>
                  <div
                    className="text-xs font-semibold px-3 py-1.5 rounded-full self-start"
                    style={{ color, backgroundColor: `${color}20`, border: `1px solid ${color}40` }}
                  >
                    ✓ {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* PROCESS */}
      <FadeIn>
        <section className="py-20 px-4 bg-[#0a0e1a]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 tracking-tight">Cómo trabajamos</h2>
            <p className="text-gray-400 text-center mb-16">Sencillo, rápido y sin sorpresas.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map(({ num, title, desc }) => (
                <div key={num} className="text-center">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 text-white font-black text-xl shadow-lg shadow-[#2979FF]/20">
                    {num}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center rounded-3xl bg-[#0f1629] border border-[#00D68F]/30 hover:border-[#00D68F]/55 hover:shadow-2xl hover:shadow-[#00D68F]/15 transition-all duration-300 p-12">
            <span className="text-4xl mb-4 block">🤖</span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">¿Cuánto tiempo pierdes en tareas repetitivas?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              En 30 minutos de consulta gratuita identificamos qué procesos de tu negocio pueden automatizarse y te damos un plan concreto.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20una%20consulta%20gratuita%20sobre%20soluciones%20IA%20para%20mi%20negocio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#00D68F] hover:bg-[#00bc7d] text-[#0a0e1a] font-black rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00D68F]/40 text-lg"
            >
              Solicitar consulta gratuita →
            </a>
            <p className="text-gray-600 text-xs mt-4">Sin compromiso. En menos de 24h te respondemos.</p>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
