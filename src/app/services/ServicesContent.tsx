"use client";

import { motion } from "framer-motion";
import { BentoCard, Button, Badge } from "@/components/ui";

interface ServiceTrack {
  id: string;
  track: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "purple";
  idealFor: string[];
  process: { step: string; description: string }[];
  deliverables: string[];
  timeline: string;
}

const services: ServiceTrack[] = [
  {
    id: "audit",
    track: "Track A",
    title: "GTM Audit",
    tagline: "Find the leaks.",
    description:
      "A comprehensive diagnostic of your entire go-to-market infrastructure. We map your data flows, identify bottlenecks, and deliver a prioritized roadmap for optimization.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    ),
    color: "blue",
    idealFor: [
      "Companies scaling past $1M ARR",
      "Teams with 3+ tools in their GTM stack",
      "Organizations experiencing data quality issues",
      "Leaders who suspect they're leaving money on the table",
    ],
    process: [
      {
        step: "Discovery",
        description:
          "We interview stakeholders, review your tech stack, and map existing workflows.",
      },
      {
        step: "Analysis",
        description:
          "Deep dive into data flows, integration points, and process inefficiencies.",
      },
      {
        step: "Diagnosis",
        description:
          "Identify root causes, quantify impact, and prioritize opportunities.",
      },
      {
        step: "Roadmap",
        description:
          "Deliver actionable recommendations with effort/impact scoring.",
      },
    ],
    deliverables: [
      "Complete data flow diagram",
      "Tech stack architecture map",
      "Bottleneck analysis report",
      "Prioritized optimization roadmap",
      "Quick wins implementation guide",
      "Executive summary presentation",
    ],
    timeline: "2-3 weeks",
  },
  {
    id: "ops",
    track: "Track B",
    title: "Autonomous Ops",
    tagline: "Fix the flow.",
    description:
      "We build the automation infrastructure that makes your GTM operations run on autopilot. From lead routing to attribution modeling — we engineer systems that eliminate manual work.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    color: "green",
    idealFor: [
      "Teams spending 10+ hours/week on manual data tasks",
      "Companies with lead response times over 5 minutes",
      "Organizations needing better attribution visibility",
      "Growing teams that can't hire fast enough",
    ],
    process: [
      {
        step: "Blueprint",
        description:
          "Design the automation architecture based on your specific workflows.",
      },
      {
        step: "Build",
        description:
          "Develop workflows in n8n with proper error handling and monitoring.",
      },
      {
        step: "Integrate",
        description:
          "Connect to your CRM, enrichment tools, and communication platforms.",
      },
      {
        step: "Deploy",
        description:
          "Launch with monitoring dashboards and documentation.",
      },
    ],
    deliverables: [
      "Custom n8n workflow suite",
      "CRM integration layer",
      "Real-time monitoring dashboard",
      "Error handling & alerting",
      "Process documentation",
      "Team training session",
    ],
    timeline: "4-8 weeks",
  },
  {
    id: "agents",
    track: "Track C",
    title: "Custom AI Agents",
    tagline: "Scale the workforce.",
    description:
      "We build AI agents that handle complex, judgment-based tasks your team does today. From RFP analysis to lead qualification — these agents work 24/7 and improve over time.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "purple",
    idealFor: [
      "Companies processing high volumes of documents",
      "Teams with repetitive research or analysis tasks",
      "Organizations wanting to scale without hiring",
      "Leaders looking to leverage AI strategically",
    ],
    process: [
      {
        step: "Scope",
        description:
          "Define the agent's role, inputs, outputs, and success criteria.",
      },
      {
        step: "Design",
        description:
          "Architect the RAG pipeline, prompts, and evaluation framework.",
      },
      {
        step: "Develop",
        description:
          "Build and test the agent with your real-world data and scenarios.",
      },
      {
        step: "Iterate",
        description:
          "Refine based on feedback and deploy with human-in-the-loop safeguards.",
      },
    ],
    deliverables: [
      "Custom AI agent deployment",
      "RAG knowledge base",
      "Evaluation & monitoring suite",
      "API integration layer",
      "Human-in-the-loop workflow",
      "Performance analytics dashboard",
    ],
    timeline: "6-12 weeks",
  },
];

const colorStyles = {
  green: {
    text: "text-terminal-green",
    bg: "bg-terminal-green/10",
    border: "border-terminal-green/20",
    badge: "green" as const,
  },
  blue: {
    text: "text-signal-blue",
    bg: "bg-signal-blue/10",
    border: "border-signal-blue/20",
    badge: "blue" as const,
  },
  purple: {
    text: "text-electric-purple",
    bg: "bg-electric-purple/10",
    border: "border-electric-purple/20",
    badge: "purple" as const,
  },
};

export function ServicesContent() {
  return (
    <div className="pb-24">
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold tracking-tighter mb-4">
              Not sure which track is right for you?
            </h2>
            <p className="text-steel-grey max-w-2xl mx-auto mb-8">
              Every engagement starts with a conversation. Tell us about your
              challenges and we&apos;ll recommend the best path forward.
            </p>
            <Button href="/#contact" size="lg">
              Start the Conversation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceSection({
  service,
  index,
}: {
  service: ServiceTrack;
  index: number;
}) {
  const colors = colorStyles[service.color];
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      className={`py-24 ${isEven ? "" : "bg-charcoal/30"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant={colors.badge}>{service.track}</Badge>
            <div
              className={`mt-6 w-16 h-16 rounded-lg flex items-center justify-center ${colors.bg} ${colors.text}`}
            >
              {service.icon}
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tighter">
              {service.title}
            </h2>
            <p className={`mt-2 text-lg font-mono ${colors.text}`}>
              {service.tagline}
            </p>
            <p className="mt-4 text-steel-grey leading-relaxed">
              {service.description}
            </p>

            {/* Timeline */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-sm text-steel-grey">Typical timeline:</span>
              <span className={`font-mono ${colors.text}`}>
                {service.timeline}
              </span>
            </div>

            {/* Ideal For */}
            <div className="mt-8">
              <h3 className="text-sm font-mono text-steel-grey uppercase tracking-wider mb-4">
                Ideal For
              </h3>
              <ul className="space-y-2">
                {service.idealFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-off-white">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full ${colors.bg} ${colors.text} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Process & Deliverables */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Process */}
            <BentoCard>
              <h3 className="text-lg font-semibold tracking-tight mb-6">
                Process
              </h3>
              <div className="space-y-4">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${colors.bg} ${colors.text} font-mono text-sm`}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-off-white">
                        {step.step}
                      </h4>
                      <p className="text-sm text-steel-grey mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Deliverables */}
            <BentoCard>
              <h3 className="text-lg font-semibold tracking-tight mb-6">
                Deliverables
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((deliverable, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-steel-grey"
                  >
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${colors.text}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </BentoCard>

            {/* CTA */}
            <Button
              href="/#contact"
              variant="secondary"
              className="w-full justify-center"
            >
              Get Started with {service.title}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
