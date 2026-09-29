"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, Check } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { RealImage } from "@/components/site/real-image";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/site-data";
import { toast } from "sonner";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const total = useCart((s) => s.total());
  const [step, setStep] = useState<"info" | "payment" | "done">("info");
  const [placed, setPlaced] = useState(false);

  const shipping = total >= 60 ? 0 : total > 0 ? 5.5 : 0;
  const tax = Math.round(total * 0.2 * 100) / 100; // 20% VAT
  const grandTotal = total + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "info") {
      setStep("payment");
      return;
    }
    if (step === "payment") {
      setPlaced(true);
      setStep("done");
      toast.success("Order placed!", {
        description: "Confirmation #SOL-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
        duration: 6000,
      });
      setTimeout(() => {
        clearCart();
      }, 500);
      return;
    }
  };

  if (items.length === 0 && !placed) {
    return (
      <SiteShell>
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="font-serif text-4xl mb-4">Your cart is empty</h1>
          <p className="text-foreground/70 mb-8 max-w-md mx-auto text-pretty">
            You'll need to add something to your cart before checking out.
          </p>
          <Link
            href="/collections/all"
            className="inline-flex items-center justify-center bg-primary px-8 py-3 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Shop the collection
          </Link>
        </section>
      </SiteShell>
    );
  }

  if (placed) {
    return (
      <SiteShell>
        <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl">
            Thank you for your order
          </h1>
          <p className="mt-4 text-foreground/70 max-w-md mx-auto text-pretty">
            We've sent a confirmation email with your order details and tracking
            link. Your Solène ritual will ship within 24 hours from our atelier
            in Lyon.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
            <div className="bg-card p-4 border border-border/60 rounded-md">
              <p className="text-xs text-foreground/60">Dispatch</p>
              <p className="font-medium mt-1">Within 24 hours</p>
            </div>
            <div className="bg-card p-4 border border-border/60 rounded-md">
              <p className="text-xs text-foreground/60">Delivery</p>
              <p className="font-medium mt-1">3–5 business days</p>
            </div>
            <div className="bg-card p-4 border border-border/60 rounded-md">
              <p className="text-xs text-foreground/60">Carbon-offset</p>
              <p className="font-medium mt-1">Always</p>
            </div>
          </div>
          <Link
            href="/collections/all"
            className="mt-8 inline-flex items-center justify-center bg-primary px-8 py-3 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Continue shopping
          </Link>
        </section>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-serif text-3xl md:text-4xl">Checkout</h1>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-foreground/60">
            <Lock className="h-3 w-3" />
            Secure checkout — your information is encrypted
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact */}
            <fieldset className="space-y-3">
              <legend className="font-serif text-xl mb-3">Contact</legend>
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
              />
            </fieldset>

            {/* Shipping address */}
            <fieldset className="space-y-3">
              <legend className="font-serif text-xl mb-3">Shipping address</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="First name"
                  className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
              </div>
              <input
                type="text"
                required
                placeholder="Address"
                className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
              />
              <div className="grid gap-3 sm:grid-cols-3">
                <input
                  type="text"
                  required
                  placeholder="Postal code"
                  className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
                <input
                  type="text"
                  required
                  placeholder="City"
                  className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
                <input
                  type="text"
                  required
                  placeholder="Country"
                  defaultValue="France"
                  className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone (for delivery)"
                className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
              />
            </fieldset>

            {/* Shipping method */}
            <fieldset className="space-y-3">
              <legend className="font-serif text-xl mb-3">Shipping method</legend>
              <label className="flex items-center gap-3 border border-border p-3 cursor-pointer hover:border-accent transition-colors">
                <input
                  type="radio"
                  name="shipping"
                  defaultChecked
                  className="accent-primary"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">Standard (3–5 business days)</p>
                  <p className="text-xs text-foreground/60">Carbon-offset</p>
                </div>
                <span className="text-sm font-medium">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </span>
              </label>
              <label className="flex items-center gap-3 border border-border p-3 cursor-pointer hover:border-accent transition-colors">
                <input
                  type="radio"
                  name="shipping"
                  className="accent-primary"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">Express (1–2 business days)</p>
                  <p className="text-xs text-foreground/60">Carbon-offset · DHL Express</p>
                </div>
                <span className="text-sm font-medium">€18</span>
              </label>
            </fieldset>

            {/* Payment */}
            {step === "payment" && (
              <fieldset className="space-y-3">
                <legend className="font-serif text-xl mb-3">Payment</legend>
                <div className="flex items-center gap-2 text-xs text-foreground/60 mb-2">
                  <ShieldCheck className="h-3 w-3" /> All transactions are encrypted.
                  We never store your card details.
                </div>
                <input
                  type="text"
                  required
                  placeholder="Card number"
                  className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="MM / YY"
                    className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  />
                  <input
                    type="text"
                    required
                    placeholder="CVC"
                    className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  />
                  <input
                    type="text"
                    placeholder="ZIP"
                    className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  />
                </div>
              </fieldset>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
            >
              {step === "info"
                ? "Continue to payment"
                : `Place order — ${formatPrice(grandTotal)}`}
            </button>

            <p className="text-xs text-foreground/60 text-center">
              By placing your order, you agree to our{" "}
              <Link href="/pages/faq" className="text-accent hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/pages/faq" className="text-accent hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>

          {/* Summary */}
          <aside className="bg-card p-6 border border-border/60 rounded-md self-start">
            <h2 className="font-serif text-xl mb-4">Order summary</h2>
            <ul className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-3">
                  <div className="w-16 shrink-0">
                    <RealImage
                      src={`/images/${item.slug}/1.jpg`}
                      alt={item.name}
                      shape={item.imageShape}
                      color={item.imageColor}
                      accent={item.imageAccent}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-tight">{item.name}</p>
                    <p className="text-xs text-foreground/60">{item.size}</p>
                    <p className="text-xs text-foreground/60">Qty {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>
            <dl className="mt-4 pt-4 border-t border-border space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-foreground/70">Subtotal</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-foreground/70">Shipping</dt>
                <dd>
                  {shipping === 0 ? (
                    <span className="text-primary">Free</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-foreground/70">VAT (20%)</dt>
                <dd>{formatPrice(tax)}</dd>
              </div>
            </dl>
            <div className="mt-4 pt-4 border-t border-border flex justify-between font-serif text-xl">
              <span>Total</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
