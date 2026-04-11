"use client";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { StatCard } from "@/components/ui";
import { TrendingUp, Users, BookOpen, DollarSign } from "lucide-react";

const EARNINGS_DATA = [
  { month: "Jun", earnings: 18000 },
  { month: "Jul", earnings: 22500 },
  { month: "Aug", earnings: 19800 },
  { month: "Sep", earnings: 31200 },
  { month: "Oct", earnings: 41500 },
  { month: "Nov", earnings: 48200 },
];

const READS_DATA = [
  { book: "Lagos Affair", reads: 1204 },
  { book: "Red Dust", reads: 423 },
  { book: "Daughters", reads: 88 },
  { book: "Oil & Water", reads: 132 },
];

const FOLLOWER_DATA = [
  { month: "Jun", followers: 120 },
  { month: "Jul", followers: 185 },
  { month: "Aug", followers: 240 },
  { month: "Sep", followers: 318 },
  { month: "Oct", followers: 402 },
  { month: "Nov", followers: 531 },
];

const TOP_CHAPTERS = [
  { title: "Ch.1 — The Return", book: "The Lagos Affair", reads: 1204, avgTime: "11 min" },
  { title: "Prologue: Before the Rain", book: "The Lagos Affair", reads: 1204, avgTime: "4 min" },
  { title: "Ch.2 — Old Debts", book: "The Lagos Affair", reads: 892, avgTime: "14 min" },
  { title: "Ch.1 — The Contact", book: "Red Dust Rising", reads: 423, avgTime: "12 min" },
  { title: "Ch.1 — What Remains", book: "Oil and Water", reads: 132, avgTime: "9 min" },
];

const customTooltipStyle = {
  backgroundColor: "#fff",
  border: "1px solid #F3F4F6",
  borderRadius: "8px",
  fontSize: "12px",
  color: "#111827",
};

export default function AuthorAnalyticsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">Analytics</h1>
        <p className="text-[#6B7280] text-sm">Track your earnings, readership, and growth.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total earned" value="₦284,500" icon={<DollarSign size={18} />} trend={{ value: "vs last month", up: true }} />
        <StatCard label="Total readers" value="1,847" icon={<Users size={18} />} trend={{ value: "+142 this month", up: true }} />
        <StatCard label="Total reads" value="8,240" icon={<BookOpen size={18} />} trend={{ value: "+12%", up: true }} />
        <StatCard label="Followers" value="531" icon={<TrendingUp size={18} />} trend={{ value: "+129 this month", up: true }} />
      </div>

      {/* Charts grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Earnings chart */}
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
          <h2 className="font-semibold text-[#111827] mb-1">Earnings over time</h2>
          <p className="text-xs text-[#9CA3AF] mb-6">Monthly earnings (₦) — last 6 months</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={EARNINGS_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₦${(v / 1000).toFixed(0)}k`} />
              <Tooltip contentStyle={customTooltipStyle} formatter={(v: number) => [`₦${v.toLocaleString()}`, "Earnings"]} />
              <Line type="monotone" dataKey="earnings" stroke="#F97316" strokeWidth={2.5} dot={{ fill: "#F97316", r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Reads per book */}
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
          <h2 className="font-semibold text-[#111827] mb-1">Reads per book</h2>
          <p className="text-xs text-[#9CA3AF] mb-6">Total unique readers by book</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={READS_DATA} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="book" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} width={80} />
              <Tooltip contentStyle={customTooltipStyle} />
              <Bar dataKey="reads" fill="#F97316" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Follower growth */}
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
          <h2 className="font-semibold text-[#111827] mb-1">Follower growth</h2>
          <p className="text-xs text-[#9CA3AF] mb-6">Cumulative followers — last 6 months</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={FOLLOWER_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={customTooltipStyle} />
              <Line type="monotone" dataKey="followers" stroke="#111827" strokeWidth={2.5} dot={{ fill: "#111827", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top chapters */}
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
          <h2 className="font-semibold text-[#111827] mb-5">Top performing chapters</h2>
          <div className="space-y-3">
            {TOP_CHAPTERS.map((ch, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#9CA3AF] w-5 text-center">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#111827] truncate">{ch.title}</p>
                  <p className="text-xs text-[#9CA3AF]">{ch.book}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[#111827]">{ch.reads.toLocaleString()}</p>
                  <p className="text-xs text-[#9CA3AF]">avg {ch.avgTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
