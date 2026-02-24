import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './grundfos-study.css'
import heroImage from '../../assets/portfolio9.png'
import styleTileWaves from '../../assets/styleTileWaves.png'
import storyboardWaves from '../../assets/storyboardWaves.png'

const WavesStudy = () => {
  const navigate = useNavigate()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cs-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.cs-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="cs-page">
      <button className="cs-back" onClick={() => navigate('/')}>
        &larr; Back to Portfolio
      </button>

      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero__content cs-animate">
          <h1 className="cs-hero__title">Waves Web Magazine</h1>
          <p className="cs-hero__subtitle">
            An interactive web documentary about studying abroad in Denmark.
          </p>
          <p className="cs-hero__description">
            A student-created multimedia experience designed to give future international students an authentic glimpse into life at BAAA.
          </p>
          <div className="cs-hero__meta">
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX Design &middot; Visual Storytelling &middot; Frontend Development</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">4 Creators</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">Semester Project</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Format</span>
              <span className="cs-meta-value">Interactive Web Documentary</span>
            </div>
          </div>
        </div>
        <div className="cs-hero__image cs-animate">
          <img src={heroImage} alt="Waves Web Magazine overview" />
        </div>
      </header>

      {/* SECTION 1 — THE CHALLENGE */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Challenge</h2>
          <p className="cs-section__text">
            Future international students often struggle to understand what studying abroad truly feels like.
          </p>
          <p className="cs-section__text">University websites typically show:</p>
          <ul className="cs-list">
            <li>Polished marketing material</li>
            <li>Limited emotional insight</li>
            <li>Little real-life perspective</li>
          </ul>
          <p className="cs-section__text">We wanted to create:</p>
          <ul className="cs-list">
            <li>A more authentic narrative</li>
            <li>A student-driven perspective</li>
            <li>An immersive digital experience</li>
          </ul>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <div className="cs-highlight-card">
            <p className="cs-highlight-text">
              "How might we design an interactive digital experience that authentically portrays the emotional journey of international students at BAAA?"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — UNDERSTANDING THE AUDIENCE */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Understanding the Audience</h2>
          <div className="cs-cards-grid">
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Primary Audience</h3>
              <span className="cs-user-card__label">Students aged 18&ndash;25</span>
              <ul className="cs-user-card__list">
                <li>Considering studying abroad</li>
                <li>Researching universities online</li>
                <li>Looking for authentic perspectives</li>
              </ul>
            </div>
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">User Goals</h3>
              <span className="cs-user-card__label">What they seek</span>
              <ul className="cs-user-card__list">
                <li>Understand what daily life looks like</li>
                <li>Feel emotionally connected</li>
                <li>Evaluate whether BAAA fits their personality</li>
                <li>Explore community, academics, and challenges</li>
              </ul>
            </div>
          </div>
          <div className="cs-insight">
            <span className="cs-insight__label">Key Insight</span>
            <p className="cs-insight__text">
              Students don't just want information — they want reassurance and emotional relatability.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DEFINING THE DIRECTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Design Direction</h2>
          <p className="cs-section__text">
            We structured the experience as a narrative journey inspired by the metaphor of waves.
          </p>
          <p className="cs-section__text">The story arc follows:</p>
          <ul className="cs-list cs-list--numbered">
            <li>Introduction to uncertainty</li>
            <li>Facing struggles</li>
            <li>Overcoming obstacles</li>
            <li>Emotional growth</li>
            <li>Resolution and calm</li>
          </ul>
          <p className="cs-section__text">The goal was to create:</p>
          <div className="cs-keyword-row">
            <span className="cs-keyword">Emotional Engagement</span>
            <span className="cs-keyword">Visual Storytelling</span>
            <span className="cs-keyword">Immersive Experience</span>
            <span className="cs-keyword">Minimal Interface</span>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE EXPERIENCE */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Experience</h2>

          {/* Main Interactive Video */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Main Interactive Video</h3>
              <p className="cs-section__text">
                The core of the experience is a cinematic short film.
              </p>
              <p className="cs-section__text">It portrays:</p>
              <ul className="cs-list">
                <li>Emotional transition</li>
                <li>Struggles of adaptation</li>
                <li>Community building</li>
                <li>Personal growth</li>
              </ul>
              <p className="cs-section__text">The storytelling blends:</p>
              <ul className="cs-list">
                <li>Narration</li>
                <li>Visual metaphors</li>
                <li>Symbolism (waves as emotional journey)</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <iframe
                src="https://www.youtube.com/embed/Ckychw0waB4"
                title="Waves Web Magazine — Main Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', aspectRatio: '16 / 9', borderRadius: '1rem', border: 'none' }}
              />
            </div>
          </div>

          {/* Interviews & Micro-Content */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Interviews &amp; Micro-Content</h3>
              <p className="cs-section__text">
                Short interview segments provide authentic perspectives from students.
              </p>
              <p className="cs-section__text">Inspired by:</p>
              <ul className="cs-list">
                <li>Fast-paced formats (Buzzfeed style)</li>
                <li>Short emotional storytelling</li>
              </ul>
              <p className="cs-section__text">
                This adds credibility and diversity of voices.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder"><span>Interview Section Screenshot</span></div>
            </div>
          </div>

          {/* Comics & Visual Inserts */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Comics &amp; Visual Inserts</h3>
              <p className="cs-section__text">
                We introduced illustrated comic sections to:
              </p>
              <ul className="cs-list">
                <li>Add playfulness</li>
                <li>Break narrative pacing</li>
                <li>Support storytelling visually</li>
              </ul>
              <p className="cs-section__text">
                This combination keeps the experience dynamic.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={storyboardWaves} alt="Onboarding screen" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — VISUAL & INTERACTION DESIGN */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Visual &amp; Interaction Design</h2>
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Interviews &amp; Micro-Content</h3>
              <p className="cs-section__text">
                The design system focused on:
              </p>
              <p className="cs-section__text">Inspired by:</p>
              <ul className="cs-list">
              <li>Trendy, student-oriented aesthetic</li>
            <li>Strong imagery</li>
            <li>Clear navigation</li>
            <li>Smooth animations</li>
            <li>Video integration</li>
            <li>JavaScript-based navigation and transitions</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={styleTileWaves} alt="Onboarding screen" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TECHNICAL IMPLEMENTATION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Implementation</h2>
          <p className="cs-section__text">The website includes:</p>
          <ul className="cs-list">
            <li>Interactive navigation</li>
            <li>JavaScript animations</li>
            <li>Embedded video</li>
            <li>Scroll-based storytelling</li>
            <li>Smooth transitions</li>
          </ul>
          <p className="cs-section__text">The structure supports:</p>
          <ul className="cs-list">
            <li>Emotional pacing</li>
            <li>Seamless movement between sections</li>
            <li>Minimal friction</li>
          </ul>
        </div>
      </section>

      {/* SECTION 7 — MY CONTRIBUTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">My Contribution</h2>
          <ul className="cs-contribution-list">
            <li>Participated in concept development</li>
            <li>Contributed to narrative direction</li>
            <li>Acted as lead in main video</li>
            <li>Assisted in storyboard creation</li>
            <li>Contributed to UI design</li>
            <li>Worked on frontend interactions</li>
            <li>Supported video production and editing</li>
          </ul>
        </div>
      </section>

      {/* SECTION 8 — OUTCOME */}
      <section className="cs-section cs-section--outcome cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Outcome</h2>
          <p className="cs-section__text">Waves demonstrates:</p>
          <ul className="cs-list">
            <li>Interactive storytelling</li>
            <li>Emotional UX design</li>
            <li>Narrative-driven interface</li>
            <li>Multimedia integration</li>
            <li>User-centered digital experience</li>
          </ul>
          <p className="cs-section__text cs-section__text--closing">
            The project transforms a traditional informational website into an immersive journey.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <div className="cs-closing cs-animate">
        <div className="cs-closing__inner">
          <a
            href="https://waveswebmagazine.netlify.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Live Site
          </a>
          <a
            href="https://github.com/GiuliaIvan/wavesWebMagazine"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
          <button className="btn cs-closing__back" onClick={() => navigate('/')}>
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}

export default WavesStudy
