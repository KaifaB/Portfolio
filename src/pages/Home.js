import React from 'react';

//import components/
import Social from '../components/Social';
import Tech from '../components/Tech';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Projects from "../components/Projects"

//import Data
import { Technologies, Socials } from '../data/Data';


function Home() {
    return (
      <div className="whole">
        <div className="socials">
          {Socials.map((curr, key) => {
            return(
          <Social id="" key={key} icon={curr.icon} color={curr.color}/>
            )
          })}
          <div className="line"></div>
        </div>
        <div className="align">
          <div>
            <Hero />
          </div>
          <div className="technologies" id="section-2">
            {Technologies.map((curr, key) => {
              return(
                <Tech key={key} name={curr.name} icon={curr.icon} />
              )
            })}
          </div>
          <div id="section-3">
            <Projects />
          </div>
          <div className="space" id="section-4">
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;