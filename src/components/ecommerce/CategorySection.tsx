import { Watch, Smartphone, Headphones } from "lucide-react";

const categories = [
  {
    name: "Watches",
    count: "128 styles",
    icon: Watch,
    color: "bg-candy-pink/50",
    shadow: "hover:shadow-candy-pink/40",
  },
  {
    name: "Phones",
    count: "64 styles",
    icon: Smartphone,
    color: "bg-candy-sky/60",
    shadow: "hover:shadow-candy-sky/40",
  },
  {
    name: "Accessories",
    count: "210 items",
    icon: Headphones,
    color: "bg-candy-mint/60",
    shadow: "hover:shadow-candy-mint/40",
  },
];

export function CategorySection() {
  return (
    <section className="py-8" id="categories">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
        Shop by Category
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {categories.map((category) => (
          <a
            key={category.name}
            href="#products"
            className={`group flex items-center gap-4 rounded-3xl border border-white/60 ${category.color} p-5 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl ${category.shadow}`}
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/70 font-display text-2xl font-extrabold text-brand">
              <category.icon className="size-7" strokeWidth={2.5} />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-ink">
                {category.name}
              </p>
              <p className="text-sm text-ink/50">{category.count}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
