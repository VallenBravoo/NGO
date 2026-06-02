import { HeroSection } from '@/components/ui/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { ImpactStat } from '@/components/ui/ImpactStat';
import { BookOpen, HandHeart, Home as HomeIcon, Users } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Restoring Hope for Street Children and People in Recovery"
        subtitle="We provide outreach, shelter referral, education support, counseling, rehabilitation referrals, family reunification, and community reintegration."
        primaryCta={siteConfig.ctas.donate}
        primaryHref="/donate"
        secondaryCta={siteConfig.ctas.volunteer}
        secondaryHref="/volunteer"
        imageUrl="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Impact Stats Section */}
      <section className="py-16 bg-background-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative -mt-32 z-10">
            <ImpactStat number="5,000+" label="Children Reached" description="Through street outreach and education programs." />
            <ImpactStat number="850+" label="Families Reunited" description="Tracing and safe reintegration of separated children." />
            <ImpactStat number="1,200+" label="Recovery Referrals" description="Connecting individuals to rehabilitation centers." />
            <ImpactStat number="25k+" label="Meals Provided" description="Emergency food and care packages distributed." />
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Programs"
            subtitle="Comprehensive support tailored to individual needs, focusing on long-term reintegration and recovery."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProgramCard
              title="Street Outreach"
              description="Connecting with children living or working on the streets to build trust and provide emergency support."
              href="/programs#outreach"
              Icon={Users}
            />
            <ProgramCard
              title="Education Support"
              description="Providing school supplies, fees, and tutoring to help children return to and stay in school."
              href="/programs#education"
              Icon={BookOpen}
            />
            <ProgramCard
              title="Recovery Referrals"
              description="Guiding individuals affected by substance use to appropriate rehabilitation and counseling services."
              href="/programs#recovery"
              Icon={HandHeart}
            />
            <ProgramCard
              title="Family Reunification"
              description="Tracing families and facilitating safe, supported reintegration for separated children."
              href="/programs#reunification"
              Icon={HomeIcon}
            />
          </div>
          <div className="mt-12 text-center">
            <Link href="/programs" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-light transition-colors">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Story/Mission Section */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1593113565694-c6aa89feca7d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Mission</h2>
              <p className="text-lg leading-8 text-gray-300 mb-8">
                At {siteConfig.name}, we believe every person deserves dignity, safety, and a chance at a better future. We work tirelessly in {siteConfig.contact.location} to support those who are often marginalized and forgotten.
              </p>
              <p className="text-lg leading-8 text-gray-300 mb-8">
                Through a compassionate, non-judgmental approach, we offer practical help, emotional support, and clear pathways to recovery and community reintegration.
              </p>
              <Link href="/about" className="inline-flex items-center font-semibold text-accent hover:text-accent-light transition-colors">
                Read our story <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop"
                  alt="Community support"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent p-8 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <p className="text-white font-bold text-xl leading-snug">
                  "They didn't just give me food; they gave me my dignity back."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Banner */}
      <section className="py-20 bg-accent relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your donation can provide meals, hygiene kits, school supplies, counseling access, or emergency support to those who need it most.
          </p>
          <Link href="/donate" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-primary-dark shadow-lg hover:bg-gray-50 transition-all transform hover:-translate-y-1">
            {siteConfig.ctas.donate}
          </Link>
        </div>
      </section>

    </div>
  );
}
