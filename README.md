# VOCAI Web

Sitio web corporativo de VOCAI — estudio de podcast, marketing digital e inteligencia artificial en Alicante.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Deploy:** Vercel

---

## 1. Instalar y correr en local

```bash
# Instalar dependencias
npm install

# Crear el archivo de variables de entorno
cp .env.local.example .env.local
# Edita .env.local y pon tu número de WhatsApp real

# Correr en local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 2. Añadir imágenes reales

Pon tus fotos en `/public/images/`. Los nombres que el código espera:

| Archivo | Dónde se usa |
|---|---|
| `estudio-hero.jpg` | Hero de Home y /estudio |
| `estudio-1.jpg` hasta `estudio-4.jpg` | Galería en Home |
| `estudio-interior-1.jpg` hasta `estudio-interior-5.jpg` | Galería en /estudio |
| `equipo-vocai.jpg` | Foto de equipo en /nosotros |
| `og-home.jpg` (1200×630) | Open Graph en Home |

Formato recomendado: **WebP o JPG**. Tamaño máximo recomendado por imagen: 500KB.

---

## 3. Publicar un artículo en el blog

1. Crea un archivo `.md` en `/content/blog/` con este formato:

```markdown
---
title: "Título del artículo"
date: "2025-03-15"
description: "Descripción corta que aparece en la card del blog."
---

Contenido del artículo en Markdown...
```

2. El nombre del archivo se convierte en la URL. Ejemplo: `mi-articulo.md` → `/blog/mi-articulo`
3. No hace falta reiniciar nada — Next.js lo detecta automáticamente en producción.

---

## 4. Cambiar el número de WhatsApp

Edita el archivo `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=34XXXXXXXXX
```

Ponlo en formato internacional sin el `+`. Ejemplo para España: `34612345678`.

---

## 5. Deploy en Vercel

```bash
# Instalar CLI de Vercel (solo la primera vez)
npm i -g vercel

# Hacer deploy
vercel

# Para deploy de producción
vercel --prod
```

En el panel de Vercel, añade la variable de entorno:
- `NEXT_PUBLIC_WHATSAPP_NUMBER` = tu número real

---

## 6. Conectar dominio en Namecheap

1. En Vercel → Settings → Domains → añade `vocai.es` y `www.vocai.es`
2. Vercel te dará los registros DNS (tipo A y CNAME)
3. En Namecheap → Domain List → Manage → Advanced DNS
4. Añade los registros que te da Vercel
5. En 5-30 minutos el dominio estará activo

---

## Estructura del proyecto

```
vocai-web/
├── app/                    # Páginas (Next.js App Router)
│   ├── page.tsx            # Home /
│   ├── estudio/            # /estudio
│   ├── packs/              # /packs
│   ├── soluciones-ia/      # /soluciones-ia
│   ├── nosotros/           # /nosotros
│   ├── blog/               # /blog y /blog/[slug]
│   ├── contacto/           # /contacto
│   ├── sitemap.ts          # /sitemap.xml (automático)
│   └── robots.ts           # /robots.txt (automático)
├── components/             # Navbar, Footer, WhatsAppButton
├── content/blog/           # Artículos .md
├── lib/blog.ts             # Utilidades para leer artículos
├── public/images/          # Imágenes del sitio
└── .env.local              # Variables de entorno
```
