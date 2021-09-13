import React from 'react';

function Header( props ) {
    return (
      <div className="header">
          <div className="my-logo">
              
          </div>
          <div className="nav">
              <ul>
                <a href="#"><li>About Me</li></a>
                <a href="#section-2"><li>Technologies</li></a>
                <a href="#section-3"><li>Projects</li></a>
                <a href="#section-4"><li>Contact</li></a>
              </ul>
          </div>
      </div>
    );
  }
  
  export default Header;