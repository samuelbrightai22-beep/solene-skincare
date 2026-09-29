"use client";

import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/site-data";
import { RealImage } from "./real-image";

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, updateQuantity, removeItem } = useCart();
  const total = useCart((s) => s.total());

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Cart"
    >
      <div
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button
            className="p-2 text-foreground hover:text-accent"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <ShoppingBag className="h-10 w-10 text-foreground/30" />
            <p className="font-serif text-xl">Your cart is empty</p>
            <p className="text-sm text-foreground/60 max-w-xs">
              Discover our botanical rituals — small-batch skincare, made with intention.
            </p>
            <Link
              href="/collections/all"
              onClick={onClose}
              className="mt-2 inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Shop All
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li key={item.slug} className="flex gap-4">
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={onClose}
                      className="block w-20 shrink-0"
                    >
                      <RealImage
                        src={`/images/${item.slug}/1.jpg`}
                        alt={item.name}
                        shape={item.imageShape}
                        color={item.imageColor}
                        accent={item.imageAccent}
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <Link
                          href={`/products/${item.slug}`}
                          onClick={onClose}
                          className="font-serif text-base hover:text-accent transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.slug)}
                          className="text-xs text-foreground/50 hover:text-accent"
                          aria-label={`Remove ${item.name}`}
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-xs text-foreground/60">{item.size}</p>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.quantity - 1)
                            }
                            className="p-1.5 text-foreground/70 hover:text-accent"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-8 text-center text-sm tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.quantity + 1)
                            }
                            className="p-1.5 text-foreground/70 hover:text-accent"
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
            </div>

            <div className="border-t border-border px-5 py-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-foreground/70">Subtotal</span>
                <span className="font-serif text-lg">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-foreground/60 mb-3">
                Shipping & taxes calculated at checkout.
              </p>
              <Link
                href="/checkout"
                onClick={onClose}
                className="block w-full bg-primary px-6 py-3.5 text-center text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Checkout
              </Link>
              <Link
                href="/cart"
                onClick={onClose}
                className="mt-2 block w-full text-center text-sm text-foreground/70 hover:text-accent transition-colors"
              >
                View full cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
