import React, { useState } from 'react'
import "./navbar.css"

const Navbar = () => {
    const [isScreen, setScreen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav_container">
        <div className="navbar_con">
          <ul className="nav_left">
            <div className="nav-logo">
              <img
                className="logo"
                src="/images/name_logo.png"
                alt="nav_logo"
              />
            </div>
          </ul>
          <ul className={isScreen ? "mobile_nav" : "nav_right"}>
            <li className="li_home">
              <a href="#home">Home</a>
            </li>
            <li className="li_about">
              <a href="#about">About Me</a>
            </li>
            <li className="li_skills">
              <a href="">Skills</a>
            </li>
            <li className="li_projects">
              <a href="">Projects</a>
            </li>
            <li className="li_contact">
              <a href="">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
      <button className="menu_button">
        {isScreen ? "menu" : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
}

export default Navbar