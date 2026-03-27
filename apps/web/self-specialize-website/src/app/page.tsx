import { Efficiency } from '@/components/Efficiency';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { ProductLayers } from '@/components/ProductLayers';
import { TrustGovernance } from '@/components/TrustGovernance';
import { WhyThisMatters } from '@/components/WhyThisMatters';

export default function Home() {
  return (
    <main className="bg-white text-ink">
      <Hero />
      <HowItWorks />
      <ProductLayers />
      <Efficiency />
      <WhyThisMatters />
      <TrustGovernance />
      <Footer />
    </main>
  );
}
