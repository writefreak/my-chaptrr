"use client";
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Heart, CheckCircle, ArrowLeft } from "lucide-react";

const PRESET_AMOUNTS = [500, 1000, 2000, 5000];

export default function TipPage({ params }: { params: { authorSlug: string } }) {
  const [selected, setSelected] = useState<number | null>(1000);
  const [custom, setCustom] = useState("");
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);

  const authorName = params.authorSlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const amount = custom ? parseInt(custom) : selected;

  const handlePay = () => {
    if (!amount || amount < 100) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 2000);
  };

  if (step === "success") {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="max-w-md mx-auto px-6 py-24 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-green-600" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#111827] mb-3">Tip sent!</h1>
          <p className="text-[#6B7280] mb-2">
            You tipped <span className="font-semibold text-[#111827]">{authorName}</span> —
          </p>
          <p className="font-serif text-4xl font-bold text-[#F97316] mb-8">
            ₦{amount?.toLocaleString()}
          </p>
          <p className="text-sm text-[#9CA3AF] mb-8">
            100% of your tip goes directly to the author. Thank you for supporting African literature.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/explore">
              <Button variant="outline">Explore more books</Button>
            </Link>
            <Button onClick={() => setStep("form")}>
              <Heart size={14} />
              Tip again
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-md mx-auto px-6 py-16">
        <Link href="/explore" className="flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#111827] transition-colors mb-10">
          <ArrowLeft size={15} />
          Back
        </Link>

        {/* Author info */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-[#FFF7ED] flex items-center justify-center text-[#F97316] font-bold text-3xl mx-auto mb-4">
            {authorName[0]}
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#111827] mb-1">Tip {authorName}</h1>
          <p className="text-sm text-[#6B7280]">Romance author · Lagos, Nigeria</p>
        </div>

        {/* Amount picker */}
        <div className="bg-[#FAFAFA] rounded-xl p-6 mb-6">
          <p className="text-sm font-semibold text-[#111827] mb-4">Choose an amount</p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {PRESET_AMOUNTS.map((amt) => (
              <button
                key={amt}
                onClick={() => { setSelected(amt); setCustom(""); }}
                className={`py-3 rounded-lg text-sm font-bold border-2 transition-all ${
                  selected === amt && !custom
                    ? "bg-[#F97316] text-white border-[#F97316]"
                    : "bg-white border-[#E5E7EB] text-[#111827] hover:border-[#F97316]"
                }`}
              >
                ₦{amt.toLocaleString()}
              </button>
            ))}
          </div>

          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF] font-medium">₦</span>
            <input
              type="number"
              placeholder="Custom amount"
              value={custom}
              onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
              min={100}
              className="w-full pl-8 pr-4 py-3 border-2 border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all"
            />
          </div>

          {amount && amount < 100 && (
            <p className="text-xs text-red-500 mt-2">Minimum tip is ₦100</p>
          )}
        </div>

        {/* Summary */}
        {amount && amount >= 100 && (
          <div className="flex items-center justify-between bg-[#FFF7ED] border border-[#FED7AA] rounded-lg px-4 py-3 mb-6">
            <span className="text-sm text-[#6B7280]">You&apos;re sending</span>
            <span className="font-serif text-xl font-bold text-[#F97316]">₦{amount.toLocaleString()}</span>
          </div>
        )}

        <Button
          className="w-full"
          size="lg"
          loading={loading}
          disabled={!amount || amount < 100}
          onClick={handlePay}
        >
          <Heart size={16} />
          Send Tip via Flutterwave
        </Button>

        <p className="text-xs text-center text-[#9CA3AF] mt-4">
          Secure payment via Flutterwave. 100% goes to {authorName}.
        </p>
      </div>

      <Footer />
    </div>
  );
}
