import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../utils/cn';

/**
 * Reveal
 * Wraps content with a scroll-triggered fade-up animation.
 * Use `stagger` to animate immediate children sequentially.
 */
export function Reveal({ as: Tag = 'div', stagger = false, className, children, ...rest }) {
  const { ref } = useReveal();
  return (
    <Tag
      ref={ref}
      className={cn(stagger ? 'reveal-stagger' : 'reveal', className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
