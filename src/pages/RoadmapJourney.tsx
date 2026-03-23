import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Wrench,
  UserPlus,
  Rocket,
  MessageSquare,
  Globe,
  Users,
  Store,
  TrendingUp,
  X,
  ChevronRight,
  Sparkles,
  Map,
} from "lucide-react";

/* ─── data ─── */
type PhaseStatus = "completed" | "in-progress" | "up-next" | "planned" | "future";

interface Milestone {
  id: number;
  title: string;
  subtitle: string;
  status: PhaseStatus;
  icon: typeof Compass;
  summary: string;
  highlights: string[];
  landmarkLabel: string;
  color: string; // tailwind ring / accent
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Foundation & Vision",
    subtitle: "The Design Studio",
    status: "completed",
    icon: Compass,
    landmarkLabel: "Design Studio",
    color: "#10b981",
    summary:
      "BlanketSmith begins with a powerful mission: give makers a modern way to turn ideas into clear, usable patterns—while laying the foundation for something much bigger.",
    highlights: [
      "Defined the BlanketSmith mission and long-term vision",
      "Built the brand identity system and visual language",
      "Shaped the first version of the pattern-design tool",
      "Established the tool-first, platform-second strategy",
    ],
  },
  {
    id: 2,
    title: "Tool Polish & Beta Readiness",
    subtitle: "The Maker Lab",
    status: "in-progress",
    icon: Wrench,
    landmarkLabel: "Maker Lab",
    color: "#7C2AE8",
    summary:
      "Before opening BlanketSmith to real users, the focus is on reducing friction, improving usability, and making the first experience feel polished and trustworthy.",
    highlights: [
      "Improving usability and workflow clarity",
      "Polishing the editor and touch interactions",
      "Refining export functionality",
      "Tightening visual consistency across the tool",
    ],
  },
  {
    id: 3,
    title: "Pre-Beta Access",
    subtitle: "The Welcome Gate",
    status: "up-next",
    icon: UserPlus,
    landmarkLabel: "Welcome Gate",
    color: "#374FD9",
    summary:
      "Pre-beta is about opening the door carefully. Early users get a chance to explore the tool and help shape the experience before the broader beta phase begins.",
    highlights: [
      "Opening signups for interested makers",
      "Offering limited pre-beta access",
      "Building a small focus group of experienced pattern designers",
      "Gathering first impressions on usability and value",
    ],
  },
  {
    id: 4,
    title: "Beta Launch",
    subtitle: "The Launch Beacon",
    status: "planned",
    icon: Rocket,
    landmarkLabel: "Launch Beacon",
    color: "#14C8F5",
    summary:
      "Beta marks the transition from internal building to real-world validation. The goal is to learn directly from the people BlanketSmith is being built for.",
    highlights: [
      "Launching the official beta program",
      "Onboarding and supporting beta testers",
      "Collecting structured feedback and usage data",
      "Validating product-market fit within the maker niche",
    ],
  },
  {
    id: 5,
    title: "Feedback & Stabilization",
    subtitle: "The Forge",
    status: "planned",
    icon: MessageSquare,
    landmarkLabel: "The Forge",
    color: "#8b5cf6",
    summary:
      "This phase turns feedback into momentum. The focus is on making BlanketSmith stronger, smoother, and more dependable before its first full public release.",
    highlights: [
      "Resolving major pain points from beta",
      "Improving workflow clarity and reliability",
      "Refining onboarding and export experience",
      "Preparing the product for a stable launch",
    ],
  },
  {
    id: 6,
    title: "Public Release",
    subtitle: "The Flagship Hub",
    status: "planned",
    icon: Globe,
    landmarkLabel: "Flagship Hub",
    color: "#06b6d4",
    summary:
      "The first full release transforms BlanketSmith from an evolving beta product into a stable creative tool with a clear long-term future.",
    highlights: [
      "Releasing the first stable public version",
      "Establishing a healthy maintenance rhythm",
      "Marking the tool as a dependable standalone product",
      "Freeing development focus for the broader platform vision",
    ],
  },
  {
    id: 7,
    title: "Community Platform",
    subtitle: "The Creative Commons",
    status: "future",
    icon: Users,
    landmarkLabel: "Creative Commons",
    color: "#a78bfa",
    summary:
      "BlanketSmith is not meant to stop at software. The long-term vision is a platform where makers can learn, share, grow, and find the resources they need.",
    highlights: [
      "Blog and educational content hub",
      "Tutorials and video-based learning",
      "Community sharing and creator profiles",
      "Structured knowledge and resource library",
    ],
  },
  {
    id: 8,
    title: "Marketplace & Ecosystem",
    subtitle: "The Maker Market",
    status: "future",
    icon: Store,
    landmarkLabel: "Maker Market",
    color: "#e879f9",
    summary:
      "As the community grows, BlanketSmith expands into an ecosystem where makers do more than design—they connect, share, sell, and build something lasting.",
    highlights: [
      "Marketplace for patterns and handmade goods",
      "Creator growth and audience-building tools",
      "Service listings and maker connections",
      "Deeper community interaction features",
    ],
  },
  {
    id: 9,
    title: "Sustainable Growth",
    subtitle: "The Horizon",
    status: "future",
    icon: TrendingUp,
    landmarkLabel: "The Horizon",
    color: "#14C8F5",
    summary:
      "The goal is to grow carefully: keep the platform accessible, protect the community-first mission, and build enough sustainability to support long-term scale.",
    highlights: [
      "Keeping access affordable and accessible",
      "Supporting infrastructure responsibly",
      "Scaling without losing quality or mission",
      "Evolving into a durable, community-first platform",
    ],
  },
];

