import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { CTABanner } from '@/components/CTABanner';
import { generateMetadata } from '@/lib/metadata';
import { SERVICES, INDUSTRY_SOLUTIONS, CTA_VARIANTS } from '@/lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Solutions | Web Scraping Services | Pyronets',
  description: 'Enterprise web scraping solutions for all industries. Price monitoring, product data, real estate, AI training data, and more.',
  keywords: ['web scraping solutions', 'data extraction services', 'enterprise data solutions'],
  canonicalUrl: 'https://pyronets.com/solution',
});

export default function SolutionPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Enterprise"
        subtitle="Solutions"
        description="Purpose-built web scraping solutions for every industry and use case."
      />

      {/* Main Services */}
      <Section id="services">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
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
            />
          ))}
        </div>
      </Section>

      {/* Industry Solutions */}
      <Section background="light" id="industry-solutions">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Industry-Specific Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRY_SOLUTIONS.map((solution) => (
            <a
              key={solution.id}
              href={solution.href}
              className="glass glass-hover rounded-xl p-8 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              <p className="text-muted-foreground">{solution.description}</p>
              <div className="mt-4 text-primary font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Explore &#8594;
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Why Choose */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Why Choose Pyronets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: 'Enterprise Grade',
              description: '99.8% accuracy, 24/7 monitoring, and SLA guarantees for peace of mind.',
            },
            {
              title: 'Anti-Bot Expertise',
              description: 'Battle-tested against Cloudflare, Akamai, and all major anti-bot systems.',
            },
            {
              title: 'Fast Deployment',
              description: 'From requirement to live scraper in days, not weeks.',
            },
            {
              title: 'Custom Integration',
              description: 'Seamless integration with your existing systems via API, webhooks, or database.',
            },
            {
              title: 'Dedicated Support',
              description: 'Dedicated account manager and priority support for all clients.',
            },
            {
              title: 'Scalable Infrastructure',
              description: 'Handle any volume from hundreds to billions of data points per month.',
            },
          ].map((feature) => (
            <div key={feature.title} className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Find Your Solution"
        description="Let's discuss which solution is right for your business. Free consultation with our solution architects."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}
