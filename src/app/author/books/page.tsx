"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus, Edit2, Eye, EyeOff, Trash2, MoreHorizontal } from "lucide-react";
import { Badge, Modal } from "@/components/ui";
import { Button } from "@/components/ui/Button";

const BOOKS = [
  { id: 1, title: "The Lagos Affair", genre: "Romance", chapters: 8, readers: 1204, status: "published", updated: "Nov 20, 2024" },
  { id: 2, title: "Red Dust Rising", genre: "Thriller", chapters: 12, readers: 423, status: "published", updated: "Nov 15, 2024" },
  { id: 3, title: "Daughters of the Harmattan", genre: "Literary Fiction", chapters: 3, readers: 0, status: "under_review", updated: "Nov 22, 2024" },
  { id: 4, title: "Oil and Water", genre: "Historical Fiction", chapters: 2, readers: 0, status: "draft", updated: "Nov 10, 2024" },
];

const STATUS_BADGE: Record<string, { variant: "green" | "yellow" | "gray" | "orange"; label: string }> = {
  published: { variant: "green", label: "Published" },
  under_review: { variant: "yellow", label: "Under Review" },
  draft: { variant: "gray", label: "Draft" },
  unpublished: { variant: "gray", label: "Unpublished" },
};

export default function AuthorBooksPage() {
  const [deleteModal, setDeleteModal] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">My Books</h1>
          <p className="text-[#6B7280] text-sm">Manage your published and draft works.</p>
        </div>
        <Link
          href="/author/books/new"
          className="flex items-center gap-2 bg-[#F97316] text-white text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-[#EA6C0A] transition-colors"
        >
          <Plus size={15} />
          New Book
        </Link>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total books", value: "4" },
          { label: "Published", value: "2" },
          { label: "Under review", value: "1" },
          { label: "Total chapters", value: "25" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-lg border border-[#F3F4F6] p-4">
            <p className="text-xs text-[#6B7280] mb-1">{label}</p>
            <p className="text-2xl font-bold text-[#111827]">{value}</p>
          </div>
        ))}
      </div>

      {/* Books table */}
      <div className="bg-white rounded-xl border border-[#F3F4F6] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#FAFAFA] border-b border-[#F3F4F6]">
            <tr>
              {["Title", "Genre", "Chapters", "Readers", "Status", "Last updated", ""].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F3F4F6]">
            {BOOKS.map((book) => {
              const { variant, label } = STATUS_BADGE[book.status];
              return (
                <tr key={book.id} className="hover:bg-[#FAFAFA] transition-colors group">
                  <td className="px-5 py-4">
                    <p className="font-medium text-[#111827]">{book.title}</p>
                  </td>
                  <td className="px-5 py-4 text-[#6B7280]">{book.genre}</td>
                  <td className="px-5 py-4 text-[#6B7280]">{book.chapters}</td>
                  <td className="px-5 py-4 text-[#6B7280]">{book.readers.toLocaleString()}</td>
                  <td className="px-5 py-4">
                    <Badge variant={variant}>{label}</Badge>
                  </td>
                  <td className="px-5 py-4 text-[#9CA3AF] text-xs">{book.updated}</td>
                  <td className="px-5 py-4">
                    <div className="relative flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        href={`/author/books/${book.id}/edit`}
                        className="p-1.5 rounded text-[#6B7280] hover:text-[#F97316] hover:bg-[#FFF7ED] transition-colors"
                        title="Edit"
                      >
                        <Edit2 size={14} />
                      </Link>
                      <button
                        className="p-1.5 rounded text-[#6B7280] hover:text-[#6B7280] hover:bg-[#F3F4F6] transition-colors"
                        title={book.status === "published" ? "Unpublish" : "Publish"}
                      >
                        {book.status === "published" ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                      <button
                        onClick={() => setDeleteModal(book.id)}
                        className="p-1.5 rounded text-[#6B7280] hover:text-red-500 hover:bg-red-50 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Delete confirm modal */}
      <Modal
        open={deleteModal !== null}
        onClose={() => setDeleteModal(null)}
        title="Delete book"
      >
        <p className="text-sm text-[#6B7280] mb-6">
          Are you sure you want to delete this book? This action cannot be undone. All chapters, reader data, and earnings history for this book will be permanently removed.
        </p>
        <div className="flex gap-3">
          <Button variant="danger" className="flex-1">Delete permanently</Button>
          <Button variant="ghost" className="flex-1" onClick={() => setDeleteModal(null)}>Cancel</Button>
        </div>
      </Modal>
    </div>
  );
}
