import { ReactNode } from 'react';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  cols?: '2' | '3' | '4' | '5';
}

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  span?: '1' | '2' | '3' | '4';
  rowSpan?: '1' | '2';
  glass?: 'default' | 'strong' | 'card';
}

/**
 * BentoGrid Component - Per Guidelines.md
 * Mobile (≤640px): 1 column, 1rem gap (gap-4)
 * Tablet (≥768px): 2 columns, 1.5rem gap (gap-6)
 * Desktop (≥1024px): 4 columns, 2rem gap (gap-8)
 */
export function BentoGrid({ children, className = '', cols = '4' }: BentoGridProps) {
  const colClasses = {
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    '5': 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  };

  // Guidelines.md: 1rem → 1.5rem → 2rem = gap-4 → gap-6 → gap-8
  return (
    <div className={`grid ${colClasses[cols]} gap-4 md:gap-6 lg:gap-8 ${className}`}>
      {children}
    </div>
  );
}

/**
 * BentoItem Component - Per Guidelines.md
 * Default padding: p-6 (24px) = "Card padding" from Guidelines
 */
export function BentoItem({ 
  children, 
  className = '', 
  span = '1',
  rowSpan = '1',
  glass = 'default'
}: BentoItemProps) {
  const spanClasses = {
    '1': '',
    '2': 'sm:col-span-2',
    '3': 'sm:col-span-2 lg:col-span-3',
    '4': 'sm:col-span-2 lg:col-span-4',
  };

  const rowSpanClasses = {
    '1': '',
    '2': 'sm:row-span-2',
  };

  const glassClasses = {
    default: 'glass',
    strong: 'glass-strong',
    card: 'glass-card',
  };

  // Guidelines.md: p-6 (24px) = "Card padding"
  return (
    <div className={`${glassClasses[glass]} !p-6 ${spanClasses[span]} ${rowSpanClasses[rowSpan]} ${className}`}>
      {children}
    </div>
  );
}
