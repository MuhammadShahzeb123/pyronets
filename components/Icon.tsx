import { Globe, TrendingUp, Package, Bot, Home, Briefcase, ArrowRight, Check, Star } from 'lucide-react';

type IconName = 'globe' | 'trendingUp' | 'package' | 'bot' | 'home' | 'briefcase' | 'arrowRight' | 'check' | 'star';

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

const iconMap: Record<IconName, React.ElementType> = {
  globe: Globe,
  trendingUp: TrendingUp,
  package: Package,
  bot: Bot,
  home: Home,
  briefcase: Briefcase,
  arrowRight: ArrowRight,
  check: Check,
  star: Star,
};

export function Icon({ name, className, size = 24 }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className || ''} width={size} height={size} />;
}