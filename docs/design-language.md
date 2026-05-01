# SACO Design Language

## Positioning

SACO should feel like a student-built contest operations system: technical, sharp, energetic, and credible. The site should not look like a generic nonprofit landing page. It should feel closer to a live programming arena, a terminal dashboard, and a regional student community hub.

Core idea: **competition infrastructure for young programmers**.

## Principles

- **Signal over decoration:** every glow, grid, line, and label should reinforce coding, contests, systems, or live event operations.
- **Hard geometry:** use square or lightly rounded rectangles, precise dividers, command-bar labels, and gridded layouts. Avoid soft SaaS cards and bubbly shapes.
- **Dark by default:** the base surface is near-black. Light areas should be rare and purposeful, usually for sponsor logos or content that needs contrast.
- **Two-accent discipline:** cyan is the primary signal color. green is the success/community/action color. red is reserved for alerts, urgency, or high-stakes emphasis.
- **Student-run, not childish:** copy can be energetic, but visual execution should be disciplined and technical.
- **Readable first:** glows and atmospheric backgrounds must never reduce text contrast.

## Voice

The SACO voice is direct, technical, and event-oriented.

- Use short phrases: "Contest time", "Register now", "Upcoming events".
- Prefer systems language when it fits: "initialize", "schedule", "execution", "terminal", "signal".
- Avoid generic startup phrases: "unlock your potential", "empower the future", "learn more today".
- Avoid overdoing hacker cliches. One strong terminal metaphor is better than many weak ones.

## Color

### Core Palette

| Role | Token | Hex | Usage |
| --- | --- | --- | --- |
| Background | `background` | `#0a0b0e` | Body, default page base |
| Surface | `surface` | `#0a0b0e` | Open dark sections |
| Surface low | `surface-container-low` | `#0d0f14` | Subtle section bands |
| Surface card | `surface-container` | `#14161c` | Panels, cards, rows |
| Surface raised | `surface-container-high` | `#1c1f26` | Hover and emphasized panels |
| Text | `on-surface` | `#f1f5f9` | Primary text |
| Muted text | `on-surface-variant` | `#64748b` | Body support, metadata |
| Border | `outline` | `#1e293b` | Default hard divider |
| Border bright | `outline-variant` | `#334155` | Strong dividers |
| Primary signal | `primary` | `#00f0ff` | Links, active states, cyan glow |
| Secondary signal | `secondary` | `#00ffa3` | Positive action, community, success |
| Tertiary alert | `tertiary` | `#ff3366` | Scarce warning or urgency |

### Color Rules

- Do not introduce purple as a major brand color.
- Do not use large pure-white backgrounds except inside sponsor/logo containers.
- Cyan should mean focus, active route, technical signal, or contest data.
- Green should mean action, readiness, completion, community, or call-to-action.
- Red should be used sparingly. It loses power if it becomes decorative.

## Typography

### Families

- **Headline:** `JetBrains Mono` through `font-headline`.
- **Body:** `Space Grotesk` through `font-body`.
- **Label:** `JetBrains Mono` through `font-label`.
- **SACC display:** SACC route can use Tailwind arbitrary font utilities against `--font-sacc-display` and `--font-sacc-mono` for local event styling.

### Type Behavior

- Headlines are uppercase, tight tracking, heavy weight.
- Labels are small, uppercase, widely tracked, and mono.
- Body copy is Space Grotesk, light to regular, relaxed line-height.
- Buttons and nav use mono or headline styling, uppercase, and explicit letter spacing.
- Avoid default browser-size controls. Every interactive element should have deliberate type sizing.

### Suggested Scale

| Role | Desktop | Mobile | Notes |
| --- | --- | --- | --- |
| Hero H1 | `7rem` to `8rem` | `2.25rem` to `3rem` | Use tight line height |
| Page H1 | `3.75rem` | `2.25rem` | Uppercase |
| Section H2 | `2.25rem` to `3.75rem` | `1.875rem` | Uppercase |
| Card H3 | `1.5rem` to `2rem` | `1.25rem` | Uppercase |
| Body | `1rem` to `1.25rem` | `1rem` | Relaxed line height |
| Label | `10px` to `12px` | `10px` | High tracking |

