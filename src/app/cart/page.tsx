"use client";

import Link from "next/link";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { ProductImage } from "@/components/site/product-image";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/site-data";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();
  const total = useCart((s) => s.total());
  const count = useCart((s) => s.count());
  const shipping = total >= 60 ? 0 : total > 0 ? 5.5 : 0;
  const grandTotal = total + shipping;

  return (
    <SiteShell>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl">Your Cart</h1>
          <p className="mt-2 text-sm text-foreground/60">
            {count > 0 ? `${count} item${count === 1 ? "" : "s"}` : "Empty"}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <ShoppingBag className="h-12 w-12 text-foreground/30" />
            <h2 className="mt-4 font-serif text-3xl">Your cart is empty</h2>
            <p className="mt-2 text-foreground/70 max-w-md text-pretty">
              Discover our botanical rituals — small-batch skincare, made with intention.
            </p>
            <Link
              href="/collections/all"
              className="mt-6 inline-flex items-center justify-center bg-primary px-8 py-3 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Shop All
            </Link>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Items */}
            <div className="lg:col-span-2">
              <ul className="divide-y divide-border border-y border-border">
                {items.map((item) => (
                  <li key={item.slug} className="py-6 flex gap-4">
                    <Link
                      href={`/products/${item.slug}`}
                      className="w-24 sm:w-28 shrink-0"
                    >
                      <ProductImage
                        shape={item.imageShape}
                        color={item.imageColor}
                        accent={item.imageAccent}
                      />
                    </Link>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between gap-2">
                        <Link
                          href={`/products/${item.slug}`}
                          className="font-serif text-lg hover:text-accent transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.slug)}
                          className="text-foreground/50 hover:text-accent"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-foreground/60 mt-1">
                        {item.size}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.quantity - 1)
                            }
                            className="p-2 text-foreground/70 hover:text-accent"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-10 text-center text-sm tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.quantity + 1)
                            }
                            className="p-2 text-foreground/70 hover:text-accent"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-between">
                <Link
                  href="/collections/all"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  ← Continue shopping
                </Link>
                <button
                  onClick={() => useCart.getState().clearCart()}
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  Clear cart
                </button>
              </div>
            </div>

            {/* Summary */}
            <aside className="lg:sticky lg:top-24 self-start bg-card p-6 border border-border/60 rounded-md">
              <h2 className="font-serif text-xl mb-4">Order summary</h2>
              <dl className="space-y-2 text-sm">
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
                {total < 60 && total > 0 && (
                  <p className="text-xs text-foreground/60 bg-secondary/50 p-2 rounded">
                    Add {formatPrice(60 - total)} more for free shipping.
                  </p>
                )}
              </dl>
              <div className="mt-4 pt-4 border-t border-border flex justify-between font-serif text-xl">
                <span>Total</span>
                <span>{formatPrice(grandTotal)}</span>
              </div>
              <Link
                href="/checkout"
                className="mt-6 flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Checkout
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-xs text-foreground/60 text-center">
                Taxes calculated at checkout. Free returns within 30 days.
              </p>
            </aside>
          </div>
        )}
      </section>
    </SiteShell>
  );
}
