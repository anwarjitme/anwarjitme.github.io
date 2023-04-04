import "./home.css";
import React from "react";
import doc from "../resume/myres.pdf";
import git_pic from "../images/github.png";
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
            <h1 id="user-detail-name">Md Hossain</h1>
            <img width="40px" src="/images/Hand_Wave.gif" alt="ok" />
          </div>
         
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=2323A2&width=435&lines=I+am+a+Full+Stack+Web+Developer;Proficient+in+MERN+technology+"
              alt="Typing SVG"
            />
          </a>
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
            <a href="https://github.com/anwarjitme" id="contact-github">
              <img src={git_pic} alt="github" />
            </a>
          </div>
        </div>

        <div className="pic_div">
          <img
            className="home-img"
            src="https://avatars.githubusercontent.com/u/103638817?v=4"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
