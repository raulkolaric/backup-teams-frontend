import React from 'react';

export default function TermsOfServiceContent() {
  const lastUpdated = "March 10, 2026";

  return (
    <article className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            Effective Date: {lastUpdated}
          </p>
        </header>

        <div className="prose prose-slate prose-invert max-w-none text-muted-foreground space-y-10">
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">1. Acceptance of Terms</h2>
            <p className="leading-8">
              By accessing or using Backup Teams Services, you agree to be bound by these Terms of Service ("Terms") and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site and our backup services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">2. Description of Service</h2>
            <p className="leading-8">
              Backup Teams provides automated, encrypted backup solutions for Microsoft Teams. Our Service connects to your Microsoft 365 tenant via the Microsoft Graph API to extract, encrypt, and store your organizational data (chats, files, and metadata) in secure, isolated storage. We reserve the right to modify, suspend, or discontinue the Service at any time with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">3. User Obligations and Authentication</h2>
            <p className="leading-8">
              To use our Service, you must hold the administrative rights necessary to grant Backup Teams the required OAuth scopes within your Microsoft 365 tenant. You agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li>You are legally authorized to grant us access to the data being backed up.</li>
              <li>You are responsible for maintaining the confidentiality of your Backup Teams account credentials.</li>
              <li>You will promptly notify us of any known or suspected unauthorized use of your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">4. Data Ownership and License</h2>
            <p className="leading-8">
              <strong>Your Data:</strong> You retain all ownership rights to the organizational data backed up by our Service. By using Backup Teams, you grant us a worldwide, royalty-free, and non-exclusive license strictly to access, copy, encrypt, and store your data for the sole purpose of providing the backup and restoration services to you.
            </p>
            <p className="leading-8 mt-4">
              <strong>Our Intellectual Property:</strong> The platform, website, scraping engine, and underlying architecture are the exclusive property of Backup Teams Inc. and are protected by copyright and trade secret laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">5. Billing, Subscriptions, and Cancellation</h2>
            <p className="leading-8">
              Our Services are billed on a subscription basis (monthly or annually). By subscribing, you agree to automatic recurring billing.
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing cycle.</li>
              <li><strong>Data Retention Post-Cancellation:</strong> Upon cancellation or failure to pay, we will hold your encrypted backups for a grace period of 30 days. After 30 days, your S3 vault will be permanently and cryptographically destroyed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">6. Limitation of Liability</h2>
            <p className="leading-8">
              While we architect for maximum durability and security, software is inherently complex. To the maximum extent permitted by law, Backup Teams Inc. shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; or (iii) unauthorized access, use or alteration of your transmissions or content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">7. Service Level Agreement (SLA)</h2>
            <p className="leading-8">
              We strive for 99.9% uptime. However, because our service heavily depends on the availability and throttling limitations of the Microsoft Graph API, we cannot guarantee completely uninterrupted backups if Microsoft experiences outages or actively throttles API requests from your tenant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">8. Governing Law</h2>
            <p className="leading-8">
              These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">9. Contact Us</h2>
            <p className="leading-8">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-card rounded-xl border border-border inline-block">
              <p className="font-mono text-sm text-foreground">legal@backupteams.com</p>
              <p className="text-sm text-muted-foreground mt-2">Backup Teams Inc.</p>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
