import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio7.jpg'
import IMG2 from '../../assets/portfolio8.jpg'
import IMG3 from '../../assets/portfolio9.png'
import IMG4 from '../../assets/portfolio10.png'
import IMG5 from '../../assets/portfolio11.jpg'
import IMG6 from '../../assets/portfolio12.png'
import IMG7 from '../../assets/portfolio13.png'
import IMG8 from '../../assets/portfolio14.png'
import IMG9 from '../../assets/portfolio15.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Café Her Og Der - a place defined by coziness & hygge",
    github: "https://github.com/GiuliaIvan/cafeHerOgDer",
    demo: "https://herogder.giuliaivan.website/",
  },

  {
    id: 2,
    image: IMG2,
    title: "Kromosom - a diversity cafe/bar, located in the center of Aarhus",
    github: "https://github.com/GiuliaIvan/kromosom",
    demo: "http://kromosom66.dk/",
  },

  {
    id: 3,
    image: IMG3,
    title: "Waves Web Magazine -  the first year of a student in Denmark",
    github: "https://github.com/GiuliaIvan/wavesWebMagazine",
    demo: "http://waves.eniko.website/",
  },

  {
    id: 4,
    image: IMG4,
    title: "Dorm8s - app design for dorms (mobile only)",
    github: "https://github.com/GiuliaIvan/dorm8s",
    demo: "https://vlkeniko.github.io/dorm8ts.build/",
  },

  {
    id: 5,
    image: IMG5,
    title: "PICit Dispatch view - UX/UI design (desktop only)",
    github:
      "https://xd.adobe.com/view/5fe1536e-ce8d-4ecc-836d-7f124c3a441f-0ab2/",
    demo: "https://xd.adobe.com/view/5fe1536e-ce8d-4ecc-836d-7f124c3a441f-0ab2/",
  },

  {
    id: 6,
    image: IMG6,
    title: "CoroBeauty - cosmetologist website",
    github: "https://github.com/GiuliaIvan/CoroBeauty",
    demo: "https://corobeauty.giuliaivan.website/",
  },

  {
    id: 7,
    image: IMG7,
    title: "Personal JavaScript projects",
    github: "https://github.com/GiuliaIvan/JavaScript-projects",
    demo: "https://giuliaivan.github.io/JavaScript-projects/",
  },

  {
    id: 9,
    image: IMG9,
    title: "Content Creation - Youtube videos",
    github: "https://youtube.com/@giuliaivan202",
    demo: "https://youtube.com/@giuliaivan202",
  },

  {
    id: 8,
    image: IMG8,
    title: "Finde - Grundfos Kollegiet Digital Assistant",
    github:"https://xd.adobe.com/view/f0affcad-3cf4-4f1e-98d4-3b33160dcc0d-a5fc/screen/47c54d60-8d30-4d1b-910d-a934a5391825",
    demo: "https://xd.adobe.com/view/f0affcad-3cf4-4f1e-98d4-3b33160dcc0d-a5fc/screen/47c54d60-8d30-4d1b-910d-a934a5391825",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>from plain ideas...</h5>
      <h2>to GR8 things</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio