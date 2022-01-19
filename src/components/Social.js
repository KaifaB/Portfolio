import React from 'react';

function Social( props ) {
    return (
      <div className="social-box">
        <a target="_blank" rel="noreferrer" href={props.site}>
          <div className="icon">
            <props.icon class="icon" style={{color: props.color}}/>
          </div>
        </a>
      </div>
    );
  }
  
  export default Social;