import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Vote, 
  Building, 
  AlertTriangle, 
  Calendar, 
  CreditCard,
  MapPin,
  Megaphone
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Document Services",
    description: "Apply for permits, licenses, and official documents online",
    color: "bg-blue-500",
    features: ["Birth Certificates", "Business Licenses", "Building Permits"]
  },
  {
    icon: Vote,
    title: "Voting & Elections",
    description: "Participate in democratic processes and track election information",
    color: "bg-green-500",
    features: ["Voter Registration", "Election Results", "Candidate Info"]
  },
  {
    icon: Building,
    title: "City Planning",
    description: "View and comment on urban development projects",
    color: "bg-purple-500",
    features: ["Zoning Maps", "Development Plans", "Public Hearings"]
  },
  {
    icon: AlertTriangle,
    title: "Report Issues",
    description: "Report municipal problems and track resolution status",
    color: "bg-orange-500",
    features: ["Pothole Reports", "Street Lighting", "Waste Management"]
  },
  {
    icon: Calendar,
    title: "Public Events",
    description: "Discover and register for community events and meetings",
    color: "bg-indigo-500",
    features: ["Town Halls", "Community Events", "Public Meetings"]
  },
  {
    icon: CreditCard,
    title: "Bill Payments",
    description: "Pay taxes, utilities, and other municipal fees securely",
    color: "bg-emerald-500",
    features: ["Property Tax", "Water Bills", "Parking Tickets"]
  },
  {
    icon: MapPin,
    title: "Location Services",
    description: "Find nearby government offices and service centers",
    color: "bg-red-500",
    features: ["Office Locator", "Service Centers", "Contact Info"]
  },
  {
    icon: Megaphone,
    title: "Public Announcements",
    description: "Stay informed about important civic updates and news",
    color: "bg-cyan-500",
    features: ["Emergency Alerts", "Policy Updates", "Community News"]
  }
];

const ServicesSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate, .scroll-zoom, .scroll-slide-left');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Government Services
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              At Your Fingertips
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access essential government services, stay informed about civic matters, 
            and engage with your community through our comprehensive digital platform.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 scroll-zoom">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="interactive-card border-0 civic-shadow hover:civic-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 civic-transition hover:scale-110`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4 civic-button">
                    Access Service
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center scroll-slide-left">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Create your CivicSync account today and experience seamless government services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="civic" size="lg" className="px-8">
                Create Account
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;