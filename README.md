# LiveKit Content Marketing Manager — Application Site

A single-page application site designed for applying to the Content Marketing Manager role at LiveKit. Features links to writing samples and an embeddable LiveKit voice chat widget to demonstrate product fluency.

## Key Technologies

- **TanStack Start** (React) — full-stack React framework with file-based routing
- **Tailwind CSS v4** — utility-first CSS framework
- **LiveKit Cloud Embed Widget** — real-time voice agent via script tag
- **Vite** — build tooling
- **Netlify** — hosting and deployment

## Customizing

Edit the configuration at the top of `src/routes/index.tsx`:

1. **APPLICANT** — Replace name, email, LinkedIn, Twitter, and pitch text with your real information.
2. **WRITING_SAMPLES** — Replace the placeholder entries with your actual writing sample titles, descriptions, outlets, and URLs.
3. **LIVEKIT_AGENT_ID** — Sign up at [cloud.livekit.io](https://cloud.livekit.io), create a Sandbox voice agent, and paste the agent ID (e.g. `CA_abc123`) to activate the floating voice widget.

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:3000`. Alternatively, use the Netlify CLI for full platform feature emulation:

```bash
netlify dev
```
