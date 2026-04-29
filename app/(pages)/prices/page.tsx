import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { generateMetadata } from '@/lib/metadata';
import { CTA_VARIANTS } from '@/lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Pricing | Pyronets Web Scraping Services',
  description: 'Transparent, flexible pricing for web scraping services. Custom quotes for your data needs. No hidden fees.',
  keywords: ['web scraping pricing', 'data extraction cost', 'pricing plans'],
  canonicalUrl: 'https://pyronets.com/prices',
});

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      description: 'For small projects and testing',
      price: 'Custom',
      features: [
        'Up to 5 data sources',
        'Daily updates',
        'Email support',
        'CSV/JSON export',
        'Basic quality checks',
        'Community forum access',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      price: 'Custom',
      popular: true,
      features: [
        'Up to 50 data sources',
        'Hourly/daily updates',
        'Priority email support',
        'API access',
        '50+ quality checks',
        'Custom integrations',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      price: 'Custom',
      features: [
        'Unlimited data sources',
        'Real-time streaming',
        '24/7 phone support',
        'Custom API',
        'Advanced quality checks',
        'White-label options',
        'Dedicated infrastructure',
        'SLA guarantee',
      ],
      cta: 'Schedule Demo',
    },
  ];

  return (
    <>
      {/* Hero */}
      <Hero
        title="Transparent"
        subtitle="Pricing"
        description="Simple, predictable pricing based on your data needs. No hidden fees. Custom quotes for enterprise requirements."
      />

      {/* Pricing Plans */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border-2 p-8 transition-all ${
                plan.popular
                  ? 'border-primary bg-gradient-to-br from-primary/5 to-secondary/5 transform md:scale-105'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.popular && (
                <div className="mb-4 inline-block px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <p className="text-lg text-gray-600 mb-1">Starting at</p>
                <p className="text-4xl font-bold text-dark">{plan.price}</p>
                <p className="text-sm text-gray-500 mt-1">Contact for exact quote</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`w-full block text-center px-6 py-3 font-semibold rounded-lg transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
                    : 'border-2 border-primary text-primary hover:bg-primary/5'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing FAQ */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Pricing FAQs
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              question: 'How is pricing calculated?',
              answer:
                'Pricing is based on the number of data sources, update frequency, data volume, and API usage. We provide custom quotes after understanding your requirements.',
            },
            {
              question: 'Is there a setup fee?',
              answer:
                'Yes, there is a one-time setup fee ($500-$2000) for custom scraper development, depending on complexity.',
            },
            {
              question: 'Can I scale my plan up or down?',
              answer:
                'Absolutely. We offer flexible plans that scale with your business. Upgrade or downgrade anytime.',
            },
            {
              question: 'What payment methods do you accept?',
              answer:
                'We accept credit cards, bank transfers, and purchase orders. Annual plans receive a 15% discount.',
            },
            {
              question: 'Is there a free trial?',
              answer:
                'Yes! We offer a free trial with up to 2 data sources and daily updates. No credit card required.',
            },
            {
              question: 'What if I exceed my quota?',
              answer:
                'Overage charges apply at standard rates. We recommend upgrading to the next plan if you consistently exceed your limit.',
            },
          ].map((faq, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold text-dark mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Add-ons */}
      <Section>
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Popular Add-ons
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: 'Data Enrichment',
              description: 'Enrich your data with additional fields from complementary sources.',
              price: 'From $200/month',
            },
            {
              name: 'Advanced Analytics',
              description: 'Custom dashboards, alerts, and real-time analytics.',
              price: 'From $500/month',
            },
            {
              name: 'White Label',
              description: 'Rebrand our service as your own. Perfect for agencies.',
              price: 'Custom pricing',
            },
            {
              name: 'Dedicated Infrastructure',
              description: 'Private infrastructure for high-volume, mission-critical scraping.',
              price: 'From $1000/month',
            },
            {
              name: 'Custom Integration',
              description: 'Custom API endpoint or direct database integration.',
              price: 'From $500',
            },
            {
              name: 'SLA Guarantee',
              description: '99.9% uptime guarantee with credits for downtime.',
              price: 'Add 10% to plan',
            },
          ].map((addon) => (
            <div key={addon.name} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dark mb-2">{addon.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
              <p className="text-primary font-semibold">{addon.price}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Start?"
        description="Get a free consultation and custom quote for your data needs. No credit card required."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Services', href: '/web-scraping-services', variant: 'secondary' },
        ]}
      />
    </>
  );
}
