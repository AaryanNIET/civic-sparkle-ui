import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, MessageCircle } from "lucide-react";
import heroImage from "@/assets/civic-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Connecting 
                <span className="block bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                  Citizens
                </span>
                <span className="block">& Government</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
                CivicSync bridges the gap between citizens and government services with 
                transparency, efficiency, and trust at its core.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-white/80">Active Citizens</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">125</div>
                <div className="text-white/80">Government Agencies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6 slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 interactive-card">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Citizen Services</h3>
                  <p className="text-white/80">Access government services online 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 interactive-card">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Transparent Governance</h3>
                  <p className="text-white/80">Real-time insights into government operations</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 interactive-card">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Community Engagement</h3>
                  <p className="text-white/80">Voice your opinions on local policies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-1 h-8 bg-white/30 rounded-full relative">
            <div className="absolute top-1 left-0 w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;