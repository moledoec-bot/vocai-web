'use client'

interface MicrophoneProps {
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
}

// Cromo claro principal (carcasa, base, stand, yoke)
const CHROME = { color: '#c8c8cc', metalness: 0.95, roughness: 0.18 } as const

// Cromo oscuro del fondo de la cabeza (atrás de la grilla)
const CHROME_DARK = { color: '#3a3a40', metalness: 0.85, roughness: 0.35 } as const

// Anillo dorado/cobre acento (detalle vintage)
const GOLD = { color: '#9a6a2a', metalness: 0.95, roughness: 0.2 } as const

// Goma negra del pie del stand
const RUBBER = { color: '#15151a', metalness: 0.05, roughness: 0.85 } as const

export default function Microphone({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}: MicrophoneProps) {
  // Grilla horizontal: 11 barras finas espaciadas verticalmente sobre la cara frontal
  const grilleRows = 11
  const grilleHeight = 1.05
  const grilleStep = grilleHeight / (grilleRows - 1)

  return (
    <group position={position} scale={scale} rotation={rotation}>
      {/* === STAND === */}

      {/* Base circular plana */}
      <mesh position={[0, -1.55, 0]}>
        <cylinderGeometry args={[0.55, 0.62, 0.08, 48]} />
        <meshStandardMaterial {...CHROME} />
      </mesh>

      {/* Anillo decorativo borde de la base */}
      <mesh position={[0, -1.51, 0]}>
        <torusGeometry args={[0.55, 0.018, 16, 64]} />
        <meshStandardMaterial {...CHROME_DARK} />
      </mesh>

      {/* Pie de goma debajo de la base */}
      <mesh position={[0, -1.6, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.04, 48]} />
        <meshStandardMaterial {...RUBBER} />
      </mesh>

      {/* Cuello/poste vertical del stand */}
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.07, 0.09, 1.7, 24]} />
        <meshStandardMaterial {...CHROME} />
      </mesh>

      {/* Anillo decorativo en el cuello */}
      <mesh position={[0, -1.45, 0]}>
        <torusGeometry args={[0.11, 0.025, 16, 32]} />
        <meshStandardMaterial {...GOLD} />
      </mesh>

      {/* === YOKE (horquilla en U que sostiene la cabeza) === */}

      {/* Brazo izquierdo del yoke */}
      <mesh position={[-0.42, 0.25, 0]} rotation={[0, 0, 0.05]}>
        <cylinderGeometry args={[0.035, 0.035, 1.1, 16]} />
        <meshStandardMaterial {...CHROME} />
      </mesh>

      {/* Brazo derecho del yoke */}
      <mesh position={[0.42, 0.25, 0]} rotation={[0, 0, -0.05]}>
        <cylinderGeometry args={[0.035, 0.035, 1.1, 16]} />
        <meshStandardMaterial {...CHROME} />
      </mesh>

      {/* Curva inferior del yoke (torus media vuelta abajo) */}
      <mesh position={[0, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.42, 0.035, 12, 24, Math.PI]} />
        <meshStandardMaterial {...CHROME} />
      </mesh>

      {/* Pivote izquierdo (el "tornillo" del yoke) */}
      <mesh position={[-0.42, 0.65, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.08, 24]} />
        <meshStandardMaterial {...GOLD} />
      </mesh>

      {/* Pivote derecho */}
      <mesh position={[0.42, 0.65, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.08, 24]} />
        <meshStandardMaterial {...GOLD} />
      </mesh>

      {/* === CABEZA === */}
      {/* Inclinada levemente hacia adelante (rotation X positivo en el group) */}
      <group position={[0, 0.65, 0]} rotation={[0.12, 0, 0]}>
        {/* Carcasa principal: elipsoide aplanado en Z (cara frontal grande) */}
        <mesh scale={[0.78, 1.05, 0.42]}>
          <sphereGeometry args={[0.55, 48, 48]} />
          <meshStandardMaterial {...CHROME} />
        </mesh>

        {/* Cara frontal oscura (atrás de la grilla, simula profundidad) */}
        <mesh position={[0, 0, 0.18]} scale={[0.7, 0.95, 0.05]}>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial {...CHROME_DARK} />
        </mesh>

        {/* Grilla horizontal: 11 barras finas paralelas en la cara frontal */}
        {Array.from({ length: grilleRows }, (_, i) => {
          const y = -grilleHeight / 2 + i * grilleStep
          // Ancho variable según altura para seguir el contorno (más angosto en bordes)
          const t = Math.abs(y) / (grilleHeight / 2)
          const halfWidth = 0.38 * Math.sqrt(Math.max(0, 1 - t * t * 0.7))
          if (halfWidth < 0.03) return null
          return (
            <mesh
              key={`bar-${i}`}
              position={[0, y, 0.23]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <cylinderGeometry args={[0.018, 0.018, halfWidth * 2, 12]} />
              <meshStandardMaterial {...CHROME} />
            </mesh>
          )
        })}

        {/* Marco superior e inferior de la grilla */}
        <mesh position={[0, grilleHeight / 2 + 0.03, 0.21]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.025, 0.025, 0.5, 16]} />
          <meshStandardMaterial {...CHROME} />
        </mesh>
        <mesh position={[0, -grilleHeight / 2 - 0.03, 0.21]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.025, 0.025, 0.4, 16]} />
          <meshStandardMaterial {...CHROME} />
        </mesh>
      </group>
    </group>
  )
}
