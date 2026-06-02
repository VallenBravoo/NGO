import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AlertTriangle, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm'; // Reusing contact form for help requests for now
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Get Help',
  description: 'Access support services, counseling referrals, and outreach assistance.',
};

export default function GetHelpPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Emergency Disclaimer */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-16 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-red-800 mb-1">Emergency Disclaimer</h3>
            <p className="text-red-700">
              If you or someone else is in immediate danger, experiencing a medical emergency, or requires urgent police assistance, please contact local emergency services immediately. We are an NGO providing social support, not an emergency response service.
            </p>
          </div>
        </div>

        <SectionHeader
          title="Get Support"
          subtitle="We offer non-judgmental support, advice, and safe referrals for children, families, and individuals seeking help."
          align="left"
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-12">
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-4">Who Can Request Help?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Children or youth needing a safe place or support.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Families struggling to provide for their children and seeking guidance.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  People affected by substance use looking for recovery pathways.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Community members reporting concerns about a vulnerable person.
                </li>
              </ul>
            </div>

            <div className="bg-background-soft p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-primary-dark mb-6">Immediate Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Support Line</h4>
                    <p className="text-gray-600">{siteConfig.contact.phone}</p>
                    <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 8am-5pm.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Drop-in Center</h4>
                    <p className="text-gray-600">{siteConfig.contact.location}</p>
                    <p className="text-sm text-gray-500 mt-1">Visit us during operating hours for a confidential conversation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                <strong>Confidentiality Note:</strong> All conversations are confidential. We will only share information with external agencies if required by law to protect someone from immediate harm.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Support Online</h3>
              <p className="text-gray-600 mb-8">Fill out the form below and an outreach worker will contact you privately.</p>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
