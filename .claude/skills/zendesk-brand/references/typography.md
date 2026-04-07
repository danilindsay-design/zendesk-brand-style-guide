# Typography

## Font Families

**Zendesk Sans**
- Primary font for all UI and content
- Weights: 100 (Thin), 200 (ExtraLight), 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black)
- Available in regular and italic styles
- Use Medium (500) for all headings (H1-H3)

**Zendesk Mono**
- Monospace font for code, technical content
- Weights: 100, 200, 300, 400, 500, 600, 700, 900
- Available in regular style only

**CSS Declaration:**
```css
font-family: var(--font-family);  /* Zendesk Sans */
font-family: var(--font-mono);    /* Zendesk Mono */
```

---

## Type Scale

All sizes use **Medium (500)** weight for headings, **Regular (400)** for body.

### H1 - Hero Headlines
- **Size:** 42px
- **Weight:** 500 (Medium)
- **Line Height:** 44.1px (1.05)
- **Usage:** Page titles, hero headlines
- **CSS:** `var(--font-size-h1)`, `var(--font-weight-h1)`, `var(--line-height-h1)`

### H2 - Section Headlines
- **Size:** 30px
- **Weight:** 500 (Medium)
- **Line Height:** 34.5px (1.15)
- **Usage:** Section titles, major divisions
- **CSS:** `var(--font-size-h2)`, `var(--font-weight-h2)`, `var(--line-height-h2)`

### H3 - Subsection Headlines
- **Size:** 21px
- **Weight:** 500 (Medium)
- **Line Height:** 26.25px (1.25)
- **Usage:** Subsection titles, card titles
- **CSS:** `var(--font-size-h3)`, `var(--font-weight-h3)`, `var(--line-height-h3)`

### H4 - Small Headlines
- **Size:** 15px
- **Weight:** 600 (SemiBold)
- **Line Height:** 21.75px (1.45)
- **Usage:** Small section labels, emphasized text
- **CSS:** `var(--font-size-h4)`, `var(--font-weight-h4)`, `var(--line-height-h4)`

### Body / Paragraph
- **Size:** 15px
- **Weight:** 400 (Regular)
- **Line Height:** 21.75px (1.45)
- **Usage:** Main body text, descriptions
- **CSS:** `var(--font-size-paragraph)`, `var(--font-weight-paragraph)`, `var(--line-height-paragraph)`

### Paragraph Large
- **Size:** 21px
- **Weight:** 400 (Regular)
- **Line Height:** 26.25px (1.25)
- **Usage:** Intro paragraphs, emphasized body text
- **CSS:** `var(--font-size-paragraph-large)`, `var(--font-weight-paragraph-large)`, `var(--line-height-paragraph-large)`

### Supertitle / Eyebrow
- **Size:** 12px
- **Weight:** 700 (Bold)
- **Line Height:** 14.3px (1.19)
- **Letter Spacing:** 0.75px
- **Text Transform:** Uppercase
- **Usage:** Section labels, category tags
- **Font:** Zendesk Mono preferred for supertitles
- **CSS:** `var(--font-size-supertitle)`, `var(--font-weight-supertitle)`, `var(--line-height-supertitle)`, `var(--letter-spacing-supertitle)`

### Caption
- **Size:** 13px
- **Weight:** 400 (Regular)
- **Line Height:** 18.2px (1.4)
- **Usage:** Small labels, disclaimers, meta text
- **CSS:** `var(--font-size-caption)`, `var(--font-weight-caption)`, `var(--line-height-caption)`

---

## Typography Rules (DON'TS)

❌ **Don't use similar sizes or weights across text elements** - Create clear hierarchy. H1 should be noticeably larger than H2.

❌ **Don't mix different text styles in a single line** - Other than bolding and underlining, keep text styles consistent within a line.

❌ **Don't use heavy weights (700+) for headings** - Use Medium (500) for H1-H3. Only use SemiBold (600) for H4.

❌ **Don't use title case for headlines** - Always use sentence case (only first letter capitalized) unless proper noun.

❌ **Don't add periods at end of headlines** - Headlines should not end with punctuation.

---

## Localization Rules

**English Spelling**
- Localize (or localise) English spellings based on region
- US: "optimize," "analyze," "color"
- UK/AU: "optimise," "analyse," "colour"
- Be consistent within each market

**Character Support**
- Zendesk Sans supports Latin, Cyrillic, and extended character sets
- Test thoroughly in target languages
- Ensure proper line-height for diacritics

---

## Best Practices

### Hierarchy
Create clear visual hierarchy through:
1. **Size contrast** - Each level should be noticeably different
2. **Weight** - Use Medium (500) for headings, Regular (400) for body
3. **Color** - Primary text (Licorice), secondary text (Neutral-Light-79)
4. **Spacing** - More space above headings than below

### Readability
- **Line length:** 50-75 characters optimal for body text
- **Line height:** 1.4-1.5 for body text (built into tokens)
- **Paragraph spacing:** Use `var(--spacer-16)` or `var(--spacer-24)` between paragraphs

### Emphasis
- Use **bold** for strong emphasis within body text
- Use _italic_ sparingly for titles of works (books, movies, etc.)
- ❌ Don't use color for emphasis—use weight and hierarchy

---

## Example Usage

```css
h1 {
  font-size: var(--font-size-h1);        /* 42px */
  font-weight: var(--font-weight-h1);    /* 500 */
  line-height: var(--line-height-h1);    /* 44.1px */
  margin-bottom: var(--spacer-24);
}

p {
  font-size: var(--font-size-paragraph);  /* 15px */
  font-weight: var(--font-weight-paragraph); /* 400 */
  line-height: var(--line-height-paragraph); /* 21.75px */
  color: var(--color-neutral-light-79);
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: var(--font-size-supertitle);    /* 12px */
  font-weight: var(--font-weight-supertitle); /* 700 */
  letter-spacing: var(--letter-spacing-supertitle); /* 0.75px */
  text-transform: uppercase;
}
```

---

## Font Files

All font files are included in `assets/fonts/`:
- `zendesk-sans/` - Complete Zendesk Sans family
- `zendesk-mono/` - Complete Zendesk Mono family

Fonts are self-hosted and available for offline use.