## Layout

### Containers

- Default page width: `max-w-7xl` for broad marketing sections.
- Content pages: `max-w-6xl` for readable sections.
- Event pages: `max-w-[1200px]` where tables and terminal modules need extra width.
- Horizontal padding: `px-4 sm:px-8`.
- Major section padding: `py-16 sm:py-24 md:py-32`.

### Rhythm

- Open with one strong focal point and generous negative space.
- Separate sections with hard top/bottom borders, not soft shadows.
- Use line rules as structural punctuation: short cyan bars under headings, thin borders between rows.
- Vary section density. Do not repeat identical centered headline plus cards for every section.

## Components

### Navigation

- Fixed top bar with translucent black background and cyan border.
- Desktop nav uses small uppercase mono links.
- Active nav gets cyan text plus a bottom rule.
- Mobile drawer should feel like a command panel: hard edge, dark surface, strong separators.

### Buttons

- Primary: filled cyan, dark text, bold uppercase.
- Secondary: filled green, dark text, bold uppercase.
- Ghost: transparent with cyan or green border.
- Buttons should be rectangular. Radius should be none or very small.
- Touch targets should be at least `44px` high.

### Panels and Cards

- Use dark surfaces, one-pixel borders, and hover border color shifts.
- Prefer gridded cards, rows, tables, and terminal blocks over soft rounded cards.
- Image cards can use grayscale, low opacity, and brighten on hover.
- Sponsor logo cards may use light internal logo wells while the outer card remains dark.

### Tables and Schedules

- Use real semantic tables for schedule-like content.
- Header rows may use low-opacity cyan fill.
- Rows should have strong horizontal separators.
- Time columns can be centered, event columns can be centered or left aligned based on density.

### Icons

- Use simple line icons with consistent stroke weight.
- Icons should clarify structure, not decorate every block.
- Cyan icons indicate technical signal. Green icons indicate community/action.

## Atmosphere

Approved motifs:

- Fine grid backgrounds.
- Large blurred cyan/green signal orbs.
- Sparse spark points.
- Terminal CRT scanlines.
- Thin divider rules.
- Low-opacity radial gradients.

Avoid:

- Dense particle fields behind body copy.
- Repeating glow on every component.
- Generic glassmorphism.
- Rounded gradient blobs that make the site feel like a SaaS template.

## Motion

Motion should be short and mechanical.

- Standard duration: `180ms` to `300ms`.
- Larger atmospheric transitions: `500ms` to `700ms`.
- Easing: cubic out, not bouncy.
- Use hover brightening, line expansion, panel border color, drawer slide, and accordion reveal.
- Respect `prefers-reduced-motion`.

## Accessibility

- Body text must remain readable against all atmospheric layers.
- Use semantic headings in page order.
- Use real links for navigation and real buttons for toggles.
- Preserve visible focus states on all interactive components.
- Do not encode meaning through color alone.
- Tables need captions or appropriate contextual headings.

## Implementation Rules

- Prefer existing Tailwind theme tokens in `src/app/globals.css` before adding one-off hex values.
- Do not add custom component or utility classes to `globals.css`; compose with native Tailwind utilities and arbitrary values in markup.
- Keep route-specific styling local only when the route intentionally diverges, as SACC does with event fonts.
- New pages should reuse the same Tailwind utility recipes for section headers, panels, actions, and focus states.
- Do not add a new visual metaphor unless it supports the contest/community positioning.

## Quick Recipes

### Standard Section Header

Use:

- Small mono kicker in green or cyan.
- Uppercase heavy headline.
- Short cyan rule.
- Optional muted body copy under the rule.

### Contest/Event Block

Use:

- Dark panel with cyan border on hover.
- Mono date or status label.
- Large uppercase event title.
- Muted body copy.
- Cyan link or green action.

### Sponsor Block

Use:

- Dark outer card.
- Controlled logo well.
- Tier color should be the only non-core color.
- Keep sponsor logos visually calm and centered.
