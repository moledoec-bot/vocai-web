'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import type { DirectionalLight, Group } from 'three'
import Microphone from './Microphone'

// Posición del mic en desktop (compartida entre ResponsiveMic y FrontalLight)
const MIC_DESKTOP: [number, number, number] = [1.9, 0.0, 0]

function RotatingMic({
  position,
  scale,
}: {
  position: [number, number, number]
  scale: number
}) {
  const groupRef = useRef<Group>(null!)

  useFrame((_state, delta) => {
    if (groupRef.current) {
      // Rotación lenta sobre eje Y (~9°/seg)
      groupRef.current.rotation.y += delta * 0.16
    }
  })

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Microphone />
    </group>
  )
}

function ResponsiveMic() {
  const { viewport } = useThree()
  const isDesktop = viewport.aspect > 1

  const position: [number, number, number] = isDesktop
    ? MIC_DESKTOP
    : [0, 1.3, 0]
  const scale = isDesktop ? 1 : 0.78

  return <RotatingMic position={position} scale={scale} />
}

// DirectionalLight blanca frontal apuntando al mic en desktop.
function FrontalLight() {
  const lightRef = useRef<DirectionalLight>(null!)

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.target.position.set(...MIC_DESKTOP)
      lightRef.current.target.updateMatrixWorld()
    }
  }, [])

  return (
    <directionalLight
      ref={lightRef}
      position={[2, 4, 5]}
      intensity={0.9}
      color="#ffffff"
    />
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#0a0710']} />

      {/* Environment HDR para que el cromo tenga reflexiones reales */}
      <Environment preset="studio" />

      {/* Ambient suave + spotlights cálidos + frontal blanca + rim coral */}
      <ambientLight intensity={0.35} />

      <spotLight
        position={[-3.5, 4, 3]}
        intensity={4.5}
        color="#FF6B5B"
        angle={0.7}
        penumbra={0.4}
        distance={25}
      />
      <spotLight
        position={[3.5, 3, 4]}
        intensity={3.5}
        color="#FFB020"
        angle={0.7}
        penumbra={0.4}
        distance={25}
      />

      {/* Rim coral detrás del mic — separa silueta del fondo */}
      <pointLight
        position={[3.5, 1, -2]}
        intensity={2.4}
        color="#FF6B5B"
        distance={8}
      />

      {/* Frontal blanca dirigida al mic — recupera detalle de geometría */}
      <FrontalLight />

      <ResponsiveMic />
    </Canvas>
  )
}
