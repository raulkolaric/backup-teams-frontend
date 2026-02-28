import React from 'react';
import { useTranslations } from 'next-intl';

export default function FeaturesGrid() {
  const t = useTranslations('Features');

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24 flex flex-col gap-16">
      
      {/* Section Header */}
      <div className="flex flex-col gap-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          {t('title')}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        
        {/* Card 1: Spans 2 columns on Desktop */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-sm transition-colors hover:border-accent/40">
          <div className="absolute top-0 right-0 p-8 opacity-10 transition-opacity group-hover:opacity-20 text-accent">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col h-full justify-end">
            <h3 className="text-xl font-medium text-foreground mb-2">{t('f1Title')}</h3>
            <p className="text-muted-foreground w-3/4">{t('f1Desc')}</p>
          </div>
        </div>

        {/* Card 2: Standard Square */}
        <div className="relative group overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-sm transition-colors hover:border-accent/40">
           <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent opacity-10 blur-2xl group-hover:opacity-20 transition-opacity pointer-events-none" />
           <div className="relative z-10 flex flex-col h-full justify-end">
            <h3 className="text-xl font-medium text-foreground mb-2">{t('f2Title')}</h3>
            <p className="text-muted-foreground">{t('f2Desc')}</p>
          </div>
        </div>

        {/* Card 3: Standard Square */}
        <div className="relative group overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-sm transition-colors hover:border-accent/40">
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent opacity-10 blur-2xl group-hover:opacity-20 transition-opacity pointer-events-none" />
          <div className="relative z-10 flex flex-col h-full justify-end">
            <h3 className="text-xl font-medium text-foreground mb-2">{t('f3Title')}</h3>
            <p className="text-muted-foreground">{t('f3Desc')}</p>
          </div>
        </div>

        {/* Card 4: Spans 2 columns on Desktop */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-sm transition-colors hover:border-accent/40">
           <div className="absolute bottom-0 right-0 p-8 opacity-10 transition-opacity group-hover:opacity-20 text-accent">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col h-full justify-end">
            <h3 className="text-xl font-medium text-foreground mb-2">{t('f4Title')}</h3>
            <p className="text-muted-foreground w-3/4">{t('f4Desc')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
