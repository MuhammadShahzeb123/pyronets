import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { FAQ } from '@/components/FAQ';
import { generateMetadata, generateJsonLd } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { CTA_VARIANTS } from '@/lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Web Scraping for Finance | Financial Data Extraction | Pyronets',
  description: 'Enterprise web scraping solutions for finance. Extract market data, stock prices, financial news, and competitor analysis. Real-time data for investment firms.',
  keywords: [
    'web scraping for finance',
    'financial data extraction',
    'stock market data scraping',
    'financial news aggregation',
    'investment data scraping',
    'market research data',
  ],
  canonicalUrl: 'https://pyronets.com/web-scraping-for-finance',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Solutions', url: 'https://pyronets.com/solution' },
  { name: 'Web Scraping for Finance', url: 'https://pyronets.com/web-scraping-for-finance' },
]);

const faqs = [
  {
    question: 'What financial data sources can you scrape?',
    answer: 'We can extract data from stock market websites, financial news portals, SEC filings, trading forums, cryptocurrency exchanges, banking portals, and more. Our anti-bot bypass technology handles protected financial sites.',
  },
  {
    question: 'How often can financial data be updated?',
    answer: 'Update frequency is completely customizable — real-time streaming, hourly, daily, or weekly. We design the scraper to match your trading frequency and data freshness requirements.',
  },
  {
    question: 'Is web scraping legal for financial data?',
    answer: 'Web scraping public financial data is generally legal. We ensure compliance with terms of service and applicable regulations. Our legal team can advise on your specific use case.',
  },
  {
    question: 'How do you handle dynamic financial data?',
    answer: 'Our headless browsers render JavaScript-heavy financial dashboards, real-time stock tickers, and interactive charts. We capture all dynamic content and API calls.',
  },
  {
    question: 'What data formats do you support?',
    answer: 'We deliver data via REST API, GraphQL, CSV, JSON, database connections, AWS S3, or custom integrations. Data can be normalized to your requirements.',
  },
];

export default function WebScrapingForFinancePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Web Scraping for"
        subtitle="Finance"
        description="Power your investment decisions with real-time financial data. Extract market data, stock prices, financial news, and competitor insights at scale."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* Key Capabilities */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Financial Data Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Market Data Extraction',
              description: 'Collect real-time stock prices, trading volumes, market capitalization, and historical data from major exchanges and financial portals.',
            },
            {
              title: 'Financial News Aggregation',
              description: 'Monitor and aggregate financial news from multiple sources. Track breaking news, earnings reports, and market sentiment analysis.',
            },
            {
              title: 'Stock Monitoring',
              description: 'Track stock performance, price movements, analyst ratings, and insider trading data. Set up alerts for price changes and news.',
            },
            {
              title: 'Competitor Analysis',
              description: 'Monitor competitor financial statements, SEC filings, earnings calls, and investor presentations. Stay ahead of market movements.',
            },
            {
              title: 'Alternative Data',
              description: 'Extract non-traditional data sources like social media sentiment, web traffic, app downloads, and supply chain data for alpha generation.',
            },
            {
              title: 'Regulatory Filings',
              description: 'Automate extraction of SEC filings, 10-K, 10-Q, insider trading reports, and other regulatory documents.',
            },
          ].map((capability, idx) => (
            <div key={idx} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2">{capability.title}</h3>
              <p className="text-muted-foreground">{capability.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section id="use-cases">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Finance Industry Use Cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Quantitative Trading',
              description: 'Build data-driven trading strategies with historical price data, volume analysis, and technical indicators from multiple sources.',
            },
            {
              title: 'Risk Management',
              description: 'Monitor market volatility, credit ratings, and macroeconomic indicators. Build comprehensive risk assessment models.',
            },
            {
              title: 'Investment Research',
              description: 'Aggregate analyst ratings, price targets, and fundamental data. Track institutional ownership and hedge fund holdings.',
            },
            {
              title: 'ESG Analysis',
              description: 'Extract ESG ratings, sustainability reports, and corporate governance data for responsible investment decisions.',
            },
            {
              title: 'Cryptocurrency Markets',
              description: 'Track crypto prices, trading volumes, DeFi metrics, and on-chain data across exchanges and blockchain networks.',
            },
            {
              title: 'Merger & Acquisition Intelligence',
              description: 'Monitor deal flow, target pipelines, and competitive landscape for M&A opportunities.',
            },
          ].map((useCase, idx) => (
            <div key={idx} className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-xl font-bold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Pyronets for Finance */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Why Pyronets for Finance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: 'Real-Time Data Pipeline',
              description: 'Low-latency data extraction for time-sensitive trading. WebSocket and streaming APIs available.',
            },
            {
              title: '99.8% Data Accuracy',
              description: '50+ quality checks ensure accurate financial data. Automated deduplication and validation.',
            },
            {
              title: 'Anti-Bot Bypass',
              description: 'Battle-tested against financial site protections. Residential proxies and browser emulation.',
            },
            {
              title: 'Institutional Grade Security',
              description: 'SOC 2 compliant infrastructure. Data encryption at rest and in transit. NDA protection.',
            },
            {
              title: 'Custom Data Models',
              description: 'We normalize and enrich data to match your analysis requirements and data models.',
            },
            {
              title: '24/7 Monitoring',
              description: 'Dedicated support team monitors scrapers. Automatic alerts for data gaps or anomalies.',
            },
          ].map((feature) => (
            <div key={feature.title} className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12">
          Frequently Asked Questions
        </h2>
        <FAQ faqs={faqs} />
      </Section>

      {/* CTA */}
      <CTABanner
        title="Start Your Finance Data Project"
        description="Let's discuss your financial data requirements. Get a free consultation and custom proposal from our team."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}