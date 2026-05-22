import { PageHero } from '../components/sections/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { ArrowUpRight } from '../components/ui/Icons';
import { CTA } from '../components/sections/CTA';

const openings = [
  { title: 'Senior Software Engineer (Backend)', team: 'Engineering', location: 'Cape Town · Hybrid' },
  { title: 'Platform Engineer (Kubernetes)', team: 'Cloud', location: 'Johannesburg · Hybrid' },
  { title: 'Staff Data Engineer', team: 'Data & Intelligence', location: 'Remote, EMEA' },
  { title: 'Engagement Lead', team: 'Delivery', location: 'London · On-site' },
  { title: 'Security Architect', team: 'Cybersecurity', location: 'Johannesburg · Hybrid' },
  { title: 'Frontend Engineer (React)', team: 'Engineering', location: 'Remote, ZA' },
];

const benefits = [
  'Equity in every full-time offer',
  'Quarterly learning budget',
  'Sabbatical at five years',
  'Healthcare for you & your family',
  'Hybrid by default, remote by design',
  'Conference & speaking sponsorship',
];

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build a career,<br />
            <span className="italic font-light text-muted">not just a CV.</span>
          </>
        }
        description="We hire engineers, designers and consultants who care about craft and outcomes in equal measure — and pay them well to do their best work."
        meta={[
          ['Open roles', '5'],
          ['Avg. tenure', '2.2 yrs'],
          ['Glassdoor', '4.7 / 5'],
        ]}
      />

      {/* Why us */}
      <Section tone="default">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Working at Proxima World</span>
            <h2 className="mt-6 font-display font-medium tracking-tightest text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
              The work is the perk. The benefits are the floor.
            </h2>
            <p className="mt-6 max-w-prose text-base md:text-lg leading-relaxed text-muted">
              You’ll work on consequential systems with engineers you’ll learn from for years. We protect deep work, reward craft, and trust adults to manage their own time.
            </p>
          </Reveal>
          <Reveal stagger className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {benefits.map((b) => (
              <div key={b} className="bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <p className="text-[0.95rem] font-medium tracking-tight">{b}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Open roles */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Open roles"
          title="Currently hiring."
          description="A snapshot of roles open right now. Don’t see your fit? Send a note anyway — we read every introduction."
        />

        <Reveal stagger className="mt-12 overflow-hidden rounded-2xl border border-line bg-bg">
          {openings.map((role, i) => (
            <a
              key={role.title}
              href="#"
              className={`group grid grid-cols-1 items-center gap-2 px-6 py-6 md:grid-cols-[1.5fr,1fr,1fr,auto] md:px-8 md:gap-8 transition-colors hover:bg-surface ${
                i !== 0 ? 'border-t border-line' : ''
              }`}
            >
              <div className="font-display text-xl md:text-2xl tracking-tightest">
                {role.title}
              </div>
              <div className="text-sm text-muted">{role.team}</div>
              <div className="text-sm text-muted">{role.location}</div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-ink md:justify-self-end">
                Apply
                <ArrowUpRight
                  width={14}
                  height={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <Button variant="secondary" href="#" icon={<ArrowUpRight width={14} height={14} />}>
            See all roles
          </Button>
        </Reveal>
      </Section>

      <CTA />
    </>
  );
}
