import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ImpactStat } from '@/components/ui/ImpactStat';
import { Download, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Impact',
  description: 'See the difference HopeBridge Foundation is making in the community.',
};

export default function ImpactPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero */}
      <div className="bg-primary-dark py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Measuring Our Impact
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Transparency and tangible results in our mission to restore dignity and hope.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 max-w-6xl">
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <ImpactStat number="15+" label="Years of Service" />
          <ImpactStat number="10k+" label="Lives Touched" />
          <ImpactStat number="250+" label="Active Volunteers" />
          <ImpactStat number="8" label="Partner Organizations" />
        </div>

        {/* Impact Stories */}
        <div className="mb-24">
          <SectionHeader title="Stories of Change" align="center" />
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            
            <div className="bg-background-soft rounded-3xl overflow-hidden border border-gray-100">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">A Mother in Dar es Salaam</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 italic mb-6">
                  "When I lost my job, we couldn't pay rent. My children ended up on the street to survive. HopeBridge didn't judge me. They helped us secure safe housing and provided my kids with school supplies so they could return to class."
                </p>
                <a href="/stories" className="text-accent font-semibold hover:underline">Read full story →</a>
              </div>
            </div>

            <div className="bg-background-soft rounded-3xl overflow-hidden border border-gray-100">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">A Young Person in Recovery</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 italic mb-6">
                  "I felt completely invisible until the outreach team started talking to me. They listened. They helped me get into a rehab program when I was ready. Today, I'm working and helping others find their way out."
                </p>
                <a href="/stories" className="text-accent font-semibold hover:underline">Read full story →</a>
              </div>
            </div>

          </div>
        </div>

        {/* Annual Report Placeholder */}
        <div className="bg-primary/5 p-8 sm:p-12 rounded-3xl border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Annual Report 2024</h2>
            <p className="text-gray-700 max-w-xl">
              Dive deep into our financials, program metrics, and strategic goals for the future. We are committed to complete transparency with our donors and community.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-light transition-colors whitespace-nowrap">
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        {/* Where We Work */}
        <div className="mt-24">
          <SectionHeader title="Where We Work" align="center" />
          <div className="bg-gray-100 h-96 rounded-3xl mt-12 flex items-center justify-center relative overflow-hidden border border-gray-200">
            {/* Map Placeholder */}
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Interactive Map Integration Placeholder</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
