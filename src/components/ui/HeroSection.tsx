import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  imageUrl?: string;
}

export function HeroSection({
  title,
  subtitle,
  primaryCta = siteConfig.ctas.donate,
  primaryHref = "/donate",
  secondaryCta = siteConfig.ctas.volunteer,
  secondaryHref = "/volunteer",
  imageUrl = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
}: HeroSectionProps) {
  return (
    <div className="relative isolate overflow-hidden bg-primary-dark pb-16 pt-14 sm:pb-20">
      <img
        src={imageUrl}
        alt="Children smiling"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 mix-blend-multiply"
      />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-primary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] hero-clip-path"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 sm:pt-20">
        <div className="mx-auto max-w-3xl py-12 sm:py-20 lg:py-28 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 text-balance mb-10">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={primaryHref}
              className="rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all duration-300 transform hover:-translate-y-1"
            >
              {primaryCta}
            </Link>
            <Link
              href={secondaryHref}
              className="text-base font-semibold leading-6 text-white hover:text-accent-light transition-colors group flex items-center gap-2"
            >
              {secondaryCta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
