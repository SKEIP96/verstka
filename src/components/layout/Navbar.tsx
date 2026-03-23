import Link from"next/link";
import {Button} from "@/components/ui/button";

const navLinks = [
    {label: "Home", href: "#"},
    {label: "About Us", href: "#"},
    {label: "Properties", href: "#"},
    {label: "Agents", href: "#"},
    {label: "Projects", href: "#"},
    {label: "Contact Us", href: "#"},
    ];

export default function Navbar() {
    return (
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto px-20 pt-3">
            <div className="flex items-center justify-between">
                  {/* Logo */}
                <Link href="/" className="font-semibold text-lg">
                Urbanouse
                </Link>
                {/* Menu*/}
                <nav className="flex items-center gap-5 text-sm text-zinc-600">
                    {navLinks.map((item) =>(
                        <Link
                        key={item.href}
                        href={item.href}
                        className="hover:text-black transition"
                        >
                        {item.label}
                        </Link>
                    ))}
                </nav>
                   {/* Buttons */}
                   <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-10 rounded-full px-5">
                        Sign In
                    </Button>
                    <Button  className="rounded-full h-10 px-5">
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    
      </header>
    )
  }