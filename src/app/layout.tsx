import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solène — Botanical skincare, made with intention",
  description:
    "Solène crafts cold-pressed botanical skincare in small batches. Clean formulas, ethically sourced ingredients, and rituals that reveal your natural radiance.",
  keywords: [
    "botanical skincare",
    "clean beauty",
    "natural skincare",
    "cold-pressed",
    "vegan skincare",
    "cruelty-free",
    "Solène",
  ],
  authors: [{ name: "Solène" }],
  openGraph: {
    title: "Solène — Botanical skincare, made with intention",
    description:
      "Cold-pressed botanical skincare, formulated in small batches. Clean, vegan, cruelty-free.",
    url: "https://solene.example",
    siteName: "Solène",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solène — Botanical skincare, made with intention",
    description:
      "Cold-pressed botanical skincare, formulated in small batches. Clean, vegan, cruelty-free.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
