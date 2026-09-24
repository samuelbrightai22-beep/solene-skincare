// Solène — central site data
// Single source of truth for products, collections, blog posts, testimonials, etc.

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  category: string; // collection slug
  price: number;
  compareAtPrice?: number;
  size: string;
  rating: number;
  reviewCount: number;
  badge?: "Bestseller" | "New" | "Limited" | "Restocked";
  description: string;
  longDescription: string;
  keyIngredients: { name: string; description: string }[];
  howToUse: string;
  benefits: string[];
  skinType: string[];
  fullIngredients: string;
  // Image: gradient + emoji-free SVG-friendly product representation
  imageColor: string; // hex
  imageAccent: string; // hex
  imageShape: "bottle" | "jar" | "tube" | "dropper";
};

export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  imageColor: string;
  imageAccent: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Founder's Notes" | "Ingredients" | "Rituals" | "Sourcing";
  author: string;
  date: string;
  readTime: string;
  imageColor: string;
  imageAccent: string;
  content: { heading?: string; paragraphs: string[] }[];
};

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  product: string;
  quote: string;
};

// -----------------------------
// Collections
// -----------------------------
export const collections: Collection[] = [
  {
    slug: "cleansers",
    name: "Cleansers",
    tagline: "The first ritual",
    description:
      "Creamy, oil-based and gel cleansers that melt away the day without stripping your barrier.",
    longDescription:
      "Every Solène ritual begins here. Our cleansers are pH-balanced to your skin's natural acid mantle, formulated with cold-pressed botanical oils and gentle surfactants derived from coconut. They dissolve sunscreen, makeup and the city's particulate matter without leaving your skin tight, dry or reactive. We never use harsh sulfates — every formula is built for daily use, morning and night.",
    imageColor: "#C9824F",
    imageAccent: "#FAF6EE",
  },
  {
    slug: "serums",
    name: "Serums & Treatments",
    tagline: "The active ritual",
    description:
      "Concentrated formulas with clinically-studied actives — vitamin C, bakuchiol, niacinamide, hyaluronic acid.",
    longDescription:
      "Serums are where the work gets done. Each Solène serum is built around a single hero active at a clinically effective concentration, supported by botanical extracts that calm, hydrate and feed the skin's microbiome. We avoid fillers, fragrance allergens and known irritants — every drop is doing something. Apply to clean, slightly damp skin and follow with a moisturizer to seal it in.",
    imageColor: "#4A5D3A",
    imageAccent: "#FAF6EE",
  },
  {
    slug: "moisturizers",
    name: "Moisturizers",
    tagline: "The seal ritual",
    description:
      "Lightweight gels for daytime, rich recovery balms for night — every barrier finds its match.",
    longDescription:
      "Moisturizers do more than hydrate. They seal in the serums beneath them, fortify the lipid barrier, and protect skin from trans-epidermal water loss. Our daytime formulas are lightweight and layer cleanly under SPF; our nighttime formulas use shea, squalane and botanical waxes to rebuild the barrier while you sleep. Choose by skin type and by season — most people need two.",
    imageColor: "#8C9A7B",
    imageAccent: "#FAF6EE",
  },
  {
    slug: "masks",
    name: "Masks & Exfoliants",
    tagline: "The weekly ritual",
    description:
      "Pink clay, papaya enzymes, honey overnight — the reset your skin craves once or twice a week.",
    longDescription:
      "Masks and exfoliants are the weekly reset — a deeper intervention than your daily ritual. Our clay masks draw out impurities without overdrying, our enzyme peels gently dissolve dead skin cells without the redness of physical scrubs, and our overnight honey mask restores what the week took out. Use them once or twice a week, never on the same day, and always follow with moisturizer.",
    imageColor: "#B85C3C",
    imageAccent: "#FAF6EE",
  },
  {
    slug: "body-care",
    name: "Body Care",
    tagline: "The below-the-chin ritual",
    description:
      "Body oils, hand creams and salt polishes with the same botanical standard as your face.",
    longDescription:
      "We believe the skin below your chin deserves the same care as the skin above it. Our body care uses the same cold-pressed botanical oils and the same no-fragrance-allergen standard as our face products. Body oils absorb quickly without residue, hand creams are rich but never sticky, and our sea salt polish leaves skin soft and glowing. Because the ritual doesn't stop at the jawline.",
    imageColor: "#A38B5C",
    imageAccent: "#FAF6EE",
  },
  {
    slug: "sets",
    name: "Sets & Rituals",
    tagline: "The curated ritual",
    description:
      "Pre-built routines and gift sets — for yourself, or someone you love.",
    longDescription:
      "Curated routines take the guesswork out of skincare. Each set is built around a specific skin goal — radiant glow, calm recovery, or travel-ready discovery — with products formulated to layer cleanly. They're also our most-gifted items, packaged in recycled paper and tied with linen ribbon. Choose a set, follow the morning-and-night order on the inside flap, and let the ritual begin.",
    imageColor: "#C9824F",
    imageAccent: "#2A2520",
  },
];

