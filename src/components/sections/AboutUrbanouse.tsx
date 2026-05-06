import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function AboutUrbanouse() {
  return (
    <section className="w-full pt-20 pb-20">
      <div className="container-main">
        <div className="rounded-[32px] bg-white p-8">
          {/* Top content */}
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center rounded-full border border-black/10 px-4 py-2">
                <span className="mr-2 h-3 w-3 rounded-full bg-black" />
                <span className="text-4 font-medium">About Urbanouse</span>
              </div>

              <h1 className="mt-6 max-w-[640px]  leading-[1.10] font-semibold tracking-[-0.03em]">
                Your Dream Home,
                <br />
                Our Expertise.
              </h1>
            </div>

            <p className="max-w-[530px] text-4 font-regular leading-normal text-[#8C8C8C]">
              At Urbanouse, we are committed to helping individuals and families
              find their perfect homes and smart investment properties. Our
              approach blends personalized service, expert insights, and a
              dedication to excellence, ensuring your real estate journey is
              seamless, rewarding, and tailored to your unique needs.
            </p>
          </div>

          {/* Bottom showcase */}
          <div className="mt-20 flex items-center ">
            {/* Cards */}
            <div className="flex  gap-2">
              {/* Featured card */}
              <div className="relative h-[320px] w-[500px] rounded-[15px] bg-neutral-200">
                <div className="absolute inset-x-0 bottom-0 rounded-b-[15px] bg-linear-to-t from-black/60 to-transparent p-5 text-white">
                  <p className="font-bold h7">Family House</p>
                  <p className="mt-2 max-w-[530px] text-5 font-regular text-white/80">
                    Discover modern family living with spacious layouts and
                    top-tier amenities designed for comfort and style.
                  </p>
                  <p className="mt-3 text-5 font-medium text-white/90">
                    650+ units available
                  </p>
                </div>
              </div>

              {/* Preview cards */}
              <div className="h-[320px] w-[215px] rounded-[15px] bg-neutral-200" />
              <div className="h-[320px] w-[215px] rounded-[15px] bg-neutral-200" />
              <div className="h-[320px] w-[215px] rounded-[15px] bg-neutral-200" />
            </div>

            {/* More projects button */}
            <div className="ml-8 flex shrink-0 flex-col items-center ">
              <button
                className="flex  items-center justify-center rounded-full"
                aria-label="More projecs"
              >
                <Image
                  src="/images/icons/arrow-up-right.svg"
                  alt="arrow up"
                  width={72}
                  height={72}
                />
              </button>

              <p className="mt-3 text-center  font-regular leading-tight h7">
                More
                <br />
                projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
