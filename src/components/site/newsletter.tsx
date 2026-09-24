"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function Newsletter({
  variant = "default",
  className,
}: {
  variant?: "default" | "light" | "compact";
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    toast.success("Thank you for subscribing", {
      description: "We've added you to our journal. Check your inbox for 10% off.",
      duration: 4000,
    });
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={cn("flex gap-2", className)}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="flex-1 border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
        />
        <button
          type="submit"
          className="bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Subscribe
        </button>
      </form>
    );
  }

  const isLight = variant === "light";

  return (
    <div className={cn("text-center", isLight && "text-background", className)}>
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl",
          isLight ? "text-background" : "text-foreground",
        )}
      >
        Join our journal
      </h2>
      <p
        className={cn(
          "mt-3 mx-auto max-w-md text-sm",
          isLight ? "text-background/70" : "text-foreground/70",
        )}
      >
        Slow skincare, ingredient stories, and ritual notes — once a month, never
        more. Plus 10% off your first order.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className={cn(
            "flex-1 border bg-transparent px-4 py-3 text-sm focus:outline-none",
            isLight
              ? "border-background/30 text-background placeholder:text-background/40 focus:border-background"
              : "border-border text-foreground placeholder:text-foreground/40 focus:border-accent",
          )}
        />
        <button
          type="submit"
          className={cn(
            "px-6 py-3 text-sm font-medium tracking-wide transition-colors",
            isLight
              ? "bg-background text-foreground hover:bg-background/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90",
            submitted && "bg-accent text-accent-foreground hover:bg-accent",
          )}
        >
          {submitted ? "Thank you" : "Subscribe"}
        </button>
      </form>
      <p
        className={cn(
          "mt-3 text-xs",
          isLight ? "text-background/50" : "text-foreground/50",
        )}
      >
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
