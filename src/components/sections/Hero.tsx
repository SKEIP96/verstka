import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      {/* HERO WRAPPER */}
      <div className="relative min-h-[100svh] w-full overflow-hidden bg-[#EEF3F8] lg:h-[130vh]">
        {/* BACKGROUND SCENE */}
        <div className="absolute inset-0 flex justify-center">
          <div className="relative h-full w-full max-w-[1800px]">
            {/* BACK TITLE */}
            <div className="absolute top-[120px] z-10 w-full overflow-hidden lg:left-1/2 lg:top-40 lg:w-full lg:max-w-[1800px] lg:-translate-x-1/2 lg:px-6">
              {/* MOBILE ANIMATED TITLE */}
              <div className="animate-hero-title-scroll lg:hidden">
                <Image
                  src="/images/hero/Urbanouse.svg"
                  alt="Urbanouse"
                  width={2000}
                  height={1200}
                  className="h-auto w-[220vw] max-w-none object-contain sm:w-[170vw]"
                  priority
                />
              </div>

              {/* DESKTOP STATIC TITLE */}
              <div className="hidden lg:block">
                <Image
                  src="/images/hero/Urbanouse.svg"
                  alt="Urbanouse"
                  width={2000}
                  height={1200}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* HOUSE IMAGE */}
            <div className="absolute inset-x-0 bottom-0 top-[160px] z-20 sm:top-[130px] lg:top-[140px]">
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

        {/* BOTTOM GRADIENT */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-[360px] bg-linear-to-t from-black/70 via-black/35 to-transparent lg:h-[260px] lg:from-black/60" />

        {/* BOTTOM CONTENT */}
        <div className="absolute inset-x-0 bottom-8 z-30 lg:bottom-10">
          <div className="container-main">
            <div className="flex flex-col gap-8 text-white lg:flex-row lg:items-end lg:justify-between">
              {/* HERO DESCRIPTION */}
              <p className="max-w-[520px] text-4 font-regular sm:text-3">
                Discover meticulously crafted homes and properties, blending
                contemporary aesthetics with sustainable living.
              </p>

              {/* PROPERTY INFO */}
              <div className="max-w-[360px] text-left lg:text-right">
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
      </div>
    </section>
  );
}
