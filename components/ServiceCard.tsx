'use client';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  cta?: {
    label: string;
    href: string;
  };
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  cta,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-secondary font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {cta && (
        <a
          href={cta.href}
          className="inline-block text-primary font-semibold hover:text-secondary transition-colors"
        >
          {cta.label} →
        </a>
      )}
    </div>
  );
}
