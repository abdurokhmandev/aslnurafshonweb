---
name: Organic Minimalist Marketplace
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#50443f'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#82746e'
  outline-variant: '#d4c3bb'
  surface-tint: '#795744'
  primary: '#32190b'
  on-primary: '#ffffff'
  primary-container: '#4a2e1e'
  on-primary-container: '#bd957f'
  inverse-primary: '#e9bda6'
  secondary: '#8f4d1f'
  on-secondary: '#ffffff'
  secondary-container: '#fda771'
  on-secondary-container: '#773b0d'
  tertiary: '#241f12'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a3426'
  on-tertiary-container: '#a69c8a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#e9bda6'
  on-primary-fixed: '#2d1607'
  on-primary-fixed-variant: '#5e402f'
  secondary-fixed: '#ffdbc8'
  secondary-fixed-dim: '#ffb68a'
  on-secondary-fixed: '#321300'
  on-secondary-fixed-variant: '#713608'
  tertiary-fixed: '#ede1cd'
  tertiary-fixed-dim: '#d0c5b2'
  on-tertiary-fixed: '#201b0f'
  on-tertiary-fixed-variant: '#4d4637'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  container-max: 1280px
  gutter: 20px
  margin-mobile: 16px
---

## Brand & Style
The design system focuses on a high-end, contemporary grocery experience that emphasizes product quality and freshness. The target audience is the modern Uzbek consumer who values convenience, aesthetics, and premium service.

The design style is **Minimalist** with a focus on **Product-Photo Centricity**. By utilizing generous whitespace and a restricted color palette, the UI retreats into the background, allowing the rich textures of tea leaves, coffee beans, and fresh groceries to drive the emotional connection. The aesthetic borrows from the efficiency of top-tier delivery platforms while maintaining a warmer, boutique feel through tactile imagery and organic color accents.

## Colors
The palette is grounded in the earth tones of the product catalog. 

- **Primary (#4A2E1E):** A deep coffee brown used for high-level branding, primary navigation, and headers to establish authority and warmth.
- **Secondary/Accent (#C97C4A):** A warm terracotta used for functional call-to-actions, price highlights, and active states.
- **Tertiary (#F1E5D1):** A soft cream-tan used for subtle background containers and categorizations.
- **Background (#F9F9F9):** A neutral light-gray that prevents screen fatigue and provides a clean canvas for product photography.

## Typography
The system uses **Plus Jakarta Sans** for its approachable yet professional character. The type scale is optimized for readability in Uzbek (Latin) script.

- **Headlines:** Use Bold or SemiBold weights to create a strong hierarchy. Large displays use tighter letter spacing for a modern, editorial look.
- **Body Text:** Standardized on 16px for optimal legibility.
- **Labels:** Used for categories, product tags, and buttons. These often utilize slightly higher weights to remain distinct from body copy at smaller sizes.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a maximum container width to maintain readability on ultra-wide monitors.

- **Desktop:** 12-column grid with 24px gutters. Product listings typically span 3 or 4 columns.
- **Tablet:** 8-column grid with 20px gutters. 
- **Mobile:** 4-column grid (or simple flex stack) with 16px side margins. 
- **Rhythm:** All spacing (padding, margins) is based on a 4px/8px baseline to ensure a consistent vertical rhythm. Use `lg` (24px) for spacing between major sections and `md` (16px) for internal component padding.

## Elevation & Depth
This design system uses **Tonal Layers** combined with **Ambient Shadows** to create a sense of organized depth without visual clutter.

- **Level 0 (Base):** The main background (`#F9F9F9`).
- **Level 1 (Cards):** White surfaces (`#FFFFFF`) with a very soft, diffused shadow (Blur: 20px, Y: 4px, Opacity: 4%, Color: #4A2E1E).
- **Level 2 (Interactive):** Hover states or floating action buttons use a more pronounced shadow (Blur: 30px, Y: 8px, Opacity: 8%).
- **Visual Separation:** Use subtle 1px borders in a lighter tint of the neutral color to define areas where shadows may become too busy.

## Shapes
The shape language is friendly and modern.

- **Standard Elements:** 12px-16px (`rounded-lg` to `rounded-xl`) is the standard for product cards, input fields, and banners.
- **Small Elements:** 8px (`rounded-md`) for chips and small tags.
- **Product Images:** Must always maintain a 1:1 aspect ratio with a 12px corner radius to ensure a consistent visual "shelf" regardless of the original photo dimensions.

## Components
- **Buttons:** Primary buttons use the Coffee Brown (`#4A2E1E`) with white text. Secondary buttons use the Terracotta (`#C97C4A`). Shapes are `rounded-lg` (12px).
- **Product Cards:** 1:1 image ratio at the top, followed by the product name in `label-md`, weight/unit in `label-sm` (muted), and price in `headline-sm`. A small Terracotta "+" button is placed in the bottom right corner for quick adding.
- **Input Fields:** Soft gray backgrounds (`#F1F1F1`) with no border, becoming white with a primary-colored border on focus.
- **Chips/Filters:** Rounded-pill shapes with light gray backgrounds. Active states switch to the Terracotta accent.
- **Lists:** Clean lines with minimal separators; use `spacing.md` (16px) for vertical padding between list items.
- **Cart Summary:** A persistent floating card on desktop or a bottom sheet on mobile, using high elevation (Level 2) to signify its importance.