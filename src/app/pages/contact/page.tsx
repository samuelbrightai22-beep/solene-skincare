import { Mail, MapPin, Phone, Clock, Instagram } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { ContactForm } from "@/components/site/contact-form";
import { brandInfo } from "@/lib/site-data";

export const metadata = {
  title: "Contact Us — Solène",
  description:
    "Get in touch with the Solène team. We answer every email within 24 hours, Monday to Friday.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent mb-3">
            We're here to help
          </p>
          <h1 className="font-serif text-5xl md:text-6xl">Contact Us</h1>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-pretty">
            Have a question about a product, an order, or your skincare ritual?
            Write to us. Real humans read every email, and we answer within 24
            hours Monday to Friday.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="font-serif text-3xl mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:pl-8 lg:border-l lg:border-border">
            <h2 className="font-serif text-3xl mb-6">Other ways to reach us</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-foreground/70">
                    For orders, products, and general questions.
                  </p>
                  <a
                    href={`mailto:${brandInfo.email}`}
                    className="text-sm text-accent hover:underline mt-1 inline-block"
                  >
                    {brandInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-foreground/70">
                    Monday to Friday, 9am–6pm CET.
                  </p>
                  <a
                    href={`tel:${brandInfo.phone.replace(/\s/g, "")}`}
                    className="text-sm text-accent hover:underline mt-1 inline-block"
                  >
                    {brandInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Atelier</p>
                  <p className="text-sm text-foreground/70">
                    Visit our atelier by appointment.
                  </p>
                  <p className="text-sm mt-1">{brandInfo.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Atelier hours</p>
                  <p className="text-sm text-foreground/70">
                    Monday to Friday: 9am – 6pm CET
                    <br />
                    Saturday: 10am – 4pm CET (by appointment)
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary shrink-0">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-sm text-foreground/70">
                    Tag us in your ritual, or DM us with quick questions.
                  </p>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-accent hover:underline mt-1 inline-block"
                  >
                    {brandInfo.instagram}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-5 bg-secondary/40 rounded-md">
              <p className="font-serif text-sm uppercase tracking-[0.15em] text-accent mb-2">
                Press & wholesale
              </p>
              <p className="text-sm text-foreground/80">
                For press inquiries, wholesale, or partnership opportunities,
                please write to{" "}
                <a
                  href={`mailto:${brandInfo.email}`}
                  className="text-accent hover:underline"
                >
                  {brandInfo.email}
                </a>{" "}
                with "Press" or "Wholesale" in the subject line.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