const statusConfig: Record<PhaseStatus, { label: string; bg: string; text: string; glow: string }> = {
  completed: { label: "Completed", bg: "bg-emerald-500/20", text: "text-emerald-400", glow: "shadow-[0_0_20px_rgba(16,185,129,0.4)]" },
  "in-progress": { label: "In Progress", bg: "bg-[#7C2AE8]/20", text: "text-[#7C2AE8]", glow: "shadow-[0_0_20px_rgba(124,42,232,0.4)]" },
  "up-next": { label: "Up Next", bg: "bg-[#374FD9]/20", text: "text-[#374FD9]", glow: "shadow-[0_0_20px_rgba(55,79,217,0.4)]" },
  planned: { label: "Planned", bg: "bg-[#14C8F5]/20", text: "text-[#14C8F5]", glow: "shadow-[0_0_20px_rgba(20,200,245,0.3)]" },
  future: { label: "Future Vision", bg: "bg-purple-500/20", text: "text-purple-400", glow: "shadow-[0_0_20px_rgba(168,85,247,0.25)]" },
};

/* ─── SVG path for the winding trail ─── */
function TrailPath({ progress }: { progress: number }) {
  return (
    <svg
      viewBox="0 0 1200 2400"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      style={{ pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id="trailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="25%" stopColor="#7C2AE8" />
          <stop offset="50%" stopColor="#374FD9" />
          <stop offset="75%" stopColor="#14C8F5" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="trailGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#14C8F5" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Glow layer */}
      <path
        d="M 600 80 C 300 200, 900 400, 600 500 C 300 600, 900 800, 600 900 C 300 1000, 900 1200, 600 1300 C 300 1400, 900 1600, 600 1700 C 300 1800, 900 2000, 600 2100 C 400 2200, 600 2350, 600 2350"
        fill="none"
        stroke="url(#trailGlow)"
        strokeWidth="12"
        filter="url(#glow)"
        strokeLinecap="round"
        strokeDasharray="20 10"
        opacity={0.5}
      />
      {/* Main path */}
      <path
        d="M 600 80 C 300 200, 900 400, 600 500 C 300 600, 900 800, 600 900 C 300 1000, 900 1200, 600 1300 C 300 1400, 900 1600, 600 1700 C 300 1800, 900 2000, 600 2100 C 400 2200, 600 2350, 600 2350"
        fill="none"
        stroke="url(#trailGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity={0.8}
      />
      {/* Animated progress overlay */}
      <path
        d="M 600 80 C 300 200, 900 400, 600 500 C 300 600, 900 800, 600 900 C 300 1000, 900 1200, 600 1300 C 300 1400, 900 1600, 600 1700 C 300 1800, 900 2000, 600 2100 C 400 2200, 600 2350, 600 2350"
        fill="none"
        stroke="url(#trailGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#glow)"
        strokeDasharray="5000"
        strokeDashoffset={5000 - 5000 * progress}
        style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
      />
    </svg>
  );
}

/* ─── Landmark Node ─── */
function LandmarkNode({
  milestone,
  index,
  isActive,
  onSelect,
}: {
  milestone: Milestone;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;
  const sc = statusConfig[milestone.status];
  const Icon = milestone.icon;

  // Node positions following the S-curve
  const positions = [
    "left-[50%] -translate-x-1/2", // 1 - center top
    "left-[25%] md:left-[20%]",    // 2 - left
    "left-[65%] md:left-[72%]",    // 3 - right
    "left-[30%] md:left-[25%]",    // 4 - left
    "left-[60%] md:left-[68%]",    // 5 - right
    "left-[50%] -translate-x-1/2", // 6 - center (major)
    "left-[25%] md:left-[22%]",    // 7 - left
    "left-[65%] md:left-[70%]",    // 8 - right
    "left-[50%] -translate-x-1/2", // 9 - center bottom
  ];

  const isMajor = [3, 4, 6, 7].includes(milestone.id);

  return (
    <motion.div
      ref={ref}
      className={`relative ${positions[index]} mb-8 md:mb-0`}
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
    >
      {/* Connector dot on trail */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 ${
          milestone.status === "completed"
            ? "bg-emerald-500 border-emerald-400"
            : milestone.status === "in-progress"
            ? "bg-[#7C2AE8] border-[#7C2AE8]/60 animate-pulse"
            : "bg-muted border-border"
        }`}
        style={{ left: isLeft ? "-1.5rem" : "auto", right: !isLeft ? "-1.5rem" : "auto" }}
      />

      {/* Landmark card */}
      <button
        onClick={onSelect}
        className={`group relative block text-left transition-all duration-300 ${
          isActive ? "scale-105" : "hover:scale-[1.03]"
        }`}
      >
        {/* Glow ring for major milestones */}
        {isMajor && (
          <div
            className="absolute -inset-2 rounded-2xl opacity-30 blur-xl transition-opacity group-hover:opacity-60"
            style={{ background: `radial-gradient(circle, ${milestone.color}40, transparent)` }}
          />
        )}

        <div
          className={`relative rounded-2xl border backdrop-blur-md p-4 md:p-5 transition-all duration-300 ${
            isActive
              ? "border-[var(--active-color)] bg-card/95 shadow-lg"
              : "border-border/50 bg-card/60 hover:bg-card/80 hover:border-border"
          } ${isMajor ? "min-w-[220px] md:min-w-[280px]" : "min-w-[180px] md:min-w-[240px]"}`}
          style={{ "--active-color": milestone.color } as React.CSSProperties}
        >
          {/* Status pill */}
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3 ${sc.bg} ${sc.text}`}>
            {milestone.status === "in-progress" && (
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            )}
            {sc.label}
          </div>

          {/* Icon + Title */}
          <div className="flex items-start gap-3">
            <div
              className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${
                isMajor ? "ring-2 ring-offset-2 ring-offset-card" : ""
              }`}
              style={{
                background: `linear-gradient(135deg, ${milestone.color}30, ${milestone.color}10)`,
                ...(isMajor ? { ringColor: milestone.color } : {}),
              }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: milestone.color }} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5">
                {milestone.subtitle}
              </p>
              <h3 className={`font-display font-bold leading-tight ${isMajor ? "text-base md:text-lg" : "text-sm md:text-base"} text-foreground`}>
                {milestone.title}
              </h3>
            </div>
          </div>

          {/* Expand hint */}
          <div className="flex items-center gap-1 mt-3 text-[11px] text-muted-foreground group-hover:text-foreground transition-colors">
            <span>Explore</span>
            <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </button>
    </motion.div>
  );
}

/* ─── Detail Modal ─── */
function DetailModal({
  milestone,
  onClose,
}: {
  milestone: Milestone;
  onClose: () => void;
}) {
  const sc = statusConfig[milestone.status];
  const Icon = milestone.icon;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 md:p-8 shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Accent bar */}
        <div
          className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
          style={{ background: `linear-gradient(90deg, ${milestone.color}, ${milestone.color}60)` }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-secondary transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${milestone.color}30, ${milestone.color}10)` }}
          >
            <Icon className="w-7 h-7" style={{ color: milestone.color }} />
          </div>
          <div>
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-2 ${sc.bg} ${sc.text}`}>
              {milestone.status === "in-progress" && (
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              )}
              {sc.label}
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {milestone.subtitle}
            </p>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              {milestone.title}
            </h2>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {milestone.summary}
        </p>

        {/* Highlights */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Key Highlights
          </h4>
          {milestone.highlights.map((h, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 text-sm text-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div
                className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                style={{ backgroundColor: milestone.color }}
              />
              <span>{h}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Mini Progress Bar ─── */
function ProgressNav({
  activeId,
  onSelect,
}: {
  activeId: number | null;
  onSelect: (id: number) => void;
}) {
  const currentPhase = 2; // in-progress
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-1 bg-card/90 backdrop-blur-md border border-border rounded-full px-3 py-2 shadow-lg">
      {milestones.map((m) => {
        const sc = statusConfig[m.status];
        return (
          <button
            key={m.id}
            onClick={() => onSelect(m.id)}
            className={`group relative w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              activeId === m.id ? "ring-2 ring-offset-1 ring-offset-card" : ""
            }`}
            style={{
              backgroundColor:
                m.id <= currentPhase
                  ? `${m.color}30`
                  : "hsl(var(--muted))",
              ...(activeId === m.id ? { ringColor: m.color } : {}),
            }}
            title={m.title}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: m.id <= currentPhase ? m.color : "hsl(var(--muted-foreground))",
              }}
            />
            {/* Tooltip */}
            <span className="absolute bottom-full mb-2 px-2 py-1 bg-card border border-border rounded text-[10px] font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {m.landmarkLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ─── Decorative terrain elements ─── */
function TerrainDecor() {
  return (
    <>
      {/* Floating woven shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-[0.04]"
          style={{
            width: 40 + Math.random() * 120,
            height: 40 + Math.random() * 120,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              ["#7C2AE8", "#374FD9", "#14C8F5", "#10b981", "#a78bfa"][i % 5]
            }, transparent)`,
          }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}

