import Navbar from "@/components/navbar";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20 space-y-0">
        <AboutSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
