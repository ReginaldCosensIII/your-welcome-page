import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import betaUIScreenshot from "@/assets/beta-ui-screenshot.png";
import { MobileMockup } from "./MobileMockup";

export function ToolMockup() {
  const containerRef = useRef(null);
  
  // Shared scroll progress for coordinated animations
  // Extended range: browser animates first, then mobile continues after
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  // Browser animation: completes in first 60% of scroll
  const browserRotateX = useTransform(scrollYProgress, [0, 0.6], [45, 0]);
  const browserRotateY = useTransform(scrollYProgress, [0, 0.6], [-20, 0]);
  const browserRotateZ = useTransform(scrollYProgress, [0, 0.6], [5, 0]);
  const browserScale = useTransform(scrollYProgress, [0, 0.6], [0.75, 1]);
  const browserOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const browserY = useTransform(scrollYProgress, [0, 0.6], [60, 0]);
  
  // Browser shadow
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const shadowScale = useTransform(scrollYProgress, [0, 0.6], [0.85, 1]);
  const shadowY = useTransform(scrollYProgress, [0, 0.6], [40, 0]);
  
  // Browser inner parallax
  const topBarY = useTransform(scrollYProgress, [0, 0.6], [-8, 0]);
  const screenshotY = useTransform(scrollYProgress, [0, 0.6], [15, 0]);
  const screenshotScale = useTransform(scrollYProgress, [0, 0.6], [1.02, 1]);
  
  // As mobile comes forward, browser slightly recedes (focus shift)
  const browserRecede = useTransform(scrollYProgress, [0.7, 1], [1, 0.97]);
  const browserDim = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  return (
    <div 
      ref={containerRef}
      className="mt-8 lg:mt-12 overflow-visible pb-16 lg:pb-24"
    >
      {/* Container for both mockups */}
      <div className="max-w-5xl mx-auto relative">
        
        {/* Browser Mockup - Main element */}
        <div 
          className="w-full lg:w-[85%]"
          style={{ perspective: "1500px" }}
        >
          <motion.div
            style={{ 
              rotateX: browserRotateX, 
              rotateY: browserRotateY, 
              rotateZ: browserRotateZ,
              scale: useTransform(
                [browserScale, browserRecede],
                ([s, r]) => (s as number) * (r as number)
              ),
              opacity: useTransform(
                [browserOpacity, browserDim],
                ([o, d]) => (o as number) * (d as number)
              ),
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
                className="bg-secondary/80 border-b border-border px-1.5 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 flex items-center gap-1 sm:gap-2 md:gap-3 relative z-10"
              >
                {/* Traffic Lights */}
                <div className="flex items-center gap-0.5 sm:gap-1.5 md:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-400/80" />
                  <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-400/80" />
                </div>
                
                {/* URL Bar */}
                <div className="flex-1 max-w-md mx-auto">
                  <div className="bg-background/60 rounded px-1.5 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 text-[8px] sm:text-xs md:text-sm text-muted-foreground text-center border border-border/50">
                    app.blanketsmith.com
                  </div>
                </div>
                
                {/* Spacer for symmetry */}
                <div className="w-4 sm:w-10 md:w-14" />
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

        {/* Mobile Mockup - Positioned to overlap bottom-right, animates after browser */}
        <div className="absolute bottom-0 right-0 w-[28%] sm:w-[24%] md:w-[22%] lg:w-[20%] translate-y-[25%] translate-x-[2%] sm:translate-x-[5%]">
          <MobileMockup scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
