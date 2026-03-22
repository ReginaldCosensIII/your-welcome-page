import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import betaUIScreenshot from "@/assets/beta-ui-screenshot.png";
import { MobileMockup } from "./MobileMockup";
import { MockupOverlayCard } from "./MockupOverlayCard";
import { Eye, Brush, Smartphone } from "lucide-react";

export function ToolMockup() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Phase 1 (0–0.20): Browser animates in
  // Phase 2 (0.20–0.35): Left overlay slides in
  // Phase 3 (0.35–0.50): Right overlay slides in
  // Phase 4 (0.50–0.70): Mobile mockup animates in
  // Phase 5 (0.70–0.85): Bottom overlay animates up
  // Phase 6 (0.85–1.0): Hold / settle

  const browserRotateX = useTransform(scrollYProgress, [0, 0.2], [45, 0]);
  const browserRotateY = useTransform(scrollYProgress, [0, 0.2], [-20, 0]);
  const browserRotateZ = useTransform(scrollYProgress, [0, 0.2], [5, 0]);
  const browserScale = useTransform(scrollYProgress, [0, 0.2], [0.75, 1]);
  const browserOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const browserY = useTransform(scrollYProgress, [0, 0.2], [60, 0]);

  const shadowOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const shadowScale = useTransform(scrollYProgress, [0, 0.2], [0.85, 1]);
  const shadowY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  const topBarY = useTransform(scrollYProgress, [0, 0.2], [-8, 0]);
  const screenshotY = useTransform(scrollYProgress, [0, 0.2], [15, 0]);
  const screenshotScale = useTransform(scrollYProgress, [0, 0.2], [1.02, 1]);

  return (
    <div
      ref={containerRef}
      className="relative mt-8 lg:mt-10 overflow-visible min-h-[110vh] sm:min-h-[160vh] md:min-h-[200vh] lg:min-h-[300vh] pb-24 sm:pb-32 lg:pb-40"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-start overflow-visible pt-6 pb-6 lg:pt-8 lg:pb-12">
        {/* Main mockup area with overlay cards */}
        <div className="relative max-w-5xl mx-auto w-full px-4">
          {/* Overlay: Left card – Real-Time Preview */}
          <MockupOverlayCard
            scrollYProgress={scrollYProgress}
            range={[0.20, 0.35]}
            direction="left"
            icon={Eye}
            title="Real-Time Preview"
            description="Watch your pattern come alive as you place each stitch. Every change renders instantly—no refresh, no wait."
          />

          {/* Overlay: Right card – Smart Color Tools */}
          <MockupOverlayCard
            scrollYProgress={scrollYProgress}
            range={[0.35, 0.50]}
            direction="right"
            icon={Brush}
            title="Intelligent Color Tools"
            description="Automatic color harmony suggestions, contrast checking, and a curated palette library built for yarn and fiber arts."
          />

          {/* Browser Mockup */}
          <div className="w-full mx-auto" style={{ perspective: "1500px" }}>
            <motion.div
              style={{
                rotateX: browserRotateX,
                rotateY: browserRotateY,
                rotateZ: browserRotateZ,
                scale: browserScale,
                opacity: browserOpacity,
                y: browserY,
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                style={{ opacity: shadowOpacity, scale: shadowScale, y: shadowY }}
                className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-b from-primary/20 to-accent/10 blur-3xl transform translate-y-8 scale-95"
              />

              <div className="rounded-xl overflow-hidden border border-border bg-card relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)]">
                <motion.div
                  style={{ y: topBarY }}
                  className="bg-secondary/80 border-b border-border px-1 py-0.5 sm:px-3 sm:py-2 md:px-4 md:py-3 flex items-center gap-0.5 sm:gap-2 md:gap-3 relative z-10"
                >
                  <div className="flex items-center gap-[2px] sm:gap-1.5 md:gap-2">
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-400/80" />
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 max-w-md mx-auto">
                    <div className="bg-background/60 rounded px-1 py-[2px] sm:px-3 sm:py-1 md:px-4 md:py-1.5 text-[6px] sm:text-xs md:text-sm text-muted-foreground text-center border border-border/50">
                      app.blanketsmith.com
                    </div>
                  </div>
                  <div className="w-3 sm:w-10 md:w-14" />
                </motion.div>

                <motion.div
                  style={{ y: screenshotY, scale: screenshotScale }}
                  className="relative bg-background origin-top"
                >
                  <img
                    src={betaUIScreenshot}
                    alt="BlanketSmith Pattern Tool Interface"
                    className="w-full h-auto block"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Overlay: Mobile & Touch Support */}
          <MockupOverlayCard
            scrollYProgress={scrollYProgress}
            range={[0.70, 0.85]}
            direction="bottom"
            icon={Smartphone}
            title="Full Power, Any Screen"
            description="Touch-optimized controls, responsive editor, and smooth gestures. The complete BlanketSmith experience travels with you on phone and tablet."
          />
        </div>

        {/* Mobile Mockup */}
        <div className="w-[180px] sm:w-[220px] mx-auto mt-6 sm:mt-8 lg:mt-10 relative z-10 -translate-y-24 sm:-translate-y-32 lg:-translate-y-40">
          <MobileMockup scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
