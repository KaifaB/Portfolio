import React from 'react';
import logo from "../img/logo.png"

function Header( props ) {
    return (
      <div className="header">
          <div className="my-logo">
            <img src={logo} id="logo" alt="logo" />
          </div>
          <div className="nav">
              <ul>
                <a href="#section-1"><li>Intro</li></a>
                <a href="#section-2"><li>Languages</li></a>
                <a href="#section-3"><li>Projects</li></a>
                <a href="#section-4"><li>Contact</li></a>
                <a className="resume" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1U9mdplQzJcpJkobY3zezmPyRJyVLPJjakVmoIuT24g0/edit?usp=sharing"><li>Resume</li></a>
              </ul>
          </div>
      </div>
    );
  }
  
  export default Header;