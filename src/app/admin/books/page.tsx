"use client";
import { useState } from "react";
import { Badge } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Search, Check, X, Flag } from "lucide-react";

const BOOKS = [
  { id: 1, title: "The Lagos Affair", author: "Adaeze Okoye", genre: "Romance", chapters: 8, submitted: "Nov 20, 2024", status: "published" },
  { id: 2, title: "Fire on the Third Mainland", author: "Tunde Bakare", genre: "Thriller", chapters: 5, submitted: "Nov 22, 2024", status: "under_review" },
  { id: 3, title: "Red Dust Rising", author: "Emeka Nwosu", genre: "Thriller", chapters: 12, submitted: "Oct 10, 2024", status: "published" },
  { id: 4, title: "The Kano Letters", author: "Amina Usman", genre: "Historical Fiction", chapters: 4, submitted: "Nov 21, 2024", status: "under_review" },
  { id: 5, title: "Something Borrowed, Blue", author: "Chisom Eze", genre: "Romance", chapters: 9, submitted: "Sep 5, 2024", status: "published" },
  { id: 6, title: "Dark Content Example", author: "Anonymous", genre: "Other", chapters: 2, submitted: "Nov 19, 2024", status: "flagged" },
];

const STATUS_MAP = {
  published: { variant: "green" as const, label: "Published" },
  under_review: { variant: "yellow" as const, label: "Under Review" },
  flagged: { variant: "red" as const, label: "Flagged" },
  unpublished: { variant: "gray" as const, label: "Unpublished" },
  draft: { variant: "gray" as const, label: "Draft" },
};

export default function AdminBooksPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = BOOKS.filter((b) => {
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || b.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">Books</h1>
        <p className="text-[#6B7280] text-sm">Review and manage all submitted books.</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 max-w-xs">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Search title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-[#E5E7EB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {["all", "under_review", "published", "flagged", "unpublished"].map((f) => (
            <button
              key={f}
              onClick={() => setStatusFilter(f)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                statusFilter === f ? "bg-[#F97316] text-white" : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
              }`}
            >
              {f.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#F3F4F6] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#FAFAFA] border-b border-[#F3F4F6]">
            <tr>
              {["Book", "Author", "Genre", "Chapters", "Submitted", "Status", "Actions"].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F3F4F6]">
            {filtered.map((book) => {
              const { variant, label } = STATUS_MAP[book.status as keyof typeof STATUS_MAP];
              return (
                <tr key={book.id} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-5 py-3.5 font-medium text-[#111827]">{book.title}</td>
                  <td className="px-5 py-3.5 text-[#6B7280]">{book.author}</td>
                  <td className="px-5 py-3.5 text-[#6B7280]">{book.genre}</td>
                  <td className="px-5 py-3.5 text-[#6B7280]">{book.chapters}</td>
                  <td className="px-5 py-3.5 text-[#9CA3AF] text-xs">{book.submitted}</td>
                  <td className="px-5 py-3.5"><Badge variant={variant}>{label}</Badge></td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1">
                      {book.status === "under_review" && (
                        <>
                          <button className="flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded hover:bg-green-100 transition-colors">
                            <Check size={11} /> Approve
                          </button>
                          <button className="flex items-center gap-1 px-2.5 py-1 bg-red-50 text-red-700 text-xs font-medium rounded hover:bg-red-100 transition-colors">
                            <X size={11} /> Reject
                          </button>
                        </>
                      )}
                      {book.status === "published" && (
                        <button className="flex items-center gap-1 px-2.5 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded hover:bg-yellow-100 transition-colors">
                          <Flag size={11} /> Flag
                        </button>
                      )}
                      {book.status === "flagged" && (
                        <>
                          <button className="flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded hover:bg-green-100 transition-colors">
                            <Check size={11} /> Restore
                          </button>
                          <button className="flex items-center gap-1 px-2.5 py-1 bg-red-50 text-red-700 text-xs font-medium rounded hover:bg-red-100 transition-colors">
                            <X size={11} /> Remove
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
