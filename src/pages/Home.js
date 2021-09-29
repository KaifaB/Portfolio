import React from 'react';

//import components/
import Social from '../components/Social';
import Tech from '../components/Tech';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import About from '../components/About';

//import Data
import { Technologies, Socials } from '../data/Data';


function Home() {
    return (
      <div className="whole">
        <div className="socials">
          {Socials.map((curr, key) => {
            return(
          <Social id="" key={key} icon={curr.icon} color={curr.color} site={curr.link}/>
            )
          })}
          <div className="line"></div>
        </div>
        <div className="align">
          <div>
            <Hero />
          </div>
          <div id="section-1">
            <About />
          </div>
          <div id="section-2">
            <h2>Languages</h2>
            <div className="technologies">
            {Technologies.map((curr, key) => {
              return(
                <Tech key={key} name={curr.name} icon={curr.icon} />
              )
            })}
            </div>
          </div>
          <div id="section-3">
            <Projects />
          </div>
          <div className="space" id="section-4">
            <ContactForm />
          </div>
          <div className="footer-relative">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;