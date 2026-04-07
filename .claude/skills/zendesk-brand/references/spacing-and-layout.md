# Spacing & Layout

## Spacing Scale

**Base Unit:** 8px

All spacing uses multiples from this scale. Never use arbitrary values.

### The Scale

- **8px** - `var(--spacer-8)` - Tight spacing, inline elements
- **12px** - `var(--spacer-12)` - Small gaps, button padding
- **16px** - `var(--spacer-16)` - Default spacing, paragraph margins
- **24px** - `var(--spacer-24)` - Medium spacing, section elements
- **40px** - `var(--spacer-40)` - Large spacing, between components
- **56px** - `var(--spacer-56)` - Extra large spacing, major sections
- **72px** - `var(--spacer-72)` - Section dividers
- **96px** - `var(--spacer-96)` - Page sections, hero padding

### Usage Guidelines

**Tight (8-16px)**
- Between related elements
- Button padding
- Form field spacing
- List item gaps

**Medium (24-40px)**
- Between unrelated elements
- Component internal spacing
- Card padding
- Between paragraphs and headings

**Large (56-96px)**
- Section padding
- Hero sections
- Page margins
- Major content divisions

---

## Layout Patterns

### Container

Maximum content width for readability:
- **Max-width:** 1200px
- **Padding:** `var(--spacer-56)` desktop, `var(--spacer-24)` mobile
- **Centered:** `margin: 0 auto`

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacer-56);
}
```

### Grid Patterns

**Two Column**
```css
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacer-72);
}
```

**Three Column / Card Grid**
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacer-24);
}
```

**Flexible Grid**
```css
.flexible-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacer-40);
}
```

---

## Responsive Breakpoints

Mobile-first approach. Design for small screens first, enhance for larger.

### Breakpoint Values

- **XS (Extra Small):** 320-480px - Mobile portrait
- **S (Small):** 481-767px - Mobile landscape
- **M (Medium):** 768-1119px - Tablets
- **L (Large):** 1120-1599px - Desktop
- **XL (Extra Large):** 1600px+ - Large desktop

### Media Query Pattern

```css
/* Mobile first - base styles for XS/S */
.hero {
  padding: var(--spacer-56) var(--spacer-24);
  grid-template-columns: 1fr;
}

/* Tablet and up (M) */
@media (min-width: 768px) {
  .hero {
    padding: var(--spacer-72) var(--spacer-40);
  }
}

/* Desktop and up (L) */
@media (min-width: 1120px) {
  .hero {
    padding: var(--spacer-96) var(--spacer-56);
    grid-template-columns: 1fr 1fr;
  }
}
```

---

## White Space

White space (negative space) is a design element. Don't fear empty space.

### Principles

**Breathing Room**
- Don't fill every available space with content
- Use white space to create visual rest
- Let important elements stand out

**Consistency**
- Use spacing scale consistently throughout page
- Rhythm creates visual harmony
- Similar elements should have similar spacing

**Hierarchy**
- More space = more importance
- Group related elements with less space
- Separate unrelated elements with more space

---

## Layout Rules (DON'TS)

❌ **Don't use arbitrary spacing values** - Always use the spacing scale (8, 12, 16, 24, 40, 56, 72, 96). No random values like 15px or 35px.

❌ **Don't fill every available space with text** - Use imagery and white space to create breathing room.

❌ **Don't alternate background colors in every section** - Use layout and spacing to differentiate sections instead.

❌ **When content is sparse, avoid too much negative space on one side** - Consider side-by-side layout instead of vertical stacking.

---

## Shadows

Use shadows to create depth and hierarchy.

### Shadow Scale

- **SS1** - `0px 2px 4px rgba(0, 0, 0, 0.08)` - Very subtle, small cards
- **SS2** - `0px 4px 12px rgba(0, 0, 0, 0.05)` - Subtle, hover states
- **S1** - `0px 8px 24px rgba(0, 0, 0, 0.08)` - Medium elevation, cards
- **S2** - `0px 16px 28px rgba(0, 0, 0, 0.08)` - High elevation
- **S3** - `0px 24px 36px rgba(0, 0, 0, 0.16)` - Very high, popovers
- **S4** - `0px 10px 50px 20px rgba(0, 0, 0, 0.3)` - Maximum, modals

### Usage

```css
.card {
  box-shadow: var(--shadow-s1);
}

.card:hover {
  box-shadow: var(--shadow-s2);
}

.modal {
  box-shadow: var(--shadow-s4);
}
```

### Guidelines

- Use SS1-S2 for hover states
- Use S1-S3 for elevated components (cards, dropdowns)
- Reserve S4 for modals, videos, tours (elements on overlays)
- Don't overuse shadows—they lose impact

---

## Border Radius

Consistent rounding creates visual cohesion. Use the named scale.

### Border Radius Scale

- **XXS** - `4px` - `var(--radius-xxs)` - Small badges, tags
- **XS** - `8px` - `var(--radius-xs)` - Buttons, inputs
- **SM** - `12px` - `var(--radius-sm)` - Cards, images, form fields
- **MD** - `16px` - `var(--radius-md)` - Large cards
- **LG** - `20px` - `var(--radius-lg)` - Hero images, sections
- **XL** - `40px` - `var(--radius-xl)` - Decorative elements
- **XXL** - `100px` - `var(--radius-xxl)` - Pills, high-radius elements

### Example

```css
.button {
  border-radius: var(--radius-xs);
}

.card {
  border-radius: var(--radius-sm);
}

.hero-image {
  border-radius: var(--radius-md);  /* Never use circles for images */
}
```

---

## Image Masking

❌ **Don't use circles, polygons, or other shapes for image masks**
✅ **Always use rounded rectangles** (border-radius: 8-16px)

Exception: Profile avatars may use circles, but product/marketing imagery should always be rounded rectangles.

---

## Example: Complete Section Layout

```css
.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacer-96) var(--spacer-56);
}

.section__title {
  font-size: var(--font-size-h2);
  margin-bottom: var(--spacer-40);
}

.section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacer-24);
}

.card {
  background: var(--color-coconut);
  border: 1px solid var(--color-neutral-light-11);
  border-radius: 12px;
  padding: var(--spacer-24);
  box-shadow: var(--shadow-ss1);
}

.card:hover {
  box-shadow: var(--shadow-s1);
}

/* Mobile adjustments (below M breakpoint) */
@media (max-width: 767px) {
  .section {
    padding: var(--spacer-56) var(--spacer-24);
  }
  
  .section__title {
    margin-bottom: var(--spacer-24);
  }
}
```
