import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { PostFrontmatter } from "./types";
import { mdxComponents } from "./mdx-components";

const rehypePrettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
  onVisitLine(node: { children: { type: string; value: string }[] }) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: { properties: { className?: string[] } }) {
    node.properties.className = ["line--highlighted"];
  },
  onVisitHighlightedChars(node: { properties: { className?: string[] } }) {
    node.properties.className = ["word--highlighted"];
  },
};

export async function compileBlogMDX(source: string) {
  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [rehypePrettyCode, rehypePrettyCodeOptions],
        ],
      },
    },
  });

  return { content, frontmatter };
}
