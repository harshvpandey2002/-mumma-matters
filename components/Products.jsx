'use client'

import { useState, useRef } from 'react'
import GoldRule from './GoldRule'
import { castVote, subscribeEmail } from '../lib/api'

const SKU_NAMES = {
  conceive: 'The Conceive Formula',
  nursing:  'The Nursing Formula',
  rebuild:  'The Rebuild Formula',
}

const voteButtonBase = {
  width: '100%', padding: '11px', background: 'transparent',
  border: '1px solid var(--plum)', color: 'var(--plum)',
  fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: '600',
  letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
  transition: 'all 0.3s', display: 'flex', alignItems: 'center',
  justifyContent: 'center', gap: '8px',
}

const voteButtonVoted = {
  ...voteButtonBase,
  background: 'var(--gold)', borderColor: 'var(--gold)',
  color: 'var(--plum-dark)', cursor: 'default',
}

export default function Products() {
  const [votes, setVotes]     = useState({ conceive: 0, nursing: 0, rebuild: 0 })
  const [voted, setVoted]     = useState({ conceive: false, nursing: false, rebuild: false })
  const [voting, setVoting]   = useState({ conceive: false, nursing: false, rebuild: false })
  const [showSummary, setShowSummary] = useState(false)

  // Summary email
  const [summaryEmail, setSummaryEmail]           = useState('')
  const [summaryEmailStatus, setSummaryEmailStatus] = useState('idle')
  const [summaryEmailErr, setSummaryEmailErr]     = useState('')
  const summaryRef = useRef(null)

  async function handleVoteClick(sku) {
    if (voted[sku] || voting[sku]) return
    setVoting({ ...voting, [sku]: true })
    // Just track locally — actual vote+email saved when user submits summary email
    setVotes({ ...votes, [sku]: votes[sku] + 1 })
    setVoted({ ...voted, [sku]: true })
    setShowSummary(true)
    setVoting({ ...voting, [sku]: false })
    setTimeout(() => {
      summaryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 400)
  }

  async function handleSummaryEmailSubmit() {
    const email = summaryEmail.trim()
    if (!email || !email.includes('@')) {
      setSummaryEmailErr('Please enter a valid email.')
      return
    }
    setSummaryEmailStatus('loading')
    setSummaryEmailErr('')
    try {
      // Find which sku was voted and cast real vote with email
      const votedSku = Object.keys(voted).find(k => voted[k])
      if (votedSku) {
        await castVote({ email, formula: votedSku })
      }
      await subscribeEmail({ email, formulaInterest: votedSku || 'general', source: 'product-card' })
      setSummaryEmailStatus('success')
    } catch (err) {
      setSummaryEmailStatus('error')
      setSummaryEmailErr(err.message || 'Something went wrong. Try again.')
    }
  }

  const totalVotes = votes.conceive + votes.nursing + votes.rebuild
  const maxVotes   = Math.max(votes.conceive, votes.nursing, votes.rebuild)
  const topSku     = maxVotes > 0 ? Object.keys(votes).find(k => votes[k] === maxVotes) : null
  const topSkuLabel = topSku ? SKU_NAMES[topSku].split(' ')[1] : '—'

  function VoteArea({ sku }) {
    if (voted[sku]) {
      return (
        <div style={{ textAlign: 'center', marginTop: '14px' }}>
          <div style={{ ...voteButtonVoted, pointerEvents: 'none' }}>
            <span>✓ You&rsquo;re counted in!</span>
          </div>
          {votes[sku] > 0 && (
            <div style={{ fontSize: '0.72rem', color: 'var(--gold)', marginTop: '8px', fontFamily: 'var(--sans)' }}>
              {votes[sku]} {votes[sku] === 1 ? 'mumma wants this' : 'mummas want this'}
            </div>
          )}
        </div>
      )
    }
    return (
      <div style={{ marginTop: '14px' }}>
        <button
          onClick={() => handleVoteClick(sku)}
          disabled={voting[sku]}
          style={{ ...voteButtonBase, opacity: voting[sku] ? 0.6 : 1 }}
        >
          <span>{voting[sku] ? 'Saving…' : '✋ I want this — count me in'}</span>
        </button>
      </div>
    )
  }

  return (
    <section className="products" id="products" aria-labelledby="products-heading">
      <div className="container">

        <div className="section-header">
          <span className="sec-label">Our Formulas</span>
          <GoldRule />
          <h2 id="products-heading">Three formulas.<br />One complete new motherhood journey.</h2>
        </div>

        <p className="products-intro-line">
          Each formula is a daily powder sachet — dissolve in warm water or milk. No horse-sized tablets.
        </p>

        <div className="products-grid">

          {/* ── SKU 1 — CONCEIVE ── */}
          <div className="product-card">
            <span className="product-tag">Coming Soon</span>
            <div className="product-image">
              <div className="product-image-inner">
                <span className="product-symbol">✦</span>
              </div>
            </div>
            <div className="product-info">
              <span className="product-phase">For Women Preparing to Conceive</span>
              <h3 className="product-name">The Conceive Formula</h3>
              <p className="product-tagline">Your body deserves to be ready before it begins.</p>
              <div className="product-divider"></div>
              <p style={{ fontSize: '0.85rem', color: 'var(--plum-mid)', lineHeight: '1.7', marginBottom: '18px' }}>
                A daily powder sachet scientifically formulated to support hormonal balance, reproductive
                health and cortisol regulation — so your body is truly ready to conceive. Rooted in
                Ayurveda. Backed by clinical science.
              </p>
              <VoteArea sku="conceive" />
            </div>
          </div>

          {/* ── SKU 2 — NURSING (featured) ── */}
          <div className="product-card" style={{ borderColor: 'rgba(200,164,106,0.5)', boxShadow: '0 0 0 1px rgba(200,164,106,0.2)' }}>
            <span className="product-tag" style={{ background: 'var(--gold)', color: 'var(--plum-dark)' }}>
              Launching First
            </span>
            <div className="product-image" style={{ background: 'linear-gradient(145deg,#5C3060,#3A1F3A)' }}>
              <div className="product-image-inner" style={{ borderColor: 'rgba(200,164,106,0.5)' }}>
                <span className="product-symbol">♡</span>
              </div>
            </div>
            <div className="product-info">
              <span className="product-phase">For Lactating Mothers · 0–12 Months Postpartum</span>
              <h3 className="product-name">The Nursing Formula</h3>
              <p className="product-tagline">More milk. Less hair fall. Back to you.</p>
              <div className="product-divider"></div>
              <p style={{ fontSize: '0.85rem', color: 'var(--plum-mid)', lineHeight: '1.7', marginBottom: '18px' }}>
                The first postpartum powder sachet formulated for Indian nursing mothers —
                addressing the three things that matter most: milk supply, hair fall, and the quiet work
                of feeling like yourself again. 100% safe for breastfeeding. OB-GYN reviewed.
              </p>
              <VoteArea sku="nursing" />
            </div>
          </div>

          {/* ── SKU 3 — REBUILD ── */}
          <div className="product-card">
            <span className="product-tag">Coming Soon</span>
            <div className="product-image">
              <div className="product-image-inner">
                <span className="product-symbol">✿</span>
              </div>
            </div>
            <div className="product-info">
              <span className="product-phase">Post-Weaning · 6–36 Months Postpartum</span>
              <h3 className="product-name">The Rebuild Formula</h3>
              <p className="product-tagline">Hormones. Hair. Skin. Mood. Confidence.</p>
              <div className="product-divider"></div>
              <p style={{ fontSize: '0.85rem', color: 'var(--plum-mid)', lineHeight: '1.7', marginBottom: '18px' }}>
                After weaning, your hormones shift dramatically. Your body needs to rebuild — not just
                recover. A daily powder sachet to reset hormones, restore hair growth, revive skin,
                and return the energy and confidence pregnancy quietly took away.
              </p>
              <VoteArea sku="rebuild" />
            </div>
          </div>

        </div>

        {/* ── Summary (appears after any vote) ── */}
        {showSummary && (
          <>
            <div ref={summaryRef} style={{ marginTop: '40px', background: 'var(--plum-dark)', padding: '40px', textAlign: 'center', border: '1px solid rgba(200,164,106,0.2)' }}>
              <span className="sec-label" style={{ color: 'var(--gold)' }}>Pre-Order Interest</span>
              <h3 style={{ fontFamily: 'var(--serif)', color: 'var(--ivory)', margin: '8px 0 6px' }}>
                Mummas are already raising their hands.
              </h3>
              <p style={{ color: 'rgba(212,189,212,0.65)', fontSize: '0.88rem', marginBottom: '28px' }}>
                Every vote tells us you need this. We are building it for you.
              </p>
              <div style={{ display: 'flex', gap: '0', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ padding: '20px 40px', borderRight: '1px solid rgba(200,164,106,0.15)' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '2.8rem', color: 'var(--gold)', display: 'block', lineHeight: '1' }}>{totalVotes}</span>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--sans)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(212,189,212,0.5)' }}>Total hands raised</span>
                </div>
                <div style={{ padding: '20px 40px', borderRight: '1px solid rgba(200,164,106,0.15)' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '2.8rem', color: 'var(--gold)', display: 'block', lineHeight: '1' }}>{topSkuLabel}</span>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--sans)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(212,189,212,0.5)' }}>Most wanted formula</span>
                </div>
                <div style={{ padding: '20px 40px' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '2.8rem', color: 'var(--gold)', display: 'block', lineHeight: '1' }}>Free</span>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--sans)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(212,189,212,0.5)' }}>First month for early voters</span>
                </div>
              </div>
            </div>

            {/* Email capture after vote */}
            <div style={{ marginTop: '24px', background: 'var(--blush)', padding: '32px 40px', border: '1px solid rgba(212,189,212,0.3)', textAlign: 'center' }}>
              {summaryEmailStatus === 'success' ? (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💜</div>
                  <h4 style={{ fontFamily: 'var(--serif)', color: 'var(--plum)', marginBottom: '6px' }}>You&rsquo;re on the early access list.</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--plum-mid)' }}>We&rsquo;ll email you the moment your formula is ready to ship.</p>
                </div>
              ) : (
                <>
                  <h4 style={{ fontFamily: 'var(--serif)', color: 'var(--plum)', marginBottom: '6px' }}>You&rsquo;re in. We&rsquo;ll let you know first. 💜</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--plum-mid)', marginBottom: '20px' }}>Leave your email and we&rsquo;ll notify you before anyone else.</p>
                  <div style={{ display: 'flex', gap: '0', maxWidth: '480px', margin: '0 auto' }}>
                    <input
                      type="email"
                      value={summaryEmail}
                      onChange={(e) => { setSummaryEmail(e.target.value); setSummaryEmailErr('') }}
                      onKeyDown={(e) => e.key === 'Enter' && handleSummaryEmailSubmit()}
                      placeholder="your@email.com"
                      disabled={summaryEmailStatus === 'loading'}
                      style={{ flex: '1', padding: '13px 18px', border: '1px solid rgba(79,45,79,0.3)', borderRight: 'none', fontFamily: 'var(--sans)', fontSize: '0.88rem', background: 'white', color: 'var(--plum)', outline: 'none' }}
                    />
                    <button
                      onClick={handleSummaryEmailSubmit}
                      disabled={summaryEmailStatus === 'loading'}
                      style={{ padding: '13px 24px', background: 'var(--plum)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: summaryEmailStatus === 'loading' ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap', opacity: summaryEmailStatus === 'loading' ? 0.7 : 1 }}>
                      {summaryEmailStatus === 'loading' ? 'Saving…' : 'Notify Me'}
                    </button>
                  </div>
                  {summaryEmailErr && (
                    <p style={{ marginTop: '8px', fontSize: '0.78rem', color: '#e07070', fontFamily: 'var(--sans)' }}>{summaryEmailErr}</p>
                  )}
                </>
              )}
            </div>
          </>
        )}

      </div>
    </section>
  )
}
