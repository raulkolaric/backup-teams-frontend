---
trigger: always_on
---

# Frontend Architecture & Design Standards

This document serves as the true north for the **Backup Teams Frontend**. It outlines our bespoke "Espresso Dark" design system and the strict engineering principles required to maintain a premium, enterprise-grade application.

## 1. The Design System: "Espresso Dark"

Our aesthetic is inspired by premium developer tools—a "warm terminal" vibe that feels professional, reduces eye strain, and commands attention.

### 1.1 Core Tokens
Always use the semantic CSS variables mapped to Tailwind, **never** hardcode hex values in your templates.
*   **Canvas (`bg-background`)**: `var(--background)` - A deep, rich espresso `#1f1a18`. Use only for the lowest visual layer.
*   **Surfaces (`bg-card`)**: `var(--card)` - A slightly elevated dark coffee `#27201d`. Use for panels, cards, and distinct UI boundaries.
*   **Primary Accent (`text-accent`, `bg-accent`)**: `var(--accent)` - A glowing terracotta/burnt orange `#d46a43`. Use sparingly for primary actions (CTAs) and active UI states.
*   **Typography (`text-foreground`, `text-muted-foreground`)**: `var(--foreground)` for high-contrast headers (warm parchment `#e5d9c5`); `var(--muted-foreground)` for secondary body text.

### 1.2 Signature Visual Elements (The "Hero" Standard)
When building new sections, adhere to the visual language established in `Hero.tsx`:
*   **Glassmorphism (`backdrop-blur-md bg-card/60`)**: Use blurred, semi-transparent backgrounds over gradients for floating elements like navigation bars or status pills.
*   **Ambient Glows (Radial Gradients)**: Use heavily blurred accent div elements (`blur-[120px] opacity-10 bg-accent`) behind main typography focal points to create depth.
*   **Borders as Depth**: Always use `border-border` to define edges. Our layouts rely on subtle 1px strokes rather than heavy drop-shadows to distinguish overlapping cards.
*   **Terminal Aesthetics**: For technical or data-heavy displays, utilize the mock-terminal layout (a header with 3 traffic-light dots and a monospace codebase body) to emphasize out developer/admin-centric utility.

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
