import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { generateMetadata } from '@/lib/metadata';
import { CTA_VARIANTS } from '@/lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Web Scraping for Market Research | Competitive Intelligence | Pyronets',
  description: 'Use web scraping for market research. Collect market trends, competitor intelligence, consumer insights, and industry data at scale. Start your free trial.',
  keywords: [
    'web scraping market research',
    'competitive intelligence data',
    'market trends analysis',
    'consumer insights scraping',
    'industry data extraction',
  ],
  canonicalUrl: 'https://pyronets.com/web-scraping-for-market-research',
});

export default function WebScrapingForMarketResearchPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Web Scraping for"
        subtitle="Market Research"
        description="Extract actionable market intelligence from across the web. Monitor competitors, track trends, and understand consumers with enterprise-grade data collection."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* Why Market Research Needs Web Scraping */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Why Market Research Needs Web Scraping
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Real-Time Market Data',
              description: 'Access the latest market information as it happens. Stay ahead of trends before your competitors do.',
            },
            {
              title: 'Competitor Intelligence',
              description: 'Monitor competitor pricing, product launches, and marketing strategies across all their digital channels.',
            },
            {
              title: 'Consumer Sentiment',
              description: 'Collect reviews, social media mentions, and forum discussions to understand what customers really think.',
            },
            {
              title: 'Industry Insights',
              description: 'Aggregate news, reports, and publications to track industry developments and emerging opportunities.',
            },
            {
              title: 'Product Intelligence',
              description: 'Analyze product catalogs, features, and availability across competitors to inform your roadmap.',
            },
            {
              title: 'Automated Monitoring',
              description: 'Set up continuous monitoring to receive updates automatically without manual research.',
            },
          ].map((item, idx) => (
            <div key={idx} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What You Can Extract */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          What You Can Extract for Market Research
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Market Trends & Analytics',
              description: 'Track search trends, trending topics, and market movements across news sites, forums, and social platforms.',
            },
            {
              title: 'Competitor Product Data',
              description: 'Extract product specifications, pricing, availability, and reviews from competitor websites and e-commerce platforms.',
            },
            {
              title: 'Consumer Reviews & Feedback',
              description: 'Aggregate customer reviews from multiple sources to understand sentiment, complaints, and preferences.',
            },
            {
              title: 'Pricing Intelligence',
              description: 'Monitor competitor pricing across all channels to optimize your pricing strategy and promotions.',
            },
            {
              title: 'Industry News & Reports',
              description: 'Automatically collect articles, press releases, and industry publications to stay informed.',
            },
            {
              title: 'Lead & Contact Data',
              description: 'Build targeted prospect lists from business directories, trade shows, and professional networks.',
            },
          ].map((item, idx) => (
            <div key={idx} className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Market Research Use Cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'New Market Entry',
              description: 'Research potential markets before entering. Understand local competition, pricing norms, and consumer preferences.',
            },
            {
              title: 'Product Development',
              description: 'Analyze competitor products and customer feedback to identify gaps and opportunities for new offerings.',
            },
            {
              title: 'Brand Monitoring',
              description: 'Track mentions of your brand across the web. Monitor reputation and respond to customer feedback.',
            },
            {
              title: 'Investment Research',
              description: 'Gather data on companies, industries, and market conditions to inform investment decisions.',
            },
            {
              title: 'Sales Intelligence',
              description: 'Identify prospects, understand their needs, and monitor their activities for better targeting.',
            },
            {
              title: 'Strategic Planning',
              description: 'Collect comprehensive market data to support long-term business strategy and forecasting.',
            },
          ].map((useCase, idx) => (
            <div key={idx} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Benefits of Automated Market Research
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {[
            {
              title: 'Scale Your Research',
              description: 'Collect data from thousands of sources simultaneously. What would take weeks manually takes hours with automation.',
            },
            {
              title: 'Real-Time Updates',
              description: 'Set up scheduled extraction to keep your data fresh. Monitor changes as they happen, not after the fact.',
            },
            {
              title: 'Unbiased Data',
              description: 'Collect raw, unfiltered data directly from source. Make decisions based on actual market behavior, not curated reports.',
            },
            {
              title: 'Cost Efficient',
              description: 'Reduce research costs by 80% compared to manual data collection. Reallocate analyst time to high-value analysis.',
            },
            {
              title: 'Competitive Advantage',
              description: 'Get insights before your competitors. Early awareness of market shifts gives you time to react.',
            },
            {
              title: 'Custom Data Sets',
              description: 'Build exactly the dataset you need. Define fields, sources, and delivery format to match your analysis tools.',
            },
          ].map((benefit) => (
            <div key={benefit.title} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 border border-primary/40 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Start Your Market Research"
        description="Get comprehensive market intelligence with enterprise-grade web scraping. Talk to our team about your research needs."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}