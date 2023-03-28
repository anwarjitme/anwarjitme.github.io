import "./home.css";
import React from "react";
import doc from "../resume/myres.pdf";
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
          <h4 id="user-detail-intro">FUll Stack Web Developer</h4>
          <div className="btn_div" id="resume-button-2">
            <a
              className="resume-a "
              id="resume-link-2"
              href="/images/Md-Hossain-Resume.pdf"
              onClick={handleadd}
              download={"fw19_0076-Md_Hossain"}
            >
              My Resume
            </a>
            <a
              className="resume-a "
              id="contact-github"
              href="https://github.com/anwarjitme"
            >
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
