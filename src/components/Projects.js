import React from 'react';
import { Projs } from "../data/Data"
import { FaRegHandPointer } from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css";

/*const titles = [
    'Web Developer',
    'Web Designer',
    'Web Enthusiast'
];*/
const show = (e) => {
    if (e.target.id[0] === "o") {
        let id = e.target.id[7];
        document.getElementById("overlay" + id).style.display = "block"
        document.getElementById("pointer" + id).style.display = "none"
    } else{
        let id = e.target.id;
        document.getElementById("overlay" + id).style.display = "block"
        document.getElementById("pointer" + id).style.display = "none"
    }
}
const gone = (e) => {
    if (e.target.id[0] === "o") {
        let id = e.target.id[7];
        document.getElementById("overlay" + id).style.display = "none"
        document.getElementById("pointer" + id).style.display = "block"
    } else{
        let id = e.target.id;
        document.getElementById("overlay" + id).style.display = "none"
        document.getElementById("pointer" + id).style.display = "block"
    }
}

function Projects() {
    return (
      <div className="projects">
          {Projs.map((curr, id) => {
            return(
                <div data-aos="fade-left" key={id} className="container">
                    <h1>{curr.name}</h1>
                    <div className="content" >
                        <FaRegHandPointer id={"pointer" + id} />
                        <img className="proj-img" alt=" project img" src={curr.image} id={id} onMouseEnter={show} onMouseLeave={gone}/>
                    </div>
                    <div id={"overlay" + id} onMouseEnter={show} onMouseLeave={gone}>
                        <div id ={id} className="flex">
                            <button id={id} className="proj-btn">Website</button>
                            <button id={id} className="proj-btn">Code</button>
                        </div>
                    </div>
                    <p>Coded in {curr.tech}</p>
                </div>
            )
          })}
            
      </div>
    );
  }
  
  export default Projects;