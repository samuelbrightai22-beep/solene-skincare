"use client";

import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function AddToCartButton({
  slug,
  variant = "default",
  quantity = 1,
  className,
  label = "Add to Cart",
}: {
  slug: string;
  variant?: "default" | "compact";
  quantity?: number;
  className?: string;
  label?: string;
}) {
  const addItem = useCart((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(slug, quantity);
    setAdded(true);
    toast.success("Added to cart", {
      duration: 1800,
    });
    setTimeout(() => setAdded(false), 1800);
  };

  if (variant === "compact") {
    return (
      <button
        onClick={handleAdd}
        className={cn(
          "flex w-full items-center justify-center gap-1.5 border border-border bg-background px-4 py-2.5 text-xs font-medium tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background",
          added && "border-accent bg-accent/10 text-accent",
          className,
        )}
        aria-label={`Add to cart: ${slug}`}
      >
        {added ? (
          <>
            <Check className="h-3.5 w-3.5" /> Added
          </>
        ) : (
          <>
            <Plus className="h-3.5 w-3.5" /> Add to Cart
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      className={cn(
        "flex w-full items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90",
        added && "bg-accent text-accent-foreground hover:bg-accent",
        className,
      )}
    >
      {added ? (
        <>
          <Check className="h-4 w-4" /> Added to cart
        </>
      ) : (
        label
      )}
    </button>
  );
}
