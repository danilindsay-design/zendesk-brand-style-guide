# Accessibility

Zendesk follows **WCAG 2.1 Level AA** standards. Accessibility is not optional—it's a requirement.

---

## Color Contrast

### Minimum Requirements

**Normal Text (< 18px or < 14px bold)**
- Minimum ratio: **4.5:1** against background
- Test all text colors against their backgrounds

**Large Text (≥ 18px or ≥ 14px bold)**
- Minimum ratio: **3:1** against background
- Headings typically meet this automatically

### Approved Combinations

✅ **On White/Coconut backgrounds:**
- Licorice text (#11110D) - Exceeds 4.5:1
- Neutral-Light-79 text - Meets 4.5:1 for body
- Neutral-Light-47 text - Use for large text or secondary elements only

✅ **On Dark/Licorice backgrounds:**
- Coconut text (#FFFFFF) - Exceeds 4.5:1
- Neutral-Dark-79 text - Meets 4.5:1
- Matcha (#D1F470) - Verify contrast before using on dark backgrounds

❌ **Avoid:**
- Light gray (Sesame-300, Sesame-400) for body text
- Matcha text on Coconut backgrounds (poor contrast)
- Any text color that doesn't meet 4.5:1 for normal text

### Testing

Use browser DevTools or online contrast checkers:
- Chrome DevTools: Inspect > Accessibility pane
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Figma: Use built-in contrast checker tool

---

## Don't Rely on Color Alone

❌ **Wrong:**
- Red text for errors without icon or label
- Green/red for success/failure states only
- Color-coded charts without labels

✅ **Correct:**
- Error text + error icon + "Error:" label
- Success state with checkmark icon + "Success" text
- Charts with patterns or labels in addition to colors

### Example: Error State

```html
<!-- Wrong: Color only -->
<p style="color: red;">Password is incorrect</p>

<!-- Correct: Color + icon + semantic HTML -->
<p class="error" role="alert">
  <span class="error__icon" aria-hidden="true">⚠️</span>
  <strong>Error:</strong> Password is incorrect
</p>
```

---

## Keyboard Navigation

### Requirements

All interactive elements must be:
1. **Focusable** - Keyboard users can tab to them
2. **Operable** - Can be activated via keyboard (Enter/Space)
3. **Visible** - Focus indicator is clearly visible

### Focus States

```css
button:focus,
a:focus,
input:focus {
  outline: 3px solid var(--color-matcha);
  outline-offset: 2px;
}

/* Alternative: Custom focus ring */
.btn-primary:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(209, 244, 112, 0.4);
}
```

### Tab Order

- Ensure logical tab order follows visual order
- Use `tabindex="0"` for custom interactive elements
- **Never** use `tabindex` values > 0 (disrupts natural order)
- Hide decorative elements from tab order: `tabindex="-1"`

### Keyboard Shortcuts

- **Enter/Space** - Activate buttons/links
- **Tab** - Move forward
- **Shift+Tab** - Move backward
- **Escape** - Close modals/dropdowns
- **Arrow keys** - Navigate within menus/lists

---

## Touch Targets

### Minimum Sizes

**Mobile:**
- Minimum: **44x44px** (iOS/Android guidelines)
- Recommended: **48x48px** for better usability

**Desktop:**
- Minimum: **24px height** for clickable areas
- Recommended: **32-40px** for primary actions

### Implementation

```css
/* Ensure touch target is large enough */
.button {
  min-width: 88px;
  min-height: 44px;
  padding: var(--spacer-12) var(--spacer-24);
}

/* For small visual elements, extend clickable area */
.icon-button {
  width: 20px;
  height: 20px;
  padding: 12px;  /* Effective touch target: 44x44px */
}
```

---

## Semantic HTML & ARIA

### Use Semantic HTML First

```html
<!-- Wrong: divs for everything -->
<div class="button" onclick="submit()">Submit</div>

<!-- Correct: semantic elements -->
<button type="submit">Submit</button>
```

### Common Semantic Elements

- `<button>` - For actions
- `<a>` - For navigation
- `<nav>` - Navigation landmarks
- `<main>` - Main content
- `<header>` - Page/section header
- `<footer>` - Page/section footer
- `<article>` - Self-contained content
- `<section>` - Thematic grouping

### ARIA Labels

Use ARIA when semantic HTML isn't enough:

```html
<!-- Icon button needs label -->
<button aria-label="Close dialog">
  <span aria-hidden="true">×</span>
</button>

<!-- Form field with description -->
<label for="email">Email</label>
<input
  type="email"
  id="email"
  aria-describedby="email-help"
>
<span id="email-help">We'll never share your email</span>

<!-- Loading state -->
<button aria-busy="true" aria-live="polite">
  Loading...
</button>

<!-- Error state -->
<input
  type="text"
  aria-invalid="true"
  aria-describedby="error-msg"
>
<span id="error-msg" role="alert">This field is required</span>
```

### ARIA Roles

- `role="alert"` - Important, time-sensitive information
- `role="navigation"` - Navigation landmark
- `role="button"` - Custom button element
- `role="dialog"` - Modal dialogs
- `role="status"` - Status updates

---

## Screen Reader Optimization

### Image Alt Text

```html
<!-- Decorative image -->
<img src="decoration.svg" alt="" aria-hidden="true">

<!-- Functional image -->
<img src="logo.svg" alt="Zendesk home">

<!-- Informative image -->
<img src="chart.png" alt="Support tickets increased 40% in Q4">
```

### Hidden Content

```css
/* Visually hidden but screen reader accessible */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Skip Links

```html
<!-- Allow keyboard users to skip navigation -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<nav>...</nav>

<main id="main-content">...</main>
```

---

## Forms Accessibility

### Requirements

1. **Every input has a label**
2. **Labels are properly associated** (`for` attribute matches `id`)
3. **Required fields are indicated** (not just with asterisk)
4. **Errors are announced** to screen readers
5. **Helper text is associated** with inputs

### Complete Accessible Form Field

```html
<div class="form__field">
  <label for="username" class="form__label">
    Username
    <span aria-label="required">*</span>
  </label>
  
  <input
    type="text"
    id="username"
    name="username"
    class="form__input"
    required
    aria-required="true"
    aria-invalid="false"
    aria-describedby="username-help username-error"
  >
  
  <span id="username-help" class="form__helper">
    Choose a unique username
  </span>
  
  <span id="username-error" class="form__error" role="alert">
    <!-- Error appears here when invalid -->
  </span>
</div>
```

---

## Modal Dialogs

### Accessibility Requirements

1. **Focus management** - Focus moves to modal when opened
2. **Focus trap** - Tab stays within modal
3. **Keyboard close** - Escape key closes modal
4. **Screen reader announcement** - Modal content announced
5. **Return focus** - Focus returns to trigger element when closed

### Example Modal

```html
<div
  class="modal"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Confirm action</h2>
  <p id="modal-description">Are you sure you want to delete this item?</p>
  
  <div class="modal__actions">
    <button class="btn-secondary" onclick="closeModal()">
      Cancel
    </button>
    <button class="btn-primary" onclick="confirmDelete()">
      Delete
    </button>
  </div>
  
  <button
    class="modal__close"
    aria-label="Close dialog"
    onclick="closeModal()"
  >
    ×
  </button>
</div>
```

---

## Testing Checklist

### Manual Tests

- [ ] Navigate entire page using only keyboard (Tab, Enter, Arrows)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify all interactive elements have visible focus states
- [ ] Check color contrast for all text
- [ ] Ensure no content flashes more than 3 times per second
- [ ] Test with browser zoom at 200%
- [ ] Verify all images have appropriate alt text

### Automated Tools

- Lighthouse (Chrome DevTools)
- axe DevTools browser extension
- WAVE browser extension
- Pa11y command-line tool

### Common Issues

❌ Missing alt text on images
❌ Insufficient color contrast
❌ Missing form labels
❌ Keyboard trap (can't tab out)
❌ Missing focus indicators
❌ Unclear link text ("click here")
❌ No skip navigation link
❌ Improper heading hierarchy (H1 → H3, skipping H2)

---

## Quick Reference

**Color Contrast:** 4.5:1 minimum for normal text
**Touch Targets:** 44x44px minimum on mobile
**Keyboard:** All interactive elements must be keyboard accessible
**Focus:** Clear, visible focus indicators required
**ARIA:** Use semantic HTML first, ARIA when necessary
**Screen Readers:** Test with NVDA, JAWS, or VoiceOver
**Don't rely on color alone:** Always include additional cues
