import { Metadata } from "next";
import { notFound } from "next/navigation";
import { newCaseStudies } from "@/data/copy/newCaseStudies";
import { CaseStudyDetail } from "@/components/case-studies/CaseStudyDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newCaseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = newCaseStudies.find((cs) => cs.slug === slug);

  if (!study) {
    return { title: "Case Study Not Found | Verluna" };
  }

  return {
    title: `${study.title} | Verluna Case Studies`,
    description: study.headline,
    openGraph: {
      title: `${study.title} | Verluna`,
      description: study.headline,
      type: "article",
    },
    alternates: {
      canonical: `https://verluna.de/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const studyIndex = newCaseStudies.findIndex((cs) => cs.slug === slug);

  if (studyIndex === -1) {
    notFound();
  }

  const study = newCaseStudies[studyIndex];
  const nextStudy =
    studyIndex < newCaseStudies.length - 1 ? newCaseStudies[studyIndex + 1] : null;

  return <CaseStudyDetail study={study} nextStudy={nextStudy} />;
}
