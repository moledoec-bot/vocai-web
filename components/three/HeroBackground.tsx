'use client'

import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <HeroPoster />,
})

function HeroPoster() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10"
      style={{
        background:
          'radial-gradient(ellipse 60% 70% at 50% 45%, rgba(255,107,91,0.10) 0%, rgba(255,176,32,0.04) 35%, transparent 70%), var(--bg-base)',
      }}
    />
  )
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <HeroScene />
    </div>
  )
}
