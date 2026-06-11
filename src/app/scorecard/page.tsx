"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUESTIONS } from "@/lib/scorecard-data";
import type { ScorecardAnswers } from "@/lib/scorecard-data";
import { ScorecardProgress } from "@/components/convert/ScorecardProgress";
import { ScorecardQuestion } from "@/components/convert/ScorecardQuestion";
import {
  ScorecardGate,
  type ScorecardGateData,
} from "@/components/convert/ScorecardGate";
import { ScorecardResults } from "@/components/convert/ScorecardResults";
import { FormAlert } from "@/components/convert/forms";
import { cn } from "@/lib/utils";

type Phase = "intro" | "questions" | "email-gate" | "results";

interface ApiResult {
  score: number;
  tier: string;
  tierLabel: string;
  tierDescription: string;
  tierColor: "green" | "blue" | "purple";
  categoryScores: Array<{
    category: string;
    label: string;
    raw: number;
    max: number;
    normalized: number;
  }>;
  recommendations: string[];
  cta: { label: string; href: string };
  reportUrl: string;
}

export default function ScorecardPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<ScorecardAnswers>({});
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ApiResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const question = QUESTIONS[currentQuestion];
  const totalQuestions = QUESTIONS.length;

  // Handle option selection
  const handleSelect = useCallback(
    (points: number) => {
      setAnswers((prev) => ({ ...prev, [question.id]: points }));
      // Auto-advance after 400ms
      setTimeout(() => {
        if (currentQuestion < totalQuestions - 1) {
          setDirection(1);
          setCurrentQuestion((prev) => prev + 1);
        } else {
          setPhase("email-gate");
        }
      }, 400);
    },
    [question, currentQuestion, totalQuestions]
  );

  // Navigate backward
  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  // Submit scorecard
  const handleEmailSubmit = useCallback(
    async (data: ScorecardGateData) => {
      setIsSubmitting(true);
      setError(null);

      try {
        const res = await fetch("/api/scorecard", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            answers,
            email: data.email,
            firstName: data.firstName,
            companyName: data.companyName,
            role: data.role,
            newsletterOptIn: data.newsletterOptIn,
            gdprConsent: data.gdprConsent,
          }),
        });

        const json = await res.json();

        if (!res.ok) {
          setError(json.error || "Something went wrong. Please try again.");
          return;
        }

        setResult(json.data);
        setPhase("results");
      } catch {
        setError("Network error. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [answers]
  );

  // Keyboard navigation
  useEffect(() => {
    if (phase !== "questions") return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" || e.key === "Backspace") {
        handleBack();
        return;
      }
      // Only single-character keys select options
      if (e.key.length !== 1) return;
      // A, B, C, D keys select options
      const idx = e.key.toLowerCase().charCodeAt(0) - 97;
      if (idx >= 0 && idx < (question?.options.length ?? 0)) {
        handleSelect(question.options[idx].points);
      }
      // Number keys 1-4
      const numIdx = parseInt(e.key) - 1;
      if (numIdx >= 0 && numIdx < (question?.options.length ?? 0)) {
        handleSelect(question.options[numIdx].points);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase, question, handleSelect, handleBack]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-xl">
        <AnimatePresence mode="wait">
          {/* ---- INTRO ---- */}
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
                Agent readiness scorecard
              </h1>

              <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted">
                How ready is your organization for agent operations? You get a
                score, a category breakdown, and recommendations you can act
                on.
              </p>

              <p className="mt-4 text-sm text-text-muted">
                12 questions. 3 minutes. Free report.
              </p>

              <button
                onClick={() => setPhase("questions")}
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-text px-6 py-3 text-base font-medium tracking-tight text-ink transition-[background-color,transform] duration-200 hover:bg-white active:translate-y-px active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                Start the assessment
              </button>

              <p className="mt-6 text-sm text-text-muted">
                No credit card. No sales pitch.
              </p>
            </motion.div>
          )}

          {/* ---- QUESTIONS ---- */}
          {phase === "questions" && question && (
            <motion.div
              key="questions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <ScorecardProgress
                current={currentQuestion}
                total={totalQuestions}
              />

              <ScorecardQuestion
                question={question}
                selectedValue={answers[question.id] ?? null}
                onSelect={handleSelect}
                direction={direction}
              />

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  className={cn(
                    "rounded-md border border-line px-3 py-1.5 text-xs transition-colors",
                    "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
                    currentQuestion === 0
                      ? "cursor-not-allowed text-text-faint"
                      : "text-text-muted hover:border-line-strong hover:text-text"
                  )}
                >
                  Back
                </button>
                <span className="text-xs text-text-muted">
                  Press A to D or 1 to 4 to select
                </span>
              </div>
            </motion.div>
          )}

          {/* ---- EMAIL GATE ---- */}
          {phase === "email-gate" && (
            <motion.div
              key="email-gate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <ScorecardGate
                onSubmit={handleEmailSubmit}
                isLoading={isSubmitting}
              />
              {error && (
                <div className="mt-4">
                  <FormAlert>{error}</FormAlert>
                </div>
              )}
              <div className="mt-6">
                <button
                  onClick={() => {
                    setPhase("questions");
                    setCurrentQuestion(totalQuestions - 1);
                  }}
                  className="text-sm text-text-muted transition-colors hover:text-text"
                >
                  Back to questions
                </button>
              </div>
            </motion.div>
          )}

          {/* ---- RESULTS ---- */}
          {phase === "results" && result && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <ScorecardResults
                score={result.score}
                tier={result.tier}
                tierLabel={result.tierLabel}
                tierDescription={result.tierDescription}
                tierColor={result.tierColor}
                categoryScores={result.categoryScores}
                recommendations={result.recommendations}
                cta={result.cta}
                reportUrl={result.reportUrl}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
