import { motion, MotionValue, useTransform } from "framer-motion";
import { Smartphone, Sparkles } from "lucide-react";

interface MobileMockupProps {
  scrollYProgress: MotionValue<number>;
}

export function MobileMockup({ scrollYProgress }: MobileMockupProps) {
  // Phase 3 (0.5-0.9): Mobile animates in AFTER browser has settled
  // This creates distinct scroll-locked phases
  
  // Staggered depth: rises from below with forward depth shift
  const translateZ = useTransform(scrollYProgress, [0.5, 0.9], [-40, 60]);
  const scale = useTransform(scrollYProgress, [0.5, 0.9], [0.8, 1]);
  
  // Fade in as focus shifts to mobile
  const opacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  
  // Rise up from below
  const y = useTransform(scrollYProgress, [0.5, 0.9], [60, 0]);
  
  // Dynamic shadow grows as mobile comes forward
  const shadowOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 0.6]);
  const shadowBlur = useTransform(scrollYProgress, [0.5, 0.9], [20, 60]);
  const shadowY = useTransform(scrollYProgress, [0.5, 0.9], [10, 35]);
  const shadowScale = useTransform(scrollYProgress, [0.5, 0.9], [0.7, 0.85]);

  // Create the filter transform outside of render
  const shadowFilter = useTransform(shadowBlur, (blur) => `blur(${blur}px)`);
  const ambientOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 0.3]);

  return (
    <div 
      className="relative w-full"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{ 
          opacity,
          y,
          scale,
          translateZ,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full"
      >
        {/* Dynamic shadow - more dramatic depth effect */}
        <motion.div
          style={{ 
            opacity: shadowOpacity,
            filter: shadowFilter,
            y: shadowY,
            scale: shadowScale
          }}
          className="absolute inset-0 -z-10 rounded-[2rem] sm:rounded-[2.5rem] bg-foreground/40"
        />
        
        {/* Secondary ambient shadow for more depth */}
        <motion.div
          style={{ 
            opacity: ambientOpacity,
          }}
          className="absolute inset-0 -z-20 rounded-[2rem] sm:rounded-[2.5rem] bg-primary/20 blur-2xl transform translate-y-8 scale-110"
        />
        
        {/* Phone Frame - smaller border for compact size */}
        <div className="w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border-[4px] sm:border-[5px] border-foreground/90 bg-foreground/90 relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4),0_12px_24px_-8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
          {/* Phone Notch/Dynamic Island - scaled down */}
          <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-1.5 sm:h-2 bg-foreground/90 rounded-full z-20" />
          
          {/* Screen Content - Branded Placeholder */}
          <div className="bg-background relative overflow-hidden w-full">
            {/* Aspect ratio wrapper for mobile (9:19.5) */}
            <div className="relative w-full" style={{ aspectRatio: "9/19.5" }}>
              {/* Gradient Background */}
              <div className="absolute inset-0 gradient-bg opacity-10" />
              
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, hsl(var(--muted-foreground)) 1px, transparent 1px),
                    linear-gradient(to bottom, hsl(var(--muted-foreground)) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
              
              {/* Centered Content - compact sizing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-5">
                {/* Icon Container */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-bg flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-sm sm:text-base font-display font-bold text-foreground mb-1 text-center">
                  Mobile App
                </h3>
                
                {/* Subtitle */}
                <p className="text-[10px] sm:text-xs text-muted-foreground text-center max-w-[120px] mb-2 sm:mb-3">
                  Create patterns anywhere, anytime
                </p>
                
                {/* Coming Soon Badge */}
                <div className="inline-flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full bg-brand-midblue/10 border border-brand-purple/30">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-midblue" />
                  <span className="text-[8px] sm:text-[10px] font-medium text-brand-midblue">Coming Soon</span>
                </div>
              </div>
              
              {/* Top gradient overlay */}
              <div className="absolute inset-x-0 top-0 h-8 sm:h-10 bg-gradient-to-b from-background/40 to-transparent pointer-events-none" />
              
              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Phone Bottom Bar Indicator - scaled down */}
        <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-0.5 sm:h-1 bg-background/60 rounded-full" />
      </motion.div>
    </div>
  );
}
