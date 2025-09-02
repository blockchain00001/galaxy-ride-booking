import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Navigation, 
  Phone, 
  MessageCircle, 
  Star, 
  Clock, 
  Car,
  Route,
  AlertCircle
} from "lucide-react";

const TripTracking = () => {
  const [tripProgress, setTripProgress] = useState(45);
  const [estimatedTime, setEstimatedTime] = useState(12);

  // Simulate trip progress
  useEffect(() => {
    const interval = setInterval(() => {
      setTripProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 5;
      });
      setEstimatedTime(prev => {
        if (prev <= 0) return 0;
        return Math.max(0, prev - 0.5);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tripData = {
    id: "GR-2024-001234",
    status: "in_progress",
    driver: {
      name: "Alex Starworth",
      rating: 4.9,
      phone: "+44 7700 900123",
      vehicle: "Tesla Model 3 - Silver",
      plate: "GR24 ABC"
    },
    pickup: {
      address: "London Heathrow Airport, Terminal 5",
      time: "14:30"
    },
    destination: {
      address: "Central London, Westminster Abbey",
      time: "15:15 (estimated)"
    },
    fare: {
      base: 45.50,
      surge: 0,
      total: 45.50
    }
  };

  return (
    <Layout>
      <div className="min-h-screen px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold bg-cosmic bg-clip-text text-transparent mb-4">
              Track Your Galaxy Ride
            </h1>
            <p className="text-xl text-muted-foreground">
              Trip ID: {tripData.id}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <Card className="backdrop-blur-sm bg-card/80 border-border h-96">
                <CardContent className="p-0 h-full relative">
                  <div className="absolute inset-0 bg-muted/20 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <MapPin className="h-12 w-12 text-primary mx-auto animate-bounce" />
                      <p className="text-muted-foreground">
                        Live GPS tracking would appear here
                        <br />
                        <span className="text-sm">(Requires Google Maps integration)</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Mock route indicators */}
                  <div className="absolute top-4 left-4 space-y-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      <Navigation className="h-3 w-3 mr-1" />
                      Live Tracking
                    </Badge>
                    <Badge variant="outline" className="border-border">
                      ETA: {Math.ceil(estimatedTime)} min
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trip Details */}
            <div className="space-y-6">
              {/* Trip Status */}
              <Card className="backdrop-blur-sm bg-card/80 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">Trip Status</span>
                    <Badge className="bg-primary text-primary-foreground">
                      In Progress
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{Math.round(tripProgress)}%</span>
                    </div>
                    <Progress value={tripProgress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>ETA: {Math.ceil(estimatedTime)} minutes</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-3 w-3 rounded-full bg-primary mt-1 animate-pulse" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Current Location</p>
                        <p className="text-xs text-muted-foreground">M4 Junction 3, approaching Central London</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="h-3 w-3 rounded-full bg-muted border-2 border-primary mt-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Destination</p>
                        <p className="text-xs text-muted-foreground">{tripData.destination.address}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Driver Info */}
              <Card className="backdrop-blur-sm bg-card/80 border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Your Driver</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{tripData.driver.name}</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">
                          {tripData.driver.rating} rating
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-muted-foreground" />
                      <span>{tripData.driver.vehicle}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Plate:</span>
                      <span className="font-mono">{tripData.driver.plate}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="border-border">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm" className="border-border">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Trip Details */}
              <Card className="backdrop-blur-sm bg-card/80 border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Trip Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        Pickup
                      </p>
                      <p className="text-xs text-muted-foreground ml-4">
                        {tripData.pickup.address}
                      </p>
                      <p className="text-xs text-muted-foreground ml-4">
                        {tripData.pickup.time}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-primary" />
                        Destination
                      </p>
                      <p className="text-xs text-muted-foreground ml-5">
                        {tripData.destination.address}
                      </p>
                      <p className="text-xs text-muted-foreground ml-5">
                        {tripData.destination.time}
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Base Fare</span>
                      <span>£{tripData.fare.base}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span>Total</span>
                      <span>£{tripData.fare.total}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Contact */}
          <Card className="backdrop-blur-sm bg-card/80 border-border mt-6">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  <div>
                    <p className="text-sm font-medium">Need Help?</p>
                    <p className="text-xs text-muted-foreground">24/7 Emergency Support</p>
                  </div>
                </div>
                <Button variant="destructive" size="sm">
                  Emergency Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TripTracking;