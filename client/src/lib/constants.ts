import {
  Search,
  Workflow,
  ImageIcon,
  Code2,
  Package,
  Zap,
  BrainCircuit,
  Globe2,
  TerminalSquare,
  ShieldCheck,
  Layers3,
} from "lucide-react";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pipeline",
    href: "#pipeline",
  },
  {
    label: "Documentation",
    href: "#docs",
  },
];

export const PIPELINE_STEPS = [
  {
    number: "01",
    label: "Research",
    icon: Search,
    active: true,
  },
  {
    number: "02",
    label: "Structure",
    icon: Workflow,
    active: true,
  },
  {
    number: "03",
    label: "Visuals",
    icon: ImageIcon,
    active: true,
  },
  {
    number: "04",
    label: "Format",
    icon: Code2,
    active: false,
  },
  {
    number: "05",
    label: "Package",
    icon: Package,
    active: false,
  },
];

export const STATS = [
  {
    label: "Time Saved/Wk",
    value: "14.5 hrs",
  },
  {
    label: "Pipeline Stages",
    value: "5",
  },
  {
    label: "Formats Supported",
    value: "LinkedIn, X, Blog",
  },
  {
    label: "Local MVP Cost",
    value: "$0",
  },
];

export const CAPABILITIES = [
  {
    icon: Zap,
    title: "Under 5 Minutes",
    description:
      "Turn a single technical topic into structured, publish-ready content through a fast automated workflow. Voxible coordinates research, content planning, visual direction, platform formatting, and final packaging without forcing creators to repeat the same manual process.",
    badge: "FAST PIPELINE",
    meta: "Topic → Publish",
  },
  {
    icon: BrainCircuit,
    title: "Local AI Generation",
    description:
      "Generate technical content locally using Ollama and Qwen3 without depending entirely on expensive hosted APIs. Keep the MVP cost-efficient while maintaining a flexible architecture that can later support additional local or cloud-based language models.",
    badge: "LOCAL FIRST",
    meta: "Ollama + Qwen3",
  },
  {
    icon: Globe2,
    title: "Multi-platform Content",
    description:
      "Transform one source topic into platform-specific content for LinkedIn posts, X threads, and structured long-form blogs. Each output can follow its own tone, length, formatting rules, and publishing style instead of simply duplicating the same text.",
    meta: "LinkedIn · X · Blog",
  },
  {
    icon: TerminalSquare,
    title: "Developer First API",
    description:
      "Integrate content generation into developer workflows through a modular API surface. Submit a topic and domain, run the pipeline, inspect generated outputs, and extend individual stages without tightly coupling the complete system.",
    badge: "API READY",
    meta: "Typed Workflow",
    code: `const result = await voxible.generate({
  topic: "Unity ECS",
  domain: "gamedev",
  formats: ["linkedin", "x", "blog"]
});`,
  },
  {
    icon: Layers3,
    title: "Modular Pipeline Control",
    description:
      "Treat research, structure, visuals, formatting, and packaging as independent stages rather than one opaque generation request. This makes the workflow easier to debug, improve, retry, and extend as Voxible grows into a larger automation platform.",
    meta: "5 Modular Stages",
  },
  {
    icon: ShieldCheck,
    title: "Creator Controlled Output",
    description:
      "Keep creators in control of generated content before anything is published. Review structured drafts, refine technical explanations, adjust platform-specific output, and preserve a human approval layer throughout the content automation workflow.",
    badge: "HUMAN IN LOOP",
    meta: "Review → Refine → Ship",
  },
];