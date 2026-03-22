import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
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
  ChevronDown,
  CheckCircle2,
  Clock,
  Zap,
  Eye,
  Sparkles,
} from "lucide-react";

type PhaseStatus = "completed" | "in-progress" | "up-next" | "planned" | "future";

interface Phase {
  id: number;
  title: string;
  status: PhaseStatus;
  icon: typeof Compass;
  summary: string;
  highlights: string[];
  whyItMatters?: string;
}

const phases: Phase[] = [
  {
    id: 1,
    title: "Foundation & Product Direction",
    status: "completed",
    icon: Compass,
    summary:
      "BlanketSmith begins with a simple but powerful mission: give makers a modern way to turn ideas into clear, usable patterns—while laying the foundation for something much bigger than a single tool.",
    highlights: [
      "Defined the BlanketSmith mission and long-term vision",
      "Built the brand identity system and visual language",
      "Shaped the first version of the pattern-design tool",
      "Refined the user-experience direction",
      "Built the landing page and public-facing foundation",
      "Established the strategy: tool first, platform second",
    ],
    whyItMatters:
      "A strong foundation ensures every future decision has a clear north star. We invested here so the product grows with purpose, not just features.",
  },
  {
    id: 2,
    title: "Tool Polish & Beta Readiness",
    status: "in-progress",
    icon: Wrench,
    summary:
      "Before opening BlanketSmith to real users, the focus is on reducing friction, improving usability, and making the first experience feel polished, trustworthy, and easy to understand.",
    highlights: [
      "Improving usability and workflow efficiency",
      "Polishing the editor experience",
      "Refining touch, mobile, and tablet interactions",
      "Improving export-related functionality",
      "Tightening visual consistency across all screens",
      "Finalizing the first public-facing beta funnel",
    ],
    whyItMatters:
      "First impressions matter. This phase ensures that when makers try BlanketSmith for the first time, it feels like a real product—not an experiment.",
  },
  {
    id: 3,
    title: "Pre-Beta Access & Early Signups",
    status: "up-next",
    icon: UserPlus,
    summary:
      "Pre-beta is about opening the door carefully. Early users get a chance to explore the tool, understand its value, and help shape the experience before the broader beta testing phase officially begins.",
    highlights: [
      "Opening signups for interested makers",
      "Offering limited pre-beta access to the tool",
      "Inviting experienced pattern designers into early testing",
      "Building a small, focused feedback group",
      "Gathering first impressions on usability and value",
      "Using community outreach to attract aligned early users",
    ],
    whyItMatters:
      "Real feedback from real makers before beta launch means we can solve problems early and build confidence in the product before a wider audience sees it.",
  },
  {
    id: 4,
    title: "Beta Launch & Active Testing",
    status: "planned",
    icon: Rocket,
    summary:
      "Beta marks the transition from internal product building to real-world validation. The goal is not just to test the software, but to learn directly from the people BlanketSmith is being built for.",
    highlights: [
      "Launching the official beta program",
      "Onboarding beta testers from the maker community",
      "Collecting structured feedback on core workflows",
      "Identifying friction points and missing features",
      "Validating product-market fit within the craft niche",
      "Building trust and visibility in the community",
    ],
    whyItMatters:
      "Beta is the first major milestone where the community gets hands-on. Their feedback directly shapes what BlanketSmith becomes.",
  },
  {
    id: 5,
    title: "Feedback & Stabilization",
    status: "planned",
    icon: MessageSquare,
    summary:
      "This phase turns feedback into momentum. The focus is on making BlanketSmith stronger, smoother, and more dependable before its first full public release.",
    highlights: [
      "Resolving major pain points discovered during beta",
      "Improving workflow clarity and onboarding",
      "Fixing bugs and usability issues",
      "Refining export and sharing functionality",
      "Improving reliability and performance",
      "Preparing for a stable, non-beta launch",
    ],
  },
  {
    id: 6,
    title: "First Full Public Release",
    status: "planned",
    icon: Globe,
    summary:
      "The first full release transforms BlanketSmith from an evolving beta product into a stable creative tool with a clear long-term future.",
    highlights: [
      "Releasing the first stable public version",
      "Moving into a healthier maintenance and enhancement rhythm",
      "Establishing normal bug-fix and improvement cycles",
      "Giving users a dependable version to adopt long-term",
      "Marking the tool as a real standalone product",
    ],
    whyItMatters:
      "This milestone is significant because it frees development focus. Once the core tool is stable, the project can shift more attention toward the broader platform vision.",
  },
  {
    id: 7,
    title: "Community Platform Foundation",
    status: "future",
    icon: Users,
    summary:
      "BlanketSmith is not meant to stop at software. The long-term vision is a platform where makers can learn, share, grow, and find the resources they need in one trusted place.",
    highlights: [
      "Blog and educational content for makers",
      "Tutorials, guides, and video-based learning",
      "Community sharing features",
      "Creator profiles and spotlight features",
      "Structured knowledge and resource hub",
      "Early social and community features",
    ],
  },
  {
    id: 8,
    title: "Marketplace & Creator Ecosystem",
    status: "future",
    icon: Store,
    summary:
      "As the community grows, BlanketSmith expands into an ecosystem where makers do more than design—they connect, share, sell, and build something lasting.",
    highlights: [
      "Marketplace for patterns and templates",
      "Space for handmade products and supplies",
      "Service listings for makers and designers",
      "Creator growth and audience-building tools",
      "Deeper community interaction features",
      "Platform features that support long-term creator value",
    ],
    whyItMatters:
      "The marketplace isn't about revenue first—it's about enabling maker opportunity, supporting creator growth, and making the platform sustainable.",
  },
  {
    id: 9,
    title: "Sustainable Growth & Scale",
    status: "future",
    icon: TrendingUp,
    summary:
      "The goal is to grow carefully: keep the platform accessible, protect the community-first mission, and build enough sustainability to support long-term scale.",
    highlights: [
      "Supporting platform growth without losing quality",
      "Funding hosting and infrastructure responsibly",
      "Keeping access low-cost or free where possible",
      "Building systems that can support increasing usage",
      "Evolving from founder-driven development into a durable model",
    ],
  },
];

