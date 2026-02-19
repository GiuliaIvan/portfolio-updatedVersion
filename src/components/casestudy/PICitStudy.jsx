import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './grundfos-study.css'
import heroImage from '../../assets/portfolio11.jpg'
import filteringSection from '../../assets/filteringPIC.png'
import beforePICit from '../../assets/beforePICit.png'
import afterPICit from '../../assets/afterPICit.png'

const PICitStudy = () => {
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
          <h1 className="cs-hero__title">PICit</h1>
          <p className="cs-hero__subtitle">
            Redesigning a complex dispatch interface for logistics professionals.
          </p>
          <p className="cs-hero__description">
            A user-centered redesign of PICit's most-used software page — transforming an outdated Excel-like interface into a modern, intuitive scheduling experience.
          </p>
          <div className="cs-hero__meta">
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX Research &middot; UI Design &middot; Prototyping</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Client</span>
              <span className="cs-meta-value">PICit (SaaS company)</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">Final Thesis &mdash; Spring 2023</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Focus</span>
              <span className="cs-meta-value">Dispatch View Redesign</span>
            </div>
          </div>
        </div>
        <div className="cs-hero__image cs-animate">
          <img src={heroImage} alt="PICit dispatch view redesign overview" />
        </div>
      </header>

      {/* SECTION 1 - THE CHALLENGE */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Challenge</h2>
          <p className="cs-section__text">
            PICit's dispatch view is the most critical page in their logistics software.
          </p>
          <p className="cs-section__text">Dispatchers use it daily to:</p>
          <ul className="cs-list">
            <li>Schedule container deliveries</li>
            <li>Assign trucks and drivers</li>
            <li>Monitor shipments</li>
            <li>Handle time-sensitive logistics</li>
          </ul>
          <p className="cs-section__text">The problem:</p>
          <ul className="cs-list">
            <li>Outdated Excel-like interface</li>
            <li>Poor visual hierarchy</li>
            <li>Overloaded information</li>
            <li>Confusing color coding</li>
            <li>Difficult time-slot readability</li>
            <li>Frequent user errors</li>
          </ul>
          <p className="cs-section__text">
            Dispatchers needed to manage dozens of containers per day — but the interface slowed them down instead of supporting them.
          </p>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <div className="cs-highlight-card">
            <p className="cs-highlight-text">
              "How might we redesign PICit's dispatch view to reduce cognitive overload, improve clarity, and create a modern, intuitive scheduling experience for dispatchers?"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - UNDERSTANDING THE USERS */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Understanding the Users</h2>
          <p className="cs-section__text">
            The main users are professional dispatchers working in transport firms.
          </p>

          <div className="cs-persona-card">
            <div className="cs-persona-card__header">
              <h3 className="cs-persona-card__name">Pernille, 38 &mdash; Dispatcher</h3>
              <span className="cs-persona-card__label">Primary Persona</span>
            </div>
            <div className="cs-persona-card__body">
              <div className="cs-persona-card__column">
                <h4 className="cs-persona-card__subtitle">Profile</h4>
                <ul className="cs-user-card__list">
                  <li>Former truck driver</li>
                  <li>Detail-oriented</li>
                  <li>Manages multiple shipments daily</li>
                  <li>Uses the software all day</li>
                  <li>Works across 3 screens to maintain overview</li>
                </ul>
              </div>
              <div className="cs-persona-card__column">
                <h4 className="cs-persona-card__subtitle">Pain Points</h4>
                <ul className="cs-user-card__list">
                  <li>Hard to distinguish job cards</li>
                  <li>Overcrowded table layout</li>
                  <li>Time slots difficult to read</li>
                  <li>Poor button visibility</li>
                  <li>Too many small details squeezed together</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cs-insight" style={{ marginTop: '2rem' }}>
            <span className="cs-insight__label">Key Insight</span>
            <p className="cs-insight__text">
              Dispatchers don't need more features — they need clarity, hierarchy, and breathing space.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - DEFINING THE DIRECTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Defining the Direction</h2>
          <p className="cs-section__text">The redesign focused on four main goals:</p>
          <ul className="cs-list cs-list--numbered">
            <li>Reduce visual clutter</li>
            <li>Improve job card readability</li>
            <li>Create clear time delimitations</li>
            <li>Modernize the interface without breaking brand identity</li>
          </ul>
          <p className="cs-section__text">The solution had to:</p>
          <ul className="cs-list">
            <li>Stay aligned with PICit's blue brand</li>
            <li>Support daily heavy usage</li>
            <li>Improve efficiency, not just aesthetics</li>
            <li>Feel professional and trustworthy</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 - THE SOLUTION */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Solution</h2>

          {/* 1. Navigation Redesign */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Navigation Redesign</h3>
              <p className="cs-section__text">The previous navigation was top-heavy and underutilized.</p>
              <p className="cs-section__text">Solution:</p>
              <ul className="cs-list">
                <li>Introduced left sidebar navigation</li>
                <li>Added hide/show functionality</li>
                <li>Moved rarely used buttons (Validate, Send mail, Refresh) into sidebar</li>
                <li>Increased working space for scheduling table</li>
              </ul>

              <h3 className="cs-solution-block__title">Jobs Redesign</h3>
              <p className="cs-section__text">The original jobs table looked like a compressed spreadsheet.</p>
              <p className="cs-section__text">Improvements:</p>
              <ul className="cs-list">
                <li>Alternating row colors</li>
                <li>Increased spacing</li>
                <li>Clearer typography</li>
                <li>Horizontal scrolling instead of squeezing columns</li>
              </ul>
            </div>
            <div className="cs-solution-block__image" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img className='cs-image-placeholder' src={beforePICit} alt="Onboarding screen" />
              <span style={{ fontSize: '0.9rem', color: 'var(--color-light)', fontWeight: '400' }}>Before</span>
              <img className='cs-image-placeholder' src={afterPICit} alt="Onboarding screen" />
              <span style={{ fontSize: '0.9rem', color: 'var(--color-light)', fontWeight: '400' }}>After</span>
            </div>
          </div>

          {/* 2. Jobs Table Redesign */}
          {/* <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Jobs Table Redesign</h3>
              <p className="cs-section__text">
                The original jobs table looked like a compressed spreadsheet.
              </p>
              <p className="cs-section__text">Issues:</p>
              <ul className="cs-list">
                <li>No whitespace</li>
                <li>Difficult to scan</li>
                <li>Overwhelming data density</li>
              </ul>
              <p className="cs-section__text">Improvements:</p>
              <ul className="cs-list">
                <li>Alternating row colors</li>
                <li>Increased spacing</li>
                <li>Rounded corners</li>
                <li>Clearer typography</li>
                <li>Horizontal scrolling instead of squeezing columns</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Before Jobs Table</span>
              </div>
              <div className="cs-image-placeholder">
                <span>After Jobs Table</span>
              </div>
            </div>
          </div> */}

          {/* 3. Job Cards Redesign */}
          {/* <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Job Cards Redesign</h3>
              <p className="cs-section__text">Job cards originally had:</p>
              <ul className="cs-list">
                <li>Rectangular shape</li>
                <li>Overloaded content</li>
                <li>Hard to distinguish</li>
                <li>Poor color contrast</li>
              </ul>
              <p className="cs-section__text">Redesign decisions:</p>
              <ul className="cs-list">
                <li>Soft rounded cards</li>
                <li>Clear sectioned layout</li>
                <li>Regular font instead of italic</li>
                <li>Color emphasis instead of text styling</li>
                <li>Added progress bar to show shipment status</li>
                <li>Improved modal view for full details</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Before Job Card</span>
              </div>
              <div className="cs-image-placeholder">
                <span>Final Job Card Design</span>
              </div>
            </div>
          </div> */}

          {/* 4. Schedule View Improvement */}
          {/* <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Schedule View Improvement</h3>
              <p className="cs-section__text">
                The timeline grid was difficult to read and track.
              </p>
              <p className="cs-section__text">Improvements:</p>
              <ul className="cs-list">
                <li>Clear hour delimitations</li>
                <li>Better vertical spacing</li>
                <li>Soft pastel job colors</li>
                <li>Stronger contrast</li>
                <li>Reduced Excel feel</li>
                <li>Improved drag-and-drop positioning</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Before Schedule View</span>
              </div>
              <div className="cs-image-placeholder">
                <span>Final Schedule View</span>
              </div>
            </div>
          </div> */}

          {/* 5. Search & Filtering */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Search &amp; Filtering</h3>
              <p className="cs-section__text">Previously:</p>
              <ul className="cs-list">
                <li>Overcrowded filter fields</li>
                <li>Hard to locate specific job</li>
              </ul>
              <p className="cs-section__text">Redesign:</p>
              <ul className="cs-list">
                <li>Converted search into side panel</li>
                <li>Added clear placeholders</li>
                <li>Structured fields vertically</li>
                <li>Reduced cognitive overload</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={filteringSection} alt="Onboarding screen" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - TESTING & ITERATION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Testing &amp; Iteration</h2>
          <div className="cs-solution-block__text" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <p className="cs-section__text">Usability testing revealed:</p>
              <ul className="cs-list">
                <li>Sidebar hide feature was appreciated</li>
                <li>Rounded job cards improved readability</li>
                <li>Color emphasis worked better than italic text</li>
                <li>Search filter needed clearer separation</li>
                <li>Excel-like feel needed further reduction</li>
              </ul>
            </div>
            <div>
              <p className="cs-section__text">Changes implemented:</p>
              <ul className="cs-list">
                <li>Regular font on cards</li>
                <li>Added color-based emphasis</li>
                <li>Increased whitespace</li>
                <li>Converted search to slide-out panel</li>
                <li>Improved visual hierarchy</li>
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
            <li>Conducted interview with warehouse lead</li>
            <li>Defined persona and user journey</li>
            <li>Performed competitive analysis</li>
            <li>Designed multiple job card models</li>
            <li>Created lo-fi wireframes</li>
            <li>Built high-fidelity mockups in Adobe XD</li>
            <li>Conducted usability testing</li>
            <li>Iterated based on feedback</li>
            <li>Implemented drag-and-drop proof of concept</li>
          </ul>
        </div>
      </section>

      {/* SECTION 7 - OUTCOME */}
      <section className="cs-section cs-section--outcome cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Outcome</h2>
          <p className="cs-section__text">The redesigned dispatch view:</p>
          <ul className="cs-list">
            <li>Reduces cognitive overload</li>
            <li>Improves daily scheduling clarity</li>
            <li>Modernizes visual identity</li>
            <li>Enhances readability and hierarchy</li>
            <li>Supports faster decision-making</li>
            <li>Aligns with PICit's brand identity</li>
          </ul>
          <p className="cs-section__text cs-section__text--closing">
            The redesign transforms the dispatch experience from spreadsheet-heavy to user-centered SaaS interface.
          </p>
        </div>
      </section>

      {/* FOOTER / CLOSING */}
      <div className="cs-closing cs-animate">
        <div className="cs-closing__inner">
          <a
            href="https://xd.adobe.com/view/5fe1536e-ce8d-4ecc-836d-7f124c3a441f-0ab2/"
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

export default PICitStudy
