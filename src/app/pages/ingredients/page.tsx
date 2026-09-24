import Link from "next/link";
import { Leaf, Beaker, Ban, CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { ProductImage } from "@/components/site/product-image";

export const metadata = {
  title: "Ingredients Philosophy — Solène",
  description:
    "How we choose, dose, and disclose every ingredient in Solène skincare. No synthetic fragrance, no fillers, no greenwashing.",
};

export default function IngredientsPage() {
  return (
    <SiteShell>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Our ingredients philosophy
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
            Every ingredient, on the label, in INCI, by name.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            We don't use synthetic fragrance. We don't use fillers. We don't use
            "natural" as a marketing word. Here's how we actually think about
            what goes into Solène formulas — and what stays out.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: "Botanical, always",
              desc: "Every formula starts with a plant. Cold-pressed oils, steam-distilled essential oils, herbal extracts. We never use synthetic fragrance or 'natural fragrance isolates'. When something is scented, it's scented with a real, named essential oil you can look up.",
            },
            {
              icon: Beaker,
              title: "Clinically dosed",
              desc: "Actives are used at clinically studied concentrations. Our Vitamin C serum contains 15% L-ascorbic acid — the concentration used in the clinical literature. Our bakuchiol serum contains 1.5%, the concentration shown to match retinol's effects. If it's on the label, it's working.",
            },
            {
              icon: CheckCircle2,
              title: "Honest about what's in it",
              desc: "Every ingredient is listed in INCI format on the product page and on the bottle. No 'fragrance (parfum)' hiding 30 compounds. No 'proprietary blend'. If you want to look up every ingredient, you can — and you should.",
            },
          ].map((p) => (
            <div key={p.title} className="bg-card p-6 rounded-md border border-border/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-serif text-xl">{p.title}</h2>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What we use vs never use */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
              The list
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              What we use, and what we never will
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-card p-6 rounded-md border border-border/60">
              <h3 className="font-serif text-2xl flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" /> What we use
              </h3>
              <ul className="space-y-3 text-sm text-foreground/80">
                {[
                  "Cold-pressed botanical oils (sweet almond, jojoba, camellia, rosehip, evening primrose)",
                  "Steam-distilled floral waters (Damask rose, lavender, neroli)",
                  "Clinically-studied actives (L-ascorbic acid, bakuchiol, niacinamide, peptides, hyaluronic acid)",
                  "Plant-derived humectants (vegetable glycerin, sodium PCA, panthenol)",
                  "Mineral clays (Australian pink clay, kaolin, bentonite)",
                  "Naturally-derived preservatives (sodium benzoate, potassium sorbate, phenoxyethanol at <1%)",
                  "Cold-processed shea butter from a women's cooperative in Burkina Faso",
                  "Raw Manuka honey and propolis from a small French apiary",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-6 rounded-md border border-border/60">
              <h3 className="font-serif text-2xl flex items-center gap-2 mb-4">
                <Ban className="h-6 w-6 text-accent" /> What we never use
              </h3>
              <ul className="space-y-3 text-sm text-foreground/80">
                {[
                  "Synthetic fragrance (parfum) — the word 'fragrance' on a label can hide up to 100 undisclosed compounds",
                  "Parabens (methylparaben, propylparaben, etc.)",
                  "Phthalates (often hidden in synthetic fragrance)",
                  "Sodium lauryl sulfate (SLS) and sodium laureth sulfate (SLES)",
                  "Mineral oil, petrolatum, and paraffin",
                  "PEGs (polyethylene glycols)",
                  "BHA and BHT (synthetic preservatives)",
                  "Oxybenzone and octinoxate (chemical UV filters)",
                  "Animal-derived ingredients (with the exception of honey and propolis in two products, clearly labeled)",
                  "Ingredients tested on animals, ever — Leaping Bunny certified",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight: key actives */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Active spotlight
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            The actives we use, and why
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "L-Ascorbic Acid (Vitamin C)",
              conc: "15%",
              in: "Vitamin C Brightening Serum",
              why: "The purest, most biologically active form of vitamin C. At 15% and pH 3.5, it stimulates collagen synthesis, fades hyperpigmentation, and doubles the photoprotective effect of SPF.",
            },
            {
              name: "Bakuchiol",
              conc: "1.5%",
              in: "Bakuchiol Renewal Serum",
              why: "A plant-derived retinol alternative. Clinically shown to produce comparable improvements in fine lines and pigmentation, without retinol's redness, peeling, or sun sensitivity. Safe in pregnancy.",
            },
            {
              name: "Niacinamide (Vitamin B3)",
              conc: "10%",
              in: "Niacinamide Pore Refiner",
              why: "One of the most studied and well-tolerated actives. Reduces pore appearance, regulates sebum, fades post-acne hyperpigmentation, and strengthens the skin barrier over time.",
            },
            {
              name: "Sodium Hyaluronate",
              conc: "Multi-weight",
              in: "Hyaluronic Hydra Serum",
              why: "The salt form of hyaluronic acid. We use three molecular weights so hydration reaches every layer — high weight on the surface, medium in the epidermis, low deeper down.",
            },
            {
              name: "Peptide Complex (Matrixyl 3000)",
              conc: "Clinical %",
              in: "Overnight Recovery Balm",
              why: "A patented blend of two peptides (palmitoyl tripeptide-5 and palmitoyl tetrapeptide-7) clinically shown to stimulate collagen synthesis and reduce wrinkle depth.",
            },
            {
              name: "Papain & Bromelain",
              conc: "Enzyme-active",
              in: "Enzyme Papaya Peel",
              why: "Proteolytic enzymes from papaya and pineapple that dissolve the protein bonds holding dead skin cells to the surface — gently, without the micro-tears of physical scrubs.",
            },
          ].map((active) => (
            <div
              key={active.name}
              className="bg-card p-5 rounded-md border border-border/60"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-lg leading-tight">{active.name}</h3>
                <span className="bg-accent/15 text-accent px-2 py-0.5 text-xs font-medium whitespace-nowrap">
                  {active.conc}
                </span>
              </div>
              <p className="mt-2 text-xs text-foreground/60">
                In: <span className="text-foreground/80">{active.in}</span>
              </p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                {active.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
                Where it comes from
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-balance">
                Sourced from farms we visit, not suppliers we don't.
              </h2>
              <div className="mt-6 space-y-4 text-background/80 text-pretty">
                <p>
                  Every botanical ingredient in Solène skincare comes from a
                  named farm, distillery, or cooperative we visit in person at
                  least once a year. We can tell you which valley the lavender
                  grew in, which women's cooperative pressed the shea butter,
                  and which apiary produced the honey. Sourcing isn't a
                  marketing exercise for us; it's the only way we know what's
                  in the bottle.
                </p>
                <p>
                  Our key partners include: a family-run lavender farm in
                  Haute-Provence (lavender essential oil); a women's shea
                  cooperative in Burkina Faso (unrefined shea butter); a
                  small apiary in the South of France (Manuka-equivalent
                  honey and propolis); a Damask rose distillery in the
                  Valley of Roses, Bulgaria (rosewater and rose oil); and an
                  olive grower in Andalusia, Spain (squalane).
                </p>
              </div>
              <Link
                href="/pages/sustainability"
                className="mt-6 inline-flex items-center gap-2 text-accent hover:underline"
              >
                Read about our sustainability commitments
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[16/9]">
                <ProductImage
                  shape="bottle"
                  color="#4A5D3A"
                  accent="#FAF6EE"
                  className="h-full"
                />
              </div>
              <ProductImage shape="jar" color="#C9824F" accent="#FAF6EE" />
              <ProductImage shape="dropper" color="#A38B5C" accent="#FAF6EE" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          Questions about an ingredient?
        </h2>
        <p className="text-foreground/70 max-w-md mx-auto text-pretty">
          Write to us. We'll tell you exactly what's in the bottle, where it
          came from, and why we chose it. No marketing speak.
        </p>
        <Link
          href="/pages/contact"
          className="mt-6 inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Ask us anything
        </Link>
      </section>
    </SiteShell>
  );
}
