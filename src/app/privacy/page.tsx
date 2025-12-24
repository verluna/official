import { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | Verluna",
  description:
    "How Verluna collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Privacy Policy"
        description="Last updated: December 2024"
      />
      <PrivacyContent />
    </>
  );
}

function PrivacyContent() {
  return (
    <div className="pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-steel max-w-none">
          <Section title="1. Introduction">
            <p>
              Verluna (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website verluna.com or engage with our services.
            </p>
            <p>
              By using our website or services, you consent to the data
              practices described in this policy. If you do not agree with the
              terms of this policy, please do not access the site.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <h4>Information You Provide</h4>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address,
                company name when you fill out our contact form or book a call.
              </li>
              <li>
                <strong>Communication Data:</strong> Messages, inquiries, and
                feedback you send us.
              </li>
              <li>
                <strong>Business Information:</strong> Details about your
                company, tech stack, and project requirements shared during
                consultations.
              </li>
            </ul>

            <h4>Information Collected Automatically</h4>
            <ul>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on pages,
                referring URLs, and navigation paths.
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, operating
                system, device type, and screen resolution.
              </li>
              <li>
                <strong>IP Address:</strong> Used for analytics and security
                purposes.
              </li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send you relevant information about our services</li>
              <li>Improve our website and user experience</li>
              <li>Analyze usage patterns and optimize performance</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>
          </Section>

          <Section title="4. Cookies and Tracking">
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience. These include:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for basic site
                functionality.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with our site.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and
                preferences.
              </li>
            </ul>
            <p>
              You can control cookies through your browser settings. Disabling
              certain cookies may affect site functionality.
            </p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>
              We may share information with third-party service providers who
              assist us in operating our website and conducting our business:
            </p>
            <ul>
              <li>
                <strong>Analytics:</strong> Google Analytics, Plausible, or
                similar services for website analytics.
              </li>
              <li>
                <strong>Email:</strong> Resend or similar services for email
                delivery.
              </li>
              <li>
                <strong>Scheduling:</strong> Calendly or similar services for
                booking appointments.
              </li>
            </ul>
            <p>
              These providers have their own privacy policies governing the use
              of your information.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your personal information only as long as necessary to
              fulfill the purposes outlined in this policy, unless a longer
              retention period is required by law. Contact form submissions are
              retained for up to 2 years unless you request deletion.
            </p>
          </Section>

          <Section title="7. Your Rights (GDPR)">
            <p>
              If you are a resident of the European Economic Area (EEA), you
              have certain data protection rights:
            </p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of your personal data.
              </li>
              <li>
                <strong>Rectification:</strong> Request correction of inaccurate
                data.
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your personal
                data.
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing.
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data.
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your data.
              </li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:info@verluna.de"
                className="text-terminal-green hover:underline"
              >
                info@verluna.de
              </a>
              .
            </p>
          </Section>

          <Section title="8. Data Security">
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information, including:
            </p>
            <ul>
              <li>Encrypted data transmission (HTTPS)</li>
              <li>Secure hosting infrastructure</li>
              <li>Limited access to personal data</li>
              <li>Regular security assessments</li>
            </ul>
            <p>
              However, no method of transmission over the Internet is 100%
              secure. We cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="9. International Transfers">
            <p>
              We are based in Berlin, Germany. If you access our website from
              outside Germany, your information may be transferred to, stored,
              and processed in Germany or other countries where our service
              providers operate. We ensure appropriate safeguards are in place
              for such transfers.
            </p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>
              Our services are not intended for individuals under 18 years of
              age. We do not knowingly collect personal information from
              children. If you believe we have collected information from a
              child, please contact us immediately.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated &quot;Last updated&quot; date. We
              encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have questions or concerns about this Privacy Policy or our
              data practices, please contact us:
            </p>
            <div className="mt-4 p-4 rounded-lg border border-surface-border bg-surface/30 font-mono text-sm">
              <p className="text-off-white">Verluna</p>
              <p className="text-steel-grey">Berlin, Germany</p>
              <p className="text-steel-grey">
                Email:{" "}
                <a
                  href="mailto:info@verluna.de"
                  className="text-terminal-green hover:underline"
                >
                  info@verluna.de
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
