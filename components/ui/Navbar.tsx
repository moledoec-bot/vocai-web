'use client'

// TODO CP4: scroll listener para .is-scrolled (hook o inline)
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">
          VOCAI<span className="dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#estudio">Estudio</a>
          <a href="#ia">IA</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a
          href="#contacto"
          className="btn btn-primary"
          style={{ padding: '0.6rem 1.2rem', fontSize: '0.875rem' }}
        >
          Hablemos
        </a>
      </div>
    </nav>
  )
}
