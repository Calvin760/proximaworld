import { cn } from '../../utils/cn';
import { Reveal } from './Reveal';

/**
 * SectionHeading
 * Standardised heading block: eyebrow, title, optional description.
 * Used at the top of nearly every page section.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  size = 'lg',
  className,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleSize = size === 'xl'
    ? 'text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] tracking-tightest'
    : 'text-[clamp(1.875rem,3.5vw,3rem)] leading-[1.04] tracking-tightest';

  return (
    <Reveal className={cn('max-w-3xl', alignClass, className)}>
      {eyebrow && <span className="eyebrow mb-6">{eyebrow}</span>}
      <h2 className={cn('font-display font-medium', titleSize)}>{title}</h2>
      {description && (
        <p className="mt-6 max-w-prose text-base md:text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
