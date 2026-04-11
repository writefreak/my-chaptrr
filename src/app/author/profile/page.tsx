"use client";
import { useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import { Select } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Upload, ExternalLink, Copy, Check } from "lucide-react";
import { GENRES } from "@/lib/utils";

export default function AuthorProfilePage() {
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState(false);
  const profileUrl = "chaptr.com/author/adaeze-okoye";

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#111827] mb-1">Edit Profile</h1>
          <p className="text-[#6B7280] text-sm">Your public author page seen by all readers.</p>
        </div>
        <Button loading={saving} onClick={handleSave}>Save changes</Button>
      </div>

      {/* Public profile link */}
      <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg p-4 flex items-center justify-between mb-8">
        <div>
          <p className="text-xs text-[#9CA3AF] mb-0.5">Your public profile</p>
          <p className="text-sm font-medium text-[#111827]">{profileUrl}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-medium text-[#6B7280] hover:text-[#111827] px-3 py-1.5 border border-[#E5E7EB] rounded-md hover:border-[#111827] transition-all"
          >
            {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
            {copied ? "Copied!" : "Copy"}
          </button>
          <a
            href={`https://${profileUrl}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#F97316] px-3 py-1.5 border border-[#FED7AA] rounded-md hover:bg-[#FFF7ED] transition-all"
          >
            <ExternalLink size={12} />
            View
          </a>
        </div>
      </div>

      <div className="space-y-6">
        {/* Avatar */}
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6">
          <h2 className="font-semibold text-[#111827] mb-5">Profile photo</h2>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-[#FFF7ED] flex items-center justify-center text-[#F97316] font-bold text-3xl shrink-0">
              A
            </div>
            <div>
              <p className="text-sm font-medium text-[#111827] mb-1">Upload a photo</p>
              <p className="text-xs text-[#9CA3AF] mb-3">JPG or PNG, minimum 200×200px. Shows on your profile and book pages.</p>
              <button className="flex items-center gap-2 text-sm font-semibold text-[#F97316] border-2 border-[#F97316] px-4 py-1.5 rounded-md hover:bg-[#FFF7ED] transition-colors">
                <Upload size={14} />
                Upload photo
              </button>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6 space-y-5">
          <h2 className="font-semibold text-[#111827]">Basic information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input label="Display name" defaultValue="Adaeze Okoye" />
            <Input label="Username / slug" defaultValue="adaeze-okoye" hint="chaptr.com/author/adaeze-okoye" />
          </div>
          <Select
            label="Primary genre"
            defaultValue="Romance"
            options={[{ value: "", label: "Select genre" }, ...GENRES.map((g) => ({ value: g, label: g }))]}
          />
          <Textarea
            label="Bio"
            defaultValue="Lagos-based writer exploring love, class, and ambition in contemporary Nigeria. Debut novel sold 5,000 copies in its first month."
            rows={4}
          />
        </div>

        {/* Social links */}
        <div className="bg-white rounded-xl border border-[#F3F4F6] p-6 space-y-5">
          <h2 className="font-semibold text-[#111827]">Social links</h2>
          <Input label="Twitter / X" placeholder="https://twitter.com/yourhandle" type="url" />
          <Input label="Instagram" placeholder="https://instagram.com/yourhandle" type="url" />
          <Input label="Personal website" placeholder="https://yourwebsite.com" type="url" />
        </div>
      </div>
    </div>
  );
}
