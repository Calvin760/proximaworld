import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { ArrowRight } from '../components/ui/Icons';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-32">
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
      <Container className="relative">
        <p className="eyebrow">Error · 404</p>
        <h1 className="mt-6 max-w-3xl font-display font-medium tracking-tightest text-[clamp(3rem,9vw,9rem)] leading-[0.9]">
          Page not&nbsp;<span className="italic font-light text-accent">found.</span>
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted">
          The link you followed may be broken, or the page may have been moved. Let’s get you back on track.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/" variant="accent" size="lg" icon={<ArrowRight width={16} height={16} />}>
            Back to home
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
