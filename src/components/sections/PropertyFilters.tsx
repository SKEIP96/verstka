"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import FilterSelect from "@/components/shared/FilterField";

export default function PropertyFilters() {
  const [lookingFor, setLookingFor] = useState("Buy");
  const [location, setLocation] = useState("London");
  const [propertyType, setPropertyType] = useState("Family House");
  const [bedrooms, setBedrooms] = useState("3 bedrooms");
  const [budget, setBudget] = useState("$500,000");

  return (
    <section className="w-full py-5 lg:pt-25 lg:pb-0">
      <div className="container-main">
        {/* CARD */}
        <div className="bg-white px-0 py-8 lg:p-8">
          {/* HEADER */}
          <div className="text-center">
            {/* TITLE */}
            <h3 className="font-medium">Find Your Dream Property</h3>

            {/* SUBTITLE */}
            <p className="mx-auto mt-2 max-w-[34ch] text-5 font-regular text-brand-muted lg:max-w-[40ch] lg:text-3">
              We offer modern properties with the best quality that meet all your
              needs.
            </p>
          </div>

          {/* FILTERS WRAPPER */}
          <div className="mt-10 flex flex-col gap-8 lg:mt-[60px] lg:flex-row lg:items-end lg:justify-center">
            {/* SEARCH SELECTS */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-20">
              <FilterSelect
                label="Looking for"
                value={lookingFor}
                onChange={setLookingFor}
                options={["Buy", "Rent", "Sell"]}
              />

              <FilterSelect
                label="Location"
                value={location}
                onChange={setLocation}
                options={["London", "Paris", "Berlin"]}
              />

              <FilterSelect
                label="Property Type"
                value={propertyType}
                onChange={setPropertyType}
                options={["Family House", "Apartment", "Villa"]}
              />

              <FilterSelect
                label="Bedrooms"
                value={bedrooms}
                onChange={setBedrooms}
                options={[
                  "1 bedroom",
                  "2 bedrooms",
                  "3 bedrooms",
                  "4 bedrooms",
                ]}
              />

              <FilterSelect
                label="Budget"
                value={budget}
                onChange={setBudget}
                options={["$300,000", "$500,000", "$700,000", "$1,000,000"]}
              />
            </div>

            {/* SEARCH BUTTON */}
            <div className="lg:ml-[60px] lg:-translate-y-2">
              {/* MOBILE BUTTON */}
              <button
                type="button"
                className="flex h-[56px] w-full items-center justify-center gap-3 rounded-full bg-dark text-white lg:hidden"
              >
                <span className="text-5 font-medium">Search</span>
                <Search size={22} strokeWidth={1.8} />
              </button>

              {/* DESKTOP BUTTON */}
              <button
                type="button"
                className="hidden h-[56px] w-[56px] items-center justify-center rounded-full bg-black text-white lg:flex"
              >
                <Search size={32} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}