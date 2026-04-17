import Image from "next/image";
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import PropertySearch from "@/components/sections/PropertyFilters"
import AboutUrbanouse from "@/components/sections/AboutUrbanouse";
import PropertySection from "@/components/sections/PropertyStats";

export default function Home() {
  return (
    <div className="">
      <main className="">
       <Hero/>
       <PropertySearch />
       <AboutUrbanouse />
       <PropertySection />
      </main>
    </div>
  );
}
