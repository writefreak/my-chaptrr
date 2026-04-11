import { AuthorSidebar } from "@/components/layout/AuthorSidebar";

export default function AuthorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <AuthorSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
