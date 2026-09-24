import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
          Error 404
        </p>
        <h1 className="font-serif text-5xl md:text-6xl">
          This page took a slow skincare break.
        </h1>
        <p className="mt-4 text-foreground/70 max-w-md mx-auto text-pretty">
          We couldn't find the page you were looking for. Let's get you back to
          something useful.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Return home
          </Link>
          <Link
            href="/collections/all"
            className="inline-flex items-center justify-center border border-foreground/20 px-6 py-3 text-sm font-medium tracking-wide hover:bg-secondary/40 transition-colors"
          >
            Shop all products
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
