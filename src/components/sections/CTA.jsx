import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { ArrowRight } from '../ui/Icons';

/**
 * CTA
 * Final big call-to-action with oversized statement type and dual CTAs.
 */
export function CTA() {
  return (
    <Section tone="default" className="overflow-hidden">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-surface px-6 py-20 md:px-16 md:py-28 lg:py-32">
          {/* Decorative atmosphere */}
          <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
          <div
            aria-hidden
            className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <span className="eyebrow">Let’s build</span>
              <h2 className="mt-6 max-w-3xl font-display font-medium tracking-tightest text-[clamp(2.25rem,5vw,4.5rem)] leading-[1]">
                Have a system worth building&nbsp;
                <span className="italic font-light text-muted">properly?</span>
              </h2>
              <p className="mt-6 max-w-prose text-base md:text-lg leading-relaxed text-muted">
                Tell us the outcome you’re working toward. We’ll come back within one business day with a shape for the conversation.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-wrap items-center gap-3 md:justify-end">
              <Button
                to="/contact"
                variant="accent"
                size="lg"
                icon={<ArrowRight width={16} height={16} />}
              >
                Get in touch
              </Button>
              <Button to="/services" variant="ghost" size="lg">
                Browse services
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
