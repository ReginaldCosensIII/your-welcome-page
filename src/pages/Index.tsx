import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ToolMockup } from "@/components/ToolMockup";
import { FeatureTourMockup } from "@/components/FeatureTourMockup";
import logoBadge from "@/assets/logo-badge.svg";
import communityCrafting from "@/assets/community-crafting.jpg";

import {
  Sparkles, 
  Zap, 
  Users, 
  Palette, 
  Download, 
  Shield,
  ArrowRight,
  Heart,
  Lightbulb
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Instant Pattern Generation",
    description: "Transform your creative vision into structured, ready-to-use blanket patterns in seconds.",
  },
  {
    icon: Palette,
    title: "Visual Pattern Designer",
    description: "See your design come to life with our intuitive visual editor. No guesswork required.",
  },
  {
    icon: Download,
    title: "Export & Share",
    description: "Download patterns in multiple formats, ready to print or share with fellow makers.",
  },
  {
    icon: Zap,
    title: "Works Everywhere",
    description: "Browser-based and responsive. Create patterns on any device, anywhere.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Built with input from real crocheters and knitters. Your feedback shapes our roadmap.",
  },
  {
    icon: Shield,
    title: "Your Patterns, Your Data",
    description: "Privacy-first approach. Your creative work stays yours.",
  },
];

