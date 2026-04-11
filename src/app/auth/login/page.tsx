"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#111827] flex-col justify-between p-12">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#F97316] rounded-md flex items-center justify-center">
            <BookOpen size={16} className="text-white" />
          </div>
          <span className="font-serif font-bold text-xl text-white">Chaptr</span>
        </Link>
        <div>
          <p className="font-serif text-4xl font-bold text-white leading-tight mb-4">
            Welcome back.<br />
            <span className="text-[#F97316]">Your library awaits.</span>
          </p>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">
            Pick up where you left off — your bookmarks, follows, and subscriptions are right where you left them.
          </p>
        </div>
        <div className="text-xs text-[#4B5563]">© {new Date().getFullYear()} Chaptr. Built for African writers.</div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-16">
        <div className="max-w-md w-full mx-auto">
          <Link href="/" className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="w-8 h-8 bg-[#F97316] rounded-md flex items-center justify-center">
              <BookOpen size={16} className="text-white" />
            </div>
            <span className="font-serif font-bold text-xl text-[#111827]">Chaptr</span>
          </Link>

          <h1 className="font-serif text-3xl font-bold text-[#111827] mb-2">Sign in</h1>
          <p className="text-[#6B7280] text-sm mb-8">Good to have you back.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input label="Email address" type="email" placeholder="you@example.com" required />
            <div>
              <Input label="Password" type="password" placeholder="Your password" required />
              <div className="flex justify-end mt-1.5">
                <Link href="#" className="text-xs text-[#F97316] hover:underline">Forgot password?</Link>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" loading={loading}>
              Sign In
            </Button>
          </form>

          <p className="text-sm text-center text-[#6B7280] mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-[#F97316] font-medium hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
