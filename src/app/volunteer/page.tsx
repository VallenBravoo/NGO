import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VolunteerForm } from '@/components/forms/VolunteerForm';
import { Users, BookOpen, Calendar, Briefcase, HeartHandshake, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Join our team of volunteers and make a real impact in your community.',
};

const roles = [
  {
    title: 'Outreach Support',
    description: 'Join our field teams to connect with people on the streets and distribute essentials.',
    icon: Users,
  },
  {
    title: 'Mentorship',
    description: 'Provide guidance and positive role modeling for young people in reintegration programs.',
    icon: HeartHandshake,
  },
  {
    title: 'Teaching & Tutoring',
    description: 'Help children catch up on their education with after-school tutoring.',
    icon: BookOpen,
  },
  {
    title: 'Event Support',
    description: 'Help organize and run community awareness events and fundraisers.',
    icon: Calendar,
  },
  {
    title: 'Fundraising',
    description: 'Use your networks to help secure resources for our ongoing programs.',
    icon: Lightbulb,
  },
  {
    title: 'Professional Services',
    description: 'Offer your skills in accounting, law, marketing, or IT on a pro-bono basis.',
    icon: Briefcase,
  },
];

export default function VolunteerPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Become a Volunteer"
          subtitle="Your time, skills, and compassion can help change lives. Join us in building a stronger, more supportive community."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Roles</h3>
            <p className="text-gray-600 mb-8">
              Whether you have a few hours a month or several days a week, there's a place for you on our team. Explore our current volunteer opportunities below:
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {roles.map((role) => (
                <div key={role.title} className="bg-background-soft p-6 rounded-2xl border border-gray-100">
                  <role.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">{role.title}</h4>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Application</h3>
            <VolunteerForm />
          </div>
        </div>
      </div>
    </div>
  );
}
