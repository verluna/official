import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog/posts";
import { compileBlogMDX } from "@/lib/blog/mdx";
import {
  BlogHeader,
  BlogContent,
  RelatedPosts,
  AuthorCard,
  ArticleDiagram,
} from "@/components/blog";
import { getDiagramForSlug } from "@/data/articleDiagrams";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Verluna",
    };
  }

  return {
    title: `${post.title} | Verluna Insights`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileBlogMDX(post.content);
  const relatedPosts = getRelatedPosts(slug, post.category, post.tags);
  const diagramConfig = getDiagramForSlug(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Verluna",
    },
    publisher: {
      "@type": "Organization",
      name: "Verluna",
      url: "https://verluna.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://verluna.com/insights/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogHeader post={post} />

      {/* Article Architecture Diagram */}
      {diagramConfig && (
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ArticleDiagram config={diagramConfig} />
          </div>
        </section>
      )}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-24">
        <article>
          <BlogContent>{content}</BlogContent>
        </article>

        {/* Author card */}
        <div className="mt-16 pt-8 border-t border-surface-border">
          <AuthorCard authorId={post.author} />
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-24">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </div>
    </>
  );
}
