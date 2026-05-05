import Navbar from '@/components/ui/Navbar'
import FooterSection from '@/components/sections/FooterSection'

export const metadata = {
  title: 'Política de Cookies | VOCAI',
  description:
    'Política de cookies de VOCAI: qué cookies usamos, cómo gestionarlas y cambios futuros.',
  alternates: { canonical: '/cookies' },
}

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <h1>Política de Cookies</h1>
        <p>
          <strong>Última actualización:</strong> [En proceso de completar]
        </p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu
          navegador cuando visitas un sitio web. Sirven para recordar
          información sobre tu visita.
        </p>

        <h2>2. Cookies utilizadas en este sitio</h2>
        <p>
          Actualmente este sitio NO utiliza cookies de seguimiento, analítica
          ni publicidad.
        </p>
        <p>
          Solo se utilizan cookies estrictamente técnicas necesarias para el
          funcionamiento del sitio (sesión, preferencias de carga). Estas
          cookies NO requieren consentimiento según el artículo 22.2 de la
          LSSI-CE.
        </p>

        <h2>3. Cambios futuros</h2>
        <p>
          Si en el futuro incorporamos herramientas como Google Analytics,
          Meta Pixel u otras cookies de terceros, te informaremos previamente
          y solicitaremos tu consentimiento mediante un banner antes de
          activarlas.
        </p>

        <h2>4. Cómo gestionar las cookies</h2>
        <p>
          Puedes configurar tu navegador para aceptar, rechazar o eliminar
          cookies en cualquier momento. Consulta la sección de ayuda de tu
          navegador para más información.
        </p>

        <h2>5. Contacto</h2>
        <p>
          Para cualquier duda sobre esta política, contacta con{' '}
          <a href="mailto:agus@vocai.es">agus@vocai.es</a> o{' '}
          <a href="mailto:santi@vocai.es">santi@vocai.es</a>.
        </p>

        <div className="legal-page-back">
          <a href="/">← Volver al inicio</a>
        </div>
      </main>
      <FooterSection />
    </>
  )
}
