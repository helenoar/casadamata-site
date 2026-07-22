# Glassmorphism Refactor Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Modernize Casa da Mata visual design from warm beige to elegant off-white with glassmorphism effects, creating subtle 3D depth and premium aesthetic.

**Architecture:** 
1. Update Tailwind config to add `off-white` color and ensure `backdrop-blur-xs` exists
2. Change global body background from `bg-off-2` to `bg-off-white`
3. Update Header to use new background + maintain glassmorphism
4. Apply glassmorphism classes to all major sections (Hero, cards, etc.) and small elements (buttons, tags)
5. Test across all pages and browsers
6. Deploy

**Tech Stack:** Next.js, Tailwind CSS, React

## Global Constraints

- Color palette maintained (Oliva, Oliva Escuro, Terracota, Off 1/Off 2)
- Off-white background: `#fafafa`
- No breaking changes to existing functionality
- Progressive enhancement only (graceful fallback for older browsers)
- All pages must remain responsive

---

## Task 1: Update Tailwind Config

**Files:**
- Modify: `tailwind.config.ts`

**Interfaces:**
- Produces: `off-white` color (used globally), `backdrop-blur-xs` (2px blur for small elements)

- [ ] **Step 1: Open tailwind.config.ts and locate the `colors` object**

Check current structure in the file.

- [ ] **Step 2: Add `off-white` to the `extend.colors` section**

Find the `colors:` or `extend: { colors: }` section and add:

```typescript
extend: {
  colors: {
    'off-white': '#fafafa',
    // ... existing colors
  },
  // ... rest of config
}
```

If `extend.colors` doesn't exist, add it.

- [ ] **Step 3: Verify `backdrop-blur-xs` exists in `backdropBlur`**

Check if `backdropBlur` is defined in `extend`. If not, add:

```typescript
extend: {
  backdropBlur: {
    'xs': '2px',
    // Tailwind provides 'sm' (4px), 'md' (8px), etc. by default
  },
}
```

If `backdrop-blur-xs` already exists, skip this step.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts
git commit -m "config: add off-white color and backdrop-blur-xs to Tailwind"
```

---

## Task 2: Update Global Layout Background

**Files:**
- Modify: `app/layout.tsx:39`

**Interfaces:**
- Consumes: `off-white` color from Tailwind config (Task 1)
- Produces: Global body with off-white background

- [ ] **Step 1: Open app/layout.tsx and locate the body className**

Look for: `<body className={`...bg-off-2...`}>`

- [ ] **Step 2: Replace `bg-off-2` with `bg-off-white`**

Change:
```typescript
// Before
<body className={`${jost.variable} font-body bg-off-2 text-oliva-escuro antialiased`}>

// After
<body className={`${jost.variable} font-body bg-off-white text-oliva-escuro antialiased`}>
```

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "refactor: change global body background from beige to off-white"
```

---

## Task 3: Update Header with New Background & Glassmorphism

**Files:**
- Modify: `components/layout/Header.tsx:16`

**Interfaces:**
- Consumes: `off-white` color from Tailwind config (Task 1)
- Produces: Header with updated background + maintained glassmorphism

- [ ] **Step 1: Open components/layout/Header.tsx and locate the header className**

Look for the `<header className="sticky top-0 z-50 ... bg-off-2/80 ... backdrop-blur-md">`

- [ ] **Step 2: Update background and fallback**

Change:
```typescript
// Before
<header className="sticky top-0 z-50 flex w-full flex-wrap items-center justify-between gap-4 border-b border-terracota/30 bg-off-2/80 px-6 py-6 backdrop-blur-md supports-[backdrop-filter]:bg-off-2/65 shadow-soft md:px-16 lg:px-24">

// After
<header className="sticky top-0 z-50 flex w-full flex-wrap items-center justify-between gap-4 border-b border-terracota/30 bg-off-white/90 px-6 py-6 backdrop-blur-md supports-[backdrop-filter]:bg-off-white/85 shadow-soft md:px-16 lg:px-24">
```

**Explanation:**
- `bg-off-white/90` — off-white at 90% opacity (primary background)
- `supports-[backdrop-filter]:bg-off-white/85` — fallback for browsers with backdrop-filter support (85% opacity for more transparency)
- `backdrop-blur-md` — keep existing blur (8px) for glassmorphism

- [ ] **Step 3: Commit**

```bash
git add components/layout/Header.tsx
git commit -m "refactor: update header background to off-white with maintained glassmorphism"
```

---

## Task 4: Apply Glassmorphism to Home Page (`app/page.tsx`)

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `backdrop-blur-sm`, `bg-off-2/40`, `backdrop-blur-xs`, `bg-off-1/50` classes from Tailwind
- Produces: Home page sections with glassmorphism effect

