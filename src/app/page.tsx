import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookCard } from "@/components/reader/BookCard";
import { MOCK_BOOKS } from "@/lib/utils";
import { BookOpen, DollarSign, Users, Star, Check, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden px-6">
        {/* Background accents */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#F97316]/5 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-[#FED7AA]/30 rounded-full blur-3xl -z-0" />
        {/* Geometric shapes */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-[#F97316] rounded-full opacity-40" />
        <div className="absolute top-64 right-64 w-2 h-2 bg-[#F97316] rounded-full opacity-30" />
        <div className="absolute bottom-32 right-48 w-6 h-6 border-2 border-[#F97316]/30 rounded-full" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFF7ED] border border-[#FED7AA] rounded-full px-4 py-1.5 mb-8">
                <Zap size={12} className="text-[#F97316]" />
                <span className="text-xs font-medium text-[#EA6C0A]">Now live — Dollar payouts for Nigerian authors</span>
              </div>

              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-[#111827] leading-[1.1] mb-6">
                Where Nigerian stories<br />
                <em className="not-italic text-[#F97316]">earn what they deserve</em>
              </h1>

              <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-lg">
                Readers subscribe to access premium African literature. Authors earn in dollars, own their audience, and get paid on time — every time.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-2 bg-[#F97316] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#EA6C0A] transition-colors text-sm"
                >
                  Start Reading
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/author/apply"
                  className="inline-flex items-center gap-2 border-2 border-[#F97316] text-[#F97316] font-semibold px-7 py-3.5 rounded-md hover:bg-[#FFF7ED] transition-colors text-sm"
                >
                  Publish Your Work
                </Link>
              </div>

              {/* Social proof numbers */}
              <div className="flex items-center gap-8">
                {[
                  { val: "2,400+", label: "Active readers" },
                  { val: "180+", label: "Published authors" },
                  { val: "₦48M+", label: "Paid to writers" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <p className="font-serif font-bold text-xl text-[#111827]">{val}</p>
                    <p className="text-xs text-[#9CA3AF]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Book mosaic */}
            <div className="hidden lg:block relative h-[520px]">
              {[
                { top: "0", left: "60px", rotate: "-6deg", color: "from-orange-100 to-amber-200", w: "160px", h: "220px" },
                { top: "40px", left: "240px", rotate: "4deg", color: "from-rose-100 to-pink-200", w: "180px", h: "240px" },
                { top: "200px", left: "40px", rotate: "3deg", color: "from-teal-100 to-emerald-200", w: "170px", h: "230px" },
                { top: "180px", left: "250px", rotate: "-4deg", color: "from-indigo-100 to-purple-200", w: "155px", h: "210px" },
                { top: "60px", left: "440px", rotate: "6deg", color: "from-yellow-100 to-orange-200", w: "150px", h: "200px" },
              ].map((book, i) => (
                <div
                  key={i}
                  className={`absolute bg-gradient-to-br ${book.color} rounded-lg shadow-md border border-white/50`}
                  style={{ top: book.top, left: book.left, transform: `rotate(${book.rotate})`, width: book.w, height: book.h }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent rounded-b-lg" />
                </div>
              ))}
              {/* Floating badge */}
              <div className="absolute bottom-8 right-4 bg-white rounded-xl shadow-lg p-4 border border-[#F3F4F6]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF]">Payout sent</p>
                    <p className="text-sm font-semibold text-[#111827]">$240 to Adaeze</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — READERS */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#F97316] mb-3 uppercase tracking-wide">For Readers</p>
            <h2 className="font-serif text-4xl font-bold text-[#111827]">Read great African fiction, affordably</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, step: "01", title: "Choose a plan", desc: "Pick Free, Monthly, or Annual. Upgrade or cancel anytime with no friction." },
              { icon: BookOpen, step: "02", title: "Discover books", desc: "Explore hundreds of titles across romance, thriller, literary fiction, and more." },
              { icon: Users, step: "03", title: "Support authors directly", desc: "Tip your favourite writers directly through the platform. They receive 100% of tips." },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="bg-white rounded-xl p-8 border border-[#F3F4F6]">
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-xs font-bold text-[#F97316] bg-[#FFF7ED] px-2 py-1 rounded-md">{step}</span>
                </div>
                <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#F97316]" />
                </div>
                <h3 className="font-semibold text-lg text-[#111827] mb-2">{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — AUTHORS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#F97316] mb-3 uppercase tracking-wide">For Authors</p>
            <h2 className="font-serif text-4xl font-bold text-[#111827]">Publish. Earn. Own your audience.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, step: "01", title: "Apply with your ID", desc: "Submit your details and a government-issued ID. We verify all authors personally." },
              { icon: Check, step: "02", title: "Get approved", desc: "Our team reviews your application within 48 hours. On approval, your account activates." },
              { icon: TrendingUp, step: "03", title: "Publish and earn", desc: "Upload chapters, set free/locked access, and earn your share of subscription revenue in dollars." },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="relative">
                <div className="bg-white rounded-xl p-8 border border-[#F3F4F6] h-full">
                  <span className="text-xs font-bold text-[#F97316] bg-[#FFF7ED] px-2 py-1 rounded-md mb-5 inline-block">{step}</span>
                  <div className="w-12 h-12 bg-[#111827] rounded-xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#111827] mb-2">{title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/author/apply"
              className="inline-flex items-center gap-2 bg-[#111827] text-white font-semibold px-8 py-3.5 rounded-md hover:bg-black transition-colors text-sm"
            >
              Apply as an Author
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-medium text-[#F97316] mb-2 uppercase tracking-wide">Featured</p>
              <h2 className="font-serif text-4xl font-bold text-[#111827]">Stories worth staying up for</h2>
            </div>
            <Link href="/explore" className="text-sm font-semibold text-[#F97316] hover:underline flex items-center gap-1">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {MOCK_BOOKS.map((book) => (
              <BookCard key={book.slug} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* PLANS PREVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-[#111827] mb-4">Unlimited reading, transparent pricing</h2>
            <p className="text-[#6B7280]">No coin systems. No confusing credits. Just stories.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                plan: "Free",
                price: "₦0",
                period: "forever",
                features: ["Access to free chapters", "Follow your favourite authors", "Limited tips (₦500/month)"],
                cta: "Get Started",
                highlight: false,
              },
              {
                plan: "Monthly",
                price: "₦2,500",
                period: "per month",
                features: ["Unlock all chapters", "Unlimited tipping", "Early access to new titles", "Download for offline reading"],
                cta: "Subscribe Monthly",
                highlight: false,
              },
              {
                plan: "Annual",
                price: "₦24,000",
                period: "per year",
                badge: "Best Value",
                features: ["Everything in Monthly", "2 months free", "Priority support", "Exclusive author events", "Ad-free experience"],
                cta: "Subscribe Annually",
                highlight: true,
              },
            ].map(({ plan, price, period, features, cta, highlight, badge }) => (
              <div
                key={plan}
                className={`relative rounded-xl p-8 border-2 ${
                  highlight ? "border-[#F97316] bg-[#FFF7ED]" : "border-[#F3F4F6] bg-white"
                }`}
              >
                {badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {badge}
                  </span>
                )}
                <h3 className="font-semibold text-[#111827] mb-1">{plan}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-serif text-3xl font-bold text-[#111827]">{price}</span>
                </div>
                <p className="text-xs text-[#9CA3AF] mb-6">{period}</p>
                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <Check size={14} className="text-[#F97316] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/auth/register"
                  className={`block w-full text-center py-2.5 rounded-md text-sm font-semibold transition-colors ${
                    highlight
                      ? "bg-[#F97316] text-white hover:bg-[#EA6C0A]"
                      : "border-2 border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white"
                  }`}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-[#111827]">Authors love earning here</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Adaeze Okoye", genre: "Romance", quote: "I received my first dollar payout within 3 weeks of publishing. Chaptr actually pays — and on time." },
              { name: "Emeka Nwosu", genre: "Thriller", quote: "I own my readers here. When I move, they move with me. That kind of ownership is rare on any platform." },
              { name: "Fatima Al-Hassan", genre: "Literary Fiction", quote: "The revenue share is transparent, the UI is beautiful, and the readers are serious about literature. Perfect fit." },
            ].map(({ name, genre, quote }) => (
              <div key={name} className="bg-white rounded-xl p-8 border border-[#F3F4F6]">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#F97316] fill-[#F97316]" />
                  ))}
                </div>
                <p className="text-sm text-[#374151] leading-relaxed mb-6 italic font-serif">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center text-[#F97316] font-bold text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">{name}</p>
                    <p className="text-xs text-[#9CA3AF]">{genre} author</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-5xl font-bold text-[#111827] mb-6">
            Your story deserves<br />a real audience.
          </h2>
          <p className="text-[#6B7280] mb-10 text-lg">
            Join thousands of readers discovering African literature — and hundreds of authors earning from their craft.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/explore" className="bg-[#F97316] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#EA6C0A] transition-colors">
              Start Reading Free
            </Link>
            <Link href="/author/apply" className="border-2 border-[#111827] text-[#111827] font-semibold px-8 py-4 rounded-md hover:bg-[#111827] hover:text-white transition-colors">
              Publish Your Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
