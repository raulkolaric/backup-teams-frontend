import React from 'react';
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import DataProcessingContentEn from "@/components/features/legal/DataProcessingContent";
import DataProcessingContentPtBr from "@/components/features/legal/DataProcessingContentPtBr";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Footer' });
  return {
    title: t('dataProcessing') + " | Backup Teams",
    description: "Read the Data Processing Agreement for Backup Teams.",
  };
}

export default async function DataProcessingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main className="flex min-h-screen flex-col font-sans bg-background relative selection:bg-accent/30">
      <Header />
      
      {/* Legal Spacer */}
      <div className="pt-24"></div>

      <div className="relative z-10 w-full flex-grow flex flex-col pt-16">
        {locale === 'pt-BR' ? <DataProcessingContentPtBr /> : <DataProcessingContentEn />}
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
}
