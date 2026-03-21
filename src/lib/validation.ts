import { z } from "zod";

// Shared email validation
const emailSchema = z
  .string()
  .email("Please provide a valid email address")
  .max(255);

// Scorecard submission
export const scorecardSubmitSchema = z.object({
  answers: z.record(z.string(), z.number().int().min(1).max(4)),
  email: emailSchema,
  firstName: z.string().min(1).max(100).optional(),
  companyName: z.string().max(200).optional(),
  role: z.string().max(100).optional(),
  newsletterOptIn: z.boolean().default(false),
  gdprConsent: z.boolean().refine((val) => val === true, { message: "GDPR consent is required" }),
});

export type ScorecardSubmitInput = z.infer<typeof scorecardSubmitSchema>;

// Contact form (extends existing)
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: emailSchema,
  company: z.string().max(200).optional(),
  message: z.string().min(1, "Message is required").max(5000),
  companySize: z.enum(["1-49", "50-199", "200-999", "1000+"]).optional(),
  timeline: z
    .enum(["Immediate", "Next quarter", "6+ months", "Just exploring"])
    .optional(),
  source: z.string().max(100).optional(),
  gdprConsent: z.boolean().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

// Newsletter subscription
export const newsletterSchema = z.object({
  email: emailSchema,
  source: z
    .enum(["homepage", "footer", "blog-post", "scorecard", "exit-intent"])
    .default("footer"),
  gdprConsent: z.boolean().refine((val) => val === true, { message: "GDPR consent is required" }),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
