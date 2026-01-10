import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroScreenshot from "@/assets/hero-screenshot.png";

export function FeatureTourMockup() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  // Horizontal rotation animation (rotates in from the side)
  const rotateY = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  
  // Shadow animation
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <div className="mt-12 lg:mt-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* 3D Perspective Container */}
        <div 
          ref={ref}
          className="max-w-5xl mx-auto"
          style={{ perspective: "1500px" }}
        >
          <motion.div
            style={{ 
              rotateY, 
              scale,
              opacity,
              x,
              transformStyle: "preserve-3d" 
            }}
          >
            {/* Animated Shadow Layer */}
            <motion.div
              style={{
                opacity: shadowOpacity,
              }}
              className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-b from-primary/20 to-accent/10 blur-3xl transform translate-y-8 scale-95"
            />
            
            {/* Monitor Frame */}
            <div className="relative">
              {/* Monitor Screen */}
              <div className="rounded-xl overflow-hidden border border-border bg-card shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)]">
                {/* Browser Top Bar */}
                <div className="bg-secondary/80 border-b border-border px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-400/80" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-400/80" />
                  </div>
                  
                  {/* URL Bar */}
                  <div className="flex-1 max-w-md mx-auto">
                    <div className="bg-background/60 rounded-md px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 text-[10px] sm:text-xs md:text-sm text-muted-foreground text-center border border-border/50">
                      app.blanketsmith.com
                    </div>
                  </div>
                  
                  {/* Spacer for symmetry */}
                  <div className="w-6 sm:w-10 md:w-14" />
                </div>

                {/* Screenshot with Tour Overlay */}
                <div className="relative bg-background">
                  <img 
                    src={heroScreenshot} 
                    alt="BlanketSmith Pattern Tool Interface - Feature Tour" 
                    className="w-full h-auto block"
                  />
                  
                  {/* Tour Overlay */}
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex flex-col items-center justify-center">
                    <div className="text-center p-6 max-w-md">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground ml-1" />
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                        Interactive Feature Tour
                      </h3>
                      <p className="font-sans text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                        Take a guided walkthrough of BlanketSmith's powerful features and see how easy pattern creation can be.
                      </p>
                      <Button 
                        variant="gradient" 
                        size="lg"
                        className="pointer-events-none"
                        disabled
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start Tour
                        <span className="ml-2 text-xs opacity-70">(Coming Soon)</span>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
                </div>
              </div>
              
              {/* Monitor Stand */}
              <div className="flex justify-center mt-0">
                <div className="w-24 sm:w-32 h-6 sm:h-8 bg-gradient-to-b from-secondary to-muted rounded-b-lg border-x border-b border-border" />
              </div>
              <div className="flex justify-center -mt-1">
                <div className="w-40 sm:w-52 h-2 sm:h-3 bg-gradient-to-b from-muted to-secondary/50 rounded-b-full border-x border-b border-border" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
