import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import { FEATURED_BOOKS } from "@/lib/home-data";
import { BookThumbnail } from "./book-components";

export function TrendingSection() {
  return (
    <section className="py-16 md:px-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp size={20} className="text-[#F97316]" />
          <h2 className="font-sans text-3xl font-bold text-[#111827]">
            Trending Now
          </h2>
          <Link
            href="/explore"
            className="ml-auto text-sm font-semibold text-[#F97316] hover:underline flex items-center gap-1"
          >
            View all <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {FEATURED_BOOKS.map((book) => (
            <BookThumbnail key={book.slug} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}