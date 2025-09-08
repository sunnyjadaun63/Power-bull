import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Target, 
  Brain, 
  Shield, 
  Users, 
  BookOpen, 
  Award, 
  Clock, 
  Sparkles,
  BarChart3,
  Zap
} from "lucide-react";
import academyClassroom from "@/assets/academy-classroom.jpg";

const About = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time market analysis with AI-powered insights to identify profitable opportunities.",
      color: "text-blue-500",
    },
    {
      icon: Target,
      title: "Precision Trading",
      description: "Learn high-probability setups with precise entry and exit strategies.",
      color: "text-green-500",
    },
    {
      icon: Brain,
      title: "Psychology Mastery",
      description: "Develop unshakeable discipline and emotional control for consistent profits.",
      color: "text-purple-500",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Protect your capital with proven risk management techniques.",
      color: "text-orange-500",
    },
  ];

  const stats = [
    { number: "98.5%", label: "Course Completion Rate", icon: "📚" },
    { number: "$12.4M+", label: "Student Profits Generated", icon: "💰" },
    { number: "50+", label: "Expert Instructors", icon: "👨‍🏫" },
    { number: "24/7", label: "Support & Mentoring", icon: "🔧" },
  ];

  const highlights = [
    { icon: BookOpen, text: "200+ hours of content", color: "text-primary" },
    { icon: Users, text: "15+ years experience", color: "text-accent" },
    { icon: Award, text: "Industry recognized", color: "text-success" },
    { icon: Clock, text: "24/7 market coverage", color: "text-orange-500" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 trading-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="outline" className="glass-card">
              <Sparkles className="w-4 h-4 mr-2" />
              About Power Bulls Academy
            </Badge>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            Our Track Record <br />
            <span className="gradient-text-glow">Speaks for Itself</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              "As one of the best online stock market training institutes, we aim to make our students 
              financially educated and up-to-date with market trends. From risk management to psychology, 
              we cover all the necessary topics that will escalate your trading career."
            </p>
            <div className="mt-6 flex justify-center">
              <Badge className="bg-primary text-primary-foreground px-6 py-2">
                ⭐ Trusted by 5000+ Students
              </Badge>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-primary/10 hover-lift group text-center p-8">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-black gradient-text-glow mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={academyClassroom} 
                alt="Professional Trading Environment" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Overlay Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-success text-success-foreground">
                Professional Trader at Work
              </Badge>
            </div>
            
            {/* Bottom Stats */}
            <div className="absolute bottom-4 left-4 right-4">
              <Card className="bg-background/90 backdrop-blur-sm border-border">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success mb-1">+247%</div>
                    <div className="text-sm text-muted-foreground">Average Student Growth</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      Verified Results
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">About Power Bulls Academy</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Power Bulls Academy is a stock market institute that believes in simplifying trading 
                for everyone. We provide one of the best stock market classes in the NCR, with a deep 
                understanding of all crucial technical aspects and live trading sessions. Founded by 
                Harsh Kumar, we have successfully mentored 5000+ students to date.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <highlight.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Learn in a Real-World Trading Setup</h4>
              <p className="text-muted-foreground">
                Our academy provides an authentic trading environment with industry-standard tools, 
                giving you hands-on experience that directly translates to real-world success.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-card to-card/80 border-primary/10">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;