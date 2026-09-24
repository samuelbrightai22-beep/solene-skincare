import Link from "next/link";
import { SearchX } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { ProductCard } from "@/components/site/product-card";
import { products, collections, blogPosts } from "@/lib/site-data";

export const metadata = {
  title: "Search — Solène",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();

  let matchedProducts = products;
  let matchedPosts = blogPosts;
  let matchedCollections = collections;

  if (query) {
    matchedProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.keyIngredients.some((i) =>
          i.name.toLowerCase().includes(query),
        ) ||
        p.skinType.some((t) => t.toLowerCase().includes(query)),
    );

    matchedPosts = blogPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.content.some((c) =>
          c.paragraphs.some((para) =>
            para.toLowerCase().includes(query),
          ),
        ),
    );

    matchedCollections = collections.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query) ||
        c.tagline.toLowerCase().includes(query),
    );
  }

  const hasResults =
    matchedProducts.length > 0 ||
    matchedPosts.length > 0 ||
    matchedCollections.length > 0;

  return (
    <SiteShell>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Search results
          </p>
          <h1 className="font-serif text-4xl md:text-5xl">
            {query ? `Results for "${q}"` : "Search Solène"}
          </h1>
          {query && (
            <p className="mt-3 text-sm text-foreground/70">
              {matchedProducts.length + matchedPosts.length + matchedCollections.length}{" "}
              {matchedProducts.length + matchedPosts.length + matchedCollections.length === 1
                ? "result"
                : "results"}{" "}
              found
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {!query ? (
          <div className="text-center py-16">
            <p className="text-foreground/70 max-w-md mx-auto text-pretty">
              Search for a product, ingredient, or article. Try "vitamin C",
              "bakuchiol", "cleanser", or "slow skincare".
            </p>
          </div>
        ) : !hasResults ? (
          <div className="text-center py-16">
            <SearchX className="h-12 w-12 text-foreground/30 mx-auto" />
            <h2 className="mt-4 font-serif text-2xl">No results found</h2>
            <p className="mt-2 text-foreground/70 max-w-md mx-auto text-pretty">
              We couldn't find anything matching "{q}". Try a different keyword
              or browse our full collection.
            </p>
            <Link
              href="/collections/all"
              className="mt-6 inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Browse all products
            </Link>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Collections */}
            {matchedCollections.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl mb-4">
                  Collections ({matchedCollections.length})
                </h2>
                <div className="flex flex-wrap gap-3">
                  {matchedCollections.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/collections/${c.slug}`}
                      className="px-4 py-3 border border-border hover:border-accent hover:bg-secondary/40 transition-colors rounded-md"
                    >
                      <p className="font-serif text-base">{c.name}</p>
                      <p className="text-xs text-foreground/60 mt-1">
                        {c.tagline}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Products */}
            {matchedProducts.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl mb-4">
                  Products ({matchedProducts.length})
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {matchedProducts.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </div>
            )}

            {/* Articles */}
            {matchedPosts.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl mb-4">
                  Journal ({matchedPosts.length})
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {matchedPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blogs/journal/${p.slug}`}
                      className="block group bg-card p-5 border border-border/60 rounded-md hover:border-accent transition-colors"
                    >
                      <p className="text-xs text-foreground/60">
                        {p.category} · {p.readTime}
                      </p>
                      <h3 className="mt-1 font-serif text-lg group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-foreground/70 line-clamp-2">
                        {p.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </SiteShell>
  );
}
