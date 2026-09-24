import Link from "next/link";
import { Recycle, Leaf, Truck, Globe2, Droplet, Package } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { ProductImage } from "@/components/site/product-image";

export const metadata = {
  title: "Sustainability — Solène",
  description:
    "How Solène approaches sustainability: recyclable packaging, carbon-offset shipping, ethical sourcing, and small-batch production.",
};

export default function SustainabilityPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="bg-sage-gradient text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-background/70 mb-3">
            Sustainability
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
            Made small. Made to last. Made with care for what's outside the bottle.
          </h1>
          <p className="mt-6 text-lg text-background/80 max-w-2xl mx-auto text-pretty">
            We're a small skincare brand, and that means we can choose
            sustainability over scale at every step — from how we source, to how
            we package, to how we ship.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Recycle,
              title: "Recyclable packaging",
              desc: "Every Solène bottle and jar is made from recyclable glass or PET, with aluminum or PP lids. Our outer packaging is recycled paper, tied with linen ribbon — no plastic, ever. Our shipping boxes are made from 100% post-consumer recycled cardboard and ship with paper tape.",
            },
            {
              icon: Leaf,
              title: "Vegan & cruelty-free",
              desc: "All Solène formulas are 100% vegan — no animal-derived ingredients, with the exception of honey and propolis in two clearly-labeled products. We are Leaping Bunny certified, never test on animals, and don't work with any supplier who does.",
            },
            {
              icon: Truck,
              title: "Carbon-offset shipping",
              desc: "Every Solène shipment is carbon-offset at no extra cost to you. We calculate the carbon footprint of each order based on weight and distance, and purchase verified offsets through a partnership with Climeworks — direct air capture, not tree-planting credits.",
            },
            {
              icon: Globe2,
              title: "Ethical sourcing",
              desc: "Every botanical ingredient comes from a named farm, distillery, or cooperative we visit annually. Our shea butter is sourced through a women's cooperative in Burkina Faso that pays fair-trade wages. Our lavender comes from a family farm in Provence we've worked with since 2020.",
            },
            {
              icon: Droplet,
              title: "Water-conscious formulas",
              desc: "Several Solène formulas are waterless — our body oils, body polish, and bakuchiol serum are built on cold-pressed botanical oils instead. This reduces water use in production and means the products don't require broad-spectrum preservatives.",
            },
            {
              icon: Package,
              title: "Refill program (in pilot)",
              desc: "We're piloting a refill program for our three best-selling products — Rosewater Cream Cleanser, Daily Glow Face Cream, and Hyaluronic Hydra Serum — in Lyon and Paris. Customers can return empty bottles to our atelier for a 15% refill credit. We hope to expand it EU-wide by 2026.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="bg-card p-6 rounded-md border border-border/60"
            >
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

      {/* Statistics / commitments */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
              By the numbers
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              What sustainability looks like for us
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { stat: "500", label: "Bottles per batch — never larger" },
              { stat: "100%", label: "Recyclable primary packaging" },
              { stat: "0", label: "Synthetic fragrance, ever" },
              { stat: "40+", label: "Countries we ship to, carbon-offset" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-serif text-5xl md:text-6xl text-accent">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm text-foreground/70 max-w-[180px] mx-auto">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest about what we don't do */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
              Honest about limits
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              What we're not doing yet (and why)
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 text-pretty">
              <p>
                Sustainability isn't a destination, it's a process. Here's what
                we're not yet doing — and what we're working on.
              </p>
              <p>
                <strong>We're not yet B-Corp certified.</strong> We're in the
                process — the audit takes 12 to 18 months, and we expect to be
                certified by mid-2026.
              </p>
              <p>
                <strong>Our refill program is small.</strong> It's only available
                in Lyon and Paris right now. Scaling it requires reverse
                logistics we don't yet have. We're working on it.
              </p>
              <p>
                <strong>Some of our lids are still plastic (PP).</strong> We
                haven't found an aluminum alternative that doesn't leak or
                corrode for our dropper bottles. We're testing alternatives and
                hope to switch by end of 2026.
              </p>
              <p>
                <strong>Our international shipping still produces carbon.</strong>{" "}
                Carbon offsets are not a substitute for not emitting — we know
                that. We're investigating regional fulfilment centers to
                reduce shipping distances, with the goal of halving our
                international shipping emissions by 2027.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square">
              <ProductImage shape="bottle" color="#4A5D3A" accent="#FAF6EE" />
            </div>
            <div className="aspect-square mt-8">
              <ProductImage shape="dropper" color="#C9824F" accent="#FAF6EE" />
            </div>
            <div className="aspect-square -mt-4">
              <ProductImage shape="jar" color="#8C9A7B" accent="#FAF6EE" />
            </div>
            <div className="aspect-square">
              <ProductImage shape="tube" color="#A38B5C" accent="#FAF6EE" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Have a question about our sustainability work?
          </h2>
          <p className="text-foreground/70 max-w-md mx-auto text-pretty">
            We publish an annual sustainability report — and we answer every
            email ourselves.
          </p>
          <Link
            href="/pages/contact"
            className="mt-6 inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
