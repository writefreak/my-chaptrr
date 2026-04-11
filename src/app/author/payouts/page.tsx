"use client";
import { useState } from "react";
import { Badge, Modal, StatCard } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { DollarSign, AlertCircle, CheckCircle } from "lucide-react";

const PAYOUTS = [
  { date: "Nov 15, 2024", amount: "₦48,200", currency: "NGN", status: "completed", ref: "TRF-9921" },
  { date: "Oct 15, 2024", amount: "₦41,500", currency: "NGN", status: "completed", ref: "TRF-8812" },
  { date: "Sep 15, 2024", amount: "₦31,200", currency: "NGN", status: "completed", ref: "TRF-7703" },
  { date: "Aug 15, 2024", amount: "₦19,800", currency: "NGN", status: "completed", ref: "TRF-6641" },
  { date: "Jul 15, 2024", amount: "₦22,500", currency: "NGN", status: "failed", ref: "TRF-5530" },
  { date: "Jun 15, 2024", amount: "₦18,000", currency: "NGN", status: "completed", ref: "TRF-4421" },
];

const STATUS_BADGE = {
  completed: { variant: "green" as const, label: "Paid" },
  pending: { variant: "yellow" as const, label: "Pending" },
  processing: { variant: "blue" as const, label: "Processing" },
  failed: { variant: "red" as const, label: "Failed" },
};

export default function AuthorPayoutsPage() {
  const [requestModal, setRequestModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRequest = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">Payouts</h1>
        <p className="text-[#6B7280] text-sm">Your earnings and payout history.</p>
      </div>

      {/* Balance cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <StatCard label="Available balance" value="₦54,800" icon={<DollarSign size={18} />} sub="Ready to withdraw" />
        <StatCard label="Pending earnings" value="₦6,400" sub="Clearing in 3 days" icon={<DollarSign size={18} />} />
        <StatCard label="Total paid out" value="₦181,200" sub="All time" icon={<DollarSign size={18} />} />
      </div>

      {/* Payout info */}
      <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-xl p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-[#111827] mb-1">Request a payout</p>
          <p className="text-sm text-[#6B7280]">
            Minimum: ₦5,000 · Paid to GTBank account ending in 7291 · Usually within 24 hours.
          </p>
        </div>
        <Button onClick={() => setRequestModal(true)} className="shrink-0">
          <DollarSign size={15} />
          Request Payout
        </Button>
      </div>

      {/* Schedule notice */}
      <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
        <AlertCircle size={16} className="text-blue-500 mt-0.5 shrink-0" />
        <p className="text-sm text-blue-700">
          Automatic payouts are processed on the <strong>15th of every month</strong> for the preceding month&apos;s earnings. You can also request early manual payouts at any time above.
        </p>
      </div>

      {/* History table */}
      <h2 className="font-semibold text-[#111827] mb-4">Payout history</h2>
      <div className="bg-white rounded-xl border border-[#F3F4F6] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#FAFAFA] border-b border-[#F3F4F6]">
            <tr>
              {["Date", "Amount", "Currency", "Status", "Reference"].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F3F4F6]">
            {PAYOUTS.map((row) => {
              const { variant, label } = STATUS_BADGE[row.status as keyof typeof STATUS_BADGE];
              return (
                <tr key={row.ref} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-5 py-3.5 text-[#111827]">{row.date}</td>
                  <td className="px-5 py-3.5 font-semibold text-[#111827]">{row.amount}</td>
                  <td className="px-5 py-3.5 text-[#6B7280]">{row.currency}</td>
                  <td className="px-5 py-3.5"><Badge variant={variant}>{label}</Badge></td>
                  <td className="px-5 py-3.5 text-[#9CA3AF] font-mono text-xs">{row.ref}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Request payout modal */}
      <Modal open={requestModal} onClose={() => { setRequestModal(false); setSuccess(false); }} title="Request payout">
        {success ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={28} className="text-green-600" />
            </div>
            <h3 className="font-semibold text-[#111827] mb-2">Payout requested!</h3>
            <p className="text-sm text-[#6B7280] mb-5">
              Your payout of <strong>₦54,800</strong> has been submitted. It will be processed within 24 hours.
            </p>
            <Button onClick={() => { setRequestModal(false); setSuccess(false); }} variant="outline" className="w-full">Done</Button>
          </div>
        ) : (
          <>
            <div className="bg-[#FAFAFA] rounded-lg p-4 mb-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#6B7280]">Available balance</span>
                <span className="font-bold text-[#111827]">₦54,800</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#6B7280]">Payout to</span>
                <span className="font-medium text-[#111827]">GTBank **** 7291</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#6B7280]">Processing time</span>
                <span className="text-[#111827]">Within 24 hours</span>
              </div>
            </div>
            <Button className="w-full mb-3" size="lg" loading={loading} onClick={handleRequest}>
              Confirm Payout — ₦54,800
            </Button>
            <Button variant="ghost" className="w-full" onClick={() => setRequestModal(false)}>Cancel</Button>
          </>
        )}
      </Modal>
    </div>
  );
}
