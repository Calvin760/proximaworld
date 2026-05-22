import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const steps = [
  {
    n: '01',
    title: 'Listen, then frame.',
    body:
      'We start by understanding the business outcome — not the technology. Discovery is short, sharp, and grounded in evidence.',
  },
  {
    n: '02',
    title: 'Architect for the next decade.',
    body:
      'Architecture decisions compound. We design for change: composable boundaries, observability built in, costs understood.',
  },
  {
    n: '03',
    title: 'Ship, measure, repeat.',
    body:
      'Small batches, instrumented from day one. We treat every release as a hypothesis to validate, not a milestone to celebrate.',
  },
  {
    n: '04',
    title: 'Operate as one team.',
    body:
      'From go-live to scale, we stay alongside. Managed services, SRE, and continuous improvement keep momentum compounding.',
  },
];

/**
 * Approach
 * Numbered process with a left-rail title and a right-rail list of steps.
 */
export function Approach() {
  return (
    <Section tone="default">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                A repeatable approach,<br />
                <span className="italic font-light text-muted">never a cookie-cutter one.</span>
              </>
            }
            description="The same disciplined method, calibrated to the size and ambition of every engagement."
            size="lg"
          />
        </div>

        <div className="lg:col-span-7">
          <Reveal stagger className="space-y-0">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`grid grid-cols-[auto,1fr] gap-6 sm:gap-10 py-10 ${i !== 0 ? 'border-t border-line' : ''}`}
              >
                <span className="font-mono text-sm text-subtle pt-1">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tightest">{s.title}</h3>
                  <p className="mt-4 max-w-prose text-[0.95rem] md:text-base leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
