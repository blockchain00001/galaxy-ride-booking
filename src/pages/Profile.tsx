import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentMethods from "@/components/PaymentMethods";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard, 
  Star, 
  Clock, 
  Car,
  Settings,
  Camera,
  Shield
} from "lucide-react";

const Profile = () => {
  const recentRides = [
    {
      id: "1",
      from: "Downtown Plaza",
      to: "Galaxy Airport",
      date: "2024-01-15",
      fare: "£45.00",
      rating: 5,
      status: "completed"
    },
    {
      id: "2", 
      from: "Central Station",
      to: "Business District",
      date: "2024-01-14",
      fare: "£22.50",
      rating: 4,
      status: "completed"
    },
    {
      id: "3",
      from: "Home",
      to: "Shopping Center",
      date: "2024-01-13",
      fare: "£18.75",
      rating: 5,
      status: "completed"
    }
  ];

  const paymentMethods = [
    { id: "1", type: "Visa", last4: "4242", expiry: "12/25", isDefault: true },
    { id: "2", type: "MasterCard", last4: "8888", expiry: "09/26", isDefault: false },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold bg-cosmic bg-clip-text text-transparent mb-4">
            Your Profile
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your Galaxy Rides account and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="backdrop-blur-sm bg-card/50 border-border animate-slide-up">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/20">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                  <AvatarFallback className="text-2xl bg-cosmic text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
                <CardTitle>John Doe</CardTitle>
                <div className="flex justify-center space-x-2">
                  <Badge className="bg-cosmic text-primary-foreground">Premium Member</Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    <Star className="w-3 h-3 mr-1" />
                    4.9
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>john.doe@email.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>+44 7700 900123</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>London, UK</span>
                </div>
                <Button className="w-full bg-cosmic text-primary-foreground hover:animate-cosmic-pulse">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="backdrop-blur-sm bg-card/50 border-border animate-slide-up">
              <CardHeader>
                <CardTitle className="text-lg">Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Rides</span>
                  <span className="font-semibold">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-semibold">Jan 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Average Rating</span>
                  <span className="font-semibold flex items-center">
                    4.9 <Star className="w-4 h-4 ml-1 text-yellow-400" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Saved</span>
                  <span className="font-semibold text-primary">£127.50</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 backdrop-blur-sm bg-card/50">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="rides">Rides</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card className="backdrop-blur-sm bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          defaultValue=""
                          className="bg-input/50 backdrop-blur-sm border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          defaultValue=""
                          className="bg-input/50 backdrop-blur-sm border-border"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue=""
                        className="bg-input/50 backdrop-blur-sm border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        defaultValue=""
                        className="bg-input/50 backdrop-blur-sm border-border"
                      />
                    </div>
                    <Button className="bg-cosmic text-primary-foreground hover:animate-cosmic-pulse">
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="rides" className="space-y-6">
                <Card className="backdrop-blur-sm bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Recent Rides
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentRides.map((ride) => (
                      <div
                        key={ride.id}
                        className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="font-medium">{ride.from} → {ride.to}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{ride.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{ride.fare}</p>
                          <div className="flex items-center justify-end space-x-1">
                            {[...Array(ride.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full hover:bg-cosmic hover:text-primary-foreground">
                      View All Rides
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment" className="space-y-6">
                <PaymentMethods />
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="backdrop-blur-sm bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Account Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Account settings and preferences will be implemented with backend integration.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;