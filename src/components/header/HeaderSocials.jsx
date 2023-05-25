import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FiInstagram } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/giulia-ivan-let-601a9121b"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/GiuliaIvan" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/giuli_ivan/"
        rel="noreferrer"
        target="_blank"
      >
        <FiInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials