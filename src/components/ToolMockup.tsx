import { useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import betaUIScreenshot from "@/assets/beta-ui-screenshot.png";
import { MobileMockup } from "./MobileMockup";
import { useIsMobile } from "@/hooks/use-mobile";

export function ToolMockup() {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  
  // Scroll through this tall container drives the animations
  // The sticky inner element stays in place while animations play
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"] // Start animation when section enters viewport
  });

  // On mobile we render a non-scroll-locked layout (auto height) to avoid large
  // reserved whitespace before the next section.
  const mobileStaticProgress = useMotionValue(1);
  const effectiveProgress = isMobile ? mobileStaticProgress : scrollYProgress;

  // Phase 1 (0-0.4): Browser animates in
  // Phase 2 (0.4-0.5): Hold - browser settled
  // Phase 3 (0.5-0.9): Mobile animates in
  // Phase 4 (0.9-1): Hold - both settled, then scroll continues

  // Browser animation: completes in first 40% of scroll
  const browserRotateX = useTransform(effectiveProgress, [0, 0.4], [45, 0]);
  const browserRotateY = useTransform(effectiveProgress, [0, 0.4], [-20, 0]);
  const browserRotateZ = useTransform(effectiveProgress, [0, 0.4], [5, 0]);
  const browserScale = useTransform(effectiveProgress, [0, 0.4], [0.75, 1]);
  const browserOpacity = useTransform(effectiveProgress, [0, 0.15], [0, 1]);
  const browserY = useTransform(effectiveProgress, [0, 0.4], [60, 0]);
  
  // Browser shadow
  const shadowOpacity = useTransform(effectiveProgress, [0, 0.3], [0, 1]);
  const shadowScale = useTransform(effectiveProgress, [0, 0.4], [0.85, 1]);
  const shadowY = useTransform(effectiveProgress, [0, 0.4], [40, 0]);
  
  // Browser inner parallax
  const topBarY = useTransform(effectiveProgress, [0, 0.4], [-8, 0]);
  const screenshotY = useTransform(effectiveProgress, [0, 0.4], [15, 0]);
  const screenshotScale = useTransform(effectiveProgress, [0, 0.4], [1.02, 1]);

  return (
    <div 
      ref={containerRef}
      className="relative mt-8 lg:mt-10 h-auto md:h-[160vh] lg:h-[200vh]" // Mobile: auto height; md+: scroll-locked container
    >
      {/* Sticky container - stays in view while scrolling drives animations */}
      <div className="relative flex flex-col items-center justify-start overflow-hidden pt-6 pb-2 md:sticky md:top-0 md:h-screen md:pb-6 lg:pt-8 lg:pb-12">
        {/* Centered Browser Mockup */}
        <div className="max-w-5xl mx-auto w-full px-4">
          <div 
            className="w-full mx-auto"
            style={{ perspective: "1500px" }}
          >
            <motion.div
              style={{ 
                rotateX: browserRotateX, 
                rotateY: browserRotateY, 
                rotateZ: browserRotateZ,
                scale: browserScale,
                opacity: browserOpacity,
                y: browserY,
                transformStyle: "preserve-3d" 
              }}
            >
              {/* Animated Shadow Layer */}
              <motion.div
                style={{
                  opacity: shadowOpacity,
                  scale: shadowScale,
                  y: shadowY
                }}
                className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-b from-primary/20 to-accent/10 blur-3xl transform translate-y-8 scale-95"
              />
              
              {/* Browser Frame */}
              <div className="rounded-xl overflow-hidden border border-border bg-card relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)]">
                {/* Browser Top Bar */}
                <motion.div 
                  style={{ y: topBarY }}
                  className="bg-secondary/80 border-b border-border px-1 py-0.5 sm:px-3 sm:py-2 md:px-4 md:py-3 flex items-center gap-0.5 sm:gap-2 md:gap-3 relative z-10"
                >
                  {/* Traffic Lights - ultra compact on mobile */}
                  <div className="flex items-center gap-[2px] sm:gap-1.5 md:gap-2">
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-400/80" />
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-400/80" />
                  </div>
                  
                  {/* URL Bar - smaller on mobile */}
                  <div className="flex-1 max-w-md mx-auto">
                    <div className="bg-background/60 rounded px-1 py-[2px] sm:px-3 sm:py-1 md:px-4 md:py-1.5 text-[6px] sm:text-xs md:text-sm text-muted-foreground text-center border border-border/50">
                      app.blanketsmith.com
                    </div>
                  </div>
                  
                  {/* Spacer for symmetry */}
                  <div className="w-3 sm:w-10 md:w-14" />
                </motion.div>

                {/* Screenshot */}
                <motion.div 
                  style={{ y: screenshotY, scale: screenshotScale }}
                  className="relative bg-background origin-top"
                >
                  <img 
                    src={betaUIScreenshot} 
                    alt="BlanketSmith Pattern Tool Interface" 
                    className="w-full h-auto block"
                  />
                  
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Mockup - Overlapping bottom of browser, smaller and with depth */}
        <div className="w-[180px] sm:w-[220px] mx-auto -mt-24 sm:-mt-32 lg:-mt-40 relative z-30">
          <MobileMockup scrollYProgress={effectiveProgress} />
        </div>
      </div>
    </div>
  );
}
