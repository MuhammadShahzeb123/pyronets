import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service | Pyronets',
  description: 'Terms of Service for Pyronets web scraping and data extraction services.',
  noIndex: false,
  canonicalUrl: 'https://pyronets.com/terms-conditions',
});

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Terms of"
        subtitle="Service"
        description="Please read our terms carefully before using our services."
      />

      {/* Content */}
      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg text-gray-700 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you and Pyronets ("Company," "we,"
              "us," or "our") governing your use of our website, web scraping services, and related services (collectively, the
              "Service").
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Pyronets's Service
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the Service</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">3. Disclaimer</h2>
            <p>
              The materials on Pyronets's Service are provided on an "as is" basis. Pyronets makes no warranties, expressed or implied,
              and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">4. Limitations</h2>
            <p>
              In no event shall Pyronets or its suppliers be liable for any damages (including, without limitation, damages for loss of
              data or profit, or due to business interruption) arising out of the use or inability to use the materials on Pyronets's
              Service, even if Pyronets or an authorized representative has been notified orally or in writing of the possibility of
              such damage.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Pyronets's Service could include technical, typographical, or photographic errors. Pyronets does
              not warrant that any of the materials on its Service are accurate, complete, or current. Pyronets may make changes to the
              materials contained on its Service at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">6. Links</h2>
            <p>
              Pyronets has not reviewed all of the sites linked to its Service and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by Pyronets of the site. Use of any such linked website is at the
              user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">7. Modifications</h2>
            <p>
              Pyronets may revise these terms of service for its Service at any time without notice. By using this Service, you are
              agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              <strong>Email:</strong> contact.pyronets@gmail.com
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
