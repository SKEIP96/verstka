import Image from "next/image";
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import PropertySearch from "@/components/sections/PropertySearch"

export default function Home() {
  return (
    <div className="">
      <main className="">
       <Hero/>
       <PropertySearch />
      </main>
    </div>
  );
}
