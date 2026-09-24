"use client";

import { useEffect, useState } from "react";

const messages = [
  "Complimentary shipping on all EU orders over €60",
  "Free sample with every order",
  "New: Honey Overnight Mask — now shipping",
  "Sign up to our journal for 10% off your first order",
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="bg-sage-gradient text-primary-foreground"
      role="region"
      aria-label="Announcements"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-center">
        <p
          className="text-xs font-medium tracking-wide transition-opacity duration-300"
          key={index}
        >
          {messages[index]}
        </p>
      </div>
    </div>
  );
}
