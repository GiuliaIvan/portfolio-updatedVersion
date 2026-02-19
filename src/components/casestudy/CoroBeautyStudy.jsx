import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './grundfos-study.css'
import heroImage from '../../assets/portfolio12.png'

// import personaCard from '../../assets/personaCoroB.jpeg'
import moodboard from '../../assets/moodboardCoroB.jpeg'
import styleTile from '../../assets/styleTileCoroB.jpeg'
import heroSection from '../../assets/heroCoroB.png'
import servicesSection from '../../assets/servicesCoroB.png'
import discountSection from '../../assets/discountsCoroB.png'
import gallerySection from '../../assets/galleryCoroB.png'
import testimonialsSection from '../../assets/testimonialsCoroB.png'
import profileDashboard from '../../assets/profileCoroB.png'

const CoroBeautyStudy = () => {
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
          <h1 className="cs-hero__title">CoroBeauty</h1>
          <p className="cs-hero__subtitle">
            Designing a digital presence for a local cosmetology salon.
          </p>
          <p className="cs-hero__description">
            A responsive website designed to increase visibility, credibility, and bookings for a small beauty business.
          </p>
          <div className="cs-hero__meta">
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX Research &middot; UI Design &middot; Frontend Development</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">Fall 2022</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Client</span>
              <span className="cs-meta-value">Coro Beauty by Andreea Coroban</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Stack</span>
              <span className="cs-meta-value">HTML &middot; CSS &middot; JavaScript</span>
            </div>
          </div>
        </div>
        <div className="cs-hero__image cs-animate">
          <img src={heroImage} alt="CoroBeauty website overview" />
        </div>
      </header>

      {/* SECTION 1 - THE CHALLENGE */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Challenge</h2>
          <p className="cs-section__text">
            Coro Beauty is a local cosmetology salon with strong client relationships but limited online presence.
          </p>
          <p className="cs-section__text">
            Despite its central location and loyal clients, the salon struggled to attract new customers due to:
          </p>
          <ul className="cs-list">
            <li>Limited digital visibility</li>
            <li>No centralized online information</li>
            <li>No booking system</li>
            <li>No structured presentation of services and pricing</li>
          </ul>
          <p className="cs-section__text">
            The business relied mostly on Instagram and word-of-mouth.
          </p>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <div className="cs-highlight-card">
            <p className="cs-highlight-text">
              "How might we design a website that increases CoroBeauty's visibility, builds trust, and makes booking services simple and intuitive?"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - UNDERSTANDING THE USERS */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Understanding the Users</h2>
          <p className="cs-section__text">
            Through interviews with the salon owner and clients, I identified the core needs of the target audience.
          </p>
          <p className="cs-section__text">
            Primary Audience: Women aged 15&ndash;45 who value:
          </p>
          <ul className="cs-list">
            <li>High-quality beauty services</li>
            <li>Transparent pricing</li>
            <li>Easy booking</li>
            <li>Reviews and social proof</li>
            <li>Mobile-friendly access</li>
          </ul>

          {/* Persona Card */}
          <div className="cs-persona-card">
            <div className="cs-persona-card__header">
              <h3 className="cs-persona-card__name">Sarah, 26</h3>
              <span className="cs-persona-card__label">Persona Summary</span>
            </div>
            <div className="cs-persona-card__body">
              <div className="cs-persona-card__column">
                <h4 className="cs-persona-card__subtitle">Goals</h4>
                <ul className="cs-user-card__list">
                  <li>Book appointments easily</li>
                  <li>View price lists clearly</li>
                  <li>See client reviews</li>
                  <li>Get inspiration from previous work</li>
                </ul>
              </div>
              <div className="cs-persona-card__column">
                <h4 className="cs-persona-card__subtitle">Pain Points</h4>
                <ul className="cs-user-card__list">
                  <li>No clear pricing online</li>
                  <li>No easy booking system</li>
                  <li>Difficulty finding trusted cosmetologists</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="cs-solution-block__image" style={{ marginTop: '2rem' }}>
           <img className='cs-image-placeholder cs-image-placeholder-aspect-ratio' src={personaCard} alt="Persona card" />
          </div> */}
        </div>
      </section>

      {/* SECTION 3 - DEFINING THE DIRECTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Defining the Direction</h2>
          <p className="cs-section__text">Based on research, I focused on four priorities:</p>
          <ul className="cs-list cs-list--numbered">
            <li>Clear service presentation</li>
            <li>Transparent pricing</li>
            <li>Mobile-first booking experience</li>
            <li>Strong visual identity aligned with the brand</li>
          </ul>
          <p className="cs-section__text">The goal was to create a website that feels:</p>
          <div className="cs-keyword-row">
            <span className="cs-keyword">Elegant</span>
            <span className="cs-keyword">Feminine</span>
            <span className="cs-keyword">Calm</span>
            <span className="cs-keyword">Professional</span>
            <span className="cs-keyword">Trustworthy</span>
          </div>
        </div>
      </section>

      {/* SECTION 4 - VISUAL IDENTITY */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Visual Identity</h2>
          <p className="cs-section__text">
            The visual direction was inspired by the atmosphere of the salon — calm, delicate, and feminine.
          </p>
          <p className="cs-section__text">Design Decisions:</p>
          <ul className="cs-list">
            <li>Pastel pink and soft purple color palette</li>
            <li>Handwritten-style heading font (Dancing Script)</li>
            <li>Elegant serif for secondary headings</li>
            <li>Clean sans-serif for body text</li>
            <li>Rounded buttons to reflect softness</li>
            <li>Soft shadows and gentle contrast</li>
          </ul>
          <div className="cs-solution-block__image cs-images-grid" style={{ marginTop: '2rem' }}>
            <img className='cs-image-placeholder cs-image-placeholder-aspect-ratio cs-CoroB-image' style={{ objectFit: 'fill' }} src={moodboard} alt="Persona card" />
            <img className='cs-image-placeholder cs-image-placeholder-aspect-ratio cs-CoroB-image' style={{ objectFit: 'fill' }} src={styleTile} alt="Persona card" />
          </div>
        </div>
      </section>

      {/* SECTION 5 - THE SOLUTION */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Solution</h2>

          {/* Hero Section */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Hero Section</h3>
              <p className="cs-section__text">
                A strong visual hero image establishes trust and sets the tone for the brand.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={heroSection} alt="Onboarding screen" />
            </div>
          </div>

          {/* Services Section */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Services Section</h3>
              <p className="cs-section__text">
                The services are presented clearly using illustrations, concise titles, and transparent pricing.
              </p>
              <p className="cs-section__text">Design Principles Applied:</p>
              <ul className="cs-list">
                <li>Visual hierarchy</li>
                <li>Proximity</li>
                <li>Similarity</li>
                <li>Color contrast for call-to-action elements</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={servicesSection} alt="Onboarding screen" />
            </div>
          </div>

          {/* Discounts & Promotions */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Discounts &amp; Promotions</h3>
              <p className="cs-section__text">
                To support the client's business goals, I introduced discount cards and monthly offers.
              </p>
              <p className="cs-section__text">This encourages:</p>
              <ul className="cs-list">
                <li>Repeat visits</li>
                <li>Account creation</li>
                <li>Customer loyalty</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={discountSection} alt="Onboarding screen" />
            </div>
          </div>

          {/* Gallery Integration */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Gallery Integration</h3>
              <p className="cs-section__text">The gallery integrates Instagram content to:</p>
              <ul className="cs-list">
                <li>Showcase real results</li>
                <li>Build credibility</li>
                <li>Encourage social engagement</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={gallerySection} alt="Onboarding screen" />
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Testimonials Section</h3>
              <p className="cs-section__text">
                A testimonial section reinforces trust and helps future clients feel confident in booking.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={testimonialsSection} alt="Onboarding screen" />
            </div>
          </div>

          {/* Profile Dashboard */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Profile Dashboard</h3>
              <p className="cs-section__text">
                To enhance personalization, I designed a profile dashboard where users can:
              </p>
              <ul className="cs-list">
                <li>View bookings</li>
                <li>Track appointments</li>
                <li>See discounts</li>
                <li>Manage their account</li>
              </ul>
              <p className="cs-section__text cs-section__text--result">
                This increases engagement and long-term retention.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <img className='cs-image-placeholder' src={profileDashboard} alt="Onboarding screen" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - DEVELOPMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Development</h2>
          <div className="cs-section__text-container-grid cs-solution-block">
            <div className="cs-section__text-container">
              <p className="cs-section__text">The website was built using:</p>
              <ul className="cs-list">
                <li>Semantic HTML5</li>
                <li>CSS3 with custom variables</li>
                <li>JavaScript for interactivity</li>
                <li>Fully responsive design using media queries</li>
              </ul>
            </div>
            <div className="cs-section__text-container">
              <p className="cs-section__text">Key technical highlights:</p>
              <ul className="cs-list">
                <li>Scroll-based navigation color change</li>
                <li>Booking system fetching JSON data</li>
                <li>Responsive layout across devices</li>
                <li>Code validation for clean structure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - MY CONTRIBUTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">My Contribution</h2>
          <ul className="cs-contribution-list">
            <li>Conducted client and user interviews</li>
            <li>Defined target audience and persona</li>
            <li>Created moodboard and style tile</li>
            <li>Designed wireframes and high-fidelity mockups</li>
            <li>Developed fully responsive website</li>
            <li>Implemented interactive features</li>
            <li>Validated code quality</li>
          </ul>
        </div>
      </section>

      {/* SECTION 8 - OUTCOME */}
      <section className="cs-section cs-section--outcome cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Outcome</h2>
          <p className="cs-section__text">The project resulted in:</p>
          <ul className="cs-list">
            <li>A cohesive digital identity</li>
            <li>Improved brand credibility</li>
            <li>Clear presentation of services and pricing</li>
            <li>Enhanced mobile experience</li>
            <li>A scalable foundation for future booking system integration</li>
          </ul>
          <p className="cs-section__text cs-section__text--closing">
            The website transforms CoroBeauty from a social-media-only presence into a structured digital brand.
          </p>
        </div>
      </section>

      {/* FOOTER / CLOSING */}
      <div className="cs-closing cs-animate">
        <div className="cs-closing__inner">
          <a
            href="https://giuliaivan.github.io/CoroBeauty/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Website
          </a>
          <a
            href="https://github.com/GiuliaIvan/CoroBeauty"
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

export default CoroBeautyStudy
