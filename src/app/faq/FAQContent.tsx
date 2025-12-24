"use client";

import { motion } from "framer-motion";
import { Accordion, Button } from "@/components/ui";

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  items: { id: string; question: string; answer: string }[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Getting Started",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    items: [
      {
        id: "gs-1",
        question: "How do we get started working together?",
        answer:
          "It starts with a conversation. Fill out our contact form or book a call, and we'll schedule a 30-minute discovery session. We'll discuss your current GTM challenges, tech stack, and goals. From there, we'll recommend the right track (Audit, Ops, or AI Agents) and provide a proposal within a few days.",
      },
      {
        id: "gs-2",
        question: "What's the typical project timeline?",
        answer:
          "It depends on the scope. GTM Audits typically take 2-3 weeks. Autonomous Ops projects range from 4-8 weeks. Custom AI Agents take 6-12 weeks. We'll provide a specific timeline in our proposal based on your requirements.",
      },
      {
        id: "gs-3",
        question: "How much does it cost?",
        answer:
          "Pricing varies based on scope and complexity. GTM Audits start at $10,000. Autonomous Ops projects typically range from $15,000-$50,000. AI Agent development starts at $25,000. We provide detailed proposals with fixed pricing — no surprises.",
      },
      {
        id: "gs-4",
        question: "Do you offer ongoing support after the project?",
        answer:
          "Yes. All projects include 30 days of post-launch support. After that, we offer monthly retainer packages for ongoing optimization, monitoring, and enhancement. Many clients choose to keep us on retainer for continuous improvement.",
      },
    ],
  },
  {
    title: "Technical",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    items: [
      {
        id: "tech-1",
        question: "What platforms and tools do you work with?",
        answer:
          "We specialize in HubSpot and Salesforce as primary CRMs. For automation, we use n8n (self-hosted or cloud) and custom Python scripts. For AI agents, we work with OpenAI, Anthropic, and open-source models. We also integrate with common GTM tools like Clearbit, Apollo, ZoomInfo, Slack, and more.",
      },
      {
        id: "tech-2",
        question: "Do you build on our existing infrastructure or replace it?",
        answer:
          "We build on top of what you have. Our philosophy is to enhance and optimize your existing stack, not rip and replace. That said, if something needs to change (like an outdated tool), we'll tell you — but we always provide migration support.",
      },
      {
        id: "tech-3",
        question: "Who maintains the systems you build?",
        answer:
          "We design for handoff. All systems come with documentation, monitoring dashboards, and training. Your team can maintain day-to-day operations. For complex systems or AI agents, we recommend a support retainer for ongoing optimization and model updates.",
      },
      {
        id: "tech-4",
        question: "Is our data secure?",
        answer:
          "Absolutely. We follow security best practices including encrypted connections, minimal access principles, and data handling agreements. We never store your data on our systems beyond what's necessary for development. For AI agents, we can deploy fully within your infrastructure if required.",
      },
    ],
  },
  {
    title: "Process",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"
        />
      </svg>
    ),
    items: [
      {
        id: "proc-1",
        question: "How do you communicate during projects?",
        answer:
          "We're forward deployed — meaning we embed with your team. We join your Slack (or preferred communication tool), provide weekly status updates, and are available for ad-hoc questions. You'll have a dedicated project lead as your single point of contact.",
      },
      {
        id: "proc-2",
        question: "Do you work with our internal teams or independently?",
        answer:
          "Both, depending on your preference. We can work independently and deliver turnkey solutions, or we can work alongside your RevOps, Sales Ops, or Engineering teams. Collaborative projects often have better long-term outcomes because your team learns the systems.",
      },
      {
        id: "proc-3",
        question: "What if the project scope changes?",
        answer:
          "Scope changes happen. We handle them transparently — if new requirements emerge, we'll discuss the impact on timeline and budget before proceeding. We use fixed-scope phases, so changes are contained and manageable.",
      },
      {
        id: "proc-4",
        question: "How do you measure success?",
        answer:
          "Every project starts with defined success criteria. We measure against specific KPIs like time saved, lead response time, data accuracy, or pipeline attribution. We provide before/after metrics and a post-launch report showing the impact.",
      },
    ],
  },
  {
    title: "Results",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    items: [
      {
        id: "res-1",
        question: "What kind of ROI can I expect?",
        answer:
          "Most clients see positive ROI within 3-6 months. Common outcomes include 10-20+ hours/week saved on manual tasks, 50-90% faster lead response times, and 20-40% improvements in conversion rates. We provide ROI projections in our proposals based on your specific situation.",
      },
      {
        id: "res-2",
        question: "Do you guarantee results?",
        answer:
          "We don't offer money-back guarantees, but we do guarantee our work. If something we build doesn't perform as specified, we fix it at no additional cost. We also maintain relationships beyond project completion — your success is our success.",
      },
      {
        id: "res-3",
        question: "Can you share references or case studies?",
        answer:
          "Yes. Check out our Work page for detailed case studies. We can also connect you with past clients for reference calls upon request. We're proud of the results we've delivered.",
      },
      {
        id: "res-4",
        question: "What happens if something breaks after launch?",
        answer:
          "All projects include 30 days of bug-fix support. If something we built breaks due to our work, we fix it at no cost. For issues caused by third-party changes (like API updates), we help resolve them under support retainer or on a time-and-materials basis.",
      },
    ],
  },
];

export function FAQContent() {
  return (
    <div className="pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {faqCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-12"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-terminal-green/10 flex items-center justify-center text-terminal-green">
                {category.icon}
              </div>
              <h2 className="text-xl font-semibold tracking-tight">
                {category.title}
              </h2>
            </div>

            {/* Questions */}
            <Accordion items={category.items} />
          </motion.div>
        ))}

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-lg border border-surface-border bg-surface/30 text-center"
        >
          <h3 className="text-xl font-semibold tracking-tight mb-2">
            Still have questions?
          </h3>
          <p className="text-steel-grey mb-6">
            We're here to help. Reach out and we'll get back to you within 24
            hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/#contact">Send a Message</Button>
            <Button variant="secondary" href="mailto:info@verluna.de">
              Email Us Directly
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