// -----------------------------
// Products
// -----------------------------
export const products: Product[] = [
  // ---------------- Cleansers ----------------
  {
    slug: "rosewater-cream-cleanser",
    name: "Rosewater Cream Cleanser",
    subtitle: "Cream cleanser for dry & sensitive skin",
    category: "cleansers",
    price: 38,
    compareAtPrice: 46,
    size: "150 ml",
    rating: 4.8,
    reviewCount: 312,
    badge: "Bestseller",
    description:
      "A milky, rose-scented cream cleanser that lifts the day away while leaving your barrier intact.",
    longDescription:
      "Our Rosewater Cream Cleanser is the gentlest formula in the Solène ritual. Built on a base of cold-pressed sweet almond oil and Damask rose water from the Valley of Roses in Bulgaria, it emulsifies makeup, SPF and daily grime without surfactants that strip the skin. The texture is silky and milky — it slides across the skin, lifts debris, and rinses cleanly with warm water. Designed for dry, sensitive and reactive skin types, it leaves the skin soft, never tight. Use morning and night as the first step of your ritual.",
    keyIngredients: [
      {
        name: "Damask Rose Water",
        description:
          "Steam-distilled in Bulgaria from roses hand-picked at dawn. Mildly astringent, calming, and rich in antioxidants.",
      },
      {
        name: "Cold-Pressed Sweet Almond Oil",
        description:
          "Rich in linoleic and oleic acid, dissolves sebum and makeup without stripping the lipid barrier.",
      },
      {
        name: "Oat Beta-Glucan",
        description:
          "Soothing polysaccharide that reduces redness and supports the skin's immune response.",
      },
    ],
    howToUse:
      "Massage a coin-sized amount onto dry skin in circular motions for 30–60 seconds. Add warm water to emulsify, then rinse thoroughly. Pat dry. Use morning and night.",
    benefits: [
      "Removes makeup, SPF and impurities",
      "pH-balanced to 5.5 — won't strip the barrier",
      "Calms redness and reactivity",
      "Suitable for sensitive and rosacea-prone skin",
    ],
    skinType: ["Dry", "Sensitive", "Normal"],
    fullIngredients:
      "Aqua (Water), Rosa Damascena Flower Water, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Glycerin, Cetearyl Alcohol, Coco-Glucoside, Avena Sativa (Oat) Kernel Extract, Sodium Cocoyl Glutamate, Tocopherol, Sodium Hyaluronate, Citric Acid, Benzyl Alcohol, Dehydroacetic Acid.",
    imageColor: "#E8B4BC",
    imageAccent: "#C9824F",
    imageShape: "bottle",
  },
  {
    slug: "charcoal-detox-wash",
    name: "Charcoal Detox Wash",
    subtitle: "Gel cleanser for combination & oily skin",
    category: "cleansers",
    price: 34,
    size: "150 ml",
    rating: 4.6,
    reviewCount: 187,
    badge: "Bestseller",
    description:
      "A deep-cleaning gel with activated charcoal and white willow bark to clear congestion without overstripping.",
    longDescription:
      "Charcoal Detox Wash is the cleanser we reach for when the city has been unkind. Activated bamboo charcoal draws out impurities from pores, while white willow bark — a natural source of salicylic acid — gently exfoliates inside the pore lining. The gel foams lightly from coconut-derived surfactants, never from harsh sulfates, and rinses away without residue. Designed for combination and oily skin types, or anyone dealing with congestion, breakouts, or the aftermath of a long city day. Use it morning and night, or as a second cleanse after the Rosewater Cream Cleanser if you wear heavy makeup or SPF.",
    keyIngredients: [
      {
        name: "Activated Bamboo Charcoal",
        description:
          "Highly porous carbon that adsorbs impurities and excess oil from the pore surface.",
      },
      {
        name: "White Willow Bark Extract",
        description:
          "Natural source of salicylic acid (BHA). Gently exfoliates inside the pore to reduce congestion.",
      },
      {
        name: "Niacinamide (Vitamin B3)",
        description:
          "Regulates sebum production and strengthens the skin barrier over time.",
      },
    ],
    howToUse:
      "Massage a small amount onto damp skin, working into a light lather. Focus on the T-zone and congested areas. Rinse with warm water. Use morning and night.",
    benefits: [
      "Deep-cleans pores without overstripping",
      "Reduces congestion and blackheads",
      "Regulates oil production over time",
      "Light, non-stripping lather",
    ],
    skinType: ["Oily", "Combination", "Normal"],
    fullIngredients:
      "Aqua (Water), Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Glycerin, Bambusa Vulgaris (Bamboo) Charcoal Powder, Salix Alba (Willow) Bark Extract, Niacinamide, Panthenol, Sodium Hyaluronate, Citric Acid, Potassium Sorbate, Sodium Benzoate.",
    imageColor: "#2A2520",
    imageAccent: "#4A5D3A",
    imageShape: "tube",
  },
  {
    slug: "oat-milk-gentle-cleanser",
    name: "Oat Milk Gentle Cleanser",
    subtitle: "Non-foaming milk cleanser for reactive skin",
    category: "cleansers",
    price: 36,
    size: "150 ml",
    rating: 4.9,
    reviewCount: 142,
    badge: "New",
    description:
      "A non-foaming oat milk cleanser that comforts reactive, eczema-prone and post-treatment skin.",
    longDescription:
      "Our Oat Milk Gentle Cleanser was formulated for the moments skin needs the softest possible touch. It contains no surfactants that foam, no fragrance, no essential oils — only colloidal oatmeal, oat beta-glucan, and a base of cold-pressed camellia oil. The texture is a true milk: lightweight, fluid, almost watery, that you press onto dry skin and remove with a warm, damp cloth. Recommended for reactive, eczema-prone, post-treatment, or extremely dry skin — and for anyone whose skin reacts to everything else.",
    keyIngredients: [
      {
        name: "Colloidal Oatmeal",
        description:
          "FDA-recognized skin protectant. Forms a soothing barrier and reduces itching and irritation.",
      },
      {
        name: "Camellia Seed Oil",
        description:
          "Lightweight oil rich in oleic acid. Absorbs quickly without greasy residue.",
      },
      {
        name: "Oat Beta-Glucan",
        description:
          "Long-chain polysaccharide that hydrates deeply and reduces trans-epidermal water loss.",
      },
    ],
    howToUse:
      "Apply 2–3 pumps to dry skin. Press in gently and let sit for 30 seconds. Remove with a warm, damp cotton cloth. Use morning and night. No water needed during application.",
    benefits: [
      "No surfactants, no fragrance, no essential oils",
      "Soothes reactive and post-treatment skin",
      "Protects the skin barrier",
      "Rinses cleanly with a cloth",
    ],
    skinType: ["Sensitive", "Dry", "Reactive"],
    fullIngredients:
      "Aqua (Water), Avena Sativa (Oat) Kernel Flour, Camellia Oleifera Seed Oil, Glycerin, Avena Sativa (Oat) Kernel Extract, Tocopherol, Sodium Hyaluronate, Panthenol, Allantoin, Citric Acid, Caprylyl Glycol.",
    imageColor: "#E8DCC8",
    imageAccent: "#A38B5C",
    imageShape: "bottle",
  },

  // ---------------- Serums ----------------
  {
    slug: "vitamin-c-brightening-serum",
    name: "Vitamin C Brightening Serum",
    subtitle: "15% L-ascorbic acid with ferulic acid",
    category: "serums",
    price: 68,
    compareAtPrice: 82,
    size: "30 ml",
    rating: 4.7,
    reviewCount: 421,
    badge: "Bestseller",
    description:
      "A high-potency vitamin C serum that brightens dark spots and protects against daily oxidative stress.",
    longDescription:
      "Our Vitamin C Brightening Serum contains 15% L-ascorbic acid — the pure, biologically active form of vitamin C — at the optimal pH of 3.5 for maximum absorption. We've paired it with 0.5% ferulic acid and 1% vitamin E, a combination clinically shown to double the photoprotective effect of vitamin C alone. Used daily, this serum visibly fades post-acne marks, evens out sun damage, and gives skin a lit-from-within glow. The texture is water-thin and layers cleanly under moisturizer and SPF. Best used in the morning.",
    keyIngredients: [
      {
        name: "L-Ascorbic Acid (15%)",
        description:
          "The purest form of vitamin C. Brightens, evens skin tone, stimulates collagen synthesis.",
      },
      {
        name: "Ferulic Acid",
        description:
          "Plant antioxidant that stabilizes vitamin C and doubles its photoprotective effect.",
      },
      {
        name: "Tocopherol (Vitamin E)",
        description:
          "Works synergistically with vitamin C to neutralize free radicals from UV and pollution.",
      },
    ],
    howToUse:
      "Apply 4–5 drops to clean, dry skin in the morning. Press gently into the skin and follow with moisturizer and SPF. Always wear SPF when using this serum. Store in a cool, dark place; discard if the serum turns dark orange.",
    benefits: [
      "Brightens dark spots and hyperpigmentation",
      "Boosts collagen production",
      "Doubles SPF's photoprotection",
      "Visibly evens skin tone in 8 weeks",
    ],
    skinType: ["Normal", "Oily", "Combination", "Mature"],
    fullIngredients:
      "Aqua (Water), L-Ascorbic Acid, Propanediol, Glycerin, Ferulic Acid, Tocopherol, Panthenol, Sodium Hyaluronate, Polysorbate 20, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.",
    imageColor: "#C9824F",
    imageAccent: "#FAF6EE",
    imageShape: "dropper",
  },
  {
    slug: "hyaluronic-hydra-serum",
    name: "Hyaluronic Hydra Serum",
    subtitle: "Multi-weight hyaluronic acid + glycerin",
    category: "serums",
    price: 52,
    size: "30 ml",
    rating: 4.8,
    reviewCount: 287,
    description:
      "A deeply hydrating serum with three molecular weights of hyaluronic acid and aloe vera.",
    longDescription:
      "Hyaluronic Hydra Serum is the foundational hydrator of the Solène ritual. We use three molecular weights of sodium hyaluronate — high, medium and low — so that hydration reaches every layer of the skin. The high molecular weight sits on the surface and prevents trans-epidermal water loss; the medium weight plumps the epidermis; the low weight penetrates deeper to hydrate from within. We've added aloe vera, glycerin and panthenol to create a silky, cushioning texture that sinks in immediately and leaves no tacky residue. Suitable for all skin types, even oily — hydration is not the same as oil.",
    keyIngredients: [
      {
        name: "Sodium Hyaluronate (3 weights)",
        description:
          "High weight for surface hydration, medium for epidermal plumping, low for deep hydration.",
      },
      {
        name: "Aloe Vera Leaf Juice",
        description:
          "Soothing, anti-inflammatory, and rich in polysaccharides that hold water in the skin.",
      },
      {
        name: "Vegetable Glycerin",
        description:
          "Humectant that draws water from the air into the upper layers of the skin.",
      },
    ],
    howToUse:
      "Apply 3–4 drops to damp skin (after cleansing or after a facial mist). Press gently into the skin and follow with moisturizer to seal in hydration. Use morning and night.",
    benefits: [
      "Plumps fine lines caused by dehydration",
      "Layers cleanly under all other products",
      "Suitable for oily skin — hydration without oil",
      "Strengthens the moisture barrier over time",
    ],
    skinType: ["All Skin Types", "Dry", "Oily", "Sensitive"],
    fullIngredients:
      "Aqua (Water), Aloe Barbadensis Leaf Juice, Glycerin, Sodium Hyaluronate (3 molecular weights), Panthenol, Allantoin, Niacinamide, Sodium PCA, Betaine, Xanthan Gum, Citric Acid, Caprylyl Glycol, Phenoxyethanol.",
    imageColor: "#8C9A7B",
    imageAccent: "#FAF6EE",
    imageShape: "dropper",
  },
  {
    slug: "bakuchiol-renewal-serum",
    name: "Bakuchiol Renewal Serum",
    subtitle: "Plant retinol alternative with squalane",
    category: "serums",
    price: 76,
    size: "30 ml",
    rating: 4.6,
    reviewCount: 198,
    badge: "New",
    description:
      "A gentle, plant-based alternative to retinol that smooths texture and supports cell turnover — without irritation.",
    longDescription:
      "Bakuchiol is a meroterpene phenol extracted from the seeds of the Psoralea corylifolia plant, used for centuries in Ayurvedic medicine. Clinical studies have shown it to stimulate the same collagen-producing genes as retinol, but without the redness, peeling or sun sensitivity that makes retinol difficult for many skin types. Our Bakuchiol Renewal Serum contains 1.5% bakuchiol in a base of squalane, rosehip seed oil and bisabolol — a calming chamomile derivative. It smooths skin texture, fades hyperpigmentation, and supports cell turnover overnight. Safe for use during pregnancy and on sensitive skin.",
    keyIngredients: [
      {
        name: "Bakuchiol (1.5%)",
        description:
          "Plant-derived retinol alternative. Stimulates collagen production without irritation or sun sensitivity.",
      },
      {
        name: "Squalane (Olive-derived)",
        description:
          "Lightweight oil that mimics the skin's natural sebum. Moisturizes without clogging pores.",
      },
      {
        name: "Rosehip Seed Oil",
        description:
          "Cold-pressed from rosehip seeds. Rich in trans-retinoic acid, vitamin A and linoleic acid.",
      },
    ],
    howToUse:
      "Apply 3–4 drops to clean, dry skin in the evening. Press gently and follow with moisturizer. Safe for daily use, including during pregnancy. Always wear SPF during the day.",
    benefits: [
      "Smoothes texture and fine lines",
      "Safe during pregnancy and breastfeeding",
      "No redness, peeling or sun sensitivity",
      "Visibly fades hyperpigmentation",
    ],
    skinType: ["Mature", "Normal", "Sensitive", "Pregnancy-Safe"],
    fullIngredients:
      "Squalane (Olive), Caprylic/Capric Triglyceride, Bakuchiol, Rosa Canina (Rosehip) Fruit Oil, Bisabolol, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil, Vanilla Planifolia Fruit Extract.",
    imageColor: "#A38B5C",
    imageAccent: "#2A2520",
    imageShape: "dropper",
  },
  {
    slug: "niacinamide-pore-refiner",
    name: "Niacinamide Pore Refiner",
    subtitle: "10% niacinamide + zinc PCA",
    category: "serums",
    price: 44,
    size: "30 ml",
    rating: 4.5,
    reviewCount: 156,
    description:
      "A 10% niacinamide serum that visibly reduces pore size and regulates oil production.",
    longDescription:
      "Niacinamide — vitamin B3 — is one of the most studied and well-tolerated actives in skincare. Our Niacinamide Pore Refiner contains a clinical 10% concentration, paired with 1% zinc PCA to regulate sebum production and visibly reduce pore size over time. The serum has a slightly viscous, water-gel texture that absorbs immediately, leaving a soft, matte finish. Use it morning and night on the T-zone or all over if you have oily or combination skin. It plays well with almost every other active — vitamin C, hyaluronic acid, retinol (or bakuchiol) — and is one of the easiest actives to add to an existing routine.",
    keyIngredients: [
      {
        name: "Niacinamide (10%)",
        description:
          "Vitamin B3. Reduces pore appearance, regulates oil, fades hyperpigmentation, strengthens barrier.",
      },
      {
        name: "Zinc PCA",
        description:
          "Sebum-regulating mineral that reduces excess oil and has antibacterial properties.",
      },
      {
        name: "Hyaluronic Acid",
        description:
          "Adds lightweight hydration so the serum doesn't dry out the skin.",
      },
    ],
    howToUse:
      "Apply 3–4 drops to clean skin, morning and night. Press gently and follow with moisturizer. Pairs well with hyaluronic acid and vitamin C; avoid using in the same routine as direct L-ascorbic acid at high concentrations.",
    benefits: [
      "Visibly reduces pore size in 8 weeks",
      "Regulates oil production",
      "Fades post-acne hyperpigmentation",
      "Strengthens the skin barrier",
    ],
    skinType: ["Oily", "Combination", "Normal"],
    fullIngredients:
      "Aqua (Water), Niacinamide, Propanediol, Glycerin, Zinc PCA, Sodium Hyaluronate, Allantoin, Panthenol, Tocopherol, Xanthan Gum, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    imageColor: "#4A5D3A",
    imageAccent: "#FAF6EE",
    imageShape: "dropper",
  },

  // ---------------- Moisturizers ----------------
  {
    slug: "daily-glow-face-cream",
    name: "Daily Glow Face Cream",
    subtitle: "Lightweight gel-cream for all skin types",
    category: "moisturizers",
    price: 58,
    size: "50 ml",
    rating: 4.8,
    reviewCount: 364,
    badge: "Bestseller",
    description:
      "A gel-cream moisturizer with squalane and glycerin that gives skin a dewy, lit-from-within finish.",
    longDescription:
      "Our Daily Glow Face Cream is the everyday workhorse of the Solène ritual. The texture is a gel-cream hybrid: lightweight enough for oily and combination skin, but with enough squalane and glycerin to satisfy dry skin in warmer months. We've added a small amount of mica for an immediate lit-from-within finish — a soft, lit sheen rather than glitter. Use it morning and night as the final step of your ritual, after serums and before SPF (in the AM). It layers cleanly under makeup and never pills.",
    keyIngredients: [
      {
        name: "Olive Squalane",
        description:
          "Lightweight oil that mimics the skin's natural sebum. Non-comedogenic and absorbs immediately.",
      },
      {
        name: "Glycerin (Vegetable)",
        description:
          "Powerful humectant that draws moisture into the upper layers of the skin.",
      },
      {
        name: "Mica",
        description:
          "Natural mineral that creates a soft, dewy finish without glitter or shimmer.",
      },
    ],
    howToUse:
      "Apply a pea-sized amount to clean skin, after serums. Smooth upward and outward. Use morning and night. Pairs well under SPF and makeup.",
    benefits: [
      "Lightweight, layers cleanly under makeup",
      "Dewy, lit-from-within finish",
      "Suitable for all skin types",
      "Non-comedogenic",
    ],
    skinType: ["All Skin Types", "Normal", "Combination", "Oily"],
    fullIngredients:
      "Aqua (Water), Glycerin, Squalane, Propanediol, Niacinamide, Sodium Hyaluronate, Panthenol, Mica, Tocopherol, Allantoin, Citric Acid, Xanthan Gum, Sodium Benzoate, Potassium Sorbate.",
    imageColor: "#C9824F",
    imageAccent: "#FAF6EE",
    imageShape: "jar",
  },
  {
    slug: "overnight-recovery-balm",
    name: "Overnight Recovery Balm",
    subtitle: "Rich night cream with shea and peptides",
    category: "moisturizers",
    price: 72,
    size: "50 ml",
    rating: 4.7,
    reviewCount: 218,
    description:
      "A rich, nourishing night cream with shea butter, peptides and botanical waxes for dry and mature skin.",
    longDescription:
      "Overnight Recovery Balm is built for the work your skin does while you sleep. The skin's repair mechanisms are most active between 11pm and 4am, and this balm gives them what they need: shea butter and botanical waxes seal in moisture, a peptide complex stimulates collagen synthesis, and evening primrose oil delivers gamma-linolenic acid to support the lipid barrier. The texture is rich and balmy, almost like a soft salve — it melts on contact and absorbs slowly over the first 30 minutes. Best for dry, mature, or recovery-needing skin, or for anyone in cold or arid climates. Not recommended for oily or acne-prone skin.",
    keyIngredients: [
      {
        name: "Shea Butter (Unrefined)",
        description:
          "Rich in stearic and oleic acid. Forms a protective barrier and supports skin repair.",
      },
      {
        name: "Peptide Complex (Matrixyl 3000)",
        description:
          "Patented peptide blend clinically shown to stimulate collagen synthesis and reduce wrinkle depth.",
      },
      {
        name: "Evening Primrose Oil",
        description:
          "Cold-pressed, rich in gamma-linolenic acid. Calms inflammation and supports the barrier.",
      },
    ],
    howToUse:
      "Apply a small amount as the final step of your evening ritual, after serums. Smooth into skin in upward motions. For very dry skin, apply a second layer 15 minutes after the first.",
    benefits: [
      "Supports overnight skin repair",
      "Visibly plumps fine lines",
      "Restores the lipid barrier",
      "Rich, cushioning texture",
    ],
    skinType: ["Dry", "Mature", "Normal"],
    fullIngredients:
      "Aqua (Water), Butyrospermum Parkii (Shea) Butter, Caprylic/Capric Triglyceride, Glycerin, Oenothera Biennis (Evening Primrose) Oil, Cetearyl Alcohol, Palmitoyl Tripeptide-5, Palmitoyl Tetrapeptide-7, Sodium Hyaluronate, Tocopherol, Bisabolol, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.",
    imageColor: "#A38B5C",
    imageAccent: "#2A2520",
    imageShape: "jar",
  },
  {
    slug: "oil-free-gel-moisturizer",
    name: "Oil-Free Gel Moisturizer",
    subtitle: "Lightweight gel for oily & acne-prone skin",
    category: "moisturizers",
    price: 48,
    size: "50 ml",
    rating: 4.6,
    reviewCount: 174,
    description:
      "An oil-free, fragrance-free gel that hydrates without adding weight — perfect for oily and acne-prone skin.",
    longDescription:
      "Our Oil-Free Gel Moisturizer was built for skin that breaks out from anything heavier. The formula is a true gel — water, glycerin, hyaluronic acid and a small amount of carbomer for structure. There are no oils, no butters, no waxes and no fragrance. It absorbs in seconds, leaves a soft matte finish, and layers cleanly under SPF and makeup. Despite its lightweight feel, it delivers meaningful hydration: sodium hyaluronate, glycerin and panthenol work together to plump the skin and reinforce the moisture barrier. Best for oily, combination and acne-prone skin, or for use in hot and humid climates.",
    keyIngredients: [
      {
        name: "Sodium Hyaluronate",
        description:
          "Salt form of hyaluronic acid. Penetrates more deeply and is more stable than pure HA.",
      },
      {
        name: "Vegetable Glycerin",
        description:
          "Humectant that draws moisture from the air into the skin without adding oil.",
      },
      {
        name: "Panthenol (Provitamin B5)",
        description:
          "Humectant and skin protectant that soothes irritation and supports barrier repair.",
      },
    ],
    howToUse:
      "Apply a pea-sized amount to clean skin after serums. Smooth in until absorbed. Use morning and night.",
    benefits: [
      "Truly oil-free — won't clog pores",
      "Absorbs in seconds, leaves no residue",
      "Matte finish, layers under makeup",
      "Fragrance-free, non-comedogenic",
    ],
    skinType: ["Oily", "Acne-Prone", "Combination"],
    fullIngredients:
      "Aqua (Water), Glycerin, Propanediol, Niacinamide, Sodium Hyaluronate, Panthenol, Allantoin, Carbomer, Sodium Carbomer, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    imageColor: "#8C9A7B",
    imageAccent: "#FAF6EE",
    imageShape: "tube",
  },

  // ---------------- Masks ----------------
  {
    slug: "pink-clay-detox-mask",
    name: "Pink Clay Detox Mask",
    subtitle: "Weekly clarifying mask for all skin types",
    category: "masks",
    price: 42,
    size: "75 ml",
    rating: 4.7,
    reviewCount: 245,
    badge: "Bestseller",
    description:
      "A creamy pink clay mask that draws out impurities while aloe and chamomile prevent the tight, dry feeling.",
    longDescription:
      "Pink Clay Detox Mask is built around Australian pink clay — a blend of red and white kaolin clays that's gentle enough for sensitive skin but still effective at drawing out impurities. Unlike many clay masks that leave skin tight, dry and flaky, ours is formulated with aloe vera gel, chamomile extract and glycerin to keep the skin hydrated throughout the masking process. The texture is creamy and easy to apply, dries down in 10 minutes, and rinses away cleanly with warm water. Skin looks brighter, smoother and clearer immediately. Use once or twice a week.",
    keyIngredients: [
      {
        name: "Australian Pink Clay",
        description:
          "Blend of red and white kaolin. Gentle enough for sensitive skin, effective at drawing out impurities.",
      },
      {
        name: "Aloe Vera Gel",
        description:
          "Prevents the dry, tight feeling common with clay masks. Soothes and hydrates.",
      },
      {
        name: "Chamomile Extract",
        description:
          "Anti-inflammatory and calming, especially for reactive skin.",
      },
    ],
    howToUse:
      "Apply an even layer to clean, dry skin, avoiding the eye area. Leave on for 10 minutes — do not let it dry completely. Rinse with warm water and a damp cloth. Follow with moisturizer. Use once or twice a week.",
    benefits: [
      "Draws out impurities without overdrying",
      "Visibly brighter skin immediately",
      "Suitable for sensitive skin",
      "Creamy, easy-to-apply texture",
    ],
    skinType: ["All Skin Types", "Combination", "Oily"],
    fullIngredients:
      "Aqua (Water), Kaolin (Australian Pink Clay), Aloe Barbadensis Leaf Juice, Glycerin, Chamomilla Recutita (Matricaria) Flower Extract, Coco-Caprylate/Caprate, Cetearyl Alcohol, Sodium Hyaluronate, Tocopherol, Xanthan Gum, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    imageColor: "#E8B4BC",
    imageAccent: "#B85C3C",
    imageShape: "jar",
  },
  {
    slug: "enzyme-papaya-peel",
    name: "Enzyme Papaya Peel",
    subtitle: "Gentle enzymatic exfoliant",
    category: "masks",
    price: 46,
    size: "50 ml",
    rating: 4.6,
    reviewCount: 132,
    description:
      "A papaya and pineapple enzyme peel that dissolves dead skin cells without the redness of physical scrubs.",
    longDescription:
      "Enzyme Papaya Peel uses natural proteolytic enzymes — papain from papaya and bromelain from pineapple — to gently dissolve the protein bonds holding dead skin cells to the surface. The result is smoother, brighter, more even-toned skin without the micro-tears, redness or irritation of physical scrubs. The texture is a lightweight gel that you apply as a thin layer and leave on for 5–10 minutes. You may feel a slight tingling — that's the enzymes working. Sensitive skin types can leave it on for just 3 minutes to start. Use once a week, never on the same day as a clay mask or retinol.",
    keyIngredients: [
      {
        name: "Papain (Papaya Enzyme)",
        description:
          "Proteolytic enzyme that dissolves the protein bonds holding dead skin cells.",
      },
      {
        name: "Bromelain (Pineapple Enzyme)",
        description:
          "Works synergistically with papain to gently exfoliate and brighten.",
      },
      {
        name: "Hyaluronic Acid",
        description:
          "Counteracts potential dryness by drawing moisture into the freshly exfoliated skin.",
      },
    ],
    howToUse:
      "Apply a thin, even layer to clean, dry skin. Leave on for 5–10 minutes (3 minutes for sensitive skin). Rinse with warm water. Follow with moisturizer. Use once a week. Do not use on the same day as retinol, bakuchiol, or other exfoliants.",
    benefits: [
      "Dissolves dead skin without abrasion",
      "Brightens and evens skin tone",
      "Suitable for sensitive skin at lower durations",
      "Visibly smoother skin in one use",
    ],
    skinType: ["All Skin Types", "Normal", "Dull"],
    fullIngredients:
      "Aqua (Water), Carica Papaya (Papaya) Fruit Extract, Ananas Sativus (Pineapple) Fruit Extract, Glycerin, Sodium Hyaluronate, Aloe Barbadensis Leaf Juice, Panthenol, Allantoin, Xanthan Gum, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    imageColor: "#C9824F",
    imageAccent: "#FAF6EE",
    imageShape: "bottle",
  },
  {
    slug: "honey-overnight-mask",
    name: "Honey Overnight Mask",
    subtitle: "Sleeping mask with raw honey and propolis",
    category: "masks",
    price: 54,
    size: "50 ml",
    rating: 4.9,
    reviewCount: 188,
    badge: "New",
    description:
      "A sleeping mask with raw Manuka honey, propolis and panthenol that restores skin overnight.",
    longDescription:
      "Honey Overnight Mask is the softest ritual in the Solène collection. Applied as the final step of your evening ritual, it forms a breathable, hydrating film that locks in everything beneath it — serums, oils, moisturizers — and slowly releases raw Manuka honey, propolis and panthenol into the skin over the course of the night. The texture is a thick gel-cream that absorbs almost immediately and won't transfer to your pillow. Wake up to skin that looks rested, plumped and visibly restored. Use 2–3 times a week, or nightly in winter or on long-haul flights.",
    keyIngredients: [
      {
        name: "Raw Manuka Honey (10+ UMF)",
        description:
          "Humectant and antibacterial. Draws moisture into the skin and supports its microbiome.",
      },
      {
        name: "Propolis Extract",
        description:
          "Bee-derived resin with antibacterial and anti-inflammatory properties. Supports skin healing.",
      },
      {
        name: "Panthenol (Provitamin B5)",
        description:
          "Humectant and skin protectant. Soothes irritation and supports barrier repair.",
      },
    ],
    howToUse:
      "Apply as the final step of your evening ritual, 2–3 times a week. Smooth a thin layer over face and neck. Do not rinse. Sleep, wake, glow.",
    benefits: [
      "Restores skin overnight",
      "Locks in serums and moisturizers",
      "Antibacterial and healing",
      "Won't transfer to pillow",
    ],
    skinType: ["All Skin Types", "Dry", "Mature"],
    fullIngredients:
      "Aqua (Water), Mel (Manuka Honey), Propanediol, Glycerin, Propolis Extract, Panthenol, Sodium Hyaluronate, Niacinamide, Tocopherol, Allantoin, Xanthan Gum, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    imageColor: "#A38B5C",
    imageAccent: "#2A2520",
    imageShape: "jar",
  },

  // ---------------- Body Care ----------------
  {
    slug: "body-oil-citrus-bloom",
    name: "Body Oil — Citrus Bloom",
    subtitle: "Lightweight body oil with sweet almond and citrus",
    category: "body-care",
    price: 48,
    size: "150 ml",
    rating: 4.8,
    reviewCount: 92,
    description:
      "A fast-absorbing body oil that leaves skin soft, dewy and faintly scented with sweet orange and neroli.",
    longDescription:
      "Citrus Bloom Body Oil is the body version of our Daily Glow Face Cream — a lightweight, fast-absorbing oil that gives skin a soft, dewy finish. The base is cold-pressed sweet almond oil and jojoba oil, both of which mimic the skin's natural sebum and absorb quickly without residue. We add a small amount of sweet orange and neroli essential oils for a delicate, natural scent that fades within an hour. Apply to damp skin after a shower; the water helps the oil spread evenly and lock in moisture. Won't stain clothing.",
    keyIngredients: [
      {
        name: "Sweet Almond Oil (Cold-Pressed)",
        description:
          "Lightweight oil rich in oleic and linoleic acid. Absorbs quickly, softens skin.",
      },
      {
        name: "Jojoba Oil",
        description:
          "Liquid wax that closely mimics the skin's natural sebum. Non-comedogenic.",
      },
      {
        name: "Sweet Orange & Neroli Essential Oils",
        description:
          "Natural citrus and floral scent. Steam-distilled, never synthetic.",
      },
    ],
    howToUse:
      "Apply to damp skin after a shower. Massage in circular motions until absorbed. A little goes a long way — start with 4–5 pumps for full body.",
    benefits: [
      "Lightweight, absorbs in under a minute",
      "Soft, dewy finish without residue",
      "Natural citrus and floral scent",
      "Locks in moisture on damp skin",
    ],
    skinType: ["All Skin Types"],
    fullIngredients:
      "Prunus Amygdalus Dulcis (Sweet Almond) Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Citrus Aurantium Dulcis (Sweet Orange) Peel Oil, Citrus Aurantium Amara (Neroli) Flower Oil, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil.",
    imageColor: "#C9824F",
    imageAccent: "#FAF6EE",
    imageShape: "bottle",
  },
  {
    slug: "hand-cream-lavender-shea",
    name: "Hand Cream — Lavender & Shea",
    subtitle: "Rich hand cream for dry, overwashed hands",
    category: "body-care",
    price: 28,
    size: "75 ml",
    rating: 4.7,
    reviewCount: 156,
    description:
      "A rich hand cream with raw shea butter and French lavender that absorbs quickly and softens deeply.",
    longDescription:
      "Our Lavender & Shea Hand Cream was built for hands that have been washed too many times. The base is unrefined shea butter from a women's cooperative in Burkina Faso, blended with glycerin and panthenol for hydration, and a small amount of French lavender essential oil for a calming scent. The texture is rich but absorbs quickly — you can type or open a doorknob within a minute of applying. Tuck it in your bag, your desk, your bedside table. Apply as often as needed.",
    keyIngredients: [
      {
        name: "Unrefined Shea Butter",
        description:
          "Sourced from a women's cooperative in Burkina Faso. Rich in vitamins A and E.",
      },
      {
        name: "French Lavender Essential Oil",
        description:
          "Steam-distilled in Provence. Calming scent that doesn't overpower.",
      },
      {
        name: "Panthenol (Provitamin B5)",
        description:
          "Humectant and skin protectant that supports barrier repair in over-washed hands.",
      },
    ],
    howToUse:
      "Massage a small amount into clean, dry hands as needed. Pay extra attention to cuticles and knuckles.",
    benefits: [
      "Absorbs quickly, not greasy",
      "Softens even very dry, cracked hands",
      "Calming natural lavender scent",
      "Ethically sourced shea",
    ],
    skinType: ["All Skin Types", "Dry"],
    fullIngredients:
      "Aqua (Water), Butyrospermum Parkii (Shea) Butter, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Lavandula Angustifolia (Lavender) Oil, Panthenol, Tocopherol, Sodium Hyaluronate, Xanthan Gum, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    imageColor: "#8C9A7B",
    imageAccent: "#2A2520",
    imageShape: "tube",
  },
  {
    slug: "body-polish-sea-salt",
    name: "Body Polish — Sea Salt & Rosemary",
    subtitle: "Exfoliating salt scrub with botanical oils",
    category: "body-care",
    price: 42,
    size: "250 ml",
    rating: 4.6,
    reviewCount: 78,
    description:
      "A coarse sea salt polish with rosemary and citrus oils that leaves skin soft, smooth and ready to absorb body oil.",
    longDescription:
      "Body Polish is the body version of our Enzyme Papaya Peel — a deeper intervention for weekly use. Coarse Mediterranean sea salt physically exfoliates away dead skin cells, while a base of sweet almond oil, sunflower oil and rosemary essential oil nourishes the fresh skin beneath. Use in the shower once a week: massage a small amount onto damp skin in circular motions, focus on rough areas like elbows, knees and heels, then rinse. Follow with Citrus Bloom Body Oil on damp skin for the softest skin of your life.",
    keyIngredients: [
      {
        name: "Mediterranean Sea Salt",
        description:
          "Coarse, mineral-rich salt that physically exfoliates dead skin cells.",
      },
      {
        name: "Sweet Almond Oil",
        description:
          "Nourishes the freshly exfoliated skin. Prevents the salt from scratching.",
      },
      {
        name: "Rosemary Essential Oil",
        description:
          "Circulation-stimulating and naturally antibacterial. Invigorating scent.",
      },
    ],
    howToUse:
      "In the shower, massage a small amount onto damp skin in circular motions. Focus on elbows, knees and heels. Rinse. Follow with body oil or moisturizer. Use once a week. Not for use on the face.",
    benefits: [
      "Visibly smoother skin after one use",
      "Prepares skin to absorb body oil",
      "Invigorating rosemary scent",
      "Coarse, satisfying scrub texture",
    ],
    skinType: ["All Skin Types"],
    fullIngredients:
      "Maris Sal (Sea Salt), Prunus Amygdalus Dulcis (Sweet Almond) Oil, Helianthus Annuus (Sunflower) Seed Oil, Rosmarinus Officinalis (Rosemary) Leaf Oil, Citrus Aurantium Dulcis (Sweet Orange) Peel Oil, Tocopherol.",
    imageColor: "#A38B5C",
    imageAccent: "#2A2520",
    imageShape: "jar",
  },

  // ---------------- Sets ----------------
  {
    slug: "glow-routine-set",
    name: "The Glow Routine Set",
    subtitle: "Three-piece morning ritual",
    category: "sets",
    price: 142,
    compareAtPrice: 158,
    size: "3 pieces",
    rating: 4.9,
    reviewCount: 287,
    badge: "Bestseller",
    description:
      "Our most-loved three-piece ritual: cleanser, vitamin C serum and daily moisturizer. Save 10% versus buying individually.",
    longDescription:
      "The Glow Routine Set is the easiest way to start a Solène ritual. It contains everything you need for a complete morning and evening routine, formulated to layer cleanly and work synergistically. The set includes our Rosewater Cream Cleanser (150ml), Vitamin C Brightening Serum (30ml) and Daily Glow Face Cream (50ml) — together a 60-day supply at recommended usage. Each set comes packaged in a recycled-paper box tied with linen ribbon, with an inner flap detailing the morning-and-night order. It's our most-gifted item for a reason: it works.",
    keyIngredients: [
      {
        name: "Rosewater Cream Cleanser (150ml)",
        description: "Gentle milky cleanser for dry & sensitive skin.",
      },
      {
        name: "Vitamin C Brightening Serum (30ml)",
        description: "15% L-ascorbic acid with ferulic acid and vitamin E.",
      },
      {
        name: "Daily Glow Face Cream (50ml)",
        description: "Lightweight gel-cream moisturizer with squalane and mica.",
      },
    ],
    howToUse:
      "Morning: cleanse, apply vitamin C serum to dry skin, follow with moisturizer and SPF. Evening: cleanse, apply moisturizer. Full instructions included in the box.",
    benefits: [
      "Save 10% versus buying individually",
      "A complete 60-day ritual",
      "Formulated to layer cleanly",
      "Our most-gifted set",
    ],
    skinType: ["All Skin Types", "Normal", "Dry"],
    fullIngredients:
      "See individual product pages for full ingredient lists. Includes full-size Rosewater Cream Cleanser (150ml), Vitamin C Brightening Serum (30ml) and Daily Glow Face Cream (50ml).",
    imageColor: "#4A5D3A",
    imageAccent: "#FAF6EE",
    imageShape: "bottle",
  },
  {
    slug: "travel-discovery-kit",
    name: "Travel Discovery Kit",
    subtitle: "Five mini-size rituals for travel",
    category: "sets",
    price: 48,
    size: "5 × 15ml",
    rating: 4.7,
    reviewCount: 142,
    description:
      "Five 15ml minis of our best-loved formulas — perfect for travel, the gym bag, or sampling the ritual before committing.",
    longDescription:
      "The Travel Discovery Kit is the easiest way to try Solène before you commit to full sizes. Each kit contains five 15ml minis: Rosewater Cream Cleanser, Hyaluronic Hydra Serum, Vitamin C Brightening Serum, Daily Glow Face Cream, and Overnight Recovery Balm — a complete ritual for 7–10 days of travel, or two weeks of sampling at home. The minis are packaged in a small recycled-paper envelope with a printed ritual card. They're also carry-on approved at 15ml each. A thoughtful gift for the skincare-curious.",
    keyIngredients: [
      {
        name: "Rosewater Cream Cleanser (15ml)",
        description: "Mini of our gentle milky cleanser.",
      },
      {
        name: "Hyaluronic Hydra Serum (15ml)",
        description: "Mini of our multi-weight hydrating serum.",
      },
      {
        name: "Vitamin C Brightening Serum (15ml)",
        description: "Mini of our 15% L-ascorbic acid serum.",
      },
      {
        name: "Daily Glow Face Cream (15ml)",
        description: "Mini of our lightweight gel-cream moisturizer.",
      },
      {
        name: "Overnight Recovery Balm (15ml)",
        description: "Mini of our rich night cream with shea and peptides.",
      },
    ],
    howToUse:
      "Follow the printed ritual card included in the kit. Morning: cleanse, hyaluronic serum, vitamin C serum, moisturizer, SPF. Evening: cleanse, hyaluronic serum, recovery balm.",
    benefits: [
      "5 best-loved formulas in travel sizes",
      "Carry-on approved (15ml each)",
      "Complete 7–10 day ritual",
      "Perfect for sampling or gifting",
    ],
    skinType: ["All Skin Types"],
    fullIngredients:
      "See individual product pages for full ingredient lists. Includes 15ml minis of Rosewater Cream Cleanser, Hyaluronic Hydra Serum, Vitamin C Brightening Serum, Daily Glow Face Cream and Overnight Recovery Balm.",
    imageColor: "#C9824F",
    imageAccent: "#2A2520",
    imageShape: "bottle",
  },
  {
    slug: "mothers-day-gift-set",
    name: "Mother's Day Gift Set",
    subtitle: "Limited-edition three-piece with hand-poured candle",
    category: "sets",
    price: 98,
    compareAtPrice: 124,
    size: "3 pieces + candle",
    rating: 4.9,
    reviewCount: 64,
    badge: "Limited",
    description:
      "A limited-edition gift set: Rosewater Cream Cleanser, Overnight Recovery Balm, Lavender & Shea Hand Cream, and a hand-poured soy candle.",
    longDescription:
      "Our Mother's Day Gift Set is a limited-edition ritual, available from March through May each year. It includes our Rosewater Cream Cleanser (full size, 150ml), Overnight Recovery Balm (full size, 50ml), Lavender & Shea Hand Cream (full size, 75ml), and a hand-poured soy candle in a ceramic vessel, scented with lavender and neroli. The candle burns for 35 hours and the vessel is meant to be reused as a small planter. Each set is packaged in a recycled-paper box tied with linen ribbon and includes a hand-written gift card — just add your message at checkout. A meaningful gift, thoughtfully made.",
    keyIngredients: [
      {
        name: "Rosewater Cream Cleanser (150ml)",
        description: "Gentle milky cleanser for dry & sensitive skin.",
      },
      {
        name: "Overnight Recovery Balm (50ml)",
        description: "Rich night cream with shea, peptides and evening primrose.",
      },
      {
        name: "Lavender & Shea Hand Cream (75ml)",
        description: "Rich hand cream with raw shea and French lavender.",
      },
      {
        name: "Lavender & Neroli Soy Candle",
        description:
          "Hand-poured soy candle in a reusable ceramic vessel. 35-hour burn time.",
      },
    ],
    howToUse:
      "See individual product pages for usage. Candle: trim wick to 5mm before each burn. Burn for no more than 3 hours at a time. Never leave unattended.",
    benefits: [
      "Save 20% versus buying individually",
      "Hand-poured soy candle, reusable ceramic vessel",
      "Includes hand-written gift card",
      "Limited edition, available March–May",
    ],
    skinType: ["All Skin Types"],
    fullIngredients:
      "See individual product pages for full ingredient lists. Candle: Soy wax, lavender essential oil, neroli essential oil, cotton wick.",
    imageColor: "#B85C3C",
    imageAccent: "#FAF6EE",
    imageShape: "jar",
  },
];

