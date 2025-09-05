import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CivicIssuesSection from "@/components/CivicIssuesSection";
import DashboardPreview from "@/components/DashboardPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div id="services">
          <ServicesSection />
        </div>
        
        <div id="community">
          <CivicIssuesSection />
        </div>
        
        <div id="dashboard">
          <DashboardPreview />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
