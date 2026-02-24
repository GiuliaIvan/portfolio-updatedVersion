import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { FaRegFolderOpen } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setActiveNav(sectionId);
    if (sectionId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(sectionId.substring(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section");
      let currentSection = "#";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollY >= sectionTop - 50 &&
          scrollY < sectionTop + sectionHeight - 50
        ) {
          currentSection = `#${section.id}`;
        }
      });

      const contactSection = document.querySelector("#contact");
      if (
        contactSection &&
        scrollY >= contactSection.offsetTop - contactSection.clientHeight
      ) {
        currentSection = "#contact";
      }

      setActiveNav(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={(e) => scrollToSection(e, "#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={(e) => scrollToSection(e, "#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={(e) => scrollToSection(e, "#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={(e) => scrollToSection(e, "#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={(e) => scrollToSection(e, "#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FaRegFolderOpen />
      </a>
      <a
        href="#contact"
        onClick={(e) => scrollToSection(e, "#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
