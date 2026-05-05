// JSON-LD LocalBusiness para rich snippets en Google.
const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VOCAI',
  description:
    'Estudio de podcast, marketing digital e inteligencia artificial en Alicante',
  url: 'https://vocai.es',
  // TODO: cuando Agus tenga teléfono real, reemplazar el placeholder.
  telephone: '+34000000000',
  email: 'hola@vocai.es',
  image: 'https://vocai.es/og-image.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Camino del Faro 37, Cabo las Huertas',
    addressLocality: 'Alicante',
    postalCode: '03540',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.3734,
    longitude: -0.4074,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '17:00',
    },
  ],
  sameAs: ['https://www.instagram.com/vocai.st/'],
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
