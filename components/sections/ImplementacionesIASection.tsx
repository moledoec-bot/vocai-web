import { buildWhatsAppLink } from '@/lib/contact'

// Red neuronal: 3 capas (3 input → 4 hidden → 3 output)
// Líneas conectando cada nodo de una capa con cada nodo de la siguiente.
const LAYERS_X = [80, 200, 320]
const LAYER_NODES: { y: number; delay: string; cls?: string }[][] = [
  [
    { y: 60, delay: '0s' },
    { y: 125, delay: '0.3s' },
    { y: 190, delay: '0.6s' },
  ],
  [
    { y: 50, delay: '0.15s', cls: 'amber' },
    { y: 110, delay: '0.45s', cls: 'amber' },
    { y: 170, delay: '0.75s', cls: 'amber' },
    { y: 200, delay: '1.05s', cls: 'amber' },
  ],
  [
    { y: 80, delay: '0.9s' },
    { y: 125, delay: '1.2s' },
    { y: 170, delay: '1.5s' },
  ],
]

function NeuralNetSvg() {
  return (
    <svg
      className="neural-net"
      viewBox="0 0 400 250"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Líneas L1→L2 y L2→L3 (full mesh con un par de excepciones para no saturar) */}
      {LAYER_NODES[0].flatMap((src) =>
        LAYER_NODES[1].map((dst) => (
          <line
            key={`l12-${src.y}-${dst.y}`}
            x1={LAYERS_X[0]}
            y1={src.y}
            x2={LAYERS_X[1]}
            y2={dst.y}
          />
        ))
      )}
      {LAYER_NODES[1].flatMap((src) =>
        LAYER_NODES[2].map((dst) => (
          <line
            key={`l23-${src.y}-${dst.y}`}
            x1={LAYERS_X[1]}
            y1={src.y}
            x2={LAYERS_X[2]}
            y2={dst.y}
          />
        ))
      )}

      {/* Nodos */}
      {LAYER_NODES.map((layer, layerIdx) =>
        layer.map((node) => (
          <circle
            key={`n-${layerIdx}-${node.y}`}
            cx={LAYERS_X[layerIdx]}
            cy={node.y}
            r="5"
            className={node.cls}
            style={{ animationDelay: node.delay }}
          />
        ))
      )}
    </svg>
  )
}

export default function ImplementacionesIASection() {
  return (
    <section id="ia" className="ia-section">
      <div className="container">
        <div className="ia-grid">
          <div className="spline-placeholder reveal" data-tilt-on-scroll>
            <NeuralNetSvg />
            <span className="label">Escena Spline 3D</span>
            <span className="title">Cerebro / Red Neuronal IA</span>
            <span className="desc">
              Aquí va una escena 3D interactiva (Spline) que sugiere conexión,
              inteligencia y movimiento líquido cálido.
            </span>
          </div>

          <div className="ia-copy reveal">
            <span className="eyebrow">Implementaciones IA</span>
            <h2 className="h2" style={{ marginTop: '1rem' }}>
              IA que hace el trabajo aburrido.
            </h2>
            <p>
              Construimos agentes y automatizaciones a medida que se enchufan a
              tu WhatsApp, tu CRM o tus hojas de cálculo. Cero magia, cero
              tecnicismos: solo procesos que funcionan solos.
            </p>

            <ul className="sub-services">
              <li>Agentes IA</li>
              <li>Automatizaciones n8n</li>
              <li>Desarrollo de apps</li>
              <li>Consultoría IA</li>
              <li>Formación IA</li>
            </ul>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Hablar con nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
