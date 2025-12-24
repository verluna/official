# VERLUNA BLOG WRITING SKILL

## PURPOSE
This skill file guides Claude Code in creating blog posts for Verluna's Insights section. Follow these guidelines to maintain brand consistency, voice, and quality across all content.

---

## BRAND VOICE & TONE

### Voice Characteristics
- **Engineering-focused**: Write like an engineer explaining to other engineers or technical decision-makers
- **Specific about outcomes**: Use numbers, percentages, and concrete metrics
- **No marketing jargon**: Avoid buzzwords like "synergy", "leverage", "unlock", "game-changer"
- **Confident but not arrogant**: State opinions clearly but acknowledge limitations
- **Practical and actionable**: Every post should give readers something they can apply

### Tone Guidelines
- Professional but approachable (not stuffy or corporate)
- Direct and concise (no fluff or filler)
- Honest about trade-offs and limitations
- Technical without being exclusionary

### Language to AVOID
- "Unlock the power of..."
- "Game-changing"
- "Revolutionary"
- "Best-in-class"
- "Cutting-edge"
- "Seamlessly"
- "Leverage" (as a verb)
- "Synergy"
- Excessive exclamation points
- Vague superlatives

### Language to USE
- Specific metrics and outcomes
- Technical terminology (with context)
- "We found that..."
- "In our experience..."
- "The data shows..."
- Clear cause-and-effect statements

---

## BLOG POST STRUCTURE

### Frontmatter Template
```yaml
---
title: "[Topic] - [Value proposition or key insight]"
description: "[1-2 sentence hook with specific outcome or problem addressed]"
date: "YYYY-MM-DD"
author: "verluna-team"
category: "[gtm-engineering|ai-agents|automation|case-study|tutorial]"
tags: ["tag1", "tag2", "tag3"]
featured: false
---
```

### Category Definitions
- **gtm-engineering**: Strategic posts about GTM infrastructure, architecture, RevOps
- **ai-agents**: Posts about AI agents, LLMs, RAG, automation with AI
- **automation**: Workflow automation, n8n, process optimization
- **case-study**: Client stories, implementation examples, results analysis
- **tutorial**: Step-by-step guides, how-tos, technical walkthroughs

### Post Structure
```markdown
## Introduction
- Hook: Start with a specific problem, metric, or observation
- Context: Why this matters to the reader
- Promise: What they'll learn or be able to do after reading

## [Main Section 1: The Problem or Concept]
- Explain the challenge or concept clearly
- Use code examples where relevant
- Include real-world context

## [Main Section 2: The Solution or Implementation]
- Technical details with code samples
- Step-by-step where appropriate
- Tools and technologies mentioned specifically

## [Main Section 3: Results or Analysis]
- Metrics and outcomes
- What worked, what didn't
- Lessons learned

## Conclusion
- Key takeaways (2-3 bullet points)
- Next steps or call to action
- Link to relevant services if appropriate
```

---

## CONTENT REQUIREMENTS

### Code Examples
- Always include relevant code examples for technical posts
- Use TypeScript/Python where applicable
- Include comments explaining non-obvious logic
- Show real, working code (not pseudo-code)

### Metrics & Data
- Include specific numbers wherever possible
- Cite sources for external data
- Use Verluna's typical results as benchmarks:
  - Lead response time improvements (95% faster)
  - Hours saved per week (10-20+)
  - Conversion rate improvements (20-40%)
  - Pipeline growth (+25%)

### Technical Accuracy
- Verify all technical claims
- Test code examples before publishing
- Link to official documentation where relevant

---

## WRITING PROCESS

### Before Writing
1. **User provides**:
   - Topic and angle
   - Target audience
   - Key points to cover
   - Any research/sources to reference
   - Desired length (default: 1000-1500 words)

2. **Claude asks**:
   - Clarifying questions about scope
   - Specific examples or case studies to include
   - Technical depth appropriate for audience
   - Any internal links to other content

### During Writing
1. Follow the structure template
2. Include code examples for technical posts
3. Use specific metrics and outcomes
4. Maintain brand voice throughout

### After Writing
1. Review for brand voice compliance
2. Verify technical accuracy
3. Check that all claims are substantiated
4. Ensure proper frontmatter is complete

---

## SEO CONSIDERATIONS

### Title Guidelines
- Include primary keyword naturally
- Keep under 60 characters
- Make the value proposition clear
- Examples:
  - "Automating Lead Routing with n8n: A Technical Guide"
  - "Why Your GTM Stack Needs an Integration Layer"
  - "Building AI Agents for RFP Analysis: Architecture Deep-Dive"

### Description Guidelines
- Include primary keyword
- Keep under 160 characters
- Clearly state what reader will learn
- Include a metric or outcome if possible

### Tag Guidelines
- Use 3-5 relevant tags
- Include technology names (n8n, hubspot, salesforce)
- Include concepts (automation, ai-agents, lead-routing)
- Keep tags lowercase, hyphenated

---

## EXAMPLE POST PROMPT

When requesting a new blog post, provide:

```
Topic: [Specific topic]
Category: [gtm-engineering|ai-agents|automation|case-study|tutorial]
Audience: [Technical decision-makers / RevOps teams / etc.]
Key points to cover:
- Point 1
- Point 2
- Point 3
Research/Sources: [Links or notes]
Length: [Word count target]
Internal links: [Other Verluna content to reference]
```

---

## QUALITY CHECKLIST

Before finalizing any post, verify:

- [ ] Title is under 60 characters and includes keyword
- [ ] Description is under 160 characters and compelling
- [ ] Frontmatter is complete and accurate
- [ ] Introduction hooks the reader with a specific problem/insight
- [ ] Code examples are tested and include comments
- [ ] Metrics are specific and sourced
- [ ] No marketing jargon or buzzwords
- [ ] Voice is engineering-focused and direct
- [ ] Conclusion has clear takeaways
- [ ] Tags are relevant and properly formatted
- [ ] Post is within target word count

---

## VERLUNA CONTEXT

### Service Tracks (for internal linking)
- **Track A: GTM Audit** - "Find the leaks" - $10,000+, 2-3 weeks
- **Track B: Autonomous Ops** - "Fix the flow" - $15,000-$50,000, 4-8 weeks
- **Track C: Custom AI Agents** - "Scale the workforce" - $25,000+, 6-12 weeks

### Core Principles (can reference in posts)
- **Code Over Config**: Version-controlled, documented, scalable systems
- **Forward Deployed**: Embed with teams, no handoff documents
- **Measure Everything**: Every pipeline has metrics, every workflow has logs

### Tech Stack (mention where relevant)
- CRM: HubSpot, Salesforce
- Automation: n8n, Python
- AI: OpenAI, Claude, LangChain
- Data: Clearbit, Apollo, ZoomInfo
- Infrastructure: Supabase, PostgreSQL
