import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface OrbProps {
  className: string;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  sensitivity?: number;
  floatDuration?: number;
  floatDistance?: number;
}

function InteractiveOrb({ 
  className, 
  mouseX, 
  mouseY, 
  sensitivity = 0.02,
  floatDuration = 6,
  floatDistance = 15
}: OrbProps) {
  const springConfig = { stiffness: 50, damping: 30 };
  
  const x = useSpring(useTransform(mouseX, (v) => v * sensitivity), springConfig);
  const y = useSpring(useTransform(mouseY, (v) => v * sensitivity), springConfig);

  return (
    <motion.div
      className={className}
      style={{ x, y }}
      animate={{
        translateY: [0, -floatDistance, 0, floatDistance * 0.5, 0],
        translateX: [0, floatDistance * 0.3, 0, -floatDistance * 0.3, 0],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function StaticOrb({ 
  className, 
  floatDuration = 6,
  floatDistance = 10
}: { 
  className: string;
  floatDuration?: number;
  floatDistance?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        translateY: [0, -floatDistance, 0, floatDistance * 0.5, 0],
        translateX: [0, floatDistance * 0.3, 0, -floatDistance * 0.3, 0],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10">
      {/* Decorative blur orbs - symmetrical gradient orbs */}
      {isMobile ? (
        <>
          <StaticOrb 
            className="absolute top-0 right-0 w-[280px] h-[280px] opacity-20 blur-3xl rounded-full gradient-bg transform translate-x-[22%] -translate-y-[28%]"
            floatDuration={8}
            floatDistance={12}
          />
          <StaticOrb 
            className="absolute bottom-0 left-0 w-[260px] h-[260px] opacity-20 blur-3xl rounded-full gradient-bg transform -translate-x-[30%] translate-y-[32%]"
            floatDuration={10}
            floatDistance={10}
          />
        </>
      ) : (
        <>
          {/* Primary gradient orbs with mouse interaction */}
          <InteractiveOrb
            className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] 3xl:w-[600px] 3xl:h-[600px] opacity-20 lg:opacity-25 blur-3xl rounded-full gradient-bg transform translate-x-[22%] -translate-y-[28%] 3xl:translate-x-[15%] 3xl:-translate-y-[20%]"
            mouseX={mouseX}
            mouseY={mouseY}
            sensitivity={0.03}
            floatDuration={8}
            floatDistance={18}
          />
          <InteractiveOrb
            className="absolute bottom-0 left-0 w-[260px] h-[260px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] 3xl:w-[580px] 3xl:h-[580px] opacity-20 lg:opacity-25 blur-3xl rounded-full gradient-bg transform -translate-x-[30%] translate-y-[32%] 3xl:-translate-x-[20%] 3xl:translate-y-[22%]"
            mouseX={mouseX}
            mouseY={mouseY}
            sensitivity={-0.025}
            floatDuration={10}
            floatDistance={15}
          />
          
          {/* Cyan accent orbs in opposite corners */}
          <InteractiveOrb
            className="absolute top-0 left-0 w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] 3xl:w-[700px] 3xl:h-[700px] blur-3xl rounded-full accent-orb transform -translate-x-[24%] -translate-y-[26%] 3xl:-translate-x-[18%] 3xl:-translate-y-[18%]"
            mouseX={mouseX}
            mouseY={mouseY}
            sensitivity={-0.02}
            floatDuration={12}
            floatDistance={20}
          />
          <InteractiveOrb
            className="absolute bottom-0 right-0 w-[380px] h-[380px] lg:w-[450px] lg:h-[450px] 3xl:w-[580px] 3xl:h-[580px] blur-3xl rounded-full accent-orb transform translate-x-[32%] translate-y-[30%] 3xl:translate-x-[22%] 3xl:translate-y-[20%]"
            mouseX={mouseX}
            mouseY={mouseY}
            sensitivity={0.02}
            floatDuration={9}
            floatDistance={16}
          />
        </>
      )}
      
      {/* Graph paper texture with grid */}
      <div
        className="absolute inset-0 opacity-[0.025] md:opacity-[0.03] lg:opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--muted-foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--muted-foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Red crosshair guidelines pointing to content - desktop only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Vertical dashed line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-0 -translate-x-1/2 border-l-2 border-dashed opacity-[0.08]"
          style={{ borderColor: "hsl(340, 82%, 52%)" }}
        />
        {/* Horizontal dashed line - positioned at content center */}
        <div
          className="absolute top-1/2 left-0 right-0 h-0 -translate-y-1/2 border-t-2 border-dashed opacity-[0.08]"
          style={{ borderColor: "hsl(340, 82%, 52%)" }}
        />
      </div>

      {/* Tablet crosshair - more subtle */}
      <div className="hidden md:block lg:hidden absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-0 -translate-x-1/2 border-l border-dashed opacity-[0.05]"
          style={{ borderColor: "hsl(340, 82%, 52%)" }}
        />
        <div
          className="absolute top-1/2 left-0 right-0 h-0 -translate-y-1/2 border-t border-dashed opacity-[0.05]"
          style={{ borderColor: "hsl(340, 82%, 52%)" }}
        />
      </div>

      {/* White radial gradient behind content for readability */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(var(--background)/0.9),transparent_60%)] md:bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,hsl(var(--background)/0.85),transparent_55%)] 3xl:bg-[radial-gradient(ellipse_35%_45%_at_50%_50%,hsl(var(--background)/0.9),transparent_50%)]" />
    </div>
  );
}
