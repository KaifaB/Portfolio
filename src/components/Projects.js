import React, { useState } from 'react';
import { Projs } from "../data/Data"
import { FaRegHandPointer } from 'react-icons/fa';

const Projects = () => {

    const [isHovering, setIsHovering] = useState(-1);

    function show(id){
        setIsHovering(id);
    }
    function gone(id){
        setIsHovering(-1);
    }

    return (
      <div className="projects">
          <h1>Projects</h1>
          <div className="project-container">
            {Projs.map((curr, id) => {
                return(
                    <div data-aos="fade-up" key={id} className="container">
                        <h1>{curr.name}</h1>
                        <div className="content" >
                            <FaRegHandPointer id={"pointer" + id} onMouseEnter={() => show(id)}/>
                            <img className="proj-img" alt="project img" src={curr.image} id={id} onMouseEnter={() => show(id)} onMouseLeave={() => gone(-1)}/>
                        </div>
                        <div id={"overlay" + id} className={`${isHovering=== id ? "show-item" : ""}`} onMouseEnter={() => show(id)} onMouseLeave={() => gone(-1)}>
                            <div id ={id} className="flex">
                            {curr.link === "" ? "" : <a href={curr.link}><button id={id} className="proj-btn">Website</button></a>}
                                <a href={curr.git}><button id={id} className="proj-btn">Code</button></a>
                            </div>
                        </div>
                        <p>Coded in {curr.tech}</p>
                        <div id ={id} className="flex-mobile">
                            {curr.link === "" ? "" : <a href={curr.link}><button id={id} className="mobile-btn">Website</button></a>}
                            <a href={curr.git}><button id={id} className="mobile-btn">Code</button></a>
                        </div>
                    </div>
                )
            })}
            </div>
      </div>
    );
  }
  
  export default Projects;