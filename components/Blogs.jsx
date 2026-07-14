'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import GoldRule from './GoldRule'
import { getContent } from '../lib/api'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export default function Blogs() {
  const [posts, setPosts]   = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/blogs?limit=6`)
      .then(r => r.json())
      .then(data => setPosts(data.data || []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="blogs" id="blogs" aria-labelledby="blogs-heading">
      <div className="container">
        <div className="section-header">
          <span className="sec-label">Expert Reads</span>
          <GoldRule />
          <h2 id="blogs-heading">
            Know what&rsquo;s happening<br />in your body.
          </h2>
          <p>Written by OB-GYNs, lactation consultants and nutritionists.</p>
        </div>

        <div className="blogs-grid">
          {loading ? (
            [1, 2, 3].map(i => (
              <div key={i} className="blog-card" style={{ opacity: 0.4 }}>
                <div className="blog-image" style={{ background: 'rgba(212,189,212,0.1)' }} />
                <div className="blog-body">
                  <div style={{ background: 'rgba(212,189,212,0.1)', height: '12px', width: '40%', borderRadius: '4px', marginBottom: '10px' }} />
                  <div style={{ background: 'rgba(212,189,212,0.1)', height: '20px', width: '90%', borderRadius: '4px', marginBottom: '8px' }} />
                  <div style={{ background: 'rgba(212,189,212,0.1)', height: '60px', borderRadius: '4px' }} />
                </div>
              </div>
            ))
          ) : posts.length === 0 ? (
            <p style={{ color: 'var(--plum-mid)', gridColumn: '1/-1', textAlign: 'center', padding: '40px 0' }}>
              Expert articles coming soon.
            </p>
          ) : (
            posts.map((post) => (
              <div key={post._id} className="blog-card">
                <div className="blog-image" style={{ background: post.thumbnail ? 'transparent' : undefined }}>
                  {post.thumbnail ? (
                    <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <p className="blog-img-text">[Feature image]</p>
                  )}
                  <span className="blog-cat">{post.category}</span>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">{post.author} · {post.readTime} min read</div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-read">
                    Read Article →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="blogs-cta">
          <Link href="/blog" className="btn-outline">Read All Expert Articles</Link>
        </div>
      </div>
    </section>
  )
}
