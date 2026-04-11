"use client";
import { StatCard } from "@/components/ui";
import { Users, BookOpen, DollarSign, FileText, TrendingUp, Activity } from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const SUB_GROWTH = [
  { date: "Oct 1", subs: 1820 },
  { date: "Oct 8", subs: 1904 },
  { date: "Oct 15", subs: 1980 },
  { date: "Oct 22", subs: 2105 },
  { date: "Oct 29", subs: 2190 },
  { date: "Nov 5", subs: 2280 },
  { date: "Nov 12", subs: 2390 },
  { date: "Nov 19", subs: 2480 },
];

const REVENUE_BY_MONTH = [
  { month: "Jun", revenue: 1420000 },
  { month: "Jul", revenue: 1680000 },
  { month: "Aug", revenue: 1550000 },
  { month: "Sep", revenue: 2100000 },
  { month: "Oct", revenue: 2450000 },
  { month: "Nov", revenue: 2840000 },
];

const RECENT_ACTIVITY = [
  { text: "Adaeze Okoye submitted a new author contract", time: "5 min ago", type: "contract" },
  { text: "New subscriber: tunde.adeyemi@gmail.com (Monthly)", time: "12 min ago", type: "user" },
  { text: '"Fire on the Third Mainland" submitted for review', time: "1 hr ago", type: "book" },
  { text: "Payout of ₦48,200 approved for Emeka Nwosu", time: "2 hr ago", type: "payout" },
  { text: "Kofi Mensah contract approved by Admin Chinwe", time: "3 hr ago", type: "contract" },
  { text: "New subscriber: fatima.al@example.com (Annual)", time: "4 hr ago", type: "user" },
];

const tooltipStyle = {
  backgroundColor: "#fff",
  border: "1px solid #F3F4F6",
  borderRadius: "8px",
  fontSize: "12px",
};

export default function AdminPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">Overview</h1>
        <p className="text-[#6B7280] text-sm">Platform health at a glance.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatCard label="Total users" value="3,284" icon={<Users size={16} />} trend={{ value: "+142 this week", up: true }} />
        <StatCard label="Active subscribers" value="2,481" icon={<TrendingUp size={16} />} trend={{ value: "75.6% of users", up: true }} />
        <StatCard label="Total authors" value="184" icon={<BookOpen size={16} />} trend={{ value: "12 pending", up: true }} />
        <StatCard label="Revenue (Nov)" value="₦2.84M" icon={<DollarSign size={16} />} trend={{ value: "+16% vs Oct", up: true }} />
        <StatCard label="Pending contracts" value="7" icon={<FileText size={16} />} sub="Awaiting review" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
          <h2 className="font-semibold text-[#111827] mb-1">Subscriber growth</h2>
          <p className="text-xs text-[#9CA3AF] mb-6">Last 30 days</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={SUB_GROWTH}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} domain={[1700, 2600]} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="subs" stroke="#F97316" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
          <h2 className="font-semibold text-[#111827] mb-1">Revenue by month</h2>
          <p className="text-xs text-[#9CA3AF] mb-6">Total subscription revenue (₦)</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={REVENUE_BY_MONTH}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₦${(v / 1000000).toFixed(1)}M`} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`₦${(v / 1000000).toFixed(2)}M`]} />
              <Bar dataKey="revenue" fill="#F97316" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity */}
      <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
        <div className="flex items-center gap-2 mb-5">
          <Activity size={16} className="text-[#F97316]" />
          <h2 className="font-semibold text-[#111827]">Recent activity</h2>
        </div>
        <div className="space-y-4">
          {RECENT_ACTIVITY.map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-2.5 border-b border-[#F3F4F6] last:border-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs ${
                item.type === "contract" ? "bg-blue-50 text-blue-600" :
                item.type === "user" ? "bg-green-50 text-green-600" :
                item.type === "book" ? "bg-purple-50 text-purple-600" :
                "bg-[#FFF7ED] text-[#F97316]"
              }`}>
                {item.type === "contract" ? "📋" : item.type === "user" ? "👤" : item.type === "book" ? "📖" : "💸"}
              </div>
              <p className="flex-1 text-sm text-[#374151]">{item.text}</p>
              <span className="text-xs text-[#9CA3AF] whitespace-nowrap">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
