import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import mobileUIScreenshot from "@/assets/mobile-ui-screenshot.png";

export function MobileMockup() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  // Float-up parallax animation - slower, organic feel
  // Starts later and moves slower than browser mockup for "catch-up" effect
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [120, 80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  
  // Subtle rotation for organic feel
  const rotateZ = useTransform(scrollYProgress, [0, 1], [3, 0]);
  
  // Shadow animation
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <div 
      ref={ref}
      className="relative z-10"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ 
          y,
          opacity,
          scale,
          rotateZ,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Animated Shadow */}
        <motion.div
          style={{ opacity: shadowOpacity }}
          className="absolute inset-0 -z-10 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-primary/15 to-accent/10 blur-2xl transform translate-y-4 scale-95"
        />
        
        {/* Phone Frame */}
        <div className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-[3px] sm:border-4 md:border-[6px] border-foreground/90 bg-foreground/90 relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_15px_30px_-15px_rgba(0,0,0,0.3)]">
          {/* Phone Notch/Dynamic Island */}
          <div className="absolute top-1 sm:top-1.5 md:top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 md:w-20 h-1.5 sm:h-2 md:h-2.5 bg-foreground/90 rounded-full z-20" />
          
          {/* Screen Content */}
          <div className="bg-background relative">
            <img 
              src={mobileUIScreenshot} 
              alt="BlanketSmith Mobile App Interface" 
              className="w-full h-auto block"
            />
            
            {/* Subtle bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-card/40 to-transparent pointer-events-none" />
          </div>
        </div>
        
        {/* Phone Bottom Bar Indicator */}
        <div className="absolute bottom-1 sm:bottom-1.5 md:bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-background/50 rounded-full" />
      </motion.div>
    </div>
  );
}
