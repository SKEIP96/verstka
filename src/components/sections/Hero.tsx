import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="relative h-[130vh] w-full overflow-hidden bg-[#EEF3F8]">
        {/* Wide scene wrapper */}
        <div className="absolute inset-0 flex justify-center">
          <div className="relative h-full w-full max-w-[1800px]">
            {/* Back Title */}
            <div className="absolute top-40 left-1/2 z-10 w-full max-w-[1800px] -translate-x-1/2 px-6">
              <Image
                src="/images/hero/Urbanouse.png"
                alt="Urbanouse"
                width={2000}
                height={1200}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            {/* House image */}
            <div className="absolute inset-x-0 top-[140px] bottom-0 z-20">
              <Image
                src="/images/hero/3d-house-model.svg"
                alt="Modern house"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-[260px] bg-gradient-to-t from-black/60 to-transparent" />

        {/* Bottom content */}
        <div className="absolute bottom-10 left-0 right-0 z-30">
          <div className="flex items-end justify-between container-main">
            <p className="max-w-[520px] text-3 font-regular text-white">
              Discover meticulously crafted homes and properties, blending
              contemporary aesthetics with sustainable living.
            </p>

            <div className="max-w-[360px] text-right text-white">
              <p className="text-4 font-medium">Silverstone Residence</p>
              <p className="mt-2 text-5 font-regular text-white/80">
                1234 Sunflower Lane
              </p>
              <p className="text-5 font-regular text-white/80">
                Los Angeles, CA 90001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}