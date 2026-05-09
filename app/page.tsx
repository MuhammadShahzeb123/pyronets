import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { CTABanner } from '@/components/CTABanner';
import { FAQ } from '@/components/FAQ';
import { SERVICES, CTA_VARIANTS } from '@/lib/constants';
import Link from 'next/link';

// Enterprise trust & quality messaging (Ficstar-inspired)
const trustIndicators = [
  { value: '200+', label: 'Enterprise Clients', supporting: 'Globally trusted' },
  { value: '99.8%', label: 'Data Accuracy', supporting: 'Double-verified' },
  { value: '10B+', label: 'Data Points/Month', supporting: 'At scale' },
  { value: '100%', label: 'Satisfaction', supporting: 'Guaranteed' },
];

const whyPyronets = [
  {
    icon: '✓',
    title: 'Exceptional Quality You Can Count On',
    description: 'With 50+ quality checks at every delivery, we ensure you get accurate, reliable, and up-to-date data every single time. No surprises.',
  },
  {
    icon: '⚡',
    title: 'Stay Ahead of Problems',
    description: 'Our proactive approach tackles potential issues before they happen, guaranteeing smooth, consistent results you can rely on.',
  },
  {
    icon: '↔',
    title: 'Tailored to Fit Your Needs',
    description: 'Our solution grows with your business, providing the flexibility you need to succeed — from startup scale to enterprise volume.',
  },
];

const deliveryProcess = [
  { step: '01', title: 'Identify Sources', description: 'We find the right data sources for your goals' },
  { step: '02', title: 'Build Crawlers', description: 'Engineers design scrapers matching your exact structure' },
  { step: '03', title: 'Deliver Data', description: 'Cleaned, deduplicated, normalized data ready for your systems' },
  { step: '04', title: 'Ongoing Support', description: '24/7 monitoring with dedicated account management' },
];

const enterpriseBenefits = [
  'Full-service solution embedded into your workflow',
  'No hand-off to figure out raw data yourself',
  'Data ready for immediate use — not raw files',
  'Precision-critical for pricing, investments & monitoring',
];

const faqs = [
  {
    question: 'What makes Pyronets different from other scraping services?',
    answer: 'Many vendors offer web scraping tools, but Pyronets delivers full-service web scraping operationally embedded into your business. We don\'t hand you raw data and leave you to figure out the rest. Instead, we offer a start-to-finish solution: from identifying the right data sources to designing crawlers that fit your exact structure to delivering cleaned, deduplicated, and normalized data that\'s ready for immediate use.',
  },
  {
    question: 'How does Pyronets handle anti-bot systems?',
    answer: 'Pyronets uses advanced techniques including residential proxy rotation, TLS fingerprint mimicking, browser automation, and CAPTCHA-solving to bypass Cloudflare, Akamai, and other anti-bot systems reliably.',
  },
  {
    question: 'In what formats is data delivered?',
    answer: 'Data is delivered via API, CSV, JSON, or directly into your database — on a schedule that matches your needs (real-time, hourly, daily, or weekly). No data engineering required on your end.',
  },
  {
    question: 'What is the cost for enterprise scraping?',
    answer: 'Pricing is based on data complexity, sources, and volume. Pyronets provides custom quotes — contact us for a free assessment tailored to your enterprise needs.',
  },
  {
    question: 'Is enterprise web scraping legal?',
    answer: 'Web scraping publicly available data is generally legal. Pyronets operates within legal boundaries, respects robots.txt, and complies with applicable data laws.',
  },
];

export default function Home() {
  const selectedServices = SERVICES.slice(0, 6);

  return (
    <>
      {/* Hero Section - Ficstar-inspired: Outcome-focused, partnership positioning */}
      <Hero
        title="Web Scraping Services"
        subtitle="That Drive Results"
        description="Tired of unreliable data? Pyronets delivers accurate, double-verified web data you can trust — fully embedded into your workflow so you can focus on making smarter decisions with confidence."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* Trust Badges - Compelling enterprise indicators */}
      <Section background="light">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustIndicators.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 glass rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl md:text-5xl font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-foreground font-semibold">{stat.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.supporting}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Pyronets? - Differentiation messaging */}
      <Section id="why-pyronets">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-secondary mb-4 animate-fade-in-up">
            Why Choose Pyronets
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-fade-in-up delay-100">
            The Most Reliable Data Extraction Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Tired of wasting time on unreliable data? Our data extraction services are designed to give you accurate, double-verified results you can trust — with secure backups and thorough quality checks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyPyronets.map((item, index) => (
            <div
              key={item.title}
              className="glass rounded-xl p-8 glass-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Main Services - Selling value, not just features */}
      <Section id="services">
        <div className="mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-4 animate-fade-in-up">
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-fade-in-up delay-100">
            Unlock the Power of Data with Pyronets
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed animate-fade-in-up delay-200">
            Looking for a reliable way to leverage accurate, real-time data for your business? Pyronets' cutting-edge solutions empower you to make smarter decisions, fine-tune pricing strategies, gain valuable insights into competitors, and build winning strategies — all backed by precise, up-to-date big data.
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

      {/* How It Works - Ficstar-style delivery process */}
      <Section background="dark" id="how-it-works">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-secondary mb-4 animate-fade-in-up">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in-up delay-100">
            Start-to-Finish Data Extraction
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-in-up delay-200">
            From identifying sources to delivering production-ready data into your systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryProcess.map((item, index) => (
            <div
              key={item.step}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass rounded-xl p-8 h-full glass-hover transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-bold text-gradient mb-6">{item.step}</div>
                {index < deliveryProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Enterprise Differentiation Section - Ficstar-style */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-4">
              Enterprise-Grade
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Not Just Tools. Full Service.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Many vendors offer web scraping tools, but Pyronets delivers full-service data extraction operationally embedded into your business workflow. We don't hand you raw data and leave you to figure out the rest.
            </p>
            <ul className="space-y-4">
              {enterpriseBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-8 glass-hover animate-fade-in-up delay-200">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Trusted by 200+ Companies</p>
                  <p className="text-sm text-muted-foreground">Join leading businesses that rely on Pyronets to achieve their data-driven goals.</p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="text-center">
                <p className="text-5xl font-bold text-gradient mb-2">100%</p>
                <p className="text-foreground font-medium">Satisfaction Guarantee</p>
                <p className="text-sm text-muted-foreground mt-1">If the data isn't right, we make it right.</p>
              </div>
            </div>
          </div>
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
        title="Join 200+ Enterprises Powering Their Data Strategy"
        description="Ready to turn raw data into actionable insights that drive results? Get started with a free consultation."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Solutions', href: '/solution', variant: 'secondary' },
        ]}
      />
    </>
  );
}
