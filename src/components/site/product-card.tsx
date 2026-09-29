import Link from "next/link";
import { Star } from "lucide-react";
import { type Product, formatPrice } from "@/lib/site-data";
import { RealImage } from "./real-image";
import { AddToCartButton } from "./add-to-cart-button";
import { cn } from "@/lib/utils";

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  Bestseller: "bg-accent text-accent-foreground",
  New: "bg-primary text-primary-foreground",
  Limited: "bg-foreground text-background",
  Restocked: "bg-secondary text-secondary-foreground",
};

export function ProductCard({
  product,
  priority = false,
  className,
}: {
  product: Product;
  priority?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col bg-card rounded-md overflow-hidden border border-border/40 hover:border-border transition-colors",
        className,
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="block relative aspect-square"
      >
        <RealImage
          src={product.image}
          alt={product.name}
          shape={product.imageShape}
          color={product.imageColor}
          accent={product.imageAccent}
          className="rounded-none"
          priority={priority}
        />
        {product.badge && (
          <span
            className={cn(
              "absolute left-3 top-3 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em]",
              badgeStyles[product.badge],
            )}
          >
            {product.badge}
          </span>
        )}
        {product.compareAtPrice && (
          <span className="absolute right-3 top-3 bg-foreground text-background px-2 py-1 text-[10px] font-medium">
            -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-1 mb-1">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-xs text-foreground/60">
            {product.rating.toFixed(1)}{" "}
            <span className="text-foreground/40">({product.reviewCount})</span>
          </span>
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="font-serif text-lg leading-tight hover:text-accent transition-colors"
        >
          {product.name}
        </Link>
        <p className="mt-1 text-xs text-foreground/60 line-clamp-2">
          {product.subtitle}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-medium">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-xs text-foreground/40 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          <span className="text-xs text-foreground/50">{product.size}</span>
        </div>
        <div className="mt-4 pt-2">
          <AddToCartButton slug={product.slug} variant="compact" />
        </div>
      </div>
    </article>
  );
}
