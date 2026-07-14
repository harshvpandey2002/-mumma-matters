import Link from 'next/link'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export const metadata = {
  title: 'Expert Articles | Mumma Matters',
  description: 'Expert reads on postpartum recovery, breastfeeding, hormones, hair fall and more — written by OB-GYNs, lactation consultants and nutritionists.',
}

export default async function BlogPage() {
  let posts = []

  try {
    const res = await fetch(`${API_URL}/api/blogs?limit=50`, { next: { revalidate: 60 } })
    const data = await res.json()
    posts = data.data || []
  } catch {
    posts = []
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--blush)', paddingBottom: '80px' }}>

      {/* Header */}
      <div style={{ background: 'var(--plum-dark)', padding: '80px 24px 60px', textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '16px' }}>
          Expert Reads
        </span>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--ivory)', fontWeight: '400', margin: '0 0 16px' }}>
          Know what&rsquo;s happening<br />in your body.
        </h1>
        <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'rgba(212,189,212,0.7)', maxWidth: '480px', margin: '0 auto' }}>
          Written by OB-GYNs, lactation consultants and nutritionists.
        </p>
      </div>

      {/* Posts grid */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 0' }}>
        {posts.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--plum-mid)', fontFamily: 'var(--sans)', padding: '40px 0' }}>
            Expert articles coming soon.
          </p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
            {posts.map(post => (
              <div key={post._id} className="blog-card" style={{ background: 'white', border: '1px solid rgba(212,189,212,0.2)' }}>
                <div className="blog-image" style={{ background: post.thumbnail ? 'transparent' : 'var(--plum-dark)', minHeight: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {post.thumbnail ? (
                    <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                  ) : (
                    <p style={{ color: 'rgba(212,189,212,0.3)', fontFamily: 'var(--sans)', fontSize: '0.78rem' }}>[Feature image]</p>
                  )}
                  {post.category && (
                    <span className="blog-cat">{post.category}</span>
                  )}
                </div>
                <div className="blog-body" style={{ padding: '20px' }}>
                  <div className="blog-meta" style={{ marginBottom: '8px' }}>
                    {post.author} · {post.readTime} min read
                  </div>
                  <h3 className="blog-title" style={{ marginBottom: '10px' }}>{post.title}</h3>
                  <p className="blog-excerpt" style={{ marginBottom: '16px' }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-read">
                    Read Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/" style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--plum)', textDecoration: 'none', borderBottom: '1px solid var(--plum)', paddingBottom: '2px' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
