import './globals.css'
import ScrollInit from '@/components/ScrollInit'

export const metadata = {
  title: 'Mumma Matters — Postpartum Recovery Supplements for Indian Mothers | Because You Do',
  description:
    "India's first science-backed postpartum recovery supplement. Clinically formulated for Indian mothers — stops hair fall after delivery, balances hormones, boosts breast milk supply. Shatavari + Iron + Collagen. Safe for breastfeeding. Trusted by OB-GYNs.",
  keywords: [
    'postpartum supplements India',
    'hair fall after delivery',
    'breastfeeding supplement India',
    'postnatal vitamins India',
    'hormonal imbalance after pregnancy',
    'postpartum hair loss treatment',
    'shatavari supplement India',
    'iron supplement for new mothers',
    'postpartum recovery India',
    'best supplement after delivery India',
  ],
  openGraph: {
    title: 'Mumma Matters — Because You Do',
    description:
      "India's first science-backed postpartum recovery supplement. Built by a mother who went through it. For every mother who put herself last.",
    type: 'website',
    url: 'https://mummamatters.com',
    locale: 'en_IN',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    language: 'en-IN',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mumma Matters',
  url: 'https://mummamatters.com',
  description: "India's first science-backed postpartum recovery supplement brand for mothers",
  foundingDate: '2025',
  foundingLocation: { '@type': 'Place', name: 'New Delhi, India' },
  slogan: 'Because You Do',
  areaServed: 'IN',
  brand: { '@type': 'Brand', name: 'Mumma Matters' },
  product: [
    {
      '@type': 'Product',
      name: 'The Rebuild Formula',
      description: 'Post-weaning postpartum recovery supplement sachet',
      audience: { '@type': 'PeopleAudience', audienceType: 'Post-weaning mothers' },
    },
    {
      '@type': 'Product',
      name: 'The Nursing Formula',
      description: 'Breastfeeding-safe postpartum supplement sachet',
      audience: { '@type': 'PeopleAudience', audienceType: 'Lactating mothers' },
    },
    {
      '@type': 'Product',
      name: 'The Conceive Formula',
      description: 'Preconception fertility supplement sachet',
      audience: { '@type': 'PeopleAudience', audienceType: 'Women trying to conceive' },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        /> 
      </head>
      <body>
        <ScrollInit />
        {children}
      </body>
    </html>
  )
}
