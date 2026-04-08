import HeroSection from '@/components/HeroSection';
import DealsSection from '@/components/DealsSection';
import PopularDestinations from '@/components/PopularDestinations';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PopularDestinations />
      <DealsSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </div>
  );
}
