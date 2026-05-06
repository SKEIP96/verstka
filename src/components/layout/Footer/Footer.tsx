import Link from "next/link";
import CTABanner from "./CTABanner";

const footerLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "#" },
  { label: "PROPERTIES", href: "#" },
  { label: "AGENTS", href: "#" },
  { label: "PROJECTS", href: "#" },
  { label: "CONTACT US", href: "#" },
];

const socialLinks = [
  { label: "INSTAGRAM", href: "#" },
  { label: "FACEBOOK", href: "#" },
  { label: "LINKEDIN", href: "#" },
  { label: "YOUTUBE", href: "#" },
];

const policyLinks = [
  { label: "PRIVACY POLICY", href: "#" },
  { label: "TERM OF USE", href: "#" },
  { label: "LEGAL DISCLAIMER", href: "#" },
  { label: "COOKIE POLICY", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050817] text-white">
      {/* CTA BANNER */}
      <CTABanner />

      {/* FOOTER CONTENT */}
      <div className="container-main py-[70px]">
        {/* TOP FOOTER */}
        <div className="flex items-start justify-between">
          {/* ADDRESS */}
          <div className="text-5 font-regular uppercase leading-[1.6] text-white/80">
            <p>2223 CALLE DE ALCALÁ SALAMANCA</p>
            <p>MADRID, 28028</p>

            <p className="mt-5">(+34)123-456-789</p>
          </div>

          {/* CONTACT */}
          <div className="text-right">
            <p className="text-5 font-regular uppercase text-white/80">
              GET IN TOUCH
            </p>
            <a
              href="mailto:marketing@urbanouse.com"
              className="mt-2 block  text-1 font-medium"
            >
              marketing@urbanouse.com
            </a>
          </div>
        </div>

        {/* NAV + SOCIALS */}
        <div className="mt-[60px] flex items-center justify-between">
          {/* FOOTER NAV */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-4 font-regular uppercase text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-4 font-regular uppercase text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>


        {/* BOTTOM FOOTER */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-5 font-regular uppercase text-white/70">
            @2024 URBANOUSE. ALL RIGHTS RESERVED
          </p>

          <div className="flex items-center gap-6">
            {policyLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-5 font-regular uppercase text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}