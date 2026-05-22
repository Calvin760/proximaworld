import { PageHero } from '../components/sections/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Stats } from '../components/sections/Stats';
import { CTA } from '../components/sections/CTA';
import { values } from '../data/content';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Quiet engineering,<br />
            <span className="italic font-light text-muted">loud outcomes.</span>
          </>
        }
        description="Proxima World is an enterprise technology partner. We engineer the platforms, data systems and integrations that keep complex organisations moving. Twenty-five years in, our pace has only sharpened."
        meta={[
          ['Founded', '2020'],
          ['Headquartered', 'Johannesburg'],
          ['People', '50+'],
          ['Offices', '2'],
        ]}
      />

      {/* Narrative section */}
      <Section tone="default">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-6 font-display font-medium tracking-tightest text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
              Built around a simple idea — that great software is a function of great teams.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-muted">
            <p>
              We started in a single room, focused on one thing: helping banks make sense of fast-moving data. The discipline we earned in those early years — clarity, rigour, accountability — still shapes everything we do.
            </p>
            <p>
              Today, Proxima World operates across financial services, telecoms, government, retail and energy on four continents. Our work spans the lifecycle: strategy, architecture, build, integration, intelligence, and the operations that keep it all running long after launch.
            </p>
            <p>
              What hasn’t changed: we hire for craft, we partner for the long term, and we measure ourselves by the outcomes our clients reach. The technology evolves; the values don’t.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Values grid */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="What we stand for"
          title="Four values, lived daily."
          description="Not a poster on the wall. A set of operating principles we hire, fire and reward against."
          size="lg"
        />
        <Reveal stagger className="mt-16 grid gap-8 md:grid-cols-2">
          {values.map((v, i) => (
            <article key={v.label} className="card p-8 md:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-subtle">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-2xl md:text-3xl tracking-tightest">{v.label}</h3>
              </div>
              <p className="mt-6 text-[0.95rem] md:text-base leading-relaxed text-muted">
                {v.description}
              </p>
            </article>
          ))}
        </Reveal>
      </Section>

      <Stats />
      <CTA />
    </>
  );
}
