import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Join our upcoming events, workshops, and community awareness programs.',
};

const events = [
  {
    id: '1',
    title: 'Community Awareness: Child Protection',
    date: 'June 15, 2024',
    time: '10:00 AM - 2:00 PM',
    location: 'Community Hall, Downtown',
    type: 'Community Outreach',
    description: 'An open dialogue and workshop focused on identifying and reporting child abuse, and understanding the referral pathways for vulnerable children in our community.',
  },
  {
    id: '2',
    title: 'Volunteer Orientation Session',
    date: 'June 22, 2024',
    time: '9:00 AM - 12:00 PM',
    location: 'HopeBridge Main Office',
    type: 'Orientation',
    description: 'Mandatory introductory session for new volunteers. Covers our mission, safeguarding policies, and an overview of current programs.',
  },
  {
    id: '3',
    title: 'Annual Fundraising Gala',
    date: 'August 10, 2024',
    time: '6:30 PM - 10:00 PM',
    location: 'City Convention Center',
    type: 'Fundraiser',
    description: 'Join us for an evening of stories, networking, and fundraising to support our education and outreach initiatives for the upcoming year.',
  },
];

export default function EventsPage() {
  return (
    <div className="bg-background-soft min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionHeader
          title="Upcoming Events"
          subtitle="Get involved, learn more, and support our mission by attending our events."
        />

        <div className="mt-16 space-y-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent transition-all group-hover:w-4" />
              
              <div className="md:w-1/3 space-y-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  {event.type}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
              </div>
              
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-600">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-col justify-between h-full">
                  <p className="text-gray-600 text-sm mb-6">
                    {event.description}
                  </p>
                  <button className="self-start px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors">
                    Register Interest
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
