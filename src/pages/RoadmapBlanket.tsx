import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  X, Compass, Wrench, DoorOpen, Rocket, RefreshCw,
  Flag, BookOpen, Store, TrendingUp, ChevronRight, Sparkles
} from "lucide-react";
import desktopBlanket from "@/assets/roadmap/desktop-blanket.jpg";
import mobileBlanket from "@/assets/roadmap/mobile-blanket.jpg";

/* ─── Phase Data ─── */
interface Phase {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "up-next" | "planned" | "future";
  statusLabel: string;
  icon: React.ElementType;
  summary: string;
  highlights: string[];
  whyItMatters: string;
  desktopPct: { x: number; y: number };
  mobilePct: { x: number; y: number };
  emphasis: boolean;
}

const phases: Phase[] = [
  {
    id: 1, title: "Foundation & Vision", status: "completed", statusLabel: "Completed",
    icon: Compass,
    summary: "BlanketSmith begins with a mission to create a better modern tool for turning pattern ideas into clear, usable designs — while laying the groundwork for something much larger.",
    highlights: ["Brand identity system established", "Product vision & direction defined", "Visual language & tone crafted", "Core tool architecture shaped"],
    whyItMatters: "Every great platform starts with a clear purpose. This phase ensured BlanketSmith knew exactly what it was building and why.",
    desktopPct: { x: 7, y: 30 }, mobilePct: { x: 50, y: 6 }, emphasis: false,
  },
  {
    id: 2, title: "Tool Polish & Beta Readiness", status: "in-progress", statusLabel: "In Progress",
    icon: Wrench,
    summary: "Before opening BlanketSmith to real users, the focus is on reducing friction, improving usability, and making the first experience feel polished and trustworthy.",
    highlights: ["Workflow & UX refinement", "Visual consistency improvements", "Editor interaction polish", "Touch & mobile optimization"],
    whyItMatters: "First impressions define trust. This phase ensures that when real users arrive, the experience feels considered and complete.",
    desktopPct: { x: 18, y: 58 }, mobilePct: { x: 30, y: 16 }, emphasis: false,
  },
  {
    id: 3, title: "Pre-Beta Access", status: "up-next", statusLabel: "Up Next",
    icon: DoorOpen,
    summary: "Pre-beta is about opening the door carefully. Early users get a chance to explore the tool, understand its value, and help shape the experience before the broader beta.",
    highlights: ["Early signups open", "Selected maker access", "Focus group participation", "Trust-building & first impressions"],
    whyItMatters: "Building with real people before the big moment ensures the beta launch is informed by genuine feedback, not assumptions.",
    desktopPct: { x: 30, y: 35 }, mobilePct: { x: 65, y: 26 }, emphasis: true,
  },
  {
    id: 4, title: "Beta Launch", status: "planned", statusLabel: "Planned",
    icon: Rocket,
    summary: "Beta marks the transition from internal product building to real-world validation. The goal is not just to test software, but to learn directly from the people BlanketSmith is built for.",
    highlights: ["Official beta release", "Active user onboarding", "Structured feedback collection", "Real-world workflow validation"],
    whyItMatters: "This is the first major public milestone — the moment BlanketSmith opens its doors and meets its community.",
    desktopPct: { x: 43, y: 55 }, mobilePct: { x: 40, y: 37 }, emphasis: true,
  },
  {
    id: 5, title: "Feedback & Stabilization", status: "planned", statusLabel: "Planned",
    icon: RefreshCw,
    summary: "This phase turns feedback into momentum. The focus is on making BlanketSmith stronger, smoother, and more dependable before its first full public release.",
    highlights: ["Bug fixing & UX refinement", "Workflow improvements", "Reliability & performance upgrades", "Validating improvements through testing"],
    whyItMatters: "Great products are forged through iteration. This phase transforms user insights into a more resilient tool.",
    desktopPct: { x: 55, y: 32 }, mobilePct: { x: 55, y: 47 }, emphasis: false,
  },
  {
    id: 6, title: "First Public Release", status: "planned", statusLabel: "Planned",
    icon: Flag,
    summary: "The first full release transforms BlanketSmith from an evolving beta product into a stable creative tool with a clear long-term future.",
    highlights: ["First stable public version", "Healthier development rhythm", "Dependable standalone product", "Foundation for platform expansion"],
    whyItMatters: "This milestone frees development focus — once the core tool is stable, the project can shift attention toward the broader platform vision.",
    desktopPct: { x: 66, y: 55 }, mobilePct: { x: 35, y: 57 }, emphasis: true,
  },
  {
    id: 7, title: "Community Platform", status: "future", statusLabel: "Future Vision",
    icon: BookOpen,
    summary: "BlanketSmith is not meant to stop at software. The long-term vision is a platform where makers can learn, share, grow, and find resources in one trusted place.",
    highlights: ["Educational resources & tutorials", "Community sharing features", "Creator spotlights", "Knowledge & resource hub"],
    whyItMatters: "The tool becomes a home. This phase transforms BlanketSmith from a product into a destination for makers.",
    desktopPct: { x: 77, y: 33 }, mobilePct: { x: 60, y: 68 }, emphasis: true,
  },
  {
    id: 8, title: "Marketplace & Ecosystem", status: "future", statusLabel: "Future Vision",
    icon: Store,
    summary: "As the community grows, BlanketSmith expands into an ecosystem where makers do more than design — they connect, share, sell, and build something lasting.",
    highlights: ["Pattern marketplace", "Creator growth tools", "Community interaction features", "Sustainable ecosystem value"],
    whyItMatters: "Empowering makers to grow and sustain their craft creates lasting value for the entire community.",
    desktopPct: { x: 87, y: 55 }, mobilePct: { x: 45, y: 78 }, emphasis: false,
  },
  {
    id: 9, title: "Sustainable Growth", status: "future", statusLabel: "Future Vision",
    icon: TrendingUp,
    summary: "The goal is to grow carefully: keep the platform accessible, protect the community-first mission, and build sustainability to support long-term scale.",
    highlights: ["Responsible infrastructure scaling", "Preserving accessibility", "Community-first mission", "Long-term platform durability"],
    whyItMatters: "Growth without losing soul. This phase ensures BlanketSmith scales while staying true to who it was built for.",
    desktopPct: { x: 95, y: 35 }, mobilePct: { x: 50, y: 90 }, emphasis: false,
  },
];

