import Hero from "@/components/ui/Hero";
import FeaturesGrid from "@/components/ui/FeaturesGrid";
import HowItWorksTerminal from "@/components/ui/HowItWorksTerminal";
import ComparisonTable from "@/components/ui/ComparisonTable";
import VaultStats from "@/components/ui/VaultStats";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <Hero />
      <VaultStats />
      <FeaturesGrid />
      <HowItWorksTerminal />
      <ComparisonTable />
      <Footer />
    </main>
  );
}

