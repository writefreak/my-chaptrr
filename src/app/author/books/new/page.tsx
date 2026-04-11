"use client";
import { useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import { Select } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Plus, GripVertical, Trash2, Lock, Unlock, Upload, Save, Eye } from "lucide-react";
import { GENRES } from "@/lib/utils";

interface Chapter {
  id: number;
  title: string;
  free: boolean;
}

export default function NewBookPage() {
  const [chapters, setChapters] = useState<Chapter[]>([
    { id: 1, title: "Chapter 1", free: true },
    { id: 2, title: "Chapter 2", free: false },
  ]);
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const addChapter = () => {
    setChapters((prev) => [
      ...prev,
      { id: Date.now(), title: `Chapter ${prev.length + 1}`, free: false },
    ]);
  };

  const removeChapter = (id: number) => {
    setChapters((prev) => prev.filter((c) => c.id !== id));
  };

  const toggleFree = (id: number) => {
    setChapters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, free: !c.free } : c))
    );
  };

  const updateTitle = (id: number, title: string) => {
    setChapters((prev) => prev.map((c) => (c.id === id ? { ...c, title } : c)));
  };

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">New Book</h1>
          <p className="text-[#6B7280] text-sm">Fill in the details and add your chapters.</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="ghost"
            onClick={() => { setSaving(true); setTimeout(() => setSaving(false), 1500); }}
            loading={saving}
          >
            <Save size={15} />
            Save Draft
          </Button>
          <Button
            onClick={() => { setSubmitting(true); setTimeout(() => setSubmitting(false), 1500); }}
            loading={submitting}
          >
            Submit for Review
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        {/* Main form */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-[#F3F4F6] p-6 space-y-5">
            <h2 className="font-semibold text-[#111827]">Book details</h2>
            <Input label="Book title" placeholder="e.g. The Lagos Affair" required />
            <Select
              label="Genre"
              options={[{ value: "", label: "Select genre" }, ...GENRES.map((g) => ({ value: g, label: g }))]}
            />
            <Textarea
              label="Synopsis"
              placeholder="A compelling summary of your book. This will be shown to readers..."
              rows={5}
            />
          </div>

          {/* Cover upload */}
          <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
            <h2 className="font-semibold text-[#111827] mb-4">Book cover</h2>
            <div className="flex gap-6 items-start">
              <div className="w-32 h-44 bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg flex items-center justify-center text-[#9CA3AF] shrink-0">
                <Upload size={22} />
              </div>
              <div>
                <p className="text-sm font-medium text-[#111827] mb-2">Upload a cover image</p>
                <p className="text-xs text-[#6B7280] mb-4">
                  Recommended: 600 × 900px, JPG or PNG. A great cover dramatically increases click-through rates.
                </p>
                <button className="text-sm font-semibold text-[#F97316] border-2 border-[#F97316] px-4 py-2 rounded-md hover:bg-[#FFF7ED] transition-colors">
                  Choose file
                </button>
              </div>
            </div>
          </div>

          {/* Chapter manager */}
          <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-[#111827]">Chapters</h2>
              <button
                onClick={addChapter}
                className="flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-[#EA6C0A] transition-colors"
              >
                <Plus size={15} />
                Add chapter
              </button>
            </div>

            <div className="space-y-3">
              {chapters.map((ch, idx) => (
                <div
                  key={ch.id}
                  className="flex items-center gap-3 p-3 border border-[#F3F4F6] rounded-lg hover:border-[#E5E7EB] transition-colors group"
                >
                  <div className="cursor-grab text-[#D1D5DB] hover:text-[#9CA3AF]">
                    <GripVertical size={16} />
                  </div>
                  <span className="text-xs font-bold text-[#9CA3AF] w-6 text-center">{idx + 1}</span>
                  <input
                    value={ch.title}
                    onChange={(e) => updateTitle(ch.id, e.target.value)}
                    className="flex-1 text-sm text-[#111827] bg-transparent border-0 focus:outline-none"
                    placeholder="Chapter title..."
                  />
                  <button
                    onClick={() => toggleFree(ch.id)}
                    className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full transition-all ${
                      ch.free
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                    }`}
                    title={ch.free ? "Free preview" : "Locked"}
                  >
                    {ch.free ? <Unlock size={10} /> : <Lock size={10} />}
                    {ch.free ? "Free" : "Locked"}
                  </button>
                  <button
                    className="flex items-center gap-1.5 text-xs font-medium text-[#6B7280] hover:text-[#F97316] px-2 py-1 rounded transition-colors"
                  >
                    <Eye size={12} />
                    Edit
                  </button>
                  <button
                    onClick={() => removeChapter(ch.id)}
                    className="opacity-0 group-hover:opacity-100 p-1 text-[#9CA3AF] hover:text-red-500 transition-all"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#9CA3AF] mt-4">
              Tip: Make the first 1–2 chapters free to hook new readers. Lock the rest to drive subscriptions.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-[#F3F4F6] p-5">
            <h3 className="font-semibold text-sm text-[#111827] mb-4">Publish settings</h3>
            <div className="space-y-3 text-sm text-[#6B7280]">
              <div className="flex justify-between">
                <span>Status</span>
                <span className="font-medium text-[#111827]">Draft</span>
              </div>
              <div className="flex justify-between">
                <span>Chapters</span>
                <span className="font-medium text-[#111827]">{chapters.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Free chapters</span>
                <span className="font-medium text-green-600">{chapters.filter((c) => c.free).length}</span>
              </div>
              <div className="flex justify-between">
                <span>Locked chapters</span>
                <span className="font-medium text-[#111827]">{chapters.filter((c) => !c.free).length}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-xl p-5">
            <h3 className="font-semibold text-sm text-[#111827] mb-2">Before you submit</h3>
            <ul className="space-y-2 text-xs text-[#6B7280]">
              {[
                "Cover image uploaded",
                "Synopsis is compelling",
                "At least 1 free chapter",
                "All chapter titles set",
                "Content follows guidelines",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-[#F97316]/40 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#F97316]/40" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
