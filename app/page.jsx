import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FounderStory from '@/components/FounderStory'
import Products from '@/components/Products'
import WhyMummaMatters from '@/components/WhyMummaMatters'
import HowItWorks from '@/components/HowItWorks'
import ClubMumma from '@/components/ClubMumma'
import ForDoctors from '@/components/ForDoctors'
import Testimonials from '@/components/Testimonials'
import Blogs from '@/components/Blogs'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FounderStory />
        <Products />
        <WhyMummaMatters />
        <HowItWorks />
        <ClubMumma />
        <ForDoctors />
        <Testimonials />
        <Blogs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
