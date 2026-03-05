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
      <LiquidEther 
        className="fixed inset-0 -z-10 w-full h-full"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -10 }}
        colors={[ '#2563eb', '#10b981', '#0ea5e9' ]}
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
      <Hero />
      <VaultStats />
      <FeaturesGrid />
      <HowItWorksTerminal />
      <ComparisonTable />
      <Footer />
    </main>
  );
}

