import Image from 'next/image'
import { CAL_LINK } from '@/lib/contact'

const HERO = {
  src: '/images/IMG_4286.jpg',
  alt: 'Estudio VOCAI · vista frontal con sillones, estantería y micrófonos',
}

export default function EstudioSection() {
  return (
    <section id="estudio">
      <div className="container">
        <div className="estudio-grid">
          <div className="estudio-copy reveal">
            <span className="eyebrow">El estudio</span>
            <h2 className="h2" style={{ marginTop: '1rem' }}>
              Tu marca, en formato premium.
            </h2>
            <p>
              Un set diseñado para que tu marca personal o empresarial se vea
              como las grandes. Vídeo multicámara 4K, audio broadcast, técnico
              en sala y entrega inmediata. Sin invertir en equipo propio.
            </p>

            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="price-card price-card--featured"
            >
              <span className="price-card-title">Podcast</span>
              <div className="price-card-bottom">
                <span className="price-card-price">Desde 90€/h + IVA</span>
                <span className="price-card-arrow" aria-hidden="true">→</span>
              </div>
            </a>

            <p className="also-list">
              <span className="also-list-label">También hacemos:</span>
              producción de contenido · branding · marketing digital
            </p>

            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Reservá una hora
            </a>
          </div>

          <div className="estudio-hero reveal">
            <Image
              src={HERO.src}
              alt={HERO.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
