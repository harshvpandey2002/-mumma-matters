'use client'

import { useState, useEffect } from 'react'
import { subscribeEmail } from '../lib/api'

export default function Hero() {
  const [showInput, setShowInput] = useState(false)
  const [email, setEmail]         = useState('')
  const [status, setStatus]       = useState('idle')
  const [errMsg, setErrMsg]       = useState('')
  const [votedSku, setVotedSku]   = useState(null)

  // Listen for the custom event fired from Products when a card button is clicked
  useEffect(() => {
    function handleVoteIntent(e) {
      setVotedSku(e.detail?.sku || null)
      setShowInput(true)
      // Scroll to hero section
      document.getElementById('hero-email-capture')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    window.addEventListener('mumma:vote-intent', handleVoteIntent)
    return () => window.removeEventListener('mumma:vote-intent', handleVoteIntent)
  }, [])

  async function handleSubscribe() {
    const trimmed = email.trim()
    if (!trimmed || !trimmed.includes('@')) {
      setErrMsg('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    setErrMsg('')
    try {
      await subscribeEmail({
        email: trimmed,
        formulaInterest: votedSku || 'general',
        source: 'hero',
      })
      // Also fire the vote if a sku was selected
      if (votedSku) {
        const { castVote } = await import('../lib/api')
        await castVote({ email: trimmed, formula: votedSku })
        // Notify Products that vote is done
        window.dispatchEvent(new CustomEvent('mumma:vote-done', { detail: { sku: votedSku, email: trimmed } }))
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSubscribe()
  }

  return (
    <section className="hero" aria-label="Hero section" id="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">India&rsquo;s First Postpartum Recovery Formula</span>

        <h1>
          You gave everything<br />
          to become a <em>mother.</em><br />
          Now it&rsquo;s your turn.
        </h1>

        <p className="hero-sub">
          Science-backed. Ayurveda-rooted. Safe for breastfeeding.
          The postpartum supplement Indian mothers have been waiting for —
          for hair fall, hormones, milk supply, and the quiet work of feeling like yourself again.
        </p>

        {/* ── Email capture — revealed when product card button is clicked ── */}
        <div id="hero-email-capture">
          {status === 'success' ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 20px', background: 'rgba(200,164,106,0.1)', border: '1px solid rgba(200,164,106,0.3)', maxWidth: '460px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.3rem' }}>💜</span>
              <p style={{ margin: 0, fontFamily: 'var(--sans)', fontSize: '0.88rem', color: 'var(--plum-pale)' }}>
                You&rsquo;re on the early access list. We&rsquo;ll reach out before anyone else.
              </p>
            </div>
          ) : showInput ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '460px', marginBottom: '16px' }}>
              {votedSku && (
                <p style={{ margin: 0, fontFamily: 'var(--sans)', fontSize: '0.78rem', color: 'var(--gold)', letterSpacing: '0.04em' }}>
                  ✋ You selected <strong>{votedSku.charAt(0).toUpperCase() + votedSku.slice(1)} Formula</strong> — enter your email to confirm your vote.
                </p>
              )}
              <div style={{ display: 'flex', gap: '0' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrMsg('') }}
                  onKeyDown={handleKeyDown}
                  placeholder="your@email.com"
                  autoFocus
                  disabled={status === 'loading'}
                  style={{
                    flex: '1', padding: '13px 18px',
                    border: '1px solid rgba(212,189,212,0.3)', borderRight: 'none',
                    background: 'rgba(255,255,255,0.06)', color: 'var(--ivory)',
                    fontFamily: 'var(--sans)', fontSize: '0.88rem', outline: 'none',
                  }}
                />
                <button
                  onClick={handleSubscribe}
                  disabled={status === 'loading'}
                  style={{
                    padding: '13px 22px', background: 'var(--gold)', color: 'var(--plum-dark)',
                    fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: '700',
                    letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap',
                    opacity: status === 'loading' ? 0.7 : 1,
                  }}
                >
                  {status === 'loading' ? 'Saving…' : 'Count Me In'}
                </button>
              </div>
              {errMsg && (
                <p style={{ margin: 0, fontFamily: 'var(--sans)', fontSize: '0.78rem', color: '#f08080' }}>
                  {errMsg}
                </p>
              )}
              <p style={{ margin: 0, fontFamily: 'var(--sans)', fontSize: '0.72rem', color: 'rgba(212,189,212,0.45)', letterSpacing: '0.03em' }}>
                No spam. Just a heads-up when your formula is ready to ship.
              </p>
            </div>
          ) : null}
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
          <a href="#products" className="btn-gold">Discover Your Formula</a>
          <a
            href="#founder"
            className="btn-outline"
            style={{ borderColor: 'rgba(212,189,212,0.4)', color: 'var(--plum-pale)' }}
          >
            Our Story
          </a>
        </div>

        <div className="hero-proof">
          <div className="proof-item">
            <span className="proof-num">22</span>
            <span className="proof-label">Clinically-studied<br />ingredients</span>
          </div>
          <div className="proof-item">
            <span className="proof-num">3</span>
            <span className="proof-label">Life-stage<br />formulas</span>
          </div>
          <div className="proof-item">
            <span className="proof-num">100%</span>
            <span className="proof-label">Safe for<br />breastfeeding</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-image-frame">
         <img 
  src="/mm pic.jpeg" 
  alt="Mumma Matters" 
 style={{ 
  width: '100%', 
  height: 'auto', 
  objectFit: 'contain',
  objectPosition: 'center center',
  display: 'block'
}}
/>
          {/* <div className="hero-badge">
            <span className="badge-pill">OB-GYN Reviewed</span>
            <span className="badge-pill">FSSAI Compliant</span>
            <span className="badge-pill">No Artificial Additives</span>
            <span className="badge-pill">Breastfeeding Safe</span>
          </div> */}
        </div>
      </div>
    </section>
  )
}
