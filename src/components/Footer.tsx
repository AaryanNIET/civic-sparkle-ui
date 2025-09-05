import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 civic-gradient rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">CivicSync</h3>
                <p className="text-sm text-muted-foreground">Government Platform</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Connecting citizens and government through innovative digital solutions 
              that promote transparency, efficiency, and civic engagement.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary civic-transition">Document Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary civic-transition">Voting & Elections</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary civic-transition">City Planning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary civic-transition">Report Issues</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary civic-transition">Bill Payments</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary civic-transition">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary civic-transition">Contact Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary civic-transition">User Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary civic-transition">API Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary civic-transition">Community Forum</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">123 Government St, Civic Center, CC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+1 (555) 123-CIVIC</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">contact@civicsync.gov</span>
              </div>
            </div>
            <div className="pt-4">
              <h5 className="font-medium text-foreground mb-2">Emergency Contact</h5>
              <p className="text-sm text-muted-foreground">
                For urgent civic matters: <span className="font-medium text-foreground">911</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} CivicSync. All rights reserved. | 
              <a href="#" className="hover:text-primary civic-transition ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-primary civic-transition ml-1">Terms of Service</a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Built with ❤️ for civic engagement</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>System Status: Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;