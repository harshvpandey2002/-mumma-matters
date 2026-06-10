function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

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
          <p style={{ fontSize: '0.72rem', color: 'rgba(212,189,212,0.35)', marginTop: '0.4rem' }}>
            A brand by Matrescence Pvt. Ltd.
          </p>
          <div style={{ marginTop: '1.2rem', display: 'flex', gap: '10px' }}>
            {[
              { label: 'Instagram', Icon: IconInstagram },
              { label: 'WhatsApp',  Icon: IconWhatsApp },
              { label: 'YouTube',   Icon: IconYouTube },
            ].map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{ width: '38px', height: '38px', background: 'rgba(92,48,96,0.4)', border: '1px solid rgba(200,164,106,0.2)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--plum-pale)', textDecoration: 'none', transition: 'all 0.2s' }}
              >
                <Icon />
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
      </div>

      <div style={{ textAlign: 'center', paddingTop: '16px', borderTop: '1px solid rgba(200,164,106,0.08)', maxWidth: 'var(--max)', margin: '0 auto' }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(212,189,212,0.3)', fontFamily: 'var(--sans)' }}>
          Designed &amp; Developed by <span style={{ color: 'rgba(200,164,106,0.5)' }}>Tanya Singh Bhatnagar</span>
        </p>
      </div>

    </footer>
  )
}
