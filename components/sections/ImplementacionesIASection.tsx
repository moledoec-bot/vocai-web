import { buildWhatsAppLink } from '@/lib/contact'

// Red neuronal: 3 capas (3 input → 4 hidden → 3 output) sobre viewBox 800×600.
const LAYERS_X = [200, 400, 600]
const LAYER_NODES: { y: number; delay: string; cls?: string }[][] = [
  [
    { y: 150, delay: '0s' },
    { y: 300, delay: '0.4s' },
    { y: 450, delay: '0.8s' },
  ],
  [
    { y: 120, delay: '0.2s', cls: 'amber' },
    { y: 240, delay: '0.6s', cls: 'amber' },
    { y: 360, delay: '1.0s', cls: 'amber' },
    { y: 480, delay: '1.4s', cls: 'amber' },
  ],
  [
    { y: 180, delay: '1.2s' },
    { y: 300, delay: '1.6s' },
    { y: 420, delay: '2.0s' },
  ],
]

// Cada línea tiene un stroke base (siempre visible, sutil) + un stroke
// "flow" encima con stroke-dasharray animado, que da la sensación de
// luz/data viajando entre nodos.
function NeuralNetSvg() {
  const lines: { x1: number; y1: number; x2: number; y2: number; delay: string }[] = []
  // L1 → L2
  LAYER_NODES[0].forEach((src, i) =>
    LAYER_NODES[1].forEach((dst, j) => {
      lines.push({
        x1: LAYERS_X[0],
        y1: src.y,
        x2: LAYERS_X[1],
        y2: dst.y,
        delay: `${(i + j) * 0.18}s`,
      })
    })
  )
  // L2 → L3
  LAYER_NODES[1].forEach((src, i) =>
    LAYER_NODES[2].forEach((dst, j) => {
      lines.push({
        x1: LAYERS_X[1],
        y1: src.y,
        x2: LAYERS_X[2],
        y2: dst.y,
        delay: `${(i + j) * 0.22 + 0.5}s`,
      })
    })
  )

  return (
    <svg
      className="neural-net"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Líneas base (siempre visibles, sutiles) */}
      {lines.map((l, i) => (
        <line
          key={`base-${i}`}
          className="neural-line-base"
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
        />
      ))}
      {/* Líneas flow (luz que viaja con dasharray animado) */}
      {lines.map((l, i) => (
        <line
          key={`flow-${i}`}
          className="neural-line-flow"
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          style={{ animationDelay: l.delay }}
        />
      ))}

      {/* Nodos */}
      {LAYER_NODES.map((layer, layerIdx) =>
        layer.map((node, i) => (
          <circle
            key={`n-${layerIdx}-${i}`}
            className={`neural-node${node.cls ? ' ' + node.cls : ''}`}
            cx={LAYERS_X[layerIdx]}
            cy={node.y}
            r="9"
            style={{ animationDelay: node.delay }}
          />
        ))
      )}
    </svg>
  )
}

const CHIPS = [
  { label: 'Aplicaciones', cls: 'neural-chip-1' },
  { label: 'Sitios web', cls: 'neural-chip-2' },
  { label: 'ChatBots', cls: 'neural-chip-3' },
  { label: 'Sistemas', cls: 'neural-chip-4' },
  { label: 'Automatizaciones', cls: 'neural-chip-5' },
] as const

export default function ImplementacionesIASection() {
  return (
    <section id="ia" className="ia-section">
      <div className="container">
        <div className="ia-grid">
          <div className="neural-network-container reveal" data-tilt-on-scroll>
            <NeuralNetSvg />
            {CHIPS.map((c) => (
              <span key={c.cls} className={`neural-chip ${c.cls}`}>
                {c.label}
              </span>
            ))}
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

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="price-card price-card--featured"
            >
              <span className="price-card-title">Agentes IA</span>
              <div className="price-card-bottom">
                <span className="price-card-price">Desde 500€</span>
                <span className="price-card-arrow" aria-hidden="true">→</span>
              </div>
            </a>

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
