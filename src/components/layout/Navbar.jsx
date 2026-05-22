import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../theme/ThemeToggle';
import { Menu, Close, ArrowRight } from '../ui/Icons';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navLinks } from '../../data/navigation';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 8;
  const location = useLocation();

  // Close the mobile menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent background scroll while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo',
        scrolled
          ? 'border-b border-line bg-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/70'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'relative px-3.5 py-2 text-sm font-medium tracking-tight transition-colors',
                      isActive ? 'text-ink' : 'text-muted hover:text-ink',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        aria-hidden
                        className={cn(
                          'absolute left-3.5 right-3.5 bottom-1 h-px origin-left bg-accent transition-transform duration-300 ease-out-expo',
                          isActive ? 'scale-x-100' : 'scale-x-0',
                        )}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <Button
            to="/contact"
            variant="accent"
            size="sm"
            icon={<ArrowRight width={14} height={14} />}
            className="hidden md:inline-flex"
          >
            Start a project
          </Button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full',
              'border border-line bg-surface text-ink',
              'transition-colors hover:border-ink/40',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
            )}
          >
            {open ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        {...(!open && { inert: '' })}
        className={cn(
          'md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-bg border-t border-line',
          'transition-all duration-500 ease-out-expo',
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none',
        )}
      >
        <Container className="flex h-full flex-col justify-between py-10">
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <li
                  key={link.to}
                  className={cn(
                    'transition-all duration-500 ease-out-expo',
                    open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
                  )}
                  style={{ transitionDelay: open ? `${i * 60 + 100}ms` : '0ms' }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        'group flex items-baseline justify-between border-b border-line py-5',
                        'font-display text-3xl tracking-tightest',
                        isActive ? 'text-ink' : 'text-muted hover:text-ink',
                      )
                    }
                  >
                    <span>{link.label}</span>
                    <ArrowRight
                      width={18}
                      height={18}
                      className="text-subtle transition-transform group-hover:translate-x-1"
                    />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="pt-8">
            <Button
              to="/contact"
              variant="accent"
              size="lg"
              icon={<ArrowRight width={16} height={16} />}
              className="w-full"
            >
              Start a project
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
