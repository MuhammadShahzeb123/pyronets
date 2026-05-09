import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy | Pyronets',
  description: 'Privacy Policy for Pyronets web scraping services.',
  noIndex: false,
  canonicalUrl: 'https://pyronets.com/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Privacy"
        subtitle="Policy"
        description="Your privacy is important to us. Learn how we protect and use your data."
      />

      {/* Content */}
      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg text-muted-foreground space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>
              Pyronets ("we," "us," "our," or "Company") operates the Pyronets.com website and web scraping services.
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when
              you use our Service and the choices you have associated with that data.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">2. Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service
              to you.
            </p>
            <h3 className="text-xl font-bold text-foreground mt-4 mb-2">Types of Data Collected:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact Information (Name, Email, Company)</li>
              <li>Usage Data (IP address, browser type, pages visited)</li>
              <li>Cookies and Tracking Data</li>
              <li>Data provided in your scraping requests</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">3. Use of Data</h2>
            <p>Pyronets uses the collected data for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">4. Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
              protect your personal data, we cannot guarantee its absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">5. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> contact.pyronets@gmail.com
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
