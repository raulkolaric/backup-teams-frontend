import React from 'react';
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import TermsOfServiceContentEn from "@/components/features/legal/TermsOfServiceContent";
import TermsOfServiceContentPtBr from "@/components/features/legal/TermsOfServiceContentPtBr";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Footer' });
  return {
    title: t('termsOfService') + " | Backup Teams",
    description: "Read the Terms of Service for using Backup Teams.",
  };
}

export default async function TermsOfServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main className="flex min-h-screen flex-col font-sans bg-background relative selection:bg-accent/30">
      <Header />
      
      {/* Terms Space Placeholder */}
      <div className="pt-24"></div>

      <div className="relative z-10 w-full flex-grow flex flex-col pt-16">
        {locale === 'pt-BR' ? <TermsOfServiceContentPtBr /> : <TermsOfServiceContentEn />}
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
}
