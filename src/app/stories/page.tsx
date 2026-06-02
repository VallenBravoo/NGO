import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Stories of Hope',
  description: 'Read stories of resilience, recovery, and community support.',
};

const stories = [
  {
    id: '1',
    title: 'Finding Safety and a Way Back to School',
    category: 'Child Protection',
    excerpt: 'After leaving home due to domestic issues, a 12-year-old boy found himself sleeping near the central market. Read how our outreach team helped him find a safe shelter and re-enroll in education.',
    date: 'May 15, 2024',
  },
  {
    id: '2',
    title: 'A Mother’s Journey to Rebuilding Her Family',
    category: 'Family Reunification',
    excerpt: 'Poverty forced a mother to make difficult choices, leading to family separation. Through counseling and small business support, she was able to rebuild her life and bring her children home.',
    date: 'April 28, 2024',
  },
  {
    id: '3',
    title: 'From the Streets to Counseling: A Recovery Story',
    category: 'Recovery Support',
    excerpt: 'Struggling with substance use for over five years, a young man connected with our street outreach team. Today, he is six months into his recovery journey and mentoring others.',
    date: 'April 10, 2024',
  },
  {
    id: '4',
    title: 'Why I Volunteer: Connecting with the Community',
    category: 'Volunteer Stories',
    excerpt: 'A local university student shares her experience volunteering with our after-school tutoring program and the profound impact it has had on her own life.',
    date: 'March 22, 2024',
  },
];

export default function StoriesPage() {
  return (
    <div className="bg-background-soft min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          title="Stories of Hope"
          subtitle="Real stories of resilience from our community. Names and identifying details have been changed or omitted to protect privacy and dignity."
        />

        {/* Categories (Static UI) */}
        <div className="flex flex-wrap gap-2 justify-center mt-12 mb-16">
          {['All', 'Child Protection', 'Recovery Support', 'Education', 'Family Reunification', 'Volunteer Stories'].map((category) => (
            <button key={category} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === 'All' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">{story.category}</span>
                <span className="text-xs text-gray-400">{story.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">
                {story.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {story.excerpt}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-primary mt-auto">
                Read full story <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
