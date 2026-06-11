import GoldRule from './GoldRule'

export default function FounderStory() {
  return (
    <section className="founder" id="founder" aria-labelledby="founder-heading">
      <div className="container">
        <div className="founder-grid">

         <video
  src="https://res.cloudinary.com/dddbrkjqo/video/upload/q_auto,f_auto/IMG_6193_z1ptrm.mp4"
  autoPlay
  muted
  loop
  playsInline
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
          <div className="founder-body">
            <span className="sec-label">The Founder&rsquo;s Story</span>
            <GoldRule />
            <h2 id="founder-heading">
              I had undiagnosed<br />
              postpartum depression.<br />
              <em>Nobody warned me.</em>
            </h2>

            <div className="founder-pull-quote">
              &ldquo;I was losing my hair in handfuls. I&rsquo;d gained weight I couldn&rsquo;t shift.
              I had zero confidence. I spent every rupee I earned on my baby — while my own body was
              quietly falling apart.&rdquo;
            </div>

            <p>
              I tried every supplement I saw on Instagram. The Ayurvedic tonics that tasted terrible.
              The biotin gummies. The prenatal vitamins that weren&rsquo;t even formulated for postpartum.
              Nothing worked. And the worst part? Nobody had prepared me for any of it.
            </p>
            <p>
              Postpartum hair fall typically peaks at 3–5 months after delivery. Nearly 1 in 5 Indian
              mothers experience undiagnosed postpartum depression. And yet, there was no science-backed,
              Indian-formulated supplement that addressed all of it — safely, honestly, and without
              the pseudo-science.
            </p>
            <p>So I built it. Not as a business first. As the thing I desperately needed and couldn&rsquo;t find.</p>
            <p>
              Every ingredient in every Mumma Matters formula is in it for a clinically validated reason.
              Shatavari because it&rsquo;s the most studied galactagogue for Indian women. Iron as bisglycinate
              because it&rsquo;s 64% gentler than the sulphate form that makes you constipated. Magnesium
              glycinate because postpartum sleep deprivation depletes it overnight.
            </p>
            <p>This is not another wellness brand. This is a mother talking to mothers.</p>

            <div className="founder-signature">
              <span className="founder-name">Tanya Singh</span>
              <span className="founder-title">Founder, Mumma Matters · Mother · Delhi</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
