export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  background: {
    company: string;
    role: string;
    years?: string;
  }[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  avatar?: string;
}

export interface CompanyMilestone {
  id: string;
  commitHash: string;
  date: string;
  title: string;
  description: string;
  type: "founded" | "milestone" | "client" | "launch";
}

export interface Certification {
  name: string;
  issuer: string;
  variant: "green" | "purple" | "blue";
}

export const teamMembers: TeamMember[] = [
  {
    id: "tolga-oral",
    name: "Tolga Oral",
    role: "Founder & GTM Engineer",
    bio: "For the past 8+ years, I've been focused on one thing: architecting the integrated growth engines that scale ambitious tech companies. I deliberately built my career across marketing, sales, and operations because I believe the biggest risk to any business is having these functions work in silos. My role is to be the architect who connects them, building a single, cohesive system that drives sustainable revenue.",
    expertise: [
      "GTM Strategy",
      "AI Automation",
      "Performance Marketing",
      "CRM Architecture",
      "Team Leadership",
      "n8n / HubSpot",
    ],
    background: [
      { company: "DeepL", role: "Digital Lifecycle Manager", years: "2025" },
      { company: "Verluna", role: "Founder & Consultant", years: "2024" },
      { company: "Tradelite Solutions", role: "Marketing Lead", years: "2023-2024" },
      { company: "Concentrix", role: "Team Lead, AdTech & Sales Operations", years: "2020-2023" },
      { company: "NonNocere", role: "Sales & Business Development", years: "2019-2020" },
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/tolga-oral/",
    },
    avatar: "/images/team/tolga-oral.png",
  },
];

export const milestones: CompanyMilestone[] = [
  {
    id: "m1",
    commitHash: "a1b2c3d",
    date: "Sep 2024",
    title: "Verluna Founded",
    description:
      "Started Verluna in Berlin with a mission to help brands accelerate growth through paid acquisition, CRM strategy, and lifecycle automation.",
    type: "founded",
  },
  {
    id: "m2",
    commitHash: "e4f5g6h",
    date: "Q4 2024",
    title: "First Enterprise Clients",
    description:
      "Signed first SaaS, hospitality, and e-commerce clients. Built CRM workflows increasing MQL-to-SQL conversion rates by up to 35%.",
    type: "client",
  },
  {
    id: "m3",
    commitHash: "i7j8k9l",
    date: "2024",
    title: "AI Automation Stack Deployed",
    description:
      "Developed performance dashboards integrating GA4, Meta Ads, and CRM data. Implemented n8n workflows for real-time decision-making.",
    type: "milestone",
  },
  {
    id: "m4",
    commitHash: "m0n1o2p",
    date: "2025",
    title: "GTM Engineering Focus",
    description:
      "Evolved from digital marketing to full GTM Engineering services. Launched service tracks for audits, autonomous ops, and custom AI agents.",
    type: "launch",
  },
];

export const certifications: Certification[] = [
  { name: "AI Agents & n8n Workflows", issuer: "LinkedIn", variant: "purple" },
  { name: "Marketing Automation with HubSpot", issuer: "Coursera", variant: "green" },
  { name: "Google Analytics Certified", issuer: "Google", variant: "blue" },
  { name: "AI-Powered Performance Ads", issuer: "Google", variant: "blue" },
  { name: "Meta Marketing Analytics", issuer: "Meta", variant: "blue" },
  { name: "Amazon DSP Certified", issuer: "Amazon", variant: "purple" },
];

export function getTeamMember(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id);
}

export function getFounder(): TeamMember {
  return teamMembers[0];
}
