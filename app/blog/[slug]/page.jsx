import Link from 'next/link'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

// Generate static params for known slugs at build time
export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_URL}/api/blogs?limit=100`)
    const data = await res.json()
    return (data.data || []).map(post => ({ slug: post.slug }))
  } catch {
    return []
  }
}

// SEO metadata
export async function generateMetadata({ params }) {
  try {
    const res = await fetch(`${API_URL}/api/blogs/${params.slug}`)
    const data = await res.json()
    if (!data.success) return { title: 'Article | Mumma Matters' }
    return {
      title: `${data.data.title} | Mumma Matters`,
      description: data.data.excerpt || '',
      openGraph: {
        title: data.data.title,
        description: data.data.excerpt,
        images: data.data.thumbnail ? [data.data.thumbnail] : [],
      },
    }
  } catch {
    return { title: 'Article | Mumma Matters' }
  }
}

export default async function BlogPostPage({ params }) {
  let post = null
  let error = false

  try {
    const res = await fetch(`${API_URL}/api/blogs/${params.slug}`, { next: { revalidate: 60 } })
    const data = await res.json()
    if (data.success) post = data.data
    else error = true
  } catch {
    error = true
  }

  if (error || !post) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--sans)', color: 'var(--plum-mid)' }}>
        <h2 style={{ fontFamily: 'var(--serif)', marginBottom: '12px' }}>Article not found</h2>
        <p style={{ marginBottom: '24px' }}>This article may have been moved or is no longer available.</p>
        <Link href="/#blogs" style={{ color: 'var(--gold)', textDecoration: 'none' }}>← Back to Articles</Link>
      </div>
    )
  }

  const publishDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  return (
    <article style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 24px 100px' }}>

      {/* Back */}
      <Link
        href="/#blogs"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--plum-mid)', textDecoration: 'none', fontFamily: 'var(--sans)', fontSize: '0.82rem', letterSpacing: '0.04em', marginBottom: '40px' }}
      >
        ← Back to Articles
      </Link>

      {/* Category */}
      <div style={{ marginBottom: '16px' }}>
        <span style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid rgba(200,164,106,0.3)', padding: '4px 12px' }}>
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '400', color: 'var(--plum-dark)', lineHeight: '1.25', marginBottom: '20px' }}>
        {post.title}
      </h1>

      {/* Meta */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--plum-mid)', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(212,189,212,0.25)' }}>
        <span>By {post.author}</span>
        {post.readTime && <span>· {post.readTime} min read</span>}
        {publishDate && <span>· {publishDate}</span>}
      </div>

      {/* Thumbnail */}
      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt={post.title}
          style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: '4px', marginBottom: '40px' }}
        />
      )}

      {/* Excerpt */}
      {post.excerpt && (
        <p style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', color: 'var(--plum-mid)', lineHeight: '1.7', marginBottom: '36px', fontStyle: 'italic', borderLeft: '3px solid var(--gold)', paddingLeft: '20px' }}>
          {post.excerpt}
        </p>
      )}

      {/* Rich text content */}
      <div
        className="blog-content"
        style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: '1.85', color: 'var(--plum-dark)' }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      {post.tags?.length > 0 && (
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(212,189,212,0.25)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {post.tags.map(tag => (
            <span key={tag} style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', padding: '4px 12px', border: '1px solid rgba(212,189,212,0.3)', color: 'var(--plum-mid)', borderRadius: '2px' }}>
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Back CTA */}
      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <Link href="/#blogs" className="btn-outline">
          ← Read More Articles
        </Link>
      </div>

    </article>
  )
}
