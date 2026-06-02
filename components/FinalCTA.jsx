import GoldRule from './GoldRule'

export default function FinalCTA() {
  return (
    <section style={{ background: 'var(--blush)', textAlign: 'center', padding: '100px 40px' }} aria-labelledby="cta-heading">
      <div className="container" style={{ maxWidth: '640px' }}>
        <span className="sec-label">Begin Your Recovery</span>
        <GoldRule />
        <h2 id="cta-heading">
          You gave everything<br />
          to become a mother.<br />
          <em>Now it&rsquo;s your turn.</em>
        </h2>
        <p style={{ margin: '1.5rem 0 2.5rem', fontSize: '1rem' }}>
          Take the 60-second quiz and find your formula. Free shipping across India. Cancel anytime.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#products" className="btn-primary">Find My Formula</a>
          <a href="#club" className="btn-outline">Join Club Mumma</a>
        </div>
      </div>
    </section>
  )
}
