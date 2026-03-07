import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BusinessResultsSection from "@/components/BusinessResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BusinessResultsSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <IndustriesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
