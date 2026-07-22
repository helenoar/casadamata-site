# Design Spec: Glassmorphism Refactor — Casa da Mata

**Date:** 2026-07-21  
**Project:** Casa da Mata 45 (Airbnb showcase site)  
**Goal:** Modernize visual design from warm beige to elegant off-white with glassmorphism effects, creating subtle 3D depth and more luminous aesthetic.

---

## Overview

Replace the current beige background (`#f9efdc`) with a clean off-white (`#fafafa`), introducing glassmorphism (frosted glass effect with backdrop blur) to major sections and smaller components. Maintain existing color palette (Oliva, Oliva Escuro, Terracota). Add subtle shadow layering for 3D depth without dramatics.

**Result:** Modern, premium aesthetic with professional depth — "chic and airy."

---

## Color Palette (Maintained)

| Name | Hex | Usage |
|---|---|---|
| Oliva | `#819c5d` | Body text, secondary headings |
| Oliva Escuro | `#4d5c30` | Primary headings, emphasis |
| Terracota | `#8a4b2f` | Accents, borders, CTAs |
| **Off-White (new)** | **`#fafafa`** | **Global background (replaces `#f9efdc`)** |
| Off 1 | `#eee8dc` | Borders, glassmorphism backgrounds, details |
| Off 2 | `#f9efdc` | Glassmorphism backgrounds (40-50% opacity) |

---

## Implementation Strategy

### 1. Global Background

- **File:** `app/layout.tsx`
- **Change:** Replace `bg-off-2` with `bg-off-white`
- **Impact:** All pages inherit cleaner, more luminous background
- **CSS addition:** Add `--color-off-white: #fafafa` to Tailwind config

---

### 2. Glassmorphism Layers

#### Sezioni Grandi (Major Sections)

Applied to: Hero, Diferenciais, Amenities, Reviews, Host, Atrações Próximas, Galeria, all page sections

**CSS Classes:**
```
backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg
```

**Breakdown:**
- `backdrop-blur-sm` — 4px blur (frosted glass effect)
- `bg-off-2/40` — Off 2 at 40% opacity (semi-transparent)
- `border border-terracota/20` — Thin terracota border at 20% opacity
- Result: Subtle floating effect, maintains readability

**Applied to:**
- Section containers (`.section-container` or similar wrapper)
- Hero grid background
- Card components in galleries/reviews
- Info boxes

#### Elementi Piccoli (Small Components)

Applied to: buttons, tags, badges, overlays

**CSS Classes:**
```
backdrop-blur-xs bg-off-1/50
```

**Breakdown:**
- `backdrop-blur-xs` — 2px blur (subtle frosted effect)
- `bg-off-1/50` — Off 1 at 50% opacity
- Result: Lighter, less prominent than major sections

**Applied to:**
- CTA buttons (enhance existing design)
- Info tags/badges
- Small overlay elements
- Mobile menu backgrounds

#### Header (Update Existing)

Currently uses `bg-off-2/80 backdrop-blur-md`

**Change to:**
```
bg-off-white/90 backdrop-blur-md
```

- Switch background to off-white to align with body
- Keep blur intensity (md = 8px)
- Maintain border `border-terracota/30`

---

### 3. 3D Depth (Subtle)

**Shadows:** Maintain existing `shadow-soft` (0 2px 4px rgba(0,0,0,0.04))
- Glassmorphism creates primary visual depth via transparency + blur
- Shadows are secondary, supporting the effect
- No harsh or dramatic shadows

**Layering:** 
- Glassmorphism sections visually "float" above off-white background
- Transparent + blurred = sensation of depth without aggression
- Multiple blur intensities (sm vs xs) reinforce hierarchy

---

## Component-by-Component Changes

| Component | Current | Change | Reason |
|---|---|---|---|
| `<body>` | `bg-off-2` | `bg-off-white` | Global background |
| `<header>` | `bg-off-2/80` | `bg-off-white/90` | Align with body |
| Sections (Hero, Diferenciais, etc.) | Plain grid/flex | Add `backdrop-blur-sm bg-off-2/40` | Glassmorphism effect |
| CTA Buttons | `border border-oliva-escuro` | Add `backdrop-blur-xs bg-off-1/50` | Subtle glass effect |
| Cards (gallery, reviews) | `shadow-soft` | Add `backdrop-blur-sm bg-off-2/40` | Glassmorphism |
| Small tags/badges | Plain bg | Add `backdrop-blur-xs bg-off-1/50` | Hierarchy via blur |
| Borders | `terracota/30` or none | Add `terracota/20` where needed | Subtle definition |

---

## Tailwind Configuration Updates

Add to `tailwind.config.ts`:

```typescript
colors: {
  'off-white': '#fafafa',
}
```

Optionally, if using `backdrop-blur-xs` (2px), add to theme:

```typescript
backdropBlur: {
  'xs': '2px',
  'sm': '4px',
  // ... existing values
}
```

---

## Browser Compatibility

- **Backdrop Filter Support:** 95%+ of modern browsers (Chrome 76+, Safari 9+, Firefox 103+)
- **Fallback:** Browsers without `backdrop-filter` support will show solid background color instead of blur — still readable, just less effect
- **No Breaking Changes:** Progressive enhancement only

---

## Pages & Sections Affected

1. **Home** (`/`) — Hero, all sections
2. **A Casa** (`/a-casa`) — Hero, all sections
3. **Galeria** (`/galeria`) — Carousel sections, lightbox overlay
4. **Avaliações** (`/avaliacoes`) — Review cards
5. **Anfitriã** (`/anfitria`) — Host section
6. **O que fazer** (`/o-que-fazer`) — All sections
7. **FAQ** (`/faq`) — All sections
8. **Inhotim & Atrações** (`/inhotim-e-atracoes-turisticas`, `/hospedagem-nova-lima-e-macacos`) — All sections
9. **Header** (`components/layout/Header`) — Background update
10. **Buttons/CTAs** — Across all pages

---

## Implementation Order

1. Update Tailwind config (`tailwind.config.ts`)
2. Update global body background (`app/layout.tsx`)
3. Update Header (`components/layout/Header.tsx`)
4. Create base glassmorphism utility classes (if centralizing)
5. Apply glassmorphism to section wrappers (each page/component)
6. Apply glassmorphism to buttons and small components
7. Test across pages and browsers
8. Deploy

---

## Success Criteria

- ✅ Off-white background visible on all pages (not beige)
- ✅ Major sections show glassmorphism effect (blur + transparency visible)
- ✅ Small elements (buttons, tags) show subtle glass effect
- ✅ 3D depth sensation present but elegant, not dramatic
- ✅ All text remains readable (contrast maintained)
- ✅ Header aligns visually with body
- ✅ Mobile responsive (glassmorphism works on all viewport sizes)
- ✅ No performance degradation

---

## Notes

- **Existing Shadows:** Kept minimal (`shadow-soft`) — glassmorphism provides primary depth cue
- **Border Updates:** Terracota borders reduced to 20% opacity for subtlety
- **Opacity Choices:** 40% for major sections, 50% for small elements — tested for readability + visual effect
- **Blur Values:** `sm` (4px) for sections, `xs` (2px) for elements — creates hierarchy without overdoing
