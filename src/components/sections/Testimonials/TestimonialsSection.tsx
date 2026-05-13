"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "./testimonial-data";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const testimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    );
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    stopTimer();

    timerRef.current = setInterval(() => {
      nextTestimonial();
    }, 15000);
  };

  useEffect(() => {
    startTimer();

    return () => stopTimer();
  }, []);

  return (
    <section className="section relative overflow-hidden bg-[#F5F5F5] py-[60px]">
      {/* DECOR LEFT */}
      <Image
        src="/images/logos/logo-mark.svg"
        alt=""
        width={315}
        height={350}
        className="pointer-events-none absolute -left-17 -bottom-15 rotate-15 opacity-2"
      />

      {/* DECOR RIGHT */}
      <Image
        src="/images/logos/logo-mark.svg"
        alt=""
        width={310}
        height={350}
        className="pointer-events-none absolute -right-15 -top-10 -rotate-30 opacity-2"
      />

      <div className="container-main relative z-10">
        {/* HEADER */}
        <div>
          {/* LABEL */}
          <div className="inline-flex items-center rounded-full border border-black/10 px-4 py-2">
            <span className="mr-2 h-3 w-3 rounded-full bg-black" />
            <span className="text-4 font-medium">Testimonials</span>
          </div>

          {/* TITLE */}
          <h1 className="mb-4 mt-4 max-w-[840px] font-semibold tracking-tight">
            What People Are Saying
          </h1>

          {/* SUBTITLE */}
          <p className="text-3 font-regular text-[#8C8C8C]">
            Real feedback from clients who’ve experienced the Urbanouse
            difference.
          </p>
        </div>

        {/* TESTIMONIAL CONTENT */}
        <div
          className="mx-auto mt-[90px] max-w-[1000px] text-center"
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          {/* FIXED REVIEW AREA */}
          <div className="flex h-[260px] items-center justify-center">
            <div
              key={testimonial.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out"
            >
              {/* TESTIMONIAL TEXT */}
              <h4 className="font-regular text-black">
                “{testimonial.text}”
              </h4>

              {/* AUTHOR */}
              <div className="mt-8">
                <p className="text-4 font-medium">
                  {testimonial.name}
                </p>
                <p className="text-5 font-regular text-[#8A8A8A]">{testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* CONTROLS - НЕ ПРЫГАЮТ */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* PREV BUTTON */}
            <button
              type="button"
              onClick={() => {
                prevTestimonial();
                startTimer();
              }}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#C7C7C7] text-[#C7C7C7] transition-colors duration-300 hover:border-black hover:text-black"
              >
              <ArrowLeft size={22} />
            </button>

            {/* DOTS */}
            <div className="flex items-center gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveIndex(index);
                    startTimer();
                  }}
                  className={
                    index === activeIndex
                      ? "h-3 w-3 rounded-full bg-black transition-all duration-300"
                      : "h-2 w-2 rounded-full bg-[#C7C7C7] transition-all duration-300 hover:bg-black/40"
                  }
                />
              ))}
            </div>

            {/* NEXT BUTTON */}
            <button
              type="button"
              onClick={() => {
                nextTestimonial();
                startTimer();
              }}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#C7C7C7] text-[#C7C7C7] transition-colors duration-300 hover:border-black hover:text-black"
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
