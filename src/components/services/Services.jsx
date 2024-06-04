import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>the question is... what can't I do?</h5>
      <h2>services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Design and Branding</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating UX element interactions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and Mockups of products</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Understanding of user-centered design principles</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ability to translate wireframes and mockups into functional,
                high-performance code
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficiency in design tools like Adobe XD, Figma</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and Mockups of products</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research and Persona Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Information Architecture and Navigation Design</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Website Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend Framework Implementation (React, Lit)</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Asynchronous request handling, partial page updates, and AJAX
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile-first design and development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Git and GitHub</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ability to work closely with designers, backend developers, and
                product managers
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI Design Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Performance Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Compatibility Testing</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Video Editing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Copywriting </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Content Editing</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>I position your company brand</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and mockups of products</p>
            </li> */}
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  );
}

export default Services