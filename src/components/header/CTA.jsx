import React from 'react'
// import CV from '../../assets/GiuliaIvanResume.pdf'
// import CV from "../../assets/GiuliaIvanResume1.pdf";
// import CV from "../../assets/GiuliaIvanResume2.pdf";
import CV from "../../assets/GiuliaIvan-Resume2026.pdf";

const CTA = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary">
        Download CV
      </a>
      <a href="#contact" onClick={scrollToContact} className="btn">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA