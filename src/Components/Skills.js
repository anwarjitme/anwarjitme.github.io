import React from 'react'
import "./skills.css"
const Skills = () => {
    const skillsData = [
      { link: "/images/HTML.png", tag: "HTML" },
      { link: "/images/CSS.png", tag: "CSS" },
      { link: "/images/JavaScript.png", tag: "JavaScript" },
      { link: "/images/react.png", tag: "React" },
      { link: "/images/redux.png", tag: "Redux" },
      { link: "/images/typescript.png", tag: "TypeScript" },
      { link: "/images/Chakra.png", tag: "Chakra" },
      { link: "/images/nodejs.png", tag: "NodeJS" },
      { link: "/images/mongo.png", tag: "Mongodb" }
    ];
  return (
    <div className="main" id="skills">
      <h1 className='skills-header'>Skills</h1>
      <div className="skills-container" id="skills">
        {skillsData.map((item) => (
          <div className="grid-item">
            <img className="skills-img" src={item.link} alt="item" />
            <h4 className="skills-tag">{item.tag}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills