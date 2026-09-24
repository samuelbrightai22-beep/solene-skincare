import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { faqItems } from "@/lib/site-data";

export const metadata = {
  title: "FAQ — Solène",
  description:
    "Answers to common questions about Solène orders, shipping, returns, ingredients, and subscriptions.",
};

export default function FAQPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Frequently asked
          </p>
          <h1 className="font-serif text-5xl md:text-6xl">Help & FAQ</h1>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-pretty">
            Find quick answers below. Can't find what you're looking for?{" "}
            <Link href="/pages/contact" className="text-accent hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick links */}
        <nav className="mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/60 mb-3">
            Jump to
          </p>
          <ul className="flex flex-wrap gap-2">
            {faqItems.map((cat) => (
              <li key={cat.category}>
                <a
                  href={`#${cat.category.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-sm border border-border hover:border-accent hover:text-accent transition-colors rounded-sm"
                >
                  {cat.category}
                  <ChevronRight className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-12">
          {faqItems.map((cat) => (
            <div
              key={cat.category}
              id={cat.category.toLowerCase().replace(/[^a-z]+/g, "-")}
            >
              <h2 className="font-serif text-3xl mb-6">{cat.category}</h2>
              <div className="divide-y divide-border border-y border-border">
                {cat.questions.map((qa, idx) => (
                  <details key={idx} className="group py-5">
                    <summary className="flex items-start gap-3 cursor-pointer list-none">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-accent group-open:rotate-45 transition-transform">
                        +
                      </span>
                      <span className="font-medium text-foreground/90">
                        {qa.q}
                      </span>
                    </summary>
                    <p className="mt-3 pl-8 text-sm text-foreground/70 leading-relaxed">
                      {qa.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-secondary/40 rounded-md text-center">
          <h3 className="font-serif text-2xl mb-2">Still have questions?</h3>
          <p className="text-sm text-foreground/70 mb-5 max-w-md mx-auto">
            Our team is available Monday to Friday, 9am to 6pm CET. We reply to
            every email within 24 hours.
          </p>
          <Link
            href="/pages/contact"
            className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
