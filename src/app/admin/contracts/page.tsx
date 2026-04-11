"use client";
import { useState } from "react";
import { Badge, Modal } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Search, Eye, Check, X, FileText } from "lucide-react";

const CONTRACTS = [
  { id: 1, name: "Adaeze Okoye", email: "adaeze@example.com", genre: "Romance", submitted: "Nov 22, 2024", status: "pending" },
  { id: 2, name: "Chidi Obi", email: "chidi@example.com", genre: "Historical Fiction", submitted: "Nov 20, 2024", status: "pending" },
  { id: 3, name: "Emeka Nwosu", email: "emeka@example.com", genre: "Thriller", submitted: "Nov 10, 2024", status: "approved" },
  { id: 4, name: "Fatima Al-Hassan", email: "fatima@example.com", genre: "Literary Fiction", submitted: "Nov 8, 2024", status: "approved" },
  { id: 5, name: "Kofi Mensah", email: "kofi@example.com", genre: "Mystery", submitted: "Nov 5, 2024", status: "approved" },
  { id: 6, name: "Bola Adeyemi", email: "bola@example.com", genre: "Contemporary", submitted: "Oct 30, 2024", status: "rejected" },
  { id: 7, name: "Tunde Bakare", email: "tunde@example.com", genre: "Thriller", submitted: "Nov 21, 2024", status: "pending" },
];

const STATUS_MAP = {
  pending: { variant: "yellow" as const, label: "Pending" },
  approved: { variant: "green" as const, label: "Approved" },
  rejected: { variant: "red" as const, label: "Rejected" },
};

export default function AdminContractsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<(typeof CONTRACTS)[0] | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [approving, setApproving] = useState(false);
  const [rejecting, setRejecting] = useState(false);

  const filtered = CONTRACTS.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || c.status === filter;
    return matchSearch && matchFilter;
  });

  const handleApprove = () => {
    setApproving(true);
    setTimeout(() => { setApproving(false); setSelected(null); }, 1500);
  };

  const handleReject = () => {
    setRejecting(true);
    setTimeout(() => { setRejecting(false); setSelected(null); setRejectReason(""); }, 1500);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">Contracts</h1>
        <p className="text-[#6B7280] text-sm">Review and manage author applications.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 max-w-xs">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Search name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-[#E5E7EB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]"
          />
        </div>
        <div className="flex gap-2">
          {["all", "pending", "approved", "rejected"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all capitalize ${
                filter === f ? "bg-[#F97316] text-white" : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
              }`}
            >
              {f === "all" ? `All (${CONTRACTS.length})` : `${f} (${CONTRACTS.filter(c => c.status === f).length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#F3F4F6] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#FAFAFA] border-b border-[#F3F4F6]">
            <tr>
              {["Author", "Email", "Genre", "Submitted", "Status", ""].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F3F4F6]">
            {filtered.map((contract) => {
              const { variant, label } = STATUS_MAP[contract.status as keyof typeof STATUS_MAP];
              return (
                <tr key={contract.id} className="hover:bg-[#FAFAFA] transition-colors cursor-pointer" onClick={() => setSelected(contract)}>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FFF7ED] flex items-center justify-center text-[#F97316] text-xs font-bold shrink-0">
                        {contract.name[0]}
                      </div>
                      <span className="font-medium text-[#111827]">{contract.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-[#6B7280]">{contract.email}</td>
                  <td className="px-5 py-3.5 text-[#6B7280]">{contract.genre}</td>
                  <td className="px-5 py-3.5 text-[#9CA3AF] text-xs">{contract.submitted}</td>
                  <td className="px-5 py-3.5"><Badge variant={variant}>{label}</Badge></td>
                  <td className="px-5 py-3.5">
                    <button className="p-1.5 text-[#6B7280] hover:text-[#F97316] transition-colors" onClick={(e) => { e.stopPropagation(); setSelected(contract); }}>
                      <Eye size={15} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Contract detail modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)} title="Contract Application" className="max-w-lg">
        {selected && (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-[#FFF7ED] flex items-center justify-center text-[#F97316] font-bold text-xl">
                {selected.name[0]}
              </div>
              <div>
                <p className="font-semibold text-[#111827]">{selected.name}</p>
                <p className="text-sm text-[#9CA3AF]">{selected.email}</p>
              </div>
              <div className="ml-auto">
                <Badge variant={STATUS_MAP[selected.status as keyof typeof STATUS_MAP].variant}>
                  {STATUS_MAP[selected.status as keyof typeof STATUS_MAP].label}
                </Badge>
              </div>
            </div>

            <div className="space-y-2.5 mb-5">
              {[
                { label: "Genre", value: selected.genre },
                { label: "Phone", value: "+234 801 234 5678" },
                { label: "State", value: "Lagos" },
                { label: "Bank", value: "GTBank — 0123456789" },
                { label: "Payout currency", value: "NGN" },
                { label: "Submitted", value: selected.submitted },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm py-1.5 border-b border-[#F3F4F6] last:border-0">
                  <span className="text-[#6B7280]">{label}</span>
                  <span className="font-medium text-[#111827]">{value}</span>
                </div>
              ))}
            </div>

            {/* ID preview */}
            <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg p-4 mb-5 flex items-center gap-3">
              <FileText size={18} className="text-[#9CA3AF]" />
              <div>
                <p className="text-sm font-medium text-[#111827]">International Passport</p>
                <p className="text-xs text-[#9CA3AF]">passport_adaeze.pdf · 2.1 MB</p>
              </div>
              <button className="ml-auto text-xs text-[#F97316] font-semibold hover:underline">View</button>
            </div>

            {selected.status === "pending" && (
              <>
                <textarea
                  placeholder="Rejection reason (required if rejecting)..."
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  className="w-full px-3 py-2.5 border border-[#E5E7EB] rounded-md text-sm mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  rows={3}
                />
                <div className="flex gap-3">
                  <Button className="flex-1" loading={approving} onClick={handleApprove}>
                    <Check size={14} />
                    Approve
                  </Button>
                  <Button variant="ghost" className="flex-1 border border-[#E5E7EB] text-[#6B7280]" loading={rejecting} onClick={handleReject}>
                    <X size={14} />
                    Reject
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
