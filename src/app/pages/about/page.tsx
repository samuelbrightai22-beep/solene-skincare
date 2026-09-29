import Link from "next/link";
import { ArrowRight, Leaf, Heart, Beaker, Globe2 } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { RealImage } from "@/components/site/real-image";
import { brandInfo } from "@/lib/site-data";

export const metadata = {
  title: "Our Story — Solène",
  description:
    "Solène was founded in 2019 by Camille Renard, a former herbalist from Provence, to make cold-pressed botanical skincare in small batches.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Our story
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
            We make skincare the slow way, because the slow way works.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Solène was founded in Lyon in 2019 by {brandInfo.founder}, a former
            herbalist who grew up on her grandmother's lavender farm in Provence.
            After years in Parisian skincare labs, she returned to her roots —
            and to the soil.
          </p>
        </div>
      </section>

      {/* Founder image + story */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="aspect-[4/5] max-w-md mx-auto">
              <RealImage
                src="/images/about-founder/1.jpg"
                alt="Camille Renard, founder of Solène"
                shape="dropper"
                color="#4A5D3A"
                accent="#FAF6EE"
                className="h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-2 md:right-6 bg-card px-6 py-4 shadow-lg border border-border/40">
              <p className="font-serif text-lg">{brandInfo.founder}</p>
              <p className="text-xs text-foreground/60">Founder & formulator</p>
            </div>
          </div>
          <div className="space-y-6 text-foreground/80 text-pretty">
            <p>
              I grew up on a lavender farm in Haute-Provence. My grandmother kept
              a still in the back of the barn — a copper pot, older than she was,
              that she used to distill essential oil from the rows of lavender
              that ran the length of the property. I didn't know it then, but
              that still was my first skincare lab.
            </p>
            <p>
              I left Provence at eighteen to study chemistry in Lyon, and from
              there I went to Paris, where I spent six years formulating for two
              of the largest skincare brands in the world. The work was
              interesting. The products were not. We made them in batches of
              100,000, with refined oils that lasted two years on a warehouse
              shelf, and we called them "natural" because they contained a
              botanical extract at 0.1%.
            </p>
            <p>
              In 2019, I left. I went back to Provence, back to my grandmother's
              still, and started making skincare the way she made lavender
              essential oil — in small batches, with ingredients I could name,
              for people I could meet. I named the brand Solène, after the Latin
              for sun and the French feminine suffix, because I wanted to make
              skincare that helped skin do what skin does naturally: glow.
            </p>
            <p>
              Six years later, we're still small. We still make in batches of
              500. We still visit every farm we source from. And we still believe
              that skincare should work, and that the way it's made matters as
              much as what's in it.
            </p>
            <p className="font-serif text-xl italic text-foreground">
              — {brandInfo.founder}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
              What we believe
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">Our values</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Leaf,
                title: "Botanical, always",
                desc: "Every formula starts with a plant. We never use synthetic fragrance, and we list every essential oil by name on the label.",
              },
              {
                icon: Beaker,
                title: "Clinically dosed",
                desc: "Actives are used at clinically studied concentrations, never at 0.1% for marketing. If it's on the label, it's working.",
              },
              {
                icon: Heart,
                title: "Made by people",
                desc: "Every batch is mixed by hand in our atelier in Lyon. We could scale; we won't. Small batches keep the formulas honest.",
              },
              {
                icon: Globe2,
                title: "Sourced with care",
                desc: "We visit every farm we work with. Our lavender comes from one farm in Provence; our shea from a cooperative in Burkina Faso.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-card border border-border/60">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-serif text-xl">{value.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">
          How we got here
        </h2>
        <div className="space-y-8">
          {[
            {
              year: "2019",
              title: "Solène is founded",
              desc: "Camille leaves her Paris lab job, moves back to Lyon, and starts mixing the first Solène formula — our Rosewater Cream Cleanser — in a rented kitchen.",
            },
            {
              year: "2020",
              title: "Our first partnership",
              desc: "We start sourcing shea butter from a women's cooperative in Burkina Faso, a partnership that continues today. Our Lavender & Shea Hand Cream launches.",
            },
            {
              year: "2022",
              title: "The atelier opens",
              desc: "We move into our first dedicated atelier in the Croix-Rousse neighborhood of Lyon, with space for both production and our small lab.",
            },
            {
              year: "2023",
              title: "Leaping Bunny certified",
              desc: "Solène is certified cruelty-free by Leaping Bunny. We also reformulate every product to be 100% vegan.",
            },
            {
              year: "2024",
              title: "The Journal launches",
              desc: "We start publishing our ingredients research, sourcing stories, and ritual guides — because transparency is the point.",
            },
            {
              year: "2025",
              title: "International shipping",
              desc: "We begin shipping to over 40 countries worldwide, with carbon-offset shipping on every order.",
            },
          ].map((item, idx) => (
            <div
              key={item.year}
              className="grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-6"
            >
              <div className="text-right">
                <p className="font-serif text-2xl text-accent">{item.year}</p>
              </div>
              <div className="border-l-2 border-border pl-6 pb-4 relative">
                <div className="absolute left-[-7px] top-2 h-3 w-3 rounded-full bg-accent" />
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage-gradient text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-balance">
            Begin your Solène ritual.
          </h2>
          <p className="mt-4 text-background/80 max-w-md mx-auto text-pretty">
            Cold-pressed botanical skincare, made in small batches in Lyon.
          </p>
          <Link
            href="/collections/all"
            className="mt-8 inline-flex items-center gap-2 bg-background px-8 py-4 text-sm font-medium tracking-wide text-foreground hover:bg-background/90 transition-colors"
          >
            Shop the collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
