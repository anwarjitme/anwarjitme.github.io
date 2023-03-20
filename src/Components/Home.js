import "./home.css";
import React from "react";
// import Typewriter from "typewriter-effect";
// import { Container } from "@chakra-ui/react";
const Home = () => {
  return (
    <div id="home">
      <div className="profile_container">
        <div className="name_div">
          <h4 className="hi-tag">Hi, I am</h4>
          <div style={{ display: "flex", margin: "auto" }}>
            <h2 className="name">Md Hossain</h2>
            <img width="40px" src="/images/Hand_Wave.gif" alt="ok" />
          </div>
          <h4 className="hi-tag">I am a</h4>
          <h4 className="typewriter">
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
          <div className="btn_div">
            <a
              className="resume-a"
              href="https://drive.google.com/file/d/1_FqquLd5QgH_3y5PTL3fLk1HCuhADugB/view"
            >
              My Resume
            </a>
            <a className="resume-a" href="https://github.com/anwarjitme">
              GitHub
            </a>

          </div>
        </div>

        <div className="pic_div">
          <img
            className="profile_pic"
            src="/images/profile_photo.jpg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
