import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import logoBadge from "@/assets/logo-badge.svg";
import heroScreenshot from "@/assets/hero-screenshot.png";
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
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Screenshot with Effects */}
        <div className="absolute inset-0 -z-10">
          {/* Screenshot background */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={heroScreenshot} 
              alt="" 
              className="w-full h-full object-cover object-center scale-110"
              aria-hidden="true"
            />
            {/* Gradient overlay for readability - lighter to show more screenshot */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
            {/* Brand gradient accent overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/15" />
          </div>
          {/* Decorative blur orbs */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-15 blur-3xl rounded-full gradient-bg transform translate-x-1/3 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-10 blur-3xl rounded-full gradient-bg transform -translate-x-1/3 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge Logo */}
            <div className="mb-10 animate-fade-in">
              <img 
                src={logoBadge} 
                alt="BlanketSmith" 
                className="h-24 sm:h-28 lg:h-32 w-auto mx-auto animate-float"
              />
            </div>

            {/* Beta Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 gradient-bg"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Beta Release Coming Soon!</span>
            </div>

            {/* Brand Name */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "150ms" }}>
              BlanketSmith
            </h1>

            {/* Tagline */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              A Modern Tool for{" "}
              <span className="gradient-text">Modern Makers</span>
            </h2>

            {/* Subheadline */}
            <p className="font-sans text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "300ms" }}>
              BlanketSmith transforms your ideas into ready-to-use blanket patterns instantly. 
              Designed for crocheters and knitters who value precision, creativity, and a 
              streamlined workflow.
            </p>

            {/* CTA */}
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button variant="gradient" size="xl" asChild>
                <Link to="/beta-signup">
                  Sign Up for the Beta
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
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
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Feature Highlights
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
              Every feature is designed with input from crocheters and knitters. 
              No fluff—just the tools you need to bring your patterns to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
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
      </section>

      {/* About the Platform */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                About BlanketSmith
              </h2>
              <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg">
                We're building more than a tool—we're nurturing a community of makers 
                who believe creativity should be accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platformValues.map((value, index) => (
                <div 
                  key={value.title}
                  className="text-center p-6"
                >
                  <div className="w-14 h-14 mx-auto rounded-full gradient-bg flex items-center justify-center mb-5">
                    <value.icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
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
              <Button variant="gradient-outline" size="lg" asChild>
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
              className="bg-background text-foreground hover:bg-background/90 shadow-lg font-sans"
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
