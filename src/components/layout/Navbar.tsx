"use client";

import Link from "next/link";
import Image from "next/image";
import { AlignRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Properties", href: "#", hasDropdown: true },
  { label: "Agents", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="container-main pt-3">
        {/* NAVBAR INNER */}
        <div className="relative flex h-[64px] items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logos/logo-mark.svg"
              alt="Urbanouse logo"
              width={25}
              height={21}
            />
            <span className="text-[22px] font-bold text-black lg:text-1">
              Urbanouse
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 text-sm text-zinc-600 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-5 font-regular text-black transition-opacity hover:opacity-70"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown size={16} strokeWidth={1.4} />
                )}
              </Link>
            ))}
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/login">
              <Button
                variant="outline"
                className="h-9 rounded-full border-2 border-black bg-white px-5 text-black hover:bg-black hover:text-white"
              >
                Sign Up
              </Button>
            </Link>

            <Button className="h-9 rounded-full border-2 border-black bg-black px-5 text-white hover:bg-black/80">
              Sign In
            </Button>
          </div>

          {/* MOBILE MENU */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black"
                  aria-label="Open menu"
                >
                  <AlignRight size={26} strokeWidth={1.5} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="z-100 w-[300px] bg-white p-6 text-black"
              >
                {/* MOBILE MENU HEADER */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/logos/logo-mark.svg"
                    alt="Urbanouse logo"
                    width={25}
                    height={21}
                  />
                  <span className="text-[22px] font-bold text-black">
                    Urbanouse
                  </span>
                </div>

                {/* MOBILE NAV LINKS */}
                <nav className="mt-10 flex flex-col gap-6">
                  {navLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between text-[18px] font-medium text-black transition-opacity hover:opacity-70"
                    >
                      <span>{item.label}</span>

                      {item.hasDropdown && (
                        <ChevronDown size={18} strokeWidth={1.4} />
                      )}
                    </Link>
                  ))}
                </nav>

                {/* MOBILE ACTIONS */}
                <div className="mt-10 flex flex-col gap-3">
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="h-11 w-full rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white"
                    >
                      Sign Up
                    </Button>
                  </Link>

                  <Link href="/login">
                    <Button className="h-11 w-full rounded-full border-2 border-black bg-black text-white hover:bg-black/80">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}