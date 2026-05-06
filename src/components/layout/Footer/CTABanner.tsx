import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTABanner() {
  return (
    <div className="relative overflow-hidden px-6 py-[110px] text-center text-white min-h-[660px]">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/footer/CTA Banner.svg"
        alt="cta background"
        fill
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* BOTTOM GRADIENT */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#050817]/70 via-[#050817]/30 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1440px]">
        {/* TITLE */}
        <h2 className=" font-semibold leading-[1.12] ">
          Ready to Find Your <br />
          Dream Home with Urbanouse?
        </h2>

        {/* SUBTITLE */}
        <p className="mx-auto mt-6 max-w-[690px]  text-3 font-medium leading-[1.5] text-white/85">
          Join thousands of happy homeowners who found their perfect residence
          with us. Let’s make your property journey smooth and successful.
        </p>

        {/* BUTTON */}
        <button className="mx-auto mt-15 flex items-center gap-4 rounded-full border border-white px-6 py-3 text-3 font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black">
          Let&apos;s work together
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
