const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'
const WA_PREFILL = encodeURIComponent(
  'Hola, me gustaría saber más sobre los servicios de VOCAI'
)

// Diciembre 2026 → 1 dic = martes. La primera fila empieza con un día
// vacío en lunes. Días con dot coral simulan disponibilidad.
const AVAILABLE_DAYS = new Set([1, 3, 5, 9, 10, 12, 15, 18, 19, 22, 24, 29])
const DAY_NAMES = ['L', 'M', 'X', 'J', 'V', 'S', 'D'] as const

function MiniCalendar() {
  const cells: Array<{ kind: 'day' | 'empty'; n?: number; available?: boolean }> = []
  // 1 lunes vacío antes del 1 (martes)
  cells.push({ kind: 'empty' })
  for (let n = 1; n <= 31; n++) {
    cells.push({ kind: 'day', n, available: AVAILABLE_DAYS.has(n) })
  }
  // 35 - 1(empty) - 31(días) = 3 vacíos al final
  for (let i = 0; i < 3; i++) cells.push({ kind: 'empty' })

  return (
    <div className="mini-calendar" aria-hidden="true">
      <div className="cal-header">Diciembre 2026</div>
      <div className="cal-grid">
        {DAY_NAMES.map((d) => (
          <div key={d} className="cal-day-name">
            {d}
          </div>
        ))}
        {cells.map((cell, i) =>
          cell.kind === 'empty' ? (
            <span key={`e-${i}`} className="cal-day empty" />
          ) : (
            <span
              key={`d-${cell.n}`}
              className={`cal-day${cell.available ? ' available' : ''}`}
            >
              {cell.n}
            </span>
          )
        )}
      </div>
    </div>
  )
}

export default function ContactoSection() {
  return (
    <section id="contacto" className="contacto-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Contacto</span>
          <h2 className="h2">Cuéntanos tu proyecto.</h2>
          <p>
            Reservá directo desde el calendario, escribinos por WhatsApp o
            dejanos un mensaje. Te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="contacto-grid stagger" data-stagger-step="150">
          <div className="calcom-placeholder reveal">
            <span className="label">Cal.com Embed</span>
            <MiniCalendar />
            <span className="title">Reservá tu hora de estudio</span>
          </div>

          <div className="contacto-side reveal">
            <div className="wa-card">
              <h3 className="h3">WhatsApp directo</h3>
              <p>
                Si tenés una duda rápida o querés agendar fuera del calendario,
                hablamos por WhatsApp.
              </p>
              <a
                href={`https://wa.me/${WA}?text=${WA_PREFILL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
                style={{ alignSelf: 'flex-start' }}
              >
                Abrir WhatsApp
              </a>
            </div>

            <form className="form-card" action="#" method="post">
              <h3 className="h3">Dejanos un mensaje</h3>
              <div className="form-field">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="tu@email.com" />
              </div>
              <div className="form-field">
                <label htmlFor="msg">Mensaje</label>
                <textarea
                  id="msg"
                  name="mensaje"
                  placeholder="Contanos brevemente sobre tu proyecto..."
                />
              </div>
              {/* TODO CP5: server action que envía el form a hola@vocai.es */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
