import { Container } from '../ui/Container';

/**
 * PageHero
 * Compact hero used at the top of inner pages (About, Services, etc.).
 * Provides consistent rhythm and breadcrumb-style metadata.
 */
export function PageHero({ eyebrow, title, description, meta }) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-32 pb-16 md:pt-40 md:pb-24">
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
      <Container className="relative">
        {eyebrow && <span className="eyebrow animate-fade-down">{eyebrow}</span>}
        <h1 className="mt-6 max-w-4xl font-display font-medium tracking-tightest text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] animate-fade-up">
          {title}
        </h1>
        {description && (
          <p
            className="mt-8 max-w-prose text-lg md:text-xl leading-relaxed text-muted animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            {description}
          </p>
        )}
        {meta && (
          <div
            className="mt-12 flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            {meta.map(([label, value]) => (
              <div key={label} className="flex items-baseline gap-3">
                <span className="text-2xs font-mono uppercase tracking-[0.18em] text-subtle">
                  {label}
                </span>
                <span className="font-medium text-ink">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
