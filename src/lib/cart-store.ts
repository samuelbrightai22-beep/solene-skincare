"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products, type Product } from "@/lib/site-data";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  size: string;
  imageColor: string;
  imageAccent: string;
  imageShape: Product["imageShape"];
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  setOpen: (open: boolean) => void;
  total: () => number;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (slug, quantity = 1) => {
        const product = products.find((p) => p.slug === slug);
        if (!product) return;
        const existing = get().items.find((i) => i.slug === slug);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.slug === slug
                ? { ...i, quantity: i.quantity + quantity }
                : i,
            ),
            isOpen: true,
          });
        } else {
          set({
            items: [
              ...get().items,
              {
                slug: product.slug,
                name: product.name,
                price: product.price,
                size: product.size,
                imageColor: product.imageColor,
                imageAccent: product.imageAccent,
                imageShape: product.imageShape,
                quantity,
              },
            ],
            isOpen: true,
          });
        }
      },
      removeItem: (slug) => {
        set({ items: get().items.filter((i) => i.slug !== slug) });
      },
      updateQuantity: (slug, quantity) => {
        if (quantity <= 0) {
          set({ items: get().items.filter((i) => i.slug !== slug) });
          return;
        }
        set({
          items: get().items.map((i) =>
            i.slug === slug ? { ...i, quantity } : i,
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      setOpen: (open) => set({ isOpen: open }),
      total: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    {
      name: "solene-cart",
    },
  ),
);
