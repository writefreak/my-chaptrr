"use client";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";
import { StatCard } from "@/components/ui";
import { Users, TrendingUp, BookOpen, Clock } from "lucide-react";

const DAU = [
  { day: "Mon", dau: 820 }, { day: "Tue", dau: 940 }, { day: "Wed", dau: 890 },
  { day: "Thu", dau: 1020 }, { day: "Fri", dau: 1180 }, { day: "Sat", dau: 1340 }, { day: "Sun", dau: 1120 },
];

const REVENUE_BREAKDOWN = [
  { name: "Annual", value: 1480000, color: "#F97316" },
  { name: "Monthly", value: 1120000, color: "#FED7AA" },
  { name: "Tips", value: 240000, color: "#111827" },
];

const TOP_AUTHORS = [
  { name: "Adaeze Okoye", genre: "Romance", earnings: "₦284,500", readers: 1847 },
  { name: "Emeka Nwosu", genre: "Thriller", earnings: "₦198,200", readers: 1203 },
  { name: "Fatima Al-Hassan", genre: "Literary Fiction", earnings: "₦142,800", readers: 890 },
  { name: "Kofi Mensah", genre: "Mystery", earnings: "₦98,400", readers: 612 },
  { name: "Ngozi Eze", genre: "Fantasy", earnings: "₦76,100", readers: 441 },
];

const TOP_GENRES = [
  { genre: "Romance", reads: 4820 },
  { genre: "Thriller", reads: 3640 },
  { genre: "Literary Fiction", reads: 2180 },
  { genre: "Mystery", reads: 1820 },
  { genre: "Fantasy", reads: 1440 },
  { genre: "Historical", reads: 980 },
];

const tooltipStyle = { backgroundColor: "#fff", border: "1px solid #F3F4F6", borderRadius: "8px", fontSize: "12px" };

export default function AdminAnalyticsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">Analytics</h1>
        <p className="text-[#6B7280] text-sm">Deep platform metrics and insights.</p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="DAU (today)" value="1,340" icon={<Users size={16} />} trend={{ value: "+8% vs yesterday", up: true }} />
        <StatCard label="MAU" value="12,840" icon={<TrendingUp size={16} />} trend={{ value: "+22% vs last month", up: true }} />
        <StatCard label="Avg session" value="18 min" icon={<Clock size={16} />} trend={{ value: "+2 min vs avg", up: true }} />
        <StatCard label="Retention (30d)" value="68%" icon={<BookOpen size={16} />} trend={{ value: "+4pp vs last month", up: true }} />
      </div>

      {/* Charts grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* DAU */}
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
          <h2 className="font-semibold text-[#111827] mb-1">Daily active users</h2>
          <p className="text-xs text-[#9CA3AF] mb-6">This week</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={DAU}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="dau" fill="#F97316" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue breakdown pie */}
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
          <h2 className="font-semibold text-[#111827] mb-1">Revenue breakdown</h2>
          <p className="text-xs text-[#9CA3AF] mb-6">November 2024</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={REVENUE_BREAKDOWN} cx="40%" cy="50%" outerRadius={80} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false} fontSize={11}>
                {REVENUE_BREAKDOWN.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`₦${(v / 1000000).toFixed(2)}M`]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top genres */}
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
          <h2 className="font-semibold text-[#111827] mb-1">Most read genres</h2>
          <p className="text-xs text-[#9CA3AF] mb-6">Total chapter reads by genre</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={TOP_GENRES} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="genre" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} width={90} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="reads" fill="#111827" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top authors */}
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
          <h2 className="font-semibold text-[#111827] mb-5">Top authors by earnings</h2>
          <div className="space-y-4">
            {TOP_AUTHORS.map((a, i) => (
              <div key={a.name} className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#9CA3AF] w-5">{i + 1}</span>
                <div className="w-8 h-8 rounded-full bg-[#FFF7ED] flex items-center justify-center text-[#F97316] text-xs font-bold shrink-0">
                  {a.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#111827] truncate">{a.name}</p>
                  <p className="text-xs text-[#9CA3AF]">{a.genre} · {a.readers.toLocaleString()} readers</p>
                </div>
                <p className="text-sm font-semibold text-[#F97316]">{a.earnings}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
