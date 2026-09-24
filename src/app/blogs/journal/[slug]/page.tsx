import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { ProductImage } from "@/components/site/product-image";
import { Newsletter } from "@/components/site/newsletter";
import { blogPosts, getBlogPost } from "@/lib/site-data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Journal — Solène" };
  return {
    title: `${post.title} — Solène Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <SiteShell>
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-foreground/60 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            href="/blogs/journal"
            className="hover:text-accent transition-colors"
          >
            Journal
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground line-clamp-1">{post.title}</span>
        </nav>
      </div>

      {/* Header */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <span className="inline-block bg-accent/15 text-accent px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] mb-4">
          {post.category}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
          {post.title}
        </h1>
        <p className="mt-5 text-lg text-foreground/70 text-pretty">{post.excerpt}</p>
        <div className="mt-6 flex items-center gap-3 text-sm text-foreground/60 border-y border-border py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary font-serif text-lg">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-foreground">{post.author}</p>
            <p className="text-xs">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {post.readTime}
            </p>
          </div>
        </div>

        {/* Hero image */}
        <div className="mt-8 aspect-[16/9] overflow-hidden rounded-md">
          <ProductImage
            shape="bottle"
            color={post.imageColor}
            accent={post.imageAccent}
            className="h-full"
          />
        </div>

        {/* Body */}
        <div className="mt-10 space-y-8">
          {post.content.map((section, idx) => (
            <div key={idx}>
              {section.heading && (
                <h2 className="font-serif text-2xl md:text-3xl mt-10 mb-4 first:mt-0">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-4">
                {section.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-foreground/85 leading-relaxed text-pretty"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer of article */}
        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
          <Link
            href="/blogs/journal"
            className="inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to journal
          </Link>
          <Link
            href="/collections/all"
            className="inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-accent transition-colors"
          >
            Shop the ritual →
          </Link>
        </div>
      </article>

      {/* Related */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-serif text-3xl mb-8">Read next</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blogs/journal/${p.slug}`}
                className="group grid grid-cols-[120px_1fr] gap-4 items-center"
              >
                <div className="aspect-square">
                  <ProductImage
                    shape="bottle"
                    color={p.imageColor}
                    accent={p.imageAccent}
                  />
                </div>
                <div>
                  <p className="text-xs text-foreground/60">
                    {p.category} · {p.readTime}
                  </p>
                  <h3 className="mt-1 font-serif text-lg group-hover:text-accent transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 line-clamp-2">
                    {p.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <Newsletter />
      </section>
    </SiteShell>
  );
}
