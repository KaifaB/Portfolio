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
              I have been coding since 2017. College taught me 
              a great amount of basics in C++, from variables to higher level algorithms.
              I started talking to everyone who knew programming about programming.
            </p>
        </div>
        <div data-aos="fade-left" className="abo about-section2">
            <p>
              Through networking, I acquired my first front-end contract in 2020.
              Although short, I learned a lot about how web developing agencies run day to day.
            </p>
        </div>
        <div data-aos="fade-right" className="abo about-section3">
            <p>
              I have widely extended my learning of programming.
              Falling in love with web development, especially React and WordPress,
              has allowed me to dive deeper into technologies based on solving our everyday problems faster.
            </p>
        </div>
      </div>
    );
  }
  
  export default About;