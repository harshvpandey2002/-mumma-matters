import GoldRule from './GoldRule'

const INGREDIENTS = [
  { icon: '🌿', name: 'Shatavari',           desc: "India's most studied galactagogue. Clinically confirmed to boost prolactin and breast milk supply. Our Ayurvedic anchor in all three formulas.", note: '2022 Indian RCT · All 3 SKUs' },
  { icon: '⚡', name: 'Iron Bisglycinate',    desc: 'The #1 cause of postpartum hair fall is low ferritin. We use the most bioavailable, gentlest form of iron — the one your gut will actually thank you for.', note: 'Clinical evidence · All 3 SKUs' },
  { icon: '🧬', name: 'KSM-66 Ashwagandha',  desc: 'The only ashwagandha root extract with 24 human clinical trials. Cortisol control, hormone balance, and energy — safely, without the generic powder compromise.', note: '24 Human RCTs · SKU 1 + 3' },
  { icon: '🌊', name: 'Algae DHA',            desc: "Passes into breast milk and builds your baby's brain and eyes. Algae-source means zero mercury, no fishy taste, and completely vegan-safe.", note: 'Baby-brain benefit · SKU 2' },
  { icon: '✨', name: 'Collagen Peptides',    desc: 'The therapeutic dose that actually makes a visible difference to skin elasticity, hair structure, and joint recovery after the demands of pregnancy.', note: 'Therapeutic dose · Rebuild Formula' },
  { icon: '🌸', name: 'Saffron (Affron)',     desc: 'Clinical evidence for mood elevation, mild postpartum depression support, and skin radiance. The feel-good ingredient — standardised and proven.', note: 'Mood + skin · SKU 3' },
  { icon: '💊', name: 'Methylfolate (5-MTHF)', desc: 'Not folic acid. The active form that works for the 40% of Indian women with the MTHFR gene variant — the one most Indian prenatals quietly skip.', note: 'MTHFR-ready · SKU 1 + 2' },
  { icon: '🧘', name: 'Magnesium Glycinate',  desc: 'Depleted overnight by sleep deprivation. Glycinate form means no laxative effect. Supports cortisol, sleep quality, and muscle recovery — all in one mineral.', note: 'Sleep + cortisol · All 3 SKUs' },
]

export default function Ingredients() {
  return (
    <section className="ingredients" aria-labelledby="ing-heading">
      <div className="container">
        <div className="section-header">
          <span className="sec-label">The Science Inside</span>
          <GoldRule />
          <h2 id="ing-heading">Every ingredient earns<br />its place. Always.</h2>
          <p>
            We trace every ingredient to its source. No mystery blends. No fairy-dust dosing.
            Just clinical evidence and ancient wisdom, together.
          </p>
        </div>

        <div className="ing-grid">
          {INGREDIENTS.map((ing) => (
            <div key={ing.name} className="ing-card">
              <span className="ing-icon">{ing.icon}</span>
              <div className="ing-name">{ing.name}</div>
              <p className="ing-desc">{ing.desc}</p>
              <span className="ing-note">{ing.note}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <a href="#products" className="btn-outline">See Full Formulation Breakdown</a>
        </div>
      </div>
    </section>
  )
}
