import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, TrendingUp, Zap, Crown, Rocket } from "lucide-react";
import traderSilhouette from "@/assets/trader-silhouette.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Beginner Bootcamp",
      subtitle: "Foundation Builder",
      description: "Master the fundamentals of trading with our comprehensive beginner program.",
      duration: "4 Weeks Program",
      price: "$297",
      originalPrice: "$497",
      label: "Most Popular",
      labelVariant: "default" as const,
      icon: Rocket,
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
      features: [
        "Market basics & terminology",
        "Chart reading & analysis",
        "Risk management fundamentals",
        "Paper trading practice",
        "24/7 community access",
        "Weekly live sessions",
        "Mobile app access",
        "Certificate of completion",
      ],
    },
    {
      title: "Pro Trader Program",
      subtitle: "Professional Level",
      description: "Advanced strategies and techniques used by professional traders.",
      duration: "8 Weeks Program",
      price: "$797",
      originalPrice: "$1,297",
      label: "Best Value",
      labelVariant: "secondary" as const,
      icon: TrendingUp,
      gradient: "from-primary/10 to-accent/10",
      borderGradient: "from-primary/50 to-accent/50",
      featured: true,
      features: [
        "Advanced technical analysis",
        "Options trading strategies",
        "Algorithmic trading basics",
        "Live trading sessions",
        "1-on-1 mentoring calls",
        "Portfolio optimization",
        "Risk assessment tools",
        "Premium signals access",
        "Exclusive webinars",
      ],
    },
    {
      title: "Elite Masters Course",
      subtitle: "Institutional Grade",
      description: "Exclusive mastermind for serious traders seeking institutional-level knowledge.",
      duration: "12 Weeks Program",
      price: "$1,497",
      originalPrice: "$2,497",
      label: "Premium",
      labelVariant: "outline" as const,
      icon: Crown,
      gradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      features: [
        "Institutional trading strategies",
        "Advanced risk management",
        "Portfolio optimization",
        "Direct mentor access",
        "Exclusive trading signals",
        "Market maker insights",
        "Hedge fund techniques",
        "Personal trading assistant",
        "Lifetime support",
        "Annual mastermind event",
      ],
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-muted/20 via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={traderSilhouette} 
          alt="Trading Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="outline" className="glass-card">
              <Zap className="w-4 h-4 mr-2" />
              Trading Courses
            </Badge>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            Choose Your Path to <br />
            <span className="gradient-text-glow">Trading Mastery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each course is meticulously designed to transform you from where you are to where you want to be in the markets.
            <br />
            <span className="text-primary font-semibold">Join thousands who've already made the transformation.</span>
          </p>
        </div>

        {/* Courses Grid - Enhanced Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-500 hover:shadow-massive group ${
                course.featured
                  ? "lg:scale-110 lg:-translate-y-8 border-2 border-primary/50 shadow-2xl bg-gradient-to-b from-card via-card to-primary/5" 
                  : "border-border hover:border-primary/30 hover:-translate-y-2"
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-50`} />
              
              {/* Floating Elements */}
              {course.featured && (
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-60 animate-pulse"></div>
              )}

              {/* Label Badge */}
              {course.label && (
                <div className="absolute top-6 right-6 z-10">
                  <Badge 
                    variant={course.labelVariant} 
                    className={`shadow-lg ${course.featured ? 'animate-pulse-glow' : ''}`}
                  >
                    {course.label}
                  </Badge>
                </div>
              )}

              <CardHeader className="relative z-10 text-center pb-6">
                {/* Icon */}
                <div className="mx-auto mb-4 relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.borderGradient} p-0.5`}>
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <course.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Course Level */}
                <Badge variant="outline" className="mb-3 glass">
                  {course.subtitle}
                </Badge>

                <CardTitle className="text-2xl lg:text-3xl mb-3 font-black">{course.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                {/* Duration */}
                <div className="text-center">
                  <div className="text-sm text-muted-foreground font-mono">{course.duration}</div>
                </div>

                {/* Pricing - Enhanced */}
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-4xl lg:text-5xl font-black gradient-text-glow">{course.price}</span>
                    <div className="text-right">
                      <div className="text-lg text-muted-foreground line-through">{course.originalPrice}</div>
                      <Badge variant="outline" className="text-success border-success/30 text-xs">
                        Save {Math.round(((parseInt(course.originalPrice.slice(1)) - parseInt(course.price.slice(1))) / parseInt(course.originalPrice.slice(1))) * 100)}%
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="glass text-primary border-primary/30">
                    ⏰ Limited Time Offer
                  </Badge>
                </div>

                {/* Features - Enhanced */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-center mb-4">What's Included:</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 group/feature">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                            <Check className="h-3 w-3 text-success" />
                          </div>
                        </div>
                        <span className="text-sm leading-relaxed group-hover/feature:text-primary transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="relative z-10 pt-6">
                <Button 
                  variant={course.featured ? "hero" : "outline"} 
                  className={`w-full btn-3d text-lg py-6 ${course.featured ? 'animate-pulse-glow' : ''}`}
                  size="lg"
                >
                  <course.icon className="mr-3 h-5 w-5" />
                  Enroll Now
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Enhanced Guarantee Section */}
        <div className="text-center">
          <Card className="inline-block glass-card border-success/20 max-w-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <Badge variant="outline" className="text-success border-success/30 px-4 py-2">
                  🛡️ Money-Back Guarantee
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">30-Day Risk-Free Trial</h3>
              <p className="text-muted-foreground leading-relaxed">
                Not satisfied within 30 days? Get a full refund, no questions asked. 
                We're confident you'll love our training, but your success is our priority.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-primary font-bold">100%</div>
                  <div className="text-muted-foreground">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold">30 Days</div>
                  <div className="text-muted-foreground">Money Back</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold">5000+</div>
                  <div className="text-muted-foreground">Happy Students</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

  );
};

export default Courses;