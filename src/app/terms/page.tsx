import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for the ${siteConfig.name} website.`,
  alternates: {
    canonical: "/terms/",
  },
};

const LAST_UPDATED = "August 2, 2026";

export default function TermsPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-10 space-y-10 text-muted-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mt-3 [&_p]:leading-relaxed">
          <div>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing {siteConfig.url}, you agree to these Terms of Use.
              If you do not agree, please do not use this website. The site is
              operated by {siteConfig.legalName}, a company incorporated in
              Canada.
            </p>
          </div>

          <div>
            <h2>2. Use of Content</h2>
            <p>
              All content on this website — text, graphics, logos, and design
              — is the property of {siteConfig.legalName} and is protected by
              Canadian and international copyright law. You may view and print
              content for personal or internal business use; any other
              reproduction or distribution requires our prior written consent.
            </p>
          </div>

          <div>
            <h2>3. No Professional Advice</h2>
            <p>
              Website content is provided for general information only and
              does not constitute professional security, legal, or compliance
              advice. Engagements are governed by separate written agreements.
            </p>
          </div>

          <div>
            <h2>4. Disclaimer of Warranties</h2>
            <p>
              This website is provided &ldquo;as is&rdquo; without warranties
              of any kind, express or implied. We do not warrant that the site
              will be uninterrupted, error-free, or free of harmful
              components.
            </p>
          </div>

          <div>
            <h2>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {siteConfig.legalName}{" "}
              shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of this website.
            </p>
          </div>

          <div>
            <h2>6. External Links</h2>
            <p>
              This site may link to third-party websites. We are not
              responsible for their content or privacy practices.
            </p>
          </div>

          <div>
            <h2>7. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Province of Quebec
              and the federal laws of Canada applicable therein.
            </p>
          </div>

          <div>
            <h2>8. Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-secondary underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
