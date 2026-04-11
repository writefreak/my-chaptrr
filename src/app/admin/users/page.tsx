"use client";
import { useState } from "react";
import { Badge, Modal } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Search, UserX, UserCheck, Edit2 } from "lucide-react";

const USERS = [
  { id: 1, name: "Tunde Adeyemi", email: "tunde@example.com", role: "reader", plan: "monthly", joined: "Nov 1, 2024", status: "active" },
  { id: 2, name: "Ngozi Eze", email: "ngozi@example.com", role: "reader", plan: "annual", joined: "Oct 15, 2024", status: "active" },
  { id: 3, name: "Emeka Nwosu", email: "emeka@example.com", role: "author", plan: "monthly", joined: "Sep 10, 2024", status: "active" },
  { id: 4, name: "Amaka Obi", email: "amaka@example.com", role: "reader", plan: "free", joined: "Nov 20, 2024", status: "active" },
  { id: 5, name: "Kofi Mensah", email: "kofi@example.com", role: "author", plan: "monthly", joined: "Sep 5, 2024", status: "active" },
  { id: 6, name: "Bola Adeyemi", email: "bola@example.com", role: "reader", plan: "free", joined: "Aug 20, 2024", status: "suspended" },
  { id: 7, name: "Fatima Al-Hassan", email: "fatima@example.com", role: "author", plan: "annual", joined: "Nov 8, 2024", status: "active" },
  { id: 8, name: "Chidi Obi", email: "chidi@example.com", role: "reader", plan: "monthly", joined: "Nov 18, 2024", status: "active" },
];

const ROLE_BADGE = {
  reader: { variant: "gray" as const },
  author: { variant: "orange" as const },
  admin: { variant: "blue" as const },
};

const PLAN_BADGE = {
  free: { variant: "gray" as const },
  monthly: { variant: "blue" as const },
  annual: { variant: "green" as const },
};

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [selected, setSelected] = useState<(typeof USERS)[0] | null>(null);

  const filtered = USERS.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === "all" || u.role === roleFilter;
    return matchSearch && matchRole;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">Users</h1>
        <p className="text-[#6B7280] text-sm">Manage all platform users.</p>
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
          {["all", "reader", "author", "admin"].map((f) => (
            <button
              key={f}
              onClick={() => setRoleFilter(f)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all capitalize ${
                roleFilter === f ? "bg-[#111827] text-white" : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#F3F4F6] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#FAFAFA] border-b border-[#F3F4F6]">
            <tr>
              {["User", "Role", "Plan", "Joined", "Status", ""].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F3F4F6]">
            {filtered.map((user) => (
              <tr key={user.id} className="hover:bg-[#FAFAFA] transition-colors group">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center text-xs font-bold text-[#6B7280] shrink-0">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-[#111827]">{user.name}</p>
                      <p className="text-xs text-[#9CA3AF]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <Badge variant={ROLE_BADGE[user.role as keyof typeof ROLE_BADGE].variant}>{user.role}</Badge>
                </td>
                <td className="px-5 py-3.5">
                  <Badge variant={PLAN_BADGE[user.plan as keyof typeof PLAN_BADGE].variant}>{user.plan}</Badge>
                </td>
                <td className="px-5 py-3.5 text-[#9CA3AF] text-xs">{user.joined}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.status === "active" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${user.status === "active" ? "bg-green-500" : "bg-red-500"}`} />
                    {user.status}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => setSelected(user)} className="p-1.5 rounded text-[#6B7280] hover:text-[#F97316] hover:bg-[#FFF7ED] transition-colors">
                      <Edit2 size={13} />
                    </button>
                    <button className={`p-1.5 rounded transition-colors ${
                      user.status === "active"
                        ? "text-[#6B7280] hover:text-red-500 hover:bg-red-50"
                        : "text-[#6B7280] hover:text-green-600 hover:bg-green-50"
                    }`}>
                      {user.status === "active" ? <UserX size={13} /> : <UserCheck size={13} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-5 py-3.5 border-t border-[#F3F4F6] text-xs text-[#9CA3AF]">
          Showing {filtered.length} of {USERS.length} users
        </div>
      </div>

      {/* User detail modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)} title="User details">
        {selected && (
          <div className="space-y-3">
            {[
              { label: "Full name", value: selected.name },
              { label: "Email", value: selected.email },
              { label: "Role", value: selected.role },
              { label: "Plan", value: selected.plan },
              { label: "Status", value: selected.status },
              { label: "Joined", value: selected.joined },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between text-sm py-2 border-b border-[#F3F4F6] last:border-0">
                <span className="text-[#6B7280]">{label}</span>
                <span className="font-medium text-[#111827] capitalize">{value}</span>
              </div>
            ))}
            <div className="pt-2 flex gap-3">
              <Button variant="outline" className="flex-1">Change plan</Button>
              <Button variant="danger" className="flex-1">
                {selected.status === "active" ? "Suspend user" : "Unsuspend user"}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
