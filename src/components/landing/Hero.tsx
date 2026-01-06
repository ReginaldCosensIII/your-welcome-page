import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-subtle" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft mb-8">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">Introducing our new platform</span>
        </div>
        
        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6">
          Build something{" "}
          <span className="text-gradient">beautiful</span>{" "}
          today
        </h1>
        
        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          The all-in-one platform that helps you create, launch, and scale your ideas faster than ever before.
        </p>
        
        {/* CTAs */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl">
            Start for free
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="hero-outline" size="xl">
            Watch demo
          </Button>
        </div>
        
        {/* Social proof */}
        <div className="animate-fade-up-delay-3 mt-16 flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ companies worldwide</p>
          <div className="flex items-center gap-8 opacity-50">
            <div className="text-xl font-semibold text-foreground">Acme</div>
            <div className="text-xl font-semibold text-foreground">Globex</div>
            <div className="text-xl font-semibold text-foreground">Soylent</div>
            <div className="text-xl font-semibold text-foreground hidden sm:block">Initech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
