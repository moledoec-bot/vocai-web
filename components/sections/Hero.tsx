import HeroBackground from '@/components/three/HeroBackground'

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'
const WA_PREFILL = encodeURIComponent(
  'Hola, me gustaría saber más sobre los servicios de VOCAI'
)

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <HeroBackground />

      <div className="container relative flex min-h-[100svh] flex-col justify-end pb-20 pt-32 md:pb-32">
        <h1 className="font-display text-fluid-5xl font-medium tracking-tight leading-[0.95] max-w-[14ch]">
          La voz de tu negocio.
          <br />
          <span style={{ color: 'var(--coral)' }}>Construida con IA.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-fluid-lg font-light leading-relaxed text-text-muted">
          Estudio de podcast, marketing digital y agentes IA para empresas que
          quieren sonar grande. En Alicante.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://cal.com/vocai/vocai-estudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-4 font-display font-semibold text-bg-base transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Reservar estudio
          </a>
          <a
            href={`https://wa.me/${WA}?text=${WA_PREFILL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-display font-semibold text-text-primary transition hover:border-white/60"
          >
            Hablar con nosotros
          </a>
        </div>
      </div>
    </section>
  )
}
