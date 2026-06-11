import { Reveal } from "@/components/home";

const questions = [
  "What happens when the primary data source is unavailable?",
  "What does the agent do with unexpected input?",
  "Who approves before the agent takes an irreversible action?",
  "How do you know the system is working without asking us?",
  "What does rollback look like in the first 30 days?",
];

/** The quality gate. Asymmetric 5/7 split: explanation left, questions right. */
export function FiveQuestions() {
  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
              Five questions before any build.
            </h2>
            <p className="mt-5 text-text-muted leading-relaxed max-w-md">
              Every architecture we design must answer all five in writing
              before implementation starts. No exceptions. If an answer is
              missing, the build waits.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {questions.map((q) => (
                <li
                  key={q}
                  className="py-5 text-lg text-text leading-relaxed"
                >
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
