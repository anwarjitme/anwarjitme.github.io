import React from "react";
import "./about.css"
const About = () => {
  return (
    <section  id="about" class="about section">
      <h1 className="about-tag">About Me</h1>
      <div className="about_container">
        <img
          className="about_img"
          src="https://manojattri.vercel.app/static/media/working1.f1d32db1cbbe55b90885.webp"
          alt="ok"
        />
        <div className="about_text">
          <h3>
            I am Result-oriented full-stack web developer, passionate about
            developing user-friendly web applications using MERN Stack.
          </h3>
          <h3>
            I enjoy developing websites and a keen interest in solving problems
            and coming up with effective solutions.
          </h3>
          <h3>
            Eager to be a part of a team which gives me ability to learn and
            grow.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
