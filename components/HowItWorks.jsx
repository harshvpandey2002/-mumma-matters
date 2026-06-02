import GoldRule from './GoldRule'

const STEPS = [
  {
    num: '1',
    title: 'Take the quiz',
    body: 'Conceiving, nursing, or rebuilding? Answer 3 questions and we\'ll tell you exactly which formula is yours.',
  },
  {
    num: '2',
    title: 'Dissolve one sachet',
    body: 'Mix in warm water, milk, or your morning chai. Mild taste. No added sugar. No artificial flavours.',
  },
  {
    num: '3',
    title: 'Feel the difference',
    body: 'Most women notice reduced hair fall within 6–8 weeks. Better energy and sleep often appear sooner.',
  },
  {
    num: '4',
    title: 'Upgrade naturally',
    body: 'As your life stage changes, your formula changes with you. Conceive → Nursing → Rebuild. The journey continues.',
  },
]

export default function HowItWorks() {
  return (
    <section className="hiw" aria-labelledby="hiw-heading">
      <div className="container">
        <div className="section-header">
          <span className="sec-label">How It Works</span>
          <GoldRule />
          <h2 id="hiw-heading">As simple as your morning cup.</h2>
        </div>

        <div className="hiw-steps">
          {STEPS.map((step) => (
            <div key={step.num} className="hiw-step">
              <div className="hiw-circle">
                <span className="hiw-step-num">{step.num}</span>
              </div>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
