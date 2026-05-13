import Image from "next/image";

export default function AboutUrbanouse() {
  return (
    <section className="w-full py-5 lg:py-20">
      <div className="container-main">
        <div className="rounded-[32px] bg-white p-4 lg:p-8">
          {/* TOP CONTENT */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT HEADER */}
            <div>
              {/* LABEL */}
              <div className="inline-flex items-center rounded-full border border-black/10 px-4 py-2">
                <span className="mr-2 h-3 w-3 rounded-full bg-black" />

                <span className="text-4 font-medium">
                  About Urbanouse
                </span>
              </div>

              {/* TITLE */}
              <h1 className="mt-5 max-w-[640px] font-semibold lg:mt-6">
                Your Dream Home,
                <br />
                Our Expertise.
              </h1>
            </div>

            {/* DESCRIPTION */}
            <p className="max-w-[530px] text-5 font-regular text-brand-muted lg:text-4">
              At Urbanouse, we are committed to helping individuals and
              families find their perfect homes and smart investment
              properties. Our approach blends personalized service,
              expert insights, and a dedication to excellence,
              ensuring your real estate journey is seamless,
              rewarding, and tailored to your unique needs.
            </p>
          </div>

          {/* BOTTOM SHOWCASE */}
          <div className="mt-10 flex flex-col gap-4 lg:mt-20 lg:flex-row lg:items-center">
            {/* CARDS */}
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-2">
              {/* FEATURED CARD */}
              <div className="relative h-[220px] w-full overflow-hidden rounded-[15px] bg-neutral-200 lg:h-[320px] lg:w-[500px]">
                {/* CARD OVERLAY */}
                <div className="absolute inset-x-0 bottom-0 rounded-b-[15px] bg-linear-to-t from-black/60 to-transparent p-4 text-white lg:p-5">
                  <p className="h7 font-bold">Family House</p>

                  <p className="mt-2 max-w-[530px] text-7 font-regular text-white/80 lg:text-5">
                    Discover modern family living with spacious layouts
                    and top-tier amenities designed for comfort and
                    style.
                  </p>

                  <p className="mt-3 text-7 font-medium text-white/90 lg:text-5">
                    650+ units available
                  </p>
                </div>
              </div>

              {/* PREVIEW CARD 1 */}
              <div className="h-[220px] w-full rounded-[15px] bg-neutral-200 lg:h-[320px] lg:w-[215px]" />

              {/* PREVIEW CARD 2 */}
              <div className="h-[220px] w-full rounded-[15px] bg-neutral-200 lg:h-[320px] lg:w-[215px]" />

              {/* PREVIEW CARD 3 */}
              <div className="h-[220px] w-full rounded-[15px] bg-neutral-200 lg:h-[320px] lg:w-[215px]" />
            </div>

            {/* MORE PROJECTS */}
            <div className="lg:ml-8 lg:flex lg:shrink-0 lg:flex-col lg:items-center">
              {/* MOBILE BUTTON */}
              <button className="flex h-[44px] w-full items-center justify-center gap-2 rounded-full border border-black text-7 font-medium lg:hidden">
                More Projects

                <Image
                  src="/images/icons/arrow-up-right.svg"
                  alt="arrow up"
                  width={16}
                  height={16}
                />
              </button>

              {/* DESKTOP BUTTON */}
              <button
                className="hidden items-center justify-center rounded-full lg:flex"
                aria-label="More projects"
              >
                <Image
                  src="/images/icons/arrow-up-right.svg"
                  alt="arrow up"
                  width={72}
                  height={72}
                />
              </button>

              {/* DESKTOP TEXT */}
              <p className="mt-3 hidden text-center h7 font-regular lg:block">
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