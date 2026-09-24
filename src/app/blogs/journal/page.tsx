import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { ProductImage } from "@/components/site/product-image";
import { blogPosts } from "@/lib/site-data";

export const metadata = {
  title: "Journal — Solène",
  description:
    "Rituals, ingredient stories, sourcing notes, and the founder's words from the Solène journal.",
};

export default function JournalPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
            The Solène journal
          </p>
          <h1 className="font-serif text-5xl md:text-6xl">Rituals, in writing</h1>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-pretty">
            Slow skincare, ingredient stories, sourcing notes, and the founder's
            words. We publish every other week.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href={`/blogs/journal/${featured.slug}`}
          className="group grid gap-8 lg:grid-cols-2 items-center"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-md">
            <ProductImage
              shape="bottle"
              color={featured.imageColor}
              accent={featured.imageAccent}
              className="h-full"
            />
          </div>
          <div>
            <span className="inline-block bg-accent/15 text-accent px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] mb-3">
              Featured · {featured.category}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight group-hover:text-accent transition-colors text-balance">
              {featured.title}
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed text-pretty">
              {featured.excerpt}
            </p>
            <p className="mt-6 text-xs text-foreground/60">
              {new Date(featured.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {featured.readTime} · by {featured.author}
            </p>
          </div>
        </Link>
      </section>

      {/* Rest of posts */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="font-serif text-3xl mb-8">All articles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/journal/${post.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <ProductImage
                  shape="bottle"
                  color={post.imageColor}
                  accent={post.imageAccent}
                  className="absolute inset-0 h-full w-full rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em]">
                  {post.category}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-xs text-foreground/60">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  · {post.readTime}
                </p>
                <h3 className="mt-2 font-serif text-xl group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
