import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: "NGN" | "USD" = "NGN") {
  if (currency === "NGN") {
    return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amount);
  }
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-NG", { dateStyle: "medium" }).format(new Date(date));
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const GENRES = [
  "Romance", "Thriller", "Literary Fiction", "Fantasy",
  "Science Fiction", "Mystery", "Historical Fiction",
  "Contemporary", "Horror", "Poetry", "Short Stories", "Memoir",
];

export const MOCK_BOOKS = [
  { slug: "the-lagos-affair", title: "The Lagos Affair", author: "Adaeze Okoye", genre: "Romance", locked: false, description: "A sweeping romance set against the pulsing heart of Lagos Island." },
  { slug: "red-dust-rising", title: "Red Dust Rising", author: "Emeka Nwosu", genre: "Thriller", locked: true, description: "A journalist uncovers a deadly conspiracy in Abuja's corridors of power." },
  { slug: "daughters-of-the-harmattan", title: "Daughters of the Harmattan", author: "Fatima Al-Hassan", genre: "Literary Fiction", locked: true, description: "Three sisters navigate love, tradition, and ambition in northern Nigeria." },
  { slug: "oil-and-water", title: "Oil and Water", author: "Chidi Obi", genre: "Historical Fiction", locked: false, description: "The story of a Delta community's struggle across two generations." },
  { slug: "midnight-in-accra", title: "Midnight in Accra", author: "Kofi Mensah", genre: "Mystery", locked: true, description: "A detective races to solve a string of disappearances before the rains come." },
  { slug: "when-the-drums-stop", title: "When the Drums Stop", author: "Ngozi Eze", genre: "Fantasy", locked: false, description: "In a world where music is magic, silence is the most powerful force of all." },
];
