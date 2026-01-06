import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroScreenshot from "@/assets/hero-screenshot.png";

export function ToolMockup() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  // Transform scroll progress to animation values
  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  
  // Shadow transforms
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const shadowScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const shadowY = useTransform(scrollYProgress, [0, 1], [40, 0]);

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
              rotateX, 
              rotateY, 
              rotateZ,
              scale,
              opacity,
              y,
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
              <div className="bg-secondary/80 border-b border-border px-4 py-3 flex items-center gap-3">
                {/* Traffic Lights */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                
                {/* URL Bar */}
                <div className="flex-1 max-w-md mx-auto">
                  <div className="bg-background/60 rounded-md px-4 py-1.5 text-sm text-muted-foreground text-center border border-border/50">
                    app.blanketsmith.com
                  </div>
                </div>
                
                {/* Spacer for symmetry */}
                <div className="w-14" />
              </div>

              {/* Screenshot */}
              <div className="relative bg-background">
                <img 
                  src={heroScreenshot} 
                  alt="BlanketSmith Pattern Tool Interface" 
                  className="w-full h-auto block"
                />
                
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
