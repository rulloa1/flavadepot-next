import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { CTASection } from "@/components/CTASection";

export const revalidate = 3600; // HTML gets re-generated in background every hour if requested.

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />

        {/* Simple map section on homepage */}
        <section className="w-full py-12 bg-stone-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-8 text-center">
              Find Us
            </h2>
            <GoogleMapEmbed />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}