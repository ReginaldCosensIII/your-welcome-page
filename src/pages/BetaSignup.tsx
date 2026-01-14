import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import betaCommunityImage from "@/assets/beta-community.jpg";

const betaPerks = [
  "Full access to all beta features",
  "Priority support from the team",
  "Direct influence on the roadmap",
  "Free during the beta period",
];

export default function BetaSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "You're on the list!",
      description: "We'll be in touch soon with your beta access details.",
    });
  };

  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Column - Info */}
              <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 gradient-bg"></span>
                  </span>
                  <span className="text-xs font-medium text-foreground">Limited Beta Spots</span>
                </div>

                <div className="mb-8 rounded-2xl overflow-hidden border border-border shadow-lg">
                  <img 
                    src={betaCommunityImage} 
                    alt="Crafters collaborating on colorful blanket squares" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Join the BlanketSmith Beta
                </h1>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Be among the first to experience a new way to create blanket patterns. 
                  Get early access, shape the product, and connect directly with our team.
                </p>

                <ul className="space-y-4 mb-8">
                  {betaPerks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">What to expect</p>
                      <p className="text-sm text-muted-foreground">
                        After signing up, you'll receive an email with instructions to 
                        access BlanketSmith. We'll also keep you updated on new features 
                        and ask for your feedback along the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:sticky lg:top-28">
                {isSubmitted ? (
                  <div className="rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      You're on the list!
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Thanks for joining the BlanketSmith beta. We'll send you access 
                      details and next steps to your email shortly.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      In the meantime, check your inbox for a confirmation email.
                    </p>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-border bg-card p-8 lg:p-12"
                  >
                    <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                      Sign up for beta access
                    </h2>

                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Jane" 
                            required 
                            maxLength={50}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Maker" 
                            required 
                            maxLength={50}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="jane@example.com" 
                          required 
                          maxLength={255}
                        />
                        <p className="text-xs text-muted-foreground">
                          We'll send your beta access details here.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="craft">Primary craft</Label>
                        <select 
                          id="craft"
                          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          required
                        >
                          <option value="">Select your craft</option>
                          <option value="crochet">Crochet</option>
                          <option value="knitting">Knitting</option>
                          <option value="both">Both crochet and knitting</option>
                          <option value="other">Other fiber arts</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience level</Label>
                        <select 
                          id="experience"
                          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          required
                        >
                          <option value="">Select your level</option>
                          <option value="beginner">Beginner (0-2 years)</option>
                          <option value="intermediate">Intermediate (2-5 years)</option>
                          <option value="advanced">Advanced (5+ years)</option>
                          <option value="professional">Professional / Designer</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interest">What interests you most about BlanketSmith? (optional)</Label>
                        <Textarea 
                          id="interest"
                          placeholder="Tell us what you're hoping to create or any features you're excited about..."
                          className="min-h-[100px] resize-none"
                          maxLength={500}
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      variant="gradient" 
                      size="lg" 
                      className="w-full mt-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Signing up..."
                      ) : (
                        <>
                          Join the Beta
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By signing up, you agree to receive product updates and beta 
                      communications from BlanketSmith.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
