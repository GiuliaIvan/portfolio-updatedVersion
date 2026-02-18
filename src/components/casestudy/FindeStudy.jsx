import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './grundfos-study.css'
import heroImage from '../../assets/portfolio14.png'

const FindeStudy = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

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
          <h1 className="cs-hero__title">Finde</h1>
          <p className="cs-hero__subtitle">
            Improving social interaction and community life inside student dorms.
          </p>
          <p className="cs-hero__description">
            A mobile-first app designed to help dorm residents connect, share, and discover what's happening in their building.
          </p>
          <div className="cs-hero__meta">
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX Research &middot; UI Design &middot; Prototyping</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">5 Designers</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">3 Weeks</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Platform</span>
              <span className="cs-meta-value">Mobile App Concept</span>
            </div>
          </div>
        </div>
        <div className="cs-hero__image cs-animate">
          <img src={heroImage} alt="Finde dorm community app overview" />
        </div>
      </header>

      {/* SECTION 1 - THE CHALLENGE */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Challenge</h2>
          <p className="cs-section__text">
            Living in a dorm can feel isolating. Despite sharing the same building, many residents barely know each other.
          </p>
          <p className="cs-section__text">At Grundfos Kollegiet in Aarhus:</p>
          <ul className="cs-list">
            <li>Students lacked awareness of events and activities</li>
            <li>Social interaction was limited</li>
            <li>Communication relied mostly on Facebook</li>
            <li>There was no central, structured overview</li>
            <li>Many students felt disconnected</li>
          </ul>
          <p className="cs-section__text">
            Dorm life had potential for community — but no digital structure supported it.
          </p>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <div className="cs-highlight-card">
            <p className="cs-highlight-text">
              "How might we design a digital solution that helps dorm residents connect more easily, discover events, and feel part of a stronger community?"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - UNDERSTANDING THE USERS */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Understanding the Users</h2>
          <p className="cs-section__text">
            Through interviews and observation, we identified two key user types:
          </p>
          <div className="cs-cards-grid">
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Community-Oriented Residents</h3>
              <span className="cs-user-card__label">Social Users</span>
              <ul className="cs-user-card__list">
                <li>Want to meet neighbors</li>
                <li>Interested in events and shared activities</li>
                <li>Value inclusivity and belonging</li>
              </ul>
            </div>
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Practical Residents</h3>
              <span className="cs-user-card__label">Task-Oriented Users</span>
              <ul className="cs-user-card__list">
                <li>Want quick access to information</li>
                <li>Need booking overview (laundry, common spaces)</li>
                <li>Prefer efficient and simple interaction</li>
              </ul>
            </div>
          </div>
          <div className="cs-insight">
            <span className="cs-insight__label">Key Insight</span>
            <p className="cs-insight__text">
              Students don't actively seek connection — they need subtle, low-effort opportunities to interact.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - DEFINING THE DIRECTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Defining the Direction</h2>
          <p className="cs-section__text">We focused on three core goals:</p>
          <ul className="cs-list cs-list--numbered">
            <li>Make dorm activities visible</li>
            <li>Encourage light, natural interaction</li>
            <li>Simplify everyday shared tasks</li>
          </ul>
          <p className="cs-section__text">The app needed to feel:</p>
          <div className="cs-keyword-row">
            <span className="cs-keyword">Friendly</span>
            <span className="cs-keyword">Playful</span>
            <span className="cs-keyword">Easy</span>
            <span className="cs-keyword">Non-intrusive</span>
            <span className="cs-keyword">Community-driven</span>
          </div>
        </div>
      </section>

      {/* SECTION 4 - THE SOLUTION */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Solution</h2>

          {/* Social Feed & Events */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Social Feed &amp; Events</h3>
              <p className="cs-section__text">The app provides a clear overview of:</p>
              <ul className="cs-list">
                <li>Dorm events</li>
                <li>Shared activities</li>
                <li>Announcements</li>
              </ul>
              <p className="cs-section__text">
                Residents can quickly browse what's happening without needing Facebook.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Events Feed Screenshot</span>
              </div>
            </div>
          </div>

          {/* Light Social Interaction */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Light Social Interaction</h3>
              <p className="cs-section__text">Instead of forcing networking, Finde encourages:</p>
              <ul className="cs-list">
                <li>Small interactions</li>
                <li>Shared reactions</li>
                <li>Easy participation</li>
              </ul>
              <p className="cs-section__text cs-section__text--result">
                This lowers the social barrier for introverted users.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Interaction Feature Screenshot</span>
              </div>
            </div>
          </div>

          {/* Practical Features */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Practical Features</h3>
              <p className="cs-section__text">The app integrates useful dorm features like:</p>
              <ul className="cs-list">
                <li>Shared space booking</li>
                <li>Laundry scheduling</li>
                <li>Community announcements</li>
              </ul>
              <p className="cs-section__text cs-section__text--result">
                This increases daily relevance.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Booking / Utility Screenshot</span>
              </div>
            </div>
          </div>

          {/* Visual Identity */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Visual Identity</h3>
              <p className="cs-section__text">The visual direction is:</p>
              <ul className="cs-list">
                <li>Soft, friendly color palette</li>
                <li>Rounded UI components</li>
                <li>Simple, readable typography</li>
                <li>Playful but minimal interface</li>
              </ul>
              <p className="cs-section__text cs-section__text--result">
                The goal was to create warmth without overwhelming users.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>UI Style Screen</span>
              </div>
              <div className="cs-image-placeholder">
                <span>Design System Snapshot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - TESTING & ITERATION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Testing & Iteration</h2>
          <div className="cs-section__text-container-grid cs-solution-block">
            <div className="cs-section__text-container">
              <p className="cs-section__text">Through usability testing, we discovered:</p>
              <ul className="cs-list">
                <li>Users needed clearer navigation hierarchy</li>
                <li>Booking features required better placement</li>
                <li>Social features needed to feel optional, not forced</li>
                <li>Too much white space created friction</li>
              </ul>
            </div>
            <div className="cs-section__text-container">
              <p className="cs-section__text">Adjustments included:</p>
              <ul className="cs-list">
                <li>Reorganizing feature layout</li>
                <li>Simplifying navigation</li>
                <li>Clarifying microcopy</li>
                <li>Improving flow between screens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - MY CONTRIBUTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">My Contribution</h2>
          <ul className="cs-contribution-list">
            <li>Conducted user interviews</li>
            <li>Contributed to target audience definition</li>
            <li>Helped build personas</li>
            <li>Developed value proposition analysis</li>
            <li>Designed interface components</li>
            <li>Participated in lo-fi and hi-fi prototyping</li>
            <li>Contributed to testing and iteration</li>
          </ul>
        </div>
      </section>

      {/* SECTION 7 - OUTCOME */}
      <section className="cs-section cs-section--outcome cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Outcome</h2>
          <p className="cs-section__text">Finde demonstrates:</p>
          <ul className="cs-list">
            <li>A user-centered dorm solution</li>
            <li>Clear community-building concept</li>
            <li>Structured event visibility</li>
            <li>Practical daily-use integration</li>
            <li>Strong mobile-first design thinking</li>
          </ul>
          <p className="cs-section__text cs-section__text--closing">
            The project transforms dorm living from isolated rooms into a connected ecosystem.
          </p>
        </div>
      </section>

      {/* FOOTER / CLOSING */}
      <div className="cs-closing cs-animate">
        <div className="cs-closing__inner">
          <a
            href="https://xd.adobe.com/view/f0affcad-3cf4-4f1e-98d4-3b33160dcc0d-a5fc/screen/47c54d60-8d30-4d1b-910d-a934a5391825"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Prototype
          </a>
          <button className="btn cs-closing__back" onClick={() => { navigate('/'); window.scrollTo(0, 0) }}>
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}

export default FindeStudy
