import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/components/ecommerce/CartProvider";
import { Header } from "@/components/ecommerce/Header";
import { Hero } from "@/components/ecommerce/Hero";
import { CategorySection } from "@/components/ecommerce/CategorySection";
import { ProductGrid } from "@/components/ecommerce/ProductGrid";
import { Footer } from "@/components/ecommerce/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        property: "og:title",
        content: "Nimbus | Premium Tech Store",
      },
      {
        property: "og:description",
        content:
          "Shop premium watches, phones, and accessories at Nimbus. Clean, modern tech curated for everyday life.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-[var(--page-start)] via-[var(--page-mid)] to-[var(--page-end)] font-body text-ink selection:bg-brand/20">
        <Header />
        <main className="mx-auto max-w-7xl px-5">
          <Hero />
          <CategorySection />
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
