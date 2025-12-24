import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Post, PostMeta, BlogCategory } from "./types";

const POSTS_PATH = path.join(process.cwd(), "src/content/insights");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_PATH)) {
    return [];
  }
  return fs
    .readdirSync(POSTS_PATH)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    content,
    readingTime: stats,
    ...data,
  } as Post;
}

export function getAllPosts(options?: {
  includeDrafts?: boolean;
  category?: BlogCategory;
  tag?: string;
  featured?: boolean;
}): PostMeta[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .filter((post) => options?.includeDrafts || !post.draft)
    .filter((post) => !options?.category || post.category === options.category)
    .filter((post) => !options?.tag || post.tags.includes(options.tag))
    .filter((post) => !options?.featured || post.featured)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts.map(({ content, ...meta }) => meta);
}

export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts({ featured: true }).slice(0, 3);
}

export function getRelatedPosts(
  currentSlug: string,
  category: BlogCategory,
  tags: string[],
  limit = 3
): PostMeta[] {
  const allPosts = getAllPosts();

  return allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => ({
      post,
      score: calculateRelevance(post, category, tags),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}

function calculateRelevance(
  post: PostMeta,
  category: BlogCategory,
  tags: string[]
): number {
  let score = 0;
  if (post.category === category) score += 2;
  tags.forEach((tag) => {
    if (post.tags.includes(tag)) score += 1;
  });
  return score;
}

export function getAllCategories(): BlogCategory[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap((p) => p.tags));
  return Array.from(tags).sort();
}

export function getCategoriesWithCount(): {
  category: BlogCategory;
  count: number;
}[] {
  const posts = getAllPosts();
  const categoryCount: Record<string, number> = {};

  posts.forEach((post) => {
    categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
  });

  return Object.entries(categoryCount)
    .map(([category, count]) => ({ category: category as BlogCategory, count }))
    .sort((a, b) => b.count - a.count);
}

export function getTagsWithCount(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const tagCount: Record<string, number> = {};

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCount)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
