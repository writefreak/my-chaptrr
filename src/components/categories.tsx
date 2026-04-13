import Link from "next/link";

const CATEGORIES = [
  {
    name: "Romance",
    count: "420+ stories",
    bg: "linear-gradient(135deg, #D85A30, #9B3515)",
  },
  {
    name: "Thriller",
    count: "180+ stories",
    bg: "linear-gradient(135deg, #185FA5, #0A3D74)",
  },
  {
    name: "Literary Fiction",
    count: "95+ stories",
    bg: "linear-gradient(135deg, #3B6D11, #1E3D07)",
  },
  {
    name: "Mythology",
    count: "62+ stories",
    bg: "linear-gradient(135deg, #534AB7, #2E276E)",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-20 md:px-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          
          <h2 className="font-sans text-3xl font-bold text-[#111827]">
            Explore by category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map(({ name, count, bg }) => (
            <Link
              key={name}
              href={`/explore?genre=${name.toLowerCase().replace(" ", "-")}`}
              className="group relative rounded-2xl overflow-hidden h-36 flex flex-col justify-end p-5"
              style={{ background: bg }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="relative z-10">
                <p className="font-sans font-bold text-white text-lg leading-tight">
                  {name}
                </p>
                <p className="text-white/70 text-xs mt-0.5">{count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}