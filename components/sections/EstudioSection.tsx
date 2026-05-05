import {
  VideoIcon,
  MicThinIcon,
  SlidersHorizontalIcon,
  ClapperboardIcon,
  HeadphonesIcon,
  Mic2Icon,
} from '@/components/icons'
import { CAL_LINK } from '@/lib/contact'

const GALLERY = [
  { Icon: VideoIcon, label: 'Foto estudio 1' },
  { Icon: MicThinIcon, label: 'Foto estudio 2' },
  { Icon: SlidersHorizontalIcon, label: 'Foto estudio 3' },
  { Icon: ClapperboardIcon, label: 'Foto estudio 4' },
  { Icon: HeadphonesIcon, label: 'Foto estudio 5' },
  { Icon: Mic2Icon, label: 'Foto estudio 6' },
] as const

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

          <div className="estudio-gallery stagger">
            {GALLERY.map(({ Icon, label }) => (
              <div key={label} className="photo-placeholder reveal">
                <span className="photo-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="photo-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
