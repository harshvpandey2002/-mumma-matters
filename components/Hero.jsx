export default function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
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

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
          <div className="proof-item">
            <span className="proof-num">1L+</span>
            <span className="proof-label">Mothers in our<br />community</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-image-frame">
          <p className="hero-placeholder-text">
            [Replace with product lifestyle photography —<br />
            a mother, warm light, morning ritual, sachet in hand]
          </p>
          <div className="hero-badge">
            <span className="badge-pill">OB-GYN Reviewed</span>
            <span className="badge-pill">FSSAI Compliant</span>
            <span className="badge-pill">No Artificial Additives</span>
            <span className="badge-pill">Breastfeeding Safe</span>
          </div>
        </div>
      </div>
    </section>
  )
}
