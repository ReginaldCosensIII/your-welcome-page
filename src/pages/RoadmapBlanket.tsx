import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  X, Compass, Wrench, DoorOpen, Rocket, RefreshCw,
  Flag, BookOpen, Store, TrendingUp, ChevronDown, Sparkles,
  Check, Lock, Clock, Star, ArrowRight
} from "lucide-react";
import panoramaLandscape from "@/assets/roadmap/panorama-landscape.jpg";
import mobileLandscape from "@/assets/roadmap/mobile-landscape.jpg";
import logoHorizontal from "@/assets/logo-horizontal.svg";

/* ─── Types ─── */
interface Phase {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "up-next" | "planned" | "future";
  statusLabel: string;
  timeline?: string;
  icon: React.ElementType;
  summary: string;
  highlights: string[];
  desktopPos: { x: string; y: string };
  mobilePos: { x: string; y: string };
  emphasis: boolean;
}

/* ─── Data ─── */
const phases: Phase[] = [
  {
    id: 1, title: "Foundation &\nProduct Direction",
    status: "completed", statusLabel: "Completed",
    icon: Compass,
    summary: "BlanketSmith begins with a mission to create a better modern tool for turning pattern ideas into clear, usable designs — while laying the groundwork for something much larger.",
    highlights: ["Brand identity established", "Product vision defined", "Core architecture shaped", "Visual language crafted"],
    desktopPos: { x: "8%", y: "38%" }, mobilePos: { x: "15%", y: "78%" },
    emphasis: false,
  },
  {
    id: 2, title: "Tool Polish &\nBeta Readiness",
    status: "completed", statusLabel: "Completed",
    icon: Wrench,
    summary: "Before opening to real users, the focus is on reducing friction, improving usability, and making the first experience feel polished and trustworthy.",
    highlights: ["Workflow & UX refinement", "Visual consistency pass", "Editor interaction polish", "Touch & mobile optimization"],
    desktopPos: { x: "24%", y: "55%" }, mobilePos: { x: "55%", y: "68%" },
    emphasis: false,
  },
  {
    id: 3, title: "Pre-Beta Access &\nEarly Signups",
    status: "up-next", statusLabel: "Upcoming", timeline: "Q1 2026",
    icon: DoorOpen,
    summary: "Pre-beta opens the door carefully. Early users get a chance to explore the tool, understand its value, and help shape the experience before the broader beta.",
    highlights: ["Early signups open", "Selected maker access", "Focus group participation", "Trust-building & first impressions"],
    desktopPos: { x: "22%", y: "78%" }, mobilePos: { x: "20%", y: "58%" },
    emphasis: true,
  },
  {
    id: 4, title: "Beta Launch &\nActive Testing",
    status: "planned", statusLabel: "Major Milestone", timeline: "Q2 2026",
    icon: Rocket,
    summary: "This is the first major public milestone — the point where active user testing, real-world validation, and structured feedback begin in earnest.",
    highlights: ["Official beta release", "User onboarding flows", "Active testing phase", "Structured feedback loops"],
    desktopPos: { x: "42%", y: "62%" }, mobilePos: { x: "50%", y: "48%" },
    emphasis: true,
  },
  {
    id: 5, title: "Feedback, Iteration\n& Stabilization",
    status: "planned", statusLabel: "In Progress", timeline: "Q3 2026",
    icon: RefreshCw,
    summary: "Insights from beta are turned into stronger workflows, better reliability, smoother UX, and a more dependable product.",
    highlights: ["Bug fixing sprints", "UX refinement cycles", "Workflow improvements", "Reliability upgrades"],
    desktopPos: { x: "56%", y: "72%" }, mobilePos: { x: "65%", y: "38%" },
    emphasis: false,
  },
  {
    id: 6, title: "First Full\nPublic Release",
    status: "planned", statusLabel: "Major Milestone", timeline: "Q4 2026",
    icon: Flag,
    summary: "The first stable, non-beta release — BlanketSmith becomes a dependable standalone product rather than a constantly shifting early build.",
    highlights: ["Stable public version", "Dependable standalone product", "Healthier maintenance rhythm", "Less foundational churn"],
    desktopPos: { x: "70%", y: "60%" }, mobilePos: { x: "35%", y: "28%" },
    emphasis: true,
  },
  {
    id: 7, title: "Community Platform\n& Foundation",
    status: "future", statusLabel: "Locked", timeline: "2027",
    icon: BookOpen,
    summary: "Once the core tool stabilizes, BlanketSmith expands into a broader maker platform with resources, education, tutorials, and shared content.",
    highlights: ["Educational resources", "Tutorial content", "Community sharing", "Maker resource hub"],
    desktopPos: { x: "88%", y: "42%" }, mobilePos: { x: "70%", y: "18%" },
    emphasis: true,
  },
  {
    id: 8, title: "Community Expansion\n& Marketplace",
    status: "future", statusLabel: "Locked", timeline: "2028",
    icon: Store,
    summary: "The ecosystem grows into a place where creators can share, connect, and eventually participate in marketplace-oriented opportunities.",
    highlights: ["Marketplace possibilities", "Creator growth tools", "Pattern sharing & selling", "Deeper community interaction"],
    desktopPos: { x: "90%", y: "70%" }, mobilePos: { x: "50%", y: "10%" },
    emphasis: false,
  },
  {
    id: 9, title: "Sustainable\nGrowth & Scale",
    status: "future", statusLabel: "Locked", timeline: "2029+",
    icon: TrendingUp,
    summary: "The long-term vision is careful, responsible growth that supports infrastructure and expansion while preserving the community-first mission.",
    highlights: ["Affordable access preserved", "Infrastructure scaling", "Responsible growth", "Community-first mission"],
    desktopPos: { x: "35%", y: "90%" }, mobilePos: { x: "25%", y: "3%" },
    emphasis: false,
  },
];

