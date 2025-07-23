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
  ArrowRight,
  AlertTriangle,
  Target,
  Map,
  LayoutDashboard,
  Play,
  Star,
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
      {/* Brand Endorsement Top Bar */}
      <section className="bg-secure-slate-900 py-3">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-secure-slate-300 text-sm">
              From the Founders of
            </span>
            <div className="flex items-center space-x-6">
              <div className="text-white font-semibold">PureVPN</div>
              <div className="w-px h-4 bg-secure-slate-600"></div>
              <div className="text-white font-semibold">CloudWays</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{
          background: "linear-gradient(to bottom right, #00CBC9, #5F00FF)",
        }}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="w-full h-full opacity-20">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 600"
            >
              <defs>
                <pattern
                  id="heroGrid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                </pattern>
                <filter id="heroGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="url(#heroGrid)" />
            </svg>
          </div>
        </div>

        {/* Central Logo/Icon with Glow - Right Side Only */}
        <div className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center pointer-events-none">
          <div className="relative flex items-center justify-center">
            {/* Outer Glow Ring - Centered */}
            <div className="absolute w-40 h-40 rounded-full bg-black/20 animate-ping"></div>
            <div className="absolute w-36 h-36 rounded-full bg-black/30 animate-pulse"></div>

            {/* Central Shield Icon - Perfectly Centered */}
            <div className="w-32 h-32 bg-black/80 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center shadow-2xl animate-glow">
              <Shield className="w-16 h-16 text-white" />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Floating Security Panels - Right Side Only */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
          {/* Investigation Report Panel - Top Right Area */}
          <div
            className="absolute top-16 right-12 animate-float"
            style={{ animationDelay: "0s" }}
          >
            <div className="bg-black/80 backdrop-blur-sm border border-white/30 rounded-lg p-5 shadow-2xl">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                <span className="text-blue-300 text-sm font-medium">
                  Investigation Report
                </span>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-gray-300">
                  Conclusion: Threat Neutralized
                </div>
                <div className="flex space-x-2">
                  <div className="px-2 py-1 bg-blue-600/40 text-blue-200 text-xs rounded">
                    Shadow Assets
                  </div>
                  <div className="px-2 py-1 bg-blue-600/40 text-blue-200 text-xs rounded">
                    Compliance Drift
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Threat Alert Panel - Top Left of Right Area */}
          <div
            className="absolute top-28 left-12 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="bg-black/80 backdrop-blur-sm border border-red-400/50 rounded-lg p-5 shadow-2xl">
              <div className="flex items-center space-x-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-red-300 text-sm font-medium">
                  Security Alert
                </span>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-gray-300">
                  Threat Level: Medium
                </div>
                <div className="w-24 h-1 bg-secure-slate-700 rounded">
                  <div
                    className="h-full bg-red-500 rounded animate-pulse"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Monitoring Panel - Bottom Left of Right Area */}
          <div
            className="absolute bottom-20 left-16 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="bg-black/80 backdrop-blur-sm border border-green-400/50 rounded-lg p-5 shadow-2xl">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm font-medium">
                  Live Monitor
                </span>
              </div>
              <div className="flex space-x-1">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-green-400 rounded animate-pulse"
                    style={{
                      height: `${Math.random() * 16 + 8}px`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* System Status Panel - Bottom Right of Right Area */}
          <div
            className="absolute bottom-24 right-16 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="bg-black/80 backdrop-blur-sm border border-white/30 rounded-lg p-5 shadow-2xl">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="w-4 h-4 text-blue-300" />
                <span className="text-blue-300 text-sm font-medium">
                  System Status
                </span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-300">Firewall</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Encryption</span>
                  <span className="text-green-400">256-bit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alert Triangles - Floating in Right Area (repositioned to avoid overlaps) */}
          <div className="absolute top-1/2 right-1/3">
            <AlertTriangle
              className="w-5 h-5 text-orange-400 animate-bounce"
              style={{ animationDelay: "1.2s" }}
            />
          </div>
        </div>

        {/* Content Grid for 1920x1080 Layout */}
        <div className="relative z-10 w-full h-screen grid grid-cols-2">
          {/* Left Side - Content Area */}
          <div className="flex items-center justify-start pl-16 xl:pl-24">
            <div className="max-w-xl">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-8 leading-tight text-left drop-shadow-lg">
                  <div>One Cyber Breach</div>
                  <div>Away from a</div>
                  <div className="text-gray-400 font-extrabold">
                    <p>
                      <span style={{ color: "rgb(10, 19, 46)" }}>
                        PR Nightmare
                      </span>
                    </p>
                  </div>
                </h1>
                <p className="text-xl xl:text-2xl text-white/90 mb-10 leading-relaxed drop-shadow-md">
                  Reduce breach risk with 40% fewer blind spots and AI-led
                  response before it turns into reputational damage.
                </p>
                <div className="relative">
                  {/* Subtle glowing background */}
                  <div
                    className="absolute inset-0 bg-blue-700/30 rounded-lg blur-xl animate-pulse"
                    style={{ animationDuration: "4s" }}
                  ></div>
                  <Button
                    onClick={() => scrollToSection("final-cta")}
                    className="text-white px-10 py-5 text-xl font-semibold rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
                    style={{ backgroundColor: "#2e2f3e" }}
                  >
                    <span className="relative z-10">
                      Sign-up for Beta Partner
                    </span>
                    {/* Hover shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
                    {/* 5-second repeating shine animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent transform -skew-x-12 -translate-x-full animate-shine"></div>
                    <ArrowRight className="ml-3 w-6 h-6 relative z-10" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Animation Area */}
          <div
            className="relative flex items-center justify-center"
            style={{
              backgroundImage:
                "url(https://cdn.builder.io/o/assets%2F48c32e83d1314890b4d6a107b41a061a%2F127535bdd5094d29b5accb2e40fb5083?alt=media&token=0e811cdb-964a-4fcd-8025-556937daa9d1&apiKey=48c32e83d1314890b4d6a107b41a061a)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Brand Value at Risk */}
            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-secure-slate-900 mb-4">
                Brand Value at Risk
              </h3>
              <div className="text-3xl font-bold text-red-600 mb-3">5–9%</div>
              <p className="text-sm text-secure-slate-600 mb-3 leading-relaxed">
                decline in reputational intangible capital
              </p>
              <p className="text-xs text-secure-slate-500 mb-3 italic">
                "The largest and most salient breaches are associated with a 5–9% decline in firms' reputational intangible capital."
              </p>
              <p className="text-xs text-secure-slate-400 font-medium">
                Oxford Academic, Journal of Cybersecurity
              </p>
            </Card>

            {/* Media Blowback */}
            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-secure-slate-900 mb-4">
                Media Blowback from a Single Misstep
              </h3>
              <div className="text-3xl font-bold text-orange-600 mb-3">94%</div>
              <p className="text-sm text-secure-slate-600 mb-3 leading-relaxed">
                of respondents
              </p>
              <p className="text-xs text-secure-slate-500 mb-3 italic">
                "94% of respondents said their customers would not buy from them if they did not adequately protect data."
              </p>
              <p className="text-xs text-secure-slate-400 font-medium">
                Cisco 2024 Data Privacy Benchmark Study
              </p>
            </Card>

            {/* Investor Confidence */}
            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-secure-slate-900 mb-4">
                Investor Confidence Erodes
              </h3>
              <div className="text-3xl font-bold text-red-600 mb-3">81%</div>
              <p className="text-sm text-secure-slate-600 mb-3 leading-relaxed">
                of private-market investors
              </p>
              <p className="text-xs text-secure-slate-500 mb-3 italic">
                "81% of private‑market investors say cybersecurity and data‑reporting measures have become more important to their investment decisions in the past year."
              </p>
              <p className="text-xs text-secure-slate-400 font-medium">
                KPMG Private Markets Pulse 2025
              </p>
            </Card>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl text-secure-slate-600 leading-relaxed">
              A security failure doesn't just cost revenue — it damages your
              reputation, valuation, and growth trajectory.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section — How Secure.com Helps */}
      <section id="solution" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secure-slate-900 mb-6">
              Prevent the breach.{" "}
              <span className="text-secure-blue-600">Protect the brand.</span>
            </h2>
          </div>

          {/* Responsive Grid: 1 column mobile, 2 columns desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Capability Block 1 */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white hover:bg-secure-blue-50">
              <div className="flex flex-col items-start space-y-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <Eye className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secure-slate-900 mb-3">
                    Attack Surface Visibility
                  </h3>
                  <p className="text-secure-slate-600 leading-relaxed">
                    Visualizes assets, risks, and misconfigurations — reducing blind spots by 40%.
                  </p>
                </div>
              </div>
            </Card>

            {/* Capability Block 2 */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white hover:bg-secure-blue-50">
              <div className="flex flex-col items-start space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secure-slate-900 mb-3">
                    Case Management + MTTD/MTTR
                  </h3>
                  <p className="text-secure-slate-600 leading-relaxed">
                    AI-driven incident response automates 70% of triage and cuts response time by 50%.
                  </p>
                </div>
              </div>
            </Card>

            {/* Capability Block 3 */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white hover:bg-secure-blue-50">
              <div className="flex flex-col items-start space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secure-slate-900 mb-3">
                    Risk Management
                  </h3>
                  <p className="text-secure-slate-600 leading-relaxed">
                    Dynamic scoring engine prioritizes vulnerabilities before they escalate into business-impacting events.
                  </p>
                </div>
              </div>
            </Card>

            {/* Capability Block 4 */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white hover:bg-secure-blue-50">
              <div className="flex flex-col items-start space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <Layers className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secure-slate-900 mb-3">
                    Context-Aware Unified Platform
                  </h3>
                  <p className="text-secure-slate-600 leading-relaxed">
                    Centralizes all telemetry and decisioning to prevent overlooked threats from surfacing.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcome & Proof Section */}
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
                Annual IR cost savings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights (Video Grid) */}
      <section id="highlights" className="py-24 bg-gradient-to-br from-secure-slate-50 to-white">
        <div className="container mx-auto px-6">
          {/* 2x2 Grid of Video Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Video Block 1 - Proactive Breach Prevention */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden rounded-xl">
              <div className="relative">
                {/* Video placeholder - 16:9 ratio optimized for 1920x1080 */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center">
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

                    {/* Heading overlay */}
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        Proactive Breach Prevention
                      </h3>
                    </div>

                    {/* Play button center */}
                    <div className="relative text-center">
                      <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <p className="text-white/90 text-sm font-medium drop-shadow">
                        ▶ Preview Coming Soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Video Block 2 - Centralized Risk Scoring */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden rounded-xl">
              <div className="relative">
                {/* Video placeholder - 16:9 ratio optimized for 1920x1080 */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

                    {/* Heading overlay */}
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        Centralized Risk Scoring
                      </h3>
                    </div>

                    {/* Play button center */}
                    <div className="relative text-center">
                      <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <p className="text-white/90 text-sm font-medium drop-shadow">
                        ▶ Preview Coming Soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Video Block 3 - Real-Time Asset & Threat Maps */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden rounded-xl">
              <div className="relative">
                {/* Video placeholder - 16:9 ratio optimized for 1920x1080 */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

                    {/* Heading overlay */}
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        Real-Time Asset & Threat Maps
                      </h3>
                    </div>

                    {/* Play button center */}
                    <div className="relative text-center">
                      <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <p className="text-white/90 text-sm font-medium drop-shadow">
                        ▶ Preview Coming Soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Video Block 4 - Unified Dashboard for Founders */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden rounded-xl">
              <div className="relative">
                {/* Video placeholder - 16:9 ratio optimized for 1920x1080 */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

                    {/* Heading overlay */}
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        Unified Dashboard for Founders
                      </h3>
                    </div>

                    {/* Play button center */}
                    <div className="relative text-center">
                      <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <p className="text-white/90 text-sm font-medium drop-shadow">
                        ▶ Preview Coming Soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Onboarding Section */}
      <section id="onboarding" className="py-24 bg-secure-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-secure-slate-900 mb-8">
              Peace of mind, in{" "}
              <span className="text-secure-blue-600">30 minutes.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secure-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-secure-blue-600" />
                </div>
                <span className="text-lg font-semibold text-secure-slate-700">No Agents</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secure-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-secure-blue-600" />
                </div>
                <span className="text-lg font-semibold text-secure-slate-700">Fast Deployment</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secure-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-secure-blue-600" />
                </div>
                <span className="text-lg font-semibold text-secure-slate-700">Dedicated Success Engineer</span>
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

      {/* Video Section - See Secure.com in Action */}
      <section id="video" className="py-24 bg-gradient-to-br from-secure-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secure-slate-900 mb-6">
              See Secure.com in{" "}
              <span className="text-secure-blue-600">Action</span>
            </h2>
            <p className="text-xl text-secure-slate-600 max-w-3xl mx-auto">
              Watch how our AI-driven security platform transforms threat response 
              and reduces operational overhead for growing companies.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Video Container - 16:9 aspect ratio optimized for 1920x1080 */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <div className="absolute inset-0 bg-secure-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Placeholder for YouTube video */}
                  <div className="w-full h-full bg-gradient-to-br from-secure-slate-700 to-secure-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-white/20 transition-colors cursor-pointer">
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Product Demo
                      </h3>
                      <p className="text-white/70">
                        YouTube video will be embedded here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video overlay elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-secure-blue-600 rounded-tl-lg"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-secure-blue-600 rounded-tr-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-secure-blue-600 rounded-bl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-secure-blue-600 rounded-br-lg"></div>
            </div>

            {/* Video stats/features below */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-secure-blue-600 mb-2">3:42</div>
                <p className="text-secure-slate-600">Video Duration</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secure-blue-600 mb-2">4K</div>
                <p className="text-secure-slate-600">Ultra HD Quality</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secure-blue-600 mb-2">Live</div>
                <p className="text-secure-slate-600">Real Demo Environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
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

            <Button className="bg-white text-secure-blue-600 hover:bg-secure-blue-50 px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Sign-up for Beta Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-secure-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="mb-8">
              <p className="text-secure-blue-100 text-lg mb-4">
                From the Founders of{" "}
                <span className="font-semibold text-white">PureVPN</span> and{" "}
                <span className="font-semibold text-white">CloudWays</span>
              </p>
            </div>
            
            <div className="border-t border-secure-slate-700 pt-8">
              <p className="text-secure-slate-400 text-sm mb-4">Trusted by growing companies</p>
              <div className="flex justify-center items-center space-x-8 opacity-50">
                {/* Placeholder for partner logos */}
                <div className="w-24 h-8 bg-secure-slate-700 rounded"></div>
                <div className="w-24 h-8 bg-secure-slate-700 rounded"></div>
                <div className="w-24 h-8 bg-secure-slate-700 rounded"></div>
                <div className="w-24 h-8 bg-secure-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secure-slate-900 py-12 border-t border-secure-slate-800">
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
