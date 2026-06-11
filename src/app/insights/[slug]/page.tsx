import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog/posts";
import { compileBlogMDX } from "@/lib/blog/mdx";
import {
  ArticleBody,
  ArticleHeader,
  AuthorNote,
  RelatedReading,
} from "@/components/insights";

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
      url: "https://verluna.de",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://verluna.de/insights/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHeader post={post} />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-24">
        <article>
          <ArticleBody>{content}</ArticleBody>
        </article>

        <div className="mt-16 border-t border-line pt-10">
          <AuthorNote authorId={post.author} />
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <RelatedReading posts={relatedPosts} />
          </div>
        )}
      </div>
    </>
  );
}
