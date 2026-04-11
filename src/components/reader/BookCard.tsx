import Link from "next/link";
import { Badge } from "@/components/ui";
import { Lock } from "lucide-react";

interface BookCardProps {
  slug: string;
  title: string;
  author: string;
  genre: string;
  coverColor?: string;
  locked?: boolean;
  description?: string;
}

const COVER_COLORS = [
  "from-orange-100 to-orange-200",
  "from-amber-100 to-amber-200",
  "from-rose-100 to-rose-200",
  "from-teal-100 to-teal-200",
  "from-indigo-100 to-indigo-200",
  "from-emerald-100 to-emerald-200",
];

export function BookCard({ slug, title, author, genre, coverColor, locked, description }: BookCardProps) {
  const gradient = coverColor || COVER_COLORS[Math.floor(Math.random() * COVER_COLORS.length)];

  return (
    <Link href={`/book/${slug}`} className="group block">
      <div className="rounded-lg overflow-hidden border border-[#F3F4F6] hover:border-[#E5E7EB] hover:shadow-md transition-all duration-200">
        {/* Cover */}
        <div className={`relative h-56 bg-gradient-to-br ${gradient} flex items-end p-4`}>
          {locked && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5">
              <Lock size={14} className="text-[#6B7280]" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        {/* Info */}
        <div className="p-4 bg-white">
          <Badge variant="orange" className="mb-2">{genre}</Badge>
          <h3 className="font-semibold text-[#111827] text-sm leading-tight mb-1 group-hover:text-[#F97316] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-[#6B7280]">{author}</p>
          {description && (
            <p className="text-xs text-[#9CA3AF] mt-2 line-clamp-2">{description}</p>
          )}
          <button className="mt-3 w-full bg-[#F97316] text-white text-xs font-semibold py-2 rounded-md hover:bg-[#EA6C0A] transition-colors">
            Read Now
          </button>
        </div>
      </div>
    </Link>
  );
}
