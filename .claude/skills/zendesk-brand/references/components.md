# Components

## THE DEFINING RULE: Button Hierarchy

**Reserve Matcha for primary CTAs only. Limit to ONE per page.**

This is the most important component rule.

---

## Interaction States — The Overlay Pattern

Zendesk doesn't use different hex values for hover and active states. Instead, layer a neutral opacity overlay on top of the base color:

**Hover:** 5% Licorice overlay (`--color-hover-light`) on light backgrounds, 7% white (`--color-hover-dark`) on dark backgrounds

**Active:** 11% Licorice overlay (`--color-active-light`) on light backgrounds, 13% white (`--color-active-dark`) on dark backgrounds

This works because the overlay darkens (light mode) or lightens (dark mode) whatever is beneath it proportionally, giving every component consistent interaction feedback without needing per-component hover colors.

### Implementation

**For colored backgrounds (buttons, badges):**
```css
.element {
  background: var(--color-matcha);
  transition: var(--transition-button);
}

.element:hover {
  background:
    linear-gradient(0deg, var(--color-hover-light) 0%, var(--color-hover-light) 100%),
    var(--color-matcha);
}

.element:active {
  background:
    linear-gradient(0deg, var(--color-active-light) 0%, var(--color-active-light) 100%),
    var(--color-matcha);
}
```

**For transparent backgrounds (outline buttons):**
```css
.element {
  background: transparent;
  transition: var(--transition-button);
}

.element:hover {
  background: var(--color-hover-light);
}

.element:active {
  background: var(--color-active-light);
}
```

**For dark backgrounds:**
```css
.element-dark {
  background: var(--color-licorice);
  transition: var(--transition-button);
}

.element-dark:hover {
  background:
    linear-gradient(0deg, var(--color-hover-dark) 0%, var(--color-hover-dark) 100%),
    var(--color-licorice);
}

.element-dark:active {
  background:
    linear-gradient(0deg, var(--color-active-dark) 0%, var(--color-active-dark) 100%),
    var(--color-licorice);
}
```

---

### Button Types

**Primary Button**
- **Use:** The main action on a page
- **Limit:** ONE per page (sometimes two if absolutely necessary)
- **Style:** Matcha background, Licorice text
- **Code:**
```css
.btn-primary {
  background: var(--color-matcha);
  color: var(--color-licorice);
  font-size: var(--font-size-paragraph);
  font-weight: 600;
  padding: var(--spacer-12) var(--spacer-24);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: var(--transition-button);
}

.btn-primary:hover {
  background:
    linear-gradient(0deg, var(--color-hover-light) 0%, var(--color-hover-light) 100%),
    var(--color-matcha);
}

.btn-primary:active {
  background:
    linear-gradient(0deg, var(--color-active-light) 0%, var(--color-active-light) 100%),
    var(--color-matcha);
}

.btn-primary:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color-light);
  outline-offset: 3px;
}
```

**Secondary Button**
- **Use:** Alternative actions, less important than primary
- **Style:** Licorice border, transparent background, Licorice text
- **Code:**
```css
.btn-secondary {
  background: transparent;
  color: var(--color-licorice);
  font-size: var(--font-size-paragraph);
  font-weight: 600;
  padding: calc(var(--spacer-12) - 2px) calc(var(--spacer-24) - 2px);
  border: 2px solid var(--color-licorice);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: var(--transition-button);
}

.btn-secondary:hover {
  background: var(--color-hover-light);
}

.btn-secondary:active {
  background: var(--color-active-light);
}

.btn-secondary:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color-light);
  outline-offset: 3px;
}
```

**Tertiary Button**
- **Use:** Least important actions, inline links
- **Style:** Text only, underlined, no background or border
- **Code:**
```css
.btn-tertiary {
  background: none;
  border: none;
  color: var(--color-licorice);
  font-size: var(--font-size-paragraph);
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: var(--color-matcha);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}
```

### Button Rules (DON'TS)

❌ **NEVER use multiple Matcha buttons on the same page** - This violates THE DEFINING RULE

❌ **Don't overuse Matcha** - Multiple Matcha elements make it unclear which is the primary action

✅ **Correct pattern:**
- 1 Primary (Matcha) button
- 1-2 Secondary (outline) buttons
- Multiple Tertiary (text) links as needed

❌ **Wrong pattern:**
- 3 Matcha buttons side by side
- Matcha button + Matcha background
- Matcha everywhere

---

## Cards

Standard card component for content grouping.

### Basic Card

```css
.card {
  background: var(--color-coconut);
  border: 1px solid var(--color-neutral-light-11);
  border-radius: 12px;
  padding: var(--spacer-24);
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: var(--shadow-s1);
}
```

### Card Structure

```html
<div class="card">
  <!-- Icon (optional) -->
  <div class="card__icon">⚡</div>
  
  <!-- Title (H3) -->
  <h3 class="card__title">Feature name</h3>
  
  <!-- Description (body text) -->
  <p class="card__description">
    Clear, concise description of the feature or benefit.
  </p>
  
  <!-- Link (tertiary style) -->
  <a href="#" class="card__link">Learn more</a>
</div>
```

### Card Rules

- Use consistent padding (--spacer-24)
- Include hover state with shadow
- Keep titles concise (3-5 words)
- Description should be 2-3 sentences max
- ❌ Don't use Matcha as card background
- ✅ Use Matcha sparingly for accents (link underlines)

---

## Hero Section

Page header with headline, body copy, and CTA.

### Hero Pattern

