import HomeHero from '@/components/home/HomeHero'
import FeaturedServices from '@/components/home/FeaturedServices'
import ServicesByCategory from '@/components/home/ServicesByCategory'
import WhyUs from '@/components/home/WhyUs'
import StatsSection from '@/components/home/StatsSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div id="services">
        <FeaturedServices />
      </div>
      <StatsSection />
      <ServicesByCategory />
      <WhyUs />
      <CTASection />
    </>
  )
}
