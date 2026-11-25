"use client";

import { Check, Copy, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export function ContactForm({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Project enquiry from ${name || "your portfolio"}`;
    const body = `${message}\n\n— ${name}${from ? ` (${from})` : ""}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
        </label>
        <label>
          <span>Your email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            required
          />
        </label>
      </div>
      <label>
        <span>What are you working on?</span>
        <textarea
          name="message"
          rows={5}
          placeholder="A few lines about the project, timeline and budget…"
          required
        />
      </label>
      <div className="form-actions">
        <button className="btn btn-accent" type="submit">
          Send message <Send size={18} strokeWidth={2.2} />
        </button>
        <button className="btn btn-ghost" type="button" onClick={copyEmail}>
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? "Copied!" : "Copy email"}
        </button>
      </div>
    </form>
  );
}
