import { motion, MotionValue, useTransform } from "framer-motion";
import mobileUIScreenshot from "@/assets/mobile-ui-screenshot.png";

interface MobileMockupProps {
  scrollYProgress: MotionValue<number>;
}

export function MobileMockup({ scrollYProgress }: MobileMockupProps) {
  // Mobile animates AFTER browser is in place (scroll 0.7 to 1.0)
  // This creates the "focus shift" effect - longer, more deliberate animation
  
  // Staggered depth: starts further back (negative Z), moves forward
  const translateZ = useTransform(scrollYProgress, [0.65, 1], [-80, 40]);
  const scale = useTransform(scrollYProgress, [0.65, 1], [0.8, 1.05]);
  
  // Fade in as focus shifts to mobile
  const opacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);
  
  // Subtle movement from bottom-right towards center-right
  const x = useTransform(scrollYProgress, [0.65, 1], [40, 0]);
  const y = useTransform(scrollYProgress, [0.65, 1], [60, 0]);
  
  // Focus shift: shadow grows more prominent as mobile comes forward
  const shadowOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const shadowBlur = useTransform(scrollYProgress, [0.7, 1], [20, 50]);
  const shadowY = useTransform(scrollYProgress, [0.7, 1], [10, 30]);

  return (
    <div 
      className="relative z-20"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{ 
          opacity,
          x,
          y,
          scale,
          z: translateZ,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Dynamic shadow that grows as mobile comes forward - creates depth */}
        <motion.div
          style={{ 
            opacity: shadowOpacity,
            filter: useTransform(shadowBlur, (blur) => `blur(${blur}px)`),
            y: shadowY
          }}
          className="absolute inset-0 -z-10 rounded-[2rem] sm:rounded-[2.5rem] bg-foreground/30 transform scale-90"
        />
        
        {/* Phone Frame - sized to contain screenshot properly */}
        <div className="rounded-[1.75rem] sm:rounded-[2.25rem] md:rounded-[2.75rem] overflow-hidden border-[4px] sm:border-[5px] md:border-[6px] border-foreground/90 bg-foreground/90 relative shadow-[0_35px_70px_-15px_rgba(0,0,0,0.4),0_20px_40px_-20px_rgba(0,0,0,0.35)]">
          {/* Phone Notch/Dynamic Island */}
          <div className="absolute top-1.5 sm:top-2 md:top-2.5 left-1/2 -translate-x-1/2 w-10 sm:w-14 md:w-16 h-1.5 sm:h-2 md:h-2.5 bg-foreground/90 rounded-full z-20" />
          
          {/* Screen Content - with proper aspect ratio container */}
          <div className="bg-background relative overflow-hidden">
            {/* Aspect ratio wrapper for mobile screenshot (roughly 9:19.5 for modern phones) */}
            <div className="relative w-full" style={{ aspectRatio: "9/19.5" }}>
              <img 
                src={mobileUIScreenshot} 
                alt="BlanketSmith Mobile App Interface" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Subtle gradient overlays for polish */}
            <div className="absolute inset-x-0 top-0 h-8 sm:h-10 bg-gradient-to-b from-background/20 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
          </div>
        </div>
        
        {/* Phone Bottom Bar Indicator */}
        <div className="absolute bottom-1.5 sm:bottom-2 md:bottom-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-background/60 rounded-full" />
      </motion.div>
    </div>
  );
}