- [ ] **Step 1: Open app/page.tsx and locate major sections**

Identify sections like Hero, Diferenciais, AmenitiesPreview, ReviewsPreview, etc.

- [ ] **Step 2: Add glassmorphism to section wrappers**

For each major section, wrap the content in:
```typescript
className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 lg:p-12 mb-20"
```

Apply to: Hero, Diferenciais, Amenities, Reviews, Atrações Próximas, Host sections

- [ ] **Step 3: Update CTA buttons with subtle glassmorphism**

For buttons like "Reservar", add:
```typescript
className="backdrop-blur-xs bg-off-1/50 border border-terracota px-6 py-3 rounded transition-all hover:shadow-soft"
```

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "refactor: add glassmorphism to home page sections and buttons"
```

---

## Task 5: Apply Glassmorphism to A Casa Page (`app/a-casa/page.tsx`)

**Files:**
- Modify: `app/a-casa/page.tsx`

**Interfaces:**
- Consumes: Glassmorphism classes from Tailwind (Task 1)
- Produces: A Casa page sections with glassmorphism

- [ ] **Step 1: Open app/a-casa/page.tsx**

- [ ] **Step 2: Apply glassmorphism to all major sections**

For each section wrapper (Hero, main content areas, cards, etc.), add:
```typescript
className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 mb-20"
```

- [ ] **Step 3: Apply to buttons/CTAs**

For CTA buttons:
```typescript
className="backdrop-blur-xs bg-off-1/50 border border-terracota px-6 py-3 rounded"
```

- [ ] **Step 4: Commit**

```bash
git add app/a-casa/page.tsx
git commit -m "refactor: add glassmorphism to a-casa page sections"
```

---

## Task 6: Apply Glassmorphism to Galeria Page (`app/galeria/page.tsx`)

**Files:**
- Modify: `app/galeria/page.tsx`

**Interfaces:**
- Consumes: Glassmorphism classes from Tailwind (Task 1)
- Produces: Galeria page with glassmorphism sections

- [ ] **Step 1: Open app/galeria/page.tsx**

- [ ] **Step 2: Apply glassmorphism to intro section**

Wrap heading + description in:
```typescript
<div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-8 mb-20">
  {/* content */}
</div>
```

- [ ] **Step 3: Apply glassmorphism to category section wrappers**

For each category section (A Casa, Interior, Exterior), wrap in:
```typescript
<div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 mb-24">
  {/* section content */}
</div>
```

- [ ] **Step 4: Commit**

```bash
git add app/galeria/page.tsx
git commit -m "refactor: add glassmorphism to galeria page sections"
```

---

## Task 7: Apply Glassmorphism to Avaliações Page (`app/avaliacoes/page.tsx`)

**Files:**
- Modify: `app/avaliacoes/page.tsx`

**Interfaces:**
- Consumes: Glassmorphism classes
- Produces: Avaliações page with glassmorphism

- [ ] **Step 1: Open app/avaliacoes/page.tsx**

- [ ] **Step 2: Apply glassmorphism to intro section**

Wrap heading + description:
```typescript
<div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-8 mb-20">
  {/* content */}
</div>
```

- [ ] **Step 3: Apply glassmorphism to review cards**

For each review card:
```typescript
className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 mb-6"
```

- [ ] **Step 4: Commit**

```bash
git add app/avaliacoes/page.tsx
git commit -m "refactor: add glassmorphism to avaliacoes page sections"
```

---

## Task 8: Apply Glassmorphism to Anfitriã Page (`app/anfitria/page.tsx`)

**Files:**
- Modify: `app/anfitria/page.tsx`

**Interfaces:**
- Consumes: Glassmorphism classes
- Produces: Anfitriã page with glassmorphism

- [ ] **Step 1: Open app/anfitria/page.tsx**

- [ ] **Step 2: Apply glassmorphism to content sections**

For each section (intro, host info, bio, etc.), wrap in:
```typescript
<div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-8 mb-20">
  {/* content */}
</div>
```

- [ ] **Step 3: Commit**

```bash
git add app/anfitria/page.tsx
git commit -m "refactor: add glassmorphism to anfitria page sections"
```

---

## Task 9: Apply Glassmorphism to O que Fazer Page (`app/o-que-fazer/page.tsx`)

**Files:**
- Modify: `app/o-que-fazer/page.tsx`

**Interfaces:**
- Consumes: Glassmorphism classes
- Produces: O que fazer page with glassmorphism

- [ ] **Step 1: Open app/o-que-fazer/page.tsx**

- [ ] **Step 2: Apply glassmorphism to section containers**

For each activity/section:
```typescript
<div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 mb-20">
  {/* section content */}