const statusConfig: Record<PhaseStatus, { label: string; color: string; bgColor: string; borderColor: string }> = {
  completed: {
    label: "Completed",
    color: "text-emerald-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
  },
  "in-progress": {
    label: "In Progress",
    color: "text-brand-midblue",
    bgColor: "bg-brand-midblue/10",
    borderColor: "border-brand-midblue/30",
  },
  "up-next": {
    label: "Up Next",
    color: "text-brand-purple",
    bgColor: "bg-brand-purple/10",
    borderColor: "border-brand-purple/30",
  },
  planned: {
    label: "Planned",
    color: "text-muted-foreground",
    bgColor: "bg-muted/60",
    borderColor: "border-border",
  },
  future: {
    label: "Future Vision",
    color: "text-brand-cyan",
    bgColor: "bg-brand-cyan/10",
    borderColor: "border-brand-cyan/30",
  },
};

function StatusBadge({ status }: { status: PhaseStatus }) {
  const cfg = statusConfig[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${cfg.color} ${cfg.bgColor} border ${cfg.borderColor}`}>
      {status === "completed" && <CheckCircle2 className="w-3 h-3" />}
      {status === "in-progress" && <Clock className="w-3 h-3 animate-pulse" />}
      {status === "up-next" && <Zap className="w-3 h-3" />}
      {status === "planned" && <Eye className="w-3 h-3" />}
      {status === "future" && <Sparkles className="w-3 h-3" />}
      {cfg.label}
    </span>
  );
}

function PhaseCard({ phase, index }: { phase: Phase; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const isActive = phase.status === "in-progress";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < phases.length - 1 && (
        <div className="absolute left-6 lg:left-8 top-16 bottom-0 w-px bg-border z-0" />
      )}

      <div
        className={`relative z-10 rounded-2xl border p-5 sm:p-6 lg:p-8 transition-all duration-300 cursor-pointer group ${
          isActive
            ? "border-brand-midblue/40 bg-brand-midblue/5 shadow-[0_0_30px_rgba(55,79,217,0.08)]"
            : "border-border bg-card hover:border-primary/20 hover:shadow-soft"
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start gap-4 lg:gap-6">
          {/* Phase number + icon */}
          <div
            className={`shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              isActive
                ? "gradient-bg shadow-glow"
                : phase.status === "completed"
                ? "bg-emerald-500/10 border border-emerald-500/30"
                : "bg-secondary border border-border group-hover:border-primary/30"
            }`}
          >
            <phase.icon
              className={`w-5 h-5 lg:w-7 lg:h-7 ${
                isActive ? "text-white" : phase.status === "completed" ? "text-emerald-600" : "text-muted-foreground group-hover:text-brand-midblue"
              }`}
              strokeWidth={1.5}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-xs font-medium text-muted-foreground">Phase {phase.id}</span>
              <StatusBadge status={phase.status} />
            </div>

            <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-brand-midblue transition-colors">
              {phase.title}
            </h3>

            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              {phase.summary}
            </p>

            {/* Expand indicator */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
              <span>{expanded ? "Show less" : "View details"}</span>
            </div>
          </div>
        </div>

        {/* Expanded content */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 ml-16 lg:ml-[88px] border-t border-border pt-6"
          >
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Key Highlights</h4>
            <ul className="space-y-2 mb-4">
              {phase.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "var(--gradient-brand)" }} />
                  {h}
                </li>
              ))}
            </ul>

            {phase.whyItMatters && (
              <div className="rounded-xl bg-secondary/50 border border-border p-4">
                <p className="text-xs font-semibold text-brand-midblue mb-1">Why This Matters</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{phase.whyItMatters}</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// Find the current active phase index for the progress bar
const currentPhaseIndex = phases.findIndex((p) => p.status === "in-progress");
const progressPercent = ((currentPhaseIndex + 0.5) / phases.length) * 100;

export default function Roadmap() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] opacity-20 blur-3xl rounded-full gradient-bg transform translate-x-[30%] -translate-y-[30%]" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] lg:w-[480px] lg:h-[480px] opacity-15 blur-3xl rounded-full gradient-bg transform -translate-x-[30%] translate-y-[30%]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-midblue/10 border border-brand-purple/30 mb-6">
              <Compass className="w-4 h-4 text-brand-midblue" />
              <span className="text-sm font-medium text-brand-midblue">Product Roadmap</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-5">
              The BlanketSmith{" "}
              <span className="gradient-text">Roadmap</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
              From modern pattern design to a full maker community platform.
            </p>

            <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto mb-10">
              BlanketSmith starts with a better way to design and build patterns, then grows into a
              place where makers can learn, share, connect, and build something bigger together.
            </p>

            <Button variant="gradient" size="lg" asChild>
              <a href="#roadmap-timeline">
                Explore the Roadmap
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Current Status Strip */}
      <section className="py-10 lg:py-14 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Where We Are Now
              </h2>
              <p className="font-sans text-muted-foreground">
                BlanketSmith is currently moving from private product building into early public access
                and beta preparation.
              </p>
            </div>

            {/* Progress bar */}
            <div className="relative">
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-brand)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progressPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-xs text-muted-foreground">Foundation</span>
                <span className="text-xs font-medium text-brand-midblue">Beta Prep</span>
                <span className="text-xs text-muted-foreground">Public Release</span>
                <span className="text-xs text-muted-foreground">Platform</span>
              </div>
            </div>

            {/* Now / Next / Later strip */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: "Now", desc: "Polishing the tool and beta readiness", status: "in-progress" as PhaseStatus },
                { label: "Next", desc: "Pre-beta signups and early access", status: "up-next" as PhaseStatus },
                { label: "Later", desc: "Beta launch and community testing", status: "planned" as PhaseStatus },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-card p-4 text-center hover:border-primary/20 hover:shadow-soft transition-all"
                >
                  <StatusBadge status={item.status} />
                  <p className="font-display text-lg font-bold text-foreground mt-3">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section id="roadmap-timeline" className="py-20 lg:py-28 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                The Journey
              </h2>
              <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
                Click any phase to explore the details. The roadmap is designed to grow in the right
                order: start with usefulness, earn trust through quality, listen during beta, then
                expand into the broader community platform vision.
              </p>
            </div>

            <div className="space-y-4">
              {phases.map((phase, index) => (
                <PhaseCard key={phase.id} phase={phase} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Roadmap Matters */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why This Roadmap Matters
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
              BlanketSmith is intentionally being built in phases: solve a real problem with a real
              tool, learn from real users, stabilize the product, then expand into a community
              ecosystem and build sustainability without losing the mission.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                { title: "Tool First", desc: "Start by solving a real problem with a great product." },
                { title: "Community Second", desc: "Earn trust, then build the platform around the people who use it." },
                { title: "Sustainability Third", desc: "Grow responsibly so the mission stays intact long-term." },
              ].map((v) => (
                <div key={v.title} className="p-5 rounded-xl border border-border bg-card">
                  <div className="h-1 w-8 rounded-full mb-3" style={{ background: "var(--gradient-brand)" }} />
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Tool */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Beyond the Tool
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-10">
              The long-term vision for BlanketSmith is a platform where digital tools, education,
              community, and creator opportunity all come together in one place. The future is not
              just more features—it's better support for makers, a stronger knowledge ecosystem,
              more visibility for creators, and a place to share and grow.
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card">
              <div className="flex -space-x-2">
                {[Wrench, Users, Store, TrendingUp].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Icon className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Tool → Platform → Ecosystem</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Join the Journey
            </h2>
            <p className="font-sans text-primary-foreground/80 text-lg mb-10">
              BlanketSmith is being built one thoughtful phase at a time—with the goal of giving
              makers better tools today and a stronger platform tomorrow.
            </p>
            <Button
              size="xl"
              className="bg-background text-foreground hover:bg-background/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg font-sans"
              asChild
            >
              <Link to="/beta-signup">
                Get Ready for Beta
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
