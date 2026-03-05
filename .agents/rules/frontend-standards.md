---
trigger: always_on
---

# Frontend Architecture & Design Standards

This document serves as the true north for the **Backup Teams Frontend**. It outlines our bespoke "Clean Cloud" design system and the strict engineering principles required to maintain a premium, enterprise-grade application.

## 1. The Design System: "Clean Cloud"

Our aesthetic is inspired by modern SaaS and editorial web design—an airy, minimalist vibe that relies on white space, striking contrast, and fluid liquid-ether backgrounds.

### 1.1 Core Tokens
Always use the semantic CSS variables mapped to Tailwind, **never** hardcode hex values in your templates.
*   **Canvas (`bg-background`)**: `var(--background)` - Pure white `#ffffff` or transparent to reveal the canvas background. Use only for the lowest visual layer.
*   **Surfaces (`bg-card`)**: `var(--card)` - A crisp, very faint slate `#f8fafc`. Use for panels, cards, and distinct UI boundaries.
*   **Primary Accent (`text-primary`, `bg-primary`)**: `var(--primary)` - A trustworthy, vibrant blue `#2563eb`. Use for primary actions (CTAs).
*   **Secondary/Ethereal (`text-secondary`, `bg-accent`)**: `var(--secondary)` (Emerald Green `#10b981`) and `var(--accent)` (Sky Blue `#0ea5e9`).
*   **Typography (`text-foreground`, `text-muted-foreground`)**: `var(--foreground)` for deep, high-contrast Slate 950 `#020617`; `var(--muted-foreground)` for secondary Slate 500 body text.

### 1.2 Signature Visual Elements (The "Aurora/Fluid" Standard)
When building new sections, adhere to the visual language:
*   **Typography**: We use a two-font editorial style. **Plus Jakarta Sans** for structure, headers, and UI, and **Instrument Serif** for elegant, italicized accents and quotes.
*   **The Liquid Ether Foundation**: The bottom-most layer of the application is a responsive, highly optimized Three.js canvas rendering a fluid, ether-like simulation of blues and greens.
*   **Clean Geometry & Glass**: Use white, frosted glass (`bg-white/70 backdrop-blur-md border border-slate-200`) to let the fluid background subtly peek through panels.
*   **Shadows**: Use very soft, expansive drop-shadows rather than harsh borders if depth is needed (`shadow-xl shadow-slate-200/50`).

---

## 2. Senior Engineering Mandatory Rules

As a Senior Lead Engineer, code quality and maintainability are equally as important as aesthetics. All pull requests must adhere to the following rules:

### 2.1 Component Architecture (Isolate and Conquer)
*   **Rule:** The `page.tsx` file is a *coordinator*, not a junk drawer.
*   **Practice:** Never write inline monolithic components spanning 500+ lines in a page route. Break complex UI into domain-specific components inside `src/components/ui/` or `src/components/features/`.

### 2.2 Next.js Paradigms (Server by Default)
*   **Rule:** Maximize Server Components; minimize Client Components.
*   **Practice:** 
    *   By default, all components are Server Components. This ships zero JavaScript to the client, improving load times.
    *   Only add the `"use client"` directive at the lowest possible leaf node in the DOM tree that requires interactivity (e.g., `onClick`, `useState`, or DOM hooks). Do not wrap an entire layout in `"use client"` just to handle one button click.

### 2.3 Styling Strictness (Tailwind Hygiene)
*   **Rule:** Do not abuse arbitrary values or duplicate utility strings.
*   **Practice:** 
    *   If you find yourself writing `bg-[#1f1a18]` using arbitrary brackets, you are violating the design system. Add the token to `globals.css` instead.
    *   If a complex list of Tailwind classes is reused exactly in 3+ places (e.g., a specific card style), extract it into a small reusable React Component rather than abstracting it into CSS with `@apply`.

### 2.4 Semantic HTML & Accessibility (A11y)
*   **Rule:** A beautiful site is a failure if it cannot be read by a screen reader.
*   **Practice:**
    *   Do not use `<div>` for everything. Use `<section>`, `<article>`, `<header>`, `<main>`, and `<nav>`.
    *   Maintain a strict Headings Hierarchy (`<h1>` -> `<h2>` -> `<h3>`). Do not jump from `<h1>` to `<h3>` just for sizing; use Tailwind text classes for visual sizing (`text-xl`) while preserving the semantic HTML tag.
    *   All interactive elements (Buttons, Links) must have visible focus states (`focus:ring-2 focus:ring-accent focus:outline-none`).

### 2.5 The "Why" Commenting Rule
*   **Rule:** Code tells you *what*; comments tell you *why*.
*   **Practice:** Do not write comments like `// Maps over users`. Write comments explaining the business or architectural logic: `// We map here instead of on the server because the user list updates optimistically via WebSocket`.
