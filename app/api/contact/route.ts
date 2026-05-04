import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Resend client. Si la API key falta, fallamos en runtime con error claro.
const resend = new Resend(process.env.RESEND_API_KEY)

// Sender verificado en Resend (subdominio send.vocai.es con SPF + DKIM)
const FROM = 'VOCAI Web <hola@send.vocai.es>'
const TO = process.env.CONTACT_EMAIL_TO

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ContactPayload {
  nombre?: unknown
  email?: unknown
  mensaje?: unknown
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function buildHtml(nombre: string, email: string, mensaje: string): string {
  // Inline styles + tabla layout para máxima compat con Gmail/Outlook.
  // Paleta VOCAI: navy oscuro + coral + off-white cálido.
  const safeNombre = escapeHtml(nombre)
  const safeEmail = escapeHtml(email)
  const safeMensaje = escapeHtml(mensaje).replace(/\n/g, '<br>')

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nuevo mensaje desde vocai.es</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0710;color:#f5f3f0;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0710;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#14101c;border:1px solid rgba(255,255,255,0.06);border-radius:16px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:32px 32px 16px 32px;">
              <p style="margin:0 0 8px 0;font-size:11px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:#FF5A4A;">
                Nuevo mensaje
              </p>
              <h1 style="margin:0;font-size:24px;font-weight:600;color:#f5f3f0;letter-spacing:-0.5px;line-height:1.2;">
                De ${safeNombre}
              </h1>
            </td>
          </tr>

          <!-- Email del visitante -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <p style="margin:0 0 4px 0;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#8a8290;">
                Email
              </p>
              <p style="margin:0;font-size:16px;">
                <a href="mailto:${safeEmail}" style="color:#FF5A4A;text-decoration:none;font-weight:500;">
                  ${safeEmail}
                </a>
              </p>
            </td>
          </tr>

          <!-- Mensaje -->
          <tr>
            <td style="padding:0 32px 32px 32px;">
              <p style="margin:0 0 8px 0;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#8a8290;">
                Mensaje
              </p>
              <div style="background-color:#1c1623;border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:20px;font-size:15px;line-height:1.65;color:#f5f3f0;">
                ${safeMensaje}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 32px 24px 32px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:12px;color:#5a525a;text-align:center;">
                Recibido vía formulario de
                <a href="https://vocai.es" style="color:#8a8290;text-decoration:none;">vocai.es</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function buildText(nombre: string, email: string, mensaje: string): string {
  return `Nuevo mensaje desde vocai.es

De: ${nombre}
Email: ${email}

Mensaje:
${mensaje}

---
Recibido vía formulario de vocai.es`
}

export async function POST(req: Request) {
  // Verificación de configuración en runtime
  if (!process.env.RESEND_API_KEY || !TO) {
    console.error('[contact] Missing RESEND_API_KEY or CONTACT_EMAIL_TO env vars')
    return NextResponse.json(
      { error: 'No pudimos enviar tu mensaje. Por favor escribinos por WhatsApp.' },
      { status: 500 }
    )
  }

  // Parse body
  let body: ContactPayload
  try {
    body = (await req.json()) as ContactPayload
  } catch {
    return NextResponse.json(
      { error: 'Cuerpo de la petición inválido.' },
      { status: 400 }
    )
  }

  // Coerción + trim
  const nombre = typeof body.nombre === 'string' ? body.nombre.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const mensaje = typeof body.mensaje === 'string' ? body.mensaje.trim() : ''

  // Validación: campos no vacíos
  if (!nombre || !email || !mensaje) {
    return NextResponse.json(
      { error: 'Por favor completá nombre, email y mensaje.' },
      { status: 400 }
    )
  }

  // Largos razonables
  if (nombre.length > 100) {
    return NextResponse.json(
      { error: 'El nombre es demasiado largo (máx 100 caracteres).' },
      { status: 400 }
    )
  }
  if (email.length > 200) {
    return NextResponse.json(
      { error: 'El email es demasiado largo (máx 200 caracteres).' },
      { status: 400 }
    )
  }
  if (mensaje.length > 2000) {
    return NextResponse.json(
      { error: 'El mensaje es demasiado largo (máx 2000 caracteres).' },
      { status: 400 }
    )
  }

  // Email con formato válido
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: 'El email no parece válido.' },
      { status: 400 }
    )
  }

  // Enviar via Resend
  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Nuevo mensaje desde vocai.es — ${nombre}`,
      html: buildHtml(nombre, email, mensaje),
      text: buildText(nombre, email, mensaje),
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json(
        {
          error:
            'No pudimos enviar tu mensaje. Por favor escribinos por WhatsApp.',
        },
        { status: 500 }
      )
    }

    console.log('[contact] Email sent OK, id:', data?.id)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json(
      {
        error:
          'No pudimos enviar tu mensaje. Por favor escribinos por WhatsApp.',
      },
      { status: 500 }
    )
  }
}
