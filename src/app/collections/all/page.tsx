import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { ProductCard } from "@/components/site/product-card";
import { ProductImage } from "@/components/site/product-image";
import { products, collections } from "@/lib/site-data";

export const metadata = {
  title: "Shop All — Solène",
  description:
    "Shop all Solène botanical skincare — cleansers, serums, moisturizers, masks, body care, and curated sets.",
};

export default function CollectionsAllPage() {
  return (
    <SiteShell>
      {/* Page header */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
            The Solène collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl">Shop All</h1>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto text-pretty">
            Every Solène formula in one place — cold-pressed botanical skincare
            made in small batches in Lyon. Clean, vegan, cruelty-free. Filter by
            collection below, or browse our full range.
          </p>
        </div>
      </section>

      {/* Collection chips */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-4 py-2 text-sm bg-foreground text-background rounded-sm">
              All
            </span>
            {collections.map((c) => (
              <Link
                key={c.slug}
                href={`/collections/${c.slug}`}
                className="px-4 py-2 text-sm border border-border hover:border-foreground hover:bg-secondary transition-colors rounded-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collections grid (visual) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-serif text-2xl mb-6 text-center md:text-left">
          Browse by category
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className="group flex items-center gap-4 bg-card border border-border/60 hover:border-accent rounded-md p-4 transition-colors"
            >
              <div className="w-20 h-20 shrink-0">
                <ProductImage
                  shape="bottle"
                  color={c.imageColor}
                  accent={c.imageAccent}
                />
              </div>
              <div>
                <p className="font-serif text-xs uppercase tracking-[0.15em] text-accent">
                  {c.tagline}
                </p>
                <h3 className="font-serif text-xl">{c.name}</h3>
                <p className="text-xs text-foreground/60 line-clamp-1 mt-1">
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-serif text-2xl">
            All products
            <span className="ml-2 text-base text-foreground/50">
              ({products.length})
            </span>
          </h2>
          <p className="text-sm text-foreground/60">Free shipping over €60</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
