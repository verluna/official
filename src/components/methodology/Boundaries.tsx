import { Reveal } from "@/components/home";

const boundaries = [
  {
    title: "Not prompt engineering",
    body: "Prompt engineering improves single interactions. We design systems of interactions.",
  },
  {
    title: "Not workflow automation",
    body: "Workflow automation connects existing tools in sequences. We redesign the operation itself.",
  },
  {
    title: "Not strategy consulting",
    body: "Strategy consulting produces decks. This method produces running systems.",
  },
  {
    title: "Not classic software engineering",
    body: "Software engineering builds applications. We build the operating layer between AI capability and your organization.",
  },
];

/** What the method is not. Two-column card grid. */
export function Boundaries() {
  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
            What this method is not.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {boundaries.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-lg border border-line p-8 transition-colors duration-300 hover:border-line-strong">
                <h3 className="text-xl font-semibold tracking-tight text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-md">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
