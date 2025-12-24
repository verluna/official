import { Metadata } from "next";
import { PageHeader, BentoCard, Button, Badge } from "@/components/ui";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | Verluna - GTM Engineering",
  description:
    "Explore our three tracks: GTM Audit, Autonomous Ops, and Custom AI Agents. We engineer revenue infrastructure that runs itself.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Engineering Your Revenue Infrastructure"
        description="We offer three distinct tracks designed to meet you where you are and take you where you need to go. Whether you need a diagnostic, automation, or AI augmentation — we build systems that scale."
      />
      <ServicesContent />
    </>
  );
}
