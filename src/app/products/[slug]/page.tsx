import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  Truck,
  ShieldCheck,
  RefreshCw,
  Leaf,
  Check,
  ChevronRight,
} from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { RealImage } from "@/components/site/real-image";
import { ProductCard } from "@/components/site/product-card";
import { ProductActions } from "@/components/site/product-actions";
import {
  products,
  getProduct,
  getRelatedProducts,
  formatPrice,
} from "@/lib/site-data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product — Solène" };
  return {
    title: `${product.name} — Solène`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 4);

  return (
    <SiteShell>
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-foreground/60 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            href="/collections/all"
            className="hover:text-accent transition-colors"
          >
            Shop
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            href={`/collections/${product.category}`}
            className="hover:text-accent transition-colors capitalize"
          >
            {product.category.replace("-", " ")}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product main */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square">
              <RealImage
                src={product.image}
                alt={product.name}
                shape={product.imageShape}
                color={product.imageColor}
                accent={product.imageAccent}
                className="h-full"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.imageGallery.slice(0, 3).map((img, idx) => (
                <div key={idx} className="aspect-square">
                  <RealImage
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    shape={product.imageShape}
                    color={product.imageColor}
                    accent={product.imageAccent}
                  />
                </div>
              ))}
              <div className="aspect-square flex items-center justify-center bg-secondary/40 border border-border/40 rounded-md">
                <span className="text-xs text-foreground/50 text-center px-2">
                  + More
                  <br />
                  views
                </span>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-3">
              {product.badge && (
                <span className="bg-accent text-accent-foreground px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em]">
                  {product.badge}
                </span>
              )}
              <span className="text-xs text-foreground/60 capitalize">
                {product.category.replace("-", " ")}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-foreground/70">{product.subtitle}</p>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "text-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-foreground/70">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-serif text-3xl">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-lg text-foreground/40 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                  <span className="bg-accent/15 text-accent px-2 py-0.5 text-xs font-medium">
                    Save {formatPrice(product.compareAtPrice - product.price)}
                  </span>
                </>
              )}
              <span className="ml-auto text-sm text-foreground/60">
                {product.size}
              </span>
            </div>

            <p className="mt-6 text-foreground/80 leading-relaxed text-pretty">
              {product.longDescription}
            </p>

            {/* Add to cart */}
            <div className="mt-8">
              <ProductActions slug={product.slug} price={product.price} />
              <Link
                href="/cart"
                className="mt-3 block text-center text-sm border border-foreground/20 py-3 hover:bg-secondary/40 transition-colors"
              >
                View Cart
              </Link>
            </div>

            {/* Trust mini-strip */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-foreground/70">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" />
                Free EU shipping over €60
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-primary" />
                30-day open-jar returns
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-primary" />
                Vegan & cruelty-free
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Made in batches of 500
              </div>
            </div>

            {/* Skin type */}
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/60 mb-2">
                Suitable for
              </p>
              <div className="flex flex-wrap gap-2">
                {product.skinType.map((type) => (
                  <span
                    key={type}
                    className="border border-border px-3 py-1 text-xs"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/60 mb-2">
                Benefits
              </p>
              <ul className="space-y-2">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed info: ingredients, how to use */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl mb-4">Key ingredients</h2>
              <ul className="space-y-5">
                {product.keyIngredients.map((ing) => (
                  <li key={ing.name} className="border-l-2 border-accent pl-4">
                    <p className="font-serif text-lg">{ing.name}</p>
                    <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                      {ing.description}
                    </p>
                  </li>
                ))}
              </ul>
              <details className="mt-6 group">
                <summary className="cursor-pointer text-sm font-medium hover:text-accent transition-colors">
                  Full ingredient list
                </summary>
                <p className="mt-3 text-xs text-foreground/70 leading-relaxed">
                  {product.fullIngredients}
                </p>
              </details>
            </div>
            <div>
              <h2 className="font-serif text-2xl mb-4">How to use</h2>
              <p className="text-foreground/80 leading-relaxed text-pretty">
                {product.howToUse}
              </p>
              <div className="mt-6 bg-secondary/40 p-5 rounded-md">
                <p className="font-serif text-xs uppercase tracking-[0.15em] text-accent mb-2">
                  Ritual tip
                </p>
                <p className="text-sm text-foreground/80">
                  {product.category === "serums" &&
                    "Always apply serums to clean, slightly damp skin — water helps the active penetrate. Press gently into the skin rather than rubbing."}
                  {product.category === "moisturizers" &&
                    "Apply moisturizer as the final step of your ritual to seal in everything beneath it. In the morning, follow with SPF."}
                  {product.category === "cleansers" &&
                    "Massage your cleanser for a full 60 seconds — most people rush this step. The active ingredients need time to work."}
                  {product.category === "masks" &&
                    "Never use a mask and an exfoliant on the same day. Give your skin at least 48 hours between treatments."}
                  {product.category === "body-care" &&
                    "Apply body oil to damp skin after a shower — the water helps the oil spread evenly and lock in moisture."}
                  {product.category === "sets" &&
                    "Follow the ritual card included in the box. The order of application matters — serums go before moisturizers, always."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-3xl mb-8">You may also like</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
