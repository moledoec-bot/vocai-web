import WordReveal from '@/components/ui/WordReveal'

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'
const WA_PREFILL = encodeURIComponent(
  'Hola, me gustaría saber más sobre los servicios de VOCAI'
)

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <div className="hero-bottom-blend" />

      <div className="container">
        <div className="hero-copy">
          <h1 className="hero-headline">
            <WordReveal text="La voz de tu negocio." />
            <br />
            <span className="accent">
              <WordReveal text="Construida con IA." startIndex={5} />
            </span>
          </h1>

          <p className="hero-sub">
            Estudio de podcast, marketing digital y agentes IA para empresas que
            quieren sonar grande. En Alicante.
          </p>

          <div className="hero-ctas">
            <a
              href="https://cal.com/vocai/vocai-estudio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Reservar estudio
            </a>
            <a
              href={`https://wa.me/${WA}?text=${WA_PREFILL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-large"
            >
              Hablar con nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