/* ─── Status Config ─── */
const statusConfig: Record<Phase["status"], { bg: string; border: string; text: string; icon: React.ElementType; glow?: string }> = {
  completed: { bg: "bg-emerald-500/90", border: "border-emerald-400", text: "text-white", icon: Check },
  "in-progress": { bg: "bg-brand-purple/90", border: "border-brand-purple", text: "text-white", icon: Clock, glow: "shadow-[0_0_20px_rgba(124,42,232,0.5)]" },
  "up-next": { bg: "bg-brand-cyan/90", border: "border-brand-cyan", text: "text-white", icon: Star, glow: "shadow-[0_0_20px_rgba(20,200,245,0.4)]" },
  planned: { bg: "bg-brand-midblue/90", border: "border-brand-midblue", text: "text-white", icon: Star },
  future: { bg: "bg-muted/80", border: "border-muted-foreground/30", text: "text-muted-foreground", icon: Lock },
};

/* ─── Milestone Marker ─── */
function MilestoneMarker({ phase, onClick, isActive }: { phase: Phase; onClick: () => void; isActive: boolean }) {
  const cfg = statusConfig[phase.status];
  const Icon = phase.icon;
  const isFuture = phase.status === "future";

  return (
    <motion.button
      onClick={onClick}
      className="absolute z-20 group cursor-pointer"
      style={{ left: phase.desktopPos.x, top: phase.desktopPos.y, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: phase.id * 0.08 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow ring for emphasis phases */}
      {phase.emphasis && !isFuture && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ margin: "-8px", background: `radial-gradient(circle, rgba(124,42,232,0.3), transparent 70%)` }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}

      {/* Card */}
      <div className={`relative bg-white/95 backdrop-blur-md rounded-xl border shadow-lg px-4 py-3 min-w-[140px] max-w-[180px] transition-all duration-300 ${
        isActive ? "ring-2 ring-brand-purple shadow-xl" : "hover:shadow-xl"
      } ${isFuture ? "opacity-60" : ""}`}>
        {/* Icon circle */}
        <div className={`w-10 h-10 rounded-full ${cfg.bg} ${cfg.text} flex items-center justify-center mx-auto mb-2 ${cfg.glow || ""}`}>
          <Icon className="w-5 h-5" />
        </div>

        {/* Title */}
        <h3 className="font-display text-xs font-bold text-foreground leading-tight text-center whitespace-pre-line">
          {phase.title}
        </h3>

        {/* Status badge */}
        <div className={`mt-2 flex items-center justify-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${cfg.bg} ${cfg.text}`}>
          <cfg.icon className="w-3 h-3" />
          {phase.statusLabel}
        </div>

        {/* Timeline */}
        {phase.timeline && (
          <div className="mt-1 text-center text-[10px] text-muted-foreground font-medium bg-muted/50 rounded-full px-2 py-0.5">
            {phase.timeline}
          </div>
        )}
      </div>
    </motion.button>
  );
}

