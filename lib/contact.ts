// Constantes de contacto centralizadas. Si Agus cambia el número de
// WhatsApp o el link de Cal.com, se toca SOLO acá.

// TODO: cuando Agus pase el número real, actualizar
// NEXT_PUBLIC_WHATSAPP_NUMBER en .env.local (y en Vercel dashboard
// antes de deploy a prod). Hoy fallback al placeholder 34000000000.
export const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'

export const WA_PREFILL = encodeURIComponent(
  'Hola, me gustaría saber más sobre los servicios de VOCAI'
)

export const buildWhatsAppLink = () =>
  `https://wa.me/${WA_NUMBER}?text=${WA_PREFILL}`

// Cal.com — URL completa + partes para el embed @calcom/embed-react
export const CAL_USERNAME = 'vocai'
export const CAL_EVENT = 'vocai-estudio'
export const CAL_LINK = `https://cal.com/${CAL_USERNAME}/${CAL_EVENT}`
