import Link from "next/link";
import { BookOpen, DollarSign, Users, Check, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="py-20 md:px-14 px-6 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          {/* <p className="text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-3">
            How it works
          </p> */}
          <h2 className="font-sans text-4xl font-bold text-white">
            Simple for readers. Life-changing for authors.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Readers */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-6">
              For Readers
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: "Choose a plan",
                  desc: "Free, Monthly, or Annual. Upgrade or cancel anytime.",
                },
                {
                  icon: BookOpen,
                  title: "Discover books",
                  desc: "Hundreds of titles across every genre you love.",
                },
                {
                  icon: DollarSign,
                  title: "Support authors directly",
                  desc: "Tip your favourites — they keep 100% of every tip.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#F97316]/15 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#F97316]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{title}</p>
                    <p className="text-sm text-[#9CA3AF] mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/explore"
              className="mt-8 inline-flex items-center gap-2 bg-[#F97316] text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#EA6C0A] transition-colors"
            >
              Start Reading <ArrowRight size={14} />
            </Link>
          </div>

          {/* Authors */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-6">
              For Authors
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: Check,
                  title: "Apply with your ID",
                  desc: "Submit your details and a government-issued ID for verification.",
                },
                {
                  icon: BookOpen,
                  title: "Get approved in 48 hrs",
                  desc: "Our team reviews every application personally.",
                },
                {
                  icon: DollarSign,
                  title: "Publish and earn in dollars",
                  desc: "Set free/locked chapters and earn your share of subscription revenue.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{title}</p>
                    <p className="text-sm text-[#9CA3AF] mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/author/apply"
              className="mt-8 inline-flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Apply as an Author <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}