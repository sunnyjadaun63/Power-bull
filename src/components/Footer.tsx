import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  ExternalLink
} from "lucide-react";
import powerBullsLogo from "@/assets/power-bulls-logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Features", href: "#features" },
    { label: "Academy", href: "#academy" },
    { label: "Contact", href: "#contact" },
  ];

  const courses = [
    "Beginner Bootcamp",
    "Pro Trader Program", 
    "Elite Masters Course",
    "Risk Management",
    "Technical Analysis",
    "Options Trading",
  ];

  const features = [
    "Live Trading Sessions",
    "Real-Time Signals",
    "24/7 Support",
    "Mobile Platform",
    "Performance Tracking",
    "Community Access",
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={powerBullsLogo} alt="Power Bulls Academy" className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">POWER BULLS</span>
                <span className="text-xs text-muted-foreground">TRADING ACADEMY</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              The #1 Trading Academy in NCR, dedicated to simplifying trading education and 
              creating successful traders through expert mentorship and live market sessions.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 rounded-lg bg-primary/5 border border-primary/20">
                <div className="text-lg font-bold text-primary">5000+</div>
                <div className="text-xs text-muted-foreground">Students</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-success/5 border border-success/20">
                <div className="text-lg font-bold text-success">$12.4M+</div>
                <div className="text-xs text-muted-foreground">Profits</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              Our Courses
            </h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a 
                    href="#courses"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Features */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              Platform Features
            </h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index}>
                  <a 
                    href="#features"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {feature}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Location Bar */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">Academy Location</div>
                <div className="text-muted-foreground text-xs">Bulandshahr, Uttar Pradesh</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">Call Us</div>
                <div className="text-muted-foreground text-xs">+91 8650-222288</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">Email Us</div>
                <div className="text-muted-foreground text-xs">Powerbulls11.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-2">Ready to Start Your Trading Journey?</h3>
          <p className="text-muted-foreground mb-6">
            Join over 5,000+ successful traders and transform your financial future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Users className="mr-2 h-4 w-4" />
              Start Trading Now
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Power Bulls Trading Academy. All rights reserved. Founded by Harsh Kumar.
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-success border-success/30">
                SEBI Registered Partners
              </Badge>
              <Badge variant="outline" className="text-primary border-primary/30">
                NCR's #1 Academy
              </Badge>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Operating Hours: 9:00 AM - 7:00 PM IST (Monday to Sunday) • 
              Serving Delhi, Gurgaon, Noida, Ghaziabad & NCR Region
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;