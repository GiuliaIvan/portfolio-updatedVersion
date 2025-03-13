import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio7.jpg";
import IMG2 from "../../assets/portfolio8.jpg";
import IMG3 from "../../assets/portfolio9.png";
import IMG4 from "../../assets/portfolio10.png";
import IMG5 from "../../assets/portfolio11.jpg";
import IMG6 from "../../assets/portfolio12.png";
import IMG7 from "../../assets/portfolio13.png";
import IMG8 from "../../assets/portfolio14.png";
import IMG9 from "../../assets/yt.png";
import IMG10 from "../../assets/maxizoo.png";
import IMG11 from "../../assets/grundfos.png";
import IMG12 from "../../assets/linder.png";

const data = [
  {
    key: 1,
    categories: ["code", "design"],
    tags: [
      "User-centered design",
      "Adobe XD",
      "Photoshop",
      "Video Editing",
      "Content Creation",
      "Mobile-First",
      "HTML",
      "CSS",
      "JavaScript",
      "Usability testing",
    ],
    image: IMG1,
    title: "Café Her Og Der - a place defined by coziness & hygge",
    github: "https://github.com/GiuliaIvan/cafeHerOgDer",
    demo: "https://giuliaivan.github.io/cafeHerOgDer/",
  },
  {
    key: 10,
    categories: "design",
    tags: [
      "B2B",
      "B2C",
      "Digital Concept Development",
      "Usability Testing",
      "Figma",
      "Minimalist aesthetic",
      "Design Thinking framework",
      "User research",
      "UX Thinking",
      "Business Strategy",
    ],
    image: IMG10,
    title: "MaxiZoo - Web Shop",
    github:
      "https://www.figma.com/proto/2G0nRjjbvtFd6cQcSYLRrY/MaxiZoo?node-id=2-848&p=f&t=kYtTyXW4flYeS3Zh-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A14",
    demo: "https://www.figma.com/proto/2G0nRjjbvtFd6cQcSYLRrY/MaxiZoo?node-id=2-848&p=f&t=kYtTyXW4flYeS3Zh-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A14",
  },
  {
    key: 11,
    categories: "design",
    tags: [
      "Business Strategy",
      "User Research",
      "UX Thinking",
      "Strategic Mindset",
      "Design Thinking",
      "Figma",
      "Digital Concept Development",
      "Tailored content",
      "Innovative solution",
      "Information Architecture",
    ],
    image: IMG11,
    title: "Grundfos - Eacademy Redesign",
    github:
      "https://www.figma.com/proto/BHVMoDYG6TU6dLBVXws7Ml/Prototype-we-can-use?node-id=187-5579&p=f&t=MBwy0nDvyUDnZHKk-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=273%3A5526",
    demo: "https://www.figma.com/proto/BHVMoDYG6TU6dLBVXws7Ml/Prototype-we-can-use?node-id=187-5579&p=f&t=MBwy0nDvyUDnZHKk-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=273%3A5526",
  },
  {
    key: 5,
    categories: "design",
    tags: [
      "B2B",
      "Information Architecture",
      "SaaS",
      "User Research",
      "UX Thinking",
      "Figma",
    ],
    image: IMG5,
    title: "PICit Dispatch view - UX/UI design (desktop only)",
    github:
      "https://xd.adobe.com/view/5fe1536e-ce8d-4ecc-836d-7f124c3a441f-0ab2/",
    demo: "https://xd.adobe.com/view/5fe1536e-ce8d-4ecc-836d-7f124c3a441f-0ab2/",
  },
  {
    key: 6,
    categories: ["code", "design"],
    tags: [
      "Design Thinking approach",
      "User Research",
      "UX Thinking",
      "Minimalist aesthetic",
      "Figma",
      "HTML",
      "CSS",
      "JavaScript",
      "JSON",
    ],
    image: IMG6,
    title: "CoroBeauty - cosmetologist website",
    github: "https://github.com/GiuliaIvan/CoroBeauty",
    demo: "https://giuliaivan.github.io/CoroBeauty/",
  },
  {
    key: 12,
    categories: "code",
    tags: [
      "Figma",
      "B2B",
      "B2C",
      "User Research",
      "Digital Concept Development",
      "Innovative solution",
      "Usability Testing",
      "Tailored content",
      "Tailwind",
      "React",
    ],
    image: IMG12,
    title: "Linder Startup idea - Tinder merged with LinkedIn ( Mobile Only )",
    github: "https://github.com/tracytratran/linder",
    demo: "https://linderwebapp.netlify.app/",
  },
  {
    key: 2,
    categories: ["code", "design"],
    tags: [
      "Design Thinking",
      "User Research",
      "UX Thinking",
      "Business Strategy",
      "Content creation",
      "Illustrations",
      "Photoshop",
      "Adobe XD",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: IMG2,
    title: "Kromosom - a diversity cafe/bar, located in the center of Aarhus",
    github: "https://github.com/GiuliaIvan/kromosom",
    demo: "https://kromosom.netlify.app/",
  },
  {
    key: 3,
    categories: ["code", "design", "content"],
    tags: [
      "Adobe XD",
      "HTML",
      "CSS",
      "JavaScript",
      "PremierePro",
      "Content creation",
      "Video editing",
      "Storytelling",
      "Adobe Illustrator"
    ],
    image: IMG3,
    title: "Waves Web Magazine - student life in Denmark",
    github: "https://github.com/GiuliaIvan/wavesWebMagazine",
    demo: "https://waveswebmagazine.netlify.app/",
  },
  {
    key: 4,
    categories: ["code", "design"],
    tags: ["User Research", "Digital Concept", "Figma", "React", "Firebase"],
    image: IMG4,
    title: "Dorm8s - app design for dorms (mobile only)",
    github: "https://github.com/GiuliaIvan/dorm8s",
    demo: "https://vlkeniko.github.io/dorm8ts.build/",
  },
  {
    key: 9,
    categories: "content",
    tags: ["PremierePro", "Content Creation", "Storytelling", "Video Editing"],
    image: IMG9,
    title: "Content Creation - YouTube videos",
    github: "https://youtube.com/@giuliaivan202",
    demo: "https://youtube.com/@giuliaivan202",
  },
  {
    key: 7,
    categories: "code",
    tags: ["HTML", "CSS", "JavaScript", "JSON", "API", "Firebase"],
    image: IMG7,
    title: "Personal JavaScript projects",
    github: "https://github.com/GiuliaIvan/JavaScript-projects",
    demo: "https://giuliaivan.github.io/JavaScript-projects/",
  },
  {
    key: 8,
    categories: "design",
    tags: [
      "Adobe XD",
      "User Research",
      "UX Thinking",
      "Digital Concept",
    ],
    id: "hiddenButton",
    image: IMG8,
    title: "Finde - Grundfos Kollegiet Digital Assistant",
    github:
      "https://xd.adobe.com/view/f0affcad-3cf4-4f1e-98d4-3b33160dcc0d-a5fc/screen/47c54d60-8d30-4d1b-910d-a934a5391825",
    demo: "https://xd.adobe.com/view/f0affcad-3cf4-4f1e-98d4-3b33160dcc0d-a5fc/screen/47c54d60-8d30-4d1b-910d-a934a5391825",
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? data
      : data.filter((project) => project.categories.includes(selectedCategory));

  return (
    <section id="portfolio">
      <h5>from plain ideas...</h5>
      <h2>to GR8 solutions</h2>

      {/* Dropdown Filter */}
      <div className="portfolio__filter">
        <label htmlFor="filter">Filter by: </label>
        <select
          id="filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="code">Code</option>
          <option value="design">Design</option>
          <option value="content">Content Creation</option>
        </select>
      </div>

      <div className="container portfolio__container">
        {filteredProjects.map(
          ({ key, image, title, tags, categories, github, demo }) => (
            <article key={key} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__tags">
                {tags.map((tag, index) => (
                  <span key={index} className="portfolio__tag">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="portfolio__item-cta">
                {categories.includes("code") && github && (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
