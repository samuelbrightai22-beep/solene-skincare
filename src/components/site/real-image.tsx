"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProductImage } from "./product-image";

type RealImageProps = {
  src?: string;
  alt: string;
  shape: "bottle" | "jar" | "tube" | "dropper";
  color: string;
  accent: string;
  className?: string;
  label?: string;
  priority?: boolean;
};

/**
 * Real photograph with graceful SVG fallback.
 * - If `src` is provided and loads successfully, displays the real photo.
 * - If `src` fails to load, falls back to the SVG product silhouette.
 * - If `src` is not provided, uses SVG directly.
 */
export function RealImage({
  src,
  alt,
  shape,
  color,
  accent,
  className,
  label,
  priority = false,
}: RealImageProps) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <ProductImage
        shape={shape}
        color={color}
        accent={accent}
        className={className}
        label={label}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden rounded-md",
        className,
      )}
      style={{
        backgroundColor: hexWithAlpha(accent, 0.18),
      }}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onError={() => setErrored(true)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {label && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
          <span className="font-serif text-xs uppercase tracking-[0.2em] text-foreground/60 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-sm">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

function hexWithAlpha(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  let r = 0,
    g = 0,
    b = 0;
  if (clean.length === 3) {
    r = parseInt(clean[0] + clean[0], 16);
    g = parseInt(clean[1] + clean[1], 16);
    b = parseInt(clean[2] + clean[2], 16);
  } else if (clean.length === 6) {
    r = parseInt(clean.slice(0, 2), 16);
    g = parseInt(clean.slice(2, 4), 16);
    b = parseInt(clean.slice(4, 6), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
