import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Bell, 
  BookOpen, 
  Users, 
  Smartphone, 
  Award, 
  BarChart3, 
  Shield,
  Server,
  Brain,
  Database,
  Lock
} from "lucide-react";

const Features = () => {
  const platformFeatures = [
    {
      icon: Zap,
      title: "Real-Time Signals",
      description: "Get instant trading alerts based on our advanced algorithms and market analysis.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Never miss a profitable opportunity with our intelligent notification system.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Library",
      description: "Access 200+ hours of video content, ebooks, and trading guides.",
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join our exclusive community of successful traders and share strategies.",
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade anywhere with our mobile-optimized platform and apps.",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn professional trading certifications recognized by the industry.",
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor your progress with detailed analytics and performance metrics.",
    },
    {
      icon: Shield,
      title: "Risk Protection",
      description: "Advanced risk management tools to protect and grow your capital.",
    },
  ];

  const performanceMetrics = [
    { number: "150K+", label: "Active Traders" },
    { number: "99.2%", label: "Uptime Guarantee" },
    { number: "50ms", label: "Signal Latency" },
    { number: "24/7", label: "Market Coverage" },
  ];

  const techStack = [
    { icon: Server, name: "AWS Cloud" },
    { icon: Brain, name: "AI/ML Analytics" },
    { icon: Database, name: "Real-Time Data" },
    { icon: Lock, name: "Bank-Level Security" },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Succeed in the Markets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All in one powerful platform designed for the modern trader.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platformFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 border-primary/10 hover:border-primary/30"
            >
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Platform Performance Metrics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-0">
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                    {metric.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Built with Enterprise-Grade Technology</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-to-br from-card to-secondary/20 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-0 text-center">
                  <tech.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold">{tech.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-12">
            <Card className="inline-block bg-gradient-to-r from-accent/10 to-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <Badge variant="outline" className="text-primary border-primary/30">
                    Enterprise Security
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  Your data is protected with military-grade encryption and 24/7 monitoring
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;