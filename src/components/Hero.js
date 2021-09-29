import React from 'react';
import hero from '../img/development.png';

function Hero() {
    

    return (
      <div className="hero">
        <h2>Hello World,</h2>
        <div className="hero-flex">
          <img src={hero} alt="development" id="development" />
          <div className="intro">
              <h4>My name is</h4>
              <h1>Kaifa Best</h1>
              <div classname="typewriter">
                <h3 id="title">Web Developer</h3>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;