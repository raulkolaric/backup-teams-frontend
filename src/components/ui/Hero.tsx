"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import SplitText from '../SplitText';

export default function Hero() {
  const t = useTranslations('Hero');
  const [isTitleComplete, setIsTitleComplete] = useState(false);

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden">

      {/* Full-bleed subtle animated grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          animation: 'pan-grid 20s linear infinite',
        }}
      />

      {/* Constrained content wrapper */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 flex flex-col mt-8">
        <div className="flex flex-col items-start text-left max-w-4xl gap-8">

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground mb-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            {t('status')}
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            {t('title1')}<span className="text-accent">{t('titleAccent')}</span><span className="font-sans">{t('title2')}</span><br />
            <SplitText 
              text={t('title3')} 
              className="font-serif italic font-medium" 
              delay={50} 
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2} 
              rootMargin="-50px" 
              tag="span"
              textAlign='left'
              onLetterAnimationComplete={() => setIsTitleComplete(true)}
            />
          </h1>

          {/* Dynamic Mount Block — uses grid to perfectly reserve height */}
          <div className="grid w-full">
            {/* Invisible ghost block to hold precise layout flow and prevent layout shift */}
            <div className="col-start-1 row-start-1 invisible pointer-events-none mb-2">
              <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
                {t('description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-start">
                {/* To perfectly match dimensions, ghost buttons must have the exact same box-model classes like borders/padding */}
                <Link href="/signup" className="px-8 py-4 rounded-full font-semibold text-base min-w-[200px] border border-transparent text-center">
                  {t('startAction')}
                </Link>
                <button className="px-8 py-4 rounded-full font-medium text-base min-w-[200px] border border-border">
                  {t('docsAction')}
                </button>
              </div>
            </div>

            {/* Actual animated block — mounts on top of the ghost */}
            <div className="col-start-1 row-start-1">
              {isTitleComplete && (
                <>
                  {/* Sub-headline */}
                  <SplitText
                    text={t('description')}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                    delay={10}
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.2}
                    rootMargin="-50px"
                    tag="p"
                    onLetterAnimationComplete={() => {}}
                    textAlign='left'
                  />

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-start animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
                    <Link href="/signup" className="flex items-center justify-center bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-110 shadow-[0_0_20px] shadow-accent/25 min-w-[200px] border border-transparent cursor-pointer">
                      {t('startAction')}
                    </Link>
                    <button className="bg-card text-foreground border border-border px-8 py-4 rounded-full font-medium text-base transition-all duration-300 ease-in-out hover:bg-muted hover:scale-110 cursor-pointer min-w-[200px]">
                      {t('docsAction')}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Decorative mock terminal */}
        <div className="w-full mt-24 rounded-xl border border-border bg-card shadow-2xl overflow-hidden">

          {/* Terminal chrome */}
          <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <div className="ml-4 text-xs font-mono text-muted-foreground flex-1 text-center pr-12">
              ~/backup-cli — bash
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm sm:text-base leading-relaxed text-muted-foreground overflow-x-auto text-left">
            <div className="flex items-center gap-2">
              <span className="text-accent font-bold">$</span>
              <span className="text-foreground">teams-backup start --channel &quot;General&quot; --full</span>
            </div>
            <div className="mt-3 text-[#27c93f] flex items-center gap-2">
              <span>[OK]</span>
              <span className="text-muted-foreground">Authenticated with Microsoft Graph API using token</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-accent">[INFO]</span>
              <span>Fetching message history...</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-accent">[INFO]</span>
              <span>Downloading attached files (12/45)...</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <span className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              <span className="text-foreground opacity-80">Encrypting local volume payload...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
