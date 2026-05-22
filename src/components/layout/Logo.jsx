import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

/**
 * Logo
 * Wordmark logo combining a geometric mark + display-serif typography.
 * The accent triangle inside the square gives the brand its visual hook.
 */
export function Logo({ className, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="ProximaWorld home"
      className={cn(
        'group inline-flex items-center gap-2.5 text-ink transition-opacity hover:opacity-80',
        className,
      )}
    >
      <span
        aria-hidden
        className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-ink text-bg"
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
          <path d="M9 22 L16 9 L23 22 L19.5 22 L16 15.5 L12.5 22 Z" fill="rgb(var(--color-accent))" />
        </svg>
      </span>
      <span className="font-display text-xl font-semibold tracking-tightest leading-none">
        ProximaWorld<span className="text-accent">.</span>
      </span>
    </Link>
  );
}
