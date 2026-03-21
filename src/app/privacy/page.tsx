import { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | Verluna",
  description:
    "How Verluna collects, uses, and protects your personal information. GDPR compliant. Berlin, Germany jurisdiction.",
  alternates: {
    canonical: "https://verluna.de/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Privacy Policy"
        description="Last updated: March 2026. Verluna is committed to protecting your privacy in compliance with the EU General Data Protection Regulation (GDPR)."
      />
      <PrivacyContent />
    </>
  );
}

function PrivacyContent() {
  return (
    <div className="pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-0">
          <Section title="1. Controller">
            <p>
              The controller responsible for data processing on this website is:
            </p>
            <div className="mt-4 p-4 rounded-lg border border-surface-border bg-surface/30 font-mono text-sm">
              <p className="text-off-white">Verluna</p>
              <p className="text-steel-grey">Tolga Oral</p>
              <p className="text-steel-grey">Berlin, Germany</p>
              <p className="text-steel-grey">
                Email:{" "}
                <a
                  href="mailto:hello@verluna.de"
                  className="text-terminal-green hover:underline"
                >
                  hello@verluna.de
                </a>
              </p>
            </div>
          </Section>

          <Section title="2. Data We Collect">
            <h4>Data You Provide Voluntarily</h4>
            <ul>
              <li>
                <strong>Contact information:</strong> Name, email address,
                company name when you submit a contact form, book a call, or
                subscribe to the newsletter.
              </li>
              <li>
                <strong>Communication data:</strong> Messages, inquiries, and
                feedback you send us through the contact form or email.
              </li>
              <li>
                <strong>Assessment data:</strong> Responses to the Agent
                Readiness Scorecard, including company size and current CRM.
              </li>
              <li>
                <strong>Business information:</strong> Details about your company,
                tech stack, and operational challenges shared during
                consultations.
              </li>
            </ul>

            <h4>Data Collected Automatically</h4>
            <ul>
              <li>
                <strong>Usage data:</strong> Pages visited, time spent on pages,
                referring URLs, and navigation paths. Collected via Plausible
                Analytics (privacy-focused, no cookies, EU-hosted).
              </li>
              <li>
                <strong>Device information:</strong> Browser type, operating
                system, device type, and screen resolution.
              </li>
              <li>
                <strong>IP address:</strong> Anonymized and used for analytics
                and security purposes only.
              </li>
            </ul>
          </Section>

          <Section title="3. Purpose and Legal Basis">
            <p>We process your data for the following purposes:</p>
            <ul>
              <li>
                <strong>Contract performance (Art. 6(1)(b) GDPR):</strong>{" "}
                Responding to inquiries, providing services, and fulfilling
                contractual obligations.
              </li>
              <li>
                <strong>Consent (Art. 6(1)(a) GDPR):</strong> Sending newsletter
                communications (double opt-in required). You may withdraw consent
                at any time.
              </li>
              <li>
                <strong>Legitimate interest (Art. 6(1)(f) GDPR):</strong> Website
                analytics for improving user experience, security measures, and
                fraud prevention.
              </li>
            </ul>
          </Section>

          <Section title="4. Cookies and Tracking">
            <p>
              We use Plausible Analytics, a privacy-focused analytics tool that
              does not use cookies and does not collect personal data. Plausible
              is hosted in the EU and is fully GDPR compliant without requiring
              cookie consent.
            </p>
            <p>
              If we implement additional tracking tools in the future, we will
              obtain your explicit consent before any non-essential cookies are
              set, in compliance with the ePrivacy Directive and German
              Telemediengesetz (TDDDG).
            </p>
          </Section>

          <Section title="5. Third-Party Processors">
            <p>
              We share data with the following processors, all of which have
              signed Data Processing Agreements (DPAs):
            </p>
            <ul>
              <li>
                <strong>HubSpot (EU data residency):</strong> CRM and email
                marketing. Stores contact information, scorecard results, and
                engagement data.
              </li>
              <li>
                <strong>Plausible Analytics (EU-hosted):</strong> Website
                analytics. No personal data collected. No cookies.
              </li>
              <li>
                <strong>Resend (email delivery):</strong> Transactional email
                delivery for contact form confirmations and newsletter
                distribution.
              </li>
              <li>
                <strong>Calendly / Cal.com:</strong> Appointment scheduling.
                Collects name, email, and appointment details when you book a
                call.
              </li>
              <li>
                <strong>Vercel (hosting):</strong> Website hosting and content
                delivery. Processes server logs including anonymized IP addresses.
              </li>
            </ul>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your personal data only as long as necessary for the
              purposes described in this policy:
            </p>
            <ul>
              <li>
                <strong>Contact form submissions:</strong> 36 months, unless you
                request earlier deletion.
              </li>
              <li>
                <strong>Newsletter subscribers:</strong> Until you unsubscribe.
              </li>
              <li>
                <strong>Scorecard results:</strong> 36 months.
              </li>
              <li>
                <strong>Client engagement data:</strong> Duration of the
                engagement plus 36 months for follow-up.
              </li>
              <li>
                <strong>Analytics data:</strong> Plausible retains anonymized,
                aggregated data only. No personal data is stored.
              </li>
            </ul>
          </Section>

          <Section title="7. Your Rights Under GDPR">
            <p>
              As a data subject in the European Economic Area, you have the
              following rights:
            </p>
            <ul>
              <li>
                <strong>Right of access (Art. 15):</strong> Request a copy of
                your personal data.
              </li>
              <li>
                <strong>Right to rectification (Art. 16):</strong> Request
                correction of inaccurate data.
              </li>
              <li>
                <strong>Right to erasure (Art. 17):</strong> Request deletion of
                your personal data (&quot;right to be forgotten&quot;).
              </li>
              <li>
                <strong>Right to restrict processing (Art. 18):</strong> Request
                limitation of data processing.
              </li>
              <li>
                <strong>Right to data portability (Art. 20):</strong> Receive
                your data in a structured, machine-readable format.
              </li>
              <li>
                <strong>Right to object (Art. 21):</strong> Object to processing
                based on legitimate interest.
              </li>
              <li>
                <strong>Right to withdraw consent (Art. 7(3)):</strong> Withdraw
                consent for newsletter or marketing communications at any time.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:hello@verluna.de"
                className="text-terminal-green hover:underline"
              >
                hello@verluna.de
              </a>
              . We will respond within 30 days.
            </p>
            <p>
              You also have the right to lodge a complaint with the Berlin
              Commissioner for Data Protection and Freedom of Information
              (Berliner Beauftragte fur Datenschutz und Informationsfreiheit).
            </p>
          </Section>

          <Section title="8. Data Security">
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data:
            </p>
            <ul>
              <li>TLS/HTTPS encryption for all data in transit</li>
              <li>Encrypted storage for data at rest</li>
              <li>Access controls limiting data access to authorized personnel</li>
              <li>Regular security assessments of third-party processors</li>
              <li>EU-based hosting and data processing where possible</li>
            </ul>
          </Section>

          <Section title="9. International Transfers">
            <p>
              We prioritize EU-based data processing. Where data is transferred
              outside the EEA (for example, certain Vercel CDN nodes), we ensure
              appropriate safeguards are in place, including Standard Contractual
              Clauses (SCCs) as approved by the European Commission.
            </p>
          </Section>

          <Section title="10. Newsletter (Double Opt-In)">
            <p>
              Newsletter subscriptions require double opt-in in compliance with
              German unfair competition law (UWG). After entering your email, you
              will receive a confirmation email. Your subscription is only active
              after you click the confirmation link. Every newsletter includes an
              unsubscribe link.
            </p>
          </Section>

          <Section title="11. Children">
            <p>
              Our services are directed at businesses and professionals. We do
              not knowingly collect data from individuals under 16. If you
              believe we have collected data from a minor, please contact us
              immediately.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date. For material changes,
              we will notify newsletter subscribers via email.
            </p>
          </Section>

          <Section title="13. Contact">
            <p>
              For privacy-related inquiries, data subject requests, or
              complaints:
            </p>
            <div className="mt-4 p-4 rounded-lg border border-surface-border bg-surface/30 font-mono text-sm">
              <p className="text-off-white">Verluna — Data Protection</p>
              <p className="text-steel-grey">Tolga Oral</p>
              <p className="text-steel-grey">Berlin, Germany</p>
              <p className="text-steel-grey">
                Email:{" "}
                <a
                  href="mailto:hello@verluna.de"
                  className="text-terminal-green hover:underline"
                >
                  hello@verluna.de
                </a>
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold tracking-tight text-off-white mb-4">
        {title}
      </h3>
      <div className="text-steel-grey space-y-4 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_h4]:text-off-white [&_h4]:font-medium [&_h4]:mt-6 [&_h4]:mb-3 [&_strong]:text-off-white">
        {children}
      </div>
    </section>
  );
}
