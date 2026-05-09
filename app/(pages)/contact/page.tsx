import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { CTABanner } from '@/components/CTABanner';
import { generateMetadata } from '@/lib/metadata';
import { CTA_VARIANTS } from '@/lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Pyronets | Web Scraping Services Quote',
  description: 'Contact Pyronets for a free consultation. Get a custom quote for your web scraping and data extraction needs. Email or call today.',
  keywords: [
    'contact pyronets',
    'web scraping quote',
    'data extraction quote',
    'pyronets contact',
  ],
  canonicalUrl: 'https://pyronets.com/contact',
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Web Scraping Services"
        subtitle="That Drive Results"
        description="Maximize your profits and streamline operations with a reliable web scraping partner by your side. Let's discuss your needs and provide a custom proposal."
      />

      {/* Contact Form Section */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:contactus@pyronets.com"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    contactus@pyronets.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                  <p className="text-muted-foreground">We typically respond within 2 hours during business hours.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Available</h3>
                  <p className="text-muted-foreground">Monday - Friday, 9 AM - 6 PM EST</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/company/pyronets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://twitter.com/pyronets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Other Ways to Connect */}
      <Section background="light">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Other Ways to Get Started
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass glass-hover rounded-xl p-6 text-center transition-all duration-300">
            <h3 className="text-xl font-bold text-foreground mb-2">Free Trial</h3>
            <p className="text-muted-foreground mb-4">
              Start with a free trial. Test our service with your data and see the quality for yourself.
            </p>
            <a
              href="/web-scraping-services"
              className="text-primary font-semibold hover:text-secondary transition-colors"
            >
              Learn More &#8594;
            </a>
          </div>

          <div className="glass glass-hover rounded-xl p-6 text-center transition-all duration-300">
            <h3 className="text-xl font-bold text-foreground mb-2">View Pricing</h3>
            <p className="text-muted-foreground mb-4">
              Check out our transparent pricing plans and pick what works for your enterprise.
            </p>
            <a
              href="/prices"
              className="text-primary font-semibold hover:text-secondary transition-colors"
            >
              See Plans &#8594;
            </a>
          </div>

          <div className="glass glass-hover rounded-xl p-6 text-center transition-all duration-300">
            <h3 className="text-xl font-bold text-foreground mb-2">Schedule a Call</h3>
            <p className="text-muted-foreground mb-4">
              Book a demo with our team. We'll walk you through everything and answer your questions.
            </p>
            <a
              href="mailto:contactus@pyronets.com"
              className="text-primary font-semibold hover:text-secondary transition-colors"
            >
              Schedule Call &#8594;
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ CTA */}
      <CTABanner
        title="Questions About Our Services?"
        description="Check out our FAQ or reach out directly. We're here to help you achieve better results with web scraping."
        buttons={[
          { label: 'View FAQ', href: '/web-scraping-learning-center', variant: 'primary' },
          { label: 'Email Us', href: 'mailto:contactus@pyronets.com', variant: 'secondary' },
        ]}
      />
    </>
  );
}
