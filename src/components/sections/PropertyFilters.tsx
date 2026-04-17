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
    <section className="w-full pt-25">
      <div className="container-main">
        {/* Card */}
        <div className=" bg-white p-8">
          {/* Title */}
          <h3 className="font-medium text-center">Find Your Dream Property</h3>
          {/* Subtitle */}
          <p className="mt-2 text-center text-3 text-regular text-[#8c8c8c] mx-auto max-w-[40ch] ">
            We offer modern properties with the best quality that meet all your
            needs.
          </p>
          <div className="flex justify-center items-end mt-[60px]">
           
            {/* Search Selects*/}
            <div className="flex items-end gap-20 ">
              
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

            {/* Search Button*/}
            <div className="flex items-end ml-[60px] -translate-y-2">
              <button
                type="button"
                className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-black text-white"
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