// -----------------------------
// Testimonials
// -----------------------------
export const testimonials: Testimonial[] = [
  {
    name: "Élise M.",
    location: "Lyon, France",
    rating: 5,
    product: "Rosewater Cream Cleanser",
    quote:
      "I've spent years bouncing between cleansers that either stripped my skin or left it greasy. This one is the first that leaves my skin feeling exactly the way it should — soft, balanced, calm. The rose scent is delicate, not overpowering. I've already repurchased twice.",
  },
  {
    name: "Priya K.",
    location: "London, UK",
    rating: 5,
    product: "Vitamin C Brightening Serum",
    quote:
      "I had stubborn post-acne marks on my cheeks for years. After eight weeks of this serum every morning, they're visibly lighter. The texture is thin and easy to layer under SPF. It's the first vitamin C serum I've actually finished.",
  },
  {
    name: "Marisol R.",
    location: "Madrid, Spain",
    rating: 5,
    product: "Bakuchiol Renewal Serum",
    quote:
      "Retinol destroys my skin — redness, peeling, the works. Bakuchiol gives me the same smoothing effect without any of that. My skin texture has visibly improved over three months. So grateful to have found this.",
  },
  {
    name: "Yuki T.",
    location: "Tokyo, Japan",
    rating: 5,
    product: "Daily Glow Face Cream",
    quote:
      "I've been looking for a moisturizer that gives me that dewy, lit-from-within look without being heavy or greasy. This is it. Layers beautifully under my sunscreen and makeup. The mica gives just the right amount of sheen.",
  },
  {
    name: "Amara O.",
    location: "Lagos, Nigeria",
    rating: 5,
    product: "Pink Clay Detox Mask",
    quote:
      "Living in a hot, humid city, my skin gets congested easily. This mask draws everything out without leaving my skin tight. I use it once a week and my skin looks visibly brighter and clearer the next morning. The cream texture makes it easy to apply.",
  },
  {
    name: "Sofie B.",
    location: "Copenhagen, Denmark",
    rating: 5,
    product: "The Glow Routine Set",
    quote:
      "I bought this set to start a proper skincare ritual and I'm so glad I did. The three products work together perfectly. My skin has never looked better. The packaging is also beautiful — I gave the second set to my sister for her birthday.",
  },
];

