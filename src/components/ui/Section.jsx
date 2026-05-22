import { cn } from '../../utils/cn';
import { Container } from './Container';

/**
 * Section
 * Standard vertical-rhythm wrapper for page sections.
 * `tone` switches between neutral, surface and inverted (ink) backgrounds.
 */
export function Section({
  id,
  tone = 'default',
  size = 'lg',
  className,
  containerClassName,
  children,
  ...rest
}) {
  const toneClasses = {
    default: 'bg-bg text-ink',
    surface: 'bg-surface text-ink',
    sand: 'bg-surface-2 text-ink',
    ink: 'bg-ink text-bg dark:bg-surface dark:text-ink',
  }[tone];

  const sizeClasses = {
    sm: 'section-y-sm',
    lg: 'section-y',
  }[size];

  return (
    <section id={id} className={cn('relative', toneClasses, sizeClasses, className)} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
