import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "default",
  onClick,
}: {
  className?: string;
  variant?: "default" | "light";
  onClick?: () => void;
}) {
  const textColor = variant === "light" ? "#FAF6EE" : "#2A2520";
  const accentColor = variant === "light" ? "#FAF6EE" : "#C9824F";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-2 text-foreground transition-opacity hover:opacity-80",
        className,
      )}
      aria-label="Solène — home"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* sun + leaf mark */}
        <circle cx="20" cy="20" r="11" stroke={accentColor} strokeWidth="1.5" />
        <path
          d="M 20 9 Q 28 14 28 20 Q 28 26 20 31 Q 12 26 12 20 Q 12 14 20 9 Z"
          fill={accentColor}
          opacity="0.18"
        />
        <path
          d="M 20 9 L 20 31"
          stroke={accentColor}
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M 14 16 Q 17 18 20 18 M 26 16 Q 23 18 20 18 M 14 24 Q 17 22 20 22 M 26 24 Q 23 22 20 22"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
        />
        <circle cx="20" cy="20" r="2" fill={accentColor} />
      </svg>
      <span
        className="font-serif text-2xl font-medium leading-none"
        style={{ color: textColor, letterSpacing: "0.01em" }}
      >
        Solène
      </span>
    </Link>
  );
}