/* ─── useInView hook ─── */
function useInView(ref: React.RefObject<HTMLElement | null>, options?: { once?: boolean; margin?: string }) {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options?.once) observer.disconnect();
        } else if (!options?.once) {
          setIsInView(false);
        }
      },
      { rootMargin: options?.margin || "0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options?.once, options?.margin]);
  return isInView;
}

/* ═══════ Main Page ═══════ */
export default function RoadmapJourney() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: mapRef, offset: ["start end", "end start"] });
  const trailProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return trailProgress.on("change", (v) => setProgress(v));
  }, [trailProgress]);

  const activeMilestone = milestones.find((m) => m.id === activeId);

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7C2AE8]/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#14C8F5]/10 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#374FD9]/5 blur-[150px]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-8">
              <Map className="w-4 h-4 text-brand-cyan" />
              <span>Interactive Journey Map</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">The BlanketSmith</span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #7C2AE8 0%, #374FD9 50%, #14C8F5 100%)" }}
              >
                Roadmap
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              From modern pattern-design tool to a full maker community platform.
              Explore each milestone on our journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="#journey-map">
                  Explore the Map
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/roadmap">View Timeline Version</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Where We Are ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#7C2AE8] animate-pulse" />
              <h2 className="font-display text-lg font-bold text-foreground">Where We Are Now</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              BlanketSmith is currently moving from private product building into early public access and beta preparation.
            </p>

            {/* Progress bar */}
            <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #10b981, #7C2AE8, #374FD9)",
                }}
                initial={{ width: 0 }}
                whileInView={{ width: "22%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-muted-foreground uppercase tracking-wider">
              <span>Foundation</span>
              <span className="font-semibold text-[#7C2AE8]">Tool Polish</span>
              <span>Beta</span>
              <span>Release</span>
              <span>Platform</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── The Journey Map ── */}
      <section id="journey-map" className="relative py-16 md:py-24 overflow-hidden" ref={mapRef}>
        <TerrainDecor />

        {/* Trail path (visible on md+) */}
        <div className="hidden md:block absolute inset-0" style={{ zIndex: 1 }}>
          <TrailPath progress={progress} />
        </div>

        {/* Mobile: vertical glowing line */}
        <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 z-[1]">
          <div className="w-full h-full" style={{ background: "linear-gradient(to bottom, #10b981, #7C2AE8, #374FD9, #14C8F5, #a78bfa)" }} />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              The Journey
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Click any landmark to explore its details
            </p>
          </motion.div>

          {/* Desktop: positioned landmark nodes */}
          <div className="hidden md:block relative" style={{ height: `${milestones.length * 280}px`, zIndex: 2 }}>
            {milestones.map((m, i) => (
              <div
                key={m.id}
                className="absolute w-full"
                style={{ top: `${i * 280}px` }}
              >
                <LandmarkNode
                  milestone={m}
                  index={i}
                  isActive={activeId === m.id}
                  onSelect={() => setActiveId(activeId === m.id ? null : m.id)}
                />
              </div>
            ))}
          </div>

          {/* Mobile: vertical landmark cards */}
          <div className="md:hidden space-y-6 pl-16 relative z-[2]">
            {milestones.map((m, i) => {
              const sc = statusConfig[m.status];
              const Icon = m.icon;
              const isMajor = [3, 4, 6, 7].includes(m.id);
              return (
                <motion.button
                  key={m.id}
                  className="relative block w-full text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setActiveId(activeId === m.id ? null : m.id)}
                >
                  {/* Connector to vertical line */}
                  <div
                    className="absolute left-[-2.5rem] top-5 w-6 h-0.5"
                    style={{ backgroundColor: `${m.color}40` }}
                  />
                  <div
                    className="absolute left-[-2.85rem] top-[14px] w-3 h-3 rounded-full border-2"
                    style={{
                      backgroundColor: m.id <= 2 ? m.color : "hsl(var(--muted))",
                      borderColor: m.color,
                    }}
                  />

                  <div
                    className={`rounded-xl border backdrop-blur-sm p-4 transition-all ${
                      activeId === m.id
                        ? "border-border bg-card/90 shadow-md"
                        : "border-border/50 bg-card/50"
                    } ${isMajor ? "ring-1" : ""}`}
                    style={isMajor ? { ringColor: `${m.color}30` } : {}}
                  >
                    <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider mb-2 ${sc.bg} ${sc.text}`}>
                      {sc.label}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${m.color}20` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: m.color }} />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.subtitle}</p>
                        <h3 className="font-display font-bold text-sm text-foreground">{m.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Future Vision ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-8 h-8 mx-auto mb-4 text-brand-cyan" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beyond the Tool
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              The long-term vision for BlanketSmith is a platform where digital tools, education,
              community, and creator opportunity all come together in one place—built one thoughtful
              phase at a time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/beta-signup">
                  Join the Journey
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {activeMilestone && (
          <DetailModal
            milestone={activeMilestone}
            onClose={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>

      {/* ── Mini-map nav ── */}
      <ProgressNav activeId={activeId} onSelect={(id) => setActiveId(activeId === id ? null : id)} />
    </Layout>
  );
}
