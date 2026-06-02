import GoldRule from './GoldRule'

const WHY_CARDS = [
  {
    num: '01',
    title: 'Methylfolate, not folic acid',
    body: '40% of Indian women carry the MTHFR gene variant and cannot convert synthetic folic acid. We use the active form that works for everyone — something most Indian prenatal supplements get wrong.',
  },
  {
    num: '02',
    title: "Iron that doesn't make you constipated",
    body: "We use ferrous bisglycinate — the chelated form with 64% fewer gastrointestinal side effects than the ferrous sulphate in standard prescriptions. Because being constipated after delivery is the last thing you need.",
  },
  {
    num: '03',
    title: 'KSM-66, not generic ashwagandha',
    body: 'KSM-66 is the only ashwagandha root extract with 24 human clinical trials. When we say ashwagandha, we mean the clinically proven form — not a generic powder with no standardisation.',
  },
  {
    num: '04',
    title: 'Shatavari — your dadi was right',
    body: 'A 2022 Indian double-blind RCT confirmed what Ayurveda has known for centuries — Shatavari root extract boosts prolactin and supports breast milk supply. Our brand thread across all three formulas.',
  },
  {
    num: '05',
    title: 'Powder sachets, not 6 tablets a day',
    body: "Because a new mother with a newborn in one arm is not going to remember to take six capsules. One sachet in warm water or milk. That's it. Done.",
  },
  {
    num: '06',
    title: 'Life-stage honest',
    body: "We don't make a pregnancy supplement. That's your doctor's territory. We are with you before pregnancy, through nursing, and through rebuilding — the stages nobody talks about.",
  },
]

export default function WhyMummaMatters() {
  return (
    <section className="why" id="why" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header">
          <span className="sec-label">Why Mumma Matters</span>
          <GoldRule />
          <h2 id="why-heading">
            Built different.<br /><em>For Indian mothers.</em>
          </h2>
          <p>Every other supplement was made for someone else. We were made for you.</p>
        </div>

        <div className="why-grid">
          {WHY_CARDS.map((card) => (
            <div key={card.num} className="why-card">
              <span className="why-num">{card.num}</span>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
