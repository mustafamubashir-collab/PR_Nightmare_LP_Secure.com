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
  const [activeTab, setActiveTab] = useState("case-management");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{
          background: "linear-gradient(to bottom right, #00CBC9, #5F00FF)",
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        >
          <source src="https://sample-videos.com/zip/10/mp4/1080/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        </video>

        {/* Overlay to maintain brand consistency */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom right, rgba(0, 203, 201, 0.7), rgba(95, 0, 255, 0.7))",
            zIndex: 2
          }}
        ></div>

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

        {/* Logo and Brand Text - Top Left */}
        <div className="absolute top-8 left-8 xl:left-16 z-20">
          <div style={{ marginBottom: '-1px' }}>
            <h1 className="text-2xl font-bold text-white">
              <a href="secure.com">Secure.com</a>
            </h1>
            <p className="text-white/70" style={{ fontSize: '14px', marginTop: '-2px', lineHeight: '1.2' }}>
              From the Founders of{" "}
              <a href="www.purevpn.com" rel="noopener noreferrer">
                PureVPN
              </a>{" "}
              |{" "}
              <a href="www.cloudways.com" rel="noopener noreferrer">
                Cloudways
              </a>
            </p>
          </div>
        </div>

        {/* Content Grid for 1920x1080 Layout */}
        <div className="relative w-full h-screen grid grid-cols-2" style={{ zIndex: 10 }}>
          {/* Left Side - Content Area */}
          <div className="flex items-center justify-start pl-16 xl:pl-24 pt-20">
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

      {/* Trust Logos Section */}
      <section className="py-12 bg-white border-b border-secure-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-secure-slate-500 text-sm mb-8">Trusted by growing companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {/* Placeholder logos - replace with actual partner logos */}
              <div className="w-24 h-12 bg-secure-slate-200 rounded flex items-center justify-center">
                <span className="text-xs text-secure-slate-500">Partner 1</span>
              </div>
              <div className="w-24 h-12 bg-secure-slate-200 rounded flex items-center justify-center">
                <span className="text-xs text-secure-slate-500">Partner 2</span>
              </div>
              <div className="w-24 h-12 bg-secure-slate-200 rounded flex items-center justify-center">
                <span className="text-xs text-secure-slate-500">Partner 3</span>
              </div>
              <div className="w-24 h-12 bg-secure-slate-200 rounded flex items-center justify-center">
                <span className="text-xs text-secure-slate-500">Partner 4</span>
              </div>
              <div className="w-24 h-12 bg-secure-slate-200 rounded flex items-center justify-center">
                <span className="text-xs text-secure-slate-500">Partner 5</span>
              </div>
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
      <section id="solution" style={{ padding: '32px 0' }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "#3d4aec",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              color: "rgb(255, 255, 255)",
              fontSize: "48px",
              lineHeight: "48px",
              marginBottom: "24px",
              paddingBottom: "16px",
              textAlign: "center",
            }}
          >
            Prevent the breach,
            <br />
            Protect the brand.
            <br />
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div
              role="tablist"
              aria-orientation="horizontal"
              style={{
                display: "grid",
                alignItems: "center",
                backdropFilter: "blur(12px)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "6px",
                color: "rgb(115, 115, 115)",
                gridTemplate: "none / repeat(4, minmax(0px, 1fr))",
                height: "auto",
                justifyContent: "center",
                width: "100%",
                padding: "4px",
                gap: "4px",
              }}
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "case-management"}
                onClick={() => setActiveTab("case-management")}
                style={{
                  backgroundColor: activeTab === "case-management" ? "rgb(0, 112, 243)" : "rgba(0, 0, 0, 0)",
                  borderRadius: "4px",
                  boxShadow: activeTab === "case-management" ? "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" : "none",
                  color: activeTab === "case-management" ? "rgb(255, 255, 255)" : "rgba(253, 253, 253, 1)",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  whiteSpace: "nowrap",
                  transitionDuration: "0.15s",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                Case Management + MTTD/MTTR
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "risk-management"}
                onClick={() => setActiveTab("risk-management")}
                style={{
                  backgroundColor: activeTab === "risk-management" ? "rgb(0, 112, 243)" : "rgba(0, 0, 0, 0)",
                  borderRadius: "4px",
                  boxShadow: activeTab === "risk-management" ? "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" : "none",
                  color: activeTab === "risk-management" ? "rgb(255, 255, 255)" : "rgba(253, 253, 253, 1)",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  whiteSpace: "nowrap",
                  transitionDuration: "0.15s",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                Risk Management
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "unified-platform"}
                onClick={() => setActiveTab("unified-platform")}
                style={{
                  backgroundColor: activeTab === "unified-platform" ? "rgb(0, 112, 243)" : "rgba(0, 0, 0, 0)",
                  borderRadius: "4px",
                  boxShadow: activeTab === "unified-platform" ? "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" : "none",
                  color: activeTab === "unified-platform" ? "rgb(255, 255, 255)" : "rgba(253, 253, 253, 1)",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  whiteSpace: "nowrap",
                  transitionDuration: "0.15s",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                Context-Aware Unified Platform
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "attack-surface"}
                onClick={() => setActiveTab("attack-surface")}
                style={{
                  backgroundColor: activeTab === "attack-surface" ? "rgb(0, 112, 243)" : "rgba(0, 0, 0, 0)",
                  borderRadius: "4px",
                  boxShadow: activeTab === "attack-surface" ? "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" : "none",
                  color: activeTab === "attack-surface" ? "rgb(255, 255, 255)" : "rgba(253, 253, 253, 1)",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  whiteSpace: "nowrap",
                  transitionDuration: "0.15s",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                Attack Surface Visibility
              </button>
            </div>

            {/* Tab Content */}
            <div
              style={{
                marginTop: "32px",
                minHeight: "400px",
              }}
            >
              {/* Case Management + MTTD/MTTR Tab */}
              {activeTab === "case-management" && (
                <div
                  style={{
                    opacity: 1,
                    transform: "scale(1.03)",
                    transition: "opacity 250ms ease-in-out, transform 250ms ease-in-out",
                    animation: "fadeIn 250ms ease-in-out",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      padding: "24px 16px",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        marginBottom: "32px",
                        maxWidth: "800px",
                        margin: "0 auto 32px auto",
                      }}
                    >
                      AI-driven incident response automates 70% of triage and cuts response time by 50%.
                    </p>

                    {/* Video Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        paddingBottom: "56.25%", // 16:9 aspect ratio
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(31, 41, 55, 0.95)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            width: "80px",
                            height: "80px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "16px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Play className="w-10 h-10 text-white ml-1" />
                        </div>
                        <p
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "14px",
                            margin: 0,
                          }}
                        >
                          case-mgmt-mttd.mp4 • Coming Soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Risk Management Tab */}
              {activeTab === "risk-management" && (
                <div
                  style={{
                    opacity: 1,
                    transform: "scale(1.03)",
                    transition: "opacity 250ms ease-in-out, transform 250ms ease-in-out",
                    animation: "fadeIn 250ms ease-in-out",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      padding: "24px 16px",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        marginBottom: "32px",
                        maxWidth: "800px",
                        margin: "0 auto 32px auto",
                      }}
                    >
                      Dynamic scoring engine prioritizes vulnerabilities before they escalate into business-impacting events.
                    </p>

                    {/* Video Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        paddingBottom: "56.25%", // 16:9 aspect ratio
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(31, 41, 55, 0.95)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            width: "80px",
                            height: "80px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "16px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Play className="w-10 h-10 text-white ml-1" />
                        </div>
                        <p
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "14px",
                            margin: 0,
                          }}
                        >
                          risk-scoring-intel.mp4 • Coming Soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Context-Aware Unified Platform Tab */}
              {activeTab === "unified-platform" && (
                <div
                  style={{
                    opacity: 1,
                    transform: "scale(1.03)",
                    transition: "opacity 250ms ease-in-out, transform 250ms ease-in-out",
                    animation: "fadeIn 250ms ease-in-out",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      padding: "24px 16px",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        marginBottom: "32px",
                        maxWidth: "800px",
                        margin: "0 auto 32px auto",
                      }}
                    >
                      Centralizes all telemetry and decisioning to prevent overlooked threats from surfacing.
                    </p>

                    {/* Video Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        paddingBottom: "56.25%", // 16:9 aspect ratio
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(31, 41, 55, 0.95)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            width: "80px",
                            height: "80px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "16px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Play className="w-10 h-10 text-white ml-1" />
                        </div>
                        <p
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "14px",
                            margin: 0,
                          }}
                        >
                          context-aware-platform.mp4 • Coming Soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Attack Surface Visibility Tab */}
              {activeTab === "attack-surface" && (
                <div
                  style={{
                    opacity: 1,
                    transform: "scale(1.03)",
                    transition: "opacity 250ms ease-in-out, transform 250ms ease-in-out",
                    animation: "fadeIn 250ms ease-in-out",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      padding: "24px 16px",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        marginBottom: "32px",
                        maxWidth: "800px",
                        margin: "0 auto 32px auto",
                      }}
                    >
                      Visualizes assets, risks, and misconfigurations — reducing blind spots by 40%.
                    </p>

                    {/* Video Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        paddingBottom: "56.25%", // 16:9 aspect ratio
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(31, 41, 55, 0.95)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            width: "80px",
                            height: "80px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "16px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Play className="w-10 h-10 text-white ml-1" />
                        </div>
                        <p
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "14px",
                            margin: 0,
                          }}
                        >
                          attack-surface-visibility.mp4 • Coming Soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome & Proof Section */}
      <section id="outcome" className="py-24 bg-secure-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secure-slate-900 mb-6">
              Turn risk into{" "}
              <span className="text-secure-blue-600">&nbsp;resilience.</span>
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
              <span className="text-secure-blue-600">&nbsp;30 minutes.</span>
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
              <span>
                See <span style={{ color: 'rgb(29, 78, 216)' }}>Secure.com</span>{" "}
                in
              </span>
              <span style={{ color: 'rgba(1, 1, 1, 1)' }}>
                &nbsp;Action
              </span>
            </h2>
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
              Let your team focus on growth
              <br />
              not grunt work.
            </h2>
            <p className="text-xl text-secure-blue-100 mb-12">
              Secure.com gives you the firepower of a full security team,
              without the headcount.
            </p>

            <Button className="bg-white text-secure-blue-600 hover:bg-secure-blue-50 px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Sign-up for Beta Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>





      {/* Footer */}
      <footer className="bg-secure-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p>
                <a href="www.secure.com" rel="noopener noreferrer">
                  <h3 className="text-2xl font-bold text-white">Secure.com</h3>
                </a>
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
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
