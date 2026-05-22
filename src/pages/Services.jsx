import { PageHero } from '../components/sections/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { Approach } from '../components/sections/Approach';
import { CTA } from '../components/sections/CTA';
import { services } from '../data/services';
import { Check } from '../components/ui/Icons';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Capability, end-to-end.
          </>
        }
        description="Six tightly integrated practices that span the lifecycle of every engagement. Engaged individually, or composed into a single delivery team."
      />

      <Section tone="default">
        <div className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
          {services.map((s) => (
            <Reveal key={s.id} className="bg-surface">
              <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <span className="font-mono text-sm text-subtle">({s.code})</span>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl tracking-tightest">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-prose text-[0.95rem] md:text-base leading-relaxed text-muted">
                    {s.summary}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="text-2xs font-mono uppercase tracking-[0.18em] text-subtle">
                    Capabilities
                  </h3>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 border-t border-line py-3 text-[0.95rem]">
                        <Check
                          width={16}
                          height={16}
                          className="mt-1 shrink-0 text-accent"
                        />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Approach />
      <CTA />
    </>
  );
}
