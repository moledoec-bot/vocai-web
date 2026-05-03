import { MicIcon, CpuIcon } from '@/components/icons'

export default function QueHacemosSection() {
  return (
    <section id="que-hacemos">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="h2">Dos mundos. Una sola voz.</h2>
          <p>
            VOCAI une un estudio de producción audiovisual con un equipo de
            desarrollo en inteligencia artificial. Te ayudamos a comunicar mejor
            y a operar más rápido.
          </p>
        </div>

        <div className="que-grid stagger">
          <a href="#estudio" className="que-card reveal">
            <span className="que-icon" aria-hidden="true">
              <MicIcon />
            </span>
            <h3 className="h3">El estudio</h3>
            <p>
              Grabamos podcast, vídeo y reels con calidad broadcast. Te ocupás
              de aparecer; del resto nos ocupamos nosotros: guion, edición,
              branding y publicación.
            </p>
            <span className="arrow-link">Ver más</span>
          </a>

          <a href="#ia" className="que-card amber reveal">
            <span className="que-icon" aria-hidden="true">
              <CpuIcon />
            </span>
            <h3 className="h3">Implementaciones IA</h3>
            <p>
              Construimos agentes, automatizaciones y apps a medida con IA.
              Recuperás horas, automatizás procesos y escalás sin contratar más
              gente.
            </p>
            <span className="arrow-link">Ver más</span>
          </a>
        </div>
      </div>
    </section>
  )
}
