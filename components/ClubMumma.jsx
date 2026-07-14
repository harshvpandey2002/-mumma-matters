'use client'

import { useState, useEffect } from 'react'
import GoldRule from './GoldRule'
import { getContent } from '../lib/api'

const DEFAULT_LINK = 'https://chat.whatsapp.com/IoShr91atAu5p8MFEhgH79'

export default function ClubMumma() {
  const [data, setData]     = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getContent('club-mumma')
      .then(d => setData(d))
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [])

  const features    = data?.features || []
  const stats       = data?.stats || []
  const whatsappLink = data?.whatsappLink || DEFAULT_LINK

  return (
    <section className="club" id="club" aria-labelledby="club-heading">
      <div className="container">
        <span className="sec-label">Community</span>
        <GoldRule />
        <h2 id="club-heading">
          Join Club<br /><em>Mumma Matters</em>
        </h2>

        <p className="club-desc">
          A private WhatsApp community for mothers who refuse to put themselves last.
          Real conversations. No advice columns. No perfect parenting.
          Just mothers talking to mothers — honestly.
        </p>

        <div className="club-features">
          {loading ? (
            [1, 2, 3, 4, 5, 6].map(i => (
              <span key={i} className="club-feat" style={{ opacity: 0.3, minWidth: '140px', display: 'inline-block' }}>&nbsp;</span>
            ))
          ) : (
            features.map((feat) => (
              <span key={feat} className="club-feat">{feat}</span>
            ))
          )}
        </div>

        <a
          href={whatsappLink}
          className="club-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join Club Mumma Matters on WhatsApp"
        >
          <span className="club-btn-icon">💬</span>
          Join on WhatsApp — It&rsquo;s Free
        </a>

        <p className="club-privacy">
          We never spam. No sales pitches in the group. Purely a community of mothers. 💜
        </p>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(200,164,106,0.15)', display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {loading ? (
            [1, 2, 3].map(i => (
              <div key={i} style={{ textAlign: 'center', opacity: 0.3 }}>
                <div style={{ background: 'rgba(212,189,212,0.1)', height: '40px', width: '80px', borderRadius: '4px', margin: '0 auto 8px' }} />
                <div style={{ background: 'rgba(212,189,212,0.1)', height: '12px', width: '100px', borderRadius: '4px' }} />
              </div>
            ))
          ) : (
            stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--ivory)', display: 'block', lineHeight: '1' }}>
                  {stat.num}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'rgba(212,189,212,0.55)', fontFamily: 'var(--sans)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {stat.label}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
