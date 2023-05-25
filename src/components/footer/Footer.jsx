import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import { SiLinktree } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        GR8
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/giuli.ivan.20.07">
          <FaFacebookF />
        </a>
        <a href="https://linktr.ee/giuliaivan">
          <SiLinktree />
        </a>
        <a href="https://github.com/GiuliaIvan">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Giulivan_GR8. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer