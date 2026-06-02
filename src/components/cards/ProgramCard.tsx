import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  href: string;
  Icon: LucideIcon;
}

export function ProgramCard({ title, description, href, Icon }: ProgramCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
      <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link href={href} className="mt-auto inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors">
        Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
