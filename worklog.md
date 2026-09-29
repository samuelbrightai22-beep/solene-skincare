# Worklog

## image-migration — general-purpose agent

**Task:** Replace `ProductImage` SVG placeholders with `RealImage` (real photorealistic images with SVG fallback) across the Solène Next.js skincare site.

**What I did:**
- Updated every file that imported `{ ProductImage }` from `@/components/site/product-image` to import `{ RealImage }` from `@/components/site/real-image` instead.
- Replaced every `<ProductImage ... />` JSX usage with `<RealImage ... />`, preserving all existing props (`shape`, `color`, `accent`, `className`, `label`) for fallback rendering and adding the new `src` and `alt` props.
- Added `priority` to above-the-fold images (hero, featured, main product image, founder image, blog hero/featured).
- In the product detail page (`products/[slug]/page.tsx`), replaced the 3 hardcoded gallery `ProductImage` instances with a `.map` over `product.imageGallery.slice(0, 3)`, keeping the "+ More views" placeholder div.
- For cart line items (cart drawer, cart page, checkout summary), used `src={`/images/${item.slug}/1.jpg`}` since cart items don't carry the `image` field from the data file.
- For collection/blog data, used `collection.image` / `post.image` from the data file.
- For home page hard-coded hero images and the brand-story/sets-CTA/Instagram/CTA images, used the explicit paths provided in the task spec.

**Files changed (13):**
1. `src/components/site/product-card.tsx`
2. `src/components/site/cart-drawer.tsx`
3. `src/app/page.tsx`
4. `src/app/products/[slug]/page.tsx`
5. `src/app/collections/all/page.tsx`
6. `src/app/collections/[slug]/page.tsx`
7. `src/app/cart/page.tsx`
8. `src/app/checkout/page.tsx`
9. `src/app/blogs/journal/page.tsx`
10. `src/app/blogs/journal/[slug]/page.tsx`
11. `src/app/pages/about/page.tsx`
12. `src/app/pages/sustainability/page.tsx`
13. `src/app/pages/ingredients/page.tsx`

**Files NOT modified (as instructed):**
- `src/components/site/product-image.tsx` (SVG fallback still used by `RealImage`)
- `src/components/site/real-image.tsx` (already correct)

**Lint result:** `bun run lint` → 0 errors, 1 warning. The warning is `Unused eslint-disable directive` at `real-image.tsx:58:8` — it's in a file I was told not to touch, so it's left as-is (pre-existing).

**Issues encountered:** None. All ProductImage usages were successfully replaced; final grep confirms only `product-image.tsx` (definition) and `real-image.tsx` (fallback) still reference the name.
