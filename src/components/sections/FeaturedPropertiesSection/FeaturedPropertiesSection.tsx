import PropertyCard from "./PropertyCard";
import { properties } from "./property-data";
import Link from "next/link";

export default function FeaturedPropertiesSection() {
  return (
    <section className="py-16 lg:py-[80px]">
      <div className="container-main">
        <div className="flex flex-col gap-10">
          {/* HEADER */}
          <div className="flex flex-col gap-6">
            {/* LABEL */}
            <div className="inline-flex items-center self-start rounded-full border border-black/10 px-4 py-2">
              <span className="mr-2 h-3 w-3 rounded-full bg-black" />
              <span className="text-4 font-medium">Featured Properties</span>
            </div>

            {/* HEADER CONTENT */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
              {/* TITLE */}
              <h1 className="-mt-1 max-w-[780px] font-semibold">
                Discover Urbanouse Properties
              </h1>

              {/* DESCRIPTION */}
              <p className="max-w-[500px] text-5 font-regular text-brand-muted lg:text-4">
                Explore an exclusive selection of premium properties,
                meticulously curated to provide you with the best in luxury
                living and prime real estate investment options, tailored to
                your needs
              </p>
            </div>
          </div>

          {/* TABS */}
          <div className="-mx-4 overflow-x-auto  no-scrollbar px-4 lg:mx-0 lg:overflow-visible lg:px-0">
            <div className="flex w-max items-center gap-3 py-1 lg:mx-auto lg:w-auto lg:justify-center lg:gap-5">
              <button className="min-w-[100px] rounded-full bg-[#090C1B] px-4 py-2 text-5 font-medium text-white">
                All Properties
              </button>

              <button className="min-w-[100px] rounded-full border border-[#E7E7E7] bg-white px-4 py-2 text-5 font-medium text-[#090C1B]">
                Family House
              </button>

              <button className="min-w-[100px] rounded-full border border-[#E7E7E7] bg-white px-4 py-2 text-5 font-medium text-[#090C1B]">
                Villa
              </button>

              <button className="min-w-[100px] rounded-full border border-[#E7E7E7] bg-white px-4 py-2 text-5 font-medium text-[#090C1B]">
                Apartment
              </button>
            </div>
          </div>

          {/* CARDS */}
          <div className="-mx-4 overflow-x-auto no-scrollbar  px-4 lg:mx-0 lg:overflow-visible lg:px-0">
            {/* MOBILE HORIZONTAL LIST / DESKTOP GRID */}
            <div className="flex w-max gap-5 lg:grid lg:w-full lg:grid-cols-3 lg:gap-x-5 lg:gap-y-[60px]">
              {properties.map((item) => (
                <Link
                  key={item.id}
                  href={`/property/${item.id}`}
                  className="w-[270px] shrink-0 lg:w-auto lg:shrink"
                >
                  <PropertyCard {...item} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}