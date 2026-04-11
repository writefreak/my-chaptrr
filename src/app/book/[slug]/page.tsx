"use client";
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge, Modal } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Lock, Heart, Share2, Star, BookOpen, Clock, Users } from "lucide-react";

const MOCK_CHAPTERS = [
  { id: 1, title: "Prologue: Before the Rain", free: true, readTime: "4 min" },
  { id: 2, title: "Chapter 1 — The Return", free: true, readTime: "12 min" },
  { id: 3, title: "Chapter 2 — Old Debts", free: false, readTime: "15 min" },
  { id: 4, title: "Chapter 3 — The Hawker's Secret", free: false, readTime: "11 min" },
  { id: 5, title: "Chapter 4 — Midnight at Bar Beach", free: false, readTime: "18 min" },
  { id: 6, title: "Chapter 5 — What Kemi Knew", free: false, readTime: "13 min" },
  { id: 7, title: "Chapter 6 — The Third Island", free: false, readTime: "20 min" },
  { id: 8, title: "Epilogue", free: false, readTime: "6 min" },
];

export default function BookDetailPage({ params }: { params: { slug: string } }) {
  const [tipOpen, setTipOpen] = useState(false);
  const [tipAmount, setTipAmount] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState("");
  const [followed, setFollowed] = useState(false);

  const slug = params.slug;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="border-b border-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12">
            {/* Cover */}
            <div>
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-orange-100 to-amber-200 rounded-xl shadow-md" />
            </div>

            {/* Info */}
            <div>
              <Badge variant="orange" className="mb-4">Romance</Badge>
              <h1 className="font-serif text-4xl font-bold text-[#111827] mb-2">{title}</h1>
              <Link href="/author/dashboard" className="text-[#F97316] text-sm font-medium hover:underline mb-6 block">
                by Adaeze Okoye
              </Link>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-6 text-sm text-[#6B7280]">
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-[#F97316] fill-[#F97316]" />
                  <span className="font-medium text-[#111827]">4.8</span>
                  <span>(243 reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} />
                  <span>1,204 readers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>~2.5 hr read</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={14} />
                  <span>{MOCK_CHAPTERS.length} chapters</span>
                </div>
              </div>

              <p className="text-[#374151] text-sm leading-relaxed mb-8 max-w-xl">
                A sweeping romance set against the pulsing heart of Lagos Island. When Kemi returns from London to settle her late mother&apos;s estate, she doesn&apos;t expect to find Tunde — the boy who broke her heart at sixteen — now managing the family building. What follows is a story of old love, new choices, and what it means to come home.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={() => {}}>
                  <BookOpen size={16} />
                  Start Reading
                </Button>
                <Button variant="outline" size="lg" onClick={() => setTipOpen(true)}>
                  <Heart size={16} />
                  Tip Author
                </Button>
                <button
                  onClick={() => setFollowed(!followed)}
                  className={`px-4 py-2.5 rounded-md text-sm font-semibold border-2 transition-all ${
                    followed
                      ? "bg-[#111827] text-white border-[#111827]"
                      : "border-[#E5E7EB] text-[#6B7280] hover:border-[#111827] hover:text-[#111827]"
                  }`}
                >
                  {followed ? "Following" : "Follow Author"}
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-md border-2 border-[#E5E7EB] text-[#6B7280] hover:border-[#111827] transition-colors">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        {/* Chapter list */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#111827] mb-6">Chapters</h2>
          <div className="space-y-2">
            {MOCK_CHAPTERS.map((ch) => (
              <div key={ch.id} className="flex items-center gap-4 p-4 rounded-lg border border-[#F3F4F6] hover:border-[#E5E7EB] transition-colors group">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F3F4F6] text-xs font-bold text-[#6B7280] shrink-0">
                  {ch.id}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#111827] group-hover:text-[#F97316] transition-colors">{ch.title}</p>
                  <p className="text-xs text-[#9CA3AF]">{ch.readTime}</p>
                </div>
                {ch.free ? (
                  <Link
                    href={`/read/${slug}/${ch.id}`}
                    className="text-xs font-semibold text-[#F97316] bg-[#FFF7ED] px-3 py-1.5 rounded-md hover:bg-[#FED7AA] transition-colors"
                  >
                    Read Free
                  </Link>
                ) : (
                  <div className="flex items-center gap-2">
                    <Lock size={13} className="text-[#9CA3AF]" />
                    <Link
                      href="/subscription"
                      className="text-xs font-semibold text-white bg-[#F97316] px-3 py-1.5 rounded-md hover:bg-[#EA6C0A] transition-colors"
                    >
                      Subscribe
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Subscribe CTA */}
          <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-xl p-6">
            <h3 className="font-serif font-bold text-lg text-[#111827] mb-2">Unlock all chapters</h3>
            <p className="text-sm text-[#6B7280] mb-5">
              Subscribe from ₦2,500/month to read all locked chapters across the entire library.
            </p>
            <Link
              href="/subscription"
              className="block w-full text-center bg-[#F97316] text-white font-semibold py-2.5 rounded-md hover:bg-[#EA6C0A] transition-colors text-sm"
            >
              View Plans
            </Link>
          </div>

          {/* Author card */}
          <div className="border border-[#F3F4F6] rounded-xl p-6">
            <h3 className="font-semibold text-sm text-[#111827] mb-4">About the author</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#FFF7ED] flex items-center justify-center text-[#F97316] font-bold text-lg">A</div>
              <div>
                <p className="font-semibold text-sm text-[#111827]">Adaeze Okoye</p>
                <p className="text-xs text-[#9CA3AF]">Romance · Lagos, Nigeria</p>
              </div>
            </div>
            <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
              Adaeze Okoye is a Lagos-based writer whose debut novel sold 5,000 copies in its first month. Her work explores love, class, and ambition in contemporary Nigeria.
            </p>
            <button
              onClick={() => setTipOpen(true)}
              className="w-full text-center border-2 border-[#F97316] text-[#F97316] font-semibold py-2 rounded-md hover:bg-[#FFF7ED] transition-colors text-sm"
            >
              Tip Adaeze
            </button>
          </div>

          {/* Reviews */}
          <div className="border border-[#F3F4F6] rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm text-[#111827]">Reader reviews</h3>
              <span className="flex items-center gap-1 text-sm font-bold text-[#111827]">
                <Star size={13} className="text-[#F97316] fill-[#F97316]" />
                4.8
              </span>
            </div>
            {[
              { name: "Ngozi", review: "Couldn't put it down. The Lagos setting is so vivid it feels like a character itself.", rating: 5 },
              { name: "Tunde", review: "Beautiful writing. Kemi's voice is so authentic — laughed and cried in the same chapter.", rating: 5 },
            ].map(({ name, review, rating }) => (
              <div key={name} className="mb-4 pb-4 border-b border-[#F3F4F6] last:border-0 last:mb-0 last:pb-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#F3F4F6] flex items-center justify-center text-xs font-bold text-[#6B7280]">
                    {name[0]}
                  </div>
                  <span className="text-xs font-medium text-[#111827]">{name}</span>
                  <div className="flex ml-auto">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} size={10} className="text-[#F97316] fill-[#F97316]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">{review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tip modal */}
      <Modal open={tipOpen} onClose={() => setTipOpen(false)} title="Tip Adaeze Okoye">
        <p className="text-sm text-[#6B7280] mb-5">100% of your tip goes directly to the author.</p>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[500, 1000, 2000].map((amt) => (
            <button
              key={amt}
              onClick={() => { setTipAmount(amt); setCustomTip(""); }}
              className={`py-2.5 rounded-md text-sm font-semibold border-2 transition-all ${
                tipAmount === amt ? "bg-[#F97316] text-white border-[#F97316]" : "border-[#E5E7EB] text-[#111827] hover:border-[#F97316]"
              }`}
            >
              ₦{amt.toLocaleString()}
            </button>
          ))}
        </div>
        <input
          type="number"
          placeholder="Custom amount (₦)"
          value={customTip}
          onChange={(e) => { setCustomTip(e.target.value); setTipAmount(null); }}
          className="w-full px-3.5 py-2.5 border border-[#E5E7EB] rounded-md text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
        />
        <Button className="w-full" size="lg">
          Send Tip {tipAmount ? `— ₦${tipAmount.toLocaleString()}` : customTip ? `— ₦${parseInt(customTip).toLocaleString()}` : ""}
        </Button>
      </Modal>

      <Footer />
    </div>
  );
}
