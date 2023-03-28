import React, { useState } from 'react'
import "./navbar.css"
import doc from "../resume/myres.pdf"
const Navbar = () => {
    const [isScreen, setScreen] = useState(false);

    const handleadd = ()=>{
      window.open(doc,"_blank")
    }

  return (
    <nav id="nav-menu">
      <div className="nav_container">
        <div className="navbar_con">
          <ul className="nav_left">
            <div className="nav-logo">
              <img className="logo" src="/images/logo.png" alt="nav_logo" />
            </div>
          </ul>
          <ul
            className={isScreen ? "mobile_nav" : "nav_right"}
            onClick={() => {
              setScreen(false);
            }}
          >
            <li className="li_home" class="nav-link home">
              <a href="#home">Home</a>
            </li>
            <li className="li_about" class="nav-link about">
              <a href="#about">About</a>
            </li>
            <li className="li_skills" class="nav-link skills">
              <a href="#skills">Skills</a>
            </li>
            <li className="li_projects" class="nav-link projects">
              <a href="#projects">Projects</a>
            </li>
            <li className="li_contact" class="nav-link contact">
              <a href="#contact">Contact</a>
            </li>
            <li
              className="li_contact"
              id="resume-button-1"
              class="nav-link resume"
            >
              <a
                id="resume-link-1"
                href="/images/Md-Hossain-Resume.pdf" 
                download={"fw19_0076-Md_Hossain"}
                onClick={handleadd}
              >
                My Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button
        className="mobile-menu-icon"
        onClick={() => {
          setScreen(!isScreen);
        }}
      >
        {isScreen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}
export default Navbar