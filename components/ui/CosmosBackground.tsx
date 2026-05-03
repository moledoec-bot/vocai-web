'use client'

// TODO CP3: montar canvas WebGL con shader cosmos (Matthias Hurrle adaptado)
// + curva de opacity controlada por scroll + pausa mobile fuera del hero
// + throttle 30fps desktop fuera del hero. Por ahora un canvas vacío
// para que el stacking quede correcto.
export default function CosmosBackground() {
  return <canvas id="hero-shader-canvas" aria-hidden />
}
