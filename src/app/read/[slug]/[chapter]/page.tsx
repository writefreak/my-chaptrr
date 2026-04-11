"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, ChevronLeft, ChevronRight, Settings, X, Lock } from "lucide-react";

const CHAPTER_CONTENT = `
The rain had been threatening all morning — that particular Lagos grey that meant business — but Kemi still took the Third Mainland Bridge, because she always took the Third Mainland Bridge. Old habits. Old routes. Old city that had become new while she wasn't looking.

She pressed her forehead to the taxi window and watched the lagoon slide past, glittering even under heavy cloud. Somewhere out there, in a building on Lagos Island that her mother had owned for forty years, Tunde Adeyemi was waiting for her. 

Not waiting for her specifically. He didn't know she was coming. Nobody did, except her sister Amaka, who had texted back a simple: *Are you sure?* 

She was not sure. She was twenty-eight years old, home for the first time in three years, and not sure about anything.

The taxi driver was playing Burna Boy at a volume that suggested he considered it a personal obligation. Kemi didn't mind. There was something grounding about it — this particular song, this particular city. London had its own soundtrack but it was never *hers*. It was borrowed music, borrowed sky.

"Eko Hotel turn?" the driver asked.

"No — Victoria Island. Abiodun Street. Number forty-four."

He nodded like he knew the street, which he probably did. Everyone in Lagos knew every street eventually. It was part of the deal you made when you decided to survive here: total knowledge, total noise, total life.

*Total life.* That was what her mother used to say. *Lagos is total life, my daughter. It will chew you and spit you out and chew you again, and somehow that is the best thing that will ever happen to you.*

Kemi smiled at the rain-smeared window.

She was almost home.
`;

export default function ReadingPage({ params }: { params: { slug: string; chapter: string } }) {
  const [fontSize, setFontSize] = useState(18);
  const [showSettings, setShowSettings] = useState(false);
  const [locked] = useState(parseInt(params.chapter) > 2);

  const chapterNum = parseInt(params.chapter);
  const slug = params.slug;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#F3F4F6] px-6 h-14 flex items-center justify-between">
        <Link href={`/book/${slug}`} className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
          <ChevronLeft size={16} />
          Back to book
        </Link>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#F97316] rounded flex items-center justify-center">
            <BookOpen size={10} className="text-white" />
          </div>
          <span className="font-serif font-bold text-sm text-[#111827]">Chaptr</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            <Settings size={15} />
            <span className="hidden sm:inline">Text</span>
          </button>
        </div>
      </header>

      {/* Settings panel */}
      {showSettings && (
        <div className="fixed top-14 right-4 z-50 bg-white border border-[#E5E7EB] rounded-xl shadow-lg p-5 w-64">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-[#111827]">Reading settings</p>
            <button onClick={() => setShowSettings(false)}>
              <X size={15} className="text-[#9CA3AF]" />
            </button>
          </div>
          <div>
            <p className="text-xs text-[#6B7280] mb-2">Font size: {fontSize}px</p>
            <input
              type="range"
              min={14}
              max={24}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full accent-[#F97316]"
            />
            <div className="flex justify-between text-xs text-[#9CA3AF] mt-1">
              <span>A</span>
              <span className="text-base">A</span>
            </div>
          </div>
        </div>
      )}

      {/* Chapter heading */}
      <div className="max-w-2xl mx-auto w-full px-6 pt-12 pb-6">
        <p className="text-xs font-medium text-[#F97316] uppercase tracking-widest mb-3">Chapter {chapterNum}</p>
        <h1 className="font-serif text-3xl font-bold text-[#111827] mb-2">
          {chapterNum === 1 ? "The Return" : chapterNum === 2 ? "Old Debts" : "The Hawker's Secret"}
        </h1>
        <div className="h-px bg-[#F3F4F6] mt-6" />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto w-full px-6 pb-24 flex-1 relative">
        {locked ? (
          <>
            {/* Blurred preview */}
            <div className="relative">
              <div
                className="leading-relaxed text-[#374151] whitespace-pre-line blur-sm select-none pointer-events-none"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: `${fontSize}px`, lineHeight: 1.9 }}
              >
                {CHAPTER_CONTENT.slice(0, 400)}...
              </div>

              {/* Lock overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white border border-[#F3F4F6] rounded-2xl shadow-lg p-8 text-center max-w-sm mx-auto">
                  <div className="w-14 h-14 bg-[#FFF7ED] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock size={22} className="text-[#F97316]" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#111827] mb-2">This chapter is locked</h3>
                  <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
                    Subscribe from ₦2,500/month to unlock all chapters across the Chaptr library.
                  </p>
                  <Link
                    href="/subscription"
                    className="block w-full bg-[#F97316] text-white font-semibold py-3 rounded-md hover:bg-[#EA6C0A] transition-colors text-sm"
                  >
                    Upgrade to Continue
                  </Link>
                  <Link
                    href={`/book/${slug}`}
                    className="block mt-3 text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
                  >
                    Back to book
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            className="leading-relaxed text-[#374151] whitespace-pre-line"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: `${fontSize}px`, lineHeight: 1.9 }}
          >
            {CHAPTER_CONTENT}
          </div>
        )}
      </div>

      {/* Bottom navigation */}
      {!locked && (
        <div className="sticky bottom-0 bg-white border-t border-[#F3F4F6] px-6 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            {chapterNum > 1 ? (
              <Link
                href={`/read/${slug}/${chapterNum - 1}`}
                className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
              >
                <ChevronLeft size={16} />
                Previous
              </Link>
            ) : (
              <div />
            )}

            <p className="text-xs text-[#9CA3AF]">Chapter {chapterNum} of 8</p>

            <Link
              href={`/read/${slug}/${chapterNum + 1}`}
              className="flex items-center gap-2 text-sm font-semibold text-[#F97316] hover:text-[#EA6C0A] transition-colors"
            >
              Next
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
