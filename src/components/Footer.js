import React from 'react';
import { FaReact } from 'react-icons/fa';
function Footer() {
    return (
      <div className="footer">
          <p>Made with React</p>
          <FaReact size="2em" color="#61DAFB" className="react-icon"/>
          <p>All Rights Reserved &copy; 2021</p>
      </div>
    );
  }
  
  export default Footer;