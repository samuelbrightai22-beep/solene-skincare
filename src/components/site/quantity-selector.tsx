"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuantitySelector({
  initial = 1,
  className,
  onChange,
}: {
  initial?: number;
  className?: string;
  onChange?: (qty: number) => void;
}) {
  const [qty, setQty] = useState(initial);

  const update = (newQty: number) => {
    const next = Math.max(1, newQty);
    setQty(next);
    onChange?.(next);
  };

  return (
    <div
      className={cn(
        "flex items-center border border-border bg-background",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => update(qty - 1)}
        className="px-4 py-3 text-foreground/70 hover:text-accent transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-12 text-center text-sm tabular-nums font-medium">
        {qty}
      </span>
      <button
        type="button"
        onClick={() => update(qty + 1)}
        className="px-4 py-3 text-foreground/70 hover:text-accent transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
      {/* hidden input for compatibility */}
      <input type="hidden" name="quantity" value={qty} />
    </div>
  );
}
