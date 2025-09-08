import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Car,
  Wifi,
  Thermometer,
  Users,
  Monitor,
  Calendar
} from "lucide-react";

const Academy = () => {
  const facilities = [
    { icon: MapPin, text: "Centrally located in Bulandshahr" },
    { icon: Navigation, text: "Easy access from major highways" },
    { icon: Car, text: "Parking facilities available" },
    { icon: Monitor, text: "Modern trading lab setup" },
    { icon: Thermometer, text: "Air-conditioned classrooms" },
    { icon: Wifi, text: "High-speed internet connectivity" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Office Address",
      value: "Near M.S Institute, Bulandshahr to Jhajher Road",
      subValue: "Bulandshahr, Uttar Pradesh 203002",
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "+91 8650-222288",
      subValue: "Call for immediate assistance",
    },
    {
      icon: Mail,
      label: "Email Addresses",
      value: "Powerbulls11.com",
      subValue: "Powerbullsacademy.com (Business)",
    },
    {
      icon: Clock,
      label: "Operating Hours",
      value: "9:00 AM - 07:00 PM IST",
      subValue: "Monday to Sunday",
    },
  ];

  return (
    <section id="academy" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Visit Our Academy
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Power Bulls Academy is strategically <span className="gradient-text">Located</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located in Bulandshahr, Uttar Pradesh, providing easy access to students across the NCR region.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Location & Directions */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <MapPin className="h-8 w-8 text-primary" />
                Location & Directions
              </h3>
              <p className="text-muted-foreground text-lg">
                Find us easily with our convenient location near M.S Institute on Bulandshahr to Jhajher Road.
              </p>
            </div>

            {/* Academy Info Card */}
            <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Power Bulls Academy</h4>
                    <p className="text-muted-foreground">Bulandshahr, Uttar Pradesh</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold">Facility Features:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {facilities.map((facility, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <facility.icon className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{facility.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="hero" className="w-full mt-6">
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right: Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Phone className="h-8 w-8 text-primary" />
                Contact Information
              </h3>
              <p className="text-muted-foreground text-lg">
                Get in touch with us directly
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.label}</h4>
                        <p className="text-foreground font-medium">{info.value}</p>
                        <p className="text-muted-foreground text-sm">{info.subValue}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Visit Section */}
        <div className="text-center mb-16">
          <Card className="inline-block bg-gradient-to-r from-accent/10 to-primary/10 border-primary/20 max-w-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Schedule a Visit</h3>
              <p className="text-muted-foreground mb-6">
                Want to see our facilities in person? Schedule a visit to our academy and meet our expert team. 
                We'll give you a complete tour and answer all your questions.
              </p>
              <Button variant="hero" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Academy Visit
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Service Area */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Serving the NCR Region</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Students from Delhi, Gurgaon, Noida, Ghaziabad, and surrounding areas regularly attend our academy.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"].map((city, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 text-center">
                  <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">{city}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;