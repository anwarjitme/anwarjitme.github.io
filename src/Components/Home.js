import "./home.css";
import React from "react";
import doc from "../resume/myres.pdf";
// import Typewriter from "typewriter-effect";
// import { Container } from "@chakra-ui/react";
const Home = () => {
   const handleadd = () => {
     window.open(doc, "_blank");
   };
  return (
    <div id="home">
      <div className="profile_container">
        <div className="name_div">
          <h4 className="hi-tag">Hi, I am</h4>
          <div style={{ display: "flex", margin: "auto" }}>
            <h2 id="user-detail-name">Md Hossain</h2>
            <img width="40px" src="/images/Hand_Wave.gif" alt="ok" />
          </div>
          <h4 className="hi-tag">I am a</h4>
          <h4 id="user-detail-intro">
            FUll Stack Web Developer
            {/* <Typewriter
              className="typewriter"
              onInit={(typewriter) => {
                typewriter

                  .typeString("MERN Stack Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Front-end Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Back-end Developer")
                  .start()
                  .pauseFor(1000)
                  .start();
              }}
            /> */}
          </h4>
          <div className="btn_div" id="resume-button-2">
            <a
              id="resume-link-2"
              href="/images/Md-Hossain-Resume.pdf"
              download={"fw19_0076-Md_Hossain"}
              onClick={handleadd}
            >
              My Resume
            </a>
            <a id="contact-github" href="https://github.com/anwarjitme">
              GitHub
            </a>
          </div>
        </div>

        <div className="pic_div">
          <img
            className="home-img"
            src="/images/profile_photo.jpg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
