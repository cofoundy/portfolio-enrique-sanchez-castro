# Design Proposal: Enrique Eduardo Sánchez-Castro

## Analysis
- **Profession:** PhD Candidate in Stem Cell Biology / Scientific Leader
- **Tier:** Premium S/.280
- **Template base:** minimalista/premium-starter (customized)
- **Audience:** Academic collaborators, research labs, fellowship committees, science community
- **Language:** English
- **References:** jnjoseph.com (clean academic), richpauloo.com (interactive scientist)

## Palette (6 colors) — Complementary: Cool Blue + Warm Amber Accent

Based on client's colors (#27668C, #68898C, #D97C2B, #A62C21). Using complementary scheme with blue dominating 90%, amber accent at 10%.

- **primaryDark:** #1A4F6E — Deep teal. Headings, footer bg, nav text. Darker shade of client's #27668C.
- **primary:** #27668C — Client's main teal blue. Borders, shimmer, badges.
- **primaryLight:** #8AABB8 — Muted teal. Shimmer highlight, lighter borders.
- **accent:** #D97C2B — Client's amber. CTAs, stats highlights, bullet dots. Warm pop on cool base.
- **surface:** #EFF3F5 — Desaturated blue-gray. Section backgrounds.
- **surfaceLight:** #F7F9FA — Near-white with cool undertone. Hero bg.

**Contrast verification:**
- primaryDark (#1A4F6E) on white: ~7.2:1 (AAA)
- accent (#D97C2B) on white: ~3.5:1 (AA large text)
- primaryDark on surfaceLight: ~6.8:1 (AAA)

## Typography
- **Headings:** Cormorant Garamond (serif, academic elegance)
- **Body:** Raleway (clean, modern readability)
- **Accent/Labels:** Montserrat (caps for labels, tags)

## Section Decisions

### 1. Hero → 2-column with photo (left) + text (right)
- Photo professional rounded, teal border glow
- Name large in Cormorant Garamond
- Title: "PhD Candidate · Stem Cell Biology · WashU"
- Tagline: "From mentoring diabetic youth to engineering β-cells — science driven by purpose."
- Stats bar below: 4 Publications | 30+ Programs | 4 Languages | Nobel Dialogue Delegate
- CTA: "View My Research" (amber accent)

### 2. About → Full-width narrative with quote
- Key narrative connecting his personal connection to diabetes (ADINA since 2009) → PhD research on β-cells
- Quote: "I'm a scientist at heart, driven by the belief that research should serve people."
- Split: left column narrative, right column key facts/skills

### 3. Research → Custom section (unique to scientist)
- Current PhD research: β-cell differentiation for diabetes therapy
- Past: SNPs + T2D in Peruvian population, malaria burden, snakebite therapies
- Visual: cards with publication links

### 4. Experience → Timeline
- Leadership & Governance focus (matches CV positioning)
- WashU roles prominently, Peru roles as foundation
- Timeline with teal dots, amber highlights on key achievements

### 5. Publications → Dedicated section
- 4 selected publications with journal names, DOIs
- Styled as academic cards with journal badge

### 6. Awards → Grid cards
- Nobel Prize Dialogue, HIRN DePOSIT, Drum Major Award, Allbiotech, KeroLab
- Amber accent on award icons

### 7. Community & Outreach → Cards
- COVID trainer, SERUMS, Ciencia Papaya, ADINA
- Reinforces purpose-driven narrative

### 8. Education → 2-column grid
- PhD (WashU), MSc (UNMSM), BSc (UNMSM)
- Institution logos/badges

### 9. Footer → Dark teal bg + social links + contact
- LinkedIn, email, phone
- Amber accent on hover

## Final Section Order
1. Header (floating nav)
2. Hero (2-col photo + text + stats)
3. About (narrative + quote)
4. Research (custom cards)
5. Experience (timeline)
6. Publications (academic cards)
7. Awards (grid)
8. Community (cards)
9. Education (grid)
10. Footer (contact + social)

## Motion Design
- **Hero:** heroScaleIn (photo) + heroFadeUp (text) with stagger
- **Scroll:** reveal-up for sections, reveal-left/right alternating for cards
- **Timeline:** timelineDraw + timelineDotPop
- **Cards:** card-hover lift + shine effect
- **Stats:** countUp animation on scroll
- **Decorative:** bar-shimmer on section dividers (teal→amber gradient)
- **Reduced motion:** opacity-only transitions
