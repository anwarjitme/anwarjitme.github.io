import "./contact.css";
import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h3 className="contact-header">
        Contact <small className="get-touch">Get in touch</small>
      </h3>
      <div className="contact-container">
        <div className="left">
          <div className="left-card">
            <div className="card-up">
              <img src="/images/ph.png" alt="ph" />
              <h3>Phone :</h3>
            </div>
            <h3 className="card-down" id="contact-phone">
              +918617600838
            </h3>
          </div>
          <div className="left-card">
            <div className="card-up">
              <img src="/images/email.png" alt="ph" />
              <h3>Email :</h3>
            </div>
            <h3 id="contact-email" className="card-down">
              er.mdhossain@gmail.com
            </h3>
          </div>
          <div className="left-card">
            <div className="card-up">
              <img src="/images/location.png" alt="ph" />
              <h3>Location :</h3>
            </div>
            <h3 className="card-down">Malda, West Bengal</h3>
          </div>

          <div className="git_in">
            <a href="https://github.com/anwarjitme" id="contact-github">
              Github
            </a>
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/md-anwar-hossain1/"
            >
           Linkedin
            </a>
          </div>
        </div>
        <div className="right">
          <form className="form">
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email" />
            <input type="text" placeholder="Enter your mobile no" />
            <input
              className="message_box"
              type="text"
              placeholder="Enter your message"
            />
            <button id="connect-btn" className="btn" type="submit">
              Let's connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
