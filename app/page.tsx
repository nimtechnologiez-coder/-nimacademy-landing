import Hero from "@/components/Hero";
import ProgramSkills from "@/components/ProgramSkills";
import Schedule from "@/components/Schedule";
import WhoIsItFor from "@/components/WhoIsItFor";
import ToolsGrid from "@/components/ToolsGrid";
import Influencers from "@/components/Influencers";
import CommunityExperience from "@/components/CommunityExperience";
import AdvancedPrograms from "@/components/AdvancedPrograms";
import BusinessSection from "@/components/BusinessSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Prepare2026 from "@/components/Prepare2026";
import LearningModes from "@/components/LearningModes";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans selection:bg-primary/30 selection:text-text-main">
      <Hero />
      <ProgramSkills />
      <Schedule />
      <WhoIsItFor />
      <ToolsGrid />
      <Influencers />
      <CommunityExperience />
      <AdvancedPrograms />
      <BusinessSection />
      <FAQ />
    </div>
  );
}
