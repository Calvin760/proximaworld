import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

/**
 * Button
 * Polymorphic: renders an <a>, <Link>, or <button> based on props.
 *
 * Variants:
 *   - primary    : ink-on-ink, the default CTA
 *   - accent     : the bold tangerine call-to-action
 *   - secondary  : outline on neutral
 *   - ghost      : low-weight, inline use
 */
export const Button = forwardRef(function Button(
  {
    as,
    to,
    href,
    variant = 'primary',
    size = 'md',
    className,
    children,
    icon,
    iconPosition = 'right',
    ...rest
  },
  ref,
) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 font-medium tracking-tight ' +
    'rounded-full transition-all duration-300 ease-out-expo will-change-transform ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ' +
    'disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-ink text-bg hover:bg-ink/90 dark:bg-ink dark:text-bg ' +
      'shadow-[0_1px_0_0_rgb(var(--color-line))] hover:-translate-y-0.5',
    accent:
      'bg-accent text-accent-ink hover:brightness-105 hover:-translate-y-0.5 ' +
      'shadow-[0_8px_24px_-12px_rgb(var(--color-accent)/0.6)]',
    secondary:
      'bg-transparent text-ink border border-ink/20 hover:bg-ink hover:text-bg hover:border-ink',
    ghost:
      'bg-transparent text-ink hover:bg-ink/5 dark:hover:bg-ink/10',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-[0.95rem]',
    lg: 'h-14 px-8 text-base',
  };

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="inline-flex transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  const Component = as || 'button';
  return (
    <Component ref={ref} className={classes} {...rest}>
      {content}
    </Component>
  );
});
