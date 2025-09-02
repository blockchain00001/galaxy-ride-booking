import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Car, MapPin, BarChart3, Settings, Shield, Calendar, DollarSign } from "lucide-react";

const Admin = () => {
  const dashboardCards = [
    { title: "Total Users", value: "1,234", icon: Users, color: "text-primary" },
    { title: "Active Drivers", value: "89", icon: Car, color: "text-secondary" },
    { title: "Live Trips", value: "42", icon: MapPin, color: "text-accent" },
    { title: "Revenue Today", value: "£2,847", icon: DollarSign, color: "text-primary" },
  ];

  const managementOptions = [
    { title: "User Management", description: "Manage passengers and drivers", icon: Users },
    { title: "Driver Verification", description: "Verify documents and licenses", icon: Shield },
    { title: "Trip Monitoring", description: "Real-time trip tracking", icon: MapPin },
    { title: "Analytics", description: "Performance and revenue reports", icon: BarChart3 },
    { title: "Fare Management", description: "Set rates and commission rules", icon: DollarSign },
    { title: "System Settings", description: "Platform configuration", icon: Settings },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold bg-cosmic bg-clip-text text-transparent mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Command center for your Galaxy Rides platform
          </p>
        </div>

        {/* Dashboard Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={card.title} className="backdrop-blur-sm bg-card/50 border-border hover:animate-float transition-all duration-300" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                  <Icon className={`h-5 w-5 ${card.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Management Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {managementOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card key={option.title} className="backdrop-blur-sm bg-card/50 border-border hover:animate-float transition-all duration-300 cursor-pointer" style={{animationDelay: `${index * 150}ms`}}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon className="h-6 w-6 text-primary" />
                    <span>{option.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <Button variant="outline" className="w-full hover:bg-cosmic hover:text-primary-foreground transition-all duration-300">
                    Manage
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 backdrop-blur-sm bg-card/50 border-border animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">New driver registration</p>
                  <p className="text-sm text-muted-foreground">John Doe submitted documents</p>
                </div>
                <Button size="sm" variant="outline">Review</Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Trip completed</p>
                  <p className="text-sm text-muted-foreground">Airport transfer - £45.00</p>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Support ticket</p>
                  <p className="text-sm text-muted-foreground">Payment issue reported</p>
                </div>
                <Button size="sm" variant="outline">Respond</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Admin;