import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './grundfos-study.css'
import heroImage from '../../assets/linder.png'

const LinderStudy = () => {
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
          <h1 className="cs-hero__title">Linder</h1>
          <p className="cs-hero__subtitle">
            Connecting founders and collaborators through a swipe-based professional matching experience.
          </p>
          <p className="cs-hero__description">
            A mobile-first MVP inspired by LinkedIn and Tinder, designed to help idea owners and idea hunters find meaningful startup collaborations.
          </p>
          <div className="cs-hero__meta">
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX Design &middot; Frontend Development</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">6 weeks</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">2 Developers</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Stack</span>
              <span className="cs-meta-value">React &middot; TailwindCSS</span>
            </div>
          </div>
        </div>
        <div className="cs-hero__image cs-animate">
          <img src={heroImage} alt="Linder professional matching platform overview" />
        </div>
      </header>

      {/* SECTION 1 - THE CHALLENGE */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Challenge</h2>
          <p className="cs-section__text">
            Early-stage founders often struggle to find the right collaborators, while many skilled professionals want to join startups but lack access to relevant opportunities.
          </p>
          <p className="cs-section__text">
            Traditional networking platforms are either too formal or too casual. There is no intuitive way to quickly discover, evaluate, and connect with potential startup partners.
          </p>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <div className="cs-highlight-card">
            <p className="cs-highlight-text">
              "How might we create a swipe-based professional networking experience that helps idea owners and idea hunters quickly discover and match based on skills, interests, and goals?"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - UNDERSTANDING THE USERS */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Understanding the Users</h2>
          <div className="cs-cards-grid">
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Idea Owners</h3>
              <span className="cs-user-card__label">Founders</span>
              <ul className="cs-user-card__list">
                <li>Have a startup concept</li>
                <li>Need skilled collaborators</li>
                <li>Want to showcase project vision</li>
                <li>Value clarity in profiles</li>
              </ul>
            </div>
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Idea Hunters</h3>
              <span className="cs-user-card__label">Collaborators</span>
              <ul className="cs-user-card__list">
                <li>Searching for projects to join</li>
                <li>Want to evaluate ideas quickly</li>
                <li>Need clear display of skills and experience</li>
                <li>Value fast interaction and messaging</li>
              </ul>
            </div>
          </div>
          <div className="cs-insight">
            <span className="cs-insight__label">Key Insight</span>
            <p className="cs-insight__text">
              Users need a fast and intuitive way to evaluate profiles based on skills, experience, and project goals — not endless scrolling.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - DEFINING THE DIRECTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Defining the Direction</h2>
          <p className="cs-section__text">
            We focused on building a mobile-first MVP with three priorities:
          </p>
          <ul className="cs-list cs-list--numbered">
            <li>Swipe-based interaction inspired by Tinder</li>
            <li>Professional profile depth inspired by LinkedIn</li>
            <li>Clear onboarding flow tailored to user type</li>
          </ul>
          <p className="cs-section__text cs-section__text--closing">
            The goal was to create a platform that feels modern, intuitive, and purpose-driven.
          </p>
        </div>
      </section>

      {/* SECTION 4 - THE SOLUTION */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Solution</h2>

          {/* Onboarding Experience */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Onboarding Experience</h3>
              <p className="cs-section__text">
                We designed a multi-step onboarding flow that adapts based on user type (Idea Owner or Idea Hunter).
              </p>
              <p className="cs-section__text">Users provide:</p>
              <ul className="cs-list">
                <li>Location</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Interests</li>
                <li>Project details (if Idea Owner)</li>
              </ul>
              <p className="cs-section__text">
                The stepper visually guides users through the process, making the experience structured and clear.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Onboarding Screens</span>
              </div>
              <div className="cs-image-placeholder">
                <span>Stepper UI</span>
              </div>
            </div>
          </div>

          {/* Swipe-Based Feed */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Swipe-Based Feed</h3>
              <p className="cs-section__text">
                The feed allows users to swipe left or right on professional profiles.
              </p>
              <p className="cs-section__text">Each card displays:</p>
              <ul className="cs-list">
                <li>Name and location</li>
                <li>Experience and skills</li>
                <li>Project description (if applicable)</li>
              </ul>
              <p className="cs-section__text">
                Users can flip cards to view more detailed information before deciding to match.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Swipe Card</span>
              </div>
              <div className="cs-image-placeholder">
                <span>Flip Card</span>
              </div>
            </div>
          </div>

          {/* Profile & Matching Logic */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Profile &amp; Matching Logic</h3>
              <p className="cs-section__text">
                Profiles were designed to resemble a lightweight CV, ensuring professional credibility while maintaining simplicity.
              </p>
              <p className="cs-section__text">The matching mechanism:</p>
              <ul className="cs-list">
                <li>Updates dynamically using React state</li>
                <li>Moves to the next profile after interaction</li>
                <li>Allows quick evaluation without friction</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Profile Detail</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - UX WRITING & DESIGN DECISIONS */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">UX Writing &amp; Design Decisions</h2>
          <p className="cs-section__text">We applied three UX writing principles:</p>
          <ul className="cs-list">
            <li><strong>Clarity</strong> — Simple, direct language</li>
            <li><strong>Conciseness</strong> — Minimal text, clear CTAs</li>
            <li><strong>Usefulness</strong> — Context-specific guidance</li>
          </ul>
          <p className="cs-section__text">Examples:</p>
          <ul className="cs-list">
            <li>Straightforward prompts like "What is your location?"</li>
            <li>Single-word CTAs like "Next"</li>
            <li>Clear labels for skills and experience</li>
          </ul>
          <p className="cs-section__text">Design choices:</p>
          <ul className="cs-list">
            <li>Mobile-first layout</li>
            <li>Clean, minimal UI</li>
            <li>Consistent blue accent</li>
            <li>Utility-first Tailwind styling</li>
          </ul>
          <div className="cs-solution-block__image" style={{ marginTop: '2rem' }}>
            <div className="cs-image-placeholder">
              <span>Sign-up UI</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - DEVELOPMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Development</h2>
          <p className="cs-section__text">
            The application was built using React with component-based architecture and state management.
          </p>
          <p className="cs-section__text">Key implementation highlights:</p>
          <ul className="cs-list">
            <li>Multi-step sign-up using useState</li>
            <li>Conditional rendering based on user type</li>
            <li>Swipe logic powered by dynamic profile indexing</li>
            <li>Component breakdown: Feed &rarr; Card &rarr; FlipCard &rarr; Action</li>
            <li>TailwindCSS for rapid, consistent styling</li>
          </ul>
        </div>
      </section>

      {/* SECTION 7 - MY CONTRIBUTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">My Contribution</h2>
          <ul className="cs-contribution-list">
            <li>Led user interviews and insight synthesis</li>
            <li>Defined target audiences</li>
            <li>Designed onboarding flow</li>
            <li>Designed profile card structure</li>
            <li>Implemented multi-step sign-up logic</li>
            <li>Built swipe feed using React state management</li>
            <li>Styled UI using TailwindCSS</li>
          </ul>
        </div>
      </section>

      {/* SECTION 8 - OUTCOME */}
      <section className="cs-section cs-section--outcome cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Outcome</h2>
          <p className="cs-section__text">The MVP successfully demonstrates:</p>
          <ul className="cs-list">
            <li>A clear professional matching concept</li>
            <li>Functional swipe-based interaction</li>
            <li>Personalized onboarding experience</li>
            <li>Clean and responsive mobile UI</li>
            <li>Real-world React implementation</li>
          </ul>
        </div>
      </section>

      {/* FOOTER / CLOSING */}
      <div className="cs-closing cs-animate">
        <div className="cs-closing__inner">
          <a
            href="https://linderwebapp.netlify.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Prototype
          </a>
          <a
            href="https://github.com/tracytratran/linder"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
          <button className="btn cs-closing__back" onClick={() => { navigate('/'); window.scrollTo(0, 0) }}>
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}

export default LinderStudy
