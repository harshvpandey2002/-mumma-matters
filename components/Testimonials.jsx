'use client'

import { useState, useEffect } from 'react'
import GoldRule from './GoldRule'
import { getContent } from '../lib/api'

const FALLBACK = [
  { text: 'Loading testimonials...', name: '', detail: '' },
]

export default function Testimonials() {
  const [items, setItems]   = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getContent('testimonials')
      .then(data => setItems(data.items || []))
      .catch(() => setItems(FALLBACK))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="testimonials" aria-labelledby="testi-heading">
      <div className="container">
        <div className="section-header">
          <span className="sec-label">What Mothers Are Saying</span>
          <GoldRule />
          <h2 id="testi-heading">
            Real mothers.<br /><em>Real words.</em>
          </h2>
        </div>

        <div className="testi-grid">
          {loading ? (
            // skeleton
            [1, 2, 3].map(i => (
              <div key={i} className="testi-card" style={{ opacity: 0.4 }}>
                <span className="testi-quote">&ldquo;</span>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text" style={{ background: 'rgba(212,189,212,0.1)', height: '80px', borderRadius: '4px' }} />
                <div className="testi-divider" />
                <div style={{ background: 'rgba(212,189,212,0.1)', height: '16px', width: '60%', borderRadius: '4px', marginBottom: '6px' }} />
                <div style={{ background: 'rgba(212,189,212,0.1)', height: '12px', width: '80%', borderRadius: '4px' }} />
              </div>
            ))
          ) : (
            items.map((t, i) => (
              <div key={i} className="testi-card">
                <span className="testi-quote">&ldquo;</span>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-divider"></div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-detail">{t.detail}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