// -----------------------------
// Blog Posts
// -----------------------------
export const blogPosts: BlogPost[] = [
  {
    slug: "ritual-of-slow-skincare",
    title: "The Ritual of Slow Skincare",
    excerpt:
      "Why we make skincare in small batches and why we want you to slow down to use it. A founder's note.",
    category: "Founder's Notes",
    author: "Camille Renard",
    date: "2025-08-12",
    readTime: "6 min",
    imageColor: "#4A5D3A",
    imageAccent: "#FAF6EE",
    content: [
      {
        paragraphs: [
          "When I started Solène in 2019, I had one rule: every formula had to be made in batches small enough that I could personally inspect every bottle. Six years later, that rule hasn't changed. We make our skincare in batches of 500, never larger. We could scale. We've been asked to scale, many times. We won't.",
          "Slow skincare isn't a marketing position for us. It's the only way we know how to make skincare that actually works. When you make in small batches, you can use cold-pressed botanical oils that go rancid in three months — because your products will be on a customer's shelf, being used, within those three months. When you make in batches of 50,000, you have to use refined, deodorized, stabilized oils that last two years on a warehouse shelf but have lost most of their active properties. The trade-off is invisible to most consumers, but it shows up in your skin.",
        ],
      },
      {
        heading: "What slow skincare means in practice",
        paragraphs: [
          "Every Solène formula is mixed by hand in our atelier in Lyon. We source our rosewater from a single valley in Bulgaria. Our shea butter comes from a women's cooperative in Burkina Faso that we've worked with since 2020. Our lavender is grown on a farm in Provence that I personally visit twice a year. None of this is the most efficient way to make skincare. It is, we believe, the only way to make skincare worth using.",
          "Slow also means: please don't rush through your ritual. Cleanser needs 60 seconds to dissolve what's on your skin. Serum needs 30 seconds to absorb before you layer the next product. Moisturizer needs a minute to settle before you apply SPF. If you're spending less than three minutes on your morning ritual, you're not getting the full benefit of what you've paid for. Slow down. Your skin will tell you when you've got it right.",
        ],
      },
      {
        heading: "Why we won't change",
        paragraphs: [
          "We've had offers from three large beauty conglomerates since 2022. Each time, the conversation has been the same: we love what you've built, we want to scale it, we'll keep the formulas the same. We've said no each time. We've said no because we know, from working in those companies earlier in our careers, what scaling does to a formula. The rosewater gets replaced with synthetic fragrance. The shea gets replaced with shea blend. The cold-pressed oils get replaced with refined oils that last two years instead of three months. The product looks the same. It is not the same.",
          "We will stay small. We will keep making in batches of 500. We will keep visiting our farms. We will keep writing to you, here, about what we're learning. And we will keep asking you to slow down enough to let the ritual work.",
        ],
      },
    ],
  },
  {
    slug: "why-bakuchiol-not-retinol",
    title: "Why Bakuchiol, Not Retinol",
    excerpt:
      "Retinol is the gold standard of anti-ageing — but it's not the only option. A practical guide to bakuchiol.",
    category: "Ingredients",
    author: "Solène Lab Team",
    date: "2025-07-28",
    readTime: "8 min",
    imageColor: "#A38B5C",
    imageAccent: "#FAF6EE",
    content: [
      {
        paragraphs: [
          "Retinol — a derivative of vitamin A — is one of the most studied and effective skincare ingredients in existence. It accelerates cell turnover, stimulates collagen synthesis, fades hyperpigmentation, and reduces the depth of fine lines. It works. So why did we formulate our anti-ageing serum with bakuchiol instead?",
          "Because retinol is also one of the most difficult skincare ingredients to use. It causes redness, peeling, dryness and sun sensitivity, especially in the first six to eight weeks of use. It can't be used during pregnancy or breastfeeding. It degrades in sunlight and is destabilized by many other common skincare ingredients. For every person who successfully integrates retinol into their ritual, there are two who give up because of the side effects, and one who never starts because they've heard the horror stories.",
        ],
      },
      {
        heading: "What bakuchiol is",
        paragraphs: [
          "Bakuchiol is a meroterpene phenol extracted from the seeds of the Psoralea corylifolia plant, which has been used in Ayurvedic and Chinese medicine for centuries. In 2018, a peer-reviewed clinical study published in the British Journal of Dermatology compared bakuchiol to retinol over 12 weeks. The results were striking: bakuchiol produced statistically significant improvements in fine lines, wrinkles, pigmentation, elasticity and firmness — comparable to retinol — but without the dryness, peeling, stinging or sun sensitivity.",
          "Bakuchiol works by stimulating the same collagen-producing genes as retinol, but through a different cellular pathway. It doesn't bind to retinoic acid receptors — instead, it upregulates the expression of collagen I, III and IV, and inhibits the enzymes that break down existing collagen. The mechanism is different; the result, for most skin types, is the same.",
        ],
      },
      {
        heading: "When to choose which",
        paragraphs: [
          "We recommend bakuchiol for almost everyone. It's particularly well-suited for: sensitive skin types who can't tolerate retinol; people who are pregnant or breastfeeding; people who have tried retinol and given up; people who want a low-maintenance ritual that doesn't require careful layering and SPF vigilance.",
          "There is one situation where we still recommend retinol: significant, established photo-ageing in skin types that tolerate retinol well. If you've used retinol for years without issue and you're seeing the results you want, there's no reason to switch. Bakuchiol is comparable but not identical — retinol remains the more potent option for severe concerns. For everyone else — and that's most people — bakuchiol is what we'd reach for.",
          "Our Bakuchiol Renewal Serum contains 1.5% bakuchiol — the clinically studied concentration — in a base of squalane, rosehip seed oil and bisabolol. Apply three to four drops to clean, dry skin in the evening. Follow with moisturizer. Use it daily, including during pregnancy. Always wear SPF during the day.",
        ],
      },
    ],
  },
  {
    slug: "build-a-3-step-routine",
    title: "How to Build a 3-Step Skincare Routine",
    excerpt:
      "The simplest, most effective skincare ritual you can build — and the order in which to apply each step.",
    category: "Rituals",
    author: "Solène Lab Team",
    date: "2025-07-10",
    readTime: "5 min",
    imageColor: "#C9824F",
    imageAccent: "#FAF6EE",
    content: [
      {
        paragraphs: [
          "Skincare has become unnecessarily complicated. Walk into any beauty store and you'll see 12-step routines, 8-step routines, essences, toners, mists, ampoules, treatments, masks, sheet masks, sleeping packs — the list goes on. Most of these products are doing the same thing, in slightly different ways, and most people don't need most of them.",
          "Here's the truth: a complete, effective skincare ritual requires three steps. Cleanser, serum, moisturizer. Everything else is either a weekly intervention (mask, exfoliant) or a personal choice (face oil, eye cream, facial mist, SPF). If you're starting from scratch or simplifying, here's the routine we recommend.",
        ],
      },
      {
        heading: "Step 1: Cleanse",
        paragraphs: [
          "Cleanse morning and night. In the morning, you're removing the night's sebum, sweat and residual product. In the evening, you're removing the day — sunscreen, makeup, pollution, particulate matter. Both matter.",
          "Choose your cleanser by skin type: Rosewater Cream Cleanser for dry and sensitive skin, Charcoal Detox Wash for oily and combination skin, Oat Milk Gentle Cleanser for reactive or post-treatment skin. Massage for at least 60 seconds — most people rush this step. Add warm water, rinse, pat dry.",
        ],
      },
      {
        heading: "Step 2: Treat",
        paragraphs: [
          "Serums are where the work gets done. Choose one based on your primary skin concern: Vitamin C Brightening Serum for hyperpigmentation and glow, in the morning. Bakuchiol Renewal Serum for fine lines and texture, in the evening. Niacinamide Pore Refiner for oily skin and pore size. Hyaluronic Hydra Serum for hydration — and yes, you need this even if you have oily skin.",
          "If you're starting, pick one serum. Apply three to five drops to clean, slightly damp skin. Press gently — don't rub. Wait 30 seconds before applying the next step. Most people don't need to layer multiple serums, and many actives conflict with each other. Start simple.",
        ],
      },
      {
        heading: "Step 3: Moisturize",
        paragraphs: [
          "Moisturizer is what seals everything in. Without it, your serum evaporates and your barrier weakens. Choose by skin type: Daily Glow Face Cream for normal, combination and oily skin. Overnight Recovery Balm for dry and mature skin, used in the evening. Oil-Free Gel Moisturizer for oily and acne-prone skin, or for hot and humid climates.",
          "In the morning, apply moisturizer after your serum and follow with SPF. SPF is non-negotiable — it's the single most effective anti-ageing product in existence. Choose one you'll actually wear every day. In the evening, apply moisturizer as the final step. That's it. Three steps, morning and night. Everything else is optional.",
        ],
      },
    ],
  },
  {
    slug: "lavender-farm-provence",
    title: "Meet Our Lavender Farm Partner in Provence",
    excerpt:
      "A photo essay from our visit to the Plateau de Valensole, where our lavender is grown, harvested and distilled.",
    category: "Sourcing",
    author: "Camille Renard",
    date: "2025-06-22",
    readTime: "7 min",
    imageColor: "#8C9A7B",
    imageAccent: "#FAF6EE",
    content: [
      {
        paragraphs: [
          "Every July, the Plateau de Valensole in Haute-Provence turns purple. The lavender fields — kilometres of them — bloom in unison, painting the landscape a colour so saturated it doesn't look real. I visit every year, the same week of July, when the lavender is at peak bloom and just days away from harvest.",
          "We've worked with the same family-run farm since 2020. Jean-Luc and his daughter Marie cultivate 12 hectares of Lavandula angustifolia — true lavender, the kind used in fine perfumery and clinical skincare, not the hybrid lavandin you find in cheaper products. They harvest by hand in late July, before the sun has fully dried the morning dew, and distill the flowers in a copper still that's been in their family for four generations.",
        ],
      },
      {
        heading: "Why the source matters",
        paragraphs: [
          "Lavender essential oil is one of the most commonly adulterated ingredients in skincare. Synthetic linalool, diluted lavandin, and completely synthetic lavender fragrance are all sold as 'lavender oil' to skincare brands that don't — or can't — verify their source. The result is a product that smells like lavender but doesn't have the calming, anti-inflammatory properties that real lavender provides.",
          "When you work with a farm like Jean-Luc and Marie's, you can stand in the field during harvest, watch the distillation, and trace every drop of oil back to the hectare it came from. Our Lavender & Shea Hand Cream contains only lavender essential oil from their farm. When we say French lavender, we mean it. We can show you exactly where it grew.",
        ],
      },
      {
        heading: "What the visit looked like this year",
        paragraphs: [
          "I arrived at the farm on a Sunday morning in late July, just after the harvest had begun. The fields were half-cut — the morning shift had finished a section before the heat of the day set in. The air smelled of cut grass and lavender, a combination I'll never get tired of. Jean-Luc's dog, Olive, followed us through the rows. Marie was running the still in the small stone distillery at the edge of the property, copper piping coiling through cold water, the essential oil collecting drop by drop in a glass separator.",
          "We stayed for three days. We talked about the weather (the harvest was early this year because of the heat), the soil (Marie has started using regenerative cover crops between rows), and the next generation (her younger brother wants to take over the farm in ten years). We left with 40 litres of essential oil — enough for the next 18 months of Hand Cream and our limited-edition candle. We'll be back next July.",
        ],
      },
    ],
  },
  {
    slug: "truth-about-natural-fragrance",
    title: "The Truth About 'Natural' Fragrance",
    excerpt:
      "The word 'fragrance' on a skincare label can mean almost anything. Here's how we think about it.",
    category: "Ingredients",
    author: "Solène Lab Team",
    date: "2025-05-30",
    readTime: "6 min",
    imageColor: "#B85C3C",
    imageAccent: "#FAF6EE",
    content: [
      {
        paragraphs: [
          "If you read skincare labels closely, you'll see the word 'fragrance' (or 'parfum') on almost every product. In the EU, that single word can legally represent any combination of up to 100 different chemical compounds, none of which the brand is required to disclose. 'Natural fragrance' sounds better — but in practice, a 'natural fragrance' can be a chemically extracted isolate of a single molecule that originally came from a plant. It's not the plant. It's a single compound, isolated, suspended in solvent, and labeled 'natural' because the original source was botanical.",
          "This is not necessarily a bad thing. Many isolates are well-tolerated and give products a cleaner, more consistent scent than whole essential oils. But it does mean that 'natural fragrance' tells you very little about what's in the bottle. If you have sensitive skin, fragrance allergies, or you're just trying to understand what you're putting on your body, the label is nearly useless.",
        ],
      },
      {
        heading: "How Solène thinks about fragrance",
        paragraphs: [
          "We don't use synthetic fragrance. Every scent in our products comes from a real, identifiable, plant-derived source: rosewater from Bulgaria, lavender essential oil from Provence, sweet orange and neroli from Sicily, rosemary from the Mediterranean coast. We list each one by its INCI name on the label, so you can look it up.",
          "We also don't add fragrance to every product. Our Oil-Free Gel Moisturizer, Hyaluronic Hydra Serum, Niacinamide Pore Refiner, Oat Milk Gentle Cleanser and Vitamin C Brightening Serum are all fragrance-free — they contain no added scent, synthetic or natural. They smell like their ingredients: mostly nothing, sometimes slightly of aloe or vitamin C. We think that's honest. We think 'unscented' is a feature, not a missing feature.",
        ],
      },
      {
        heading: "If you have sensitive skin",
        paragraphs: [
          "If you have sensitive skin, rosacea, eczema, or known fragrance allergies, start with our fragrance-free products: Oat Milk Gentle Cleanser, Hyaluronic Hydra Serum, Oil-Free Gel Moisturizer, and Pink Clay Detox Mask. They contain no essential oils, no natural fragrance isolates, and no synthetic fragrance. They are the formulas we recommend for post-procedure skin, for newborns' mothers, and for anyone whose skin reacts to everything.",
          "If you'd like a product with a scent — for the ritual, for the pleasure of it — choose from our scented range: Rosewater Cream Cleanser, Lavender & Shea Hand Cream, Body Oil Citrus Bloom, Body Polish Sea Salt & Rosemary. Each is scented only with steam-distilled essential oils, listed by name on the label. If you have any questions about a specific ingredient, write to us. We'll tell you exactly what's in the bottle and why.",
        ],
      },
    ],
  },
];

