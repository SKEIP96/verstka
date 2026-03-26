import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full">
      {/* Hero Wrapper */}
      <div className="relative h-screen w-full overflow-hidden bg-[#EEF3F8]">
        {/* Back Title */}
        <div className="absolute top-40 left-1/2 z-20 w-[95vw] h-[50vw]  -translate-x-1/2">
          <Image
            src="/images/hero/Urbanouse.png"
            alt="Urbanouse"
            width={2000}
            height={1200}
            className="h-auto w-full object-contain "
            priority
          />
        </div>
        {/* House image */}
        <div className="absolute top-60 left-1/2 z-20 w-[100vw] h-[50vw]  -translate-x-1/2">
          <Image
            src="/images/hero/3d-house-model.svg"
            alt="Modern house"
            width={2000}
            height={1200}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
        {/* Bottom Conteiner */}
        <div className="absolute bottom-10 left-6 right-6 z-30   flex items-end justify-between">
          {/* Left text */}
          <p className="max-w-[360px] text-white">
            Discover meticulously crafted homes and properties, blending
            contemporary aesthetics with sustainable living.
          </p>
          {/* Right blick */}
          <div className="max-w-[360px] text-white">
            <p className="text-lg font-medium">Silverstone Residence</p>
            <p className="mt-1 text-sm text-white/80">1234 Sunflower Lane</p>
            <p className="text-sm text-white/80">Los Angeles, CA 90001</p>
          </div>
        </div>
      </div>
    </section>
  );
}
