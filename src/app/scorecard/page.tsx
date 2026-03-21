"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUESTIONS } from "@/lib/scorecard-data";
import type { ScorecardAnswers } from "@/lib/scorecard-data";
import { ProgressBar } from "@/components/scorecard/ProgressBar";
import { QuestionCard } from "@/components/scorecard/QuestionCard";
import { EmailGate, type EmailGateData } from "@/components/scorecard/EmailGate";
import { ResultsView } from "@/components/scorecard/ResultsView";
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
    async (data: EmailGateData) => {
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
      }
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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-24">
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
              className="text-center"
            >
              {/* Terminal header */}
              <div className="font-mono text-xs text-steel-grey mb-8">
                <span className="text-terminal-green">$</span> verluna
                agent-readiness --assess
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-off-white mb-4 leading-tight">
                Agent Readiness
                <br />
                Scorecard
              </h1>

              <p className="text-steel-grey text-base leading-relaxed mb-3 max-w-md mx-auto">
                How ready is your organization for AI-powered agent operations?
                12 questions. 3 minutes. Detailed report with actionable
                recommendations.
              </p>

              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-xs font-mono text-steel-grey">
                  <span className="w-2 h-2 rounded-full bg-terminal-green" />
                  12 Questions
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-steel-grey">
                  <span className="w-2 h-2 rounded-full bg-signal-blue" />
                  3 Minutes
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-steel-grey">
                  <span className="w-2 h-2 rounded-full bg-electric-purple" />
                  Free Report
                </div>
              </div>

              <motion.button
                onClick={() => setPhase("questions")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-off-white text-void font-semibold text-base rounded-lg hover:bg-terminal-green transition-colors"
              >
                Start Assessment
                <span className="ml-2 text-lg">&rarr;</span>
              </motion.button>

              <p className="mt-6 text-xs text-steel-grey/60 font-mono">
                No credit card. No sales pitch. Just data.
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
              <ProgressBar current={currentQuestion} total={totalQuestions} />

              <QuestionCard
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
                    "font-mono text-xs px-3 py-1.5 rounded border border-surface-border transition-all",
                    currentQuestion === 0
                      ? "text-steel-grey/30 cursor-not-allowed"
                      : "text-steel-grey hover:text-off-white hover:border-steel-grey/50"
                  )}
                >
                  &larr; Back
                </button>
                <span className="font-mono text-xs text-steel-grey/40">
                  Press A-D or 1-4 to select
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
              <EmailGate onSubmit={handleEmailSubmit} isLoading={isSubmitting} />
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-center text-sm text-error-red font-mono"
                >
                  {error}
                </motion.p>
              )}
              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    setPhase("questions");
                    setCurrentQuestion(totalQuestions - 1);
                  }}
                  className="font-mono text-xs text-steel-grey hover:text-off-white transition-colors"
                >
                  &larr; Back to questions
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
              <ResultsView
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
