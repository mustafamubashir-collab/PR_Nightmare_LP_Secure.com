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
  const [deploymentProgress, setDeploymentProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [showBetaModal, setShowBetaModal] = useState(false);
  const [betaForm, setBetaForm] = useState({
    fullName: '',
    workEmail: '',
    companySize: '',
    industry: '',
    securityChallenges: [] as string[],
    additionalComments: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced deployment animation effect - Fast 2-second intervals
  useEffect(() => {
    const runAnimation = () => {
      // Reset to initial state
      setActiveStep(0);
      setDeploymentProgress(0);

      const timeouts: NodeJS.Timeout[] = [];

      // Step 1: API Connection Established - 2 seconds → 20%
      timeouts.push(
        setTimeout(() => {
          setActiveStep(1);
          setDeploymentProgress(20);
        }, 500) // Small delay for smooth start
      );

      // Step 2: Asset Discovery Complete - 2 seconds → 60%
      timeouts.push(
        setTimeout(() => {
          setActiveStep(2);
          setDeploymentProgress(60);
        }, 2500) // 2 seconds after step 1
      );

      // Step 3: Risk Assessment Generated - 2 seconds → 100%
      timeouts.push(
        setTimeout(() => {
          setActiveStep(3);
          setDeploymentProgress(100);
        }, 4500) // 2 seconds after step 2
      );

      // Final: Agent Live. Monitoring Active - hold for 7 seconds
      timeouts.push(
        setTimeout(() => {
          setActiveStep(4);
        }, 6500) // 2 seconds after step 3
      );

      // Reset and restart animation loop
      timeouts.push(
        setTimeout(() => {
          runAnimation();
        }, 13500) // 7 seconds to appreciate final state, then restart
      );

      return timeouts;
    };

    const timeouts = runAnimation();
    return () => timeouts.forEach(clearTimeout);
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
          background: "linear-gradient(90deg, #3C00C9 0%, #00B2FF 100%)",
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
          <source src="https://cdn.builder.io/o/assets%2F48c32e83d1314890b4d6a107b41a061a%2Fba2fbd26cf6e4a7db43e6276e146d43c?alt=media&token=fc4c512d-f00a-422b-9ed6-19e3c2279a18&apiKey=48c32e83d1314890b4d6a107b41a061a" type="video/mp4" />
        </video>

        {/* Subtle gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, transparent 50%)",
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
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
              <a href="secure.com">Secure.com</a>
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', marginTop: '4px', lineHeight: '1.2', fontFamily: 'Inter, sans-serif' }}>
              From the Founders of{" "}
              <a href="www.purevpn.com" rel="noopener noreferrer">
                PureVPN
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
                <h1 style={{ fontSize: '56px', fontWeight: '700', color: '#FFFFFF', marginBottom: '32px', lineHeight: '1.1', textAlign: 'left', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
                  <div>One Cyber Breach</div>
                  <div>Away from a</div>
                  <div style={{ color: '#00FFFF', fontWeight: '700' }}>
                    <span>PR Nightmare</span>
                  </div>
                </h1>
                <p style={{ fontSize: '18px', fontWeight: '400', color: '#E0E0E0', marginBottom: '32px', lineHeight: '1.5', fontFamily: 'Inter, sans-serif' }}>
                  Reduce breach risk with <span style={{ color: '#A0FFFD' }}>40% fewer blind spots</span> and AI-led response before it turns into reputational damage.
                </p>
                <div className="relative">
                  {/* Subtle glowing background */}
                  <div
                    className="absolute inset-0 bg-blue-700/30 rounded-lg blur-xl animate-pulse"
                    style={{ animationDuration: "4s" }}
                  ></div>
                  <Button
                    onClick={() => setShowBetaModal(true)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#000000',
                      padding: '16px 32px',
                      fontSize: '18px',
                      fontWeight: '600',
                      borderRadius: '8px',
                      fontFamily: 'Inter, sans-serif',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 14px rgba(60, 0, 201, 0.25)'
                    }}
                  >
                    Sign-up for Beta Partner
                    <ArrowRight className="ml-2 w-5 h-5" />
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

        {/* Trust Logos at bottom of hero */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-full" style={{ zIndex: 15 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#E0E0E0', fontSize: '14px', fontWeight: '400', marginBottom: '16px', fontFamily: 'Inter, sans-serif' }}>
                Trusted by growing companies
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    style={{
                      width: '80px',
                      height: '40px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Inter, sans-serif' }}>
                      Partner {num}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
      <section id="problem" style={{ padding: '64px 0', backgroundColor: '#f8fafc' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 style={{ color: '#141414', fontSize: '40px', fontWeight: '700', lineHeight: '1.2', marginBottom: '24px', fontFamily: 'Inter, sans-serif', textAlign: 'center', letterSpacing: '-0.025em' }}>
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
      <section id="solution" style={{ padding: '64px 0' }}>
        <div
          style={{
            width: "100%",
            background: "linear-gradient(90deg, #3C00C9 0%, #00B2FF 100%)",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "24px",
              paddingBottom: "16px",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "-0.025em"
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
                marginTop: "24px",
                minHeight: "280px",
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
                      padding: "16px 12px",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "22px",
                        marginBottom: "20px",
                        maxWidth: "800px",
                        margin: "0 auto 20px auto",
                      }}
                    >
                      AI-driven incident response automates 70% of triage and cuts response time by 50%.
                    </p>

                    {/* Video Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "900px",
                        margin: "0 auto",
                        paddingBottom: "39.375%", // Reduced height: 16:9 * 0.7
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <source
                          src="https://cdn.builder.io/o/assets%2F48c32e83d1314890b4d6a107b41a061a%2F1c5eb9bdf73c4c1ea10a749da2f63ee0?alt=media&token=51566757-5272-41dc-9752-b3c441c00cc3&apiKey=48c32e83d1314890b4d6a107b41a061a"
                          type="video/mp4"
                        />
                      </video>
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
                      padding: "16px 12px",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "22px",
                        marginBottom: "20px",
                        maxWidth: "800px",
                        margin: "0 auto 20px auto",
                      }}
                    >
                      Dynamic scoring engine prioritizes vulnerabilities before they escalate into business-impacting events.
                    </p>

                    {/* Video Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "900px",
                        margin: "0 auto",
                        paddingBottom: "39.375%", // Reduced height: 16:9 * 0.7
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
                      padding: "16px 12px",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "22px",
                        marginBottom: "20px",
                        maxWidth: "800px",
                        margin: "0 auto 20px auto",
                      }}
                    >
                      Centralizes all telemetry and decisioning to prevent overlooked threats from surfacing.
                    </p>

                    {/* Video Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "900px",
                        margin: "0 auto",
                        paddingBottom: "39.375%", // Reduced height: 16:9 * 0.7
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
                      padding: "16px 12px",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "22px",
                        marginBottom: "20px",
                        maxWidth: "800px",
                        margin: "0 auto 20px auto",
                      }}
                    >
                      Visualizes assets, risks, and misconfigurations — reducing blind spots by 40%.
                    </p>

                    {/* Video Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "900px",
                        margin: "0 auto",
                        paddingBottom: "39.375%", // Reduced height: 16:9 * 0.7
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
      <section id="outcome" style={{ padding: '64px 0', background: 'linear-gradient(135deg, #eff6ff 0%, #f0f9ff 50%, #ecfeff 100%)' }}>
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
              <div style={{ fontSize: '60px', fontWeight: '700', color: '#3C00C9', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
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
              <div style={{ fontSize: '60px', fontWeight: '700', color: '#3C00C9', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
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
              <div style={{ fontSize: '60px', fontWeight: '700', color: '#3C00C9', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
                $25K+
              </div>
              <p className="text-xl text-secure-slate-700">
                Annual IR cost savings
              </p>
            </div>
          </div>
        </div>
      </section>






      {/* Video Section - See Secure.com in Action */}
      <section id="video" style={{ padding: '32px 0', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ color: '#111827', fontSize: '40px', fontWeight: '700', lineHeight: '1.2', marginBottom: '16px', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em' }}>
              See <span style={{ color: '#5F00FF' }}>Secure.com</span> in Action
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Video Container - Reduced height for one-fold viewing */}
              <div className="relative w-full" style={{ paddingBottom: '42%', maxHeight: '400px' }}>
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

      {/* Deployment Section - 30-minute deployment */}
      <section style={{ padding: '32px 0', background: 'linear-gradient(135deg, #1F2937 0%, #374151 50%, #4B5563 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div>
                <h2 style={{ color: '#FFFFFF', fontSize: '40px', fontWeight: '700', lineHeight: '1.2', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em' }}>
                  Peace of mind, in <span style={{ color: '#00CBC9' }}>30 minutes</span>.
                </h2>
              </div>
              <div style={{ marginTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'rgba(60, 131, 246, 0.1)', borderRadius: '50%' }}>
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div style={{ marginLeft: '16px' }}>
                    <div style={{ color: '#ffffff', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                      No Agents, No Rip-and-Replace
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'rgba(60, 131, 246, 0.1)', borderRadius: '50%' }}>
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div style={{ marginLeft: '16px' }}>
                    <div style={{ color: '#ffffff', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                      Fast Deployment
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'rgba(60, 131, 246, 0.1)', borderRadius: '50%' }}>
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div style={{ marginLeft: '16px' }}>
                    <div style={{ color: '#ffffff', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                      Dedicated Success Engineer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: '32px', backgroundImage: 'linear-gradient(to right bottom, rgb(44, 49, 58), rgb(70, 74, 83))', borderRadius: '16px', border: '0.8px solid rgb(107, 114, 128)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: '#ffffff', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                    Deployment Progress
                  </span>
                  <span style={{ color: '#00CBC9', fontFamily: 'Inter, sans-serif' }}>
                    {deploymentProgress}%
                  </span>
                </div>
                <div style={{ backgroundColor: 'rgb(31, 34, 41)', borderRadius: '50px', height: '8px', marginTop: '24px', position: 'relative', overflow: 'hidden' }}>
                  <div
                    style={{
                      background: 'linear-gradient(90deg, #00CBC9 0%, #5F00FF 100%)',
                      borderRadius: '50px',
                      height: '8px',
                      width: `${deploymentProgress}%`,
                      transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      boxShadow: deploymentProgress === 100 ? '0 0 12px rgba(0, 203, 201, 0.6)' : 'none',
                      animation: deploymentProgress === 100 ? 'pulse 2s infinite' : 'none'
                    }}
                  >
                    {/* Shimmer effect during progress */}
                    {deploymentProgress > 0 && deploymentProgress < 100 && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                          animation: 'shimmer 2s infinite'
                        }}
                      />
                    )}
                  </div>
                </div>
                <div style={{ marginTop: '24px' }}>
                  {/* Step 1: API Connection Established */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    opacity: activeStep >= 1 ? 1 : 0.3,
                    transform: activeStep >= 1 ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'all 0.6s ease-in-out'
                  }}>
                    <CheckCircle className={`w-5 h-5 transition-colors duration-500 ${activeStep >= 1 ? 'text-green-500' : 'text-gray-400'}`} />
                    <span style={{ color: '#ffffff', marginLeft: '12px', fontFamily: 'Inter, sans-serif' }}>
                      API Connection Established
                    </span>
                    <span style={{
                      color: activeStep >= 1 ? '#22c55e' : '#9096a2',
                      fontSize: '14px',
                      marginLeft: '12px',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'color 0.5s ease-in-out'
                    }}>
                      {activeStep >= 1 ? '✓ 2 min' : '2 min'}
                    </span>
                  </div>

                  {/* Step 2: Asset Discovery Complete */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '12px',
                    opacity: activeStep >= 2 ? 1 : 0.3,
                    transform: activeStep >= 2 ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'all 0.6s ease-in-out',
                    transitionDelay: activeStep >= 2 ? '0.2s' : '0s'
                  }}>
                    <CheckCircle className={`w-5 h-5 transition-colors duration-500 ${activeStep >= 2 ? 'text-green-500' : 'text-gray-400'}`} />
                    <span style={{ color: '#ffffff', marginLeft: '12px', fontFamily: 'Inter, sans-serif' }}>
                      Asset Discovery Complete
                    </span>
                    <span style={{
                      color: activeStep >= 2 ? '#22c55e' : '#9096a2',
                      fontSize: '14px',
                      marginLeft: '12px',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'color 0.5s ease-in-out'
                    }}>
                      {activeStep >= 2 ? '✓ 15 min' : '15 min'}
                    </span>
                  </div>

                  {/* Step 3: Risk Assessment Generated */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '12px',
                    opacity: activeStep >= 3 ? 1 : 0.3,
                    transform: activeStep >= 3 ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'all 0.6s ease-in-out',
                    transitionDelay: activeStep >= 3 ? '0.4s' : '0s'
                  }}>
                    <CheckCircle className={`w-5 h-5 transition-colors duration-500 ${activeStep >= 3 ? 'text-green-500' : 'text-gray-400'}`} />
                    <span style={{ color: '#ffffff', marginLeft: '12px', fontFamily: 'Inter, sans-serif' }}>
                      Risk Assessment Generated
                    </span>
                    <span style={{
                      color: activeStep >= 3 ? '#22c55e' : '#9096a2',
                      fontSize: '14px',
                      marginLeft: '12px',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'color 0.5s ease-in-out'
                    }}>
                      {activeStep >= 3 ? '✓ 28 min' : '28 min'}
                    </span>
                  </div>

                  {/* Final Step: Agent Live. Monitoring Active */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '16px',
                    padding: '12px',
                    backgroundColor: activeStep >= 4 ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                    borderRadius: '8px',
                    opacity: activeStep >= 4 ? 1 : 0.3,
                    transform: activeStep >= 4 ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.8s ease-in-out',
                    transitionDelay: activeStep >= 4 ? '0.6s' : '0s',
                    border: activeStep >= 4 ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid transparent'
                  }}>
                    <div className={`w-5 h-5 transition-all duration-700 ${activeStep >= 4 ? 'text-blue-400 animate-pulse' : 'text-gray-400'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                      </svg>
                    </div>
                    <span style={{
                      color: '#ffffff',
                      marginLeft: '12px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: activeStep >= 4 ? '600' : '400',
                      transition: 'font-weight 0.5s ease-in-out'
                    }}>
                      Agent Live. Monitoring Active
                    </span>
                    <span style={{
                      color: activeStep >= 4 ? '#00CBC9' : '#9096a2',
                      fontSize: '14px',
                      marginLeft: '12px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: activeStep >= 4 ? '600' : '400',
                      transition: 'all 0.5s ease-in-out'
                    }}>
                      {activeStep >= 4 ? '● Live' : 'Pending'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section
        id="final-cta"
        style={{ padding: '64px 0', background: 'linear-gradient(90deg, #3C00C9 0%, #00B2FF 100%)' }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: '700', lineHeight: '1.1', marginBottom: '24px', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
              Let your team focus on growth<br />not grunt work.
            </h2>
            <p style={{ color: '#F0F4F8', fontSize: '18px', fontWeight: '400', lineHeight: '1.5', marginBottom: '32px', fontFamily: 'Inter, sans-serif' }}>
              Secure.com gives you the firepower of a full security team, without the headcount.
            </p>

            <Button
              onClick={() => setShowBetaModal(true)}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#5F00FF',
                padding: '16px 32px',
                fontSize: '18px',
                fontWeight: '600',
                borderRadius: '8px',
                fontFamily: 'Inter, sans-serif',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                margin: '0 auto',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(255, 255, 255, 0.25)'
              }}
            >
              Sign-up for Beta Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            {/* FOMO Messaging */}
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '18px',
              fontWeight: '500',
              marginTop: '24px',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.5',
              letterSpacing: '0.025em'
            }}>
              Secure your spot among the first 50 visionary companies shaping the next era of AI-native cybersecurity. Limited access. Unmatched advantage.
            </p>

            {/* PureVPN Attribution */}
            <div style={{ marginTop: '48px', textAlign: 'center' }}>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                From the Founders of{" "}
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '28px',
                  marginLeft: '8px',
                  fontWeight: '600',
                  color: '#ffffff'
                }}>
                  PureVPN
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>





      {/* Footer */}
      <footer style={{ backgroundColor: '#000000', padding: '32px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '16px', fontFamily: 'Inter, sans-serif', margin: '0' }}>
            Secure.com All Rights Reserved 2025
          </p>
        </div>
      </footer>

      {/* Beta Signup Modal */}
      {showBetaModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowBetaModal(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setShowBetaModal(false);
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowBetaModal(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666666',
                padding: '8px'
              }}
            >
              ×
            </button>

            <h2 style={{
              color: '#0A0A0A',
              fontSize: '28px',
              fontWeight: '700',
              marginBottom: '8px',
              fontFamily: 'Inter, sans-serif'
            }}>
              Exclusive Beta Access
            </h2>

            <p style={{
              color: '#666666',
              fontSize: '16px',
              marginBottom: '24px',
              fontFamily: 'Inter, sans-serif'
            }}>
              Join the first 50 companies to shape the future of AI-native security.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Validate email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(betaForm.workEmail)) {
                  alert('Please enter a valid email address');
                  return;
                }
                // Handle form submission here
                console.log('Beta form submitted:', betaForm);
                alert('Thank you! We\'ll be in touch soon.');
                setShowBetaModal(false);
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {/* Full Name */}
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', color: '#0A0A0A', fontFamily: 'Inter, sans-serif' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={betaForm.fullName}
                  onChange={(e) => setBetaForm({...betaForm, fullName: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>

              {/* Work Email */}
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', color: '#0A0A0A', fontFamily: 'Inter, sans-serif' }}>
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={betaForm.workEmail}
                  onChange={(e) => setBetaForm({...betaForm, workEmail: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>

              {/* Company Size */}
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', color: '#0A0A0A', fontFamily: 'Inter, sans-serif' }}>
                  Company Size *
                </label>
                <select
                  required
                  value={betaForm.companySize}
                  onChange={(e) => setBetaForm({...betaForm, companySize: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="200+">200+</option>
                </select>
              </div>

              {/* Industry */}
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', color: '#0A0A0A', fontFamily: 'Inter, sans-serif' }}>
                  Industry *
                </label>
                <select
                  required
                  value={betaForm.industry}
                  onChange={(e) => setBetaForm({...betaForm, industry: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  <option value="">Select industry</option>
                  <option value="FinTech">FinTech</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Security Challenges */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0A0A0A', fontFamily: 'Inter, sans-serif' }}>
                  Security Challenges (select all that apply)
                </label>
                {['Compliance', 'Threat Detection', 'Limited Staff', 'Alert Fatigue', 'Other'].map((challenge) => (
                  <label key={challenge} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
                    <input
                      type="checkbox"
                      checked={betaForm.securityChallenges.includes(challenge)}
                      onChange={(e) => {
                        const challenges = betaForm.securityChallenges;
                        if (e.target.checked) {
                          setBetaForm({...betaForm, securityChallenges: [...challenges, challenge]});
                        } else {
                          setBetaForm({...betaForm, securityChallenges: challenges.filter(c => c !== challenge)});
                        }
                      }}
                      style={{ marginRight: '8px' }}
                    />
                    {challenge}
                  </label>
                ))}
              </div>

              {/* Additional Comments */}
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', color: '#0A0A0A', fontFamily: 'Inter, sans-serif' }}>
                  Additional Comments (optional)
                </label>
                <textarea
                  rows={3}
                  value={betaForm.additionalComments}
                  onChange={(e) => setBetaForm({...betaForm, additionalComments: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #00CBC9 0%, #5F00FF 100%)',
                  color: '#FFFFFF',
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: '600',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '8px',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 14px rgba(95, 0, 255, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(95, 0, 255, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(95, 0, 255, 0.25)';
                }}
              >
                Join Private Beta
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
