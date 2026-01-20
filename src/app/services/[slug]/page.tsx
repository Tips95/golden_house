import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services'
import ServiceHero from '@/components/services/ServiceHero'
import ProcessSection from '@/components/services/ProcessSection'
import PricingSection from '@/components/services/PricingSection'
import FAQSection from '@/components/services/FAQSection'
import ProblemsSection from '@/components/services/ProblemsSection'
import Calculator from '@/components/calculator/Calculator'
import CasesSection from '@/components/services/CasesSection'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    return {
      title: 'Услуга не найдена',
    }
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map(slug => ({
    slug,
  }))
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <ServiceHero
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        priceFrom={service.priceFrom}
        priceUnit={service.priceUnit}
        benefits={service.benefits}
        image={service.image}
      />

      <ProblemsSection
        problems={service.problems}
        solutions={service.solutions}
      />

      {service.calculatorType && (
        <Calculator type={service.calculatorType} serviceName={service.title} />
      )}

      <ProcessSection steps={service.processSteps} />

      <PricingSection pricing={service.pricing} />

      {service.cases && service.cases.length > 0 && (
        <CasesSection cases={service.cases} />
      )}

      <FAQSection faqs={service.faq} />
    </>
  )
}
