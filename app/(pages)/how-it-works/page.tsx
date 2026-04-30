import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { generateMetadata } from '@/lib/metadata';
import { CTA_VARIANTS } from '@/lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'How It Works | Pyronets Web Scraping Process',
  description: 'Learn how Pyronets web scraping services work. 5-step process from consultation to continuous delivery.',
  keywords: ['how web scraping works', 'web scraping process', 'data extraction process'],
  canonicalUrl: 'https://pyronets.com/how-it-works',
});

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="How Our"
        subtitle="Process Works"
        description="From consultation to continuous data delivery. Simple, transparent, proven process."
      />

      {/* 5-Step Process */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
          The Pyronets Process
        </h2>

        <div className="space-y-12">
          {[
            {
              num: '01',
              title: 'Requirements & Discovery',
              description:
                'We start by understanding your business needs, data requirements, target websites, and desired outcomes. This conversation typically takes 1-2 hours.',
              details: [
                'Business goals and data use cases',
                'Target websites and data structure',
                'Data volume and frequency requirements',
                'Integration preferences (API, CSV, database, etc.)',
                'Timeline and budget',
              ],
            },
            {
              num: '02',
              title: 'Custom Scraper Design',
              description:
                'Our engineers design a custom web scraper specifically for your data sources. We handle complexity like anti-bot systems, JavaScript rendering, and dynamic content.',
              details: [
                'Architecture design and validation',
                'Technology stack selection',
                'Anti-bot strategy planning',
                'Data transformation logic',
                'Error handling and retry strategy',
              ],
            },
            {
              num: '03',
              title: 'Development & Testing',
              description:
                'We build and thoroughly test your scraper with sample data from your target websites. Accuracy validation and quality checks are performed.',
              details: [
                'Scraper implementation',
                'Testing with real data samples',
                'Accuracy validation (target: 99.8%+)',
                'Performance optimization',
                '50+ quality checks setup',
              ],
            },
            {
              num: '04',
              title: 'Deployment & Integration',
              description:
                'Once approved, we deploy to production infrastructure and integrate with your systems. We handle all technical setup on our end.',
              details: [
                'Production deployment',
                'Integration with your systems',
                'Data pipeline setup',
                'Monitoring and alerting configuration',
                'Documentation and training',
              ],
            },
            {
              num: '05',
              title: 'Continuous Monitoring & Support',
              description:
                'Your scraper runs 24/7 with automatic monitoring, maintenance, and updates. Our team handles website changes and keeps everything running smoothly.',
              details: [
                'Real-time monitoring',
                'Automatic alerts and incident response',
                'Website change detection and updates',
                'Performance optimization',
                'Dedicated support and account management',
              ],
            },
          ].map((step) => (
            <div key={step.num} className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              {/* Step Number */}
              <div className="flex items-start justify-center md:justify-start">
                <div className="text-6xl font-bold text-primary/20">{step.num}</div>
              </div>

              {/* Step Content */}
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{step.description}</p>

                <div className="glass rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">What happens:</h4>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-secondary font-bold mt-1">&#10003;</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline */}
                <div className="mt-6 text-sm text-muted-foreground">
                  <strong className="text-foreground">Typical timeline:</strong> 1-4 weeks depending on complexity
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline Graphic */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Typical Project Timeline
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { week: '1', label: 'Discovery', status: 'complete' },
              { week: '1-2', label: 'Design & Build', status: 'complete' },
              { week: '2', label: 'Testing', status: 'current' },
              { week: '3', label: 'Deployment', status: 'upcoming' },
              { week: '4+', label: 'Live & Support', status: 'upcoming' },
            ].map((phase, idx) => (
              <div key={idx} className="text-center">
                <div
                  className={`rounded-xl p-4 mb-2 font-bold ${
                    phase.status === 'complete'
                      ? 'bg-secondary/20 border border-secondary/40 text-secondary'
                      : phase.status === 'current'
                      ? 'bg-primary/20 border border-primary/40 text-primary'
                      : 'glass text-muted-foreground'
                  }`}
                >
                  Week {phase.week}
                </div>
                <p className="text-sm text-muted-foreground">{phase.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Support Levels */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Ongoing Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              level: 'Monitoring',
              items: ['24/7 automated monitoring', 'Performance tracking', 'Alert notifications', 'Monthly reports'],
            },
            {
              level: 'Maintenance',
              items: ['Website change detection', 'Automatic updates', 'Bug fixes', 'Performance optimization'],
            },
            {
              level: 'Support',
              items: ['Dedicated account manager', 'Priority support (email/phone)', 'Custom adjustments', 'Training & documentation'],
            },
          ].map((support) => (
            <div key={support.level} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-6">{support.level}</h3>
              <ul className="space-y-3">
                {support.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-secondary font-bold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Common Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              q: 'How long does the whole process take?',
              a: 'From first contact to live scraper is typically 2-4 weeks for standard projects. Complex projects may take 4-8 weeks.',
            },
            {
              q: 'Can I make changes after deployment?',
              a: 'Absolutely. We handle updates to your scraper at no charge. Major changes may incur additional fees.',
            },
            {
              q: 'What if the target website changes?',
              a: "Our team monitors changes and updates your scraper automatically. You'll get alerts if we encounter issues.",
            },
            {
              q: 'Can I cancel at any time?',
              a: 'Yes, you can cancel with 30 days notice. No long-term contracts required.',
            },
            {
              q: 'What if my data requirements change?',
              a: 'Easy to scale up or down. Adjust data sources, frequency, or volume anytime.',
            },
          ].map((qa, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold text-foreground mb-3">{qa.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{qa.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Get Started?"
        description="Let's begin your web scraping journey. Free consultation with our team."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}
