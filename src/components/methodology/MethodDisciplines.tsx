import { Reveal } from "@/components/home";

interface Discipline {
  name: string;
  tagline: string;
  paragraphs: string[];
  steps: string[];
  outcome: string;
}

const disciplines: Discipline[] = [
  {
    name: "Audit",
    tagline: "Start by watching, not building.",
    paragraphs: [
      "We watch how the operation actually works today. Not how the process document describes it: how people spend their time, where information breaks, which decisions need judgment and which are mechanical.",
      "Then we break the messy reality into bounded domains. Each domain gets a clear owner, inputs, and outputs. The boundaries between domains become routing rules.",
    ],
    steps: [
      "Map who does what and where information flows or breaks",
      "Separate judgment calls from mechanical decisions",
      "Group work into domains by decision type, not by org chart",
      "Define routing rules and data flows across the boundaries",
    ],
    outcome:
      "A current-state map, a domain boundary map, and a prioritized roadmap with effort, risk, and expected return.",
  },
  {
    name: "Architect",
    tagline: "Structure before code.",
    paragraphs: [
      "We design the operating layer before writing a line of it. Six components make agent operations dependable: routing, specialization, governance, memory, cadences, and observability.",
      "Governance is explicit from the start: what runs autonomously, what waits for human approval, and how the system escalates when it hits an edge case.",
    ],
    steps: [
      "Routing: incoming work reaches the right agent or process",
      "Specialization: dedicated agents per domain, no general-purpose monolith",
      "Governance: autonomous by default, human approval where it matters",
      "Memory, cadences, and observability complete the layer",
    ],
    outcome:
      "An architecture decision record, an agent topology, and a governance framework your team can build against.",
  },
  {
    name: "Build",
    tagline: "Production systems, not demos.",
    paragraphs: [
      "We build with AI as both the development medium and the runtime, which puts working systems weeks away instead of quarters. Agents are wired into your CRM, support desk, and data stack with observability from day one.",
      "Then we push each process as far up the autonomy gradient as it can safely go. People stay in the loop only where judgment is required.",
    ],
    steps: [
      "Deploy agents integrated with your existing tools",
      "Ship automated tests and a deployment runbook",
      "Set escalation paths and monitoring for autonomous operation",
      "Iterate on real usage, not on specifications",
    ],
    outcome: "A deployed, monitored, documented system, handed over.",
  },
  {
    name: "Codify",
    tagline: "Knowledge your organization owns.",
    paragraphs: [
      "Process knowledge that lives in people's heads becomes versioned playbooks and skills your agents execute. We document the patterns, the decision criteria, and the failure modes, then train your team to extend the system without us.",
      "Codify also closes the loop. What the system learns in production feeds the next audit, and every cycle makes the next build faster.",
    ],
    steps: [
      "Turn implicit process knowledge into versioned playbooks",
      "Hand over architecture documentation and runbooks",
      "Train your team in structured sessions",
      "Confirm your team operates the system independently",
    ],
    outcome: "A skill library your organization owns and extends.",
  },
];

/** The four disciplines as an editorial stack of asymmetric 4/8 splits. */
export function MethodDisciplines() {
  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
            Four disciplines, applied in a loop.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 lg:space-y-24">
          {disciplines.map((d) => (
            <Reveal key={d.name}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text">
                    {d.name}
                  </h3>
                  <p className="mt-3 text-text-muted leading-relaxed">
                    {d.tagline}
                  </p>
                </div>

                <div className="lg:col-span-8 max-w-2xl">
                  <div className="space-y-4">
                    {d.paragraphs.map((p) => (
                      <p
                        key={p.slice(0, 32)}
                        className="text-text-muted leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <ul className="mt-7 divide-y divide-line border-y border-line">
                    {d.steps.map((step) => (
                      <li
                        key={step}
                        className="py-3 text-sm text-text leading-relaxed"
                      >
                        {step}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-sm text-text leading-relaxed">
                    <span className="text-text-muted">You get: </span>
                    {d.outcome}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
