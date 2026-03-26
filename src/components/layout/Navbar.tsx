import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-10 pt-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center font-semibold text-lg gap-1"
          >
            <Image
              src="images\logos\logo-mark.svg"
              alt="Urbanouse logo"
              width={20}
              height={21}
            />
            <span className="font-bold text-xl">Urbanouse</span>
          </Link>
          {/* Menu*/}
          <nav className="flex items-center gap-5 text-sm text-zinc-600">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-black transition flex items-center gap-1"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown height={16} width={16} strokeWidth="1" />
                )}
              </Link>
            ))}
          </nav>
          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-9 rounded-full px-5 border-2 border-black bg-transparent"
            >
              Sign Up
            </Button>
            <Button className="rounded-full h-9 px-5">Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
