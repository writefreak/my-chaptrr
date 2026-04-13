"use client";
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MOCK_BOOKS, GENRES } from "@/lib/utils";
import { Search } from "lucide-react";

const ALL_BOOKS = [
  ...MOCK_BOOKS,
  { slug: "the-quiet-river", title: "The Quiet River", author: "Bola Adeyemi", genre: "Literary Fiction", locked: false, description: "A meditation on grief, water, and what remains." },
  { slug: "fire-on-the-third-mainland", title: "Fire on the Third Mainland", author: "Tunde Bakare", genre: "Thriller", locked: true, description: "One night on Lagos's famous bridge changes everything." },
  { slug: "the-kano-letters", title: "The Kano Letters", author: "Amina Usman", genre: "Historical Fiction", locked: true, description: "Love letters across colonial-era Northern Nigeria." },
  { slug: "something-borrowed-blue", title: "Something Borrowed, Blue", author: "Chisom Eze", genre: "Romance", locked: false, description: "Two Lagos weddings, one caterer, and a disaster waiting to happen." },
  { slug: "children-of-the-baobab", title: "Children of the Baobab", author: "Sule Ibrahim", genre: "Fantasy", locked: true, description: "A boy discovers his grandmother is a forest spirit." },
  { slug: "the-last-broadcast", title: "The Last Broadcast", author: "Ifeanyi Ogu", genre: "Science Fiction", locked: true, description: "In 2047 Lagos, a pirate radio station is the last free voice." },
];

const COVER_COLORS: Record<string, string> = {
  Romance: "linear-gradient(135deg, #D85A30, #9B3515)",
  Thriller: "linear-gradient(135deg, #185FA5, #0A3D74)",
  "Literary Fiction": "linear-gradient(135deg, #3B6D11, #1E3D07)",
  Fantasy: "linear-gradient(135deg, #534AB7, #2E276E)",
  "Historical Fiction": "linear-gradient(135deg, #BA7517, #7A4A07)",
  "Science Fiction": "linear-gradient(135deg, #993556, #5C1A33)",
  Adventure: "linear-gradient(135deg, #0F6E56, #04342C)",
  Mystery: "linear-gradient(135deg, #444441, #2C2C2A)",
};

function BookCard({
  slug,
  title,
  author,
  genre,
  locked,
}: {
  slug: string;
  title: string;
  author: string;
  genre: string;
  locked: boolean;
  description?: string;
}) {
  const cover = COVER_COLORS[genre] ?? "linear-gradient(135deg, #374151, #111827)";

  return (
    <Link href={`/book/${slug}`} className="group flex flex-col">
      <div
        className="relative w-full rounded-lg overflow-hidden mb-2.5"
        style={{ aspectRatio: "2/3", background: cover }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {locked && (
          <span className="absolute top-2 right-2 bg-black/50 text-white text-[9px] font-medium px-1.5 py-0.5 rounded-full">
            🔒
          </span>
        )}
        <span className="absolute bottom-2 left-2 bg-[#F97316] text-white text-[9px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full">
          {genre}
        </span>
      </div>
      <h3 className="text-xs font-semibold text-[#111827] leading-snug line-clamp-2 group-hover:text-[#F97316] transition-colors">
        {title}
      </h3>
      <p className="text-[11px] text-[#9CA3AF] mt-0.5 truncate">{author}</p>
    </Link>
  );
}

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");

  const filtered = ALL_BOOKS.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = activeGenre === "All" || b.genre === activeGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="border-b border-[#F3F4F6] px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#111827] mb-2">Explore</h1>
          <p className="text-[#6B7280] text-sm mb-6">
            Discover African stories across every genre.
          </p>

          {/* Search */}
          <div className="relative max-w-2xl mb-6">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
            />
          </div>

          {/* Genre filters — single row */}
          <div className="flex flex-wrap gap-2">
            {["All", ...GENRES].map((g) => (
              <button
                key={g}
                onClick={() => setActiveGenre(g)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeGenre === g
                    ? "bg-[#111827] text-white"
                    : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-sm text-[#9CA3AF] mb-6">{filtered.length} books found</p>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-8">
            {filtered.map((book) => (
              <BookCard key={book.slug} {...book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">📚</p>
            <p className="font-medium text-[#111827] mb-1">No books found</p>
            <p className="text-sm text-[#9CA3AF]">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}