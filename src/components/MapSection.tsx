import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, AlertTriangle, CheckCircle, Clock, Navigation } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

declare global {
  interface Window {
    google: any;
  }
}

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [apiKey, setApiKey] = useState("");
  const [isMapLoaded, setIsMapLoaded] = useState(false);
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

  const initializeMap = (apiKey: string) => {
    if (!window.google || !mapRef.current) return;

    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: { lat: 23.6102, lng: 85.2799 }, // Jharkhand center
      zoom: 8,
      mapTypeId: 'roadmap',
      styles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [{ weight: "2.00" }]
        },
        {
          featureType: "all",
          elementType: "geometry.stroke",
          stylers: [{ color: "#9c9c9c" }]
        }
      ]
    });

    setMap(mapInstance);

    // Add markers for pothole locations
    potholeLocations.forEach((location) => {
      const marker = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: mapInstance,
        title: location.title,
        icon: {
          url: getMarkerIcon(location.status),
          scaledSize: new window.google.maps.Size(40, 40)
        }
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 250px;">
            <h3 style="margin: 0 0 10px 0; color: #1f2937;">${location.title}</h3>
            <p style="margin: 5px 0; color: #6b7280;">${location.description}</p>
            <p style="margin: 5px 0; font-size: 12px; color: #9ca3af;">Reported: ${location.reportedDate}</p>
            <span style="background: ${getStatusColor(location.status)}; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px;">
              ${location.status.replace('-', ' ').toUpperCase()}
            </span>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker);
      });
    });

    setIsMapLoaded(true);
  };

  const getMarkerIcon = (status: string) => {
    const colors = {
      'pending': '#ef4444',
      'in-progress': '#f59e0b',
      'completed': '#10b981'
    };
    const color = colors[status as keyof typeof colors] || '#6b7280';
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" fill="${color}" stroke="#ffffff" stroke-width="3"/>
        <circle cx="20" cy="20" r="6" fill="#ffffff"/>
      </svg>
    `)}`;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'pending': '#ef4444',
      'in-progress': '#f59e0b',
      'completed': '#10b981'
    };
    return colors[status as keyof typeof colors] || '#6b7280';
  };

  const loadGoogleMaps = (apiKey: string) => {
    if (window.google) {
      initializeMap(apiKey);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => initializeMap(apiKey);
    document.head.appendChild(script);
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      loadGoogleMaps(apiKey);
    }
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
                {!isMapLoaded && (
                  <form onSubmit={handleApiKeySubmit} className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Google Maps API Key
                      </label>
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="Enter your Google Maps API key"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          className="flex-1"
                        />
                        <Button type="submit" disabled={!apiKey.trim()}>
                          Load Map
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Get your API key from{" "}
                        <a 
                          href="https://console.cloud.google.com/google/maps-apis" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Google Cloud Console
                        </a>
                      </p>
                    </div>
                  </form>
                )}
                
                <div 
                  ref={mapRef} 
                  className="w-full h-96 rounded-lg border bg-muted"
                  style={{ 
                    background: !isMapLoaded ? 'linear-gradient(45deg, #f1f5f9 25%, transparent 25%), linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f1f5f9 75%), linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)' : 'none',
                    backgroundSize: !isMapLoaded ? '20px 20px' : 'auto',
                    backgroundPosition: !isMapLoaded ? '0 0, 0 10px, 10px -10px, -10px 0px' : 'auto'
                  }}
                >
                  {!isMapLoaded && (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Enter API key to load map</p>
                      </div>
                    </div>
                  )}
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