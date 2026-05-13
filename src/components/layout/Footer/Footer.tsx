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
      <div className="container-main py-14 lg:py-[70px]">
        {/* TOP FOOTER */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* ADDRESS */}
          <div className="text-5 font-regular uppercase text-white/80">
            <p>2223 CALLE DE ALCALÁ SALAMANCA</p>
            <p>MADRID, 28028</p>

            <p className="mt-5">(+34)123-456-789</p>
          </div>

          {/* CONTACT */}
          <div className="lg:text-right">
            <p className="text-5 font-regular uppercase text-white/80">
              GET IN TOUCH
            </p>

            <a
              href="mailto:marketing@urbanouse.com"
              className="mt-2 block wrap-break-words text-2 leading-none font-medium sm:text-[40px] lg:text-1"
            >
              marketing@urbanouse.com
            </a>
          </div>
        </div>

        {/* NAV + SOCIALS */}
        <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-8 lg:mt-[60px] lg:flex lg:items-start lg:justify-between">
          {/* FOOTER NAV */}
          <nav className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">
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
          <div className="flex flex-col gap-5 text-right lg:flex-row lg:items-center lg:gap-6 lg:text-left">
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

        {/* POLICIES */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-end">
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

        {/* COPYRIGHT */}
        <div className="mt-10 text-center lg:mt-8 lg:text-left">
          <p className="text-5 font-regular uppercase text-white/70">
            @2024 URBANOUSE. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}