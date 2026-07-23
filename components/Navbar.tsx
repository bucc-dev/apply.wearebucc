"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Overview", href: "overview" },
  { label: "Benefits", href: "benefits" },
  { label: "Committees", href: "committees" },
  { label: "Application Process", href: "application-process" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const goToSection = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/BUCCLogo.png"
            alt="BUCC Logo"
            width={48}
            height={48}
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => goToSection(link.href)}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

    
        <button
          onClick={() => goToSection("committees")}
          className="bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors text-xs px-3 h-8 flex items-center md:text-sm md:px-5 md:h-10"
        >
          Apply now
        </button>
      </div>
    </nav>
  );
}
