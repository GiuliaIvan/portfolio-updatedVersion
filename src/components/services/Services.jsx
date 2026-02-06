import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>the question is... what can't I do?</h5>
      <h2>services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UX & Product Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing clear user journeys and flows based on real user needs
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Structuring information to reduce complexity and improve
                usability
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating wireframes and high-fidelity prototypes in Figma</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducting usability testing and iterating based on feedback
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Aligning design decisions with business goals and constraints
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Powering productivity with emerging technologies
              </p>
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
              <p>Building responsive, mobile-first interfaces</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Translating designs into clean, maintainable frontend code</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating UI logic with asynchronous data flows</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimizing performance and accessibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborating closely with designers and backend developers</p>
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
              <p>UX copywriting for interfaces</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content structuring and clarity</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual storytelling for digital products</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  );
};

export default Services;
