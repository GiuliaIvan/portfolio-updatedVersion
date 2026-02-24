import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './grundfos-study.css'
import heroImage from '../../assets/heroCafe.png'
import aboutCafe from '../../assets/aboutCafe.png'
import galleryCafe from '../../assets/galleryCafe.png'
import menuCafe from '../../assets/menuCafe.png'
import moodboardCafe from '../../assets/moodboardCafe.png'

const CafeHerOgDerStudy = () => {
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
          <h1 className="cs-hero__title">Caf&eacute; Her Og Der</h1>
          <p className="cs-hero__subtitle">
            Designing a mobile-first digital presence for a cozy local coffee shop.
          </p>
          <p className="cs-hero__description">
            A responsive one-page website built to improve visibility, communicate atmosphere, and provide essential information quickly for mobile users.
          </p>
          <div className="cs-hero__meta">
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX Research &middot; UI Design &middot; Frontend Development</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">4 Designers</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">2.5 Weeks</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Platform</span>
              <span className="cs-meta-value">Mobile-First Website</span>
            </div>
          </div>
        </div>
        <div className="cs-hero__image cs-animate">
          <img src={heroImage} alt="Café Her Og Der website overview" />
        </div>
      </header>

      {/* SECTION 1 — THE CHALLENGE */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Challenge</h2>
          <p className="cs-section__text">
            Caf&eacute; Her Og Der had no website.
          </p>
          <p className="cs-section__text">Potential customers struggled to find:</p>
          <ul className="cs-list">
            <li>Opening hours</li>
            <li>Menu and prices</li>
            <li>Contact information</li>
            <li>Location details</li>
          </ul>
          <p className="cs-section__text">
            Most visitors search for caf&eacute;s on mobile devices. The business relied primarily on Instagram and word-of-mouth.
          </p>
          <p className="cs-section__text">Without a website:</p>
          <ul className="cs-list">
            <li>Discoverability was limited</li>
            <li>Brand identity was underdeveloped</li>
            <li>Customers lacked quick access to information</li>
          </ul>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <div className="cs-highlight-card">
            <p className="cs-highlight-text">
              "How might we design a mobile-first website that communicates the caf&eacute;'s atmosphere while providing essential information clearly and quickly?"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — UNDERSTANDING THE USERS */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Understanding the Users</h2>
          <p className="cs-section__text">
            Through interviews with staff and customers, we identified two main user behaviors.
          </p>
          <div className="cs-cards-grid">
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Mobile Search Users</h3>
              <span className="cs-user-card__label">On-the-go visitors</span>
              <ul className="cs-user-card__list">
                <li>Search on Google Maps</li>
                <li>Want quick access to hours and location</li>
                <li>Check menu and prices before visiting</li>
              </ul>
            </div>
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Sit-In Visitors</h3>
              <span className="cs-user-card__label">Regular guests</span>
              <ul className="cs-user-card__list">
                <li>Value cozy atmosphere</li>
                <li>Prefer to stay and work or relax</li>
                <li>Appreciate transparency in pricing</li>
              </ul>
            </div>
          </div>
          <div className="cs-insight">
            <span className="cs-insight__label">Key Insight</span>
            <p className="cs-insight__text">
              Users don't want complexity — they want clarity, warmth, and fast access to key information.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DEFINING THE DIRECTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Defining the Direction</h2>
          <p className="cs-section__text">We focused on four priorities:</p>
          <ul className="cs-list cs-list--numbered">
            <li>Mobile-first design</li>
            <li>Simple one-page structure</li>
            <li>Clear menu and pricing visibility</li>
            <li>Strong visual identity reflecting the caf&eacute; atmosphere</li>
          </ul>
          <p className="cs-section__text">The website needed to feel:</p>
          <div className="cs-keyword-row">
            <span className="cs-keyword">Cozy</span>
            <span className="cs-keyword">Warm</span>
            <span className="cs-keyword">Authentic</span>
            <span className="cs-keyword">Inviting</span>
            <span className="cs-keyword">Simple</span>
          </div>
        </div>
      </section>

      {/* SECTION 4 — VISUAL IDENTITY */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Visual Identity</h2>
          <p className="cs-section__text">
            The design direction was inspired directly by the caf&eacute;'s physical space.
          </p>

          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Design Decisions</h3>
              <ul className="cs-list">
                <li>Brown and coffee-inspired color palette</li>
                <li>Soft neutral tones</li>
                <li>Elegant typography (Alkaline &amp; Europa)</li>
                <li>Generous white space</li>
                <li>Calm and warm atmosphere</li>
              </ul>
              <p className="cs-section__text">
                We developed moodboards and style tiles before finalizing the visual direction.
              </p>
            </div>
            <div className="cs-solution-block__image" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img className='cs-image-placeholder' src={moodboardCafe} alt="Onboarding screen" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE SOLUTION */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Solution</h2>

          {/* One-Page Architecture */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">One-Page Architecture</h3>
              <p className="cs-section__text">
                We structured the website as a single scrolling page with anchor navigation.
              </p>
              <p className="cs-section__text">Sections:</p>
              <ul className="cs-list">
                <li>Home</li>
                <li>About Us</li>
                <li>Menu + Prices</li>
                <li>Gallery</li>
                <li>Contact</li>
                <li>Opening Hours</li>
                <li>Footer</li>
              </ul>
              <p className="cs-section__text">
                This allows users to scroll naturally, access information quickly, and avoid unnecessary page loads.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder cs-image-placeholder-aspect-ration' style={{ objectFit: 'contain' }} src={aboutCafe} alt="Onboarding screen" />
            </div>
          </div>

          {/* Menu & Pricing Clarity */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Menu &amp; Pricing Clarity</h3>
              <p className="cs-section__text">Based on research, customers wanted:</p>
              <ul className="cs-list">
                <li>Transparent prices</li>
                <li>Clear menu structure</li>
                <li>Easy readability</li>
              </ul>
              <p className="cs-section__text">We prioritized:</p>
              <ul className="cs-list">
                <li>Visible pricing</li>
                <li>Clean typography</li>
                <li>Simple layout</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder cs-image-placeholder-aspect-ration' style={{ objectFit: 'contain' }} src={menuCafe} alt="Onboarding screen" />
            </div>
          </div>

          {/* Visual Storytelling */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Visual Storytelling</h3>
              <p className="cs-section__text">
                Since the caf&eacute; lacked digital material, we created:
              </p>
              <ul className="cs-list">
                <li>Custom photography</li>
                <li>A 15-second B-roll video</li>
                <li>Animated logo</li>
              </ul>
              <p className="cs-section__text">
                The goal was to translate the physical atmosphere into a digital experience.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={galleryCafe} alt="Onboarding screen" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TESTING & ITERATION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Testing &amp; Iteration</h2>
          <p className="cs-section__text">
            We conducted usability testing with 5 users from the target audience.
          </p>
          <p className="cs-section__text">Findings:</p>
          <ul className="cs-list">
            <li>Users immediately used the burger menu</li>
            <li>Navigation labels were clear</li>
            <li>Menu and pricing were easy to find</li>
            <li>The video was less noticeable on smaller screens</li>
          </ul>
          <p className="cs-section__text">Overall feedback confirmed:</p>
          <ul className="cs-list">
            <li>Clear structure</li>
            <li>Strong usability</li>
            <li>Smooth navigation</li>
          </ul>
        </div>
      </section>

      {/* SECTION 7 — MY CONTRIBUTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">My Contribution</h2>
          <ul className="cs-contribution-list">
            <li>Conducted user interviews</li>
            <li>Contributed to research and surveys</li>
            <li>Created moodboards and style direction</li>
            <li>Designed wireframes</li>
            <li>Participated in photography and video creation</li>
            <li>Developed frontend structure</li>
            <li>Optimized for performance and SEO</li>
            <li>Conducted usability testing</li>
          </ul>
        </div>
      </section>

      {/* SECTION 8 — OUTCOME */}
      <section className="cs-section cs-section--outcome cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Outcome</h2>
          <p className="cs-section__text">The website:</p>
          <ul className="cs-list">
            <li>Improves online visibility</li>
            <li>Communicates brand atmosphere</li>
            <li>Provides clear mobile access to key information</li>
            <li>Strengthens digital identity</li>
            <li>Offers a professional first impression</li>
          </ul>
          <p className="cs-section__text cs-section__text--closing">
            Caf&eacute; Her Og Der now has a structured digital presence aligned with its physical experience.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <div className="cs-closing cs-animate">
        <div className="cs-closing__inner">
          <a
            href="https://giuliaivan.github.io/cafeHerOgDer/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Live Site
          </a>
          <a
            href="https://github.com/GiuliaIvan/cafeHerOgDer"
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

export default CafeHerOgDerStudy
