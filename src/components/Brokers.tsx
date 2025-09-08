import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check, Star, TrendingUp, DollarSign } from "lucide-react";

const Brokers = () => {
  const brokers = [
    {
      name: "DHAN",
      type: "Stock Market",
      description: "Recommended broker for stock market trading with advanced features and low brokerage.",
      recommended: true,
      features: [
        "Zero brokerage on delivery",
        "Advanced charting tools",
        "Options strategy builder",
        "Free research reports",
      ],
      referralCode: "WPZDF10885",
      link: "#",
      badge: "Recommended",
    },
    {
      name: "Delta India Exchange",
      type: "Forex Trading",
      description: "Premier platform for forex trading with institutional-grade technology.",
      recommended: true,
      features: [
        "Real-time forex quotes",
        "Advanced trading tools",
        "Multi-currency support",
        "Professional analytics",
      ],
      referralCode: "OYDTXH",
      link: "#",
      badge: "Trusted by Power Bulls Students",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Recommended Brokers
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Trading with Our <span className="gradient-text">Trusted Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These platforms are specifically chosen for their reliability, features, and alignment with our trading strategies.
          </p>
        </div>

        {/* Brokers Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {brokers.map((broker, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:shadow-2xl transition-all duration-300"
            >
              {/* Recommended Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="default" className="bg-primary text-primary-foreground">
                  Recommended
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{broker.name}</CardTitle>
                    <Badge variant="outline" className="text-accent border-accent/30">
                      {broker.type}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">{broker.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    Key Features:
                  </h4>
                  <div className="space-y-2">
                    {broker.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Referral Code */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">Referral Code:</span>
                      <div className="font-mono font-bold text-primary text-lg">
                        {broker.referralCode}
                      </div>
                    </div>
                    <DollarSign className="h-6 w-6 text-success" />
                  </div>
                </div>

                {/* CTA Button */}
                <Button variant="hero" className="w-full" size="lg">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Account with {broker.name}
                </Button>

                {/* Trust Badge */}
                <div className="text-center">
                  <Badge variant="outline" className="text-success border-success/30">
                    {broker.badge}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-to-r from-muted/50 to-muted/30 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Badge className="bg-primary text-primary-foreground">
                  SEBI Regulated
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                All recommended brokers are SEBI registered and regulated
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Brokers;