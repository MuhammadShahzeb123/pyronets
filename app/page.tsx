import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { CTABanner } from '@/components/CTABanner';
import { FAQ } from '@/components/FAQ';
import { SERVICES, CTA_VARIANTS } from '@/lib/constants';
import { ShieldCheck, Zap, ArrowLeftRight, TrendingUp, CheckCircle, Clock, Database } from 'lucide-react';
import Link from 'next/link';

const clientLogos = [
  'Enterprise Corp', 'DataTech', 'MarketAI', 'ScaleUp', 'InnovateCo', 'GrowthHub'
];

const trustIndicators = [
  { value: '200+', label: 'Enterprise Clients', icon: Database },
  { value: '99.8%', label: 'Data Accuracy', icon: CheckCircle },
  { value: '10B+', label: 'Data Points/Month', icon: TrendingUp },
  { value: '24/7', label: 'Support', icon: Clock },
];

const whyPyronets = [
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    description: 'Your data stays safe with SOC 2 Type II certification and end-to-end encryption. Sleep easy knowing your business intelligence is protected.',
  },
  {
    icon: Zap,
    title: 'Real-Time Data Delivery',
    description: 'Get data delivered your way. API, webhook, or direct database integration. Exactly when you need it.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Seamless Integration',
    description: 'We fit right into your workflow. No extra engineers, no headaches. Just data flowing where it should.',
  },
];

const deliveryProcess = [
  { step: '01', title: 'Discovery', description: 'We identify the right data sources for your goals' },
  { step: '02', title: 'Development', description: 'Our engineers build custom scrapers matching your exact structure' },
  { step: '03', title: 'Delivery', description: 'Cleaned, deduplicated, normalized data ready for your systems' },
  { step: '04', title: 'Support', description: '24/7 monitoring with dedicated account management' },
];

const enterpriseBenefits = [
  'We handle everything, so you can focus on your business',
  'No more wrestling with messy raw data files',
  'Clean, ready-to-use data delivered straight to you',
  'Accuracy that matters for pricing, investments, and decisions',
];

const faqs = [
  {
    question: 'What makes Pyronets different from other scraping services?',
    answer: 'Most vendors just hand you raw data and say "good luck." We are different. We take you from start to finish: finding the right sources, building scrapers that match your needs, and delivering clean data you can actually use. No engineering team required.',
  },
  {
    question: 'How does Pyronets handle anti-bot systems?',
    answer: 'We have mastered the art of bypassing anti-bot systems. Residential proxies, smart browser automation, and clever techniques to get past Cloudflare, Akamai, and others. Your data gets extracted, period.',
  },
  {
    question: 'In what formats is data delivered?',
    answer: 'Whatever works for you. API, CSV, JSON, or direct database insertion. Real-time, hourly, daily, or weekly. We fit your schedule, not the other way around.',
  },
  {
    question: 'What is the cost for enterprise scraping?',
    answer: 'Every business is unique, so our pricing is tailored to you. Tell us what you need, and we will create a plan that fits your budget. Simple as that.',
  },
  {
    question: 'Is enterprise web scraping legal?',
    answer: 'We play by the rules. We respect robots.txt and work within legal boundaries. Your data is collected responsibly.',
  },
];

export default function Home() {
  const selectedServices = SERVICES.slice(0, 6);

  return (
    <>
      <Hero
        title="Web Scraping Services"
        subtitle="That Drive Results"
        description="Let us guess: you have been burned by bad data before. That is where we come in. We deliver accurate, double-verified web data that actually works. Integrated right into your workflow so you can focus on making smarter decisions."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* Client Logos - Social Proof */}
      <Section className="py-12 border-y border-border/50">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by 200+ enterprises worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {clientLogos.map((logo) => (
            <span key={logo} className="text-lg font-semibold text-muted-foreground">
              {logo}
            </span>
          ))}
        </div>
      </Section>

      {/* Trust Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustIndicators.map((stat, index) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Pyronets? */}
      <Section id="why-pyronets">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-primary bg-primary/10 mb-4">
            Why Choose Pyronets
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Most Reliable Data Extraction Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop wasting time on unreliable data. Our services give you accurate, double-verified results you can actually trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyPyronets.map((item, index) => (
            <div
              key={item.title}
              className="glass rounded-xl p-8 hover:border-primary/30 transition-colors animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Main Services */}
      <Section id="services">
        <div className="mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-primary bg-primary/10 mb-4">
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unlock the Power of Data
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Looking for a reliable way to leverage accurate, real-time data for your business? Pyronets' cutting-edge solutions empower you to make smarter decisions.
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

        <div className="mt-14 text-center">
          <Link
            href="/solution"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-foreground border border-border hover:bg-muted/50 transition-colors cursor-pointer"
          >
            View All Solutions
            <ArrowLeftRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="light">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-primary bg-primary/10 mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Start-to-Finish Data Extraction
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            From identifying sources to delivering production-ready data into your systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryProcess.map((item, index) => (
            <div
              key={item.step}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass rounded-xl p-8 h-full hover:border-primary/30 transition-colors">
                <p className="text-sm font-medium text-primary mb-4">{item.step}</p>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Enterprise Differentiation */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-primary bg-primary/10 mb-4">
              Enterprise-Grade
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Not Just Tools. Full Service.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Many vendors offer web scraping tools, but Pyronets delivers full-service data extraction operationally embedded into your business workflow.
            </p>
            <ul className="space-y-4">
              {enterpriseBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-8 animate-fade-in-up delay-200">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Trusted by 200+ Companies</p>
                  <p className="text-sm text-muted-foreground">Join leading businesses that rely on Pyronets.</p>
                </div>
              </div>
              <div className="h-px bg-border" />
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">100%</p>
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
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-primary bg-primary/10 mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
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