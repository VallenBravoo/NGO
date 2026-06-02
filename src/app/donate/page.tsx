import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DonateForm } from '@/components/forms/DonateForm';
import { ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support HopeBridge Foundation with a donation to provide meals, education, and recovery support.',
};

export default function DonatePage() {
  return (
    <div className="bg-background-soft min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Support Our Mission"
          subtitle="Your generosity allows us to continue our vital work on the streets and in communities."
        />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Your Impact</h3>
              <ul className="space-y-4">
                {[
                  "Provide hot meals and emergency food packages",
                  "Supply hygiene kits and clean clothing",
                  "Fund school fees, uniforms, and educational materials",
                  "Support access to professional counseling",
                  "Facilitate safe family reunification travel",
                  "Sponsor rehabilitation and recovery programs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-dark p-8 rounded-2xl shadow-sm text-white">
              <ShieldCheck className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure & Transparent</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {siteConfig.name} is committed to full transparency. Your personal and payment information is securely processed. We ensure that your contribution goes directly towards supporting those in need.
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-gray-600 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <HeartHandshake className="w-8 h-8 text-primary" />
              <p className="text-sm font-medium">Questions about donating? Contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a></p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <DonateForm />
          </div>
        </div>
      </div>
    </div>
  );
}
