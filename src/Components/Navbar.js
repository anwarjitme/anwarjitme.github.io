import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav_container">
        <div className="navbar_con">
          <ul className="nav_left">
            <div className="nav-logo">
              <img className='logo' src="/images/name_logo.png" alt="nav_logo" />
            </div>
          </ul>
          <ul className='nav_right'>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar