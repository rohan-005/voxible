import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsBar from "@/components/landing/StatsBar";
import CapabilitiesSection from "@/components/landing/CapabilitiesSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <CapabilitiesSection />
      <Footer />
    </main>
  );
}