import { Container } from '../ui/Container';
import {
  MarkAlpha,
  MarkBeta,
  MarkGamma,
  MarkDelta,
  MarkEpsilon,
  MarkZeta,
} from '../ui/Icons';

const logos = [MarkAlpha, MarkBeta, MarkGamma, MarkDelta, MarkEpsilon, MarkZeta];

/**
 * LogoMarquee
 * Endless horizontal scroll of partner / client logos.
 * The track is duplicated and `animate-marquee` translates it by -50%.
 */
export function LogoMarquee() {
  return (
    <section aria-label="Trusted by leading organisations" className="border-y border-line py-14">
      <Container>
        <p className="eyebrow mb-8 justify-center text-center">Engineering for</p>
      </Container>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="flex w-max animate-marquee gap-16 px-8 text-muted">
          {[...logos, ...logos].map((Mark, i) => (
            <div key={i} className="flex h-8 shrink-0 items-center opacity-70 transition-opacity hover:opacity-100">
              <Mark />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
