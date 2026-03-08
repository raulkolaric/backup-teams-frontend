"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

import { BlurFade } from './blur-fade';
import { WordFadeIn } from './word-fade-in';

/* ── Why this shape? ───────────────────────────────────────────────────
 * Each tier has a distinct gradient accent so the cards feel colorful
 * and alive rather than flat. Pro is visually promoted (scale + ring)
 * to nudge conversion. GradualBlur at the bottom creates the "appear
 * from mist" reveal as the user scrolls in.
 * ──────────────────────────────────────────────────────────────────── */

const CHECK = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface Tier {
  key: string;
  priceKey: string;
  periodKey?: string;
  descKey: string;
  features: string[];
  ctaKey: string;
  /** Tailwind gradient for the top accent bar */
  gradient: string;
  /** Extra card-level classes (e.g. scale for Pro) */
  cardClass?: string;
  /** Ring highlight for the recommended tier */
  ring?: string;
  /** CTA button style override */
  ctaClass?: string;
  badge?: string;
}

const TIERS: Tier[] = [
  {
    key: 'free',
    priceKey: 'freePrice',
    descKey: 'freeDesc',
    features: ['freeFeat1', 'freeFeat2', 'freeFeat3', 'freeFeat4'],
    ctaKey: 'freeCta',
    gradient: 'from-slate-400 to-slate-600',
    ctaClass: 'bg-muted text-foreground hover:bg-muted/80',
  },
  {
    key: 'pro',
    priceKey: 'proPrice',
    periodKey: 'proPeriod',
    descKey: 'proDesc',
    features: ['proFeat1', 'proFeat2', 'proFeat3', 'proFeat4', 'proFeat5', 'proFeat6'],
    ctaKey: 'proCta',
    gradient: 'from-violet-500 via-purple-500 to-blue-500',
    cardClass: 'md:scale-105 z-10',
    ring: 'ring-2 ring-purple-500/40',
    ctaClass: 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:opacity-90 shadow-[0_0_24px_rgba(139,92,246,0.35)]',
    badge: 'recommended',
  },
  {
    key: 'enterprise',
    priceKey: 'enterprisePrice',
    descKey: 'enterpriseDesc',
    features: ['entFeat1', 'entFeat2', 'entFeat3', 'entFeat4', 'entFeat5'],
    ctaKey: 'entCta',
    gradient: 'from-emerald-400 to-teal-600',
    ctaClass: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:opacity-90 shadow-[0_0_24px_rgba(16,185,129,0.3)]',
  },
];

export default function Pricing() {
  const t = useTranslations('Pricing');

  return (
    <section id="pricing" className="py-16 px-8 scroll-mt-20">

        {/* Section header */}
        <div className="flex flex-col gap-4 text-center items-center mb-12 max-w-6xl mx-auto">
          <WordFadeIn
            words={t('title')}
            className="text-4xl md:text-5xl text-balance"
          />
          <BlurFade delay={0.25} inView>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {t('subtitle')}
            </p>
          </BlurFade>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-6xl mx-auto">
          {TIERS.map((tier, idx) => (
            <BlurFade key={tier.key} delay={0.15 * idx} inView>
              <article
                className={`
                  relative flex flex-col rounded-2xl border border-border
                  bg-card/60 backdrop-blur-md overflow-hidden
                  transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                  ${tier.ring ?? ''}
                  ${tier.cardClass ?? ''}
                `}
              >
                {/* Gradient accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${tier.gradient}`} />

                <div className="flex flex-col gap-6 p-8">

                  {/* Badge */}
                  {tier.badge && (
                    <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-purple-500/15 text-purple-400 border border-purple-500/20">
                      {t(tier.badge as any)}
                    </span>
                  )}

                  {/* Tier name + price */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                      {t(tier.key as any)}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">
                        {t(tier.priceKey as any)}
                      </span>
                      {tier.periodKey && (
                        <span className="text-sm text-muted-foreground">
                          {t(tier.periodKey as any)}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(tier.descKey as any)}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border" />

                  {/* Feature list */}
                  <ul className="flex flex-col gap-3">
                    {tier.features.map((fKey) => (
                      <li key={fKey} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <span className="mt-0.5 shrink-0 text-accent">{CHECK}</span>
                        {t(fKey as any)}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`
                      w-full mt-auto py-3 px-6 rounded-full font-semibold text-sm
                      transition-all duration-200 cursor-pointer
                      focus:ring-2 focus:ring-accent focus:outline-none
                      ${tier.ctaClass ?? 'bg-primary text-primary-foreground hover:opacity-90'}
                    `}
                  >
                    {t(tier.ctaKey as any)}
                  </button>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
    </section>
  );
}
