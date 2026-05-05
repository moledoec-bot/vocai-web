import Navbar from '@/components/ui/Navbar'
import FooterSection from '@/components/sections/FooterSection'

export const metadata = {
  title: 'Aviso Legal | VOCAI',
  description:
    'Aviso legal de VOCAI: identificación, condiciones de uso, propiedad intelectual y legislación aplicable.',
  alternates: { canonical: '/aviso-legal' },
}

export default function AvisoLegalPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <h1>Aviso Legal</h1>
        <p>
          <strong>Última actualización:</strong> [En proceso de completar]
        </p>

        <h2>1. Identificación</h2>
        <p>
          VOCAI (en proceso de constitución como Sociedad Limitada).
          <br />
          Domicilio social: Camino del Faro 37, Cabo las Huertas, 03540
          Alicante, España.
          <br />
          Email:{' '}
          <a href="mailto:agus@vocai.es">agus@vocai.es</a> /{' '}
          <a href="mailto:santi@vocai.es">santi@vocai.es</a>
          <br />
          NIF/CIF: [En proceso de obtención]
        </p>

        <h2>2. Objeto</h2>
        <p>
          VOCAI es un estudio de podcast, marketing digital e implementaciones
          de IA para empresas y profesionales.
        </p>

        <h2>3. Condiciones de uso</h2>
        <p>
          El acceso y uso de este sitio web atribuye al usuario la condición
          de Usuario, que acepta estos términos. El usuario se compromete a
          hacer un uso adecuado del sitio y a no utilizarlo para actividades
          ilícitas.
        </p>

        <h2>4. Propiedad intelectual</h2>
        <p>
          Los contenidos de este sitio (textos, imágenes, marca, logo) son
          propiedad de VOCAI o de sus titulares, y están protegidos por la
          legislación vigente en materia de propiedad intelectual.
        </p>

        <h2>5. Responsabilidad</h2>
        <p>
          VOCAI no se hace responsable de los daños derivados del uso del
          sitio web ni de la veracidad o exactitud de la información facilitada
          por terceros enlazados.
        </p>

        <h2>6. Legislación aplicable</h2>
        <p>
          Las relaciones derivadas de la utilización de este sitio se regirán
          por la legislación española. Las partes se someten a los Juzgados y
          Tribunales de Alicante.
        </p>

        <div className="legal-page-back">
          <a href="/">← Volver al inicio</a>
        </div>
      </main>
      <FooterSection />
    </>
  )
}