// -----------------------------
// FAQ Items
// -----------------------------
export const faqItems = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long will my order take to arrive?",
        a: "Domestic orders within the EU ship from our atelier in Lyon, France. Standard shipping takes 3–5 business days; express shipping takes 1–2 business days. International orders take 7–14 business days depending on destination. You'll receive a tracking number by email the moment your order ships.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes — we offer free standard shipping on all orders over €60, anywhere in the EU and to the UK. Orders under €60 ship for a flat rate of €5.50. International orders outside the EU are calculated at checkout based on destination and weight.",
      },
      {
        q: "Can I change or cancel my order after placing it?",
        a: "Yes, as long as your order hasn't yet shipped. Orders are usually packed and dispatched within 24 hours of being placed (Monday to Friday). Write to us at hello@solene.skincare within that window and we'll do our best to catch it before it leaves the atelier.",
      },
      {
        q: "Do you ship internationally?",
        a: "We ship to over 40 countries worldwide, including the EU, UK, USA, Canada, Australia, New Zealand, Japan, Singapore, and the UAE. Customs duties and import taxes may apply for destinations outside the EU; these are calculated and shown at checkout where possible, or payable on delivery.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns on unopened products within 30 days of delivery for a full refund. Opened products can be returned within 30 days for store credit, no questions asked — if a product didn't work for your skin, we'd rather you find one that does. Return shipping is free for EU customers; international returns are paid by the customer.",
      },
      {
        q: "How do I start a return?",
        a: "Log in to your account, find the order you'd like to return, and click 'Start a return'. You'll receive a return label by email within 24 hours. Drop the package at your nearest post office — no need to package it yourself if you still have the original box. Refunds are processed within 5 business days of us receiving the return.",
      },
      {
        q: "My product arrived damaged. What do I do?",
        a: "We're so sorry. Please send a photo of the damaged product and your order number to hello@solene.skincare within 7 days of delivery and we'll send a replacement immediately, no return required. We package carefully but breakages happen — we'll make it right.",
      },
    ],
  },
  {
    category: "Products & Ingredients",
    questions: [
      {
        q: "Are Solène products vegan and cruelty-free?",
        a: "All Solène products are vegan and certified cruelty-free by Leaping Bunny. We never test on animals, and we don't work with any supplier who does. The only animal-derived ingredient we've ever used is honey (in our Honey Overnight Mask) and propolis (in the same product), both sourced from a small apiary in the South of France. Everything else is fully plant-based.",
      },
      {
        q: "Are Solène products safe to use during pregnancy?",
        a: "Most Solène products are safe to use during pregnancy and breastfeeding. The exception is retinol and high-concentration salicylic acid — we don't formulate with either. Our Bakuchiol Renewal Serum is specifically recommended as a retinol alternative during pregnancy. If you have any concerns, we recommend showing our ingredient lists to your healthcare provider; we list every ingredient, in INCI format, on each product page.",
      },
      {
        q: "What is the shelf life of Solène products?",
        a: "Our products have a shelf life of 18 months unopened, and 6 months opened (12 months for oil-based products). Each product is stamped with both a batch number and a PAO (Period After Opening) symbol on the bottom of the bottle or jar. Because we make in small batches, our products typically reach you within 3 months of being made.",
      },
      {
        q: "Why do some Solène products have a stronger scent than others?",
        a: "We never use synthetic fragrance. Scented products are scented only with steam-distilled essential oils, listed by name on the label. Several of our products are completely fragrance-free — these are clearly marked on the product page. If you have sensitive skin, start with our fragrance-free range.",
      },
    ],
  },
  {
    category: "Account & Subscriptions",
    questions: [
      {
        q: "Do I need an account to place an order?",
        a: "No — you can check out as a guest. Creating an account makes future orders faster, lets you track shipments, and lets you manage subscriptions and returns. You can create an account at any time, including after your first order.",
      },
      {
        q: "Do you offer subscriptions?",
        a: "Yes. You can subscribe to any product on a 30, 45, or 60-day cycle and save 10% on every delivery. Subscriptions can be paused, skipped, or cancelled at any time from your account dashboard. We'll email you a reminder 3 days before each shipment so you're never surprised.",
      },
      {
        q: "How do I redeem a discount code?",
        a: "Enter your discount code in the 'Discount code' field at checkout and click 'Apply'. Only one discount code can be used per order. Discount codes cannot be applied to gift cards or to subscription orders (subscriptions are already discounted 10%).",
      },
    ],
  },
];

