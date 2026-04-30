import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { CTABanner } from '@/components/CTABanner';
import { FAQ } from '@/components/FAQ';
import { SERVICES, CTA_VARIANTS } from '@/lib/constants';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is managed web scraping?',
    answer: 'Managed web scraping is a fully handled service where a provider like Pyronets builds, runs, and maintains web scrapers on your behalf — delivering clean, structured data directly to your systems.',
  },
  {
    question: 'How does Pyronets handle anti-bot systems?',
    answer: 'Pyronets uses residential proxy rotation, TLS fingerprint mimicking, and browser automation to bypass Cloudflare, Akamai, and other anti-bot systems reliably.',
  },
  {
    question: 'How is web scraping data delivered?',
    answer: 'Data is delivered via API, CSV, Google Sheets, or directly into your database — on a schedule that matches your needs (daily, hourly, or real-time).',
  },
  {
    question: 'How much does web scraping cost?',
    answer: 'Pricing depends on the number of websites, data points, and delivery frequency. Pyronets provides custom quotes — contact us for a free assessment.',
  },
  {
    question: 'Is web scraping legal?',
    answer: 'Web scraping publicly available data is generally legal. Pyronets operates within legal boundaries and respects robots.txt guidelines and applicable data laws.',
  },
];

const stats = [
  { value: '200+', label: 'Enterprise Clients', suffix: '' },
  { value: '99.8', label: 'Data Accuracy', suffix: '%' },
  { value: '50+', label: 'Quality Checks', suffix: '' },
  { value: '24/7', label: 'Dedicated Support', suffix: '' },
];

const steps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We analyze your data requirements and identify the best approach.',
  },
  {
    step: '02',
    title: 'Custom Build',
    description: 'Our engineers build and test custom scrapers for your sources.',
  },
  {
    step: '03',
    title: 'Quality Assurance',
    description: 'We validate accuracy with 50+ checks before delivery.',
  },
  {
    step: '04',
    title: 'Continuous Delivery',
    description: 'Automated data delivery on your schedule, 24/7 monitoring.',
  },
];

export default function Home() {
  const selectedServices = SERVICES.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Web Scraping"
        subtitle="at Enterprise Scale"
        description="Managed web scraping and data extraction for 200+ enterprises worldwide. Automated data collection with 99.8% accuracy."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* Trust Badges */}
      <Section background="light">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 glass rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
                <span className="text-secondary">{stat.suffix}</span>
              </p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Main Services */}
      <Section id="services">
        <div className="mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-4 animate-fade-in-up">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-fade-in-up delay-100">
            Data Solutions for Every Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            From competitive pricing to AI training data, we deliver accurate web data at enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features.slice(0, 4)}
              cta={{
                label: 'Learn More',
                href: service.href,
              }}
              index={index}
            />
          ))}
        </div>

        <div className="mt-14 text-center animate-fade-in-up delay-500">
          <Link
            href="/solution"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold text-foreground hover:text-primary glass-hover transition-all duration-300 group"
          >
            View All Solutions
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="dark" id="how-it-works">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-secondary mb-4 animate-fade-in-up">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in-up delay-100">
            How Pyronets Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass rounded-xl p-8 h-full glass-hover transition-all duration-300 hover:-translate-y-1">
                {/* Step number */}
                <div className="text-5xl font-bold text-gradient mb-6">
                  {item.step}
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="mb-12">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-4 animate-fade-in-up">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in-up delay-100">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl">
          <FAQ faqs={faqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <CTABanner
        title="Ready to Transform Your Data?"
        description="Get a free consultation and custom proposal for your web scraping needs. Discover how Pyronets can deliver the data your business needs."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}
