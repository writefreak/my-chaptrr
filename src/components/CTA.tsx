import Link from "next/link";

export function CTABanner() {
  return (
    <section className="px-6 md:px-14 md:pb-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#111827] rounded-2xl px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-sans text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              Your story deserves
              <br />
              <span className="text-[#F97316]">a real audience.</span>
            </h2>
            <p className="text-[#9CA3AF] text-base max-w-md">
              Join thousands of readers discovering African literature — and
              hundreds of authors earning from their craft.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/explore"
              className="bg-[#F97316] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#EA6C0A] transition-colors text-sm text-center"
            >
              Start Reading Free
            </Link>
            <Link
              href="/apply"
              className="border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/5 transition-colors text-sm text-center"
            >
              Publish Your Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}