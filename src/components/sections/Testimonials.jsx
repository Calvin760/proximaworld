import { useState } from 'react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Quote } from '../ui/Icons';
import { testimonials } from '../../data/content';
import { cn } from '../../utils/cn';

/**
 * Testimonials
 * Crossfading quote carousel — quiet, editorial, no fluff.
 * Auto-advances every 8s; pause on hover; keyboard accessible.
 */
export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <Section tone="sand" size="lg">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Voices"
            title="What partners say."
            size="lg"
          />
          <Reveal className="mt-10 flex gap-2" role="tablist" aria-label="Select testimonial">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={active === i}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-500 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  active === i ? 'w-10 bg-ink' : 'w-6 bg-line hover:bg-subtle',
                )}
              />
            ))}
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <Quote width={48} height={48} className="text-accent" />
            <div className="relative mt-8 min-h-[260px] md:min-h-[200px]">
              {testimonials.map((t, i) => (
                <figure
                  key={t.name}
                  className={cn(
                    'absolute inset-0 transition-all duration-700 ease-out-expo',
                    active === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
                  )}
                  aria-hidden={active !== i}
                >
                  <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tightest text-ink">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                    <span aria-hidden className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bg font-mono text-sm">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                    <div>
                      <div className="font-medium tracking-tight">{t.name}</div>
                      <div className="text-sm text-muted">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
