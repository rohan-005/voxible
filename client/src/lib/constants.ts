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
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Documentation", href: "#docs" },
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
      "Turn one technical topic into structured, publish-ready content through an automated generation pipeline.",
    badge: "FAST PIPELINE",
  },
  {
    icon: BrainCircuit,
    title: "Local AI Generation",
    description:
      "Generate technical content locally using Ollama and Qwen3 without depending on expensive hosted APIs.",
  },
  {
    icon: Globe2,
    title: "Multi-platform",
    description:
      "Adapt one topic into LinkedIn posts, X threads, and structured blog content automatically.",
  },
  {
    icon: TerminalSquare,
    title: "Developer First API",
    description:
      "A modular pipeline designed around research, structure, visuals, formatting, and final packaging.",
    code: `const result = await voxible.generate({
  topic: "Unity ECS",
  domain: "gamedev"
});`,
  },
];