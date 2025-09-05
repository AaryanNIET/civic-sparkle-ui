import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  MapPin, 
  Clock, 
  User, 
  MessageSquare,
  Camera,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// Import civic issue images
import potholeImage from "@/assets/pothole-1.jpg";
import streetlightImage from "@/assets/broken-streetlight.jpg";
import garbageImage from "@/assets/garbage-issue.jpg";
import sidewalkImage from "@/assets/sidewalk-damage.jpg";

const civicIssues = [
  {
    id: 1,
    title: "Large Pothole on Main Street",
    description: "Dangerous pothole causing vehicle damage near the intersection of Main St & 5th Ave. Multiple cars have reported tire damage.",
    image: potholeImage,
    status: "In Progress",
    statusColor: "bg-orange-500",
    priority: "High",
    priorityColor: "bg-red-500",
    location: "Main St & 5th Ave",
    reportedBy: "Sarah M.",
    timeAgo: "2 days ago",
    reports: 47,
    comments: 12,
    category: "Road Maintenance"
  },
  {
    id: 2,
    title: "Broken Street Light - Safety Concern",
    description: "Street light has been non-functional for over a week, creating unsafe conditions for pedestrians walking at night.",
    image: streetlightImage,
    status: "Reported",
    statusColor: "bg-yellow-500",
    priority: "High",
    priorityColor: "bg-red-500",
    location: "Oak Street, Block 200",
    reportedBy: "Mike R.",
    timeAgo: "5 days ago",
    reports: 23,
    comments: 8,
    category: "Public Safety"
  },
  {
    id: 3,
    title: "Overflowing Garbage Bins",
    description: "Multiple garbage bins overflowing in the downtown area. Trash scattered on sidewalks attracting pests and creating unsanitary conditions.",
    image: garbageImage,
    status: "Scheduled",
    statusColor: "bg-blue-500",
    priority: "Medium",
    priorityColor: "bg-orange-500",
    location: "Downtown Plaza",
    reportedBy: "Jenny K.",
    timeAgo: "1 day ago",
    reports: 31,
    comments: 15,
    category: "Waste Management"
  },
  {
    id: 4,
    title: "Cracked Sidewalk - Trip Hazard",
    description: "Severely damaged sidewalk creating tripping hazards for pedestrians, especially dangerous for elderly residents and wheelchair users.",
    image: sidewalkImage,
    status: "Under Review",
    statusColor: "bg-purple-500",
    priority: "Medium",
    priorityColor: "bg-orange-500",
    location: "Elm Street Sidewalk",
    reportedBy: "Robert L.",
    timeAgo: "3 days ago",
    reports: 18,
    comments: 6,
    category: "Infrastructure"
  }
];

const CivicIssuesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 scroll-animate">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium slightly-tilted">
            <AlertTriangle className="h-4 w-4" />
            <span>Live Issues</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground handwritten-feel">
            Real Issues in 
            <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent slightly-tilted-right">
              Our Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us build better communities by reporting and tracking civic issues. 
            Your voice matters in making our neighborhoods safer and cleaner.
          </p>
        </div>

        {/* Issues Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {civicIssues.map((issue, index) => (
            <Card 
              key={issue.id}
              className={`overflow-hidden organic-hover subtle-shadow scroll-zoom ${
                index % 2 === 0 ? 'slightly-tilted' : 'slightly-tilted-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Issue Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={issue.image} 
                  alt={issue.title}
                  className="w-full h-full object-cover civic-transition hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <Badge className={`${issue.priorityColor} text-white`}>
                    {issue.priority} Priority
                  </Badge>
                  <Badge className={`${issue.statusColor} text-white`}>
                    {issue.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium">
                  #{issue.id}
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 handwritten-feel">{issue.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {issue.category}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{issue.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{issue.timeAgo}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4">
                  {expandedCard === issue.id ? issue.description : `${issue.description.slice(0, 120)}...`}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 p-3 bg-muted/50 rounded-lg">
                  <div className="flex space-x-6 text-sm">
                    <div className="flex items-center space-x-1">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      <span className="font-medium">{issue.reports}</span>
                      <span className="text-muted-foreground">reports</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                      <span className="font-medium">{issue.comments}</span>
                      <span className="text-muted-foreground">comments</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>by {issue.reportedBy}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => toggleCard(issue.id)}
                    className="flex-1 organic-hover"
                  >
                    {expandedCard === issue.id ? (
                      <>Less Details <ChevronUp className="ml-2 h-4 w-4" /></>
                    ) : (
                      <>More Details <ChevronDown className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                  <Button variant="outline" size="sm" className="organic-hover">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photo
                  </Button>
                  <Button variant="civic" size="sm" className="organic-hover">
                    Support Fix
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Report New Issue CTA */}
        <div className="text-center scroll-animate">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border slightly-tilted subtle-shadow">
            <h3 className="text-2xl font-bold mb-4 handwritten-feel">See an issue in your neighborhood?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every report helps make our community safer and better. Join thousands of engaged citizens 
              working together to improve our neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="civic" size="lg" className="px-8 organic-hover">
                <Camera className="h-5 w-5 mr-2" />
                Report New Issue
              </Button>
              <Button variant="outline" size="lg" className="px-8 organic-hover">
                <MapPin className="h-5 w-5 mr-2" />
                View Issue Map
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 mt-8 pt-6 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,847</div>
                <div className="text-sm text-muted-foreground">Issues Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">72hrs</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">94%</div>
                <div className="text-sm text-muted-foreground">Citizen Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivicIssuesSection;