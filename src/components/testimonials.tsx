import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Adaeze Okoye",
    genre: "Romance",
    quote:
      "I received my first dollar payout within 3 weeks of publishing. Chaptr actually pays — and on time.",
  },
  {
    name: "Emeka Nwosu",
    genre: "Thriller",
    quote:
      "I own my readers here. When I move, they move with me. That kind of ownership is rare on any platform.",
  },
  {
    name: "Fatima Al-Hassan",
    genre: "Literary Fiction",
    quote:
      "The revenue share is transparent, the UI is beautiful, and the readers are serious about literature.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-10 md:py-20 md:px-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          
          <h2 className="font-sans text-3xl font-bold text-[#111827]">
            Authors love earning here.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ name, genre, quote }) => (
            <div
              key={name}
              className="bg-[#FAFAFA] border border-[#F3F4F6] rounded-2xl p-7"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-[#F97316] fill-[#F97316]" />
                ))}
              </div>
              <p className="text-sm text-[#374151] leading-relaxed mb-6 font-sans italic">
                "{quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFF7ED] flex items-center justify-center text-[#F97316] font-bold text-sm">
                  {name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">{name}</p>
                  <p className="text-xs text-[#9CA3AF]">{genre} author</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}