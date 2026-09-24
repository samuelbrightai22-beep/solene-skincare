import Link from "next/link";
import {
  ArrowRight,
  Truck,
  Sparkles,
  Headphones,
  ShieldCheck,
  Star,
  Quote,
} from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { ProductCard } from "@/components/site/product-card";
import { ProductImage } from "@/components/site/product-image";
import {
  products,
  collections,
  testimonials,
  blogPosts,
  brandInfo,
} from "@/lib/site-data";

export default function HomePage() {
  const bestsellers = products.filter((p) => p.badge === "Bestseller").slice(0, 4);
  const newArrivals = products.filter((p) => p.badge === "New").slice(0, 4);
  const onSale = products.filter((p) => p.compareAtPrice).slice(0, 8);
  const featuredCollections = collections.slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                Cold-pressed in Lyon, France
              </span>
              <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground text-balance">
                Beauty, in its{" "}
                <em className="not-italic text-accent">slowest</em> form.
              </h1>
              <p className="mt-6 text-lg text-foreground/70 max-w-xl text-pretty">
                Solène crafts cold-pressed botanical skincare in small batches.
                Clean formulas, ethically sourced ingredients, and rituals that
                reveal your skin's natural radiance — never its redness.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                <Link
                  href="/collections/all"
                  className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto"
                >
                  Shop the Ritual
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pages/about"
                  className="inline-flex items-center justify-center gap-2 border border-foreground/20 px-8 py-4 text-sm font-medium tracking-wide text-foreground hover:bg-foreground hover:text-background transition-colors w-full sm:w-auto"
                >
                  Our Story
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-xs text-foreground/60">
                  <span className="font-medium text-foreground">4.8 / 5</span>{" "}
                  from 2,300+ reviews
                </p>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                <div className="row-span-2">
                  <ProductImage
                    shape="dropper"
                    color="#C9824F"
                    accent="#FAF6EE"
                    className="h-full"
                  />
                </div>
                <div>
                  <ProductImage
                    shape="bottle"
                    color="#E8B4BC"
                    accent="#C9824F"
                    className="h-full"
                  />
                </div>
                <div>
                  <ProductImage
                    shape="jar"
                    color="#4A5D3A"
                    accent="#FAF6EE"
                    className="h-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block bg-background px-6 py-4 shadow-lg border border-border/40 rounded-sm">
                <p className="font-serif text-2xl text-accent">10% off</p>
                <p className="text-xs text-foreground/60">your first ritual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: "Free shipping over €60",
                desc: "Across the EU and UK",
              },
              {
                icon: Sparkles,
                title: "Small-batch, fresh",
                desc: "Made every 90 days",
              },
              {
                icon: Headphones,
                title: "Real humans, 7 days",
                desc: "Skincare advice you can use",
              },
              {
                icon: ShieldCheck,
                title: "30-day open-jar returns",
                desc: "If it doesn't work, send it back",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center md:flex-row md:text-left gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-foreground/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured collections */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-2">
              Curated rituals
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Shop by collection
            </h2>
          </div>
          <Link
            href="/collections/all"
            className="hidden md:inline-flex items-center gap-1 text-sm link-underline text-foreground hover:text-accent transition-colors"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredCollections.map((collection, idx) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative block overflow-hidden rounded-md"
            >
              <div
                className="relative aspect-[4/5] w-full"
                style={{
                  backgroundColor: collection.imageAccent,
                  backgroundImage: `radial-gradient(circle at 50% 50%, ${collection.imageColor}22, transparent 60%)`,
                }}
              >
                <ProductImage
                  shape={idx % 2 === 0 ? "bottle" : "jar"}
                  color={collection.imageColor}
                  accent={collection.imageAccent}
                  className="absolute inset-0 h-full w-full rounded-none"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <p className="font-serif text-xs uppercase tracking-[0.2em] opacity-80">
                  {collection.tagline}
                </p>
                <h3 className="mt-1 font-serif text-2xl">{collection.name}</h3>
                <p className="mt-2 text-sm opacity-80 line-clamp-2">
                  {collection.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.15em] group-hover:gap-2 transition-all">
                  Discover
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-2">
                Loved by 12,000+
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">Bestsellers</h2>
            </div>
            <Link
              href="/collections/all"
              className="hidden md:inline-flex items-center gap-1 text-sm link-underline text-foreground hover:text-accent transition-colors"
            >
              Shop all
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestsellers.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="aspect-[4/5] w-full max-w-md mx-auto">
              <ProductImage
                shape="dropper"
                color="#4A5D3A"
                accent="#FAF6EE"
                className="h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 md:right-8 bg-card px-6 py-4 shadow-lg border border-border/40 max-w-[200px]">
              <p className="font-serif text-3xl text-accent">2019</p>
              <p className="text-xs text-foreground/60">
                founded in Lyon by {brandInfo.founder}
              </p>
            </div>
          </div>
          <div>
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
              The Solène ritual
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              The secret of beautiful skin is in the soil.
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 text-pretty">
              <p>
                Solène was founded in 2019 by Camille Renard, a former herbalist
                who grew up on her grandmother's lavender farm in Provence. After
                years working in Parisian skincare labs, she returned to her
                roots to create a brand that honored both science and soil —
                formulas built from cold-pressed botanicals, tested for efficacy,
                and never tested on animals.
              </p>
              <p>
                Every Solène product is made in batches of 500 in our atelier in
                Lyon. We source from farms we visit, distill in copper stills
                older than we are, and write down every ingredient by name. We
                believe skincare should work, and it should be made by people
                you could meet.
              </p>
            </div>
            <Link
              href="/pages/about"
              className="mt-8 inline-flex items-center gap-2 border border-foreground/20 px-6 py-3 text-sm font-medium tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Read our full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sale this week */}
      {onSale.length > 0 && (
        <section className="bg-accent/10 border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-2">
                  Limited time
                </p>
                <h2 className="font-serif text-4xl md:text-5xl">
                  Sale this week
                </h2>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {onSale.slice(0, 4).map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* New arrivals */}
      {newArrivals.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-2">
                Just landed
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">New arrivals</h2>
            </div>
            <Link
              href="/collections/all"
              className="hidden md:inline-flex items-center gap-1 text-sm link-underline text-foreground hover:text-accent transition-colors"
            >
              See what's new
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-2">
              In their words
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">What clients say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <figure
                key={t.name}
                className="flex flex-col bg-background/5 border border-background/10 p-6 rounded-md"
              >
                <Quote className="h-6 w-6 text-accent opacity-60" />
                <blockquote className="mt-4 flex-1 text-sm text-background/80 leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-xs text-background/60">{t.location}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </figcaption>
                <p className="mt-3 text-xs text-accent font-medium">{t.product}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-2">
              The journal
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Rituals, ingredients, sourcing
            </h2>
          </div>
          <Link
            href="/blogs/journal"
            className="hidden md:inline-flex items-center gap-1 text-sm link-underline text-foreground hover:text-accent transition-colors"
          >
            All articles
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredPosts.map((post) => (
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
                <h3 className="mt-2 font-serif text-xl group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA — Sets & rituals */}
      <section className="bg-sage-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-serif text-xs uppercase tracking-[0.2em] opacity-70 mb-3">
                Curated rituals
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-balance">
                Begin your Solène ritual with a set.
              </h2>
              <p className="mt-4 text-background/80 max-w-md text-pretty">
                Pre-built routines for every skin goal — save up to 20% versus
                buying individually. Each set is packaged in recycled paper and
                tied with linen ribbon.
              </p>
              <Link
                href="/collections/sets"
                className="mt-8 inline-flex items-center gap-2 bg-background px-8 py-4 text-sm font-medium tracking-wide text-foreground hover:bg-background/90 transition-colors"
              >
                Shop sets & rituals
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <ProductImage
                  shape="bottle"
                  color="#FAF6EE"
                  accent="#4A5D3A"
                  className="aspect-[16/5]"
                />
              </div>
              <ProductImage shape="dropper" color="#C9824F" accent="#FAF6EE" />
              <ProductImage shape="jar" color="#FAF6EE" accent="#C9824F" />
            </div>
          </div>
        </div>
      </section>

      {/* Stay in touch / Instagram */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-2">
            Stay in touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            @solene.skincare
          </h2>
          <p className="mt-3 text-sm text-foreground/70 max-w-md mx-auto">
            Tag us in your ritual. We feature our favourite customer posts every week.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products.slice(0, 8).map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group relative aspect-square overflow-hidden rounded-md"
            >
              <ProductImage
                shape={p.imageShape}
                color={p.imageColor}
                accent={p.imageAccent}
                className="absolute inset-0 h-full w-full rounded-none"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
