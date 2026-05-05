'use client'

// TODO CP3: aplicar delays incrementales por palabra y disparar con
// body.is-loaded. Por ahora un wrapper simple que envuelve cada palabra
// del texto recibido en <span class="word-reveal">.
interface WordRevealProps {
  text: string
  startIndex?: number // útil para chainear con otra línea (ej: "Impulsada con IA.")
  stepMs?: number
}

export default function WordReveal({
  text,
  startIndex = 0,
  stepMs = 100,
}: WordRevealProps) {
  const words = text.trim().split(/\s+/)
  return (
    <>
      {words.map((w, i) => (
        <span
          key={`${startIndex}-${i}`}
          className="word-reveal"
          style={{ transitionDelay: `${(startIndex + i) * stepMs}ms` }}
        >
          {w}
        </span>
      ))}
    </>
  )
}
