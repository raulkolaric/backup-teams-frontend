"use client"

import Hero from "@/components/ui/Hero";
import FeaturesGrid from "@/components/ui/FeaturesGrid";
import HowItWorksTerminal from "@/components/ui/HowItWorksTerminal";
import ComparisonTable from "@/components/ui/ComparisonTable";
import VaultStats from "@/components/ui/VaultStats";
import LiquidEther from "@/components/LiquidEther";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans">

      {/*
       * Per the official docs, LiquidEther renders its WebGL canvas
       * inside whatever container you give it. The container must have
       * explicit dimensions and `position: relative`.
       *
       * We give it exactly 100vh, then:
       *  1. Hero is pulled up via a negative margin-top to overlap it
       *  2. An absolute gradient div at the bottom fades the canvas into
       *     the page background — no hard cutoff.
       */}
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <LiquidEther
          colors={[ '#00d9ff', '#ffffffff', '#99f2efff' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />

        {/* Gradient fade: same stacking context as the canvas, position: absolute */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '45%',
            background: 'linear-gradient(to bottom, transparent, #020617)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      </div>

      {/* Hero overlaps the canvas via negative margin */}
      <div style={{ marginTop: '-100vh', position: 'relative', zIndex: 2 }}>
        <Hero />
      </div>

      <VaultStats />
      <FeaturesGrid />
      <HowItWorksTerminal />
      <ComparisonTable />
      <Footer />
    </main>
  );
}
