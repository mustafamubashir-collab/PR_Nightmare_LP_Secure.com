import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  TrendingDown,
  Users,
  DollarSign,
  Eye,
  Brain,
  BarChart3,
  Layers,
  CheckCircle,
  Clock,
  HeadphonesIcon,
  ArrowRight,
  AlertTriangle,
  Target,
  Map,
  LayoutDashboard,
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secure-blue-50 to-white min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Cyber Security Dashboard Animation */}
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-secure-blue-100 to-secure-slate-100">
                {/* Animated Network Grid */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 1200 800"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="rgb(29, 78, 216)"
                        strokeWidth="0.5"
                        opacity="0.3"
                      />
                    </pattern>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Animated Security Nodes */}
                  <g className="animate-pulse">
                    <circle
                      cx="200"
                      cy="150"
                      r="4"
                      fill="rgb(34, 197, 94)"
                      filter="url(#glow)"
                    >
                      <animate
                        attributeName="r"
                        values="4;8;4"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="400"
                      cy="200"
                      r="4"
                      fill="rgb(59, 130, 246)"
                      filter="url(#glow)"
                    >
                      <animate
                        attributeName="r"
                        values="4;6;4"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="800"
                      cy="180"
                      r="4"
                      fill="rgb(168, 85, 247)"
                      filter="url(#glow)"
                    >
                      <animate
                        attributeName="r"
                        values="4;7;4"
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="600"
                      cy="300"
                      r="4"
                      fill="rgb(34, 197, 94)"
                      filter="url(#glow)"
                    >
                      <animate
                        attributeName="r"
                        values="4;9;4"
                        dur="2.2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="1000"
                      cy="250"
                      r="4"
                      fill="rgb(59, 130, 246)"
                      filter="url(#glow)"
                    >
                      <animate
                        attributeName="r"
                        values="4;6;4"
                        dur="1.7s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>

                  {/* Animated Connection Lines */}
                  <g stroke="rgb(29, 78, 216)" strokeWidth="1" opacity="0.4">
                    <line x1="200" y1="150" x2="400" y2="200">
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,300;150,150;300,0;0,300"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line x1="400" y1="200" x2="800" y2="180">
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,400;200,200;400,0;0,400"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line x1="800" y1="180" x2="600" y2="300">
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,250;125,125;250,0;0,250"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line x1="600" y1="300" x2="1000" y2="250">
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,400;200,200;400,0;0,400"
                        dur="3.2s"
                        repeatCount="indefinite"
                      />
                    </line>
                  </g>

                  {/* Floating Data Particles */}
                  <g>
                    <rect
                      x="150"
                      y="100"
                      width="2"
                      height="2"
                      fill="rgb(34, 197, 94)"
                      opacity="0.6"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0,0;50,-20;100,10;150,-30"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.8;0.6;0"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect
                      x="350"
                      y="150"
                      width="2"
                      height="2"
                      fill="rgb(59, 130, 246)"
                      opacity="0.6"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0,0;-30,40;-60,20;-90,60"
                        dur="3.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.9;0.7;0"
                        dur="3.5s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect
                      x="750"
                      y="130"
                      width="2"
                      height="2"
                      fill="rgb(168, 85, 247)"
                      opacity="0.6"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0,0;-40,-30;-80,10;-120,-50"
                        dur="3.8s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.8;0.5;0"
                        dur="3.8s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>

                  {/* Security Shield Animation */}
                  <g transform="translate(1000, 100)">
                    <path
                      d="M0,0 L10,0 L15,5 L10,20 L5,25 L0,20 L-5,25 L-10,20 L-15,5 L-10,0 Z"
                      fill="none"
                      stroke="rgb(34, 197, 94)"
                      strokeWidth="1.5"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,60;30,30;60,0;0,60"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <animateTransform
                      attributeName="transform"
                      type="scale"
                      values="1;1.1;1"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* Floating Security Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Threat Detection Indicators */}
              <div className="absolute top-20 left-20">
                <div className="flex items-center space-x-2 bg-red-100 px-3 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-red-700">Threat Detected</span>
                </div>
                <div className="mt-2 w-24 h-1 bg-red-200 rounded">
                  <div
                    className="h-full bg-red-500 rounded animate-pulse"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>

              {/* Security Status Panel */}
              <div className="absolute top-32 right-20 opacity-40">
                <div className="bg-green-100 px-4 py-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-700 font-medium">
                      System Secure
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-green-600">Firewall</span>
                      <span className="text-green-700">Active</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-green-600">Encryption</span>
                      <span className="text-green-700">256-bit</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Monitoring */}
              <div className="absolute bottom-32 left-32 opacity-35">
                <div className="bg-blue-100 px-3 py-2 rounded-lg">
                  <div className="text-xs text-blue-700 font-medium mb-2">
                    Live Monitor
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-blue-300 rounded animate-pulse"
                        style={{
                          height: `${Math.random() * 20 + 5}px`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-secure-blue-900/5 to-transparent z-5"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-secure-slate-900 mb-6 leading-tight">
                One Cyber Breach Away from a{" "}
                <span className="text-secure-blue-600">PR Nightmare</span>
              </h1>
              <p className="text-xl md:text-2xl text-secure-slate-600 mb-12 leading-relaxed">
                Reduce breach risk with 40% fewer blind spots and AI-led
                response — before it turns into reputational damage.
              </p>
              <Button
                onClick={() => scrollToSection("final-cta")}
                className="bg-secure-blue-600 hover:bg-secure-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Sign-up for Beta Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Background Visual */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-secure-blue-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-secure-blue-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-secure-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secure-slate-900 mb-6">
              One breach can undo years of trust.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">5-7%</div>
              <p className="text-secure-slate-700 font-medium mb-2">
                Brand value drops after a breach
              </p>
              <p className="text-sm text-secure-slate-500">(WEF 2023)</p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">94%</div>
              <p className="text-secure-slate-700 font-medium mb-2">
                Of consumers avoid breached brands
              </p>
              <p className="text-sm text-secure-slate-500">
                (Security.org 2024)
              </p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">59%</div>
              <p className="text-secure-slate-700 font-medium mb-2">
                Of investors avoid breached companies
              </p>
              <p className="text-sm text-secure-slate-500">(PwC 2023)</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secure-slate-900 mb-6">
              Prevent the breach.{" "}
              <span className="text-secure-blue-600">Protect the brand.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-secure-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-secure-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-secure-slate-900 mb-3">
                Attack Surface Visibility
              </h3>
              <p className="text-secure-slate-600">
                Comprehensive visibility across all digital assets and potential
                attack vectors.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-secure-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-secure-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-secure-slate-900 mb-3">
                AI-Driven Case Management
              </h3>
              <p className="text-secure-slate-600">
                Intelligent automation that learns and adapts to your security
                patterns.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-secure-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-secure-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-secure-slate-900 mb-3">
                Dynamic Risk Scoring
              </h3>
              <p className="text-secure-slate-600">
                Real-time risk assessment that prioritizes threats by business
                impact.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-secure-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-secure-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-secure-slate-900 mb-3">
                Context-Aware Unified Platform
              </h3>
              <p className="text-secure-slate-600">
                Single pane of glass with contextual intelligence for faster
                decisions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section id="outcome" className="py-24 bg-secure-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secure-slate-900 mb-6">
              Turn risk into{" "}
              <span className="text-secure-blue-600">resilience.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-secure-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <div className="text-6xl font-bold text-secure-blue-600 mb-2">
                70%
              </div>
              <p className="text-xl text-secure-slate-700">
                Incident workload automated
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-secure-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <div className="text-6xl font-bold text-secure-blue-600 mb-2">
                50%
              </div>
              <p className="text-xl text-secure-slate-700">
                Faster response time
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-secure-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-12 h-12 text-white" />
              </div>
              <div className="text-6xl font-bold text-secure-blue-600 mb-2">
                $25K+
              </div>
              <p className="text-xl text-secure-slate-700">
                Saved annually on IR costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights Grid */}
      <section id="highlights" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-secure-slate-900 mb-4">
                Proactive Breach Prevention
              </h3>
              <p className="text-secure-slate-600">
                Stay ahead of threats with predictive intelligence and automated
                response.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-secure-slate-900 mb-4">
                Centralized Risk Scoring
              </h3>
              <p className="text-secure-slate-600">
                Unified risk assessment across all your digital assets and
                infrastructure.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Map className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-secure-slate-900 mb-4">
                Real-Time Threat Maps
              </h3>
              <p className="text-secure-slate-600">
                Visual intelligence that shows threats as they emerge and
                evolve.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <LayoutDashboard className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-secure-slate-900 mb-4">
                Unified Dashboard for Founders
              </h3>
              <p className="text-secure-slate-600">
                Executive-level insights that translate security posture into
                business metrics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Onboarding CTA Section */}
      <section id="onboarding" className="py-24 bg-secure-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-secure-slate-900 mb-8">
              Peace of mind, in{" "}
              <span className="text-secure-blue-600">30 minutes.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg text-secure-slate-700">No agents</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg text-secure-slate-700">
                  Fast deployment
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg text-secure-slate-700">
                  Dedicated Success Engineer
                </span>
              </div>
            </div>

            <Button
              onClick={() => scrollToSection("final-cta")}
              className="bg-secure-blue-600 hover:bg-secure-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="final-cta"
        className="py-24 bg-gradient-to-br from-secure-blue-600 to-secure-blue-800"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let your team focus on growth — not grunt work.
            </h2>
            <p className="text-xl text-secure-blue-100 mb-12">
              Secure.com gives you the firepower of a full security team —
              without the headcount.
            </p>

            <Button className="bg-white text-secure-blue-600 hover:bg-secure-blue-50 px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl mb-12">
              Sign-up for Beta Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <div className="border-t border-secure-blue-500 pt-8">
              <p className="text-secure-blue-100 text-lg">
                From the Founders of{" "}
                <span className="font-semibold">PureVPN</span> and{" "}
                <span className="font-semibold">CloudWays</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secure-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Secure.com</h3>
              <p className="text-secure-slate-400">
                Protecting brands from cyber threats
              </p>
            </div>

            <div className="flex space-x-8">
              <a
                href="#contact"
                className="text-secure-slate-400 hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="#privacy"
                className="text-secure-slate-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#download"
                className="text-secure-slate-400 hover:text-white transition-colors"
              >
                One-pager Download
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
