import React, { useState } from 'react'
import "./navbar.css"
import doc from "../resume/myres.pdf"
const Navbar = () => {
    const [isScreen, setScreen] = useState(false);

    function handleadd(){
      window.open("https://drive.google.com/drive/u/1/my-drive","_blank");
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
            <li className="li_contact" class="nav-link resume">
              <button
                id="resume-button-1"
                onClick={handleadd}
                style={{ backgroundColor: "#000000", border: "none" }}
              >
                <a
                  id="resume-link-1"
                  href={doc}
                  download="Md_Hossain_Resume"
                  target="_blank"
                  rel="noreferrer"
             
                >
                  My Resume
                </a>
              </button>
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