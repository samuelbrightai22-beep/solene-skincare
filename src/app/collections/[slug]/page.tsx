import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site/site-shell";
import { ProductCard } from "@/components/site/product-card";
import { RealImage } from "@/components/site/real-image";
import {
  collections,
  products,
  getCollection,
  getProductsByCollection,
} from "@/lib/site-data";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Collection — Solène" };
  return {
    title: `${collection.name} — Solène`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const collectionProducts = getProductsByCollection(slug);

  return (
    <SiteShell>
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-xs text-foreground/60">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/collections/all"
            className="hover:text-accent transition-colors"
          >
            Shop
          </Link>
          <span>/</span>
          <span className="text-foreground">{collection.name}</span>
        </nav>
      </div>

      {/* Collection hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="aspect-[4/3]">
            <RealImage
              src={collection.image}
              alt={collection.name}
              shape="bottle"
              color={collection.imageColor}
              accent={collection.imageAccent}
              className="h-full"
              priority
            />
          </div>
          <div>
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
              {collection.tagline}
            </p>
            <h1 className="font-serif text-5xl md:text-6xl">{collection.name}</h1>
            <p className="mt-6 text-foreground/80 leading-relaxed text-pretty">
              {collection.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Other collections */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              href="/collections/all"
              className="px-4 py-2 text-sm border border-border hover:border-foreground hover:bg-secondary transition-colors rounded-sm"
            >
              All
            </Link>
            {collections.map((c) => (
              <Link
                key={c.slug}
                href={`/collections/${c.slug}`}
                className={`px-4 py-2 text-sm border rounded-sm transition-colors ${
                  c.slug === slug
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground hover:bg-secondary"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-serif text-2xl">
            {collection.name}
            <span className="ml-2 text-base text-foreground/50">
              ({collectionProducts.length})
            </span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {collectionProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Cross-link to other collections */}
      <section className="bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-serif text-2xl mb-6 text-center">Explore more</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {collections
              .filter((c) => c.slug !== slug)
              .slice(0, 4)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  className="group flex flex-col bg-card border border-border/60 hover:border-accent rounded-md p-4 transition-colors"
                >
                  <div className="aspect-square mb-3">
                    <RealImage
                      src={c.image}
                      alt={c.name}
                      shape="jar"
                      color={c.imageColor}
                      accent={c.imageAccent}
                    />
                  </div>
                  <p className="font-serif text-lg">{c.name}</p>
                  <p className="text-xs text-foreground/60 line-clamp-1 mt-1">
                    {c.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
