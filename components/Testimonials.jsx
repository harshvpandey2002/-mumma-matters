import GoldRule from './GoldRule'

const TESTIMONIALS = [
  {
    text: 'I was shedding so much hair at 4 months postpartum that I stopped washing it every day out of fear. Six weeks on the Nursing Formula and I can finally see regrowth at my hairline. I cried when I noticed it.',
    name: 'Priya R.',
    detail: '4 months postpartum · Delhi NCR · Nursing Formula',
  },
  {
    text: 'My gynaec actually asked what I was taking when she saw my blood reports. My ferritin had gone from 8 to 34 in two months. I told her about Mumma Matters and she was genuinely impressed by the formulation.',
    name: 'Sneha M.',
    detail: '7 months postpartum · Bengaluru · Nursing Formula',
  },
  {
    text: 'After weaning I felt like my body was in complete hormonal chaos — mood swings, fatigue, skin that looked ten years older. The Rebuild Formula is the first thing I\'ve tried in 18 months of postpartum that actually made me feel like myself again.',
    name: 'Ananya K.',
    detail: '18 months postpartum · Mumbai · Rebuild Formula',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testi-heading">
      <div className="container">
        <div className="section-header">
          <span className="sec-label">What Mothers Are Saying</span>
          <GoldRule />
          <h2 id="testi-heading">
            Real mothers.<br /><em>Real words.</em>
          </h2>
        </div>

        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testi-card">
              <span className="testi-quote">&ldquo;</span>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-divider"></div>
              <div className="testi-name">{t.name}</div>
              <div className="testi-detail">{t.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
