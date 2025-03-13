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
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                UX Thinking - customer journey mapping and user-centered design
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                User Research - analyze user needs and conduct usability testing
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Digital Concept Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping - skills in Figma</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Information Architecture</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Business & Strategic Mindset - align solutions with business
                goals and data insights
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design Thinking</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Emerging Technologies - integrate AI, AR/VR</p>
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
              <p>Responsive Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend Frameworks</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Asynchronous Processing
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile-first Approach</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframe to code</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-Team Collaboration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI Design Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance Optimization</p>
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
};

export default Services;
