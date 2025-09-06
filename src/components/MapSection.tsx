import React, { useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, AlertTriangle, CheckCircle, Clock, Navigation } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import L from 'leaflet';

// Create a simple map without React Leaflet to avoid context issues
const SimpleLeafletMap = ({ locations }: { locations: any[] }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([23.6102, 85.2799], 8);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create custom markers for each location
    locations.forEach((location) => {
      const color = getStatusColor(location.status);
      
      const customIcon = L.divIcon({
        html: `
          <div style="
            background-color: ${color};
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              background-color: white;
              width: 8px;
              height: 8px;
              border-radius: 50%;
            "></div>
          </div>
        `,
        className: 'custom-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map);
      
      marker.bindPopup(`
        <div style="padding: 8px; max-width: 200px;">
          <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 14px; font-weight: 600;">
            ${location.title}
          </h3>
          <p style="margin: 4px 0; color: #6b7280; font-size: 12px;">
            ${location.description}
          </p>
          <p style="margin: 4px 0; color: #9ca3af; font-size: 10px;">
            Reported: ${location.reportedDate}
          </p>
          <span style="
            background: ${color}; 
            color: white; 
            padding: 2px 6px; 
            border-radius: 8px; 
            font-size: 10px;
            display: inline-block;
            margin-top: 4px;
          ">
            ${location.status.replace('-', ' ').toUpperCase()}
          </span>
        </div>
      `);
    });

    return () => {
      map.remove();
    };
  }, [locations]);

  const getStatusColor = (status: string) => {
    const colors = {
      'pending': '#ef4444',
      'in-progress': '#f59e0b',
      'completed': '#10b981'
    };
    return colors[status as keyof typeof colors] || '#6b7280';
  };

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} className="rounded-lg" />;
};

const MapSection = () => {
  const scrollAnimation = useScrollAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Pothole repair locations in Jharkhand
  const potholeLocations = [
    {
      id: 1,
      lat: 23.3441,
      lng: 85.3096,
      title: "Main Road Pothole - Ranchi",
      status: "in-progress",
      description: "Large pothole repair ongoing",
      reportedDate: "2024-01-10"
    },
    {
      id: 2,
      lat: 23.3569,
      lng: 85.3347,
      title: "Station Road Repair - Ranchi",
      status: "completed",
      description: "Pothole fixed successfully",
      reportedDate: "2024-01-08"
    },
    {
      id: 3,
      lat: 23.3293,
      lng: 85.3230,
      title: "Commercial Street - Ranchi",
      status: "pending",
      description: "Multiple potholes reported",
      reportedDate: "2024-01-12"
    },
    {
      id: 4,
      lat: 26.8467,
      lng: 80.9462,
      title: "Highway Repair - Dhanbad",
      status: "in-progress",
      description: "Highway pothole repair",
      reportedDate: "2024-01-11"
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'pending': '#ef4444',
      'in-progress': '#f59e0b',
      'completed': '#10b981'
    };
    return colors[status as keyof typeof colors] || '#6b7280';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-amber-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
    }
  };

  return (
    <section id="locate" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div 
        ref={(el) => {
          sectionRef.current = el;
          if (el) scrollAnimation.elementsRef.current.push(el);
        }}
        className="max-w-7xl mx-auto scroll-animate"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 civic-gradient-text">
            Locate & Track Civic Issues
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive map of Jharkhand showing real-time pothole repairs and civic infrastructure updates
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-primary" />
                  Jharkhand Infrastructure Map
                </CardTitle>
                <CardDescription>
                  View roads, houses, and ongoing civic repairs across Jharkhand
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 rounded-lg border bg-muted overflow-hidden">
                  <SimpleLeafletMap locations={potholeLocations} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Issues List */}
          <div className="space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Active Issues</CardTitle>
                <CardDescription>
                  Current pothole repairs and civic issues
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {potholeLocations.map((location) => (
                  <div 
                    key={location.id} 
                    className="p-4 rounded-lg border hover:shadow-md civic-transition"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{location.title}</h4>
                      {getStatusIcon(location.status)}
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {location.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className="text-xs"
                        style={{ 
                          borderColor: getStatusColor(location.status),
                          color: getStatusColor(location.status)
                        }}
                      >
                        {location.status.replace('-', ' ')}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {location.reportedDate}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Legend */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Map Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="text-sm">Pending Issues</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                  <span className="text-sm">In Progress</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="text-sm">Completed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;