import Navbar from "@/components/navbar";
import ContactCTA from "@/components/contact-cta";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
