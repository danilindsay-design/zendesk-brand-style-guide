# Zendesk Brand Style Guide

> Zendesk's AI-friendly digital design and development library

A comprehensive design system reference built for both humans and AI agents, featuring the Greenhouse 3.0 design tokens, brand guidelines, and production-ready code examples.

## 🌟 Features

- **Human-Readable Visual Reference** — Complete brand guidelines with color palettes, typography, components, and best practices
- **Machine-Readable Code Reference** — Structured JSON design tokens and code examples optimized for AI agents
- **Brand Strategy** — Creative platform, brand attributes, and graphic language principles
- **Component Library** — Production-ready code for buttons, forms, cards, and layouts
- **Accessibility Guidelines** — WCAG 2.1 AA compliance with color contrast, keyboard navigation, and ARIA examples
- **Responsive Design** — Mobile-first breakpoint system with design principles

## 📚 Documentation

### [Human Reference](zendesk-brand-visual-reference.html)
Comprehensive visual design system guide with:
- Creative Platform & Brand Expressions
- Logo system and usage guidelines
- Complete color system (Primary, Secondary, Extended, Neutrals)
- Typography hierarchy with Zendesk Sans
- Interactive component examples
- Layout patterns and spacing system

### [Machine Reference](zendesk-brand-code-reference.html)
Machine-readable design tokens and code examples for AI agents:
- Structured JSON design tokens
- Brand strategy and philosophy
- Usage guidelines (color hierarchy, button hierarchy, typography)
- Production-ready component code
- Responsive layout patterns
- Complete accessibility requirements

## 🎨 Design System

**Greenhouse 3.0** is Zendesk's design system featuring:
- **Colors**: Primary (Coconut, Licorice, Matcha, Sesame) + Extended palettes
- **Typography**: Zendesk Sans (6 weights) + Zendesk Mono
- **Spacing**: 8px base grid system
- **Breakpoints**: Mobile-first (XS → S → M → L → XL)
- **Components**: Buttons, forms, cards, navigation, and more

## 🚀 Usage

### For Designers & Developers
Open the **Human Reference** to explore the complete visual design system with interactive examples.

### For AI Agents
Access the **Machine Reference** for structured JSON tokens and implementation guidelines. All design tokens include:
- Type definitions
- Usage constraints
- Code examples
- Accessibility requirements

### Integration
Copy JSON tokens directly from the code reference or access the embedded design system via:
```javascript
const tokens = document.getElementById('greenhouse-design-tokens').textContent;
const designSystem = JSON.parse(tokens);
```

## 📖 Brand Philosophy

**"The customer is always human."**

When things go sideways, you want service you can count on. Zendesk ensures every interaction ends in resolution, helping brands show up for their customers exactly how they need to.

### Brand Attributes
- **Approachable** — Intuitive, welcoming, clear
- **Modern** — Bold, forward-thinking, innovative
- **Trusted** — Consistent, reliable, quality-focused
- **Connected** — Relevant, cultural, conversation-shaping
- **Fresh** — Clean, elegant, seamless

## 🛠️ Development

### File Structure
```
├── index.html                              # Landing page
├── zendesk-brand-visual-reference.html    # Human reference
├── zendesk-brand-code-reference.html      # Machine reference
├── fonts/
│   ├── zendesk-sans/                      # Zendesk Sans font files
│   └── zendesk-mono/                      # Zendesk Mono font files
└── README.md
```

### Local Development
Simply open `index.html` in your browser. All fonts are self-hosted, so it works offline.

## ♿ Accessibility

All components meet **WCAG 2.1 Level AA** standards:
- Color contrast ratios exceed 4.5:1 for normal text
- All interactive elements are keyboard accessible
- Semantic HTML with proper ARIA labels
- Touch targets meet 44x44px minimum on mobile
- Screen reader optimized

## 📝 License

© 2026 Zendesk. For internal use and authorized partners.

## 🤝 Contributing

This is a living design system. For updates or questions, contact the Zendesk Brand Team.

---

**Built with Claude Code** | v2026
