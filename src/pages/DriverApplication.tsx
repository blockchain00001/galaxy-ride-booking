import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Upload, Car, FileText, Shield, MapPin, Calendar, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DriverApplication = () => {
  const [documents, setDocuments] = useState<string[]>([]);
  const { toast } = useToast();

  const requiredDocuments = [
    "Driver's License",
    "Vehicle Registration (V5)",
    "Insurance Certificate",
    "MOT Certificate",
    "PHVL (Private Hire Vehicle License)",
    "DBS Check",
    "Profile Photo"
  ];

  const handleDocumentUpload = (docName: string) => {
    if (!documents.includes(docName)) {
      setDocuments([...documents, docName]);
      toast({
        title: "Document Uploaded",
        description: `${docName} has been uploaded successfully.`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Your driver application is under review. We'll contact you within 24-48 hours.",
    });
  };

  return (
    <Layout>
      <div className="min-h-screen px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold bg-cosmic bg-clip-text text-transparent mb-4">
              Become a Galaxy Driver
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our stellar fleet and start earning with flexible hours across the cosmos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card className="backdrop-blur-sm bg-card/80 border-border">
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
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Textarea
                    id="address"
                    className="bg-input/50 backdrop-blur-sm border-border"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Driving Experience</Label>
                    <Select>
                      <SelectTrigger className="bg-input/50 backdrop-blur-sm border-border">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Information */}
            <Card className="backdrop-blur-sm bg-card/80 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Vehicle Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicleMake">Vehicle Make</Label>
                    <Input
                      id="vehicleMake"
                      placeholder="e.g., Toyota"
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleModel">Vehicle Model</Label>
                    <Input
                      id="vehicleModel"
                      placeholder="e.g., Prius"
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicleYear">Year</Label>
                    <Input
                      id="vehicleYear"
                      type="number"
                      min="2010"
                      max="2024"
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleColor">Color</Label>
                    <Input
                      id="vehicleColor"
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="licensePlate">License Plate</Label>
                    <Input
                      id="licensePlate"
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="vehicleType">Vehicle Type</Label>
                  <Select>
                    <SelectTrigger className="bg-input/50 backdrop-blur-sm border-border">
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Economy (4 seats)</SelectItem>
                      <SelectItem value="comfort">Comfort (4 seats)</SelectItem>
                      <SelectItem value="premium">Premium (4 seats)</SelectItem>
                      <SelectItem value="luxury">Luxury (4 seats)</SelectItem>
                      <SelectItem value="xl">XL (6+ seats)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Document Upload */}
            <Card className="backdrop-blur-sm bg-card/80 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Please upload all required documents. All documents must be valid and clearly readable.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requiredDocuments.map((doc) => (
                    <div
                      key={doc}
                      className="border-2 border-dashed border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{doc}</span>
                        {documents.includes(doc) && (
                          <Badge variant="secondary" className="bg-primary/20 text-primary">
                            Uploaded
                          </Badge>
                        )}
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="w-full border-border hover:bg-muted"
                        onClick={() => handleDocumentUpload(doc)}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        {documents.includes(doc) ? "Replace" : "Upload"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="backdrop-blur-sm bg-card/80 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Availability Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="availability">Preferred Working Hours</Label>
                  <Select>
                    <SelectTrigger className="bg-input/50 backdrop-blur-sm border-border">
                      <SelectValue placeholder="Select preferred hours" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time (40+ hours/week)</SelectItem>
                      <SelectItem value="part-time">Part-time (20-39 hours/week)</SelectItem>
                      <SelectItem value="weekends">Weekends only</SelectItem>
                      <SelectItem value="evenings">Evenings only</SelectItem>
                      <SelectItem value="flexible">Flexible hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="serviceAreas">Preferred Service Areas</Label>
                  <Textarea
                    id="serviceAreas"
                    placeholder="List the areas you'd prefer to operate in..."
                    className="bg-input/50 backdrop-blur-sm border-border"
                  />
                </div>
              </CardContent>
            </Card>

            <Separator />

            <div className="text-center space-y-4">
              <Button
                type="submit"
                size="lg"
                className="bg-cosmic text-primary-foreground hover:animate-cosmic-pulse px-12 py-4"
              >
                Submit Application
              </Button>
              <p className="text-sm text-muted-foreground">
                By submitting this application, you agree to our driver terms and conditions.
                <br />
                We'll review your application and contact you within 24-48 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default DriverApplication;