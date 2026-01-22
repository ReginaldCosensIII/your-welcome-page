import { motion, MotionValue, useTransform } from "framer-motion";
import { Smartphone, Sparkles } from "lucide-react";

interface MobileMockupProps {
  scrollYProgress: MotionValue<number>;
}

export function MobileMockup({ scrollYProgress }: MobileMockupProps) {
  // Mobile animates AFTER browser settles (scroll 0.5 to 0.85)
  // Creates a "scroll lock" effect where user scrolls but only mobile moves
  
  // Staggered depth: rises from below with forward depth shift
  const translateZ = useTransform(scrollYProgress, [0.5, 0.85], [-60, 30]);
  const scale = useTransform(scrollYProgress, [0.5, 0.85], [0.85, 1]);
  
  // Fade in as focus shifts to mobile
  const opacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  
  // Rise up from below
  const y = useTransform(scrollYProgress, [0.5, 0.85], [80, 0]);
  
  // Dynamic shadow grows as mobile comes forward
  const shadowOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);
  const shadowBlur = useTransform(scrollYProgress, [0.55, 0.85], [15, 40]);
  const shadowY = useTransform(scrollYProgress, [0.55, 0.85], [8, 24]);

  return (
    <div 
      className="relative z-20"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{ 
          opacity,
          y,
          scale,
          z: translateZ,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Dynamic shadow */}
        <motion.div
          style={{ 
            opacity: shadowOpacity,
            filter: useTransform(shadowBlur, (blur) => `blur(${blur}px)`),
            y: shadowY
          }}
          className="absolute inset-0 -z-10 rounded-[2.5rem] sm:rounded-[3rem] bg-foreground/25 transform scale-90"
        />
        
        {/* Phone Frame */}
        <div className="rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-[5px] sm:border-[6px] md:border-[8px] border-foreground/90 bg-foreground/90 relative shadow-[0_35px_70px_-15px_rgba(0,0,0,0.35),0_20px_40px_-20px_rgba(0,0,0,0.3)]">
          {/* Phone Notch/Dynamic Island */}
          <div className="absolute top-2 sm:top-2.5 md:top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-2 sm:h-2.5 md:h-3 bg-foreground/90 rounded-full z-20" />
          
          {/* Screen Content - Branded Placeholder */}
          <div className="bg-background relative overflow-hidden">
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
              
              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
                {/* Icon Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl gradient-bg flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                  <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-foreground mb-2 text-center">
                  Mobile App
                </h3>
                
                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-muted-foreground text-center max-w-[140px] sm:max-w-[160px] mb-4 sm:mb-6">
                  Create patterns anywhere, anytime
                </p>
                
                {/* Coming Soon Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-midblue/10 border border-brand-purple/30">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-brand-midblue" />
                  <span className="text-[10px] sm:text-xs font-medium text-brand-midblue">Coming Soon</span>
                </div>
              </div>
              
              {/* Top gradient overlay */}
              <div className="absolute inset-x-0 top-0 h-8 sm:h-10 bg-gradient-to-b from-background/40 to-transparent pointer-events-none" />
              
              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Phone Bottom Bar Indicator */}
        <div className="absolute bottom-2 sm:bottom-2.5 md:bottom-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 sm:h-1 bg-background/60 rounded-full" />
      </motion.div>
    </div>
  );
}
