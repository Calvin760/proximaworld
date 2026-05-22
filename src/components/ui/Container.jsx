import { cn } from '../../utils/cn';

/**
 * Container
 * Centered, max-width content wrapper used everywhere.
 */
export function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8', className)} {...rest}>
      {children}
    </Tag>
  );
}
