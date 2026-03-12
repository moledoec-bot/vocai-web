import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

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
      <section className="pt-28 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Blog <span className="gradient-text">VOCAI</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Podcast, marketing digital e inteligencia artificial para empresas. Consejos prácticos, sin tecnicismos.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">No hay artículos publicados todavía.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map(({ slug, title, date, description }) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group bg-[#111827] rounded-2xl p-8 border border-white/5 hover:border-[#2979FF]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full gradient-bg flex-shrink-0" />
                    <time className="text-gray-500 text-xs" dateTime={date}>
                      {formatDate(date)}
                    </time>
                  </div>
                  <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#2979FF] transition-colors duration-300">
                    {title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>
                  <span className="mt-4 text-[#2979FF] text-sm font-semibold group-hover:underline">
                    Leer artículo →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
