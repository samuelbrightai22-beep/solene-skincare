# Solène — Botanical Skincare

A complete, production-ready e-commerce website for a fictional botanical skincare brand, built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui.

> **Tagline:** _Botanical skincare, made with intention._

## ✨ Features

- **15+ dedicated routes** — every click leads to a real landing page
- **Real photorealistic imagery** — 32 AI-generated product photos with consistent brand styling
- **Full shopping flow** — cart drawer, cart page, multi-step checkout with order confirmation
- **Blog/Journal** — 5 long-form articles (1,000+ words each) on ingredients, rituals, and sourcing
- **Content pages** — About, Contact, FAQ, Shipping & Returns, Ingredients Philosophy, Sustainability
- **Search** — full-text search across products, collections, and articles
- **Responsive** — mobile-first with a sticky header, mobile drawer, and adaptive layouts
- **Accessibility** — semantic HTML, ARIA labels, keyboard navigation, alt text

## 🧱 Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui (New York) |
| State | Zustand (cart, persisted to localStorage) |
| Icons | Lucide React |
| Fonts | Inter (body) + Cormorant Garamond (serif headings) |
| Cart persistence | Zustand `persist` middleware (localStorage) |
| Images | Static, in `public/images/` |

## 📂 Project Structure

```
public/
  images/                    # 32 photorealistic product/lifestyle images
src/
  app/
    page.tsx                  # Home
    layout.tsx                # Root layout (fonts, metadata)
    not-found.tsx             # Custom 404
    collections/
      all/page.tsx            # Shop All
      [slug]/page.tsx         # Collection detail (6 collections)
    products/
      [slug]/page.tsx         # Product detail (19 products)
    pages/
      about/                  # Our Story
      contact/                # Contact form
      faq/                    # FAQ accordion
      shipping-returns/
      ingredients/            # Ingredients philosophy
      sustainability/
    blogs/
      journal/page.tsx        # Journal listing
      journal/[slug]/page.tsx # Article detail (5 articles)
    cart/page.tsx             # Full cart page
    checkout/page.tsx        # Multi-step checkout
    search/page.tsx           # Search results
  components/
    site/                     # Header, footer, cart drawer, product card, real-image, etc.
    ui/                       # shadcn/ui component library
  lib/
    site-data.ts              # Single source of truth: products, collections, blog posts, FAQ, testimonials
    cart-store.ts             # Zustand cart store with localStorage persistence
    utils.ts                  # Tailwind merge helper
```

## 🚀 Local Development

```bash
# Install dependencies
bun install

# Run dev server on http://localhost:3000
bun run dev

# Lint
bun run lint

# Production build
bun run build
bun run start
```

## 🌐 Deployment

### Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. Vercel auto-detects Next.js — no environment variables needed
4. Click **Deploy**

The included `vercel.json` sets the framework to `nextjs` and uses `bun install` for dependencies.

### Other platforms (Netlify, Render, etc.)

Standard Next.js build — `next build` produces `.next/` which can be served by `next start`.

## 🎨 Brand Identity

- **Name:** Solène (from Latin _sol_ + French feminine _-ène_, evoking sunlit femininity)
- **Founder:** Camille Renard (fictional), a former herbalist from Provence
- **Founded:** 2019, Lyon, France
- **Color palette:**
  - Cream background: `#FAF6EE`
  - Deep brown-black text: `#2A2520`
  - Sage green primary: `#4A5D3A`
  - Warm terracotta accent: `#C9824F`
- **Typography:**
  - Headings: Cormorant Garamond (serif)
  - Body: Inter (sans-serif)

## 📦 What's NOT included (intentionally)

- Real payment processing (the checkout form is a demo — wire up Stripe when ready)
- User accounts/authentication
- Database (all products are static TypeScript data in `src/lib/site-data.ts`)
- Product inventory management
- Email sending (contact form and newsletter use a toast notification demo)

These are deliberate choices for a marketing/showcase site. Wire them up as needed.

## 📄 License

This project is shared for demonstration purposes. All brand names, founder stories, and product copy are fictional.

---

_Crafted with intention._
