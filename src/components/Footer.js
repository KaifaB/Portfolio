import React from 'react';
import { FaReact } from 'react-icons/fa';

const date = new Date()
function Footer() {
    return (
      <div className="footer">
          <p>Made with React</p>
          <FaReact size="2em" color="#61DAFB" className="react-icon"/>
          <p>All Rights Reserved &copy; {date.getFullYear()}</p>
      </div>
    );
  }
  
  export default Footer;