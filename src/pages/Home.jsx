import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import AboutPreview from '../components/home/AboutPreview'
import FeaturedClasses from '../components/home/FeaturedClasses'
import WhyChooseUs from '../components/home/WhyChooseUs'
import TeachersPreview from '../components/home/TeachersPreview'
import CTASection from '../components/home/CTASection'
import VisitVidasa from '../components/home/VisitVidasa'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <FeaturedClasses />
      <WhyChooseUs />
      <TeachersPreview />
      <VisitVidasa />
      <CTASection />
    </>
  )
}
