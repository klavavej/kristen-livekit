import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CUSTOMIZE THIS SECTION
//  Replace placeholder values with your real information.
//  For the LiveKit widget, sign up at cloud.livekit.io,
//  create a Sandbox agent, and paste the agent ID below.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const LIVEKIT_AGENT_ID = import.meta.env.VITE_LIVEKIT_KEY;

const APPLICANT = {
  name: 'Your Name',
  email: 'you@example.com',
  linkedIn: 'https://linkedin.com/in/your-profile',
  twitter: 'https://twitter.com/yourhandle',
  pitch:
    "I craft developer-focused narratives that drive adoption, build community, and make complex real-time technology accessible. With a background spanning technical writing, developer relations, and content strategy, I'm ready to tell LiveKit's story to the builders who need it most.",
}

const WRITING_SAMPLES = [
  {
    title: 'Voice AI is Eating the IVR',
    subtitle: 'What Developers Need to Know',
    description:
      'An analysis of how voice AI agents are replacing legacy interactive voice response systems, and what this shift means for developers building customer-facing applications.',
    outlet: 'Dev.to',
    date: 'Jan 2026',
    url: '#',
    tags: ['Voice AI', 'Developer Experience'],
  },
  {
    title: 'Building Real-Time Apps at Scale',
    subtitle: "A Developer's Guide to WebRTC Infrastructure",
    description:
      'A comprehensive technical guide walking developers through the architecture decisions behind scalable WebRTC deployments, from SFU selection to global edge routing.',
    outlet: 'Smashing Magazine',
    date: 'Nov 2025',
    url: '#',
    tags: ['WebRTC', 'Infrastructure'],
  },
  {
    title: 'The Open-Source Playbook',
    subtitle: 'How Dev Tools Companies Win Hearts and Commits',
    description:
      'A strategic deep-dive into how open-source-first companies build developer loyalty, examining community engagement models that convert users into contributors.',
    outlet: 'First Round Review',
    date: 'Sep 2025',
    url: '#',
    tags: ['Open Source', 'Community'],
  },
  {
    title: 'From Text to Talk',
    subtitle: 'Why Voice-First Interfaces Are the Future of AI',
    description:
      'Exploring the convergence of large language models and real-time audio streaming, and why the next generation of AI applications will be heard, not read.',
    outlet: 'Medium',
    date: 'Jul 2025',
    url: '#',
    tags: ['AI', 'Voice Interfaces'],
  },
]

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const Route = createFileRoute('/')({
  component: ApplicationPage,
})

function ApplicationPage() {
  useEffect(() => {
    if (!LIVEKIT_AGENT_ID) return
    const script = document.createElement('script')
    script.src = 'https://cloud.livekit.io/embed-popup.js'
    script.setAttribute('data-lk-agent', LIVEKIT_AGENT_ID)
    document.body.appendChild(script)
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="app">
      <div className="bg-mesh" aria-hidden="true" />

      {/* ── Hero ─────────────────────────────────────── */}
      <header className="hero">
        <div className="hero-inner">
          <p className="hero-label fade-up">Application for</p>
          <h1 className="hero-name fade-up delay-1">{APPLICANT.name}</h1>
          <h2 className="hero-role fade-up delay-2">
            Content Marketing Manager{' '}
            <span className="accent">@ LiveKit</span>
          </h2>
          <p className="hero-pitch fade-up delay-3">{APPLICANT.pitch}</p>
          <div className="hero-links fade-up delay-4">
            <a href={`mailto:${APPLICANT.email}`} className="hero-link">
              {APPLICANT.email}
            </a>
            <span className="hero-sep">/</span>
            <a
              href={APPLICANT.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              LinkedIn
            </a>
            <span className="hero-sep">/</span>
            <a
              href={APPLICANT.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              Twitter
            </a>
          </div>
        </div>
      </header>

      {/* ── Writing Samples ──────────────────────────── */}
      <section className="samples">
        <div className="section-inner">
          <h2 className="section-heading">
            <span className="section-label">Selected</span>
            Writing Samples
          </h2>

          <div className="samples-list">
            {WRITING_SAMPLES.map((sample, i) => (
              <a
                key={i}
                href={sample.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sample-card"
              >
                <div className="sample-num">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="sample-body">
                  <div className="sample-meta">
                    <span className="sample-outlet">{sample.outlet}</span>
                    <span className="sample-date">{sample.date}</span>
                  </div>
                  <h3 className="sample-title">
                    {sample.title}
                    <span className="sample-subtitle">
                      {' '}
                      &mdash; {sample.subtitle}
                    </span>
                  </h3>
                  <p className="sample-desc">{sample.description}</p>
                  <div className="sample-tags">
                    {sample.tags.map((tag) => (
                      <span key={tag} className="sample-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="sample-arrow" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── LiveKit Voice Widget ─────────────────────── */}
      <section className="voice-section">
        <div className="section-inner">
          <h2 className="section-heading">
            <span className="section-label">Interactive</span>
            LiveKit Voice Agent
          </h2>

          <div className="voice-body">
            {LIVEKIT_AGENT_ID ? (
              <p className="voice-text">
                Click the voice widget in the corner to experience LiveKit's
                real-time voice technology firsthand. This agent is powered by
                LiveKit's infrastructure &mdash; the same platform I'd be
                writing about every day.
              </p>
            ) : (
              <div className="voice-setup">
                <p className="voice-text">
                  This section features a live LiveKit voice agent widget. To
                  activate it, add your LiveKit Cloud agent ID to the
                  configuration at the top of{' '}
                  <code>src/routes/index.tsx</code>.
                </p>
                <div className="voice-steps">
                  <div className="voice-step">
                    <span className="voice-step-n">1</span>
                    <span>
                      Create a free account at{' '}
                      <a
                        href="https://cloud.livekit.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        cloud.livekit.io
                      </a>
                    </span>
                  </div>
                  <div className="voice-step">
                    <span className="voice-step-n">2</span>
                    <span>Set up a Sandbox voice agent</span>
                  </div>
                  <div className="voice-step">
                    <span className="voice-step-n">3</span>
                    <span>
                      Copy your agent ID (e.g.{' '}
                      <code>CA_abc123</code>) and paste it into{' '}
                      <code>LIVEKIT_AGENT_ID</code>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────── */}
      <footer className="site-footer">
        <div className="section-inner footer-inner">
          <p className="footer-text">
            Built to demonstrate product fluency with LiveKit's real-time
            platform.
          </p>
          <p className="footer-text">
            Powered by{' '}
            <a
              href="https://livekit.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              LiveKit
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

