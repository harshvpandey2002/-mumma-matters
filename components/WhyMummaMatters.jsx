'use client'

import { useState, useEffect } from 'react'
import GoldRule from './GoldRule'
import { getContent } from '../lib/api'

export default function WhyMummaMatters() {
  const [cards, setCards]   = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getContent('why-us')
      .then(data => setCards(data.cards || []))
      .catch(() => setCards([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="why" id="why" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header">
          <span className="sec-label">Why Mumma Matters</span>
          <GoldRule />
          <h2 id="why-heading">
            Built different.<br /><em>For Indian mothers.</em>
          </h2>
          <p>Every other supplement was made for someone else. We were made for you.</p>
        </div>

        <div className="why-grid">
          {loading ? (
            [1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="why-card" style={{ opacity: 0.4 }}>
                <span className="why-num">0{i}</span>
                <div style={{ background: 'rgba(212,189,212,0.1)', height: '20px', width: '80%', borderRadius: '4px', margin: '10px 0 8px' }} />
                <div style={{ background: 'rgba(212,189,212,0.1)', height: '60px', borderRadius: '4px' }} />
              </div>
            ))
          ) : (
            cards.map((card) => (
              <div key={card.num} className="why-card">
                <span className="why-num">{card.num}</span>
                <h4>{card.title}</h4>
                <p>{card.body}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
