import React, { useEffect } from 'react';
import Tilt from 'react-vanilla-tilt'
import Aos from 'aos';
import "aos/dist/aos.css";


function Tech( props ) {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])
    return (
      <Tilt data-aos="fade-up" className="tech-box" options={{ perspective: 100, max: 55, glare: true, "max-glare": 1 }} id={props.name}>
        <div className="real-tech">
          <div>
            <props.icon class="tech-icon" height="large"/>
          </div>
          <h1>{props.name}</h1>
        </div>
      </Tilt>
    );
  }
  
  export default Tech;