import Link from "next/link";
import { Truck, RefreshCw, Package, MapPin, Globe2 } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "Shipping & Returns — Solène",
  description:
    "Free EU shipping over €60. 30-day open-jar returns. International shipping to 40+ countries.",
};

export default function ShippingReturnsPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Customer care
          </p>
          <h1 className="font-serif text-5xl md:text-6xl">
            Shipping & Returns
          </h1>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-pretty">
            Transparent policies, no surprises. Free EU shipping over €60, and
            30-day open-jar returns on every product.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick facts */}
        <div className="grid gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Truck,
              title: "Free EU shipping",
              desc: "On orders over €60",
            },
            {
              icon: Package,
              title: "Dispatched in 24h",
              desc: "Monday to Friday, from Lyon",
            },
            {
              icon: RefreshCw,
              title: "30-day returns",
              desc: "Even on opened products",
            },
            {
              icon: Globe2,
              title: "40+ countries",
              desc: "International shipping available",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 bg-card border border-border/60 rounded-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="mt-3 font-medium text-sm">{item.title}</p>
              <p className="text-xs text-foreground/60 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Detail */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Shipping */}
          <div>
            <h2 className="font-serif text-3xl mb-6 flex items-center gap-2">
              <Truck className="h-7 w-7 text-accent" /> Shipping
            </h2>
            <div className="space-y-6 text-sm text-foreground/80 text-pretty">
              <div>
                <h3 className="font-medium text-foreground mb-2">Where we ship</h3>
                <p>
                  We ship to over 40 countries worldwide, including the entire
                  EU, the UK, USA, Canada, Australia, New Zealand, Japan,
                  Singapore, and the UAE. If you don't see your country at
                  checkout, write to us at{" "}
                  <a
                    href="mailto:hello@solene.skincare"
                    className="text-accent hover:underline"
                  >
                    hello@solene.skincare
                  </a>{" "}
                  and we'll do our best to add it.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  Shipping rates & times
                </h3>
                <table className="w-full text-sm border-collapse">
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 pr-4">EU standard (3–5 days)</td>
                      <td className="py-3 text-right">
                        €5.50 — free over €60
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">EU express (1–2 days)</td>
                      <td className="py-3 text-right">€18</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">UK standard (5–7 days)</td>
                      <td className="py-3 text-right">
                        €9 — free over €60
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">USA & Canada (7–14 days)</td>
                      <td className="py-3 text-right">€15</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Australia & NZ (10–14 days)</td>
                      <td className="py-3 text-right">€22</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Rest of world (10–21 days)</td>
                      <td className="py-3 text-right">From €18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  Dispatch & tracking
                </h3>
                <p>
                  Orders are dispatched within 24 hours of being placed,
                  Monday to Friday. You'll receive a tracking number by email as
                  soon as your package leaves our atelier in Lyon. We use carbon-offset
                  shipping on every order, at no extra cost to you.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  Customs & duties
                </h3>
                <p>
                  For destinations outside the EU, customs duties and import
                  taxes may apply. Where possible, these are calculated and shown
                  at checkout (DDP — delivered duty paid). For destinations where
                  DDP isn't available, duties are payable on delivery. Please
                  check your local regulations before ordering.
                </p>
              </div>
            </div>
          </div>

          {/* Returns */}
          <div>
            <h2 className="font-serif text-3xl mb-6 flex items-center gap-2">
              <RefreshCw className="h-7 w-7 text-accent" /> Returns
            </h2>
            <div className="space-y-6 text-sm text-foreground/80 text-pretty">
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  Our 30-day open-jar policy
                </h3>
                <p>
                  We accept returns on unopened products within 30 days of
                  delivery for a full refund. But we also accept returns on
                  opened products, within the same 30 days, for store credit. If
                  a product didn't work for your skin, we'd rather you find one
                  that does. No questions asked.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  How to start a return
                </h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Log in to your account and find the order you'd like to
                    return.
                  </li>
                  <li>
                    Click "Start a return" and select the items and reason.
                  </li>
                  <li>
                    You'll receive a prepaid return label by email within 24
                    hours (free for EU customers; €8 deducted from international
                    refunds).
                  </li>
                  <li>
                    Drop the package at your nearest post office — no need to
                    repackage it yourself if you still have the original box.
                  </li>
                  <li>
                    Refunds are processed within 5 business days of us receiving
                    the return. You'll get an email confirmation.
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Exchanges</h3>
                <p>
                  We don't offer direct exchanges. To exchange a product, please
                  return the original for store credit and place a new order for
                  the product you'd like. This is faster than waiting for an
                  exchange to process.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  Damaged or incorrect items
                </h3>
                <p>
                  If your product arrived damaged or you received the wrong
                  item, please send a photo to{" "}
                  <a
                    href="mailto:hello@solene.skincare"
                    className="text-accent hover:underline"
                  >
                    hello@solene.skincare
                  </a>{" "}
                  within 7 days of delivery. We'll send a replacement immediately,
                  no return required.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  Subscriptions
                </h3>
                <p>
                  Subscriptions can be paused, skipped, or cancelled at any time
                  from your account dashboard — no email required, no questions
                  asked. Cancellations take effect on your next scheduled
                  shipment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-secondary/40 rounded-md text-center">
          <h3 className="font-serif text-2xl mb-2">Need help with an order?</h3>
          <p className="text-sm text-foreground/70 mb-5 max-w-md mx-auto">
            Our customer care team is available Monday to Friday, 9am to 6pm CET.
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
