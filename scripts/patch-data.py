#!/usr/bin/env python3
"""Inject image paths into site-data.ts for products, collections, blog posts.
Each slug maps to a single generated photorealistic image at /images/<slug>/1.jpg
"""
import json
import re
from pathlib import Path

DATA_FILE = Path("/home/z/my-project/src/lib/site-data.ts")

# Each slug -> the image folder name
PRODUCT_SLUGS = [
    "rosewater-cream-cleanser", "charcoal-detox-wash", "oat-milk-gentle-cleanser",
    "vitamin-c-brightening-serum", "hyaluronic-hydra-serum", "bakuchiol-renewal-serum",
    "niacinamide-pore-refiner", "daily-glow-face-cream", "overnight-recovery-balm",
    "oil-free-gel-moisturizer", "pink-clay-detox-mask", "enzyme-papaya-peel",
    "honey-overnight-mask", "body-oil-citrus-bloom", "hand-cream-lavender-shea",
    "body-polish-sea-salt", "glow-routine-set", "travel-discovery-kit",
    "mothers-day-gift-set",
]
COLLECTION_IMG = {
    "cleansers": "collection-cleansers",
    "serums": "collection-serums",
    "moisturizers": "collection-moisturizers",
    "masks": "collection-masks",
    "body-care": "collection-body-care",
    "sets": "collection-sets",
}
BLOG_IMG = {
    "ritual-of-slow-skincare": "blog-slow-skincare",
    "why-bakuchiol-not-retinol": "blog-bakuchiol",
    "build-a-3-step-routine": "blog-3-step-routine",
    "lavender-farm-provence": "blog-lavender-farm",
    "truth-about-natural-fragrance": "blog-fragrance",
}

with open(DATA_FILE) as f:
    content = f.read()

def patch_after_subtitle(content, slug):
    """Insert image + imageGallery after the subtitle line of this product."""
    pattern = re.compile(r'    slug: "' + re.escape(slug) + r'",\n    name: "[^"]+",\n    subtitle: "[^"]+",\n')
    m = pattern.search(content)
    if not m:
        return content, False
    insert_pos = m.end()
    img = f"/images/{slug}/1.jpg"
    # gallery = 4 variants of the same image (we only generated 1 per product to save time)
    gallery = [img]
    insert_block = f'    image: "{img}",\n    imageGallery: {json.dumps(gallery)},\n'
    return content[:insert_pos] + insert_block + content[insert_pos:], True

def patch_before_imageColor(content, slug, img_key):
    """Insert image field before imageColor in collection/blog objects."""
    img = f"/images/{img_key}/1.jpg"
    pattern = re.compile(r'    slug: "' + re.escape(slug) + r'",\n')
    m = pattern.search(content)
    if not m:
        return content, False
    after_slug = m.end()
    color_pos = content.find("imageColor:", after_slug)
    if color_pos < 0:
        return content, False
    line_start = content.rfind("\n", 0, color_pos) + 1
    insert_block = f'    image: "{img}",\n'
    return content[:line_start] + insert_block + content[line_start:], True

# Patch products
p_count = 0
for slug in PRODUCT_SLUGS:
    content, ok = patch_after_subtitle(content, slug)
    if ok: p_count += 1
    else: print(f"✗ product not patched: {slug}")
print(f"Products patched: {p_count}/{len(PRODUCT_SLUGS)}")

# Patch collections
c_count = 0
for slug, img_key in COLLECTION_IMG.items():
    content, ok = patch_before_imageColor(content, slug, img_key)
    if ok: c_count += 1
    else: print(f"✗ collection not patched: {slug}")
print(f"Collections patched: {c_count}/{len(COLLECTION_IMG)}")

# Patch blogs
b_count = 0
for slug, img_key in BLOG_IMG.items():
    content, ok = patch_before_imageColor(content, slug, img_key)
    if ok: b_count += 1
    else: print(f"✗ blog not patched: {slug}")
print(f"Blog posts patched: {b_count}/{len(BLOG_IMG)}")

with open(DATA_FILE, "w") as f:
    f.write(content)
print("\n✓ site-data.ts updated")
