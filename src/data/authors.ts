import { Author } from "@/lib/blog/types";

export const authors: Record<string, Author> = {
  "verluna-team": {
    id: "verluna-team",
    name: "Verluna Team",
    role: "GTM Engineering",
    bio: "Engineers who understand go-to-market. We build autonomous revenue engines using code, not configuration.",
    social: {
      linkedin: "https://linkedin.com/company/verluna",
    },
  },
  "tolga-oral": {
    id: "tolga-oral",
    name: "Tolga Oral",
    role: "Founder & GTM Engineer",
    avatar: "/images/team/tolga-oral.jpg",
    bio: "8+ years architecting integrated growth engines for ambitious tech companies. Building bridges between marketing, sales, and operations.",
    social: {
      linkedin: "https://www.linkedin.com/in/tolga-oral/",
    },
  },
};

export function getAuthor(id: string): Author | undefined {
  return authors[id];
}
