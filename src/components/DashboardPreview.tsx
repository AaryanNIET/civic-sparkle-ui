import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Users,
  FileText,
  MessageSquare,
  Activity
} from "lucide-react";

const DashboardPreview = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            // Allow re-animation when scrolling back
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate, .scroll-zoom, .scroll-slide-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Intelligent Dashboard
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Real-time Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor civic engagement, track service requests, and stay informed with 
            our comprehensive analytics dashboard designed for both citizens and officials.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Citizen Dashboard */}
          <div className="space-y-6 scroll-slide-left">
            <h3 className="text-2xl font-semibold text-center mb-6">Citizen Dashboard</h3>
            
            {/* Active Requests */}
            <Card className="interactive-card organic-hover subtle-shadow slightly-tilted">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  My Active Requests
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">Business License Application</p>
                    <p className="text-sm text-muted-foreground">Submitted 3 days ago</p>
                  </div>
                  <Badge variant="secondary">In Review</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">Pothole Report - Main St</p>
                    <p className="text-sm text-muted-foreground">Submitted 1 week ago</p>
                  </div>
                  <Badge className="bg-green-500">Completed</Badge>
                </div>
                <Button variant="outline" className="w-full">View All Requests</Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common services at your fingertips</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="h-auto p-4 flex flex-col">
                  <FileText className="h-6 w-6 mb-2" />
                  Apply for Permit
                </Button>
                <Button variant="outline" size="sm" className="h-auto p-4 flex flex-col">
                  <AlertCircle className="h-6 w-6 mb-2" />
                  Report Issue
                </Button>
                <Button variant="outline" size="sm" className="h-auto p-4 flex flex-col">
                  <MessageSquare className="h-6 w-6 mb-2" />
                  Contact Support
                </Button>
                <Button variant="outline" size="sm" className="h-auto p-4 flex flex-col">
                  <Activity className="h-6 w-6 mb-2" />
                  Track Status
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Analytics */}
          <div className="space-y-6 scroll-zoom">
            <h3 className="text-2xl font-semibold text-center mb-6">System Analytics</h3>

            {/* Performance Metrics */}
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Service Efficiency</span>
                    <span className="text-sm text-muted-foreground">94%</span>
                  </div>
                  <Progress value={94} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Citizen Satisfaction</span>
                    <span className="text-sm text-muted-foreground">98%</span>
                  </div>
                  <Progress value={98} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Response Time</span>
                    <span className="text-sm text-muted-foreground">87%</span>
                  </div>
                  <Progress value={87} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Real-time Stats */}
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle>Today's Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">247</div>
                    <div className="text-sm text-muted-foreground">New Requests</div>
                  </div>
                  <div className="p-4 bg-green-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">189</div>
                    <div className="text-sm text-muted-foreground">Resolved</div>
                  </div>
                  <div className="p-4 bg-orange-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">58</div>
                    <div className="text-sm text-muted-foreground">In Progress</div>
                  </div>
                  <div className="p-4 bg-purple-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">1.2k</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Government Dashboard */}
          <div className="space-y-6 scroll-slide-right">
            <h3 className="text-2xl font-semibold text-center mb-6">Government Panel</h3>

            {/* Priority Alerts */}
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
                  Priority Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                    <span className="text-sm font-medium">Emergency: Water Main Break</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Downtown District - 45 reports</p>
                </div>
                <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-orange-500 mr-2" />
                    <span className="text-sm font-medium">High Volume: Permit Applications</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Processing queue at 120% capacity</p>
                </div>
              </CardContent>
            </Card>

            {/* Department Status */}
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  Department Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Public Works</span>
                  <Badge className="bg-green-500">Online</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Planning & Zoning</span>
                  <Badge className="bg-green-500">Online</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Licensing</span>
                  <Badge variant="secondary">Busy</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Emergency Services</span>
                  <Badge className="bg-green-500">Online</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Admin Actions */}
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle>Admin Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve Pending Requests
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Public Notice
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Generate Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-animate">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4">Experience the Full Dashboard</h3>
            <p className="text-muted-foreground mb-6">
              See how CivicSync transforms government operations with real-time insights and seamless workflows.
            </p>
            <Button variant="civic" size="lg" className="px-8">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;