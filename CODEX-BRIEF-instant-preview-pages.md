# Codex Build Brief — "Instant Preview" Landing Page Service (2FLY Digital)

## Context
This is a NEW product line added to the EXISTING 2fly-website repo (2flydigital.com,
Next.js 16 / React 19 / Tailwind 4). Do NOT touch or restructure the existing
contractor-growth-system pages/routes. This is additive only.

## The business model (already agreed with Bruno, do not redesign this part)
1. A visitor lands on a new page (e.g. `/instant-preview` or `/landing-pages`) and
   fills a short intake form: business name, what they do/sell, brand colors or
   vibe words, any must-include copy points, contact email.
2. We (Boss, manually for now) build a real, custom landing page for them using
   our existing tooling — NOT part of this Codex brief, that happens separately.
3. The finished page is deployed to a preview subpath, PASSWORD-PROTECTED with an
   EXPIRATION (48-72 hours), watermarked/labeled clearly as "PREVIEW."
4. The customer gets an email with the preview link + password.
5. If they like it, they pay $100 via a Stripe Payment Link (test/launch price,
   will raise later — do not hardcode "$100" as a permanent constant, make it a
   simple config value).
6. On payment, the full page unlocks (password/watermark removed) and — for a
   later phase, NOT in this brief — can be pointed at their own domain.
7. If they never pay, the preview simply expires and access is revoked.

## What Codex should build in THIS pass
Scope this pass to the INFRASTRUCTURE + INTAKE + MARKETING PAGE only. Do NOT
build the actual custom landing pages themselves (those are built manually per
customer, one at a time, for now — that is a human/Boss task, not automated yet).

### 1. Marketing/offer page: `/instant-preview` (or a better route name Codex
   proposes — keep it short and memorable)
   - This is the actual SALES page for the service itself. It needs to be
     genuinely excellent UI/UX — this is a landing-page company selling landing
     pages, so its own page is the #1 proof of quality. Study real best-practice
     references before building (risk-reversal guarantee pattern, e.g. how
     landingpagelabs.co frames "you don't pay unless you love it" — recreate
     that TRUST MECHANIC in 2FLY's own voice/design, not a copy of their layout).
   - Use the existing 2FLY brand: logo at `public/brand/2fly-mark.svg`, and match
     the existing site's premium dark/modern aesthetic (check `src/app/globals.css`
     and the existing `construction-marketing` / homepage pages for the current
     design language — colors, type scale, spacing, animation style using
     framer-motion which is already a dependency). This must look and feel
     PREMIUM — not a generic SaaS template. Explore 2-3 distinct visual directions
     internally and pick the strongest, don't just ship the first draft.
   - Core message: "We build you a real, custom landing page. You see the finished
     page before you pay a cent. Love it? Unlock it for $100. Don't love it? It
     just expires — no cost, no risk." Make the risk-reversal the hero of the page,
     it's the entire trust mechanic.
   - Include: hero, how-it-works (3-4 steps matching the flow above), a proof/
     portfolio section (placeholder for now — Bruno will supply real past client
     sites like JT Fence later, build the section to accept an array of
     {title, image, url} entries easily), FAQ (answer: how fast, what's included,
     what happens if I don't pay, can I get changes), and the intake CTA.
   - Mobile-first, fast, matches the rest of the site's routing conventions.

2. **Intake form** (`/instant-preview/start` or embedded on the same page):
   - Fields: business/brand name, one-line description of what they do/sell,
     brand colors or vibe (free text + optional color pickers), any must-include
     copy or offer details, contact email, contact name.
   - On submit: save the submission (simplest reasonable approach given the
     existing stack — check if there's already a DB/API pattern in this repo,
     e.g. `src/app/api/consultation` looks like an existing intake endpoint,
     follow that same pattern/convention for consistency) AND send a notification
     (email or whatever notification mechanism the existing `api/consultation`
     or `api/send-contractor-sequence` routes already use — reuse existing
     infrastructure, don't invent a new email service if one is already wired up).
   - Show a clear confirmation state after submit ("we'll have your preview
     ready within 48 hours").

3. **Password-protected + expiring preview infrastructure** (the reusable
   mechanism, not any specific customer's page):
   - Design a simple, reusable pattern for: given a slug and a deployed page,
     gate it behind a password, auto-expire access after a configurable window
     (48-72h default), and show a clear "PREVIEW — pay to unlock" banner/watermark
     while gated.
   - Also design (can be a manual/admin step for now, doesn't need a full admin
     UI) how Bruno/Boss would mark a specific customer's preview as "paid" to
     lift the gate — e.g. a simple flag in whatever storage is used, updatable
     via a Stripe webhook in a later phase (webhook itself is OUT of scope for
     this pass — just make sure the data model has an `is_paid`/`unlocked`
     boolean so wiring the webhook later is trivial).
   - Keep this as simple as possible given the existing stack — do not add new
     heavy infrastructure (no new database service, etc.) if something already
     exists in this repo you can extend. If nothing exists, propose the
     lightest-weight option that fits a Next.js app already deployed on Vercel
     (e.g. Vercel KV, or a simple JSON/DB row per preview) and explain the choice.

## Explicitly OUT OF SCOPE for this pass
- The actual Stripe Payment Link integration/checkout flow (note where it will
  plug in, don't build it yet)
- Building any individual customer's actual custom landing page content
- Any admin dashboard UI beyond what's minimally needed to mark something paid
- Domain-pointing/hosting handoff for after purchase
- Touching/redesigning any EXISTING page or route in this repo

## Deliverable
- A clean PR/commit (or direct commit if that's the existing repo convention —
  check recent commit history for the pattern) with the new page, intake flow,
  and preview-gating mechanism, buildable and passing `npm run build` with zero
  errors.
- A short summary of: the route(s) added, the UI direction chosen and why, the
  storage/data approach chosen for the intake + preview-gating and why, and
  exactly where the Stripe webhook will need to plug in later.

## Reference the existing repo's own conventions throughout
This repo already has a working design system, existing intake API patterns
(`api/consultation`, `api/send-contractor-sequence`), and a brand mark. Match
its existing quality bar and conventions rather than introducing a new stack
or style within the same codebase.
