import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Blog — Podcast, Marketing e IA | VOCAI',
  description:
    'Artículos sobre podcast, marketing digital e inteligencia artificial para empresas. Consejos prácticos del equipo VOCAI.',
  openGraph: {
    title: 'Blog | VOCAI',
    description: 'Artículos sobre podcast, marketing e IA para empresas.',
    url: 'https://vocai.es/blog',
  },
  alternates: { canonical: 'https://vocai.es/blog' },
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end pt-32 pb-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 80% 30%, rgba(255,176,32,0.15) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 20% 80%, rgba(41,121,255,0.16) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <span className="text-xs uppercase tracking-widest text-[#FFB020] font-bold">Blog</span>
          <h1 className="mt-4 text-6xl md:text-8xl font-black tracking-tight leading-[1.0] max-w-5xl">
            Ideas para que tu marca <span className="gradient-text">se escuche.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Podcast, marketing digital e inteligencia artificial para empresas. Consejos prácticos, sin tecnicismos.
          </p>
        </div>
      </section>

      <div className="divider-soft max-w-7xl mx-auto" />

      {/* POSTS */}
      <FadeIn>
        <section className="py-20 px-4 pb-32">
          <div className="max-w-7xl mx-auto">
            {posts.length === 0 ? (
              <p className="text-slate-500 font-light">No hay artículos publicados todavía.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map(({ slug, title, date, description }) => (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="group card-premium rounded-3xl p-10 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-2 h-2 rounded-full gradient-bg flex-shrink-0" />
                      <time className="text-slate-500 text-xs uppercase tracking-widest font-semibold" dateTime={date}>
                        {formatDate(date)}
                      </time>
                    </div>
                    <h2 className="text-white font-bold text-2xl leading-tight mb-4 group-hover:text-[#2979FF] transition-colors duration-300">
                      {title}
                    </h2>
                    <p className="text-slate-400 font-light leading-relaxed flex-grow">{description}</p>
                    <span className="mt-6 text-[#2979FF] text-xs font-bold uppercase tracking-widest group-hover:underline">
                      Leer artículo →
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </FadeIn>
    </>
  )
}
