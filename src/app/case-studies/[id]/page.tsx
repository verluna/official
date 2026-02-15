import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/copy/caseStudies";
import { CaseStudyDetail } from "./CaseStudyDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ id: cs.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudies.find((cs) => cs.id === id);

  if (!study) {
    return { title: "Case Study Not Found | Verluna" };
  }

  return {
    title: `${study.title} | Verluna Case Studies`,
    description: study.results,
    openGraph: {
      title: study.title,
      description: study.results,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const studyIndex = caseStudies.findIndex((cs) => cs.id === id);

  if (studyIndex === -1) {
    notFound();
  }

  const study = caseStudies[studyIndex];
  const nextStudy =
    studyIndex < caseStudies.length - 1 ? caseStudies[studyIndex + 1] : null;

  return <CaseStudyDetail study={study} nextStudy={nextStudy} />;
}
