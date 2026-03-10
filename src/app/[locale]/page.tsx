import Hero from "@/components/ui/Hero";
import FeaturesGrid from "@/components/ui/FeaturesGrid";
import HowItWorksTerminal from "@/components/ui/HowItWorksTerminal";
import ComparisonTable from "@/components/ui/ComparisonTable";
import Pricing from "@/components/ui/Pricing";
import VaultStats, { VaultStatsSkeleton } from "@/components/ui/VaultStats";
import { Suspense } from "react";
import LiquidEther from "@/components/LiquidEther";
import LightRays from "@/components/LightRays";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <Header />

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
          isBounce={true}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={300}
          autoRampDuration={0.1}
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

      {/* Global dot pattern wrapper for all sections below Hero */}
      <div className="relative mb-30">
        {/* Background pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045] z-0"
          style={{
            backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(to bottom, transparent, black 200px, black calc(100% - 200px), transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 200px, black calc(100% - 200px), transparent)",
          }}
        />

        {/* Content container */}
        <div className="relative z-10 w-full flex flex-col">
          <Suspense fallback={<VaultStatsSkeleton />}>
            <ComparisonTable />
            <VaultStats />
          </Suspense>
          <HowItWorksTerminal />
          
          {/* LightRays Background explicitly behind Pricing */}
          <div className="relative w-full">
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-100">
              {/* Top gradient fade */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '30%',
                  background: 'linear-gradient(to top, transparent, #020617)',
                  pointerEvents: 'none',
                  zIndex:4,
                }}
              />
              <LightRays
                raysOrigin="top-center"
                raysColor="#be1cd4"
                raysSpeed={1}
                lightSpread={0.7}
                rayLength={3}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                className="custom-rays"
                fadeDistance={1.7}
                saturation={2}
              />
              {/* Bottom gradient fade per user request */}
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
                  zIndex: 10,
                }}
              />
            </div>
            
            <div className="relative z-10 w-full">
              <Pricing />
            </div>
          </div>

          {/* <FeaturesGrid /> */}
        </div>
      </div>
      <Footer />
    </main>
  );
}
