import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { industries } from '../../data/industries';

/**
 * IndustriesGrid
 * Six industries shown in a 2/3-column grid.
 */
export function IndustriesGrid({ heading = true }) {
  return (
    <Section id="industries" tone="surface">
      {heading && (
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Deep domain expertise where it counts.
            </>
          }
          description="Two and a half decades engineering systems for the most demanding industries on the planet."
          size="lg"
        />
      )}

      <Reveal stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <article
            key={ind.code}
            className="group relative flex flex-col rounded-2xl border border-line bg-bg p-8 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft font-mono text-sm font-semibold tracking-widest text-accent">
                {ind.code}
              </span>
              <h3 className="font-display text-xl md:text-2xl tracking-tightest">
                {ind.title}
              </h3>
            </div>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-muted">
              {ind.description}
            </p>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
