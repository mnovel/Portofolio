"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Blog", href: "/blog" },
  { label: "CTF Writeups", href: "/ctf-writeups" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-cyber-cyan/10 bg-cyber-dark/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-xl font-semibold text-white">
          &lt;<span className="text-cyber-cyan">Novel</span>/&gt;
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="rounded p-1.5 text-cyber-cyan hover:bg-cyber-cyan/10 md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links */}
        <div
          className={cn(
            "w-full flex-col gap-4 pt-4 md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:pt-0",
            isOpen ? "flex border-t border-cyber-cyan/10 mt-3" : "hidden",
          )}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group relative text-sm font-medium transition-colors hover:text-cyber-cyan",
                  isActive ? "text-cyber-cyan" : "text-cyber-muted",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-0.5 bg-cyber-cyan transition-all duration-300 group-hover:w-full",
                    isActive ? "w-full" : "w-0",
                  )}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
