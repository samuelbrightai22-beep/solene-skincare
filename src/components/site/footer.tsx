import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { Newsletter } from "./newsletter";
import { siteNav, collections, brandInfo } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-auto bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter band */}
        <div className="border-b border-background/15 py-12">
          <Newsletter variant="light" />
        </div>

        {/* Main footer */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-background/70 max-w-xs">
              {brandInfo.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-background/70">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{brandInfo.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${brandInfo.email}`}
                  className="hover:text-background transition-colors"
                >
                  {brandInfo.email}
                </a>
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
            >
              <Instagram className="h-4 w-4" />
              {brandInfo.instagram}
            </a>
          </div>

          <div>
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-background/60 mb-4">
              Shop
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/collections/all"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  All Products
                </Link>
              </li>
              {collections.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/collections/${c.slug}`}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-background/60 mb-4">
              Discover
            </h3>
            <ul className="space-y-2 text-sm">
              {siteNav.secondary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/pages/shipping-returns"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-background/60 mb-4">
              Customer Care
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/pages/faq"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/shipping-returns"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/sustainability"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/ingredients"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Ingredients Philosophy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-background/15 py-6 text-xs text-background/60">
          <p>
            © {new Date().getFullYear()} {brandInfo.name}. All rights reserved.
            Founded by {brandInfo.founder} in {brandInfo.founded}.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/pages/faq"
              className="hover:text-background transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/pages/faq"
              className="hover:text-background transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/pages/shipping-returns"
              className="hover:text-background transition-colors"
            >
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
