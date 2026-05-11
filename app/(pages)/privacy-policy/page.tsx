import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy | Pyronets',
  description: 'Pyronets privacy policy - we do not store or share any scraped data. All data is shipped directly to customer storage.',
  noIndex: false,
  canonicalUrl: 'https://pyronets.com/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        title="Privacy"
        subtitle="Policy"
        description="Your privacy is our priority. We do not store, process, or share any scraped data."
      />

      <Section background="light">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="glass rounded-xl p-6 border-l-4 border-primary animate-fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Core Privacy Principle</h2>
            <p className="text-lg text-muted-foreground font-medium">
              We do not store scraped data on our servers. We do not retain any client data. 
              All data collected through our scraping services is shipped directly to the customer's designated storage.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="glass rounded-xl p-8 animate-fade-in-up delay-100">
              <h2 className="text-3xl font-bold text-foreground mb-6">1. Data We Do NOT Collect or Store</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-xl font-semibold text-foreground">
                  Pyronets operates on a strict no-data-retention policy. We want to be completely transparent about what we do NOT do with your data:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-2xl">✗</span>
                    <span className="text-lg"><strong>We do NOT store scraped data</strong> - Any data we extract is immediately transferred to your storage destination and is never retained on our systems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-2xl">✗</span>
                    <span className="text-lg"><strong>We do NOT store client information</strong> - Your personal details, company information, and business data are not kept in our databases.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-2xl">✗</span>
                    <span className="text-lg"><strong>We do NOT share client data</strong> - We never share, sell, or distribute any information about our clients to third parties.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-2xl">✗</span>
                    <span className="text-lg"><strong>We do NOT process data on our servers</strong> - All data processing happens in real-time during the transfer to your storage.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-2xl">✗</span>
                    <span className="text-lg"><strong>We do NOT maintain backups of scraped data</strong> - Once transferred, the data exists only in your systems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-2xl">✗</span>
                    <span className="text-lg"><strong>We do NOT log scraped content</strong> - We do not keep logs of the actual data content being scraped.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass rounded-xl p-8 animate-fade-in-up delay-200">
              <h2 className="text-3xl font-bold text-foreground mb-6">2. How We Handle Your Data</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Our service architecture is designed with privacy at its foundation. Here's how it works:
                </p>
                
                <div className="glass rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Direct Data Transfer Architecture</h3>
                  <p className="text-lg text-muted-foreground">
                    When you request data extraction, our systems scrape the requested information and stream it directly to your designated storage destination. 
                    The data passes through our infrastructure but is never persisted to disk. Think of it as a pipe - data flows through but nothing remains.
                  </p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span><strong>Real-time streaming:</strong> Data is scraped and immediately streamed to your storage.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span><strong>No local storage:</strong> We have no persistent storage systems for client data.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span><strong>Zero retention:</strong> Once transfer is complete, the data exists only in your systems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span><strong>Encrypted transfer:</strong> All data is encrypted during transmission.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass rounded-xl p-8 animate-fade-in-up delay-300">
              <h2 className="text-3xl font-bold text-foreground mb-6">3. What Information We DO Collect</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  To provide our services, we necessarily collect minimal information. This is limited to:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span><strong>Account information:</strong> Your name, email address, and company details required to create and maintain your account.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span><strong>Payment information:</strong> Billing address and payment method details for processing transactions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span><strong>Service configuration:</strong> Technical settings for your scraping jobs (target URLs, frequency, data fields).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span><strong>Usage metrics:</strong> Anonymous statistics about service usage to improve our platform.</span>
                  </li>
                </ul>

                <div className="glass rounded-lg p-4 border border-primary/30">
                  <p className="text-foreground font-medium">
                    <strong>Important:</strong> The scraped data itself (product information, prices, contacts, etc.) is never stored on our systems. 
                    We only store the instructions on what to scrape, not the results.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-8 animate-fade-in-up delay-400">
              <h2 className="text-3xl font-bold text-foreground mb-6">4. Data Security</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  While we don't store scraped data, we take the security of our systems seriously:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span><strong>Encrypted communications:</strong> All data in transit is encrypted using industry-standard TLS.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span><strong>Secure infrastructure:</strong> Our servers are hosted in secure, SOC 2 compliant data centers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span><strong>Access controls:</strong> Strict access controls limit who can access our systems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span><strong>Regular audits:</strong> We conduct regular security audits and penetration testing.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass rounded-xl p-8 animate-fade-in-up delay-500">
              <h2 className="text-3xl font-bold text-foreground mb-6">5. Your Rights</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  You have full control over your account information. You can:
                </p>
                
                <ul className="space-y-4">
                  <li>Access and update your account details at any time</li>
                  <li>Request deletion of your account and all associated data</li>
                  <li>Export your account information</li>
                  <li>Opt out of non-essential communications</li>
                </ul>

                <p className="text-lg mt-6">
                  Since we don't store scraped data, there is no scraped data to delete - it exists only in your storage. 
                  However, you can request deletion of your account information at any time.
                </p>
              </div>
            </div>

            <div className="glass rounded-xl p-8 animate-fade-in-up delay-500">
              <h2 className="text-3xl font-bold text-foreground mb-6">6. Cookies and Tracking</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Our website uses minimal cookies necessary for functionality:
                </p>
                <ul className="space-y-3">
                  <li>Essential cookies for website operation</li>
                  <li>Analytics cookies (anonymized, non-invasive)</li>
                  <li>Session management cookies</li>
                </ul>
                <p className="mt-4">
                  We do not use third-party advertising cookies or tracking that follows you across the internet.
                </p>
              </div>
            </div>

            <div className="glass rounded-xl p-8 animate-fade-in-up delay-500">
              <h2 className="text-3xl font-bold text-foreground mb-6">7. Third-Party Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  We may use third-party services for:
                </p>
                <ul className="space-y-3">
                  <li>Payment processing (Stripe, PayPal)</li>
                  <li>Server infrastructure (AWS, Google Cloud)</li>
                  <li>Email delivery</li>
                </ul>
                <p className="mt-4">
                  These services have their own privacy policies. We ensure any third parties we work with meet our privacy standards.
                </p>
              </div>
            </div>

            <div className="glass rounded-xl p-8 animate-fade-in-up delay-500">
              <h2 className="text-3xl font-bold text-foreground mb-6">8. Changes to This Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
                  We encourage you to review this policy periodically.
                </p>
              </div>
            </div>

            <div className="glass rounded-xl p-8 animate-fade-in-up delay-500">
              <h2 className="text-3xl font-bold text-foreground mb-6">9. Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  If you have any questions about this privacy policy, please contact us:
                </p>
                <ul className="space-y-3">
                  <li><strong>Email:</strong> contactus@pyronets.com</li>
                  <li><strong>Website:</strong> https://pyronets.com/contact</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  We respond to privacy inquiries within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}