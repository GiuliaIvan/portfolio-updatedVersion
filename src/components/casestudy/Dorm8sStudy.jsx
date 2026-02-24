import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './grundfos-study.css'
import heroImage from '../../assets/portfolio10.png'
import financesDorm from '../../assets/financesDorm.png'
import kitchenDorm from '../../assets/kitchenDorm.png'
import laundryDorm from '../../assets/laundryDorm.png'

const Dorm8sStudy = () => {
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
          <h1 className="cs-hero__title">Dorm8s</h1>
          <p className="cs-hero__subtitle">
            Making shared dorm living easier through a centralized digital solution.
          </p>
          <p className="cs-hero__description">
            A web application designed to simplify finances, chores, and shared responsibilities between dormmates.
          </p>
          <div className="cs-hero__meta">
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX Research &middot; UI Design &middot; Frontend Development</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">2 Designers</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">Fall 2022</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Platform</span>
              <span className="cs-meta-value">Web Application</span>
            </div>
          </div>
        </div>
        {/* <div className="cs-hero__image cs-animate">
          <img src={heroImage} style={{ width: '300px', height: 'auto',  }} alt="Dorm8s shared living management app overview" />
        </div> */}
      </header>

      {/* SECTION 1 - THE CHALLENGE */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Challenge</h2>
          <p className="cs-section__text">Living in a dorm means sharing:</p>
          <ul className="cs-list">
            <li>Kitchen items</li>
            <li>Laundry machines</li>
            <li>Cleaning duties</li>
            <li>Monthly shared expenses</li>
            <li>Events and meetings</li>
          </ul>
          <p className="cs-section__text">But coordination usually happens through:</p>
          <ul className="cs-list">
            <li>Excel files</li>
            <li>Verbal agreements</li>
            <li>Facebook groups</li>
            <li>Manual tracking</li>
          </ul>
          <p className="cs-section__text">
            This leads to confusion, unpaid balances, and unnecessary stress — especially for the "kitchen manager" responsible for tracking everything.
          </p>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <div className="cs-highlight-card">
            <p className="cs-highlight-text">
              "How might we design a simple digital tool that helps dormmates manage shared finances, chores, and resources without creating additional complexity?"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - UNDERSTANDING THE USERS */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Understanding the Users</h2>
          <p className="cs-section__text">
            Through focus groups and interviews, we identified a key persona:
          </p>

          <div className="cs-persona-card">
            <div className="cs-persona-card__header">
              <h3 className="cs-persona-card__name">The Kitchen Manager</h3>
              <span className="cs-persona-card__label">Primary Persona</span>
            </div>
            <div className="cs-persona-card__body">
              <div className="cs-persona-card__column">
                <h4 className="cs-persona-card__subtitle">Responsibilities</h4>
                <ul className="cs-user-card__list">
                  <li>Tracks shared expenses</li>
                  <li>Calculates who owes what</li>
                  <li>Buys common items</li>
                  <li>Organizes meetings</li>
                  <li>Manages cleaning rotation</li>
                </ul>
              </div>
              <div className="cs-persona-card__column">
                <h4 className="cs-persona-card__subtitle">Pain Points</h4>
                <ul className="cs-user-card__list">
                  <li>Tracking payments manually</li>
                  <li>Lack of transparency</li>
                  <li>Difficulty verifying purchases</li>
                  <li>Wasted time checking laundry availability</li>
                  <li>Miscommunication between roommates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cs-insight" style={{ marginTop: '2rem' }}>
            <span className="cs-insight__label">Key Insight</span>
            <p className="cs-insight__text">
              Dormmates need clarity and transparency — not more admin work.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - DEFINING THE DIRECTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Defining the Direction</h2>
          <p className="cs-section__text">We narrowed the app down to three core functionalities:</p>
          <ul className="cs-list cs-list--numbered">
            <li>Shared finances tracking</li>
            <li>Laundry availability overview</li>
            <li>Kitchen inventory management</li>
          </ul>
          <p className="cs-section__text">The goal was to create an app that feels:</p>
          <div className="cs-keyword-row">
            <span className="cs-keyword">Simple</span>
            <span className="cs-keyword">Trustworthy</span>
            <span className="cs-keyword">Calm</span>
            <span className="cs-keyword">Intuitive</span>
            <span className="cs-keyword">Lightweight</span>
          </div>
          <p className="cs-section__text" style={{ marginTop: '1.5rem' }}>
            We intentionally removed extra features to avoid overwhelming users.
          </p>
        </div>
      </section>

      {/* SECTION 4 - THE SOLUTION */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Solution</h2>

          {/* 1. Finances Overview */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Finances Overview</h3>
              <p className="cs-section__text">The finances page allows users to:</p>
              <ul className="cs-list">
                <li>See individual balances</li>
                <li>Track payments</li>
                <li>Upload receipts</li>
                <li>Redirect directly to MobilePay</li>
              </ul>
              <p className="cs-section__text cs-section__text--result">
                This reduces friction and increases transparency.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder cs-image-placeholder-aspect-ration' style={{ objectFit: 'contain' }} src={financesDorm} alt="Onboarding screen" />
            </div>
          </div>

          {/* 2. Kitchen Inventory */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Kitchen Inventory</h3>
              <p className="cs-section__text">
                The Kitchen page uses a card-based layout inspired by grocery apps.
              </p>
              <p className="cs-section__text">Items are split into:</p>
              <ul className="cs-list">
                <li>To Buy</li>
                <li>Available</li>
              </ul>
              <p className="cs-section__text">Design decisions:</p>
              <ul className="cs-list">
                <li>White space for clarity</li>
                <li>Clear hierarchy with section headings</li>
                <li>Minimal color usage</li>
                <li>Red notification dot for items that need to be bought</li>
                <li>Soft blue palette to create trust</li>
              </ul>
              <p className="cs-section__text">
                This evolved through testing from color-heavy cards to a cleaner, calmer interface.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder cs-image-placeholder-aspect-ration' style={{ objectFit: 'contain' }} src={kitchenDorm} alt="Onboarding screen" />
            </div>
          </div>

          {/* 3. Laundry Availability */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Laundry Availability</h3>
              <p className="cs-section__text">The laundry page shows:</p>
              <ul className="cs-list">
                <li>Which machines are free</li>
                <li>Which are occupied</li>
                <li>Saves time checking physically</li>
              </ul>
              <p className="cs-section__text cs-section__text--result">
                A simple status-based interface ensures clarity at a glance.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder cs-image-placeholder-aspect-ration' style={{ objectFit: 'contain' }} src={laundryDorm} alt="Onboarding screen" />
            </div>
          </div>

          {/* 4. Profile & Login */}
          {/* <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Profile &amp; Login</h3>
              <p className="cs-section__text">The app includes a login system to ensure:</p>
              <ul className="cs-list">
                <li>Personalized balances</li>
                <li>Secure access</li>
                <li>Role-based visibility</li>
              </ul>
              <p className="cs-section__text">
                Firebase is used for user data storage and authentication.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Login Screen Screenshot</span>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* SECTION 5 - TESTING & ITERATION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Testing &amp; Iteration</h2>
          <p className="cs-section__text">Usability testing revealed:</p>
          <ul className="cs-list">
            <li>Too many colors created visual noise</li>
            <li>Users preferred minimal indicators over full card recoloring</li>
            <li>White space improved clarity</li>
            <li>Simple navigation increased usability</li>
          </ul>
          <p className="cs-section__text">Result:</p>
          <ul className="cs-list">
            <li>Replaced colored cards with subtle red notification dot</li>
            <li>Reduced visual complexity</li>
            <li>Improved hierarchy and spacing</li>
          </ul>
        </div>
      </section>

      {/* SECTION 6 - MY CONTRIBUTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">My Contribution</h2>
          <ul className="cs-contribution-list">
            <li>Participated in brainstorming and research</li>
            <li>Contributed to persona creation</li>
            <li>Designed kitchen card interface</li>
            <li>Developed visual direction (blue-based palette)</li>
            <li>Built login functionality</li>
            <li>Integrated Firebase database</li>
            <li>Implemented async/await data fetching</li>
            <li>Developed SPA architecture</li>
          </ul>
        </div>
      </section>

      {/* SECTION 7 - OUTCOME */}
      <section className="cs-section cs-section--outcome cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Outcome</h2>
          <p className="cs-section__text">Dorm8s demonstrates:</p>
          <ul className="cs-list">
            <li>A clear dorm-specific solution</li>
            <li>Simplified financial transparency</li>
            <li>Reduced shared-living friction</li>
            <li>User-centered design iteration</li>
            <li>Functional SPA implementation</li>
          </ul>
          <p className="cs-section__text cs-section__text--closing">
            The app transforms dorm life from scattered communication into structured collaboration.
          </p>
        </div>
      </section>

      {/* FOOTER / CLOSING */}
      <div className="cs-closing cs-animate">
        <div className="cs-closing__inner">
          <a
            href="https://vlkeniko.github.io/dorm8ts.build/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Live Demo
          </a>
          <a
            href="https://github.com/GiuliaIvan/dorm8s"
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

export default Dorm8sStudy
