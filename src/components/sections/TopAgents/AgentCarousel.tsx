"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import AgentCard from "./AgentCard";

export function AgentCarousel({ agents }: { agents: any[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full">
      <CarouselContent className="ml-0 gap-5 py-[40px]">
        {agents.map((agent) => (
          <CarouselItem key={agent.id} className="pl-0 basis-auto">
            <div className="pr-4">
              <AgentCard {...agent} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Контейнер управления: Стрелки + Точки */}
      <div className="flex items-center justify-center gap-6 mt-0 ">
        <CarouselPrevious className="static translate-y-0 h-10 w-10 [&_svg]:size-6" />
        
        {/* Точки пагинации */}
        <div className="flex gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-black w-6" : "bg-gray-300 w-2.5"
              }`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>

        <CarouselNext className="static translate-y-0 h-10 w-10" />
      </div>
    </Carousel>
  );
}