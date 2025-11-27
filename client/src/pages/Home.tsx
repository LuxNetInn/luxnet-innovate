import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, BarChart3, Zap, Shield, Users, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold font-poppins">LuxNet Innovate</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-accent transition">Features</a>
            <a href="#indicators" className="text-sm hover:text-accent transition">Indicators</a>
            <a href="#pricing" className="text-sm hover:text-accent transition">Pricing</a>
            <a href="#about" className="text-sm hover:text-accent transition">About</a>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
        <div className="container py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
                Advanced Technical Analysis Without AI
              </h1>
              <p className="text-lg text-muted-foreground">
                Professional-grade market analysis tools powered by pure technical indicators. Make informed trading decisions with real data, not algorithms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-accent">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Traders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Technical Indicators</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Market Coverage</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/hero-banner.jpg" 
                alt="Technical Analysis Dashboard" 
                className="w-full rounded-lg shadow-2xl border border-border"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-border bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Why Choose LuxNet Innovate</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for professional technical analysis in one powerful platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Analysis",
                description: "Access live market data with minimal latency. Analyze price action as it happens across multiple timeframes."
              },
              {
                icon: Zap,
                title: "50+ Indicators",
                description: "Professional technical indicators including RSI, MACD, Bollinger Bands, Stochastic, and more."
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Built-in position sizing tools and risk calculators to help you manage your capital effectively."
              },
              {
                icon: TrendingUp,
                title: "Pattern Recognition",
                description: "Identify chart patterns and support/resistance levels with precision drawing tools."
              },
              {
                icon: Users,
                title: "Community Insights",
                description: "Share analysis with other traders and learn from experienced market participants."
              },
              {
                icon: Lightbulb,
                title: "Educational Resources",
                description: "Comprehensive guides and tutorials to master technical analysis fundamentals."
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 border border-border bg-background/50 hover:bg-card/50 transition">
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Indicators Section */}
      <section id="indicators" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Technical Indicators</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional-grade indicators to analyze market trends and identify trading opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="/indicators-section.jpg" 
              alt="Technical Indicators" 
              className="w-full rounded-lg shadow-lg border border-border"
            />
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-poppins">Complete Indicator Suite</h3>
              <div className="space-y-4">
                {[
                  { name: "Momentum Indicators", items: ["RSI", "MACD", "Stochastic Oscillator"] },
                  { name: "Trend Indicators", items: ["Moving Averages", "Bollinger Bands", "TEMA"] },
                  { name: "Volatility Indicators", items: ["ATR", "Keltner Channels", "Donchian Channels"] },
                  { name: "Volume Indicators", items: ["OBV", "CMF", "Volume Profile"] }
                ].map((category, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-accent mb-2">{category.name}</h4>
                    <p className="text-sm text-muted-foreground">{category.items.join(", ")}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Explore All Indicators <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Tools Section */}
      <section className="py-20 border-t border-border bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-2xl font-bold font-poppins">Advanced Trading Tools</h3>
              <p className="text-muted-foreground">
                Professional-grade tools designed for serious traders who demand precision and control.
              </p>
              <ul className="space-y-3">
                {[
                  "Multi-timeframe analysis",
                  "Customizable chart layouts",
                  "Drawing tools and annotations",
                  "Alert system for key levels",
                  "Trade journal and statistics",
                  "Portfolio tracking"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Try Trading Tools <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <img 
              src="/trading-tools.jpg" 
              alt="Trading Tools" 
              className="w-full rounded-lg shadow-lg border border-border order-1 md:order-2"
            />
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Global Market Coverage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Analyze stocks, cryptocurrencies, forex, and commodities all in one platform
            </p>
          </div>
          <img 
            src="/market-analysis.jpg" 
            alt="Market Analysis" 
            className="w-full rounded-lg shadow-lg border border-border mb-12"
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Stock Indices", count: "100+" },
              { title: "Cryptocurrencies", count: "500+" },
              { title: "Forex Pairs", count: "50+" },
              { title: "Commodities", count: "30+" }
            ].map((market, idx) => (
              <Card key={idx} className="p-6 text-center border border-border bg-background/50">
                <div className="text-3xl font-bold text-accent mb-2">{market.count}</div>
                <div className="text-sm text-muted-foreground">{market.title}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-t border-border bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your trading needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/month",
                description: "Perfect for beginners",
                features: ["Basic indicators", "1 watchlist", "Email support", "Daily market updates"]
              },
              {
                name: "Professional",
                price: "$79",
                period: "/month",
                description: "For serious traders",
                features: ["All indicators", "Unlimited watchlists", "Priority support", "Real-time alerts", "Advanced charts"],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "pricing",
                description: "For institutions",
                features: ["Everything in Pro", "API access", "Dedicated support", "Custom integrations", "White-label options"]
              }
            ].map((plan, idx) => (
              <Card 
                key={idx} 
                className={`p-8 border ${plan.highlighted ? 'border-accent bg-card' : 'border-border bg-background/50'}`}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <Button 
                  className={`w-full mb-6 ${plan.highlighted ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">About LuxNet Innovate</h2>
            <p className="text-lg text-muted-foreground mb-8">
              LuxNet Innovate is dedicated to providing traders and investors with professional-grade technical analysis tools. 
              We believe in the power of pure technical analysis—no AI, no algorithms, just you and the market data.
            </p>
            <p className="text-muted-foreground mb-8">
              Founded by experienced traders, our platform combines years of market expertise with cutting-edge technology 
              to deliver the tools you need to succeed in today's dynamic financial markets.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { label: "Founded", value: "2023" },
                { label: "Team Members", value: "25+" },
                { label: "Countries Served", value: "50+" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border bg-gradient-to-r from-primary/10 via-transparent to-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Ready to Master Technical Analysis?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders using LuxNet Innovate for professional technical analysis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="font-bold">LuxNet Innovate</span>
              </div>
              <p className="text-sm text-muted-foreground">Professional technical analysis platform</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Features</a></li>
                <li><a href="#" className="hover:text-accent transition">Pricing</a></li>
                <li><a href="#" className="hover:text-accent transition">Indicators</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">About</a></li>
                <li><a href="#" className="hover:text-accent transition">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 LuxNet Innovate. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-accent transition text-sm">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-accent transition text-sm">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-accent transition text-sm">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
