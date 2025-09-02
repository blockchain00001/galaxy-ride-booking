import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Clock, Car, Plane, Anchor } from "lucide-react";

const BookingInterface = () => {
  const [bookingType, setBookingType] = useState("local");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const vehicleTypes = [
    { id: "economy", name: "Economy", price: "£15", capacity: "4 passengers", icon: "🚗" },
    { id: "comfort", name: "Comfort", price: "£22", capacity: "4 passengers", icon: "🚙" },
    { id: "premium", name: "Premium", price: "£35", capacity: "4 passengers", icon: "🚐" },
    { id: "luxury", name: "Luxury", price: "£55", capacity: "4 passengers", icon: "🏎️" },
  ];

  const bookingTypes = [
    { id: "local", name: "Local Rides", icon: Car, description: "City and local area trips" },
    { id: "airport", name: "Airport Transfer", icon: Plane, description: "To/from airports" },
    { id: "docks", name: "Docks Transfer", icon: Anchor, description: "To/from docks and ports" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Booking Type Selection */}
      <Card className="backdrop-blur-sm bg-card/50 border-border animate-slide-up">
        <CardHeader>
          <CardTitle className="text-center bg-cosmic bg-clip-text text-transparent">
            Choose Your Journey Type
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bookingTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Button
                  key={type.id}
                  variant={bookingType === type.id ? "default" : "outline"}
                  className={`h-auto p-4 flex flex-col space-y-2 transition-all duration-300 ${
                    bookingType === type.id
                      ? "bg-cosmic text-primary-foreground animate-cosmic-pulse"
                      : "hover:bg-muted hover:animate-float"
                  }`}
                  onClick={() => setBookingType(type.id)}
                >
                  <Icon className="h-8 w-8" />
                  <div className="text-center">
                    <div className="font-semibold">{type.name}</div>
                    <div className="text-sm opacity-80">{type.description}</div>
                  </div>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Booking Form */}
      <Card className="backdrop-blur-sm bg-card/50 border-border animate-slide-up">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Trip Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Location Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickup" className="text-sm font-medium">Pickup Location</Label>
              <Input
                id="pickup"
                placeholder="Enter pickup address"
                className="bg-input/50 backdrop-blur-sm border-border focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dropoff" className="text-sm font-medium">Drop-off Location</Label>
              <Input
                id="dropoff"
                placeholder="Enter destination address"
                className="bg-input/50 backdrop-blur-sm border-border focus:ring-primary"
              />
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-sm font-medium flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Date</span>
              </Label>
              <Input
                id="date"
                type="date"
                className="bg-input/50 backdrop-blur-sm border-border focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="text-sm font-medium flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Time</span>
              </Label>
              <Input
                id="time"
                type="time"
                className="bg-input/50 backdrop-blur-sm border-border focus:ring-primary"
              />
            </div>
          </div>

          {/* Passengers */}
          <div className="space-y-2">
            <Label htmlFor="passengers" className="text-sm font-medium">Number of Passengers</Label>
            <Select>
              <SelectTrigger className="bg-input/50 backdrop-blur-sm border-border">
                <SelectValue placeholder="Select passengers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Passenger</SelectItem>
                <SelectItem value="2">2 Passengers</SelectItem>
                <SelectItem value="3">3 Passengers</SelectItem>
                <SelectItem value="4">4 Passengers</SelectItem>
                <SelectItem value="5">5+ Passengers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Vehicle Selection */}
      <Card className="backdrop-blur-sm bg-card/50 border-border animate-slide-up">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Car className="h-5 w-5 text-primary" />
            <span>Choose Your Vehicle</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {vehicleTypes.map((vehicle) => (
              <Button
                key={vehicle.id}
                variant={selectedVehicle === vehicle.id ? "default" : "outline"}
                className={`h-auto p-4 flex flex-col space-y-2 transition-all duration-300 ${
                  selectedVehicle === vehicle.id
                    ? "bg-cosmic text-primary-foreground animate-cosmic-pulse"
                    : "hover:bg-muted hover:animate-float"
                }`}
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
                <div className="text-2xl">{vehicle.icon}</div>
                <div className="text-center">
                  <div className="font-semibold">{vehicle.name}</div>
                  <div className="text-sm opacity-80">{vehicle.capacity}</div>
                  <div className="text-lg font-bold text-primary">{vehicle.price}</div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Book Now Button */}
      <div className="text-center">
        <Button
          size="lg"
          className="bg-cosmic text-primary-foreground hover:animate-cosmic-pulse px-8 py-3 text-lg font-semibold transition-all duration-300"
        >
          Book Your Galaxy Ride
        </Button>
      </div>
    </div>
  );
};

export default BookingInterface;