const platformValues = [
  {
    icon: Heart,
    title: "Community-First",
    description: "Every decision is made with makers in mind. Your voice shapes our product.",
  },
  {
    icon: Lightbulb,
    title: "Creativity-Enabled",
    description: "We remove barriers so you can focus on what matters—your creative vision.",
  },
  {
    icon: Users,
    title: "Inclusive Design",
    description: "Built for every skill level, from first-time crocheters to seasoned pattern designers.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          {/* Decorative blur orbs - symmetrical gradient orbs */}
          <div className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] 3xl:w-[600px] 3xl:h-[600px] opacity-20 lg:opacity-25 blur-3xl rounded-full gradient-bg transform translate-x-[22%] -translate-y-[28%] 3xl:translate-x-[15%] 3xl:-translate-y-[20%]" />
          <div className="absolute bottom-0 left-0 w-[260px] h-[260px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] 3xl:w-[580px] 3xl:h-[580px] opacity-20 lg:opacity-25 blur-3xl rounded-full gradient-bg transform -translate-x-[30%] translate-y-[32%] 3xl:-translate-x-[20%] 3xl:translate-y-[22%]" />
          {/* Cyan accent orbs in opposite corners */}
          <div className="hidden md:block absolute top-0 left-0 w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] 3xl:w-[700px] 3xl:h-[700px] blur-3xl rounded-full accent-orb transform -translate-x-[24%] -translate-y-[26%] 3xl:-translate-x-[18%] 3xl:-translate-y-[18%]" />
          <div className="hidden md:block absolute bottom-0 right-0 w-[380px] h-[380px] lg:w-[450px] lg:h-[450px] 3xl:w-[580px] 3xl:h-[580px] blur-3xl rounded-full accent-orb transform translate-x-[32%] translate-y-[30%] 3xl:translate-x-[22%] 3xl:translate-y-[20%]" />
          
          {/* Graph paper texture with grid */}
          <div
            className="absolute inset-0 opacity-[0.025] md:opacity-[0.03] lg:opacity-[0.05] mix-blend-multiply"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--muted-foreground)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--muted-foreground)) 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Red crosshair guidelines pointing to content - desktop only */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Vertical dashed line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0 -translate-x-1/2 border-l-2 border-dashed opacity-[0.08]"
              style={{ borderColor: "hsl(340, 82%, 52%)" }}
            />
            {/* Horizontal dashed line - positioned at content center */}
            <div
              className="absolute top-1/2 left-0 right-0 h-0 -translate-y-1/2 border-t-2 border-dashed opacity-[0.08]"
              style={{ borderColor: "hsl(340, 82%, 52%)" }}
            />
          </div>

          {/* Tablet crosshair - more subtle */}
          <div className="hidden md:block lg:hidden absolute inset-0 pointer-events-none">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0 -translate-x-1/2 border-l border-dashed opacity-[0.05]"
              style={{ borderColor: "hsl(340, 82%, 52%)" }}
            />
            <div
              className="absolute top-1/2 left-0 right-0 h-0 -translate-y-1/2 border-t border-dashed opacity-[0.05]"
              style={{ borderColor: "hsl(340, 82%, 52%)" }}
            />
          </div>

          {/* White radial gradient behind content for readability */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(var(--background)/0.9),transparent_60%)] md:bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,hsl(var(--background)/0.85),transparent_55%)] 3xl:bg-[radial-gradient(ellipse_35%_45%_at_50%_50%,hsl(var(--background)/0.9),transparent_50%)]" />
        </div>

        {/* Beta Badge - Fixed at top */}
        <div className="pt-6 pb-2 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-midblue/10 border border-brand-purple/30 cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_0_20px_rgba(92,174,255,0.4)] hover:border-brand-midblue/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-midblue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-midblue"></span>
            </span>
            <span className="text-sm font-medium text-brand-midblue">Beta Release Coming Soon!</span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge Logo */}
              <div className="mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <img 
                  src={logoBadge} 
                  alt="BlanketSmith" 
                  className="h-36 sm:h-40 lg:h-44 w-auto mx-auto animate-float"
                />
              </div>

              {/* Brand Name */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "150ms" }}>
                BlanketSmith
              </h1>

              {/* Tagline */}
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-5 animate-fade-in" style={{ animationDelay: "200ms" }}>
                A Modern Tool for{" "}
                <span className="gradient-text">Modern Makers</span>
              </h2>

              {/* Subheadline */}
              <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
                BlanketSmith transforms your ideas into ready-to-use blanket patterns instantly. 
                Designed for crocheters and knitters who value precision, creativity, and a 
                streamlined workflow.
              </p>

              {/* CTA */}
              <div className="animate-fade-in pb-12" style={{ animationDelay: "400ms" }}>
                <Button variant="gradient" size="xl" asChild>
                  <Link to="/beta-signup">
                    Sign Up for the Beta
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is BlanketSmith? Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              What is BlanketSmith?
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-6">
              BlanketSmith is a browser-based pattern generation tool built specifically for 
              crocheters and knitters. Whether you're designing your first granny square or 
              perfecting an intricate colorwork blanket, our tool transforms your creative 
              vision into precise, ready-to-follow patterns.
            </p>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed">
              No more hand-drawing grids or wrestling with spreadsheets. BlanketSmith brings 
              pattern creation into the modern era—with an intuitive interface, instant 
              previews, and export options that work for your workflow.
            </p>
          </div>
          
          {/* Tool Mockup */}
          <ToolMockup />
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Feature Highlights
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
              Every feature is designed with input from crocheters and knitters. 
              No fluff—just the tools you need to bring your patterns to life.
            </p>
          </div>

          {/* Feature Tour Mockup */}
          <FeatureTourMockup />

          <div className="mt-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-midblue/10 to-brand-cyan/10 border border-brand-purple/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(92,174,255,0.4)] group-hover:border-brand-midblue/50 transition-all duration-300 ease-out">
                  <feature.icon className="w-6 h-6 text-brand-midblue" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the Platform */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                About BlanketSmith
              </h2>
              <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
                We're building more than a tool—we're nurturing a community of makers 
                who believe creativity should be accessible to everyone.
              </p>
              
              {/* Community Image */}
              <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-soft border border-border">
                <img 
                  src={communityCrafting} 
                  alt="Makers collaborating on colorful blanket and quilting projects" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platformValues.map((value, index) => (
                <div 
                  key={value.title}
                  className="text-center p-6"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-brand-midblue/10 border border-brand-purple/30 flex items-center justify-center mb-5 hover:scale-110 hover:shadow-[0_0_20px_rgba(92,174,255,0.4)] hover:border-brand-midblue/50 transition-all duration-300 ease-out">
                    <value.icon className="w-7 h-7 text-brand-midblue" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="font-sans text-muted-foreground mb-6">
                BlanketSmith is currently in beta. We're actively developing new features 
                and listening to feedback from makers like you.
              </p>
              <Button variant="gradient" size="lg" asChild>
                <Link to="/partnerships">
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Pattern Workflow?
            </h2>
            <p className="font-sans text-primary-foreground/80 text-lg mb-10">
              Join the makers already testing BlanketSmith. 
              Sign up today and be part of the future of pattern creation.
            </p>
            <Button 
              size="xl" 
              className="bg-background text-foreground hover:bg-background/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg font-sans"
              asChild
            >
              <Link to="/beta-signup">
                Sign Up for the Beta
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
