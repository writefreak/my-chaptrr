import { StatCard } from "@/components/ui";
import { BookOpen, Users, DollarSign, TrendingUp, Plus, BarChart2, Eye } from "lucide-react";
import Link from "next/link";

const RECENT_ACTIVITY = [
  { text: "New reader subscribed via your profile", time: "2 min ago", type: "reader" },
  { text: "₦4,200 tip received from Tunde A.", time: "1 hour ago", type: "tip" },
  { text: '"The Lagos Affair" reached 1,000 readers', time: "3 hours ago", type: "milestone" },
  { text: "Chapter 6 approved and published", time: "Yesterday", type: "book" },
  { text: "New follower: Ngozi Eze", time: "Yesterday", type: "reader" },
  { text: "Payout of ₦48,000 processed", time: "Nov 15", type: "payout" },
];

const TYPE_COLORS: Record<string, string> = {
  reader: "bg-blue-100 text-blue-600",
  tip: "bg-green-100 text-green-600",
  milestone: "bg-[#FFF7ED] text-[#F97316]",
  book: "bg-purple-100 text-purple-600",
  payout: "bg-emerald-100 text-emerald-600",
};

export default function AuthorDashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">Good morning, Adaeze</h1>
          <p className="text-[#6B7280] text-sm">Here&apos;s how your work is performing.</p>
        </div>
        <Link
          href="/author/books/new"
          className="flex items-center gap-2 bg-[#F97316] text-white text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-[#EA6C0A] transition-colors"
        >
          <Plus size={15} />
          New Book
        </Link>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard
          label="Total earned"
          value="₦284,500"
          sub="All time"
          icon={<DollarSign size={18} />}
          trend={{ value: "12% vs last month", up: true }}
        />
        <StatCard
          label="This month"
          value="₦48,200"
          sub="Nov 2024"
          icon={<TrendingUp size={18} />}
          trend={{ value: "₦6,800 pending", up: true }}
        />
        <StatCard
          label="Total readers"
          value="1,847"
          sub="Across all books"
          icon={<Users size={18} />}
          trend={{ value: "+142 this month", up: true }}
        />
        <StatCard
          label="Published books"
          value="4"
          sub="2 under review"
          icon={<BookOpen size={18} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* Quick actions */}
        <div>
          <h2 className="font-semibold text-[#111827] mb-4">Quick actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { href: "/author/books/new", icon: Plus, label: "New Book", desc: "Start a new story" },
              { href: "/author/analytics", icon: BarChart2, label: "View Analytics", desc: "Reads, earnings & growth" },
              { href: "/author/profile", icon: Eye, label: "Edit Profile", desc: "Public author page" },
            ].map(({ href, icon: Icon, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col gap-3 p-5 bg-white rounded-xl border border-[#F3F4F6] hover:border-[#F97316] hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 bg-[#FFF7ED] rounded-lg flex items-center justify-center group-hover:bg-[#F97316] transition-colors">
                  <Icon size={18} className="text-[#F97316] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">{label}</p>
                  <p className="text-xs text-[#9CA3AF]">{desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Books table */}
          <h2 className="font-semibold text-[#111827] mb-4">Your books</h2>
          <div className="bg-white rounded-xl border border-[#F3F4F6] overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#FAFAFA] border-b border-[#F3F4F6]">
                <tr>
                  {["Title", "Readers", "Earnings", "Status"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6]">
                {[
                  { title: "The Lagos Affair", readers: "1,204", earnings: "₦192,000", status: "published" },
                  { title: "Red Dust Rising", readers: "423", earnings: "₦64,500", status: "published" },
                  { title: "Daughters of the Harmattan", readers: "—", earnings: "—", status: "under_review" },
                  { title: "Oil and Water", readers: "220", earnings: "₦28,000", status: "draft" },
                ].map((row) => (
                  <tr key={row.title} className="hover:bg-[#FAFAFA] transition-colors">
                    <td className="px-5 py-3.5">
                      <Link href="/author/books" className="font-medium text-[#111827] hover:text-[#F97316] transition-colors">
                        {row.title}
                      </Link>
                    </td>
                    <td className="px-5 py-3.5 text-[#6B7280]">{row.readers}</td>
                    <td className="px-5 py-3.5 font-medium text-[#111827]">{row.earnings}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        row.status === "published" ? "bg-green-50 text-green-700" :
                        row.status === "under_review" ? "bg-yellow-50 text-yellow-700" :
                        "bg-[#F3F4F6] text-[#6B7280]"
                      }`}>
                        {row.status.replace("_", " ")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity feed */}
        <div>
          <h2 className="font-semibold text-[#111827] mb-4">Recent activity</h2>
          <div className="bg-white rounded-xl border border-[#F3F4F6] p-5 space-y-4">
            {RECENT_ACTIVITY.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${TYPE_COLORS[item.type]}`}>
                  {item.type === "reader" ? "👤" : item.type === "tip" ? "💸" : item.type === "milestone" ? "🎯" : item.type === "book" ? "📖" : "💰"}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#374151] leading-snug">{item.text}</p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
