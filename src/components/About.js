import React from 'react';
import "aos/dist/aos.css";

/*const titles = [
    'Web Developer',
    'Web Designer',
    'Web Enthusiast'
];*/

function About() {
    

    return (
      <div className="about">
        <h2>Introduction</h2>
        <div data-aos="fade-right" className="abo about-section1">
            <p>
              I've been coding since 2017. College began to teach
              me a decent amount of basics in C++, from varialbes to higher level algorithms.
              I started talking to everyone I knew who knew code about code.
            </p>
        </div>
        <div data-aos="fade-left" className="abo about-section2">
            <p>
              Through networking amongst my peers & self-teaching
              web development, I  acquired my first front-end contract in 2020.
              Although short, I had learned alot about how web developing agencies run day to day.
            </p>
        </div>
        <div data-aos="fade-right" className="abo about-section3">
            <p>
              I have widely extended my learning of programming ever since,
              while falling in love with web development, especially with React and WordPress,
              I dive deeper into technologies based on solving our everyday problems faster.
            </p>
        </div>
      </div>
    );
  }
  
  export default About;