# Colors

## THE DEFINING RULE

**Reserve Matcha for primary CTAs only. Limit to 1–2 per page.**

This is the most important rule in the Zendesk visual system. Matcha's power comes from restraint.

- ✅ Typically one Matcha button for the primary action
- ✅ Optionally a second Matcha element (like a link accent or secondary CTA)
- ❌ Multiple Matcha buttons = wrong
- ❌ Matcha backgrounds = wrong
- ❌ Matcha text highlighting = wrong

---

## Primary Palette

**Coconut** `#FFFFFF`
- White, primary backgrounds
- Most common background color

**Licorice** `#11110D`
- Very dark charcoal
- Primary text color
- Logo on light backgrounds

**Matcha** `#D1F470`
- Bright lime/yellow-green
- PRIMARY BRAND COLOR
- **CRITICAL: Reserve for primary CTAs only, limit to 1–2 per page**
- Signature color—power comes from restraint

**Sesame** `#F5F5F2`
- Warm off-white/cream
- Light surfaces, secondary backgrounds

**Fern** `#203524`
- Very dark forest green
- Dark backgrounds, approved background color

---

## Secondary Palette (Creative Guidelines)

**Cactus** `#A1D78F`
- Muted sage green
- Natural sidekick to Matcha
- Supports optimistic quality but never overpowers Matcha
- ❌ Do not use as section backgrounds

**Pineapple** `#FEEB7E`
- Soft yellow
- Natural sidekick to Matcha
- ❌ Do not use as section backgrounds

**Shamrock** `#2D4C33`
- Deep forest green

---

## Matcha Tonal Scale (000-600)

Use for extended hierarchy and data visualization.

- **Matcha-000** `#E6FAAB` - Lightest
- **Matcha-100** `#D1F470` - Primary Matcha (THE CTA COLOR)
- **Matcha-200** `#B2DA56`
- **Matcha-300** `#92BF3B`
- **Matcha-400** `#70A32A`
- **Matcha-500** `#4E8336`
- **Matcha-600** `#355E34` - Darkest

---

## Sesame Tonal Scale (100-700)

Use for neutral surfaces and backgrounds.

- **Sesame-100** `#F5F5F2` - Primary Sesame
- **Sesame-200** `#E5E5E2`
- **Sesame-300** `#D5D5D2`
- **Sesame-400** `#B4B4B0`
- **Sesame-500** `#90918C`
- **Sesame-600** `#6C6C68`
- **Sesame-700** `#42433E` - Darkest

---

## Neutral Opacity Scales

### Light Mode (Licorice-based)
Use on white/light backgrounds.

- **Neutral-Light-79** `rgba(17, 17, 13, 0.79)` - Neutral 600, body text
- **Neutral-Light-47** `rgba(17, 17, 13, 0.47)` - Neutral 500, secondary text
- **Neutral-Light-32** `rgba(17, 17, 13, 0.32)` - Neutral 400, disabled text
- **Neutral-Light-18** `rgba(17, 17, 13, 0.18)` - Neutral 300, borders
- **Neutral-Light-11** `rgba(17, 17, 13, 0.11)` - Neutral 200, subtle borders
- **Neutral-Light-5** `rgba(17, 17, 13, 0.05)` - Neutral 100, hover states

### Dark Mode (White-based)
Use on dark backgrounds.

- **Neutral-Dark-79** `rgba(255, 255, 255, 0.79)` - Neutral 600, body text on dark
- **Neutral-Dark-47** `rgba(255, 255, 255, 0.47)` - Neutral 500, secondary text on dark
- **Neutral-Dark-32** `rgba(255, 255, 255, 0.32)` - Neutral 400, disabled text on dark
- **Neutral-Dark-20** `rgba(255, 255, 255, 0.20)` - Neutral 300
- **Neutral-Dark-13** `rgba(255, 255, 255, 0.13)` - Neutral 200, active states on dark
- **Neutral-Dark-7** `rgba(255, 255, 255, 0.07)` - Neutral 150, hover states on dark
- **Neutral-Dark-5** `rgba(255, 255, 255, 0.05)` - Neutral 100, subtle backgrounds on dark

---

## Data Visualization Palettes

### Cyan Scale (100-500)
- **100** `#C6F1EE`
- **200** `#90DACD`
- **300** `#42AF9B`
- **400** `#00876E`
- **500** `#004A3C`

### Blue Scale (100-500)
- **100** `#D5ECFF`
- **200** `#B2DCFF`
- **300** `#89C7FA`
- **400** `#65A3D6`
- **500** `#3A78AA`

### Lavender Scale (100-500)
- **100** `#D7DAF6`
- **200** `#BAC0ED`
- **300** `#949CDE`
- **400** `#7F86C0`
- **500** `#474D7D`

### Purple Scale (100-500)
- **100** `#EFDEFF`
- **200** `#E5CCFE`
- **300** `#DAB6FD`
- **400** `#C39BEB`
- **500** `#956DBD`

### Data Viz State Colors
- **Matcha-100** `#D1F470`
- **Matcha-600** `#355E34`
- **Red-100** `#FF4949`
- **Red-200** `#831F15`
- **Yellow-100** `#FFDB5C`
- **Yellow-200** `#725E17`

---

## Color Usage Rules (DON'TS)

❌ **Don't overuse Matcha** - Limit to 1-2 elements per page. The defining rule.

❌ **Don't use secondary colors (Cactus, Pineapple) as backgrounds** - Only use approved background colors: Coconut, Sesame, Licorice, Fern.

❌ **Don't alternate background colors in every section** - Use layout to differentiate sections. Use Coconut for majority of backgrounds.

❌ **Don't highlight text with different colors** - Use typographic hierarchy and weight instead.

❌ **Don't apply custom colors to the Zendesk logo** - Always use default logo colors (Licorice or Coconut only).

❌ **Don't rely solely on color to convey meaning** - Use additional visual cues like weight, size, or icons for accessibility.

❌ **Crimson is never used as a brand color** - Only for visual aid and accent in sequences (videos, presentations).

---

## Interactive States

**Hover States**
- Light mode: `rgba(17, 17, 13, 0.05)`
- Dark mode: `rgba(255, 255, 255, 0.07)`

**Active States**
- Light mode: `rgba(17, 17, 13, 0.11)`
- Dark mode: `rgba(255, 255, 255, 0.13)`

---

## Token Reference

All color values are available in:
- `assets/tokens.css` as CSS custom properties (`--color-matcha`)
- `assets/tokens.json` as programmatic values

**Example usage:**
```css
.button {
  background: var(--color-matcha);
  color: var(--color-licorice);
}
```
