import Hero from "@/components/ui/Hero";
import FeaturesGrid from "@/components/ui/FeaturesGrid";
import ComparisonTable from "@/components/ui/ComparisonTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <Hero />
      <FeaturesGrid />
      <ComparisonTable />
    </main>
  );
}
