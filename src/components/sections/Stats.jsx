import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { stats } from '../../data/content';

/**
 * Stats
 * Four-up metrics block.
 * Inverted (ink) background creates rhythm against neutral sections above & below.
 */
export function Stats() {
  return (
    <Section tone="ink" size="lg">
      <Reveal>
        <p className="eyebrow text-bg/60 dark:text-muted">By the numbers</p>
        <h2 className="mt-6 max-w-3xl font-display font-medium tracking-tightest text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
          A track record built on disciplined engineering and long-term partnership.
        </h2>
      </Reveal>

      <Reveal stagger className="mt-16 grid grid-cols-2 gap-y-12 sm:gap-y-16 md:grid-cols-4 md:gap-x-8">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l-2 border-accent pl-6">
            <p className="font-display text-[clamp(2.75rem,6vw,5rem)] leading-none tracking-tightest">
              {stat.value}
            </p>
            <p className="mt-4 max-w-[18ch] text-sm md:text-base leading-relaxed text-bg/70 dark:text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
