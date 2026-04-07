import React from 'react';
import tokens from '../assets/tokens.json';

/**
 * Card Component Example - Zendesk Brand
 *
 * Demonstrates:
 * ✅ THE DEFINING RULE: Matcha used ONLY as accent (link underlines), not backgrounds
 * ✅ Typography: H2 30px/500, H3 21px/500, Body 15px/400
 * ✅ Spacing: 72, 56, 40, 24, 16, 12
 * ✅ Sentence case headlines
 * ✅ Active voice: "Resolve issues," "Connect channels"
 * ✅ Token usage via JSON import
 */

// Styles object using design tokens
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `${tokens.spacing[96]} ${tokens.spacing[56]}`
  },

  sectionTitle: {
    fontSize: tokens.typography.h2.fontSize,
    fontWeight: tokens.typography.h2.fontWeight,
    lineHeight: tokens.typography.h2.lineHeight,
    marginBottom: tokens.spacing[40],
    color: tokens.colors.primary.licorice
  },

  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: tokens.spacing[24]
  },

  card: {
    background: tokens.colors.primary.coconut,
    border: `1px solid ${tokens.colors.neutral.light[11]}`,
    borderRadius: '12px',
    padding: tokens.spacing[24],
    transition: 'box-shadow 0.2s'
  },

  cardIcon: {
    width: '48px',
    height: '48px',
    background: tokens.colors.primary.sesame,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: tokens.spacing[16]
  },

  cardTitle: {
    fontSize: tokens.typography.h3.fontSize,
    fontWeight: tokens.typography.h3.fontWeight,
    lineHeight: tokens.typography.h3.lineHeight,
    marginBottom: tokens.spacing[12],
    color: tokens.colors.primary.licorice
  },

  cardDescription: {
    fontSize: tokens.typography.paragraph.fontSize,
    fontWeight: tokens.typography.paragraph.fontWeight,
    lineHeight: tokens.typography.paragraph.lineHeight,
    color: tokens.colors.neutral.light[79],
    marginBottom: tokens.spacing[16]
  },

  cardLink: {
    color: tokens.colors.primary.licorice,
    fontSize: tokens.typography.paragraph.fontSize,
    fontWeight: 600,
    textDecoration: 'underline',
    textDecorationColor: tokens.colors.primary.matcha,
    textDecorationThickness: '2px',
    textUnderlineOffset: '3px'
  },

  ctaSection: {
    background: tokens.colors.primary.sesame,
    borderRadius: '12px',
    padding: tokens.spacing[56],
    marginTop: tokens.spacing[72],
    textAlign: 'center'
  },

  ctaTitle: {
    fontSize: tokens.typography.h2.fontSize,
    fontWeight: tokens.typography.h2.fontWeight,
    marginBottom: tokens.spacing[16]
  },

  ctaDescription: {
    fontSize: tokens.typography.paragraphLarge.fontSize,
    color: tokens.colors.neutral.light[79],
    marginBottom: tokens.spacing[40]
  },

  // THE ONLY MATCHA BUTTON ON THIS PAGE
  btnPrimary: {
    background: tokens.colors.primary.matcha,
    color: tokens.colors.primary.licorice,
    fontSize: tokens.typography.paragraph.fontSize,
    fontWeight: 600,
    padding: `${tokens.spacing[16]} ${tokens.spacing[40]}`,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block'
  }
};

// Card data
const cards = [
  {
    icon: '⚡',
    title: 'Resolve issues faster',
    description: 'AI analyzes every request and routes it to the right agent with full context. Your team spends less time searching and more time helping.',
    link: '#'
  },
  {
    icon: '🔗',
    title: 'Connect every channel',
    description: 'Meet your customers where they are—email, chat, social, or phone. We bring it all together in one place.',
    link: '#'
  },
  {
    icon: '📊',
    title: 'Understand what matters',
    description: 'Real-time insights show you what's working and where to improve. Make decisions backed by data, not guesswork.',
    link: '#'
  }
];

export default function CardComponent() {
  return (
    <div style={styles.container}>
      {/* Section Title */}
      <h2 style={styles.sectionTitle}>Built for teams that move fast</h2>

      {/* Card Grid */}
      <div style={styles.cardGrid}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = tokens.shadows.s1;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.cardIcon}>{card.icon}</div>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDescription}>{card.description}</p>
            <a
              href={card.link}
              style={styles.cardLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = tokens.colors.primary.matcha;
                e.currentTarget.style.textDecoration = 'none';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.textDecoration = 'underline';
              }}
            >
              Learn more
            </a>
          </div>
        ))}
      </div>

      {/* CTA Section - Contains THE ONLY Matcha button on page */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to transform your service?</h2>
        <p style={styles.ctaDescription}>
          Join thousands of teams who trust Zendesk to deliver exceptional experiences
        </p>
        {/* PRIMARY CTA - The ONLY Matcha element on this page */}
        <a href="#" style={styles.btnPrimary}>
          Start free trial
        </a>
      </section>
    </div>
  );
}

/**
 * Usage Notes:
 *
 * - Import tokens from '../assets/tokens.json'
 * - All spacing, colors, typography reference tokens
 * - THE DEFINING RULE: Only 1 Matcha button (in CTA section)
 * - Matcha used sparingly for link accents
 * - Active voice: "Resolve issues," "Connect channels"
 * - Sentence case headlines
 * - Direct address: "your team," "you"
 * - Concise copy: 2-3 sentences per card
 *
 * For CSS Modules or Styled Components, convert inline styles
 * but maintain token references.
 */
