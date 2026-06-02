interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}>
      <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-accent rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
