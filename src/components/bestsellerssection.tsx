import Link from "next/link";
import { Flame, ArrowRight } from "lucide-react";
import { BookCard, BookRow } from "./book-components";
import { FEATURED_BOOKS, TRENDING_BOOKS } from "@/lib/home-data";

export function BestSellersSection() {
  return (
    <section className="py-16 md:px-14 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Flame size={20} className="text-[#F97316]" />
          <h2 className="font-sans text-3xl font-bold text-[#111827]">
            Best Sellers
          </h2>
          <Link
            href="/explore"
            className="ml-auto text-sm font-semibold text-[#F97316] hover:underline flex items-center gap-1"
          >
            More <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LHS — ranked list, fills height naturally */}
          <div className="flex flex-col gap-3">
            {TRENDING_BOOKS.map((book, i) => (
              <Link
                key={book.slug}
                href={`/book/${book.slug}`}
                className="group flex items-center gap-4 bg-white rounded-xl border border-[#F3F4F6] px-4 py-3 hover:border-[#F97316]/30 hover:shadow-sm transition-all"
              >
                <span className={`text-lg font-black w-6 shrink-0 ${i < 3 ? "text-[#F97316]" : "text-[#E5E7EB]"}`}>
                  {i + 1}
                </span>
                <div
                  className="w-10 shrink-0 rounded-md overflow-hidden"
                  style={{ aspectRatio: "2/3", background: book.coverColor }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111827] truncate group-hover:text-[#F97316] transition-colors">
                    {book.title}
                  </p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">{book.author}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[10px] font-semibold text-[#F97316] bg-[#FFF7ED] px-2 py-0.5 rounded-full mb-1">
                    {book.genre}
                  </p>
                  <p className="text-[11px] text-[#9CA3AF]">{book.reads}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* RHS — 2x3 grid of portrait cards to match LHS height */}
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            {FEATURED_BOOKS.slice(0, 6).map((book) => (
              <BookCard key={book.slug} {...book} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}