const statusStyle: Record<Phase["status"], { ring: string; bg: string; glow: string; badge: string }> = {
  "completed":   { ring: "border-emerald-400",          bg: "bg-emerald-400/15",        glow: "shadow-emerald-400/40",   badge: "bg-emerald-500/20 text-emerald-300" },
  "in-progress": { ring: "border-[#14C8F5]",            bg: "bg-[#14C8F5]/15",          glow: "shadow-[#14C8F5]/40",     badge: "bg-[#14C8F5]/20 text-[#14C8F5]" },
  "up-next":     { ring: "border-[#7C2AE8]",            bg: "bg-[#7C2AE8]/15",          glow: "shadow-[#7C2AE8]/40",     badge: "bg-[#7C2AE8]/20 text-[#c4a5f7]" },
  "planned":     { ring: "border-[#374FD9]",            bg: "bg-[#374FD9]/15",          glow: "shadow-[#374FD9]/40",     badge: "bg-[#374FD9]/20 text-[#7b8ff5]" },
  "future":      { ring: "border-white/20",             bg: "bg-white/5",               glow: "shadow-white/10",         badge: "bg-white/10 text-white/50" },
};

/* ─── Medallion ─── */
function Medallion({ phase, isActive, onClick, isMobile }: {
  phase: Phase; isActive: boolean; onClick: () => void; isMobile: boolean;
}) {
  const pos = isMobile ? phase.mobilePct : phase.desktopPct;
  const Icon = phase.icon;
  const s = statusStyle[phase.status];

  return (
    <motion.button
      className="absolute z-20 group flex flex-col items-center"
      style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
      onClick={onClick}
      whileHover={{ scale: 1.18 }}
      whileTap={{ scale: 0.92 }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Pulse ring for emphasis */}
      {phase.emphasis && (
        <motion.div
          className={`absolute rounded-full ${s.ring}`}
          style={{ width: "calc(100% + 20px)", height: "calc(100% + 20px)", top: "-10px", left: "-10px", borderWidth: "2px" }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Stitched medallion */}
      <div
        className={`
          w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full
          ${s.ring} ${s.bg} backdrop-blur-md
          flex items-center justify-center
          transition-all duration-300
          group-hover:shadow-lg group-hover:${s.glow}
          ${isActive ? `shadow-lg ${s.glow} ring-2 ring-white/20` : ""}
        `}
        style={{ borderWidth: "3px", borderStyle: "dashed" }}
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white/90" />
      </div>

      {/* Label */}
      <span className="mt-2 text-[10px] sm:text-xs font-display font-semibold text-white/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full whitespace-nowrap max-w-[100px] sm:max-w-none truncate">
        {phase.title}
      </span>
    </motion.button>
  );
}

/* ─── Detail Patch ─── */
function DetailPatch({ phase, onClose }: { phase: Phase; onClose: () => void }) {
  const Icon = phase.icon;
  const s = statusStyle[phase.status];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.8, y: 40, rotateX: 8 }}
        animate={{ scale: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.8, y: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(160deg, hsl(222 47% 10%) 0%, hsl(222 47% 6%) 100%)",
          border: "3px dashed rgba(255,255,255,0.12)",
          boxShadow: "0 0 60px rgba(20, 200, 245, 0.1), 0 25px 80px rgba(0,0,0,0.5)",
        }}
      >
        {/* Top accent */}
        <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #7C2AE8, #374FD9, #14C8F5)" }} />

        {/* Header */}
        <div className="px-6 pt-5 pb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-full ${s.ring} ${s.bg} flex items-center justify-center`} style={{ borderWidth: "2px", borderStyle: "dashed" }}>
              <Icon className="w-5 h-5 text-white/80" />
            </div>
            <div>
              <span className={`text-[10px] font-semibold uppercase tracking-widest ${s.badge} px-2 py-0.5 rounded-full`}>
                {phase.statusLabel}
              </span>
              <h3 className="text-lg font-display font-bold text-white mt-1">{phase.title}</h3>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
            <X className="w-4 h-4 text-white/50" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 space-y-4">
          <p className="text-sm text-white/60 leading-relaxed">{phase.summary}</p>
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-[#14C8F5] mb-2">Key Highlights</h4>
            <ul className="space-y-1.5">
              {phase.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C2AE8] mt-1.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-3 border-t border-white/8">
            <p className="text-xs text-white/40 italic leading-relaxed">{phase.whyItMatters}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Stitched SVG Path (desktop) ─── */
function StitchedPath() {
  // A winding path through all 9 desktop landmark positions
  const d = `M 7 30 C 10 45, 14 58, 18 58 S 24 40, 30 35 S 36 50, 43 55 S 49 38, 55 32 S 60 50, 66 55 S 72 38, 77 33 S 82 50, 87 55 S 91 40, 95 35`;
  return (
    <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="stitchGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C2AE8" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#374FD9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#14C8F5" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        d={d}
        fill="none"
        stroke="url(#stitchGrad)"
        strokeWidth="0.4"
        strokeDasharray="1.5 1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* ─── Mobile Stitched Path ─── */
function MobileStitchedPath() {
  const d = `M 50 6 C 35 12, 30 16, 30 16 S 55 22, 65 26 S 45 32, 40 37 S 50 43, 55 47 S 40 53, 35 57 S 55 63, 60 68 S 50 74, 45 78 S 48 85, 50 90`;
  return (
    <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="stitchGradM" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C2AE8" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#374FD9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#14C8F5" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d={d}
        fill="none"
        stroke="url(#stitchGradM)"
        strokeWidth="0.6"
        strokeDasharray="2 1.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* ─── Woven Texture Overlay ─── */
function TextureOverlay() {
  return (
    <div
      className="absolute inset-0 z-[5] pointer-events-none opacity-[0.08]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.4) 4px, rgba(255,255,255,0.4) 5px),
          repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.4) 4px, rgba(255,255,255,0.4) 5px)
        `,
      }}
    />
  );
}

/* ─── Progress Nav ─── */
function ProgressNav({ phases, activeId, onSelect }: { phases: Phase[]; activeId: number | null; onSelect: (p: Phase) => void }) {
  const currentIdx = phases.findIndex((p) => p.status === "in-progress" || p.status === "up-next");
  const progressPct = ((currentIdx + 0.5) / phases.length) * 100;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-1 bg-black/60 backdrop-blur-md rounded-full px-4 py-2.5 border border-white/10 shadow-xl">
      {/* Progress bar */}
      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${progressPct}%`, background: "linear-gradient(90deg, #7C2AE8, #14C8F5)" }} />
      </div>

      {phases.map((p) => {
        const s = statusStyle[p.status];
        return (
          <button
            key={p.id}
            onClick={() => onSelect(p)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 ${
              activeId === p.id ? `${s.ring} scale-150` : "border border-white/20"
            }`}
            style={{
              backgroundColor: p.status === "completed" ? "#10b981" : p.status === "in-progress" ? "#14C8F5" : p.status === "up-next" ? "#7C2AE8" : p.status === "planned" ? "#374FD9" : "rgba(255,255,255,0.1)",
              borderStyle: activeId === p.id ? "solid" : "solid",
            }}
            title={p.title}
          />
        );
      })}
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function RoadmapBlanket() {
  const [activePhase, setActivePhase] = useState<Phase | null>(null);
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end end"] });

  // Desktop: translate vertical scroll → horizontal pan
  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-66.67%"]);

  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, hsl(222 47% 6%) 0%, hsl(222 47% 9%) 100%)" }}
      >
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, #7C2AE8, transparent)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-[100px]"
          style={{ background: "radial-gradient(circle, #14C8F5, transparent)" }} />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14C8F5] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              The Journey Unfolds
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">
              The BlanketSmith{" "}
              <span className="gradient-text">Roadmap</span>
            </h1>
            <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-xl mx-auto mb-6">
              From a modern pattern design tool to a full maker community platform — each stitch represents a step toward something bigger.
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/30"
            >
              <ChevronRight className="w-6 h-6 mx-auto rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATUS BAR ─── */}
      <section className="py-6 border-y border-white/5" style={{ background: "hsl(222 47% 7%)" }}>
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-white/50">Foundation</span>
            <span className="text-emerald-400 font-semibold">Complete</span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#14C8F5] animate-pulse" />
            <span className="text-white/50">Currently</span>
            <span className="text-[#14C8F5] font-semibold">Tool Polish & Beta Prep</span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#7C2AE8]" />
            <span className="text-white/50">Next</span>
            <span className="text-[#c4a5f7] font-semibold">Pre-Beta Access</span>
          </div>
        </div>
      </section>

      {/* ─── MAP EXPERIENCE ─── */}
      <section
        ref={scrollRef}
        className="relative"
        style={{
          height: isMobile ? "auto" : "400vh",
          background: "hsl(222 47% 5%)",
        }}
      >
        {/* Desktop: Sticky horizontal pan */}
        {!isMobile && (
          <div className="sticky top-0 h-screen overflow-hidden">
            <motion.div
              style={{ x: translateX }}
              className="flex h-full"
            >
              <div className="relative min-w-[300vw] h-full">
                {/* Blanket base image */}
                <img
                  src={desktopBlanket}
                  alt="BlanketSmith Roadmap Blanket"
                  className="absolute inset-0 w-full h-full object-cover"
                  width={1920}
                  height={800}
                />
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Woven texture */}
                <TextureOverlay />
                {/* Stitched path */}
                <StitchedPath />
                {/* Landmark medallions */}
                {phases.map((p) => (
                  <Medallion
                    key={p.id}
                    phase={p}
                    isActive={activePhase?.id === p.id}
                    onClick={() => setActivePhase(p)}
                    isMobile={false}
                  />
                ))}
                {/* Easter egg: faint future motif */}
                <div className="absolute right-[2%] bottom-[15%] w-20 h-20 rounded-full border border-dashed border-white/5 flex items-center justify-center opacity-30 z-10">
                  <Sparkles className="w-6 h-6 text-white/10" />
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Mobile: Vertical blanket scroll */}
        {isMobile && (
          <div className="relative min-h-[200vh]">
            {/* Blanket base image */}
            <img
              src={mobileBlanket}
              alt="BlanketSmith Roadmap Blanket"
              className="absolute inset-0 w-full h-full object-cover"
              width={768}
              height={1366}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />
            {/* Woven texture */}
            <TextureOverlay />
            {/* Stitched path */}
            <MobileStitchedPath />
            {/* Landmarks */}
            {phases.map((p) => (
              <Medallion
                key={p.id}
                phase={p}
                isActive={activePhase?.id === p.id}
                onClick={() => setActivePhase(p)}
                isMobile={true}
              />
            ))}
          </div>
        )}
      </section>

      {/* ─── BEYOND THE TOOL ─── */}
      <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, hsl(222 47% 5%) 0%, hsl(222 47% 8%) 100%)" }}>
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Beyond the Tool
            </h2>
            <p className="text-white/45 leading-relaxed mb-8">
              The long-term vision for BlanketSmith is a platform where digital tools, education, community, and creator opportunity all come together in one place — woven stitch by stitch.
            </p>
            <a
              href="/beta-signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7C2AE8]/30"
              style={{ background: "linear-gradient(135deg, #7C2AE8, #374FD9, #14C8F5)" }}
            >
              Join the Journey
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Detail Panel Overlay ─── */}
      <AnimatePresence>
        {activePhase && (
          <DetailPatch phase={activePhase} onClose={() => setActivePhase(null)} />
        )}
      </AnimatePresence>

      {/* ─── Progress Nav (desktop) ─── */}
      <ProgressNav phases={phases} activeId={activePhase?.id ?? null} onSelect={setActivePhase} />
    </Layout>
  );
}
