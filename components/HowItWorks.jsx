'use client'

import { useState, useEffect } from 'react'
import GoldRule from './GoldRule'
import { getContent } from '../lib/api'

export default function HowItWorks() {
  const [steps, setSteps]   = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getContent('how-it-works')
      .then(data => setSteps(data.steps || []))
      .catch(() => setSteps([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="hiw" aria-labelledby="hiw-heading">
      <div className="container">
        <div className="section-header">
          <span className="sec-label">How It Works</span>
          <GoldRule />
          <h2 id="hiw-heading">As simple as your morning cup.</h2>
        </div>

        <div className="hiw-steps">
          {loading ? (
            [1, 2, 3, 4].map(i => (
              <div key={i} className="hiw-step" style={{ opacity: 0.4 }}>
                <div className="hiw-circle">
                  <span className="hiw-step-num">{i}</span>
                </div>
                <div style={{ background: 'rgba(212,189,212,0.1)', height: '20px', width: '70%', borderRadius: '4px', margin: '12px auto 8px' }} />
                <div style={{ background: 'rgba(212,189,212,0.1)', height: '48px', borderRadius: '4px' }} />
              </div>
            ))
          ) : (
            steps.map((step) => (
              <div key={step.num} className="hiw-step">
                <div className="hiw-circle">
                  <span className="hiw-step-num">{step.num}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
