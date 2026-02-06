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
            I'm a UX-focused Frontend Developer who enjoys working at the
            intersection of <strong style={{ color: "white" }}>design</strong>,{" "}
            <strong style={{ color: "white" }}>technology</strong> and{" "}
            <strong style={{ color: "white" }}>business</strong>.
            <br />
            <br />
            I'm strongest when collaborating closely with designers, developers
            and stakeholders to turn complex requirements into intuitive user
            flows and scalable interfaces. I care deeply about usability,
            information architecture and making sure{" "}
            <strong style={{ color: "white" }}>
              design decisions are grounded in real user needs
            </strong>
            .{/* <br /><br /> */}
            {/* I approach projects with a balance of analytical thinking and
            creativity - from research and ideation to prototyping and
            implementation. Outside of work, teamwork also shows up in my love for volleyball. */}
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
