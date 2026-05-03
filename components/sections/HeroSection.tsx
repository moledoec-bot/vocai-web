// TODO CP3: migrar el hero del mockup (shader cosmos azul, word-reveal,
// 2 CTAs Reservar estudio + Hablar con nosotros, overlay + bottom blend)
export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <div className="hero-bottom-blend" />
      <div className="container">
        <div className="hero-copy">
          <h1 className="hero-headline">
            La voz de tu negocio.
            <br />
            <span className="accent">Construida con IA.</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
