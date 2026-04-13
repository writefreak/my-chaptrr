import Link from "next/link";
import { Eye } from "lucide-react";

// ------------------------------------------------------------------
// Main BookCard — portrait ratio, no excerpt
// ------------------------------------------------------------------
export function BookCard({
  title,
  author,
  genre,
  reads,
  coverColor,
  slug,
}: {
  title: string;
  author: string;
  genre: string;
  reads: string;
  excerpt?: string;
  coverColor: string;
  slug: string;
}) {
  return (
    <Link href={`/book/${slug}`} className="group flex flex-col">
      {/* Portrait cover */}
      <div
        className="relative w-full rounded-xl overflow-hidden mb-2.5"
        style={{ aspectRatio: "2/3", background: coverColor }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute bottom-2.5 left-2.5 bg-[#F97316] text-white text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full">
          {genre}
        </span>
        <span className="absolute bottom-2.5 right-2.5 flex items-center gap-0.5 text-white text-[9px] font-medium">
          <Eye size={9} />
          {reads}
        </span>
      </div>

      {/* Meta */}
      <h3 className="text-xs font-semibold text-[#111827] leading-snug line-clamp-2 group-hover:text-[#F97316] transition-colors">
        {title}
      </h3>
      <p className="text-[11px] text-[#9CA3AF] mt-0.5 truncate">{author}</p>
    </Link>
  );
}

// ------------------------------------------------------------------
// Compact ranked row — for the bestseller list
// ------------------------------------------------------------------
export function BookRow({
  rank,
  title,
  author,
  genre,
  reads,
  coverColor,
  slug,
}: {
  rank: number;
  title: string;
  author: string;
  genre: string;
  reads: string;
  coverColor: string;
  slug: string;
}) {
  return (
    <Link
      href={`/book/${slug}`}
      className="flex items-center gap-4 py-3 border-b border-[#F3F4F6] last:border-0 group hover:bg-[#FAFAFA] -mx-4 px-4 rounded-lg transition-colors"
    >
      <span
        className={`text-xl font-black w-7 shrink-0 ${
          rank <= 3 ? "text-[#F97316]" : "text-[#E5E7EB]"
        }`}
      >
        {rank}
      </span>
      <div
        className="w-9 h-14 rounded-md shrink-0"
        style={{ background: coverColor }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#111827] truncate group-hover:text-[#F97316] transition-colors">
          {title}
        </p>
        <p className="text-xs text-[#9CA3AF]">{author}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-xs font-semibold text-[#374151]">{reads}</p>
        <p className="text-[10px] text-[#9CA3AF]">{genre}</p>
      </div>
    </Link>
  );
}

// ------------------------------------------------------------------
// Small compact card — for trending grid
// ------------------------------------------------------------------
export function BookThumbnail({
  title,
  author,
  genre,
  reads,
  coverColor,
  slug,
}: {
  title: string;
  author: string;
  genre: string;
  reads: string;
  coverColor: string;
  slug: string;
}) {
  return (
    <Link href={`/book/${slug}`} className="group flex flex-col">
      <div
        className="relative w-full rounded-xl overflow-hidden mb-2"
        style={{ aspectRatio: "2/3", background: coverColor }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute bottom-2 left-2 bg-[#F97316] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
          {genre}
        </span>
        <span className="absolute bottom-2 right-2 text-white text-[9px] flex items-center gap-0.5">
          <Eye size={9} /> {reads}
        </span>
      </div>
      <p className="text-xs font-semibold text-[#111827] leading-snug line-clamp-2 group-hover:text-[#F97316] transition-colors">
        {title}
      </p>
      <p className="text-[11px] text-[#9CA3AF] mt-0.5 truncate">{author}</p>
    </Link>
  );
}