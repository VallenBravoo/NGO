interface ImpactStatProps {
  number: string;
  label: string;
  description?: string;
}

export function ImpactStat({ number, label, description }: ImpactStatProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 text-center flex flex-col justify-center items-center h-full">
      <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
        {number}
      </div>
      <div className="text-lg font-semibold text-gray-900 mb-2">
        {label}
      </div>
      {description && (
        <p className="text-sm text-gray-500 max-w-[200px] mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
