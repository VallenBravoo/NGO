import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldCheck, UserCheck, AlertOctagon, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Safeguarding Policy',
  description: 'Our commitment to protecting children and vulnerable adults.',
};

export default function SafeguardingPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <SectionHeader
          title="Safeguarding & Child Protection"
          subtitle="Ensuring a safe environment for every child and vulnerable adult we serve is our fundamental responsibility."
          align="center"
        />

        <div className="mt-16 space-y-16">
          
          <div className="bg-primary-dark text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
            <ShieldCheck className="w-24 h-24 text-accent flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
              <p className="text-gray-300 leading-relaxed">
                HopeBridge Foundation has a zero-tolerance policy towards any form of abuse, exploitation, or neglect. We are fully committed to creating a culture of safety where the rights, dignity, and physical/emotional well-being of every program participant are fiercely protected.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background-soft p-8 rounded-2xl border border-gray-100">
              <UserCheck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Recruitment</h3>
              <p className="text-gray-600">
                All staff, volunteers, and partners undergo rigorous background checks, police clearance (where applicable), and detailed reference checks before interacting with program participants.
              </p>
            </div>
            
            <div className="bg-background-soft p-8 rounded-2xl border border-gray-100">
              <Eye className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ethical Storytelling</h3>
              <p className="text-gray-600">
                We do not exploit vulnerable people in our media. All images and stories are shared with informed, ongoing consent. Names and identifying details are changed to protect privacy, and we never portray beneficiaries in a degrading manner.
              </p>
            </div>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none mt-12">
            <h2>Code of Conduct</h2>
            <p>Our mandatory Code of Conduct dictates that no staff member or volunteer shall:</p>
            <ul>
              <li>Spend time alone with a child in an unobserved, secluded area.</li>
              <li>Use physical punishment or abusive language.</li>
              <li>Engage in any form of relationship that exploits their position of power.</li>
              <li>Take photos of children on personal devices.</li>
            </ul>

            <h2>Reporting Concerns</h2>
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 not-prose mt-8 flex gap-4">
              <AlertOctagon className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-red-900 mb-2">How to Report a Safeguarding Concern</h3>
                <p className="text-red-800 mb-4 text-sm">
                  If you have witnessed or suspect any breach of our safeguarding policy by our staff, volunteers, or partners, please report it immediately. Reports can be made anonymously.
                </p>
                <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors">
                  Report a Concern Confidentially
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
