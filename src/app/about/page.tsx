import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, vision, and values of HopeBridge Foundation.',
};

const values = [
  { title: "Compassion", description: "We approach every individual with empathy, understanding, and without judgment." },
  { title: "Dignity", description: "We believe in the inherent worth of every person and treat everyone with respect." },
  { title: "Child Protection", description: "The safety and well-being of children is our highest priority in all our programs." },
  { title: "Inclusion", description: "We serve all vulnerable individuals regardless of their background or circumstances." },
  { title: "Community", description: "We believe that lasting change happens through collaborative community effort." },
  { title: "Accountability", description: "We are transparent in our operations and responsible to our donors and the people we serve." },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero */}
      <div className="bg-primary-dark py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            About {siteConfig.name}
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            {siteConfig.tagline}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 max-w-4xl">
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-background-soft p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide comprehensive support, protection, and opportunities for children living or working on the streets, and to assist people affected by substance use through compassionate care, family reunification, and community reintegration.
            </p>
          </div>
          <div className="bg-background-soft p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              A society where every child has a safe home and access to education, and where individuals struggling with substance use are supported toward recovery and healthy, dignified lives.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="mb-20">
          <SectionHeader title="Our Story" align="left" />
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>
              {siteConfig.name} was founded in {siteConfig.contact.location} in response to the growing number of children turning to the streets due to poverty, family breakdown, and lack of opportunity. What began as a small street outreach initiative has grown into a comprehensive support system.
            </p>
            <p>
              Over the years, we recognized that supporting street-connected youth often intersected with the challenges of substance use. We expanded our programs to ensure that individuals seeking recovery could access safe referrals and rehabilitation support.
            </p>
            <p>
              Today, we work closely with local communities, government social services, and partner organizations to provide a holistic approach to care—focusing not just on immediate needs, but on long-term reintegration and systemic change.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <SectionHeader title="Our Core Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accountability & Safeguarding */}
        <div className="bg-primary/5 p-8 sm:p-12 rounded-3xl border border-primary/10">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">Transparency & Safeguarding</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We hold ourselves to the highest standards of accountability. Regular audits, transparent reporting, and strict child protection policies ensure that our resources are used effectively and safely.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/safeguarding" className="text-accent font-semibold hover:text-accent-dark transition-colors">
              Read our Safeguarding Policy →
            </a>
            <a href="/impact" className="text-accent font-semibold hover:text-accent-dark transition-colors">
              View Annual Reports →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
