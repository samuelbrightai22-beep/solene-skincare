"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Search, ShoppingBag, X, User } from "lucide-react";
import { Logo } from "./logo";
import { AnnouncementBar } from "./announcement-bar";
import { CartDrawer } from "./cart-drawer";
import { useCart } from "@/lib/cart-store";
import { collections, siteNav } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartCount = useCart((s) => s.count());
  const setOpen = useCart((s) => s.setOpen);

  const closeMobile = () => setMobileOpen(false);
  const closeSearch = () => setSearchOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = useCart.subscribe((s) => setCartOpen(s.isOpen));
    return () => unsubscribe();
  }, []);

  const openCart = () => setOpen(true);

  return (
    <>
      <AnnouncementBar />
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-colors duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-md border-border/80"
            : "bg-background border-transparent",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Left: mobile menu + secondary nav (desktop) */}
            <div className="flex flex-1 items-center gap-2">
              <button
                className="md:hidden -ml-1 p-2 text-foreground"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
              <nav className="hidden md:flex items-center gap-5 text-sm">
                {siteNav.secondary.slice(0, 3).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "link-underline text-foreground/80 hover:text-foreground transition-colors",
                      pathname === item.href && "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Center: logo */}
            <div className="flex items-center justify-center">
              <Logo />
            </div>

            {/* Right: search + account + cart */}
            <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2">
              <button
                className="p-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link
                href="/pages/contact"
                className="hidden md:block p-2 text-foreground hover:text-accent transition-colors"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Link>
              <button
                className="relative p-2 text-foreground hover:text-accent transition-colors"
                onClick={openCart}
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-accent-foreground">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Primary nav (desktop) */}
          <nav className="hidden md:flex items-center justify-center gap-6 pb-2 text-sm">
            {siteNav.primary.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "link-underline py-1 text-foreground/80 hover:text-foreground transition-colors",
                    pathname.startsWith(item.href) && "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div className="absolute inset-x-0 top-full border-t border-border bg-background shadow-md">
            <div className="mx-auto max-w-3xl px-4 py-6">
              <form action="/search" method="GET" className="flex gap-2">
                <input
                  type="search"
                  name="q"
                  placeholder="Search products, ingredients, journal…"
                  className="flex-1 bg-transparent border-b border-border px-2 py-3 text-lg font-serif placeholder:text-foreground/40 focus:outline-none focus:border-accent"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Search
                </button>
                <button
                  type="button"
                  className="p-2 text-foreground/60 hover:text-foreground"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[88%] max-w-sm bg-background shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <Logo onClick={() => setMobileOpen(false)} />
              <button
                className="p-2 text-foreground"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-4 py-6">
              <p className="font-serif text-xs uppercase tracking-[0.2em] text-foreground/60 mb-3">
                Shop
              </p>
              <nav className="flex flex-col">
                {siteNav.primary.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                    className="py-2 text-foreground/90 border-b border-border/50 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <p className="font-serif text-xs uppercase tracking-[0.2em] text-foreground/60 mt-6 mb-3">
                Discover
              </p>
              <nav className="flex flex-col">
                {siteNav.secondary.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                    className="py-2 text-foreground/90 border-b border-border/50 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      <CartDrawer open={cartOpen} onClose={() => setOpen(false)} />
    </>
  );
}
