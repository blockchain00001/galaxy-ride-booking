import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, Mail, Clock, Star } from "lucide-react";

const Support = () => {
  const supportOptions = [
    { 
      title: "Live Chat", 
      description: "Get instant help from our support team", 
      icon: MessageCircle,
      action: "Start Chat",
      available: true
    },
    { 
      title: "Phone Support", 
      description: "Call us for urgent assistance", 
      icon: Phone,
      action: "Call Now",
      available: true
    },
    { 
      title: "Email Support", 
      description: "Send us a detailed message", 
      icon: Mail,
      action: "Send Email",
      available: true
    },
  ];

  const faqItems = [
    {
      question: "How do I cancel my ride?",
      answer: "You can cancel your ride up to 5 minutes after booking without any charges."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and digital wallet payments."
    },
    {
      question: "How are fares calculated?",
      answer: "Fares are based on distance, time, vehicle type, and current demand."
    },
    {
      question: "Is my ride insured?",
      answer: "Yes, all rides are fully insured for passenger safety and security."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold bg-cosmic bg-clip-text text-transparent mb-4">
            Support Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help you navigate the galaxy. Get support for all your ride booking needs.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card key={option.title} className="backdrop-blur-sm bg-card/50 border-border hover:animate-float transition-all duration-300" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader className="text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <Button 
                    className="w-full bg-cosmic text-primary-foreground hover:animate-cosmic-pulse"
                    disabled={!option.available}
                  >
                    {option.available ? option.action : "Currently Unavailable"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="backdrop-blur-sm bg-card/50 border-border animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name"
                    className="bg-input/50 backdrop-blur-sm border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    className="bg-input/50 backdrop-blur-sm border-border"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Issue Category</Label>
                <Select>
                  <SelectTrigger className="bg-input/50 backdrop-blur-sm border-border">
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="booking">Booking Issues</SelectItem>
                    <SelectItem value="payment">Payment Problems</SelectItem>
                    <SelectItem value="driver">Driver Concerns</SelectItem>
                    <SelectItem value="technical">Technical Issues</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your issue in detail..."
                  className="bg-input/50 backdrop-blur-sm border-border min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-cosmic text-primary-foreground hover:animate-cosmic-pulse">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="backdrop-blur-sm bg-card/50 border-border animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Frequently Asked Questions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-foreground">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
              
              <div className="text-center pt-4">
                <Button variant="outline" className="hover:bg-cosmic hover:text-primary-foreground">
                  View All FAQs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rating Section */}
        <Card className="mt-8 backdrop-blur-sm bg-card/50 border-border animate-slide-up">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Star className="h-5 w-5 text-primary" />
              <span>Rate Your Experience</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              How was your experience with Galaxy Rides support?
            </p>
            <div className="flex justify-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  variant="ghost"
                  size="sm"
                  className="p-1 hover:bg-cosmic hover:text-primary-foreground"
                >
                  <Star className="h-6 w-6" />
                </Button>
              ))}
            </div>
            <Button variant="outline" className="hover:bg-cosmic hover:text-primary-foreground">
              Submit Rating
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Support;