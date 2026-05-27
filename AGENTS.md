# AGENTS.md

## Project Overview

Single-page personal application site for a Content Marketing Manager position at LiveKit. Displays writing sample links and embeds a LiveKit voice chat widget.

## Architecture

- **Framework**: TanStack Start (React) with file-based routing on Vite
- **Styling**: Tailwind CSS v4 with custom CSS properties in `src/styles.css`
- **Hosting**: Netlify with the `@netlify/vite-plugin-tanstack-start` adapter

## Directory Structure

```
src/
  routes/
    __root.tsx     # Root layout — HTML shell, font loading, meta tags
    index.tsx      # The entire application page (single-page site)
  styles.css       # Global styles, CSS custom properties, all component styles
  router.tsx       # TanStack router instance (auto-generated route tree)
public/            # Static assets
```

## Key Decisions

- **All content is configured via constants at the top of `index.tsx`** — the `APPLICANT`, `WRITING_SAMPLES`, and `LIVEKIT_AGENT_ID` objects are the single source of truth for all page content. This makes it easy to customize without touching JSX.
- **LiveKit widget is loaded dynamically via `useEffect`** — the embed script is only injected when a valid agent ID is provided. This prevents errors when the ID hasn't been configured yet.
- **Dark theme with teal accent** — designed to align with LiveKit's brand aesthetic.
- **No product routes or data** — the original marketing template's product pages were removed; this is a single-page site.
- **Fonts loaded via Google Fonts** — Syne (display) and DM Sans (body) are loaded in the root layout head.

## Coding Conventions

- Functional React components only
- CSS custom properties for theming tokens (defined in `:root` in `styles.css`)
- BEM-style class names (no CSS modules)
- No external component libraries — all UI is custom

## Development Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
```
