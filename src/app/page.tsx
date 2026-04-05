import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TechStack from "@/components/tech-stack";
import FeaturedProjects from "@/components/featured-projects";
import AboutPreview from "@/components/about-preview";
import ContactCTA from "@/components/contact-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <FeaturedProjects />
        <AboutPreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
