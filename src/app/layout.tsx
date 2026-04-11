import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaptr — Where Nigerian Stories Earn What They Deserve",
  description: "Discover and support African writers. Subscribe to read premium stories, tip your favourite authors, and earn as a writer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
