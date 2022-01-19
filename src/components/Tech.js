import React from 'react';


function Tech( props ) {
    return (
        <div className="tilt tech-box" id={props.name}>
          <div className="real-tech">
            <div>
              <props.icon className="tech-icon" height="large"/>
            </div>
            <h1>{props.name}</h1>
          </div>
        </div>
    );
  }
  
  export default Tech;