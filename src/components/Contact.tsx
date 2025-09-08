import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Send, 
  Mail, 
  Phone, 
  MessageCircle, 
  Star,
  Gift,
  TrendingUp,
  Clock
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    goals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      experience: "",
      goals: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const testimonials = [
    {
      quote: "Made $15K profit in my first month using their strategies!",
      author: "Sarah M.",
      title: "Pro Trader Student",
    },
    {
      quote: "The best trading education I've ever received. Life-changing!",
      author: "Michael T.",
      title: "Elite Masters Graduate",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      value: "Powerbulls11.com",
      description: "Get detailed responses",
    },
    {
      icon: Phone,
      title: "Phone Consultation",
      value: "+91 8650-222288",
      description: "Immediate assistance",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "9:00 AM - 07:00 PM IST",
      description: "Real-time support",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Ready to Start Trading?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Thousands of <span className="gradient-text">Successful Traders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Who've transformed their financial future with Power Bulls Academy. Your journey to trading mastery starts here.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Contact Form */}
          <div>
            <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Get Started Today
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will contact you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Trading Experience</Label>
                    <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your trading experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Complete Beginner</SelectItem>
                        <SelectItem value="some">Some Experience</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">What are your trading goals?</Label>
                    <Textarea
                      id="goals"
                      value={formData.goals}
                      onChange={(e) => handleInputChange("goals", e.target.value)}
                      placeholder="Tell us about your trading goals and what you want to achieve"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Start My Trading Journey
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right: Contact Methods & Special Offer */}
          <div className="space-y-8">
            {/* Special Offer */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Limited Time
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">Special Launch Offer</h3>
                <p className="text-muted-foreground mb-4">
                  Get 50% off any course when you enroll this week. Plus, receive our exclusive 
                  market analysis toolkit worth $497 - FREE!
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary">$297</span>
                  <span className="text-lg text-muted-foreground line-through">$594</span>
                </div>
                <Button variant="hero" className="w-full">
                  Claim Your Discount
                </Button>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <method.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{method.title}</h4>
                          <p className="text-primary font-medium">{method.value}</p>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold mb-6">What Our Traders Say</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-gradient-to-br from-card to-success/5 border-success/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground mb-3 italic">"{testimonial.quote}"</p>
                      <div className="text-sm">
                        <span className="font-semibold">- {testimonial.author}</span>
                        <span className="text-muted-foreground">, {testimonial.title}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <Card className="bg-gradient-to-r from-success/10 to-success/5 border-success/20">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-1">100% Satisfaction Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  Not satisfied within 30 days? Get a full refund, no questions asked.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;