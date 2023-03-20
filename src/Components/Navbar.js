import React, { useState } from 'react'
import "./navbar.css"
const Navbar = () => {
    const [isScreen, setScreen] = useState(false);

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
            <li className="li_home">
              <a href="#home">Home</a>
            </li>
            <li className="li_about">
              <a href="#about">About</a>
            </li>
            <li className="li_skills">
              <a href="#skills">Skills</a>
            </li>
            <li className="li_projects">
              <a href="#projects">Projects</a>
            </li>
            <li className="li_contact">
              <a href="#contact">Contact</a>
            </li>
            <li className="li_contact">
              <a href="/images/Md-Hossain-Resume.pdf" download>
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