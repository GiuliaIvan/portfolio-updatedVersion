import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './grundfos-study.css'
import heroImage from '../../assets/portfolio8.jpg'

const KromosomStudy = () => {
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
          <h1 className="cs-hero__title">Kromosom</h1>
          <p className="cs-hero__subtitle">
            Designing a digital presence for an inclusive caf&eacute;-bar in Aarhus.
          </p>
          <p className="cs-hero__description">
            A bilingual website built to increase visibility, expand the audience, and translate the physical atmosphere of Kromosom into a digital experience.
          </p>
          <div className="cs-hero__meta">
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX Research &middot; UI Design &middot; Frontend Development</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">5 Designers</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">Spring 2022</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="cs-meta-label">Stack</span>
              <span className="cs-meta-value">HTML &middot; CSS &middot; JavaScript</span>
            </div>
          </div>
        </div>
        <div className="cs-hero__image cs-animate">
          <img src={heroImage} alt="Kromosom website and brand overview" />
        </div>
      </header>

      {/* SECTION 1 - THE CHALLENGE */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Challenge</h2>
          <p className="cs-section__text">
            Kromosom is a welcoming LGBTQ+ caf&eacute;-bar in Aarhus with a strong community presence but limited digital visibility.
          </p>
          <p className="cs-section__text">
            Despite its vibrant atmosphere and loyal audience, the business faced several challenges:
          </p>
          <ul className="cs-list">
            <li>No website presence</li>
            <li>Limited discoverability on search engines</li>
            <li>Communication only in Danish</li>
            <li>Difficulty attracting international visitors and students</li>
            <li>Underutilized daytime caf&eacute; concept</li>
          </ul>
          <p className="cs-section__text">
            The bar was deeply meaningful in physical space — but almost invisible online.
          </p>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <div className="cs-highlight-card">
            <p className="cs-highlight-text">
              "How might we design a digital platform that increases Kromosom's online visibility, attracts a broader audience, and communicates its inclusive atmosphere beyond physical space?"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - UNDERSTANDING THE USERS */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Understanding the Users</h2>
          <p className="cs-section__text">
            Through interviews with owners, regular customers, and students, we identified two core user groups.
          </p>
          <div className="cs-cards-grid">
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Community Visitors</h3>
              <span className="cs-user-card__label">Primary Audience</span>
              <ul className="cs-user-card__list">
                <li>Young LGBTQ+ individuals (18&ndash;25)</li>
                <li>Seek safe, inclusive spaces</li>
                <li>Attend events and nightlife</li>
                <li>Value community and belonging</li>
              </ul>
            </div>
            <div className="cs-user-card">
              <h3 className="cs-user-card__title">Students</h3>
              <span className="cs-user-card__label">Daytime Caf&eacute; Audience</span>
              <ul className="cs-user-card__list">
                <li>University students (20&ndash;30)</li>
                <li>Looking for calm study environments</li>
                <li>Motivated by affordable coffee offers</li>
                <li>Open to inclusive environments</li>
              </ul>
            </div>
          </div>
          <div className="cs-insight">
            <span className="cs-insight__label">Key Insight</span>
            <p className="cs-insight__text">
              Kromosom is more than a bar — it is a safe space. The digital experience must communicate warmth, diversity, and community.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - DEFINING THE DIRECTION */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Defining the Direction</h2>
          <p className="cs-section__text">We focused on four priorities:</p>
          <ul className="cs-list cs-list--numbered">
            <li>Increase online visibility through SEO</li>
            <li>Introduce bilingual content (Danish &amp; English)</li>
            <li>Highlight both caf&eacute; (day) and bar (night) identities</li>
            <li>Translate physical atmosphere into digital storytelling</li>
          </ul>
          <p className="cs-section__text">The goal was to create a website that feels:</p>
          <div className="cs-keyword-row">
            <span className="cs-keyword">Welcoming</span>
            <span className="cs-keyword">Colourful</span>
            <span className="cs-keyword">Retro</span>
            <span className="cs-keyword">Community-driven</span>
            <span className="cs-keyword">Inclusive</span>
          </div>
        </div>
      </section>

      {/* SECTION 4 - VISUAL IDENTITY */}
      <section className="cs-section cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Visual Identity</h2>
          <p className="cs-section__text">
            The visual direction was inspired directly by Kromosom's interior and values.
          </p>
          <p className="cs-section__text">Design choices included:</p>
          <ul className="cs-list">
            <li>Rainbow-inspired color palette</li>
            <li>Warm retro tones</li>
            <li>Bold typography reflecting personality</li>
            <li>Playful but respectful tone</li>
            <li>Emphasis on the "Person" symbol and slogan "Den du er" (Whoever you are)</li>
          </ul>
          <p className="cs-section__text">
            The aesthetic needed to balance community warmth with visual boldness.
          </p>
          <div className="cs-solution-block__image" style={{ marginTop: '2rem' }}>
            <div className="cs-image-placeholder">
              <span>Moodboard</span>
            </div>
            <div className="cs-image-placeholder">
              <span>Final Style Tile</span>
            </div>
            <div className="cs-image-placeholder">
              <span>Logo &amp; Iconography</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - THE SOLUTION */}
      <section className="cs-section cs-section--solution cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">The Solution</h2>

          {/* Home & Atmosphere */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Home &amp; Atmosphere</h3>
              <p className="cs-section__text">
                The homepage introduces Kromosom through immersive visuals, storytelling, and strong brand presence.
              </p>
              <p className="cs-section__text cs-section__text--result">
                The goal: Immediately communicate inclusivity and personality.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Homepage Screenshot</span>
              </div>
            </div>
          </div>

          {/* Events & Community */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Events &amp; Community</h3>
              <p className="cs-section__text">
                Events are central to Kromosom's identity.
              </p>
              <p className="cs-section__text">The website:</p>
              <ul className="cs-list">
                <li>Clearly presents upcoming events</li>
                <li>Emphasizes community participation</li>
                <li>Maintains playful visual tone</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Events Page Screenshot</span>
              </div>
            </div>
          </div>

          {/* Café vs Bar Identity */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Caf&eacute; vs Bar Identity</h3>
              <p className="cs-section__text">
                Kromosom operates as a study caf&eacute; during the day and a bar at night.
              </p>
              <p className="cs-section__text">We reflected this dual identity through:</p>
              <ul className="cs-list">
                <li>Separate menu sections</li>
                <li>Visual differentiation</li>
                <li>Interactive playlist elements</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Caf&eacute; / Bar Split Screenshot</span>
              </div>
            </div>
          </div>

          {/* Community & Story */}
          <div className="cs-solution-block cs-solution-block--reverse cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Community &amp; Story</h3>
              <p className="cs-section__text">The "About" section communicates:</p>
              <ul className="cs-list">
                <li>Mission and values</li>
                <li>Safe space philosophy</li>
                <li>Personal storytelling</li>
                <li>Owner-driven authenticity</li>
              </ul>
              <p className="cs-section__text cs-section__text--result">
                This reinforces emotional connection.
              </p>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>About Page Screenshot</span>
              </div>
            </div>
          </div>

          {/* Multilingual Accessibility */}
          <div className="cs-solution-block cs-animate">
            <div className="cs-solution-block__text">
              <h3 className="cs-solution-block__title">Multilingual Accessibility</h3>
              <p className="cs-section__text">The site supports both Danish and English.</p>
              <p className="cs-section__text">This decision:</p>
              <ul className="cs-list">
                <li>Expands accessibility</li>
                <li>Attracts international students</li>
                <li>Supports inclusivity</li>
              </ul>
            </div>
            <div className="cs-solution-block__image">
              <div className="cs-image-placeholder">
                <span>Language Toggle</span>
              </div>
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
                <li>Semantic HTML structure</li>
                <li>Modular CSS files</li>
                <li>JavaScript for interaction</li>
                <li>Responsive design (mobile-first)</li>
                <li>SEO optimization</li>
                <li>Performance validation</li>
              </ul>
            </div>
            <div className="cs-section__text-container">
              <p className="cs-section__text">Key implemented features:</p>
              <ul className="cs-list">
                <li>Animated loading screen</li>
                <li>Interactive event gallery</li>
                <li>Playlist toggle (Day/Night mode)</li>
                <li>Embedded Google Maps &amp; Spotify</li>
                <li>Language switching</li>
                <li>Responsive navigation</li>
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
            <li>Conducted desk research and netnography</li>
            <li>Interviewed owners and customers</li>
            <li>Contributed to user personas</li>
            <li>Developed Business Model &amp; Value Proposition analysis</li>
            <li>Designed moodboard and style direction</li>
            <li>Built playlist page (HTML/CSS/JS)</li>
            <li>Implemented footer interactivity</li>
            <li>Performed validation and testing</li>
          </ul>
        </div>
      </section>

      {/* SECTION 8 - OUTCOME */}
      <section className="cs-section cs-section--outcome cs-animate">
        <div className="cs-section__inner">
          <h2 className="cs-section__heading">Outcome</h2>
          <p className="cs-section__text">The digital solution:</p>
          <ul className="cs-list">
            <li>Increased online discoverability</li>
            <li>Expanded audience accessibility through bilingual content</li>
            <li>Reinforced brand identity</li>
            <li>Communicated the bar's mission and inclusivity</li>
            <li>Supported both nightlife and study audiences</li>
          </ul>
          <p className="cs-section__text cs-section__text--closing">
            The website transforms Kromosom from a local community hub into a visible digital brand.
          </p>
        </div>
      </section>

      {/* FOOTER / CLOSING */}
      <div className="cs-closing cs-animate">
        <div className="cs-closing__inner">
          <a
            href="https://kromosom.netlify.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Website
          </a>
          <a
            href="https://github.com/GiuliaIvan/kromosom"
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

export default KromosomStudy
