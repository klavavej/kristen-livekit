import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'


const LIVEKIT_AGENT_ID = "CA_bSwvvRBc7Udo";

const APPLICANT = {
  name: 'Kristen Lavavej',
  linkedIn: 'https://www.linkedin.com/in/kristen-lavavej-7a403117/',
  pitch:
    "Multi-faceted technical communicator transitioning from documentation to marketing.",
}

const WRITING_SAMPLES = [
  {
    title: 'Responses overview',
    subtitle: 'Great Expectations',
    description:
      'Conceptual content Kristen wrote for a feature release to help users understand why and when to use 3 different related features.',
    url: 'https://docs.greatexpectations.io/docs/cloud/alerts/responses_overview',
  },
  {
    title: 'Production launch checklist',
    subtitle: "Netlify",
    description:
      'Actionable best practices Kristen wrote to boost feature discoverability and adoption',
    url: 'https://docs.netlify.com/resources/checklists/production-checklist/',
  },
  {
    title: 'GX in your data pipeline',
    subtitle: 'Great Expectations',
    description:
      'Diagrams created by Kristen on 3 child pages to support content written by Product and Developer Relations',
    url: 'https://docs.greatexpectations.io/docs/reference/learn/gx_in_your_data_pipeline/gx_in_your_data_pipeline_lp',
  },
]

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const Route = createFileRoute('/')({
  component: ApplicationPage,
})

function ApplicationPage() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cloud.livekit.io/embed-popup.js';
    script.async = true;

    script.setAttribute('data-lk-agent', 'CA_bSwvvRBc7Udo');
    script.setAttribute('data-lk-color', '#002CF2');

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

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
            <a
              href={APPLICANT.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              LinkedIn
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
                  <h3 className="sample-title">
                    {sample.title}
                    <span className="sample-subtitle">
                      {' '}
                      &mdash; {sample.subtitle}
                    </span>
                  </h3>
                  <p className="sample-desc">{sample.description}</p>
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


    </div>
  )
}

