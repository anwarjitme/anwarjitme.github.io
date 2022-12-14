import "./home.css"
import React from 'react'
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="top-home" id="home">
      <div className="profile_container">
        <div className="name_div">
          <h4>Hi, I am</h4>
          <div style={{ display: "flex", margin: "auto" }}>
            <h2 className="name">Md Hossain</h2>
            <img width="40px" src="/images/Hand_Wave.gif" alt="ok" />
          </div>
          <h4>I am a</h4>
          <h4>
            <Typewriter
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
            />
          </h4>
          <div></div>
          <div className="btn_div">
            <button className="btn_">My Resume</button>
            <button className="btn_">GitHub</button>
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
}

export default Home