import Navbar from '@/components/ui/Navbar'
import FooterSection from '@/components/sections/FooterSection'

export const metadata = {
  title: 'Política de Privacidad | VOCAI',
  description:
    'Política de privacidad de VOCAI: qué datos recopilamos, base legal, conservación, derechos del usuario.',
  alternates: { canonical: '/privacidad' },
}

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <h1>Política de Privacidad</h1>
        <p>
          <strong>Última actualización:</strong> [En proceso de completar]
        </p>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          VOCAI (en proceso de constitución como Sociedad Limitada).
          <br />
          Domicilio: Camino del Faro 37, Cabo las Huertas, 03540 Alicante,
          España.
          <br />
          Contacto:{' '}
          <a href="mailto:agus@vocai.es">agus@vocai.es</a> /{' '}
          <a href="mailto:santi@vocai.es">santi@vocai.es</a>
        </p>

        <h2>2. Datos que recopilamos</h2>
        <p>
          A través del formulario de contacto recopilamos: nombre, email y
          mensaje. Estos datos los utilizamos exclusivamente para responder a
          tu consulta.
        </p>
        <p>
          No utilizamos cookies de seguimiento, herramientas de analítica ni
          píxeles publicitarios en esta versión del sitio. Si esto cambia en
          el futuro, actualizaremos esta política y solicitaremos tu
          consentimiento previo.
        </p>

        <h2>3. Base legal del tratamiento</h2>
        <p>
          El tratamiento de tus datos se basa en tu consentimiento expreso al
          rellenar el formulario de contacto (artículo 6.1.a del RGPD).
        </p>

        <h2>4. Conservación</h2>
        <p>
          Los datos se conservan únicamente durante el tiempo necesario para
          gestionar tu consulta y, posteriormente, durante el plazo legalmente
          exigido para atender posibles responsabilidades.
        </p>

        <h2>5. Derechos</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, portabilidad y limitación enviando un email a{' '}
          <a href="mailto:agus@vocai.es">agus@vocai.es</a> o{' '}
          <a href="mailto:santi@vocai.es">santi@vocai.es</a>.
        </p>
        <p>
          También puedes presentar reclamación ante la Agencia Española de
          Protección de Datos (
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>
          ).
        </p>

        <h2>6. Destinatarios</h2>
        <p>
          Tus datos se procesan a través de Resend (proveedor de envío de
          email, con sede en EE.UU. bajo cláusulas contractuales tipo de la
          UE). No se ceden a terceros adicionales.
        </p>

        <h2>7. Modificaciones</h2>
        <p>
          Esta política puede actualizarse. Te recomendamos revisarla
          periódicamente.
        </p>

        <div className="legal-page-back">
          <a href="/">← Volver al inicio</a>
        </div>
      </main>
      <FooterSection />
    </>
  )
}
