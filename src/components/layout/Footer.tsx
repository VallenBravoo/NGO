import Link from 'next/link';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-accent" fill="currentColor" />
              <span className="text-2xl font-bold text-white">HopeBridge</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              {siteConfig.tagline}
              <br />
              {siteConfig.description}
            </p>
            <div className="flex space-x-6">
              {/* Social links placeholders */}
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Programs</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/programs#outreach" className="text-sm leading-6 text-gray-300 hover:text-white">Street Outreach</Link></li>
                  <li><Link href="/programs#education" className="text-sm leading-6 text-gray-300 hover:text-white">Education Support</Link></li>
                  <li><Link href="/programs#recovery" className="text-sm leading-6 text-gray-300 hover:text-white">Recovery Support</Link></li>
                  <li><Link href="/programs#reunification" className="text-sm leading-6 text-gray-300 hover:text-white">Family Reunification</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Organization</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">About Us</Link></li>
                  <li><Link href="/impact" className="text-sm leading-6 text-gray-300 hover:text-white">Our Impact</Link></li>
                  <li><Link href="/stories" className="text-sm leading-6 text-gray-300 hover:text-white">Stories of Hope</Link></li>
                  <li><Link href="/events" className="text-sm leading-6 text-gray-300 hover:text-white">Events</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/privacy-policy" className="text-sm leading-6 text-gray-300 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/safeguarding" className="text-sm leading-6 text-gray-300 hover:text-white">Safeguarding Policy</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-x-3 text-sm leading-6 text-gray-300">
                    <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <span>{siteConfig.contact.location}</span>
                  </li>
                  <li className="flex gap-x-3 text-sm leading-6 text-gray-300">
                    <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <span>{siteConfig.contact.phone}</span>
                  </li>
                  <li className="flex gap-x-3 text-sm leading-6 text-gray-300">
                    <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <span>{siteConfig.contact.email}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
