"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const PLANS = [
  { id: "free", name: "Free", price: "₦0", period: "forever", features: ["Free chapters", "Follow authors"] },
  { id: "monthly", name: "Monthly", price: "₦2,500", period: "/month", features: ["All chapters unlocked", "Unlimited tipping"] },
  { id: "annual", name: "Annual", price: "₦24,000", period: "/year", badge: "Best Value", features: ["Everything + 2 months free", "Exclusive events"] },
];

export default function RegisterPage() {
  const [plan, setPlan] = useState("monthly");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#111827] flex-col justify-between p-12">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#F97316] rounded-md flex items-center justify-center">
            <BookOpen size={16} className="text-white" />
          </div>
          <span className="font-serif font-bold text-xl text-white">Chaptr</span>
        </Link>

        <div>
          <p className="font-serif text-4xl font-bold text-white leading-tight mb-4">
            Hundreds of African stories,<br />
            <span className="text-[#F97316]">one subscription.</span>
          </p>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">
            Join thousands of readers discovering new voices from Nigeria and across the continent.
          </p>
        </div>

        <div className="space-y-3">
          {["No coin systems or confusing credits", "Cancel anytime, no questions", "Dollar payouts go directly to authors"].map((f) => (
            <div key={f} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#F97316]/20 flex items-center justify-center shrink-0">
                <Check size={11} className="text-[#F97316]" />
              </div>
              <span className="text-sm text-[#D1D5DB]">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-16">
        <div className="max-w-md w-full mx-auto">
          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="w-8 h-8 bg-[#F97316] rounded-md flex items-center justify-center">
              <BookOpen size={16} className="text-white" />
            </div>
            <span className="font-serif font-bold text-xl text-[#111827]">Chaptr</span>
          </Link>

          <h1 className="font-serif text-3xl font-bold text-[#111827] mb-2">Create your account</h1>
          <p className="text-[#6B7280] text-sm mb-8">Start reading in minutes.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input label="Full name" type="text" placeholder="Adaeze Okoye" required />
            <Input label="Email address" type="email" placeholder="you@example.com" required />
            <Input label="Password" type="password" placeholder="Min. 8 characters" required />

            {/* Plan selection */}
            <div>
              <p className="text-sm font-medium text-[#111827] mb-3">Choose a plan</p>
              <div className="space-y-2">
                {PLANS.map(({ id, name, price, period, features, badge }) => (
                  <label
                    key={id}
                    className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      plan === id ? "border-[#F97316] bg-[#FFF7ED]" : "border-[#F3F4F6] hover:border-[#E5E7EB]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={id}
                      checked={plan === id}
                      onChange={() => setPlan(id)}
                      className="mt-0.5 accent-[#F97316]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#111827]">{name}</span>
                        {badge && (
                          <span className="text-xs bg-[#F97316] text-white px-2 py-0.5 rounded-full font-medium">{badge}</span>
                        )}
                      </div>
                      <span className="text-sm font-bold text-[#F97316]">{price}</span>
                      <span className="text-xs text-[#9CA3AF]"> {period}</span>
                      <p className="text-xs text-[#6B7280] mt-0.5">{features.join(" · ")}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" loading={loading}>
              Create Account
            </Button>
          </form>

          <p className="text-sm text-center text-[#6B7280] mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#F97316] font-medium hover:underline">
              Sign in
            </Link>
          </p>

          <p className="text-xs text-center text-[#9CA3AF] mt-4">
            By creating an account, you agree to our{" "}
            <Link href="#" className="underline">Terms</Link> and{" "}
            <Link href="#" className="underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
