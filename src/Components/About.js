import React from "react";
import "./about.css"
const About = () => {
  return (
    <section id="about" className="about section">
      <h1 className="about-tag">About Me</h1>
      <div className="about_container">
        <img
          className="about_img"
          src="https://manojattri.vercel.app/static/media/working1.f1d32db1cbbe55b90885.webp"
          alt="ok"
        />
        <div className="about_text">
          <p id="user-detail-intro">
            I am Result-oriented full-stack web developer, passionate about
            developing user-friendly web applications using latest web
            technologies such as HTML/CSS, JavaScript, Git, NodeJs, JSON, React,
            MongoDB, Express, Redux, Typescript etc. and web development tools
            like Visual Studio Code, GitHub and more.
          <br/>
            I enjoy developing websites and a keen interest in solving problems
            and coming up with effective solutions.
          <br/>
            Eager to be a part of a team which gives me ability to learn and
            grow.
          </p>
       
        </div>
      </div>
    </section>
  );
};

export default About;
