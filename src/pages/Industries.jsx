import { PageHero } from '../components/sections/PageHero';
import { IndustriesGrid } from '../components/sections/IndustriesGrid';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Where we go deep.
          </>
        }
        description="Two and a half decades engineering systems for some of the most demanding industries on the planet. Domain context isn’t an accessory — it’s the foundation of every engagement."
      />
      <IndustriesGrid heading={false} />
      <Testimonials />
      <CTA />
    </>
  );
}
