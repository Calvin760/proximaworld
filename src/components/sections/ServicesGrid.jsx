import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { ArrowUpRight } from '../ui/Icons';
import { services } from '../../data/services';
import { Link } from 'react-router-dom';

/**
 * ServicesGrid
 * Six service cards in a responsive grid.
 * Each card has a numbered code, title, summary, and capability list.
 */
export function ServicesGrid({ heading = true }) {
  return (
    <Section id="services" tone="default">
      {heading && (
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Full-stack capability,<br />
                <span className="italic font-light text-muted">delivered end-to-end.</span>
              </>
            }
            description="Six tightly integrated practices that span the lifecycle of every engagement — from initial strategy and architecture through to ongoing operations."
            size="xl"
            className="md:max-w-2xl"
          />
          <Reveal className="md:pb-2">
            <Button
              to="/services"
              variant="secondary"
              icon={<ArrowUpRight width={14} height={14} />}
            >
              All capabilities
            </Button>
          </Reveal>
        </div>
      )}

      <Reveal stagger className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.id}
            to="/services"
            className="group relative bg-surface p-8 transition-colors duration-500 ease-out-expo hover:bg-ink hover:text-bg focus-visible:bg-ink focus-visible:text-bg"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-muted group-hover:text-bg/60">
                ({s.code})
              </span>
              <ArrowUpRight
                width={18}
                height={18}
                className="text-subtle transition-all duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </div>
            <h3 className="mt-8 font-display text-2xl md:text-3xl tracking-tightest">
              {s.title}
            </h3>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-muted group-hover:text-bg/70">
              {s.summary}
            </p>
            <ul className="mt-8 space-y-2 border-t border-line group-hover:border-bg/15 pt-6">
              {s.capabilities.slice(0, 3).map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-muted group-hover:text-bg/80">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </Reveal>
    </Section>
  );
}
