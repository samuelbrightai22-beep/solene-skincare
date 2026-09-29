#!/usr/bin/env python3
"""
Generate photorealistic product images for the Solène skincare site.
Each image is a real photograph-style product shot — no animations, no cartoons.
"""
import json
import os
import subprocess
import time
import sys
from pathlib import Path

PUBLIC_DIR = Path("/home/z/my-project/public/images")
PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

# Shared style suffix — keeps every image looking like the same brand shoot
STYLE = (
    "photorealistic product photography, professional studio lighting, "
    "soft diffused light from upper left, warm cream linen background (#FAF6EE), "
    "subtle natural shadow, minimalist botanical skincare aesthetic, "
    "centered composition, high resolution, sharp focus, no text, no logo, "
    "no people, no animation, no cartoon, no illustration, still life photograph"
)

# (slug, prompt)
# 19 products — each gets ONE primary image. Gallery will reuse same image with crop variations.
GENERATIONS = [
    # ---- Cleansers ----
    ("rosewater-cream-cleanser", "A frosted glass pump bottle of pink rosewater cream cleanser, pale rose liquid visible through the glass, brushed silver pump, small dried pink rose petals scattered at the base, " + STYLE),
    ("charcoal-detox-wash", "A matte black tube of charcoal detox face wash with silver cap, lying at a slight angle, small pieces of black bamboo charcoal beside it, dark grey-green accent, " + STYLE),
    ("oat-milk-gentle-cleanser", "A tall frosted glass bottle of oat milk gentle cleanser, pale creamy liquid inside, beige pump top, scattered raw oats and a single oat stalk at the base, " + STYLE),
    # ---- Serums ----
    ("vitamin-c-brightening-serum", "An amber glass dropper bottle of vitamin C brightening serum, orange-amber liquid visible, black rubber dropper bulb, a fresh orange half and a single dried rosehip beside it, " + STYLE),
    ("hyaluronic-hydra-serum", "A clear glass dropper bottle of hyaluronic hydra serum, transparent gel visible inside, silver dropper cap, small water droplets on the surface beside the bottle, " + STYLE),
    ("bakuchiol-renewal-serum", "An amber glass dropper bottle of bakuchiol renewal serum, golden oil inside, dark dropper, a small dish of bakuchiol seeds and a sprig of green leaves, " + STYLE),
    ("niacinamide-pore-refiner", "A small clear glass dropper bottle of niacinamide pore refiner serum, slightly viscous transparent liquid, silver dropper cap, a single green leaf beside it, " + STYLE),
    # ---- Moisturizers ----
    ("daily-glow-face-cream", "A round white frosted glass jar of daily glow face cream, ivory cream visible, brushed gold lid, soft glow on the cream surface, " + STYLE),
    ("overnight-recovery-balm", "A round amber glass jar of overnight recovery balm, rich golden cream visible, dark wooden lid, a sprig of evening primrose flowers beside it, " + STYLE),
    ("oil-free-gel-moisturizer", "A round pale green glass jar of oil-free gel moisturizer, translucent green gel visible, brushed silver lid, fresh green leaf accent, " + STYLE),
    # ---- Masks ----
    ("pink-clay-detox-mask", "A round ceramic-style jar of pink clay detox mask, soft pink clay visible inside, light wooden lid, scattered pink kaolin clay powder around the base, " + STYLE),
    ("enzyme-papaya-peel", "A frosted glass dropper bottle of enzyme papaya peel exfoliant, soft orange liquid inside, silver dropper cap, fresh papaya slices beside it, " + STYLE),
    ("honey-overnight-mask", "A round amber glass jar of honey overnight mask, golden honey-colored cream visible, dark wooden lid, a small piece of honeycomb dripping with honey beside it, " + STYLE),
    # ---- Body care ----
    ("body-oil-citrus-bloom", "A tall clear glass bottle of citrus bloom body oil, pale golden oil with a citrus tint, silver pump cap, fresh orange and yellow flower blossoms beside it, " + STYLE),
    ("hand-cream-lavender-shea", "A soft lavender-colored metal tube of hand cream with white cap, standing upright, a small bundle of dried lavender stems beside it, " + STYLE),
    ("body-polish-sea-salt", "A round glass jar of sea salt body polish, coarse salt crystals visible at the top, beige cream below, wooden spoon resting beside it, sprig of fresh rosemary, " + STYLE),
    # ---- Sets ----
    ("glow-routine-set", "Three minimalist skincare bottles arranged together as a set — a frosted cleanser pump bottle, an amber dropper serum, and a white cream jar — tied with linen ribbon, " + STYLE),
    ("travel-discovery-kit", "Five small travel-sized skincare bottles and jars arranged in a row, miniature versions of cleanser serum and cream, " + STYLE),
    ("mothers-day-gift-set", "A recycled paper gift box tied with linen ribbon, three skincare items inside visible from above — a cleanser, a cream jar, and a hand cream tube — plus a small soy candle in a ceramic vessel, " + STYLE),
    # ---- Collections (6) ----
    ("collection-cleansers", "Three facial cleanser bottles of different sizes and materials — frosted glass pump, matte black tube, and tall amber bottle — arranged in a triangular composition, " + STYLE),
    ("collection-serums", "Three serum dropper bottles — amber, clear, and frosted glass — arranged together with droppers visible, " + STYLE),
    ("collection-moisturizers", "Three face cream jars of different shapes and sizes — round white, round amber, and round pale green — arranged together, " + STYLE),
    ("collection-masks", "Three mask jars — pink ceramic-style, amber glass with honey, and frosted glass dropper — arranged together, " + STYLE),
    ("collection-body-care", "Three body care items — tall body oil bottle, hand cream tube, and body polish jar — arranged together, " + STYLE),
    ("collection-sets", "Three skincare gift sets in recycled paper boxes tied with linen ribbon, arranged at staggered heights, " + STYLE),
    # ---- Blog (5) ----
    ("blog-slow-skincare", "A serene bathroom shelf with three minimalist skincare bottles arranged neatly, soft morning light, a small vase with a single botanical stem, calm and contemplative mood, " + STYLE),
    ("blog-bakuchiol", "A close-up of botanical ingredients — bakuchiol seeds in a small ceramic dish, a sprig of green leaves, a dropper bottle of golden oil in soft focus behind, " + STYLE),
    ("blog-3-step-routine", "Three skincare bottles arranged in a horizontal row — cleanser, serum, moisturizer — with a small linen cloth folded beside them, suggesting a daily ritual, " + STYLE),
    ("blog-lavender-farm", "A vast lavender field in Provence at golden hour, rows of purple lavender stretching to the horizon, distant stone farmhouse, warm summer light, photorealistic landscape photograph, no people, no text, high resolution"),
    ("blog-fragrance", "A row of small amber glass bottles of essential oil with handwritten labels, fresh flower blossoms and herb sprigs beside them, soft natural light, " + STYLE),
    # ---- About / founder (2) ----
    ("about-founder", "A female skincare formulator in a linen apron in a sunlit atelier, holding a glass dropper, shelves of botanical ingredients and amber bottles behind her, soft natural light from a window, photorealistic editorial photograph, no text, high resolution, warm and intimate mood"),
    ("about-atelier", "An atelier workbench with glass beakers, a copper distillation still, dried botanical bundles, amber glass bottles, and a wooden mortar and pestle, soft morning light from a side window, photorealistic editorial photograph, no people, no text, high resolution"),
]

