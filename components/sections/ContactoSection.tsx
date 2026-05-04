'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import {
  CAL_LINK,
  CAL_USERNAME,
  CAL_EVENT,
  buildWhatsAppLink,
} from '@/lib/contact'

export default function ContactoSection() {
  // Configura el namespace del embed con tema dark + brand coral
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
            {/* Fallback: si por algún motivo el iframe no carga,
                el link directo siempre funciona */}
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

            <form className="form-card" action="#" method="post">
              <h3 className="h3">Dejanos un mensaje</h3>
              <div className="form-field">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="tu@email.com" />
              </div>
              <div className="form-field">
                <label htmlFor="msg">Mensaje</label>
                <textarea
                  id="msg"
                  name="mensaje"
                  placeholder="Contanos brevemente sobre tu proyecto..."
                />
              </div>
              {/* TODO CP5.3: server action que envía el form a hola@vocai.es */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
