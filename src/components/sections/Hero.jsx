import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ArrowRight, ArrowUpRight } from '../ui/Icons';

/**
 * Hero
 * Headline + supporting copy + dual CTAs.
 * Heavy emphasis on display typography and quiet supporting metadata.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-32 md:pt-40 lg:pt-48 pb-20 lg:pb-32"
    >
      {/* Background atmosphere — faint grid + radial fade */}
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[60%] rounded-full bg-accent/10 blur-[120px] dark:bg-accent/20"
      />

      <Container className="relative">
        {/* Eyebrow */}
        <div className="flex animate-fade-down items-center gap-3">
          <span className="eyebrow">Enterprise software engineering</span>
        </div>

        {/* Headline */}
        <h1
          id="hero-title"
          className="mt-8 max-w-5xl font-display font-medium tracking-tightest text-display animate-fade-up"
        >
          Build the systems that move&nbsp;
          <span className="relative inline-block">
            <span className="italic font-light">modern</span>
            <svg
              aria-hidden
              viewBox="0 0 220 12"
              className="absolute -bottom-2 left-0 w-full text-accent"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8 Q 60 2, 110 6 T 218 6"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          enterprises forward.
        </h1>

        {/* Supporting paragraph + CTAs */}
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <p
            className="md:col-span-7 max-w-prose text-lg md:text-xl leading-relaxed text-muted animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            ProximaWorld Technologies is the technology partner for organisations engineering
            their next decade — from cloud-native platforms and data
            intelligence to integration and managed services.
          </p>

          <div
            className="md:col-span-5 flex flex-wrap items-center gap-3 md:justify-end animate-fade-up"
            style={{ animationDelay: '220ms' }}
          >
            <Button to="/contact" variant="accent" size="lg" icon={<ArrowRight width={16} height={16} />}>
              Start a project
            </Button>
            <Button to="/services" variant="secondary" size="lg" icon={<ArrowUpRight width={16} height={16} />}>
              View services
            </Button>
          </div>
        </div>

        {/* Quiet metadata strip */}
        <div
          className="mt-20 grid grid-cols-2 gap-y-8 sm:grid-cols-4 border-t border-line pt-8 animate-fade-up"
          style={{ animationDelay: '340ms' }}
        >
          {[
            ['EST.', '2020'],
            ['HEADCOUNT', '650+'],
            ['PRESENCE', '9 provinces'],
            ['ESG', 'Carbon-neutral ops'],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-2xs font-mono uppercase tracking-[0.18em] text-subtle">{label}</p>
              <p className="mt-2 font-display text-xl md:text-2xl tracking-tightest">{value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
