"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-accent" fill="currentColor" />
              <span className="text-2xl font-bold text-primary-dark">HopeBridge</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-x-8">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary border-b-2 border-primary' : 'text-gray-600'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:gap-x-4">
            <Link
              href="/get-help"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Get Help
            </Link>
            <Link
              href="/donate"
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {siteConfig.ctas.donate}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1 pb-3 pt-2 px-4">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === item.href
                    ? 'bg-primary/5 text-primary'
                    : 'text-gray-900 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <div className="mt-4 border-t border-gray-100 pt-4 pb-2">
              <Link
                href="/get-help"
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Get Help
              </Link>
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="mt-2 block w-full text-center rounded-md bg-accent px-3 py-3 text-base font-medium text-white hover:bg-accent-light"
              >
                {siteConfig.ctas.donate}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
