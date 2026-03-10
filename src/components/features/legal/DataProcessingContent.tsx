import React from 'react';

export default function DataProcessingContent() {
  const lastUpdated = "March 10, 2026";

  return (
    <article className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Data Processing Agreement
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            Effective Date: {lastUpdated}
          </p>
        </header>

        <div className="prose prose-slate prose-invert max-w-none text-muted-foreground space-y-10">
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">1. Introduction</h2>
            <p className="leading-8">
              This Data Processing Agreement ("DPA") forms part of the Terms of Service between Backup Teams Inc. ("Data Processor") and you or the entity you represent ("Data Controller"). It reflects the parties' agreement regarding the processing of personal and organizational data contained within your Microsoft Teams environment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">2. Processing of Customer Data</h2>
            <p className="leading-8">
              <strong>Scope and Role:</strong> Backup Teams acts exclusively as a Data Processor. We process your data (including Teams chats, channel messages, and shared files) strictly for the purpose of providing the backup, storage, and recovery services as configured by you. We do not determine the purposes or means of processing the Personal Data contained within your backups.
            </p>
            <p className="leading-8 mt-4">
              <strong>Instructions:</strong> We will only process your data in accordance with your documented instructions, which are represented by your configuration and use of the Backup Teams service application via the Microsoft Graph API.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">3. Security Measures</h2>
            <p className="leading-8">
              We implement and maintain stringent technical and organizational security measures to protect your data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li>Encryption in transit using modern TLS (1.2 or higher).</li>
              <li>Encryption at rest in dedicated Amazon S3 vaults using AES-256 GCM.</li>
              <li>Strict logical separation of tenant data (Data Isolation).</li>
              <li>Regular automated vulnerability scanning and key rotation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">4. Sub-processing</h2>
            <p className="leading-8">
              You authorize Backup Teams to engage infrastructure sub-processors (e.g., Amazon Web Services for cloud storage constraint). We maintain a list of active sub-processors and impose equivalent data protection obligations upon them as required by Article 28 of the GDPR. We will notify you of any intended changes concerning the addition or replacement of sub-processors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">5. Data Subject Rights & Assistance</h2>
            <p className="leading-8">
              As the Data Controller, you are responsible for fulfilling requests from data subjects (e.g., right to access, rectify, or erase). We will assist you by providing the technical tools necessary to export or cryptographically destroy specific backup vaults upon your authorized request. We will promptly notify you if we receive a direct request from a data subject regarding data processed under your tenant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">6. Data Deletion and Return</h2>
            <p className="leading-8">
              Upon termination of your subscription, or upon your explicit written request, Backup Teams will execute a secure, cryptographic "hard delete" of your tenant's dedicated S3 vault within 30 days. This renders all associated backups irretrievable. You are responsible for exporting any needed data prior to terminating the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">7. Incident Notification</h2>
            <p className="leading-8">
              In the event of a confirmed Personal Data Breach affecting your backups, Backup Teams will notify you without undue delay (and highly target within 48 hours of discovery) and provide sufficient information to allow you to meet any obligations to report a breach to supervisory authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">8. Contact for Privacy Inquiries</h2>
            <p className="leading-8">
              For security reports, DPA execution inquiries, or infrastructure questions, please contact our Compliance and Security team at:
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
