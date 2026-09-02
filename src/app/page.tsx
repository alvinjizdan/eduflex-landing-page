import {
  Hero,
  ValueProposition,
  CoreFeatures,
  Solutions,
  Customization,
  HowItWorks,
  FAQ,
  RequestDemo,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col min-h-screen bg-[#0B0F17]">
      <Hero />
      <ValueProposition />
      <CoreFeatures />
      <Solutions />
      <Customization />
      <HowItWorks />
      <FAQ />
      <RequestDemo />
    </main>
  );
}
