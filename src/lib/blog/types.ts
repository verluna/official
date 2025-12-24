export interface Author {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export type BlogCategory =
  | "gtm-engineering"
  | "ai-agents"
  | "automation"
  | "case-study"
  | "tutorial";

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: BlogCategory;
  tags: string[];
  featured?: boolean;
  draft?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

export type PostMeta = Omit<Post, "content">;

export const categoryLabels: Record<BlogCategory, string> = {
  "gtm-engineering": "GTM Engineering",
  "ai-agents": "AI Agents",
  automation: "Automation",
  "case-study": "Case Study",
  tutorial: "Tutorial",
};

export const categoryColors: Record<BlogCategory, "green" | "purple" | "blue"> =
  {
    "gtm-engineering": "green",
    "ai-agents": "purple",
    automation: "blue",
    "case-study": "green",
    tutorial: "blue",
  };
