"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  { label: "Home for Rent", value: "5300+" },
  { label: "Home to Buy", value: "3000+" },
  { label: "Agents", value: "120+" },
  { label: "Cities Covered", value: "83+" },
  { label: "Total Properties", value: "9200+" },
];

export default function PropertySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStat = stats[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === stats.length - 1 ? 0 : currentIndex + 1,
      );
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-accent py-5">
      <div className="relative overflow-hidden bg-[#090C1B] px-6 py-[70px] lg:px-[60px] lg:py-[80px]">
        {/* LEFT DECORATION */}
        <Image
          src="/images/logos/Pattern1.svg"
          alt="logo decor"
          width={235}
          height={265}
          className="pointer-events-none absolute -left-8 bottom-0 z-0 h-[235px] w-[255px] object-fill opacity-70"
        />

        {/* RIGHT DECORATION */}
        <Image
          src="/images/logos/Pattern1.svg"
          alt="logo decor"
          width={235}
          height={265}
          className="pointer-events-none absolute -right-12 -top-6 z-0 h-[176px] w-[201px] rotate-45 object-fill opacity-70"
        />

        {/* MOBILE SINGLE STAT */}
        <div className="relative z-10 flex min-h-[120px] items-center justify-center text-center lg:hidden">
          <div
            key={activeStat.label}
            className="animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <p className="text-3 font-regular text-white/60 sm:text-4">
              {activeStat.label}
            </p>

            <h2 className="my-2 text-[64px] leading-none font-semibold text-white">
              {activeStat.value}
            </h2>
          </div>
        </div>

        {/* DESKTOP STATS */}
        <div className="relative z-10 hidden items-center justify-center gap-[90px] lg:flex">
          {stats.map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="text-4 font-regular text-white/60">{item.label}</p>
              <h2 className="my-2 font-semibold text-white">{item.value}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
