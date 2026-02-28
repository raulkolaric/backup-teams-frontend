import React from 'react';
import { useTranslations } from 'next-intl';

export default function ComparisonTable() {
  const t = useTranslations('Comparison');

  const features = [
    { key: 'feat1', ours: true, theirs: false },
    { key: 'feat2', ours: true, theirs: false },
    { key: 'feat3', ours: true, theirs: false },
    { key: 'feat4', ours: true, theirs: false },
    { key: 'feat5', ours: true, theirs: false },
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24 flex flex-col gap-12">
      
      {/* Section Header */}
      <div className="flex flex-col gap-4 text-left items-start">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          {t('title')}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {t('subtitle')}
        </p>
      </div>

      {/* Glassmorphism Table Shell */}
      <div className="w-full bg-card/60 backdrop-blur-md rounded-2xl border border-border shadow-2xl overflow-hidden">
        
        {/* Table Header */}
        <div className="grid grid-cols-5 bg-muted/50 border-b border-border p-4 sm:p-6 text-sm sm:text-base font-semibold text-foreground">
          <div className="col-span-3">{t('featureHeader')}</div>
          <div className="col-span-1 text-center text-accent">{t('ourHeader')}</div>
          <div className="col-span-1 text-center text-muted-foreground">{t('teamsHeader')}</div>
        </div>

        {/* Table Body */}
        <div className="flex flex-col divide-y divide-border/50">
          {features.map((feature, idx) => (
            <div key={idx} className="grid grid-cols-5 p-4 sm:p-6 items-center transition-colors hover:bg-muted/30">
              
              {/* Feature Title */}
              <div className="col-span-3 text-sm sm:text-base font-medium text-foreground">
                {t(feature.key as any)}
              </div>

              {/* Our Engine Status */}
              <div className="col-span-1 flex justify-center">
                {feature.ours ? (
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                ) : (
                  <div className="w-8 h-8 flex items-center justify-center text-muted-foreground">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                )}
              </div>

              {/* Microsoft Teams Status */}
              <div className="col-span-1 flex justify-center">
                 {feature.theirs ? (
                  <div className="w-8 h-8 flex items-center justify-center text-muted-foreground">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                ) : (
                  <div className="w-8 h-8 flex items-center justify-center text-muted-foreground opacity-50">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
