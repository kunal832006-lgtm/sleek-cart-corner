import heroProducts from "@/assets/hero-products.jpg";

export function Hero() {
  return (
    <section className="relative py-12 md:py-20" id="about">
      <div className="floaty pointer-events-none absolute -left-6 top-10 hidden size-24 rounded-full bg-candy-pink/70 blur-2xl md:block"></div>
      <div
        className="floaty pointer-events-none absolute right-0 bottom-6 hidden size-32 rounded-full bg-candy-mint/70 blur-2xl md:block"
        style={{ animationDelay: "-3s" }}
      ></div>

      <div className="relative grid items-center gap-10 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/60 bg-white/60 p-8 shadow-xl shadow-brand/10 backdrop-blur-2xl md:p-10">
          <span className="inline-block rounded-full bg-candy-peach px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink/70">
            New Season · 2025
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl">
            Tech that feels{" "}
            <span className="bg-gradient-to-r from-brand to-[oklch(0.65_0.17_340)] bg-clip-text text-transparent">
              light as air
            </span>
          </h1>
          <p className="mt-4 max-w-md text-base text-ink/60">
            Discover premium watches, phones and accessories curated for the
            modern you. Soft, smart, and built to last.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Shop the drop
            </a>
            <a
              href="#categories"
              className="rounded-full border border-white/70 bg-white/70 px-7 py-3.5 text-sm font-bold text-ink backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Explore
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-candy-sky/60 outline-1 -outline-offset-1 outline-black/5">
            <img
              src={heroProducts}
              alt="Premium smartwatch and smartphone collection"
              className="h-full w-full object-cover"
              width={1024}
              height={1024}
            />
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-lg backdrop-blur">
              <p className="font-display text-lg font-extrabold leading-none text-ink">
                4.9 <span className="text-candy-pink">★★★★★</span>
              </p>
              <p className="mt-1 text-xs text-ink/50">12k happy shoppers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
