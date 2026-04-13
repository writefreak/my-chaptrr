import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/herosection";
import { BestSellersSection } from "@/components/bestsellerssection";
import { HowItWorksSection } from "@/components/how-it-works";
import { TrendingSection } from "@/components/trending-section";
import { CategoriesSection } from "@/components/categories";
import { PricingSection } from "@/components/pricing";
import { TestimonialsSection } from "@/components/testimonials";
import { CTABanner } from "@/components/CTA";

export default function HomePage() {
  return (
     <div>
       <Navbar />
    <div className="bg-white ">
      <HeroSection />
      <BestSellersSection />
      <TrendingSection />
      <HowItWorksSection />
      <CategoriesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </div>
     </div>
  );
}