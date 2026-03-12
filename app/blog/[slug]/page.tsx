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
    <article className="pt-28 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2979FF] text-sm mb-10 transition-colors duration-300"
        >
          ← Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <time className="text-gray-500 text-sm" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-400 text-lg">{post.description}</p>
          <div className="mt-6 h-px bg-gradient-to-r from-[#2979FF] to-[#FF6B6B]" />
        </header>

        {/* Content */}
        <div
          className="prose-vocai"
          dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
        />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 mb-4">¿Te ha resultado útil este artículo?</p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34000000000'}?text=Hola%2C%20he%20le%C3%ADdo%20vuestro%20art%C3%ADculo%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#2979FF] hover:bg-[#1a6aff] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
          >
            Hablemos →
          </a>
        </div>
      </div>
    </article>
  )
}
