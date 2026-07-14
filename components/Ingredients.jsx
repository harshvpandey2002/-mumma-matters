'use client'

import { useState, useEffect } from 'react'
import GoldRule from './GoldRule'
import { getContent } from '../lib/api'

export default function Ingredients() {
  const [items, setItems]   = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getContent('ingredients')
      .then(data => setItems(data.items || []))
      .catch(() => setItems([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="ingredients" aria-labelledby="ing-heading">
      <div className="container">
        <div className="section-header">
          <span className="sec-label">The Science Inside</span>
          <GoldRule />
          <h2 id="ing-heading">Every ingredient earns<br />its place. Always.</h2>
          <p>
            We trace every ingredient to its source. No mystery blends. No fairy-dust dosing.
            Just clinical evidence and ancient wisdom, together.
          </p>
        </div>

        <div className="ing-grid">
          {loading ? (
            [1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="ing-card" style={{ opacity: 0.4 }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>•</div>
                <div style={{ background: 'rgba(212,189,212,0.1)', height: '18px', width: '60%', borderRadius: '4px', margin: '0 auto 10px' }} />
                <div style={{ background: 'rgba(212,189,212,0.1)', height: '60px', borderRadius: '4px' }} />
              </div>
            ))
          ) : (
            items.map((ing) => (
              <div key={ing.name} className="ing-card">
                <span className="ing-icon">{ing.icon}</span>
                <div className="ing-name">{ing.name}</div>
                <p className="ing-desc">{ing.desc}</p>
                <span className="ing-note">{ing.note}</span>
              </div>
            ))
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <a href="#products" className="btn-outline">See Full Formulation Breakdown</a>
        </div>
      </div>
    </section>
  )
}
