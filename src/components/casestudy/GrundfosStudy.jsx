import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './grundfos-study.css'
import heroImage from '../../assets/grundfos.png'
import image1 from '../../assets/personalizedOnboarding.png'
import image2 from '../../assets/dashboard.png'
import image3 from '../../assets/coursePage.png'
import image4 from '../../assets/courseDetails1.png'
import image5 from '../../assets/courseDetails2.png'
import image6 from '../../assets/quiz1.png'
import image7 from '../../assets/quiz2.png'


const GrundfosStudy = () => {
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
          <h1 className="cs-hero__title">Grundfos</h1>
          <p className="cs-hero__subtitle">
            Redesigning the "Learn" Platform for Installers &amp; Engineers
          </p>
          <p className="cs-hero__description">
            Improving clarity, personalization, and engagement in a complex learning ecosystem.
          </p>
          <div className="cs-hero__meta">
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX Research &middot; Product Design &middot; Prototyping</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">10 weeks</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">3 Designers</span>
            </div>
          </div>
        </div>
        <div className="cs-hero__image cs-animate">
          <img src={heroImage} alt="Grundfos Learn platform redesign overview" />
        </div>
      </header>

      {/* SECTION 1 - THE CHALLENGE */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Challenge</h2>
          <p className="cs-section__text">
            Grundfos' "Learn" section was difficult to navigate and lacked motivation for users.
          </p>
          <p className="cs-section__text">Users struggled with:</p>
          <ul className="cs-list">
            <li>Confusing structure between Learn, Eacademy, and MyEacademy</li>
            <li>Overwhelming menus</li>
            <li>Lack of personalization</li>
            <li>Limited visibility of progress</li>
          </ul>
          <p className="cs-section__text">
            Installers needed quick, practical access. Consulting engineers needed structured, technical depth.
            The platform wasn't clearly supporting either.
          </p>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <div className="cs-highlight-card">
            <p className="cs-highlight-text">
              "How might we redesign Grundfos' "Learn" platform to better support both installers and consulting engineers through clearer navigation, structured learning paths, and personalized content?"
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
              <h3 className="cs-user-card__title">Practical Learners</h3>
              <span className="cs-user-card__label">Installers</span>
              <ul className="cs-user-card__list">
                <li>Need quick, mobile-friendly troubleshooting</li>
                <li>Prefer hands-on guidance</li>
                <li>Value speed and efficiency</li>
              </ul>
            </div>
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Theoretical Learners</h3>
              <span className="cs-user-card__label">Consulting Engineers</span>
              <ul className="cs-user-card__list">
                <li>Prefer structured modules</li>
                <li>Need detailed technical insights</li>
                <li>Value documentation and compliance clarity</li>
              </ul>
            </div>
          </div>
          <div className="cs-insight">
            <span className="cs-insight__label">Key Insight</span>
            <p className="cs-insight__text">
              Users didn't need more content. They needed clearer structure and tailored learning paths.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - DEFINING THE DIRECTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Defining the Direction</h2>
          <p className="cs-section__text">We focused on three improvements:</p>
          <ul className="cs-list cs-list--numbered">
            <li>Simplify navigation</li>
            <li>Personalize learning experience</li>
            <li>Increase engagement through progress visibility</li>
          </ul>
          <p className="cs-section__text cs-section__text--closing">
            The goal was a learning platform that feels structured, motivating, easy to navigate, and aligned with Grundfos' professional identity.
          </p>
        </div>
      </section>

      {/* SECTION 4 - THE SOLUTION */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Solution</h2>

          {/* Personalized Onboarding */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Personalized Onboarding</h3>
              <p className="cs-section__text">Instead of a generic entry, users:</p>
              <ul className="cs-list">
                <li>Select interests</li>
                <li>Choose learning preferences</li>
                <li>Define skill level</li>
              </ul>
              <p className="cs-section__text">
                This allows the platform to tailor content from the start.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={image1} alt="Onboarding screen" />
            </div>
          </div>

          {/* Workspace Dashboard */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Workspace Dashboard</h3>
              <p className="cs-section__text">We redesigned the dashboard to:</p>
              <ul className="cs-list">
                <li>Clearly show progress</li>
                <li>Highlight certificates and achievements</li>
                <li>Surface active courses</li>
                <li>Reduce visual clutter</li>
              </ul>
              <p className="cs-section__text cs-section__text--result">
                Result: Better overview. Stronger motivation.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={image2} alt="Onboarding screen" />
            </div>
          </div>

          {/* Improved Course Discovery */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Improved Course Discovery</h3>
              <p className="cs-section__text">We simplified course browsing:</p>
              <ul className="cs-list">
                <li>Clear filtering (All / In Progress / Completed / Saved)</li>
                <li>Stronger visual hierarchy</li>
                <li>Visible difficulty and duration</li>
                <li>Cleaner card layout</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={image3} alt="Onboarding screen" />
            </div>
          </div>

          {/* Course Experience */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Course Experience</h3>
              <p className="cs-section__text">Before starting:</p>
              <ul className="cs-list">
                <li>Clear overview</li>
                <li>Included materials</li>
                <li>Reviews and recommendations</li>
              </ul>
              <p className="cs-section__text">During learning:</p>
              <ul className="cs-list">
                <li>Structured modules</li>
                <li>Progress tracking</li>
                <li>Interactive quizzes</li>
                <li>Immediate feedback</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={image4} alt="Onboarding screen" />
              <img className='cs-image-placeholder' src={image5} alt="Onboarding screen" />
            </div>
          </div>

          {/* Course Testing & Quiz */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Gamified Testing & Feedback</h3>
              <p className="cs-section__text">We introduced:</p>
              <ul className="cs-list">
                <li>Interactive quizzes</li>
                <li>Clear scoring feedback</li>
                <li>Profile achievements</li>
                <li>Certificates with download/share</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={image6} alt="Onboarding screen" />
              <img className='cs-image-placeholder' src={image7} alt="Onboarding screen" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - TESTING & ITERATION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Testing &amp; Iteration</h2>
          <p className="cs-section__text">
            We tested navigation clarity and feature placement.
          </p>
          <p className="cs-section__text">Findings:</p>
          <ul className="cs-list">
            <li>Dashboard improvements were well received</li>
            <li>AI chat needed stronger visual emphasis</li>
            <li>Users valued certificate download/share</li>
            <li>Course discovery required simplification</li>
          </ul>
          <p className="cs-section__text cs-section__text--closing">
            These insights led to refined layout and feature prioritization.
          </p>
        </div>
      </section>

      {/* SECTION 6 - MY CONTRIBUTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">My Contribution</h2>
          <ul className="cs-contribution-list">
            <li>Led persona definition</li>
            <li>Facilitated ideation workshops</li>
            <li>Designed onboarding flow</li>
            <li>Designed workspace dashboard</li>
            <li>Conducted usability testing</li>
            <li>Contributed to high-fidelity prototype in Figma</li>
          </ul>
        </div>
      </section>

      {/* SECTION 7 - OUTCOME */}
      <section className="cs-section cs-section--outcome cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Outcome</h2>
          <p className="cs-section__text">The redesigned platform:</p>
          <ul className="cs-list">
            <li>Clarifies navigation</li>
            <li>Supports both practical and technical learners</li>
            <li>Increases engagement through personalization</li>
            <li>Aligns with Grundfos' professional brand identity</li>
          </ul>
        </div>
      </section>

      {/* FOOTER / CLOSING */}
      <div className="cs-closing cs-animate">
        <div className="cs-closing__inner">
          <a
            href="https://www.figma.com/proto/BHVMoDYG6TU6dLBVXws7Ml/Prototype-we-can-use?node-id=187-5579&p=f&t=MBwy0nDvyUDnZHKk-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=273%3A5526"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Prototype
          </a>
          <button className="btn cs-closing__back" onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}

export default GrundfosStudy
