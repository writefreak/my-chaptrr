import type { Metadata } from "next";
// import { Geist } from "next/font/google";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
// const geist = Geist({
//   subsets: ["latin"],
//   variable: "--font-sans",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Chaptr — Where Nigerian Stories Earn What They Deserve",
  description:
    "Discover and support African writers. Subscribe to read premium stories, tip your favourite authors, and earn as a writer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}