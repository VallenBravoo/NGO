import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <SectionHeader
          title="Privacy Policy"
          align="left"
        />

        <div className="prose prose-lg text-gray-700 max-w-none mt-12">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          
          <h2>1. Introduction</h2>
          <p>
            {siteConfig.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, donate, volunteer, or request support.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Make a donation (e.g., name, email, billing address).</li>
            <li>Apply to volunteer (e.g., name, email, phone number, interests).</li>
            <li>Submit a contact or support request form.</li>
            <li>Subscribe to our newsletter.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and acknowledge donations.</li>
            <li>Review volunteer applications and communicate about opportunities.</li>
            <li>Respond to your inquiries or support requests.</li>
            <li>Send periodic updates, newsletters, or impact reports (only if you have opted in).</li>
            <li>Improve our website and services.</li>
          </ul>

          <h2>4. Confidentiality of Help Requests</h2>
          <p>
            Any information submitted through our "Get Help" or "Contact" forms is treated with strict confidentiality. We do not share this information with third parties unless required by law or to protect someone from immediate harm.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We use trusted third-party service providers (such as payment processors) to facilitate our operations. These providers have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at: <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
