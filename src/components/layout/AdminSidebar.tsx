"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BookOpen, LayoutDashboard, FileText, Users, PenTool,
  BookMarked, BarChart2, Wallet, Shield, LogOut, ChevronRight,
} from "lucide-react";

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Overview", exact: true },
  { href: "/admin/contracts", icon: FileText, label: "Contracts" },
  { href: "/admin/users", icon: Users, label: "Users" },
  { href: "/admin/authors", icon: PenTool, label: "Authors" },
  { href: "/admin/books", icon: BookMarked, label: "Books" },
  { href: "/admin/analytics", icon: BarChart2, label: "Analytics" },
  { href: "/admin/payouts", icon: Wallet, label: "Payouts" },
  { href: "/admin/admins", icon: Shield, label: "Admin Accounts" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-[#F3F4F6] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#F3F4F6]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#F97316] rounded-md flex items-center justify-center">
            <BookOpen size={16} className="text-white" />
          </div>
          <span className="font-serif font-bold text-lg text-[#111827]">Chaptr</span>
        </Link>
        <p className="text-xs text-[#9CA3AF] mt-1 ml-10">Admin Panel</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(({ href, icon: Icon, label, exact }) => {
          const active = exact ? pathname === href : pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all",
                active
                  ? "bg-[#FFF7ED] text-[#F97316]"
                  : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
              )}
            >
              <Icon size={16} />
              {label}
              {active && <ChevronRight size={14} className="ml-auto" />}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="p-4 border-t border-[#F3F4F6]">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-semibold text-sm">
            SA
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#111827] truncate">Super Admin</p>
            <p className="text-xs text-[#9CA3AF] truncate">admin@chaptr.com</p>
          </div>
        </div>
        <button className="mt-2 flex items-center gap-2 w-full px-3 py-2 text-sm text-[#6B7280] hover:text-red-500 hover:bg-red-50 rounded-md transition-colors">
          <LogOut size={15} />
          Sign out
        </button>
      </div>
    </aside>
  );
}
