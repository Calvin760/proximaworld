import { Hero } from '../components/sections/Hero';
import { LogoMarquee } from '../components/sections/LogoMarquee';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { Stats } from '../components/sections/Stats';
import { IndustriesGrid } from '../components/sections/IndustriesGrid';
import { Approach } from '../components/sections/Approach';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesGrid />
      <Stats />
      <IndustriesGrid />
      <Approach />
      <Testimonials />
      <CTA />
    </>
  );
}
