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
              <p>I develop the user interface</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web page development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I create ux element interactions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I position your company brand</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and mockups of products</p>
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
              <p>I develop the user interface</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web page development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I create ux element interactions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I position your company brand</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and mockups of products</p>
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
              <p>I develop the user interface</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web page development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I create ux element interactions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I position your company brand</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and mockups of products</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  );
}

export default Services