import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './grundfos-study.css'
import heroImage from '../../assets/FoT.png'
import gameplay from '../../assets/gameplayFOT.png'
import storyFOT from '../../assets/storyFOT.png'
import startScreen from '../../assets/startScreenFOT.png'
import museumFOT from '../../assets/museumFOT.png'
import artifactFOT from '../../assets/artifactFOT.png'
import onePagerFOT from '../../assets/one-pagerFOT.png'

const FragmentsOfTimeStudy = () => {
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
          <h1 className="cs-hero__title">Fragments of Time</h1>
          <p className="cs-hero__subtitle">
            Designing an educational 2D extraction game for young explorers.
          </p>
          <p className="cs-hero__description">
            A pixel-style top-down adventure that blends gameplay and historical learning through artifact collection and dungeon exploration.
          </p>
          <div className="cs-hero__meta">
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">Game Design &middot; UI Design &middot; Unity Development</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">2 Developers + 1 Designer</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">Spring 2025</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Platform</span>
              <span className="cs-meta-value">PC (Unity 2D)</span>
            </div>
          </div>
        </div>
        <div className="cs-hero__image cs-animate">
          <img src={heroImage} alt="Fragments of Time game overview" />
        </div>
      </header>

      {/* SECTION 1 — THE CHALLENGE */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Challenge</h2>
          <p className="cs-section__text">
            How can we design a game that is both entertaining and educational?
          </p>
          <p className="cs-section__text">The goal was to:</p>
          <ul className="cs-list">
            <li>Create an engaging top-down extraction experience</li>
            <li>Introduce historical themes in a playful way</li>
            <li>Keep mechanics simple enough for children (8&ndash;13)</li>
            <li>Deliver a complete playable prototype within limited scope</li>
          </ul>
          <p className="cs-section__text">The game needed to balance:</p>
          <div className="cs-keyword-row">
            <span className="cs-keyword">Fun + Learning</span>
            <span className="cs-keyword">Exploration + Combat</span>
            <span className="cs-keyword">Simplicity + Challenge</span>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <div className="cs-highlight-card">
            <p className="cs-highlight-text">
              "How might we design a 2D game that makes learning about history engaging through interactive exploration and artifact collection?"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CONCEPT & USERS */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Concept &amp; Target Audience</h2>
          <p className="cs-section__text">
            The narrative follows Carter Jr., a young archaeologist restoring lost fragments of history after a mysterious timeline collapse.
          </p>
          <div className="cs-cards-grid">
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Target Audience</h3>
              <span className="cs-user-card__label">Children aged 8&ndash;13</span>
              <ul className="cs-user-card__list">
                <li>Enjoy visual, interactive content</li>
                <li>Short attention spans</li>
                <li>Prefer learning through play</li>
                <li>Need guided onboarding</li>
              </ul>
            </div>
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Design Considerations</h3>
              <span className="cs-user-card__label">Accessibility &amp; Clarity</span>
              <ul className="cs-user-card__list">
                <li>Clear UI</li>
                <li>Simple controls</li>
                <li>Intuitive mechanics</li>
                <li>Visual storytelling</li>
                <li>Gradual difficulty</li>
              </ul>
            </div>
          </div>
          <div className="cs-insight">
            <span className="cs-insight__label">Key Insight</span>
            <p className="cs-insight__text">
              Young players need guidance and clarity more than complexity.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DEFINING THE DIRECTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Design Direction</h2>
          <p className="cs-section__text">We focused on four principles:</p>
          <ul className="cs-list cs-list--numbered">
            <li>Exploration-driven gameplay</li>
            <li>Artifact-based progression</li>
            <li>Clear and minimal UI</li>
            <li>Educational storytelling without overwhelming text</li>
          </ul>
          <p className="cs-section__text">To keep scope manageable, we developed:</p>
          <ul className="cs-list">
            <li>One complete medieval dungeon level</li>
            <li>Core combat mechanics</li>
            <li>Artifact collection system</li>
            <li>Camp and museum progression screens</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 — GAMEPLAY & MECHANICS */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Gameplay &amp; Mechanics</h2>

          {/* Core Mechanics */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Core Mechanics</h3>
              <p className="cs-section__text">Players can:</p>
              <ul className="cs-list">
                <li>Move in 8 directions</li>
                <li>Shoot arrows</li>
                <li>Avoid traps</li>
                <li>Collect coins</li>
                <li>Retrieve historical artifacts</li>
                <li>Escape safely</li>
              </ul>
              <p className="cs-section__text">We introduced:</p>
              <ul className="cs-list">
                <li>Enemy AI with patrol and chase mechanics</li>
                <li>Limited visibility (cone of vision)</li>
                <li>Trap systems</li>
                <li>Inventory tracking</li>
              </ul>
            </div>
            <div className="cs-solution-block__image" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img className='cs-image-placeholder' src={storyFOT} alt="Onboarding screen" />
              <img className='cs-image-placeholder' src={gameplay} alt="Onboarding screen" />
            </div>
          </div>

          {/* Artifact Collection System */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Artifact Collection System</h3>
              <p className="cs-section__text">
                The educational layer is integrated through collectible artifacts.
              </p>
              <p className="cs-section__text">Players:</p>
              <ul className="cs-list">
                <li>Discover artifacts in the dungeon</li>
                <li>View artifact information in the collection screen</li>
                <li>Restore fragments of historical knowledge</li>
              </ul>
              <p className="cs-section__text">The artifact screen was simplified to:</p>
              <ul className="cs-list">
                <li>Reduce cognitive overload</li>
                <li>Present information clearly</li>
                <li>Maintain playful visual tone</li>
              </ul>
            </div>
            <div className="cs-solution-block__image" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img className='cs-image-placeholder' src={museumFOT} alt="Onboarding screen" />
              <img className='cs-image-placeholder' src={artifactFOT} alt="Onboarding screen" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — UI DESIGN */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">UI &amp; Visual Direction</h2>
          <p className="cs-section__text">
            The UI was designed in Figma and implemented in Unity.
          </p>

          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Design Principles</h3>
              <ul className="cs-list">
                <li>Minimal interface</li>
                <li>Clear CTAs</li>
                <li>Consistent styling</li>
                <li>Simple iconography</li>
                <li>Easy-to-read layouts</li>
              </ul>
              <p className="cs-section__text">Screens include:</p>
              <ul className="cs-list">
                <li>Start Menu</li>
                <li>Camp Scene</li>
                <li>Artifact Collection</li>
                <li>In-game overlays</li>
              </ul>
              <p className="cs-section__text">
                We refined layouts to adapt to Unity's UI limitations while keeping clarity for young users.
              </p>
            </div>
            <div className="cs-solution-block__image" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img className='cs-image-placeholder' src={startScreen} alt="Onboarding screen" />
              <img className='cs-image-placeholder' src={onePagerFOT} alt="Onboarding screen" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TESTING & ITERATION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Testing &amp; Iteration</h2>
          <p className="cs-section__text">
            We conducted usability testing with students and casual players.
          </p>
          <p className="cs-section__text">Feedback revealed:</p>
          <ul className="cs-list">
            <li>Players enjoyed the visuals and enemy mechanics</li>
            <li>Collectible purpose wasn't always clear</li>
            <li>Some interactions needed clearer instructions</li>
            <li>A tutorial would improve onboarding</li>
          </ul>
          <p className="cs-section__text">Adjustments made:</p>
          <ul className="cs-list">
            <li>Improved artifact information clarity</li>
            <li>Refined UI overlays</li>
            <li>Simplified some interactions</li>
            <li>Balanced difficulty</li>
          </ul>
        </div>
      </section>

      {/* SECTION 7 — MY CONTRIBUTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">My Contribution</h2>
          <ul className="cs-contribution-list">
            <li>Participated in concept development</li>
            <li>Designed UI screens in Figma</li>
            <li>Helped define gameplay flow</li>
            <li>Implemented core mechanics in Unity</li>
            <li>Worked on enemy AI adjustments</li>
            <li>Integrated UI elements into Unity</li>
            <li>Contributed to testing and iteration</li>
          </ul>
        </div>
      </section>

      {/* SECTION 8 — OUTCOME */}
      <section className="cs-section cs-section--outcome cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Outcome</h2>
          <p className="cs-section__text">Fragments of Time demonstrates:</p>
          <ul className="cs-list">
            <li>A functional extraction game prototype</li>
            <li>Integrated educational storytelling</li>
            <li>Structured game flow</li>
            <li>Responsive UI implementation</li>
            <li>Real-world Unity development experience</li>
          </ul>
          <p className="cs-section__text cs-section__text--closing">
            The project successfully combines entertainment and learning in a playable 2D experience.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <div className="cs-closing cs-animate">
        <div className="cs-closing__inner">
          <a
            href="https://youtu.be/Q0ePBVqSD8o"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Watch Demo
          </a>
          <a
            href="https://github.com/GiuliaIvan/exam_project_unity"
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

export default FragmentsOfTimeStudy
