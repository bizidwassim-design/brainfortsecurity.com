"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getDictionary } from "@/i18n";
import { siteConfig } from "@/lib/site";

const dict = getDictionary();
const t = dict.contactPage.form;

/**
 * Form backend endpoint (Formspree, Cloudflare Worker, etc.).
 * Configure via NEXT_PUBLIC_CONTACT_FORM_ENDPOINT — see .env.example.
 * Inlined at build time; never a secret.
 */
const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields; silently drop those submissions.
    if (data.get("website")) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-6">
      <p className="text-sm text-muted-foreground">{t.requiredHint}</p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t.name} *</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder={t.namePlaceholder}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{t.company} *</Label>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            required
            placeholder={t.companyPlaceholder}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">{t.email} *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={t.emailPlaceholder}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t.phone}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t.phonePlaceholder}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.message} *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={t.messagePlaceholder}
        />
      </div>

      {/* Honeypot — visually hidden, ignored by humans. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" aria-hidden="true" />
            {t.submitting}
          </>
        ) : (
          <>
            <Send aria-hidden="true" />
            {t.submit}
          </>
        )}
      </Button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="rounded-lg border border-secondary/40 bg-secondary/10 px-4 py-3 text-sm text-teal-300">
            {t.success}
          </p>
        )}
        {status === "error" && (
          <p className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-red-300">
            {endpoint ? (
              t.error
            ) : (
              <>
                {t.notConfigured}{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>
                .
              </>
            )}
          </p>
        )}
      </div>
    </form>
  );
}
