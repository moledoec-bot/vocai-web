import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://vocai.es/blog/${params.slug}`,
    },
    alternates: { canonical: `https://vocai.es/blog/${params.slug}` },
  }
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className="pt-32 pb-32 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#2979FF] text-xs uppercase tracking-widest font-semibold mb-12 transition-colors duration-300"
        >
          ← Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <time className="text-slate-500 text-xs uppercase tracking-widest font-semibold" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <h1 className="text-5xl md:text-7xl font-black text-white mt-5 mb-6 leading-[1.05] tracking-tight">
            {post.title}
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">{post.description}</p>
          <div className="mt-8 h-px bg-gradient-to-r from-[#2979FF] via-[#FF6B6B] to-transparent" />
        </header>

        {/* Content */}
        <div
          className="prose-vocai"
          dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
        />

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-slate-400 mb-6 font-light text-lg">¿Te ha resultado útil este artículo?</p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'}?text=Hola%2C%20he%20le%C3%ADdo%20vuestro%20art%C3%ADculo%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block px-10 py-4 rounded-full font-bold text-base uppercase tracking-widest"
          >
            Hablemos →
          </a>
        </div>
      </div>
    </article>
  )
}