/* ─── Mobile Milestone ─── */
function MobileMilestone({ phase, onClick, isActive }: { phase: Phase; onClick: () => void; isActive: boolean }) {
  const cfg = statusConfig[phase.status];
  const Icon = phase.icon;
  const isFuture = phase.status === "future";

  return (
    <motion.button
      onClick={onClick}
      className="absolute z-20 group cursor-pointer"
      style={{ left: phase.mobilePos.x, top: phase.mobilePos.y, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: phase.id * 0.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`relative bg-white/95 backdrop-blur-md rounded-lg border shadow-md px-3 py-2 min-w-[110px] max-w-[140px] ${
        isActive ? "ring-2 ring-brand-purple" : ""
      } ${isFuture ? "opacity-50" : ""}`}>
        <div className={`w-8 h-8 rounded-full ${cfg.bg} ${cfg.text} flex items-center justify-center mx-auto mb-1 ${cfg.glow || ""}`}>
          <Icon className="w-4 h-4" />
        </div>
        <h3 className="font-display text-[10px] font-bold text-foreground leading-tight text-center whitespace-pre-line">
          {phase.title}
        </h3>
        <div className={`mt-1 flex items-center justify-center gap-0.5 px-1.5 py-0.5 rounded-full text-[8px] font-semibold ${cfg.bg} ${cfg.text}`}>
          <cfg.icon className="w-2.5 h-2.5" />
          {phase.statusLabel}
        </div>
        {phase.timeline && (
          <div className="mt-0.5 text-center text-[8px] text-muted-foreground bg-muted/50 rounded-full px-1.5 py-0.5">
            {phase.timeline}
          </div>
        )}
      </div>
    </motion.button>
  );
}

/* ─── Detail Modal ─── */
function DetailPanel({ phase, onClose }: { phase: Phase; onClose: () => void }) {
  const cfg = statusConfig[phase.status];
  const Icon = phase.icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 border border-border"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-14 h-14 rounded-xl ${cfg.bg} ${cfg.text} flex items-center justify-center flex-shrink-0 ${cfg.glow || ""}`}>
            <Icon className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground whitespace-pre-line leading-tight">
              {phase.title}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}>
                <cfg.icon className="w-3 h-3" />
                {phase.statusLabel}
              </span>
              {phase.timeline && (
                <span className="text-xs text-muted-foreground bg-muted rounded-full px-2.5 py-1">
                  {phase.timeline}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{phase.summary}</p>

        {/* Highlights */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">Key Highlights</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {phase.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Hero Section ─── */
function RoadmapHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Corner glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Product Journey Roadmap
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            BlanketSmith's Journey
          </h1>

          <p className="font-display text-lg md:text-xl font-semibold bg-gradient-to-r from-brand-purple via-brand-midblue to-brand-cyan bg-clip-text text-transparent mb-6">
            From Idea to Industry-Defining Maker Platform
          </p>

          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
            Follow our path from a modern pattern design tool to a thriving creative ecosystem.
            Each milestone is a step in crafting the future of fiber arts — together.
          </p>

          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-brand-purple" />
            Hover or click milestones to explore each phase
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Cloud Reveal ─── */
function CloudReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 z-30 pointer-events-none"
      style={{ opacity }}
    >
      {/* Top mist */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/80 to-transparent" />
      {/* Bottom mist */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
      {/* Side mists */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background/60 to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background/60 to-transparent" />
      {/* Purple atmospheric haze */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 via-transparent to-brand-cyan/5" />
    </motion.div>
  );
}

/* ─── CTA Section ─── */
function RoadmapCTA() {
  const currentPhase = phases.find(p => p.status === "up-next") || phases[2];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-brand-cyan/5" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where We Are Now
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            Currently: {currentPhase.title.replace("\n", " ")}
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            BlanketSmith is actively preparing for Pre-Beta access. Join early to help shape the future of pattern design and be among the first to experience the tool.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/beta-signup">
                Join the Beta
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/roadmap">View Detailed Roadmap</Link>
            </Button>
          </div>

          {/* Easter egg hint */}
          <motion.p
            className="mt-12 text-xs text-muted-foreground/50 flex items-center justify-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <Sparkles className="w-3 h-3" />
            More chapters ahead... (easter eggs hidden for early explorers)
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function RoadmapBlanket() {
  const [activePhase, setActivePhase] = useState<Phase | null>(null);
  const isMobile = useIsMobile();
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      {/* Hero */}
      <RoadmapHero />

      {/* Immersive Map Section */}
      <section className="relative" ref={mapRef}>
        {/* Desktop panoramic */}
        {!isMobile ? (
          <div className="relative w-full" style={{ height: "80vh", minHeight: "600px" }}>
            <CloudReveal />
            {/* Background landscape */}
            <img
              src={panoramaLandscape}
              alt="BlanketSmith Journey Landscape"
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            {/* Atmospheric overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/20" />

            {/* Milestone markers */}
            {phases.map((phase) => (
              <MilestoneMarker
                key={phase.id}
                phase={phase}
                onClick={() => setActivePhase(phase)}
                isActive={activePhase?.id === phase.id}
              />
            ))}

            {/* Brand logo placement */}
            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-border">
              <img src={logoHorizontal} alt="BlanketSmith" className="h-8 w-auto" />
            </div>
          </div>
        ) : (
          /* Mobile vertical journey */
          <div className="relative w-full" style={{ height: "140vh", minHeight: "900px" }}>
            <CloudReveal />
            <img
              src={mobileLandscape}
              alt="BlanketSmith Journey"
              className="absolute inset-0 w-full h-full object-cover"
              width={768}
              height={1920}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/30" />

            {phases.map((phase) => (
              <MobileMilestone
                key={phase.id}
                phase={phase}
                onClick={() => setActivePhase(phase)}
                isActive={activePhase?.id === phase.id}
              />
            ))}
          </div>
        )}
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {activePhase && (
          <DetailPanel phase={activePhase} onClose={() => setActivePhase(null)} />
        )}
      </AnimatePresence>

      {/* CTA */}
      <RoadmapCTA />
    </Layout>
  );
}
