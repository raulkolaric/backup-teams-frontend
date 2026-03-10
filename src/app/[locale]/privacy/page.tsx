import React from 'react';
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import LightRays from "@/components/LightRays";
import PrivacyPolicyContent from "@/components/features/legal/PrivacyPolicyContent";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Footer' });
  return {
    title: t('privacyPolicy') + " | Backup Teams",
    description: "Learn how Backup Teams secures and processes your Microsoft Teams data.",
  };
}

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans bg-background relative selection:bg-accent/30">
      <Header />
      
      {/* Privacy Policy Header Spacer */}
      <div className="pt-24"></div>

      <div className="relative z-10 w-full flex-grow flex flex-col pt-16">
        <PrivacyPolicyContent />
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
}
