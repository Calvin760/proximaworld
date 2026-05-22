import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Logo } from './Logo';
import { footerNav } from '../../data/navigation';
import { ArrowUpRight } from '../ui/Icons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-bg dark:bg-surface dark:text-ink">
      <Container className="py-20 lg:py-28">
        {/* Brand statement */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-8 max-w-md font-display text-2xl md:text-3xl leading-[1.15] tracking-tightest text-bg dark:text-ink">
              We engineer the systems that move modern enterprises&nbsp;
              <span className="text-accent">beyond the horizon.</span>
            </p>
            <a
              href="mailto:hello@proxima.world"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-bg/70 hover:text-bg dark:text-muted dark:hover:text-ink transition-colors"
            >
              hello@proxima.world
              <ArrowUpRight width={14} height={14} />
            </a>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="text-2xs font-mono uppercase tracking-[0.18em] text-bg/40 dark:text-subtle">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-[0.95rem] text-bg/80 hover:text-accent dark:text-muted dark:hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col-reverse gap-6 border-t border-bg/10 dark:border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-bg/50 dark:text-subtle">
            © {year} Proxima World. Crafted with care. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-bg/60 dark:text-muted">
            <Link to="#" className="hover:text-accent transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-accent transition-colors">Terms</Link>
            <Link to="#" className="hover:text-accent transition-colors">Cookies</Link>
            <span className="hidden sm:inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              All systems operational
            </span>
          </div>
        </div>
      </Container>

      {/* Oversized wordmark — a quiet bit of editorial flair */}
      <div aria-hidden className="overflow-hidden pb-8">
        <Container>
          <p className="font-display font-medium tracking-tightest text-[clamp(4rem,18vw,18rem)] leading-[0.85] text-bg/5 dark:text-ink/[0.04] select-none">
            proxima<span className="text-accent">.</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
