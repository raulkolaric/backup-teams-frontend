import React from 'react';

export default function PrivacyPolicyContent() {
  const lastUpdated = "March 10, 2026";

  return (
    <article className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            Effective Date: {lastUpdated}
          </p>
        </header>

        <div className="prose prose-slate prose-invert max-w-none text-muted-foreground space-y-10">
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">1. Introduction</h2>
            <p className="leading-8">
              Welcome to Backup Teams. At Backup Teams Inc. ("we," "our," or "us"), we respect your privacy and are deeply committed to protecting the organizational data you entrust to us. This Privacy Policy outlines how we collect, use, process, and safeguard the information you provide when using our Microsoft Teams backup services, website, and related applications (collectively, the "Services").
            </p>
            <p className="leading-8 mt-4">
              Our architecture is designed around the principle of data minimization and zero-knowledge encryption where applicable. By accessing or using our Services, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">2. The Information We Collect</h2>
            <p className="leading-8">
              We collect information in the following categories to provide and improve our Services:
            </p>
            
            <h3 className="text-xl font-medium text-foreground mt-8 mb-3">2.1. Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-2 leading-8">
              <li><strong>Account Information:</strong> When you register for our Services, we collect your name, email address (typically your Azure AD / Microsoft 365 identity), company name, and billing details.</li>
              <li><strong>Authentication Tokens:</strong> To perform backups, you grant us secure OAuth 2.0 tokens via the Microsoft Graph API. We store these securely to authenticate automated backup processes on your behalf.</li>
              <li><strong>Support Communications:</strong> If you contact our support team, we collect the contents of your messages and any attachments necessary to resolve your inquiry.</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-3">2.2. Data We Process on Your Behalf (The Backups)</h3>
            <p className="leading-8">
              The core function of Backup Teams is to process and secure your corporate data. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Microsoft Teams Chat History:</strong> 1:1 chats, group chats, and channel discussions.</li>
              <li><strong>Files and Attachments:</strong> Documents shared within Teams (originating from SharePoint or OneDrive).</li>
              <li><strong>Metadata:</strong> Timestamps, sender IDs, and channel structures required to accurately reconstruct your data topology.</li>
            </ul>
            <div className="mt-6 p-4 rounded-xl border border-border bg-card shadow-sm">
              <strong className="text-foreground">Architectural Note:</strong> We treat this data entirely as a Data Processor under GDPR. Your backup data is encrypted at rest in dedicated, isolated Amazon S3 vaults unique to your tenant. We do not mine, sell, or analyze your backup data for marketing or any purpose other than providing the backup service itself.
            </div>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-3">2.3. Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2 leading-8">
              <li><strong>Logging & Telemetry:</strong> We inherently log IP addresses, browser types, and API request latency to ensure the reliability and security of our infrastructure.</li>
              <li><strong>Cookies and Tracking:</strong> We use essential cookies to maintain session states. We do not use third-party advertising cookies on the backup application interface.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">3. How We Use Your Information</h2>
            <p className="leading-8">We use the collected information for the following specific purposes:</p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Service Delivery:</strong> To connect to Microsoft Graph APIs, extract your Teams data, encrypt it, and store it in your dedicated vault.</li>
              <li><strong>Security & Authentication:</strong> To verify your identity, mitigate fraudulent access, and enforce strict Access Control Lists (ACLs) on your data.</li>
              <li><strong>Billing & Administration:</strong> To process payments, calculate storage tier usage, and send transactional notifications (e.g., "Backup Complete", "Payment Failed").</li>
              <li><strong>Performance Optimization:</strong> To monitor system health, scale our scraping infrastructure intelligently based on load, and fix software bugs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">4. Data Security & Storage</h2>
            <p className="leading-8">
              Security is the foundational pillar of Backup Teams. We employ enterprise-grade security controls:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Encryption at Rest:</strong> All backup data stored in S3 vaults is encrypted using AES-256.</li>
              <li><strong>Encryption in Transit:</strong> Data is transmitted exclusively over TLS 1.2+ protocols.</li>
              <li><strong>Tenant Isolation:</strong> Your data is structurally isolated. Our scraping engines deploy unique storage buckets and index mappings per Microsoft 365 Tenant ID, preventing cross-tenant data bleed.</li>
              <li><strong>Key Management:</strong> We utilize strict KMS (Key Management Service) policies, automatically rotating encryption keys.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">5. Third-Party Disclosures & Sub-Processors</h2>
            <p className="leading-8">
              We do not sell your personal data or your backup data. We share data only with trusted sub-processors necessary to run the service:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Cloud Infrastructure:</strong> Amazon Web Services (AWS) or similar cloud providers for hosting isolated S3 vaults and compute nodes.</li>
              <li><strong>Authentication Providers:</strong> Microsoft Identity Platform (Azure AD) and Google OAuth for secure login flows.</li>
              <li><strong>Payment Processors:</strong> Stripe or similar providers to securely handle billing without routing credit card numbers through our systems.</li>
            </ul>
            <p className="leading-8 mt-4">
              We may also disclose information if required by law, subpoena, or other strict legal processes, provided we give you prior notice (unless legally prohibited from doing so).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">6. Your Rights (GDPR, CCPA, and Beyond)</h2>
            <p className="leading-8">
              Depending on your jurisdiction, you or your organization hold specific rights regarding the data:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Right to Access:</strong> You can export your entire backup vault at any time in industry-standard formats (JSON, PDF).</li>
              <li><strong>Right to Erasure (Right to be Forgotten):</strong> You may request the deletion of your account and all associated backups. Upon request, we initiate a cryptographic hard-delete of your S3 vault, rendering the data completely irrecoverable within 30 days.</li>
              <li><strong>Right to Portability:</strong> You are not locked in. Our export APIs allow you to migrate your Teams backups to other storage providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">7. Contact Us</h2>
            <p className="leading-8">
              If you have any questions, concerns, or technical inquiries regarding this Privacy Policy or how your data is handled, please contact our Data Protection Officer at:
            </p>
            <div className="mt-4 p-6 bg-card rounded-xl border border-border inline-block">
              <p className="font-mono text-sm text-foreground">privacy@backupteams.com</p>
              <p className="text-sm text-muted-foreground mt-2">Backup Teams Inc.</p>
              <p className="text-sm text-muted-foreground">123 Cloud Infrastructure Way</p>
              <p className="text-sm text-muted-foreground">San Francisco, CA 94107</p>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
