import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Users, HeartHandshake, BookOpen, Home, ShieldAlert, GraduationCap, Megaphone, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Programs',
  description: 'Explore our comprehensive programs including street outreach, education support, and recovery referrals.',
};

const programs = [
  {
    id: 'outreach',
    title: 'Street Outreach',
    description: 'Our field teams work directly on the streets, building trust with vulnerable children and adults. We provide immediate emergency support and establish the first connection toward long-term help.',
    whoItHelps: 'Children living on the streets, vulnerable youth, and people affected by substance use.',
    weProvide: ['Emergency first aid', 'Referral to shelters', 'Trust-building activities', 'Basic needs assessment'],
    icon: Users,
  },
  {
    id: 'food-hygiene',
    title: 'Emergency Food & Hygiene Support',
    description: 'Meeting basic human needs is the first step toward restoring dignity. We provide nutritious meals and essential hygiene items to those in immediate crisis.',
    whoItHelps: 'Individuals lacking access to regular meals and clean facilities.',
    weProvide: ['Hot meals', 'Hygiene kits (soap, toothbrush, sanitary pads)', 'Clean clothing', 'Safe drinking water'],
    icon: ShieldAlert,
  },
  {
    id: 'education',
    title: 'Education Support',
    description: 'Education breaks the cycle of poverty. We support children in returning to formal schooling or accessing vocational training.',
    whoItHelps: 'Out-of-school children and youth seeking skills.',
    weProvide: ['School fees and uniforms', 'Educational materials', 'After-school tutoring', 'Mentorship'],
    icon: BookOpen,
  },
  {
    id: 'reunification',
    title: 'Family Tracing & Reunification',
    description: 'When it is safe and in the best interest of the child, we work to reunite separated children with their families or place them in safe alternative care.',
    whoItHelps: 'Separated or unaccompanied children.',
    weProvide: ['Family tracing', 'Mediation and counseling', 'Reintegration packages', 'Follow-up monitoring'],
    icon: Home,
  },
  {
    id: 'counseling',
    title: 'Counseling & Psychosocial Support',
    description: 'Trauma recovery is essential. We offer professional counseling to help individuals process their experiences and build resilience.',
    whoItHelps: 'Trauma survivors, individuals facing mental health challenges.',
    weProvide: ['Individual therapy', 'Group support sessions', 'Art and play therapy for children', 'Crisis intervention'],
    icon: HeartHandshake,
  },
  {
    id: 'recovery',
    title: 'Substance Use Recovery Referrals',
    description: 'We guide individuals affected by drug use toward specialized rehabilitation services, supporting them through the admission process and beyond.',
    whoItHelps: 'People affected by substance use disorders seeking help.',
    weProvide: ['Screening and assessment', 'Referral to trusted rehab centers', 'Pre-admission counseling', 'Post-rehab support groups'],
    icon: Activity,
  },
  {
    id: 'skills',
    title: 'Skills Training & Reintegration',
    description: 'We equip youth and adults with practical skills to help them secure employment and reintegrate successfully into their communities.',
    whoItHelps: 'Youth and adults preparing for independent living.',
    weProvide: ['Vocational training', 'Financial literacy', 'Job placement assistance', 'Small business grants'],
    icon: GraduationCap,
  },
  {
    id: 'awareness',
    title: 'Community Awareness Campaigns',
    description: 'We work to reduce stigma and educate the community on child protection, the realities of substance use, and how to offer support.',
    whoItHelps: 'The broader community, local leaders, and families.',
    weProvide: ['Educational workshops', 'Advocacy events', 'Information distribution', 'Community dialogues'],
    icon: Megaphone,
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-background-soft min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Programs"
          subtitle="A holistic approach to restoring dignity, providing care, and facilitating long-term recovery and reintegration."
        />

        <div className="mt-16 space-y-16 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              id={program.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-2/5 bg-primary/5 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-gray-100">
                <program.icon className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark">{program.title}</h3>
              </div>
              <div className="md:w-3/5 p-8 sm:p-10">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      Who it helps:
                    </h4>
                    <p className="text-gray-600 mt-1 ml-3.5">{program.whoItHelps}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      What we provide:
                    </h4>
                    <ul className="mt-2 ml-3.5 space-y-1">
                      {program.weProvide.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="/donate" className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors">
                    Support this program →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
