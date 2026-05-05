export default function NosotrosSection() {
  return (
    <section id="nosotros">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Nosotros</span>
          <h2 className="h2">El equipo detrás de VOCAI.</h2>
          <p>
            Dos socios, una visión: ayudar a empresas y profesionales de
            Alicante a comunicar mejor y operar más rápido con IA.
          </p>
        </div>

        <div className="nos-grid stagger" data-stagger-step="200">
          <div className="nos-card reveal" data-parallax="0.04">
            <div className="nos-avatar">Foto Agus</div>
            <div className="name">Agus Moledo</div>
            <div className="role">Estrategia · IA aplicada · Producto</div>
            <p className="bio">
              15 años emprendiendo y construyendo con IA desde sus inicios.
              Lidera estrategia, agentes y desarrollo de apps en VOCAI.
            </p>
          </div>

          <div className="nos-card reveal" data-parallax="-0.04">
            <div className="nos-avatar">Foto Santi</div>
            <div className="name">Santi Piguillem</div>
            <div className="role">Producción audiovisual · IA aplicada a procesos</div>
            <p className="bio">
              10+ años desarrollando proyectos, con base en dirección y
              branding. Lidera el estudio, la producción audiovisual y la
              aplicación de IA a procesos.
            </p>
          </div>
        </div>

        <div className="por-que reveal">
          <h3 className="h3">Por qué VOCAI</h3>
          <p>
            Tres principios que aplicamos en cada proyecto, desde el primer
            briefing hasta el lanzamiento.
          </p>
          <div className="valores stagger">
            <div className="valor reveal">
              <div className="v-title">Cercanía</div>
              <div className="v-desc">
                Hablamos claro, sin tecnicismos. Estamos disponibles cuando
                hace falta.
              </div>
            </div>
            <div className="valor reveal">
              <div className="v-title">Agilidad</div>
              <div className="v-desc">
                De la idea al primer entregable en menos de una semana.
              </div>
            </div>
            <div className="valor reveal">
              <div className="v-title">Resultados</div>
              <div className="v-desc">
                Si no genera resultados medibles, lo cambiamos hasta que
                funcione.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
