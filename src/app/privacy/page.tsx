import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.legalName} — how we collect, use, and protect your personal information.`,
  alternates: {
    canonical: "/privacy/",
  },
};

const LAST_UPDATED = "August 2, 2026";

export default function PrivacyPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-10 space-y-10 text-muted-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6">
          <div>
            <h2>1. Introduction</h2>
            <p>
              {siteConfig.legalName} (&ldquo;BrainFort&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting
              your privacy. This policy explains how we collect, use, and
              safeguard personal information when you visit{" "}
              {siteConfig.url} or engage our services. We comply with the
              Personal Information Protection and Electronic Documents Act
              (PIPEDA) and applicable provincial privacy legislation,
              including Quebec&rsquo;s Law 25.
            </p>
          </div>

          <div>
            <h2>2. Information We Collect</h2>
            <ul>
              <li>
                <strong>Contact information</strong> you provide through our
                contact form: name, company, email address, phone number, and
                message content.
              </li>
              <li>
                <strong>Technical information</strong> collected automatically
                by our hosting provider for security and performance, such as
                IP address, browser type, and pages visited.
              </li>
            </ul>
          </div>

          <div>
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To respond to inquiries and provide requested services.</li>
              <li>To improve our website and service offerings.</li>
              <li>To meet legal and regulatory obligations.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to
              third parties.
            </p>
          </div>

          <div>
            <h2>4. Data Retention</h2>
            <p>
              We retain personal information only as long as necessary to
              fulfill the purposes for which it was collected, or as required
              by law. Contact form submissions are retained for the duration
              of our business relationship or until you request deletion.
            </p>
          </div>

          <div>
            <h2>5. Data Security</h2>
            <p>
              As a cybersecurity firm, we apply industry best practices to
              protect your data, including encryption in transit, access
              controls, and minimal data collection by design.
            </p>
          </div>

          <div>
            <h2>6. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time. To exercise these rights,
              contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-secondary underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2>7. Third-Party Services</h2>
            <p>
              Our website is hosted on Cloudflare Pages. Form submissions may
              be processed by a third-party form service. These providers
              process data on our behalf under their own privacy safeguards.
            </p>
          </div>

          <div>
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Material changes
              will be reflected by an updated &ldquo;Last updated&rdquo; date
              on this page.
            </p>
          </div>

          <div>
            <h2>9. Contact</h2>
            <p>
              Questions about this policy? Reach us at{" "}
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
