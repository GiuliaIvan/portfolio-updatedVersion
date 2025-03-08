import React from "react";
import "./about.css";
import ME from "../../assets/me-about2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>hey, it's not always...</h5>
      <h2>about me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4.5+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>11+ in Europe</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Projects</small>
            </article>
          </div>

          <p>
            {/* I'm a Frontend developer and Designer who helps people materialize their dream into a
            beautiful, hands-on prototype. Creative, insightful and passionate
            about writing, videography and volley. */}
            Beyond the technical side,{" "}
            <strong style={{ color: "white" }}>teamwork</strong> and{" "}
            <strong style={{ color: "white" }}>creative problem-solving</strong>{" "}
            are my strengths. Whether it's brainstorming concepts, refining
            designs, or finding the perfect balance between aesthetics and
            functionality, I believe great ideas are shaped through{" "}
            <strong style={{ color: "white" }}>collaboration.</strong> Maybe
            that’s why I love volleyball so much hm...<strong style={{ color: "white" }}>🤔🏐</strong>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