// -----------------------------
// Site navigation
// -----------------------------
export const siteNav = {
  primary: [
    { label: "Shop All", href: "/collections/all" },
    {
      label: "Cleansers",
      href: "/collections/cleansers",
    },
    {
      label: "Serums",
      href: "/collections/serums",
    },
    {
      label: "Moisturizers",
      href: "/collections/moisturizers",
    },
    {
      label: "Masks",
      href: "/collections/masks",
    },
    {
      label: "Body Care",
      href: "/collections/body-care",
    },
    { label: "Sets & Rituals", href: "/collections/sets" },
  ],
  secondary: [
    { label: "Our Story", href: "/pages/about" },
    { label: "Ingredients", href: "/pages/ingredients" },
    { label: "Sustainability", href: "/pages/sustainability" },
    { label: "Journal", href: "/blogs/journal" },
    { label: "Contact", href: "/pages/contact" },
    { label: "FAQ", href: "/pages/faq" },
  ],
};

export const brandInfo = {
  name: "Solène",
  tagline: "Botanical skincare, made with intention.",
  description:
    "Cold-pressed botanical skincare, formulated in small batches in Lyon, France. Clean, vegan, cruelty-free.",
  email: "hello@solene.skincare",
  phone: "+33 4 72 00 00 00",
  address: "12 Rue Pasteur, 69007 Lyon, France",
  instagram: "@solene.skincare",
  founded: "2019",
  founder: "Camille Renard",
};

// -----------------------------
// Helper functions
// -----------------------------
export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getProductsByCollection(slug: string): Product[] {
  if (slug === "all") return products;
  return products.filter((p) => p.category === slug);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(cents);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  const sameCategory = products.filter(
    (p) => p.category === current.category && p.slug !== slug,
  );
  const others = products.filter(
    (p) => p.category !== current.category && p.slug !== slug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
