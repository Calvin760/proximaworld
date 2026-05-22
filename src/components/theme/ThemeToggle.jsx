import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from '../ui/Icons';
import { cn } from '../../utils/cn';

/**
 * ThemeToggle
 * Small icon button to switch between light & dark themes.
 * Uses two icons cross-faded with a rotation transition for delight.
 */
export function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-full',
        'border border-line bg-surface text-ink',
        'transition-all duration-300 ease-out-expo hover:border-ink/40 hover:bg-surface-2',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className,
      )}
    >
      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out-expo',
          isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100',
        )}
      >
        <Sun width={18} height={18} />
      </span>
      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out-expo',
          isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50',
        )}
      >
        <Moon width={18} height={18} />
      </span>
    </button>
  );
}