```html
<section class="hero">
  <div class="hero__content">
    <!-- Optional eyebrow -->
    <div class="hero__supertitle">Product Category</div>
    
    <!-- H1 headline -->
    <h1 class="hero__headline">Transform your service with AI</h1>
    
    <!-- Body copy -->
    <p class="hero__body">
      Zendesk AI helps you resolve issues faster.
      We handle the complexity so you can focus on customers.
    </p>
    
    <!-- CTAs - Primary + Secondary -->
    <div class="hero__ctas">
      <a href="#" class="btn-primary">Start free trial</a>
      <a href="#" class="btn-secondary">Watch demo</a>
    </div>
  </div>
  
  <!-- Hero image -->
  <div class="hero__image">
    <img src="..." alt="...">
  </div>
</section>
```

### Hero CSS

```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacer-72);
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacer-96) var(--spacer-56);
}

.hero__supertitle {
  font-family: var(--font-mono);
  font-size: var(--font-size-supertitle);
  text-transform: uppercase;
  margin-bottom: var(--spacer-16);
}

.hero__headline {
  font-size: var(--font-size-h1);
  margin-bottom: var(--spacer-24);
}

.hero__body {
  font-size: var(--font-size-paragraph);
  margin-bottom: var(--spacer-40);
}

.hero__ctas {
  display: flex;
  gap: var(--spacer-16);
}
```

### Hero Rules

- Lead with verb in headline ("Transform," "Build," "Connect")
- Keep copy concise: 2-3 sentences
- Use sentence case for headline
- Include only ONE Matcha button
- Make secondary action less prominent (outline style)

---

## Forms

### Form Structure

```html
<form class="form">
  <!-- Form field -->
  <div class="form__field">
    <label for="email" class="form__label">Email address</label>
    <input
      type="email"
      id="email"
      class="form__input"
      placeholder="you@company.com"
    >
    <span class="form__helper">We'll never share your email</span>
  </div>
  
  <!-- Error state -->
  <div class="form__field form__field--error">
    <label for="password" class="form__label">Password</label>
    <input
      type="password"
      id="password"
      class="form__input"
      aria-invalid="true"
      aria-describedby="password-error"
    >
    <span class="form__error" id="password-error">
      Password must be at least 8 characters
    </span>
  </div>
  
  <!-- Submit button -->
  <button type="submit" class="btn-primary">Sign up</button>
</form>
```

### Form Styles

```css
.form__field {
  margin-bottom: var(--spacer-24);
}

.form__label {
  display: block;
  font-size: var(--font-size-paragraph);
  font-weight: 600;
  margin-bottom: var(--spacer-8);
}

.form__input {
  width: 100%;
  font-size: var(--font-size-paragraph);
  padding: var(--spacer-12) var(--spacer-16);
  border: 1px solid var(--color-neutral-light-18);
  border-radius: 8px;
  transition: border-color 0.2s;
}

.form__input:focus {
  outline: none;
  border-color: var(--color-matcha);
  box-shadow: 0 0 0 3px rgba(209, 244, 112, 0.2);
}

.form__input[aria-invalid="true"] {
  border-color: var(--color-error);
}

.form__helper {
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-neutral-light-47);
  margin-top: var(--spacer-8);
}

.form__error {
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-error);
  margin-top: var(--spacer-8);
}
```

### Form Rules

- Always include labels (not just placeholders)
- Use helper text for clarification
- Show clear error states with color + text
- Make touch targets 44x44px minimum on mobile
- Keep forms simple—only ask for necessary information

---

## Navigation

### Top Navigation Pattern

```html
<nav class="nav">
  <div class="nav__container">
    <!-- Logo -->
    <a href="/" class="nav__logo">
      <img src="logo-licorice.svg" alt="Zendesk">
    </a>
    
    <!-- Links -->
    <ul class="nav__links">
      <li><a href="/products">Products</a></li>
      <li><a href="/solutions">Solutions</a></li>
      <li><a href="/pricing">Pricing</a></li>
    </ul>
    
    <!-- CTA -->
    <div class="nav__cta">
      <a href="/login" class="btn-tertiary">Sign in</a>
      <a href="/signup" class="btn-primary">Start free trial</a>
    </div>
  </div>
</nav>
```

### Navigation Rules

- Keep primary navigation to 5-7 items max
- Make logo clickable (returns to home)
- Use Matcha button only for primary CTA (if any)
- Ensure keyboard navigable
- Include skip navigation link for accessibility

---

## Imagery

### Rules (DON'TS)

❌ **Don't use borders on web imagery** - For general photography, let images breathe naturally

❌ **Don't use circles, polygons, or other shapes** - Always mask imagery in rounded rectangles (border-radius: 12px)

✅ **Exception:** For blockframes (product UI screenshots), DO use drop shadows to ensure contrast

### Image Styling

```css
.image {
  border-radius: 12px;  /* Always rounded rectangle */
  width: 100%;
  height: auto;
}

/* For product screenshots that need definition */
.screenshot {
  border-radius: 12px;
  box-shadow: var(--shadow-s2);
}
```

---

## Logo Usage

### Logo Colors

- **Licorice logo** (`logo-licorice.svg`) - Use on light backgrounds
- **Coconut logo** (`logo-coconut.svg`) - Use on dark backgrounds

### Logo Rules (DON'TS)

❌ **Don't apply custom colors to the Zendesk logo** - Always use default logo colors

❌ **Don't add "Zen" to product names** - Use proper product names only

❌ **The Z symbol never appears alone** - Using it alone requires creative team approval

---

## Component Examples

See working examples:
- `examples/hero-section.html` - Complete hero with proper CTA hierarchy
- `examples/card-component.html` - Card grid with proper Matcha usage
