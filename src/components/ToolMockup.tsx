import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import heroScreenshot from "@/assets/hero-screenshot.png";

export function ToolMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See It in Action
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            A clean, intuitive interface designed to make pattern creation effortless.
          </p>
        </div>

        {/* 3D Perspective Container */}
        <div 
          ref={ref}
          className="max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            initial={{ 
              rotateX: 25, 
              rotateY: -15, 
              scale: 0.9,
              opacity: 0 
            }}
            animate={isInView ? { 
              rotateX: 0, 
              rotateY: 0, 
              scale: 1,
              opacity: 1 
            } : {}}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Browser Frame */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border bg-card">
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
              <div className="relative">
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
    </section>
  );
}
