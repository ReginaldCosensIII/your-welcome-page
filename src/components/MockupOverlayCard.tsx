import { motion, MotionValue, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MockupOverlayCardProps {
  scrollYProgress: MotionValue<number>;
  /** scroll range [start, end] within 0-1 */
  range: [number, number];
  direction: "left" | "right" | "bottom";
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: string;
}

export function MockupOverlayCard({
  scrollYProgress,
  range,
  direction,
  icon: Icon,
  title,
  description,
}: MockupOverlayCardProps) {
  const [start, end] = range;

  const opacity = useTransform(scrollYProgress, [start, start + (end - start) * 0.4], [0, 1]);

  const x = useTransform(
    scrollYProgress,
    [start, end],
    direction === "left" ? [-120, 0] : direction === "right" ? [120, 0] : [0, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, end],
    direction === "bottom" ? [80, 0] : [0, 0]
  );

  const scale = useTransform(scrollYProgress, [start, end], [0.85, 1]);

  // Position classes based on direction
  const positionClass =
    direction === "left"
      ? "left-0 top-1/2 -translate-y-1/2 -translate-x-[15%] sm:-translate-x-[25%] lg:-translate-x-[35%]"
      : direction === "right"
      ? "right-0 top-1/3 translate-x-[15%] sm:translate-x-[25%] lg:translate-x-[35%]"
      : "bottom-4 left-1/2 -translate-x-1/2";

  return (
    <motion.div
      style={{ opacity, x, y, scale }}
      className={`absolute z-30 ${positionClass} w-[200px] sm:w-[240px] lg:w-[280px]`}
    >
      <div className="rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3),0_0_30px_rgba(124,42,232,0.1)] p-4 sm:p-5 lg:p-6">
        {/* Gradient accent line */}
        <div className="h-1 w-12 rounded-full mb-3 sm:mb-4" style={{ background: "var(--gradient-brand)" }} />

        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-midblue/15 to-brand-cyan/15 border border-brand-purple/20 flex items-center justify-center mb-3">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-midblue" strokeWidth={1.5} />
        </div>

        <h4 className="font-display text-sm sm:text-base font-semibold text-foreground mb-1.5">
          {title}
        </h4>
        <p className="font-sans text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
