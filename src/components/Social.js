import React from 'react';

function Social( props ) {
    return (
      <div className="social-box">
        <div className="icon">
          <props.icon class="icon" style={{color: props.color}}/>
        </div>
      </div>
    );
  }
  
  export default Social;