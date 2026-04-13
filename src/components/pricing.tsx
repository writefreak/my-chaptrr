import Link from "next/link";
import { Check } from "lucide-react";

const PLANS = [
  {
    plan: "Free",
    price: "₦0",
    period: "forever",
    features: [
      "Access to free chapters",
      "Follow favourite authors",
      "Limited tips (₦500/month)",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    plan: "Monthly",
    price: "₦2,500",
    period: "per month",
    features: [
      "Unlock all chapters",
      "Unlimited tipping",
      "Early access to new titles",
      "Download for offline reading",
    ],
    cta: "Subscribe Monthly",
    highlight: false,
  },
  {
    plan: "Annual",
    price: "₦24,000",
    period: "per year",
    badge: "Best Value",
    features: [
      "Everything in Monthly",
      "2 months free",
      "Priority support",
      "Exclusive author events",
      "Ad-free experience",
    ],
    cta: "Subscribe Annually",
    highlight: true,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 px-6 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
         
          <h2 className="font-sans text-4xl font-bold text-[#111827] mb-3">
            Unlimited reading. Transparent pricing.
          </h2>
          <p className="text-[#9CA3AF]">
            No coin systems. No confusing credits. Just stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map(({ plan, price, period, features, cta, highlight, badge }) => (
            <div
              key={plan}
              className={`relative rounded-2xl p-7 border-2 ${
                highlight
                  ? "border-[#F97316] bg-[#FFF7ED]"
                  : "border-[#F3F4F6] bg-white"
              }`}
            >
              {badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                  {badge}
                </span>
              )}
              <p className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-2">
                {plan}
              </p>
              <p className="font-sans text-4xl font-bold text-[#111827]">
                {price}
              </p>
              <p className="text-xs text-[#9CA3AF] mt-1 mb-6">{period}</p>

              <ul className="space-y-2.5 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <Check size={14} className="text-[#F97316] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/auth/register"
                className={`block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${
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
  );
}