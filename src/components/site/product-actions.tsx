"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/site-data";
import { toast } from "sonner";
import { Check } from "lucide-react";

export function ProductActions({
  slug,
  price,
}: {
  slug: string;
  price: number;
}) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCart((s) => s.addItem);

  const handleAdd = () => {
    addItem(slug, qty);
    setAdded(true);
    toast.success("Added to cart", {
      description: `${qty} × ${formatPrice(price)}`,
      duration: 1800,
    });
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="flex items-center border border-border bg-background">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-4 py-3.5 text-foreground/70 hover:text-accent transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-12 text-center text-sm tabular-nums font-medium">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="px-4 py-3.5 text-foreground/70 hover:text-accent transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <button
          onClick={handleAdd}
          className={`flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide transition-colors ${
            added
              ? "bg-accent text-accent-foreground"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" /> Added to cart
            </>
          ) : (
            `Add to Cart — ${formatPrice(price * qty)}`
          )}
        </button>
      </div>
    </div>
  );
}
