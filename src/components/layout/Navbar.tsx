"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookOpen, Search, Bell, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/explore", label: "Explore" },
    { href: "/explore?genre=romance", label: "Romance" },
    { href: "/explore?genre=thriller", label: "Thriller" },
    // { href: "/ranking", label: "Rankings" },
    { href: "/author/apply", label: "Write" },
    { href: "/subscription", label: "Plans" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#F3F4F6] backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          {/* <div className="w-8 h-8 rounded-md flex items-center justify-center">
            <BookOpen size={16} className="text-white" />
          </div> */}
          <span className="font-sans font-bold text-xl text-[#F97316]">CHAPTR</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors whitespace-nowrap",
                pathname === link.href
                  ? "text-[#F97316]"
                  : "text-[#6B7280] hover:text-[#111827]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button className="hidden md:flex w-9 h-9 items-center justify-center rounded-full text-[#6B7280] hover:bg-[#F3F4F6] transition-colors">
            <Search size={18} />
          </button>
          <button className="hidden md:flex w-9 h-9 items-center justify-center rounded-full text-[#6B7280] hover:bg-[#F3F4F6] transition-colors">
            <Bell size={18} />
          </button>
          <Link
            href="/auth/login"
            className="hidden md:block text-sm font-medium text-[#6B7280] hover:text-[#111827] transition-colors px-2"
          >
            Sign in
          </Link>
          <Link
            href="/auth/register"
            className="bg-[#F97316] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#EA6C0A] transition-colors"
          >
            Get Started
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-[#6B7280] hover:bg-[#F3F4F6]"
          >
            <ChevronDown
              size={18}
              className={cn("transition-transform", menuOpen && "rotate-180")}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#F3F4F6] py-4 px-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium",
                pathname === link.href ? "text-[#F97316]" : "text-[#6B7280]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 border-t border-[#F3F4F6]">
            <Link
              href="/auth/login"
              className="flex-1 text-center border border-[#E5E7EB] text-sm font-medium py-2 rounded-md"
            >
              Sign in
            </Link>
            <Link
              href="/auth/register"
              className="flex-1 text-center bg-[#F97316] text-white text-sm font-medium py-2 rounded-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}