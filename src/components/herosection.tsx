import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const GENRES = [
  "All",
  "Romance",
  "Thriller",
  "Literary Fiction",
  "Mythology",
  "Adventure",
  "Short Stories",
];

export function HeroSection() {
  return (
    <section className="bg-[#111827] pt-16 pb-0 px-6 overflow-hidden md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            

            <h1 className="font-sans text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-5">
              Where African stories
              <br />
              <em className="not-italic text-[#F97316]">find their readers.</em>
            </h1>

            <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-xl">
              Subscribe once, read everything. Thousands of premium African
              novels — romance, thriller, myth, and more. Authors earn in
              dollars.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-10 lg:pb-2">
            {[
              { val: "2,400+", label: "Active readers" },
              { val: "180+", label: "Authors" },
              { val: "₦48M+", label: "Paid out" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif font-bold text-2xl text-white">{val}</p>
                <p className="text-xs text-[#6B7280] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 bg-[#F97316] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#EA6C0A] transition-colors text-sm"
          >
            Start Reading Free
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/author/apply"
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-medium px-6 py-3 rounded-lg hover:bg-white/5 transition-colors text-sm"
          >
            Publish Your Work
          </Link>
        </div>

        {/* Genre filter strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-t border-white/10 pt-4 scrollbar-hide">
          {GENRES.map((g, i) => (
            <button
              key={g}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                i === 0
                  ? "bg-[#F97316] text-white"
                  : "bg-white/8 text-white/60 hover:bg-white/15 hover:text-white"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}