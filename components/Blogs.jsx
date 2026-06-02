import GoldRule from './GoldRule'

const BLOG_POSTS = [
  {
    cat: 'Hair Fall',
    meta: 'Dr. [Name] · OB-GYN · 5 min read',
    title: 'Why Your Hair Falls Out 3 Months After Delivery — And What Actually Stops It',
    excerpt: 'Postpartum telogen effluvium peaks at 3–5 months and affects up to 90% of Indian mothers. Here\'s the difference between what helps and what\'s just marketing.',
  },
  {
    cat: 'Hormones',
    meta: 'Nutritionist [Name] · 7 min read',
    title: 'The Postpartum Hormone Crash Is Real — And Your Indian Diet Probably Isn\'t Fixing It',
    excerpt: 'Estrogen and progesterone drop by 90% within 48 hours of delivery. Here\'s what that actually means for your body — and the nutrients that help your hormones recover.',
  },
  {
    cat: 'Breastfeeding',
    meta: 'Lactation Consultant [Name] · IBCLC · 6 min read',
    title: 'Shatavari and Breast Milk Supply — What the 2022 Indian Clinical Trial Actually Found',
    excerpt: 'A double-blind Indian RCT confirmed what Ayurveda has known for centuries. Here\'s what the study actually said — and the dose that matters.',
  },
  {
    cat: 'Fertility',
    meta: 'Dr. [Name] · Reproductive Endocrinologist · 8 min read',
    title: 'PCOS and Trying to Conceive: Why Myo-Inositol at the 40:1 Ratio Changes Everything',
    excerpt: 'The 40:1 ratio of Myo-Inositol to D-Chiro-Inositol is the most clinically studied intervention for PCOS fertility. Most Indian supplements get the ratio completely wrong.',
  },
  {
    cat: 'Postpartum Depression',
    meta: 'Dr. [Name] · Psychiatrist · 6 min read',
    title: '1 in 5 Indian Mothers Have Postpartum Depression. Most Go Undiagnosed. Here\'s Why.',
    excerpt: 'Postpartum depression in India is vastly under-reported, under-diagnosed and under-treated. The silence around it is costing mothers and babies both.',
  },
  {
    cat: 'Nutrition',
    meta: 'Nutritionist [Name] · RD · 5 min read',
    title: "The Indian Vegetarian Mother's Postpartum Deficiency Problem — And the Nutrients Nobody Prescribes",
    excerpt: 'B12, DHA, Choline, and Iron deficiencies are epidemic among vegetarian Indian mothers postpartum. Here\'s the evidence — and why your methi laddoos alone aren\'t enough.',
  },
]

export default function Blogs() {
  return (
    <section className="blogs" id="blogs" aria-labelledby="blogs-heading">
      <div className="container">
        <div className="section-header">
          <span className="sec-label">Expert Reads</span>
          <GoldRule />
          <h2 id="blogs-heading">
            Know what&rsquo;s happening<br />in your body.
          </h2>
          <p>Written by OB-GYNs, lactation consultants and nutritionists. No wellness fluff. Only evidence.</p>
        </div>

        <div className="blogs-grid">
          {BLOG_POSTS.map((post) => (
            <div key={post.title} className="blog-card">
              <div className="blog-image">
                <span className="blog-cat">{post.cat}</span>
                <p className="blog-img-text">[Feature image]</p>
              </div>
              <div className="blog-body">
                <div className="blog-meta">{post.meta}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-read">Read Article →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="blogs-cta">
          <a href="#" className="btn-outline">Read All Expert Articles</a>
        </div>
      </div>
    </section>
  )
}
