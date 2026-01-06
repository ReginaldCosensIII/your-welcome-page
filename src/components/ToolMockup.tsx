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
          style={{ perspective: "1500px" }}
        >
          <motion.div
            initial={{ 
              rotateX: 45, 
              rotateY: -20, 
              rotateZ: 5,
              scale: 0.75,
              opacity: 0,
              y: 60
            }}
            animate={isInView ? { 
              rotateX: 0, 
              rotateY: 0, 
              rotateZ: 0,
              scale: 1,
              opacity: 1,
              y: 0
            } : {}}
            transition={{
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Animated Shadow Layer */}
            <motion.div
              initial={{ 
                opacity: 0,
                scale: 0.85,
                y: 40
              }}
              animate={isInView ? { 
                opacity: 1,
                scale: 1,
                y: 0
              } : {}}
              transition={{ 
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1
              }}
              className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-b from-primary/20 to-accent/10 blur-3xl transform translate-y-8 scale-95"
            />
            
            {/* Browser Frame */}
            <motion.div 
              className="rounded-xl overflow-hidden border border-border bg-card relative"
              initial={{ boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              animate={isInView ? { 
                boxShadow: "0 50px 100px -20px rgba(0,0,0,0.25), 0 30px 60px -30px rgba(0,0,0,0.3)"
              } : {}}
              transition={{ 
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
