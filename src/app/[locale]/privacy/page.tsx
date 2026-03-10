import React from 'react';
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import LightRays from "@/components/LightRays";
import PrivacyPolicyContentEn from "@/components/features/legal/PrivacyPolicyContent";
import PrivacyPolicyContentPtBr from "@/components/features/legal/PrivacyPolicyContentPtBr";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Footer' });
  return {
    title: t('privacyPolicy') + " | Backup Teams",
    description: "Learn how Backup Teams secures and processes your Microsoft Teams data.",
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main className="flex min-h-screen flex-col font-sans bg-background relative selection:bg-accent/30">
      <Header />
      
      {/* Privacy Policy Header Spacer */}
      <div className="pt-24"></div>

      <div className="relative z-10 w-full flex-grow flex flex-col pt-16">
        {locale === 'pt-BR' ? <PrivacyPolicyContentPtBr /> : <PrivacyPolicyContentEn />}
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
}
