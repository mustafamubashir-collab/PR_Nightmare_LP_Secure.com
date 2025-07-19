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
        <div className="absolute inset-0 bg-gradient-to-r from-secure-blue-900/5 to-transparent"></div>
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
