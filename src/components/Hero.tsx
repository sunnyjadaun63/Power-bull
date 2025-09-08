import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, TrendingUp, Users, Award, Clock } from "lucide-react";
import tradingWorkspace from "@/assets/trading-workspace.jpg";

import geometricPattern from "@/assets/geometric-pattern.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <img 
          src={geometricPattern} 
          alt="Geometric Pattern"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 mesh-gradient opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Enhanced */}
          <div className="lg:col-span-7 space-y-8">
            {/* Floating Badge */}
            <div className="inline-flex">
              <Badge variant="outline" className="glass-card border-primary/30 bg-primary/5 animate-pulse-glow">
                <span className="mr-2">🏆</span>
                #1 Trading Academy in NCR
              </Badge>
            </div>
            
            {/* Main Heading - More Dynamic */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
                <span className="block animate-fade-in-up">Master the</span>
                <span className="block gradient-text-glow animate-fade-in-up-delay">Markets</span>
                <span className="block text-muted-foreground text-4xl lg:text-5xl xl:text-6xl font-normal mt-4 animate-slide-in-right">
                  with Next-Gen Trading Education
                </span>
              </h1>
              
              <div className="relative">
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-scale-in">
                  Join over <span className="text-primary font-bold">5,000+ successful traders</span> we've mentored to achieve financial freedom. 
                  Power Bulls Academy believes in simplifying trading for everyone with deep technical 
                  knowledge and live trading sessions from <span className="text-accent font-semibold">Harsh Kumar</span>.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-50"></div>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-scale-in">
              {[
                { number: "5000+", label: "Students Mentored", icon: "👥" },
                { number: "50+", label: "Team Members", icon: "🚀" },
                { number: "NCR", label: "Best Training", icon: "🏆" },
                { number: "9AM-7PM", label: "Daily Operation", icon: "⏰" },
              ].map((stat, index) => (
                <div key={index} className="glass-card p-6 text-center hover-lift group">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl lg:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up-delay">
              <Button variant="hero" size="lg" className="btn-3d group text-lg px-8 py-4">
                <TrendingUp className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform" />
                Start Your Journey
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Button>
              <Button variant="outline" size="lg" className="glass-card group text-lg px-8 py-4">
                <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Location & Founder */}
            <div className="flex flex-wrap items-center gap-6 text-sm animate-slide-in-right">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <span>📍</span>
                <span className="font-medium">Bulandshahr, UP</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <span>👨‍💼</span>
                <span className="font-medium">Founded by Harsh Kumar</span>
              </div>
            </div>
          </div>

          {/* Right Content - Redesigned */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Trading Workspace */}
              <div className="relative rounded-3xl overflow-hidden shadow-massive hover-lift">
                <img 
                  src={tradingWorkspace} 
                  alt="Professional Trading Workspace" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Glassmorphism Overlays */}
                <div className="absolute top-6 left-6 right-6">
                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg">Live Market Data</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                        <span className="text-xs text-success font-mono">LIVE</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Real-time analysis with AI-powered insights
                    </p>
                  </div>
                </div>

                {/* Floating Market Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { symbol: "S&P 500", change: "+1.24%", positive: true },
                      { symbol: "NASDAQ", change: "+2.15%", positive: true },
                      { symbol: "DOW", change: "+0.89%", positive: true },
                      { symbol: "BTC/USD", change: "+3.42%", positive: true },
                    ].map((market, index) => (
                      <div key={index} className="glass-card p-4 rounded-xl market-ticker">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-mono text-muted-foreground">{market.symbol}</span>
                          <span className={`text-sm font-bold ${market.positive ? 'text-success' : 'text-danger'}`}>
                            {market.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Performance Card - Redesigned */}
              <div className="absolute -bottom-12 -left-12 max-w-xs">
                <div className="glass-card rounded-2xl p-6 shadow-massive hover-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold">Student Performance</h4>
                      <p className="text-xs text-muted-foreground">Live Metrics</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Avg Monthly ROI", value: "+23.7%", color: "text-success" },
                      { label: "Win Rate", value: "87.2%", color: "text-primary" },
                      { label: "Active Traders", value: "10,247", color: "text-accent" },
                    ].map((metric, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <span className={`text-sm font-bold ${metric.color}`}>{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Achievement Banner */}
        <div className="mt-24 glass-card rounded-3xl p-8 lg:p-12 border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold mb-2">
              Total Student Profits: <span className="gradient-text-glow">$12.4M+</span>
            </h3>
            <p className="text-muted-foreground">Verified results from our trading community</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Students Mentored", icon: "🎓" },
              { number: "50+", label: "Expert Team", icon: "💼" },
              { number: "98.5%", label: "Success Rate", icon: "📈" },
              { number: "24/7", label: "Support", icon: "🔧" },
            ].map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="text-2xl lg:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;