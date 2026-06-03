export default function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="footer-grid">

        {/* Brand column */}
        <div className="footer-brand">
          <span style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: 'var(--ivory)', letterSpacing: '0.04em', fontStyle: 'italic' }}>
            Mumma Matters
          </span>
          <p>
            India&rsquo;s first science-backed postpartum recovery supplement.
            Built by a mother. For every mother who put herself last.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(212,189,212,0.35)', marginTop: '0.5rem' }}>
            Because You Do
          </p>
          <div style={{ marginTop: '1.2rem', display: 'flex', gap: '12px' }}>
            {[
              { label: 'Instagram', short: 'IG' },
              { label: 'WhatsApp',  short: 'WA' },
              { label: 'YouTube',   short: 'YT' },
            ].map(({ label, short }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{ width: '36px', height: '36px', background: 'rgba(92,48,96,0.4)', border: '1px solid rgba(200,164,106,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--plum-pale)', fontSize: '0.85rem', textDecoration: 'none' }}
              >
                {short}
              </a>
            ))}
          </div>
        </div>

        {/* Our Formulas */}
        <div>
          <div className="footer-heading">Our Formulas</div>
          <ul className="footer-links">
            <li><a href="#products">The Conceive Formula</a></li>
            <li><a href="#products">The Nursing Formula</a></li>
            <li><a href="#products">The Rebuild Formula</a></li>
            <li><a href="#products">The Mumma Gift Box</a></li>
            <li><a href="#products">Subscription Plans</a></li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <div className="footer-heading">Learn</div>
          <ul className="footer-links">
            <li><a href="#blogs">Expert Blog</a></li>
            <li><a href="#why">Ingredient Science</a></li>
            <li><a href="#founder">Our Story</a></li>
            <li><a href="#gynaec">For Doctors</a></li>
            <li><a href="#club">Club Mumma</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <div className="footer-heading">Support</div>
          <ul className="footer-links">
            <li><a href="#">Which formula is mine?</a></li>
            <li><a href="#">Shipping &amp; Returns</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="footer-legal">
          © 2025 Mumma Matters · All products are FSSAI compliant nutraceuticals.
          Not intended to diagnose, treat, cure or prevent any disease.
          Consult your doctor before use if pregnant or on medication.
        </p>
        <span className="footer-tagline">Because You Do 💜</span>
      </div>

      {/* Developer credit */}
      <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(200,164,106,0.08)', maxWidth: 'var(--max)', margin: '0 auto' }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(212,189,212,0.3)', fontFamily: 'var(--sans)' }}>
          Designed &amp; Developed by <span style={{ color: 'rgba(200,164,106,0.5)' }}>Tanya Singh Bhatnagar</span>
        </p>
      </div>

    </footer>
  )
}
