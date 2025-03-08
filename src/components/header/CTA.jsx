import React from 'react'
// import CV from '../../assets/GiuliaIvanResume.pdf'
// import CV from "../../assets/GiuliaIvanResume1.pdf";
// import CV from "../../assets/GiuliaIvanResume2.pdf";
import CV from "../../assets/GiuliaIvan-Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary">
        Download CV
      </a>
      <a href="#contact" className="btn">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA