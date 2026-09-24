"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Check } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    toast.success("Message sent", {
      description: "We'll reply within 24 hours, Monday to Friday.",
      duration: 4000,
    });
    setForm({ name: "", email: "", subject: "general", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [field]: e.target.value });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 mb-2">
            Your name
          </label>
          <input
            type="text"
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
            placeholder="Camille Renard"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={form.email}
            onChange={update("email")}
            className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 mb-2">
          Subject
        </label>
        <select
          id="subject"
          value={form.subject}
          onChange={update("subject")}
          className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
        >
          <option value="general">General question</option>
          <option value="order">Order or shipping</option>
          <option value="product">Product & ingredients</option>
          <option value="returns">Returns & refunds</option>
          <option value="wholesale">Wholesale or press</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={update("message")}
          rows={6}
          className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent resize-y"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide transition-colors ${
          submitted
            ? "bg-accent text-accent-foreground"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        {submitted ? (
          <>
            <Check className="h-4 w-4" /> Sent — thank you
          </>
        ) : (
          "Send message"
        )}
      </button>
      <p className="text-xs text-foreground/60">
        We respect your privacy. Your email is used only to reply to your message.
      </p>
    </form>
  );
}
