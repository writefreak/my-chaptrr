"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookCard } from "@/components/reader/BookCard";
import { MOCK_BOOKS, GENRES } from "@/lib/utils";
import { Search, SlidersHorizontal } from "lucide-react";

const FILTERS = ["All", "Newest", "Most Read", "Trending", "Free Only"];

const ALL_BOOKS = [
  ...MOCK_BOOKS,
  { slug: "the-quiet-river", title: "The Quiet River", author: "Bola Adeyemi", genre: "Literary Fiction", locked: false, description: "A meditation on grief, water, and what remains." },
  { slug: "fire-on-the-third-mainland", title: "Fire on the Third Mainland", author: "Tunde Bakare", genre: "Thriller", locked: true, description: "One night on Lagos's famous bridge changes everything." },
  { slug: "the-kano-letters", title: "The Kano Letters", author: "Amina Usman", genre: "Historical Fiction", locked: true, description: "Love letters across colonial-era Northern Nigeria." },
  { slug: "something-borrowed-blue", title: "Something Borrowed, Blue", author: "Chisom Eze", genre: "Romance", locked: false, description: "Two Lagos weddings, one caterer, and a disaster waiting to happen." },
  { slug: "children-of-the-baobab", title: "Children of the Baobab", author: "Sule Ibrahim", genre: "Fantasy", locked: true, description: "A boy discovers his grandmother is a forest spirit." },
  { slug: "the-last-broadcast", title: "The Last Broadcast", author: "Ifeanyi Ogu", genre: "Science Fiction", locked: true, description: "In 2047 Lagos, a pirate radio station is the last free voice." },
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeGenre, setActiveGenre] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = ALL_BOOKS.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = activeGenre === "All" || b.genre === activeGenre;
    const matchesFree = activeFilter === "Free Only" ? !b.locked : true;
    return matchesSearch && matchesGenre && matchesFree;
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="border-b border-[#F3F4F6] px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-[#111827] mb-2">Explore</h1>
          <p className="text-[#6B7280] text-sm mb-6">Discover African stories across every genre.</p>

          {/* Search */}
          <div className="flex gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-[#E5E7EB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 border border-[#E5E7EB] rounded-md text-sm text-[#6B7280] hover:border-[#F97316] hover:text-[#F97316] transition-colors"
            >
              <SlidersHorizontal size={15} />
              Filters
            </button>
          </div>

          {/* Filters row */}
          {showFilters && (
            <div className="mt-4 space-y-3">
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      activeFilter === f
                        ? "bg-[#F97316] text-white"
                        : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
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
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-sm text-[#9CA3AF] mb-6">{filtered.length} books found</p>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {filtered.map((book) => (
              <BookCard key={book.slug} {...book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">📚</p>
            <p className="font-medium text-[#111827] mb-1">No books found</p>
            <p className="text-sm text-[#9CA3AF]">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
