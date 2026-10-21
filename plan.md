# Diritto Café Website Plan

## Implementation

Build a responsive single-page café website using plain HTML, CSS, and JavaScript only. Use a lightweight Node static server so the project runs on the managed preview port without TypeScript or a frontend framework. Keep content in structured JavaScript data so the menu explorer can filter categories without duplicating markup. Use newly generated project-managed visual assets referenced through stable storage paths and the user-supplied circular Diritto Café badge asset; do not reuse images from dirittocafe.com. Use the badge-inspired high-contrast serif consistently across brand, display headings, menu names, and editorial callouts.

The page will include: a sticky navigation bar, editorial hero with order CTA, “what’s on” feature rail, a tabbed/filterable menu explorer, an about/atmosphere section, visit details with hours and contact, and a footer with social links. Interactions include smooth anchor navigation, menu category filtering, mobile navigation toggle, and a small “order now” action that opens the café phone link.

Project structure:
- `index.html`: semantic page shell and content mount points.
- `styles.css`: responsive visual system, layout, motion, accessibility states.
- `app.js`: menu data, rendering, filtering, navigation behavior.
- Project-managed `/manus-storage/` paths: original generated visual assets.
- `public/manus-routes.json`: route manifest for `/`.
- `server.js`: dependency-free Node static server on `0.0.0.0:3000`.
- `TODO.md`: outcome-based delivery checklist.

## Design

### Style options
- **Contemporary Nairobi café editorial** — 0.06 probability. Bold color blocking, warm cream paper, and a magazine-like layout.
- **Minimal Scandinavian coffee bar** — 0.04 probability. Quiet neutrals and precise spacing with restrained orange.
- **Playful street-food menu board** — 0.03 probability. High contrast, oversized typography, and sticker-like labels.

Chosen style: **Contemporary Nairobi café editorial**.

### Design Movement
A contemporary café editorial system inspired by independent food magazines and Nairobi’s energetic street-facing hospitality spaces.

### Core Principles
- Warm, tactile, and confident rather than glossy or corporate.
- Let menu content breathe with strong hierarchy and generous cream space.
- Use orange as the unmistakable Diritto signal, balanced by ink-black type and white surfaces.
- Create a sense of movement through offset sections, horizontal rails, and small label-like details.

### Color Philosophy
Cream is the grounded paper-like base that makes the site feel welcoming. White creates breathing room for menus and cards. Orange brings appetite, warmth, and recognizable energy. Black provides editorial contrast and keeps the experience legible and premium.

### Layout Paradigm
Use an asymmetric editorial composition: a left-aligned headline block, an offset hero image, horizontal feature rail, and menu sections that alternate between open cream fields and compact white cards. Avoid a generic centered dashboard grid.

### Signature Elements
- Small orange “Diritto / Nairobi” eyebrow labels.
- Black capsule buttons with orange hover states.
- Thin orange rules and oversized typographic numerals for menu sections.

### Interaction Philosophy
Interactions should feel like turning pages on a printed menu: fast, clear, and tactile. Filters update in place, buttons shift slightly on hover, and section navigation scrolls smoothly without heavy effects.

### Animation
Use subtle 180–240ms ease-out transitions for buttons, cards, and menu filtering. Reveal hero elements with a small upward fade on first load. Avoid looping animation and excessive parallax so the site stays calm and food-forward.

### Typography System
Use a high-contrast serif display face for hero and section headlines, paired with a clean geometric sans for navigation, labels, descriptions, and buttons. Keep body copy compact and readable with generous line-height.

### Brand Essence
A lively Nairobi café for easy mornings, long lunches, and late-day catch-ups — known for breadth, warmth, and a menu that keeps the table curious. Personality: warm, expressive, assured.

### Brand Voice
Headlines are short and sensory. CTAs are direct and friendly. Microcopy feels like a server guiding you toward a good choice.

Example lines:
- “Come hungry. Leave brighter.”
- “Find your usual — then order one new thing.”

### Wordmark & Logo
Use a text wordmark treatment with a small orange circular dot as a visual period after “Diritto”, suggesting a stamp on a café ticket. Keep it typographic and simple rather than imitating the existing site logo.

### Signature Brand Color
Burnt orange `#E9652B`, used for calls to action, rules, active states, and small highlights.
