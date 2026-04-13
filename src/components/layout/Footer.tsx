import Link from "next/link";
import { BookOpen, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#F3F4F6] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* <div className="w-8 h-8  rounded-md flex items-center justify-center">
                <BookOpen size={16} className="text-white" />
              </div> */}
              <span className="font-sans text-[#F97316] font-bold text-xl ">Chaptr</span>
            </Link>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
              Built for African writers. Where Nigerian stories earn what they deserve.
            </p>
            <div className="flex gap-3">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E5E7EB] text-[#6B7280] hover:border-[#F97316] hover:text-[#F97316] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Readers */}
          <div>
            <h4 className="text-sm font-semibold text-[#111827] mb-4">For Readers</h4>
            <ul className="space-y-3">
              {["Explore Books", "Subscription Plans", "Gift a Plan", "How It Works"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#6B7280] hover:text-[#F97316] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Authors */}
          <div>
            <h4 className="text-sm font-semibold text-[#111827] mb-4">For Authors</h4>
            <ul className="space-y-3">
              {["Apply to Publish", "Author Dashboard", "Earnings & Payouts", "Author Guidelines"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#6B7280] hover:text-[#F97316] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-[#111827] mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#6B7280] hover:text-[#F97316] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F3F4F6] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#9CA3AF]">© {new Date().getFullYear()} Chaptr. All rights reserved.</p>
          <p className="text-sm text-[#9CA3AF]">Built for African writers 🖊️</p>
        </div>
      </div>
    </footer>
  );
}