def generate_one(slug, prompt, size="1024x1024"):
    out_dir = PUBLIC_DIR / slug
    out_dir.mkdir(exist_ok=True)
    out_path = out_dir / "1.jpg"
    if out_path.exists() and out_path.stat().st_size > 10000:
        return True, "cached"
    # CLI prints status lines; the -o flag writes the file directly
    cmd = ["z-ai", "image", "-p", prompt, "-o", str(out_path), "-s", size]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
        if out_path.exists() and out_path.stat().st_size > 10000:
            return True, "generated"
        return False, result.stderr[:200] if result.stderr else "unknown"
    except subprocess.TimeoutExpired:
        return False, "timeout"
    except Exception as e:
        return False, str(e)[:200]

def main():
    # Allow partial regeneration via args
    only = sys.argv[1:] if len(sys.argv) > 1 else None

    total = len(GENERATIONS)
    succeeded = 0
    failed = []
    for i, (slug, prompt) in enumerate(GENERATIONS, 1):
        if only and slug not in only:
            continue
        print(f"[{i}/{total}] {slug}...", flush=True)
        ok, status = generate_one(slug, prompt)
        if ok:
            succeeded += 1
            print(f"  ✓ {status}", flush=True)
        else:
            failed.append(slug)
            print(f"  ✗ FAILED: {status}", flush=True)
        # Rate limit protection
        time.sleep(2)
    print(f"\nDone. {succeeded} succeeded, {len(failed)} failed.")
    if failed:
        print("Failed slugs:")
        for s in failed:
            print(f"  - {s}")

if __name__ == "__main__":
    main()
