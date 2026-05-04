export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid stagger">
          <div className="footer-brand reveal">
            <a href="#hero" className="vocai-logo vocai-logo--lg" aria-label="VOCAI">
              <span className="vocai-wordmark">VOCAI</span>
              <span className="vocai-dot">.</span>
            </a>
            <p>La voz de tu negocio, potenciada por IA. En Alicante.</p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/vocai.st/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Instagram"
              >
                IG
              </a>
              <a href="#" className="footer-social" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="footer-social" aria-label="YouTube">
                YT
              </a>
              <a href="#" className="footer-social" aria-label="TikTok">
                TT
              </a>
            </div>
          </div>

          <div className="footer-col reveal">
            <h4>Navegación</h4>
            <ul>
              <li>
                <a href="#estudio">Estudio</a>
              </li>
              <li>
                <a href="#ia">Implementaciones IA</a>
              </li>
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="footer-col reveal">
            <h4>Contacto</h4>
            <p className="addr">
              Camino del Faro 37
              <br />
              Cabo las Huertas
              <br />
              03540 · Alicante
              <br />
              <br />
              hola@vocai.es
            </p>
          </div>

          <div className="footer-col reveal">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacidad</a>
              </li>
              <li>
                <a href="#">Aviso legal</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 VOCAI · Todos los derechos reservados</span>
          <span>Hecho en Alicante con IA y café</span>
        </div>
      </div>
    </footer>
  )
}
