import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { JsonLd } from '@/components/seo/JsonLd'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'

// Solo cargamos la variante 'normal' de cada fuente. La italic no se
// usa en ninguna parte del sitio (cero <em> o font-style: italic en
// código) — quitarla ahorra ~419 KB de assets web.
const generalSans = localFont({
  src: [
    { path: '../public/fonts/GeneralSans-Variable.woff2', style: 'normal', weight: '200 700' },
  ],
  variable: '--font-display',
  display: 'swap',
})

const inter = localFont({
  src: [
    { path: '../public/fonts/InterVariable.woff2', style: 'normal', weight: '100 900' },
  ],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'VOCAI — La voz de tu negocio. Impulsada con IA.',
    template: '%s | VOCAI',
  },
  description:
    'Estudio de podcast, marketing digital e inteligencia artificial para empresas y profesionales en Alicante.',
  metadataBase: new URL('https://vocai.es'),
  alternates: { canonical: 'https://vocai.es' },
  openGraph: {
    siteName: 'VOCAI',
    title: 'VOCAI — La voz de tu negocio. Impulsada con IA.',
    description:
      'Estudio de podcast, marketing digital e inteligencia artificial para empresas y profesionales en Alicante.',
    url: 'https://vocai.es',
    locale: 'es_ES',
    type: 'website',
    images: [
      // WebP primary (22 KB, ~97% más liviano que PNG)
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        type: 'image/webp',
        alt: 'VOCAI — La voz de tu negocio. Impulsada con IA.',
      },
      // PNG fallback para crawlers viejos
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'VOCAI — La voz de tu negocio. Impulsada con IA.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOCAI — La voz de tu negocio. Impulsada con IA.',
    description:
      'Estudio de podcast, marketing digital e inteligencia artificial en Alicante.',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${generalSans.variable}`}>
      <body>
        <JsonLd />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
