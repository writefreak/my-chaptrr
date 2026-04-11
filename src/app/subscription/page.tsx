"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check, CreditCard, Calendar, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "forever",
    features: ["Access to free chapters only", "Follow up to 10 authors", "₦500/month tip limit"],
    current: false,
  },
  {
    id: "monthly",
    name: "Monthly",
    price: 2500,
    period: "per month",
    features: [
      "Unlock ALL chapters",
      "Unlimited tipping",
      "Early access to new titles",
      "Download for offline reading",
      "Priority support",
    ],
    current: true,
  },
  {
    id: "annual",
    name: "Annual",
    price: 24000,
    period: "per year",
    badge: "Best Value",
    features: [
      "Everything in Monthly",
      "2 months free",
      "Exclusive author events",
      "Ad-free experience",
      "Annual subscribers badge",
    ],
    current: false,
  },
];

const BILLING_HISTORY = [
  { date: "Nov 1, 2024", plan: "Monthly", amount: "₦2,500", status: "Paid", ref: "TXN-8821" },
  { date: "Oct 1, 2024", plan: "Monthly", amount: "₦2,500", status: "Paid", ref: "TXN-7193" },
  { date: "Sep 1, 2024", plan: "Monthly", amount: "₦2,500", status: "Paid", ref: "TXN-6042" },
  { date: "Aug 1, 2024", plan: "Monthly", amount: "₦2,500", status: "Paid", ref: "TXN-5117" },
];

export default function SubscriptionPage() {
  const [cancelConfirm, setCancelConfirm] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">Subscription</h1>
        <p className="text-[#6B7280] text-sm mb-10">Manage your plan and billing details.</p>

        {/* Current plan */}
        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="font-semibold text-[#111827]">Monthly Plan</p>
              <Badge variant="orange">Active</Badge>
            </div>
            <p className="text-sm text-[#6B7280]">₦2,500/month · Renews December 1, 2024</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-[#6B7280] bg-white border border-[#E5E7EB] px-3 py-1.5 rounded-md">
              <CreditCard size={12} />
              **** 4291
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
              <Calendar size={12} />
              Dec 1, 2024
            </div>
          </div>
        </div>

        {/* Plan cards */}
        <h2 className="font-serif text-xl font-bold text-[#111827] mb-5">Change plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {PLANS.map(({ id, name, price, period, features, current, badge }) => (
            <div
              key={id}
              className={`relative rounded-xl p-6 border-2 ${
                current ? "border-[#F97316]" : "border-[#F3F4F6]"
              }`}
            >
              {badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {badge}
                </span>
              )}
              {current && (
                <span className="absolute -top-3 right-4 bg-[#111827] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Current
                </span>
              )}
              <h3 className="font-semibold text-[#111827] mb-1">{name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-serif text-2xl font-bold text-[#111827]">
                  {price === 0 ? "Free" : `₦${price.toLocaleString()}`}
                </span>
              </div>
              <p className="text-xs text-[#9CA3AF] mb-5">{period}</p>
              <ul className="space-y-2.5 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-[#6B7280]">
                    <Check size={12} className="text-[#F97316] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {current ? (
                <button disabled className="w-full py-2 rounded-md text-sm font-semibold bg-[#F3F4F6] text-[#9CA3AF] cursor-not-allowed">
                  Current plan
                </button>
              ) : (
                <Button variant={id === "annual" ? "primary" : "outline"} className="w-full">
                  {price === 0 ? "Downgrade" : "Upgrade"}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Billing history */}
        <h2 className="font-serif text-xl font-bold text-[#111827] mb-5">Billing history</h2>
        <div className="border border-[#F3F4F6] rounded-xl overflow-hidden mb-10">
          <table className="w-full text-sm">
            <thead className="bg-[#FAFAFA] border-b border-[#F3F4F6]">
              <tr>
                {["Date", "Plan", "Amount", "Status", "Reference"].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F4F6]">
              {BILLING_HISTORY.map((row) => (
                <tr key={row.ref} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-5 py-3.5 text-[#111827]">{row.date}</td>
                  <td className="px-5 py-3.5 text-[#6B7280]">{row.plan}</td>
                  <td className="px-5 py-3.5 font-medium text-[#111827]">{row.amount}</td>
                  <td className="px-5 py-3.5">
                    <Badge variant="green">{row.status}</Badge>
                  </td>
                  <td className="px-5 py-3.5 text-[#9CA3AF] font-mono text-xs">{row.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cancel */}
        <div className="border border-red-100 rounded-xl p-6 bg-red-50">
          <div className="flex items-start gap-3">
            <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-[#111827] mb-1">Cancel subscription</h3>
              <p className="text-sm text-[#6B7280] mb-4">
                You&apos;ll lose access to all locked chapters at the end of your current billing period (December 1, 2024). Your reading history and follows will be saved.
              </p>
              {cancelConfirm ? (
                <div className="flex gap-3">
                  <Button variant="danger" size="sm">Yes, cancel my subscription</Button>
                  <Button variant="ghost" size="sm" onClick={() => setCancelConfirm(false)}>Keep subscription</Button>
                </div>
              ) : (
                <button
                  onClick={() => setCancelConfirm(true)}
                  className="text-sm font-semibold text-red-600 hover:text-red-700 underline"
                >
                  Cancel subscription
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
