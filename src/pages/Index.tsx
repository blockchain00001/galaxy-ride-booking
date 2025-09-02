import Layout from "@/components/Layout";
import BookingInterface from "@/components/BookingInterface";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Star, Shield, Clock, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-galaxy.jpg";

const Index = () => {
  const features = [
    {
      icon: Car,
      title: "Premium Fleet",
      description: "Experience luxury with our galaxy-class vehicles"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock availability across the cosmos"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Fully insured rides with verified stellar drivers"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Consistently rated as the best in the galaxy"
    },
    {
      icon: Users,
      title: "Trusted Drivers",
      description: "Background-checked professional space navigators"
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Monitor your journey through space in real-time"
    }
  ];

  const stats = [
    { number: "1M+", label: "Happy Passengers" },
    { number: "50K+", label: "Completed Rides" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9★", label: "Average Rating" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-cosmic opacity-10" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-8xl font-bold bg-cosmic bg-clip-text text-transparent mb-6 animate-float">
              Galaxy Rides
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Journey through the cosmos in comfort and style. 
              Premium ride booking that's truly out of this world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-cosmic text-primary-foreground hover:animate-cosmic-pulse px-8 py-4 text-lg font-semibold"
              >
                Book Your Ride
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-cosmic hover:text-primary-foreground px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center animate-float" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold bg-cosmic bg-clip-text text-transparent mb-4">
              Book Your Galaxy Adventure
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience seamless booking with real-time tracking and premium comfort
            </p>
          </div>
          <BookingInterface />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold bg-cosmic bg-clip-text text-transparent mb-4">
              Why Choose Galaxy Rides?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what makes our service truly stellar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className="backdrop-blur-sm bg-card/50 border-border hover:animate-float transition-all duration-300 cursor-pointer group"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <CardHeader className="text-center">
                    <div className="relative mx-auto mb-4">
                      <Icon className="h-12 w-12 text-primary group-hover:animate-twinkle" />
                      <div className="absolute -inset-2 bg-stellar rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <Card className="backdrop-blur-sm bg-card/50 border-border max-w-4xl mx-auto animate-slide-up">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-cosmic bg-clip-text text-transparent mb-4">
                Ready to Explore the Galaxy?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join millions of satisfied customers who trust Galaxy Rides for their cosmic journeys
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-cosmic text-primary-foreground hover:animate-cosmic-pulse px-8 py-4 text-lg"
                >
                  Start Your Journey
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-cosmic hover:text-primary-foreground px-8 py-4 text-lg"
                >
                  Download App
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
