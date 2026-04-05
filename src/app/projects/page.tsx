import Navbar from "@/components/navbar";
import FeaturedProjects from "@/components/featured-projects";
import Footer from "@/components/footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}
