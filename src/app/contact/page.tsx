import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with HopeBridge Foundation for inquiries, partnerships, or support.',
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get in Touch"
          subtitle="We're here to help. Reach out to us for support, to learn more about our programs, or to explore partnerships."
        />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 mt-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Headquarters</h4>
                  <p className="mt-1 text-gray-600">{siteConfig.contact.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="mt-1 text-gray-600">{siteConfig.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="mt-1 text-gray-600">{siteConfig.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Office Hours</h4>
                  <p className="mt-1 text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br/>Emergency outreach available 24/7.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl">
              <h4 className="font-semibold text-accent-dark mb-2">WhatsApp Support</h4>
              <p className="text-sm text-gray-700 mb-4">You can also reach us via WhatsApp for quicker responses during business hours.</p>
              <a 
                href={`https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#128C7E] transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background-soft p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
