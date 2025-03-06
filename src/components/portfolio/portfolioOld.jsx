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
import IMG10 from '../../assets/maxizoo.png'
import IMG11 from '../../assets/grundfos.png'
import IMG12 from '../../assets/linder.png'

const data = [
  {
    key: 1,
    image: IMG1,
    title: "Café Her Og Der - a place defined by coziness & hygge",
    github: "https://github.com/GiuliaIvan/cafeHerOgDer",
    demo: "https://giuliaivan.github.io/cafeHerOgDer/",
  },

  {
    key: 10,
    id: "hiddenButton",
    image: IMG10,
    title: "MaxiZoo - Web Shop",
    github:
      "https://www.figma.com/proto/2G0nRjjbvtFd6cQcSYLRrY/MaxiZoo%2B?node-id=2-848&t=Yr4xFcASShbbtzUp-1",
    demo: "https://www.figma.com/proto/2G0nRjjbvtFd6cQcSYLRrY/MaxiZoo%2B?node-id=2-848&t=Yr4xFcASShbbtzUp-1",
  },

  {
    key: 11,
    id: "hiddenButton",
    image: IMG11,
    title: "Grundfos - Eacademy Redesign",
    github:
      "https://www.figma.com/proto/a9lE5fFsqr9T0KCX21EiIz/Prototype?node-id=187-5579&t=ulFiY5ItBpThKueJ-1",
    demo: "https://www.figma.com/proto/a9lE5fFsqr9T0KCX21EiIz/Prototype?node-id=187-5579&t=ulFiY5ItBpThKueJ-1",
  },

  {
    key: 5,
    id: "hiddenButton",
    image: IMG5,
    title: "PICit Dispatch view - UX/UI design (desktop only)",
    github:
      "https://xd.adobe.com/view/5fe1536e-ce8d-4ecc-836d-7f124c3a441f-0ab2/",
    demo: "https://xd.adobe.com/view/5fe1536e-ce8d-4ecc-836d-7f124c3a441f-0ab2/",
  },

  {
    key: 6,
    image: IMG6,
    title: "CoroBeauty - cosmetologist website",
    github: "https://github.com/GiuliaIvan/CoroBeauty",
    demo: "https://giuliaivan.github.io/CoroBeauty/",
  },

  {
    key: 12,
    image: IMG12,
    title:
      "Linder Startup idea - Tinder merged with LinkedIn to create business connections",
    github: "https://github.com/tracytratran/linder",
    demo: "https://github.com/tracytratran/linder",
  },

  {
    key: 2,
    image: IMG2,
    title: "Kromosom - a diversity cafe/bar, located in the center of Aarhus",
    github: "https://github.com/GiuliaIvan/kromosom",
    demo: "http://kromosom66.dk/",
  },

  {
    key: 3,
    image: IMG3,
    title: "Waves Web Magazine -  the first year of a student in Denmark",
    github: "https://github.com/GiuliaIvan/wavesWebMagazine",
    demo: "http://waves.eniko.website/",
  },

  {
    key: 4,
    image: IMG4,
    title: "Dorm8s - app design for dorms (mobile only)",
    github: "https://github.com/GiuliaIvan/dorm8s",
    demo: "https://vlkeniko.github.io/dorm8ts.build/",
  },

  {
    key: 7,
    image: IMG7,
    title: "Personal JavaScript projects",
    github: "https://github.com/GiuliaIvan/JavaScript-projects",
    demo: "https://giuliaivan.github.io/JavaScript-projects/",
  },

  {
    key: 9,
    id: "hiddenButton",
    image: IMG9,
    title: "Content Creation - Youtube videos",
    github: "https://youtube.com/@giuliaivan202",
    demo: "https://youtube.com/@giuliaivan202",
  },

  {
    key: 8,
    id: "hiddenButton",
    image: IMG8,
    title: "Finde - Grundfos Kollegiet Digital Assistant",
    github:
      "https://xd.adobe.com/view/f0affcad-3cf4-4f1e-98d4-3b33160dcc0d-a5fc/screen/47c54d60-8d30-4d1b-910d-a934a5391825",
    demo: "https://xd.adobe.com/view/f0affcad-3cf4-4f1e-98d4-3b33160dcc0d-a5fc/screen/47c54d60-8d30-4d1b-910d-a934a5391825",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>from plain ideas...</h5>
      <h2>to GR8 solutions</h2>
      <div className="container portfolio__container">
        {
          data.map(({key, id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' id={id} target='_blank' rel='noreferrer'>GitHub</a>
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