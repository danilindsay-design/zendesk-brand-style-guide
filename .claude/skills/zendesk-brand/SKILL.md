---
name: zendesk-brand
description: Use whenever creating, reviewing, or modifying any Zendesk-branded asset—landing pages, marketing components, product UI, emails, presentations, React components, HTML/CSS, or any visual or code deliverable that should follow the Zendesk visual identity. Covers colors, typography, spacing, components, accessibility (WCAG AA), and brand voice. Trigger on mentions of Zendesk, Matcha, Coconut, Licorice, Sesame, or any request to "make this on-brand."
---

# Zendesk Brand System

You are a Zendesk brand expert. Ensure all design and code follows the Zendesk brand guidelines.

## THE DEFINING RULE

**Reserve Matcha for primary CTAs only. Limit to 1–2 per page.**

This is the most important rule in the Zendesk visual system. Matcha's power comes from restraint.

---

## Design Tokens

**Always use these files when generating code:**

- **[assets/tokens.css](assets/tokens.css)** - CSS custom properties, ready to `@import`
- **[assets/tokens.json](assets/tokens.json)** - JSON format for programmatic use

**Never** type hex values manually—reference the token files to avoid transcription errors.

```css
/* Correct */
@import 'assets/tokens.css';
.button { background: var(--color-matcha); }

/* Wrong */
.button { background: #D1F470; }  /* Don't hardcode */
```

---

## Reference Documentation

Each topic has its own detailed guide:

### [references/colors.md](references/colors.md)
- THE DEFINING RULE (Matcha 1-2 per page)
- Primary palette (Coconut, Licorice, Matcha, Sesame, Fern)
- Secondary palette (Cactus, Pineapple, Shamrock)
- Tonal scales (Matcha 000-600, Sesame 100-700)
- Neutral opacities (Light/Dark mode scales)
- State colors (Success, Error)
- Data visualization palettes (Cyan, Blue, Lavender, Purple)
- Color usage rules (don'ts)

### [references/typography.md](references/typography.md)
- Font families (Zendesk Sans, Zendesk Mono)
- Complete type scale (H1-H4, Body, Large, Supertitle, Caption)
- Correct sizes: H1 42px/500, H2 30px/500, H3 21px/500, Body 15px/400
- Typography rules (sentence case, no periods on headlines)
- Localization guidelines

### [references/spacing-and-layout.md](references/spacing-and-layout.md)
- Spacing scale (8, 12, 16, 24, 40, 56, 72, 96)
- Layout patterns (container, grid, two-column, three-column)
- Responsive breakpoints (XS, S, M, L, XL)
- White space principles
- Shadows (SS1, SS2, S1-S4)
- Border radius guidelines
- Image masking rules

### [references/components.md](references/components.md)
- Button hierarchy (Primary/Secondary/Tertiary)
- THE DEFINING RULE implementation
- Cards (structure, styling, rules)
- Hero sections (pattern, CSS, rules)
- Forms (structure, validation, accessibility)
- Navigation patterns
- Imagery rules
- Logo usage

### [references/accessibility.md](references/accessibility.md)
- WCAG 2.1 Level AA requirements
- Color contrast (4.5:1 minimum for normal text)
- Keyboard navigation
- Touch targets (44x44px minimum on mobile)
- Semantic HTML & ARIA
- Screen reader optimization
- Form accessibility
- Modal dialogs
- Testing checklist

### [references/voice.md](references/voice.md)
- Brand philosophy ("The customer is always human")
- Brand attributes (Approachable, Modern, Trusted, Connected, Fresh)
- Core principles (active voice, concise, direct address)
- Copy structure (headlines, body, CTAs)
- Technical rules (sentence case, no periods, Oxford comma)
- Language rules (avoid jargon, no gender references)
- Localization
- Voice examples (on-brand vs off-brand)

---

## Assets

### Design Tokens
- `assets/tokens.css` - CSS custom properties
- `assets/tokens.json` - JSON format

### Fonts
- `assets/fonts/zendesk-sans/` - Complete Zendesk Sans family (100-900)
- `assets/fonts/zendesk-mono/` - Complete Zendesk Mono family

### Logos
- `assets/logo-coconut.svg` - White logo for dark backgrounds
- `assets/logo-licorice.svg` - Dark logo for light backgrounds

---

## Working Examples

**Reference these when building components:**

- **[examples/hero-section.html](examples/hero-section.html)**
  - Complete hero with proper token usage
  - THE DEFINING RULE (1 Matcha CTA)
  - Active voice copy, sentence case, direct address
  - Inline comments explaining every brand decision

- **[examples/card-component.html](examples/card-component.html)**
  - Card grid showing proper typography and spacing
  - Matcha used only as accent (link underlines)
  - One Matcha button in CTA section
  - Demonstrates proper component patterns

**Use these as templates** when building new components or pages.

---

## Brand Anti-Patterns (Common Mistakes)

### THE MOST IMPORTANT

❌ **Multiple Matcha buttons on one page** - Violates THE DEFINING RULE
❌ **Matcha backgrounds** - Matcha is for CTAs only, not surfaces
❌ **Matcha text highlighting** - Use typography weight instead

### Colors
❌ Don't use secondary colors (Cactus, Pineapple) as backgrounds
❌ Don't alternate background colors in every section
❌ Don't highlight text with different colors
❌ Don't apply custom colors to the Zendesk logo
❌ Don't rely solely on color to convey meaning

### Typography
❌ Don't use title case for headlines (use sentence case)
❌ Don't add periods to headlines
❌ Don't use similar sizes or weights (create clear hierarchy)
❌ Don't mix text styles in same line

### Copy & Voice
❌ Don't use passive voice ("requests are handled by..." → "we handle...")
❌ Don't use jargon ("leverage," "synergy," "paradigm shift")
❌ Don't use possessives with Zendesk ("Zendesk's" → "Zendesk")
❌ Don't use ampersands (unless part of brand name)
❌ Don't add spaces around em dashes ("word — word" → "word—word")

### Layout
❌ Don't use arbitrary spacing (always use scale: 8, 12, 16, 24, 40, 56, 72, 96)
❌ Don't use borders on web imagery (let images breathe)
❌ Don't use circles or polygons for image masks (use rounded rectangles)

---

## Workflow

When creating Zendesk-branded work:

1. **Import tokens** - Use `assets/tokens.css` or `assets/tokens.json` (never hardcode)
2. **Follow THE DEFINING RULE** - 1-2 Matcha elements max per page
3. **Reference examples** - Check `examples/` for working patterns
4. **Read relevant guides** - See `references/` for typography, colors, spacing, components, voice, accessibility
5. **Avoid anti-patterns** - Review don'ts above

---

## Full Visual Reference

For comprehensive visual examples and design context:
- [references/zendesk-brand-visual-reference.html](references/zendesk-brand-visual-reference.html)
- [references/zendesk-brand-code-reference.html](references/zendesk-brand-code-reference.html)

---

## Brand Philosophy

**"The customer is always human."**

Brand Attributes: **Approachable, Modern, Trusted, Connected, Fresh**

When things go sideways, you want service you can count on. Zendesk ensures every interaction ends in resolution, helping brands show up for their customers exactly how they need to.
