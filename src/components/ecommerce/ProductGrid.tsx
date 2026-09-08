import { toast } from "sonner";
import watch1 from "@/assets/watch-1.jpg";
import phone1 from "@/assets/phone-1.jpg";
import earbuds1 from "@/assets/earbuds-1.jpg";
import watch2 from "@/assets/watch-2.jpg";
import { useCart, type CartItem } from "./CartProvider";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: "aurora-s1",
    name: "Aurora S1 Smartwatch",
    price: 249,
    category: "Watches",
    image: watch1,
  },
  {
    id: "lumen-x-pro",
    name: "Lumen X Pro 5G",
    price: 899,
    category: "Phones",
    image: phone1,
  },
  {
    id: "cloud-buds",
    name: "Cloud Buds Air",
    price: 129,
    category: "Accessories",
    image: earbuds1,
  },
  {
    id: "halo-classic",
    name: "Halo Classic 40mm",
    price: 340,
    category: "Watches",
    image: watch2,
  },
];

export function ProductGrid() {
  const { addItem, items } = useCart();

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
    };
    addItem(cartItem);
    toast.success(`${product.name} added to cart`, {
      description: `Cart now has ${items.length + 1} item${items.length + 1 === 1 ? "" : "s"}`,
    });
  };

  return (
    <section className="py-8 pb-16" id="products">
      <div className="flex items-end justify-between">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
          Trending now
        </h2>
        <a
          href="#products"
          className="text-sm font-bold text-brand transition-colors hover:text-brand-dark hover:underline"
        >
          View all
        </a>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          const inCart = items.some((item) => item.id === product.id);
          return (
            <div
              key={product.id}
              className="group rounded-3xl border border-white/60 bg-white/60 p-4 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand/20"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-candy-mint/60 outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-brand">
                {product.category}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold leading-tight text-ink">
                {product.name}
              </h3>
              <p className="mt-2 text-lg font-extrabold text-ink">
                ${product.price}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={inCart}
                className="mt-4 w-full rounded-full bg-brand/10 py-2.5 text-sm font-bold text-brand transition-colors group-hover:bg-brand group-hover:text-white disabled:cursor-not-allowed disabled:bg-candy-mint disabled:text-ink/60 disabled:group-hover:bg-candy-mint disabled:group-hover:text-ink/60"
              >
                {inCart ? "In Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
