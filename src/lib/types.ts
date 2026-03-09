export type SignalSpeed = "Fast" | "Medium" | "Slow";

export type LoopBlock = {
  summary: string;
  bullets: string[];
  snippet: string;
};

export type LoopExample = {
  title: string;
  insight: string;
  payoff: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  sortOrder: number;
};

export type LoopTemplate = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  audience: string;
  tags: string[];
  signalSpeed: SignalSpeed;
  primaryMetric: string;
  variables: string[];
  featured: boolean;
  baseline: LoopBlock;
  template: LoopBlock;
  program: LoopBlock;
  examples: LoopExample[];
  relatedSlugs: string[];
};
