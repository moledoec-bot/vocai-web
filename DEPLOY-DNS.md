# DEPLOY — DNS y dominio vocai.es

Documentación de respaldo del setup actual (2026-05-06). Si algún día hay que
migrar el dominio o restaurar registros, esto es la fuente de verdad.

## Estado actual

- **Registrar:** DonDominio (`ns1.dondominio.com`, `ns2.dondominio.com`)
- **Hosting:** Vercel (proyecto `vocai-web`, scope `moledoec-bots-projects`)
- **Conectado a Vercel desde:** 2026-03-12 (creado por moledoec-bot)
- **Modo:** registros A/CNAME en DonDominio (NO usamos los nameservers de Vercel)

## Registros DNS activos

Verificados con `dig` el 2026-05-06:

| Host | Tipo | Valor | Notas |
|---|---|---|---|
| `vocai.es` | A | `216.198.79.1` | apex → Vercel anycast |
| `www.vocai.es` | CNAME | `30c55ba51d492dc8.vercel-dns-017.com.` | Vercel target dedicado |

`www` resuelve además a `64.29.17.65` y `216.198.79.65` por seguir el CNAME — eso
es Vercel sirviendo desde múltiples PoPs. No hay que tocar nada.

## Verificar que sigue OK

```bash
# Estado en Vercel
vercel domains inspect vocai.es

# Estado DNS
dig +short vocai.es A
dig +short www.vocai.es CNAME

# Smoke test HTTP
curl -sI -L https://vocai.es/ | head -1
curl -sI -L https://www.vocai.es/ | head -1
```

Las dos URLs deben dar `HTTP/2 200`. Si una de las dos falla:
1. Ver `vercel domains inspect vocai.es` — chequear que el proyecto sigue siendo `vocai-web`.
2. Si los registros DNS no coinciden con la tabla de arriba, restaurarlos en DonDominio (panel → DNS).

## Si hubiera que reconfigurar DNS desde cero en DonDominio

Panel DonDominio → Dominios → vocai.es → DNS:

1. **Registro A (apex `@` o `vocai.es`)**
   - Tipo: A
   - Nombre: `@` (vacío en algunos paneles)
   - Valor: `216.198.79.1`
   - TTL: 3600

2. **Registro CNAME (subdominio `www`)**
   - Tipo: CNAME
   - Nombre: `www`
   - Valor: `cname.vercel-dns.com.`
   - TTL: 3600

   (DonDominio puede pedir la versión genérica `cname.vercel-dns.com`. Vercel
   resuelve internamente al `30c55ba51d492dc8.vercel-dns-017.com` que vemos hoy.)

3. **NO** crear MX/TXT que choquen con Google Workspace si después se configura
   email corporativo (`hola@vocai.es`). Los MX para Workspace son distintos.

Después de aplicar: `vercel domains inspect vocai.es` debería mostrar el dominio
asignado al proyecto en menos de 5 minutos.

## Variables de entorno productivas en Vercel

Setear en Vercel → Project → Settings → Environment Variables (Production):

| Variable | Valor |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://vocai.es` |
| `CONTACT_EMAIL_TO` | `agus@vocai.es` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `34000000000` (placeholder hasta tener línea real) |
| `RESEND_API_KEY` | (la real, secreta — nunca commitear) |

## Pendientes post-deploy

- [ ] Rotar `RESEND_API_KEY` — la actual quedó expuesta en chat. Generar nueva en
      Resend, `vercel env rm RESEND_API_KEY production`, `vercel env add`,
      redeploy.
- [ ] Cambiar `NEXT_PUBLIC_WHATSAPP_NUMBER` cuando Agus tenga línea real.
- [ ] Configurar Google Workspace y MX records cuando esté listo `hola@vocai.es`.
