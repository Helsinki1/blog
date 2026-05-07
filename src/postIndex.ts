export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: "algorithms" | "deep-learning" | "systems" | "compass";
}

export const posts: PostMeta[] = [
  { slug: "dynamic-programming", title: "dynamic programming", date: "2026-05-01", category: "algorithms" },
  { slug: "backpropagation", title: "backpropagation", date: "2026-04-15", category: "deep-learning" },
  { slug: "ptrace-debugger", title: "building a ptrace debugger", date: "2026-03-20", category: "systems" },
];

export const categoryLabels: Record<PostMeta["category"], string> = {
  algorithms: "algorithms",
  "deep-learning": "deep learning",
  systems: "systems programming",
  compass: "compass",
};
