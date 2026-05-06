import Image from "next/image";
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import PropertySearch from "@/components/sections/PropertyFilters"
import AboutUrbanouse from "@/components/sections/AboutUrbanouse";
import PropertySection from "@/components/sections/PropertyStats";
import FeaturedPropertiesSection from "@/components/sections/FeaturedPropertiesSection/FeaturedPropertiesSection";
import TopAgentsSection from "@/components/sections/TopAgents/TopAgentsSection"
import TestimonialsSection from "@/components/sections/Testimonials/TestimonialsSection";
import FAQSection from "@/components/sections/FAQ/FAQSection";

export default function Home() {
  return (
    <div className="">
      <main className="">
       <Hero/>
       <PropertySearch />
       <AboutUrbanouse />
       <PropertySection />
       <FeaturedPropertiesSection />
       <TopAgentsSection />
       <TestimonialsSection />
       <FAQSection />
      </main>
    </div>
  );
}