</div>
```

- [ ] **Step 3: Commit**

```bash
git add app/o-que-fazer/page.tsx
git commit -m "refactor: add glassmorphism to o-que-fazer page sections"
```

---

## Task 10: Apply Glassmorphism to FAQ Page (`app/faq/page.tsx`)

**Files:**
- Modify: `app/faq/page.tsx`

**Interfaces:**
- Consumes: Glassmorphism classes
- Produces: FAQ page with glassmorphism

- [ ] **Step 1: Open app/faq/page.tsx**

- [ ] **Step 2: Apply glassmorphism to accordion/content containers**

For FAQ items:
```typescript
<div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 mb-6">
  {/* FAQ item */}
</div>
```

- [ ] **Step 3: Commit**

```bash
git add app/faq/page.tsx
git commit -m "refactor: add glassmorphism to faq page sections"
```

---

## Task 11: Apply Glassmorphism to Inhotim & Hospedagem Pages

**Files:**
- Modify: `app/inhotim-e-atracoes-turisticas/page.tsx`
- Modify: `app/hospedagem-nova-lima-e-macacos/page.tsx`

**Interfaces:**
- Consumes: Glassmorphism classes
- Produces: Both pages with glassmorphism

- [ ] **Step 1: Open app/inhotim-e-atracoes-turisticas/page.tsx**

- [ ] **Step 2: Apply glassmorphism to all section containers**

Same pattern as previous tasks:
```typescript
<div className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6 md:p-8 mb-20">
  {/* content */}
</div>
```

- [ ] **Step 3: Commit for Inhotim page**

```bash
git add app/inhotim-e-atracoes-turisticas/page.tsx
git commit -m "refactor: add glassmorphism to inhotim page sections"
```

- [ ] **Step 4: Open app/hospedagem-nova-lima-e-macacos/page.tsx**

- [ ] **Step 5: Apply glassmorphism to all section containers**

Same pattern as Step 2.

- [ ] **Step 6: Commit for Hospedagem page**

```bash
git add app/hospedagem-nova-lima-e-macacos/page.tsx
git commit -m "refactor: add glassmorphism to hospedagem page sections"
```

---

## Task 12: Apply Glassmorphism to Buttons & Small Components

**Files:**
- Modify: Multiple CTA buttons across all pages

**Interfaces:**
- Consumes: `backdrop-blur-xs`, `bg-off-1/50` classes
- Produces: Subtle glassmorphism on buttons and small elements

- [ ] **Step 1: Locate all CTA buttons**

Search for `className="...border...terracota..."` or similar button patterns.

- [ ] **Step 2: Update CTA button classes**

For buttons:
```typescript
className="backdrop-blur-xs bg-off-1/50 border border-terracota px-5 py-2.5 text-sm text-oliva-escuro rounded transition-all hover:shadow-soft"
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx app/a-casa/page.tsx app/galeria/page.tsx app/o-que-fazer/page.tsx
git commit -m "refactor: add subtle glassmorphism to CTA buttons and small components"
```

---

## Task 13: Local Testing & Visual Verification

**Files:**
- None (testing only)

**Interfaces:**
- Consumes: All changes from Tasks 1-12
- Produces: Verified visual design on local dev server

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

Wait for server to start (~5 seconds).

- [ ] **Step 2: Open http://localhost:3000 in browser**

Verify:
- ✅ Background is off-white (not beige)
- ✅ Sections have subtle glassmorphism effect (blur + transparency visible)
- ✅ Text is readable (contrast maintained)
- ✅ Buttons look good with new effect
- ✅ Header blends well with body

- [ ] **Step 3: Navigate to each page and verify**

Pages to check:
- `/` (Home)
- `/a-casa`
- `/galeria`
- `/avaliacoes`
- `/anfitria`
- `/o-que-fazer`
- `/faq`
- `/inhotim-e-atracoes-turisticas`
- `/hospedagem-nova-lima-e-macacos`

On each page, verify sections have glassmorphism visible.

- [ ] **Step 4: Test on mobile (Chrome DevTools)**

Press F12 → toggle device toolbar (Ctrl+Shift+M)
Verify glassmorphism effect still visible.

- [ ] **Step 5: No commit needed** (testing only)

---

## Task 14: Deploy to Vercel

**Files:**
- None (deployment only)

**Interfaces:**
- Consumes: All commits from Tasks 1-12
- Produces: Live deployment at casadamata45.vercel.app

- [ ] **Step 1: Verify all commits on main branch**

```bash
git log --oneline -15
```

- [ ] **Step 2: Push to GitHub**

```bash
git push origin main
```

- [ ] **Step 3: Verify Vercel deployment**

Visit https://vercel.com/dashboard and check deployment status.

- [ ] **Step 4: Verify live site**

Open https://casadamata45.vercel.app
Verify:
- ✅ Background is off-white
- ✅ Glassmorphism effects visible
- ✅ All pages load correctly
