'use client'

// Anchors usan path absoluto + hash ('/#xxx') para que funcionen tanto
// desde la home como desde las páginas legales (/privacidad, /aviso-legal,
// /cookies). Desde / Next intercepta el hash y hace scroll smooth; desde
// otra ruta navega a / y luego al hash.
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="/#hero" className="vocai-logo" aria-label="VOCAI">
          <span className="vocai-wordmark">VOCAI</span>
          <span className="vocai-dot">.</span>
        </a>
        <div className="nav-links">
          <a href="/#estudio">Estudio</a>
          <a href="/#ia">IA</a>
          <a href="/#nosotros">Nosotros</a>
          <a href="/#contacto">Contacto</a>
        </div>
        <a
          href="/#contacto"
          className="btn btn-primary"
          style={{ padding: '0.6rem 1.2rem', fontSize: '0.875rem' }}
        >
          Hablemos
        </a>
      </div>
    </nav>
  )
}
