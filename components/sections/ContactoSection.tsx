'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect, useState, type FormEvent } from 'react'
import {
  CAL_LINK,
  CAL_USERNAME,
  CAL_EVENT,
  buildWhatsAppLink,
} from '@/lib/contact'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FALLBACK_ERROR =
  'Algo salió mal. Probá de nuevo o escribinos por WhatsApp.'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactoSection() {
  // Cal.com namespace setup
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: 'vocai-estudio' })
      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#FF5A4A' },
          dark: { 'cal-brand': '#FF5A4A' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  // Form state
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  function validateClient(): string | null {
    if (!nombre.trim()) return 'Decinos tu nombre.'
    if (!email.trim()) return 'Necesitamos tu email para responderte.'
    if (!EMAIL_REGEX.test(email.trim())) return 'El email no parece válido.'
    if (!mensaje.trim()) return 'Contanos brevemente sobre tu proyecto.'
    return null
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading') return

    const clientError = validateClient()
    if (clientError) {
      setErrorMsg(clientError)
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: nombre.trim(),
          email: email.trim(),
          mensaje: mensaje.trim(),
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        setErrorMsg(data.error ?? FALLBACK_ERROR)
        setStatus('error')
        return
      }

      // OK: limpiar form + estado success
      setNombre('')
      setEmail('')
      setMensaje('')
      setStatus('success')
    } catch (err) {
      console.error('[contact form] fetch failed:', err)
      setErrorMsg(FALLBACK_ERROR)
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="contacto-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Contacto</span>
          <h2 className="h2">Cuéntanos tu proyecto.</h2>
          <p>
            Reservá directo desde el calendario, escribinos por WhatsApp o
            dejanos un mensaje. Te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="contacto-grid stagger" data-stagger-step="150">
          <div className="cal-embed-wrap reveal">
            <span className="cal-embed-label">Reservá tu hora de estudio</span>
            <Cal
              namespace="vocai-estudio"
              calLink={`${CAL_USERNAME}/${CAL_EVENT}`}
              style={{
                width: '100%',
                height: '600px',
                overflow: 'auto',
              }}
              config={{ layout: 'month_view', theme: 'dark' }}
            />
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cal-embed-fallback"
            >
              ¿No carga? Abrir Cal.com en una pestaña nueva →
            </a>
          </div>

          <div className="contacto-side reveal">
            <div className="wa-card">
              <h3 className="h3">WhatsApp directo</h3>
              <p>
                Si tenés una duda rápida o querés agendar fuera del calendario,
                hablamos por WhatsApp.
              </p>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
                style={{ alignSelf: 'flex-start' }}
              >
                Abrir WhatsApp
              </a>
            </div>

            {status === 'success' ? (
              <div className="form-success" role="status" aria-live="polite">
                <span className="form-success-icon" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="h3">Mensaje enviado</h3>
                <p>Te respondemos en menos de 24 horas.</p>
                <button
                  type="button"
                  className="form-success-reset"
                  onClick={() => setStatus('idle')}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="form-card" onSubmit={handleSubmit} noValidate>
                <h3 className="h3">Dejanos un mensaje</h3>

                {status === 'error' && (
                  <div className="form-error-banner" role="alert">
                    {errorMsg || FALLBACK_ERROR}
                  </div>
                )}

                <div className="form-field">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    disabled={status === 'loading'}
                    maxLength={100}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    maxLength={200}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="msg">Mensaje</label>
                  <textarea
                    id="msg"
                    name="mensaje"
                    placeholder="Contanos brevemente sobre tu proyecto..."
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    disabled={status === 'loading'}
                    maxLength={2000}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start' }}
                  disabled={status === 'loading'}
                  aria-busy={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="form-spinner" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
