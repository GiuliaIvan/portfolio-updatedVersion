import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>what you can get from me</h5>
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
              <p>Design and mockups of products</p>
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
              <p>Frontend Framework Implementation (ReactJS)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface (UI) Design Integration</p>
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