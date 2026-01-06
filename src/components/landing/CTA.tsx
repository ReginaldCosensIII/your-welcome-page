import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="pricing" className="py-24 bg-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Join thousands of teams who are already building the future with our platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="accent" size="xl">
            Start your free trial
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            variant="hero-outline" 
            size="xl"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Talk to sales
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-primary-foreground/60">
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
