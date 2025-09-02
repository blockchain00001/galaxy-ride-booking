import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  CreditCard, 
  Wallet, 
  Smartphone, 
  Plus, 
  Trash2, 
  Star,
  Shield,
  Check
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "card",
      last4: "4242",
      brand: "Visa",
      expiry: "12/26",
      isDefault: true
    },
    {
      id: 2,
      type: "card",
      last4: "8888",
      brand: "Mastercard",
      expiry: "09/25",
      isDefault: false
    }
  ]);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const { toast } = useToast();

  const handleSetDefault = (id: number) => {
    setPaymentMethods(methods =>
      methods.map(method => ({
        ...method,
        isDefault: method.id === id
      }))
    );
    toast({
      title: "Default Payment Updated",
      description: "Your default payment method has been updated.",
    });
  };

  const handleRemoveCard = (id: number) => {
    setPaymentMethods(methods => methods.filter(method => method.id !== id));
    toast({
      title: "Payment Method Removed",
      description: "The payment method has been removed from your account.",
    });
  };

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    const newCard = {
      id: paymentMethods.length + 1,
      type: "card",
      last4: "1234",
      brand: "Visa",
      expiry: "12/27",
      isDefault: paymentMethods.length === 0
    };
    setPaymentMethods([...paymentMethods, newCard]);
    setIsAddingCard(false);
    toast({
      title: "Card Added",
      description: "Your new payment method has been added successfully.",
    });
  };

  const getCardIcon = (brand: string) => {
    return <CreditCard className="h-5 w-5" />;
  };

  return (
    <div className="space-y-6">
      {/* Current Payment Methods */}
      <Card className="backdrop-blur-sm bg-card/50 border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" />
            Payment Methods
          </CardTitle>
          <Dialog open={isAddingCard} onOpenChange={setIsAddingCard}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-border hover:bg-muted">
                <Plus className="h-4 w-4 mr-2" />
                Add Card
              </Button>
            </DialogTrigger>
            <DialogContent className="backdrop-blur-sm bg-card/90">
              <DialogHeader>
                <DialogTitle>Add New Payment Method</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddCard} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="bg-input/50 backdrop-blur-sm border-border"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      className="bg-input/50 backdrop-blur-sm border-border"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    className="bg-input/50 backdrop-blur-sm border-border"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-cosmic text-primary-foreground">
                  Add Payment Method
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentMethods.map((method) => (
            <Card key={method.id} className="border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getCardIcon(method.brand)}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {method.brand} •••• {method.last4}
                        </span>
                        {method.isDefault && (
                          <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                            Default
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Expires {method.expiry}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!method.isDefault && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSetDefault(method.id)}
                        className="border-border hover:bg-muted"
                      >
                        Set Default
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveCard(method.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      {/* Alternative Payment Options */}
      <Card className="backdrop-blur-sm bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            Alternative Payment Options
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Apple Pay</p>
                    <p className="text-sm text-muted-foreground">Quick & secure</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-border">
                  Setup
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Google Pay</p>
                    <p className="text-sm text-muted-foreground">Quick & secure</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-border">
                  Setup
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">PayPal</p>
                    <p className="text-sm text-muted-foreground">Link your PayPal</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-border">
                  Connect
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Galaxy Credits</p>
                    <p className="text-sm text-muted-foreground">Earn with rides</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Security Features */}
      <Card className="backdrop-blur-sm bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Payment Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm">256-bit SSL encryption for all transactions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm">PCI DSS compliant payment processing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm">Card details are never stored on our servers</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm">Fraud detection and monitoring 24/7</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentMethods;