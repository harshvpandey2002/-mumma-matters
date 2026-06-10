import GoldRule from './GoldRule'

const FEATURES = [
  'Weekly expert Q&As',
  'Hair fall & recovery tips',
  'Hormone health guidance',
  'Early access to launches',
  'Members-only discounts',
  'Founder directly in the group',
]

const STATS = [
  { num: '1L+', label: 'Mothers reached' },
  { num: '600+', label: 'Community members' },
  { num: '₹0', label: 'Cost to join' },
]

export default function ClubMumma() {
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
          {FEATURES.map((feat) => (
            <span key={feat} className="club-feat">{feat}</span>
          ))}
        </div>

        <a
         href="https://chat.whatsapp.com/IoShr91atAu5p8MFEhgH79"
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
          {STATS.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--ivory)', display: 'block', lineHeight: '1' }}>
                {stat.num}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'rgba(212,189,212,0.55)', fontFamily: 'var(--sans)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
