import { useState } from 'react';
import { PageHero } from '../components/sections/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { ArrowRight, ArrowUpRight, Check } from '../components/ui/Icons';
import { cn } from '../utils/cn';

const offices = [
  {
    city: 'Johannesburg',
    address: '15 Alice Lane, Sandton, 2196',
    email: 'jhb@proxima.world',
    phone: '+27 61 413 5102',
  },
  {
    city: 'Cape Town',
    address: 'The Old Biscuit Mill, Woodstock',
    email: 'cpt@proxima.world',
    phone: '+27 21 555 0100',
  },
  // {
  //   city: 'London',
  //   address: '40 Holborn Viaduct, EC1N 2PB',
  //   email: 'ldn@proxima.world',
  //   phone: '+44 20 5555 0100',
  // },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Software Engineering',
    message: '',
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up — this is a demo. In production, POST to your API.
    setSubmitted(true);
  };

  const inputClasses =
    'w-full bg-transparent border-0 border-b border-line py-3 text-base placeholder:text-subtle ' +
    'focus:outline-none focus:border-ink transition-colors';

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what you’re building.
          </>
        }
        description="One business day. One thoughtful reply. No funnels, no chasing — just a conversation about the work."
      />

      <Section tone="default">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            {submitted ? (
              <div
                role="status"
                className="rounded-2xl border border-line bg-surface p-10 md:p-12"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink">
                  <Check width={20} height={20} />
                </span>
                <h2 className="mt-6 font-display text-3xl md:text-4xl tracking-tightest">
                  Thanks — we’ve got it.
                </h2>
                <p className="mt-4 max-w-prose text-muted">
                  A member of our team will reach out within one business day. In
                  the meantime, you can keep exploring our work and capabilities.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    to="/services"
                    variant="secondary"
                    icon={<ArrowUpRight width={14} height={14} />}
                  >
                    Explore services
                  </Button>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        company: '',
                        interest: 'Software Engineering',
                        message: '',
                      });
                    }}
                    variant="ghost"
                  >
                    Send another
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="grid gap-8"
                aria-label="Contact form"
              >
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    id="name"
                    required
                    value={form.name}
                    onChange={update('name')}
                    className={inputClasses}
                    placeholder="Jordan Doe"
                  />
                  <Field
                    label="Work email"
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    className={inputClasses}
                    placeholder="jordan@company.com"
                  />
                </div>
                <Field
                  label="Company"
                  id="company"
                  value={form.company}
                  onChange={update('company')}
                  className={inputClasses}
                  placeholder="Acme Co."
                />
                <div>
                  <label
                    htmlFor="interest"
                    className="text-2xs font-mono uppercase tracking-[0.18em] text-subtle"
                  >
                    I’m interested in
                  </label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={update('interest')}
                    className={cn(inputClasses, 'pr-8 cursor-pointer appearance-none')}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.25rem center',
                    }}
                  >
                    <option>Software Engineering</option>
                    <option>Cloud & Infrastructure</option>
                    <option>Data & Intelligence</option>
                    <option>Integration & Middleware</option>
                    <option>Cybersecurity</option>
                    <option>Managed Services</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-2xs font-mono uppercase tracking-[0.18em] text-subtle"
                  >
                    Tell us a little about the project
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    className={cn(inputClasses, 'resize-none pt-3')}
                    placeholder="The shape of the problem, timeline, anything that helps us prepare for the conversation…"
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-subtle max-w-sm">
                    By submitting you agree to our privacy policy. We never share or sell your details.
                  </p>
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    icon={<ArrowRight width={16} height={16} />}
                  >
                    Send message
                  </Button>
                </div>
              </form>
            )}
          </Reveal>

          {/* Office details */}
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Offices</span>
            <h2 className="mt-6 font-display text-3xl md:text-4xl tracking-tightest">
              Or reach out directly.
            </h2>
            <ul className="mt-10 space-y-8">
              {offices.map((o) => (
                <li key={o.city} className="border-t border-line pt-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl tracking-tightest">{o.city}</h3>
                    <a
                      href={`mailto:${o.email}`}
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      {o.email}
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-muted">{o.address}</p>
                  <p className="mt-1 text-sm text-muted">{o.phone}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

/* --- Local helper component --- */
function Field({ label, id, className, required, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="text-2xs font-mono uppercase tracking-[0.18em] text-subtle">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input id={id} required={required} className={className} {...rest} />
    </div>
  );
}
