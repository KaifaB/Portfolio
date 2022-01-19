import React, { useState, useEffect } from 'react';

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
  //tells how far we are scrolling by pixel
  const [offset, setOffset] = useState(0);

  window.onscroll = () => {
      setOffset(window.pageYOffset)
  }
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

  useEffect(() => {
      console.log(offset);
      //looks on MOBILE
      if (window.innerWidth < 500){
        if (offset > 0){
          //introduction paragraphs
          document.querySelector(".about-section1").classList.add("appear")
        } else {
          document.querySelector(".about-section1").classList.remove("appear")
        }
        if (offset > 90){
          document.querySelector(".about-section2").classList.add("appear")
        } else {
          document.querySelector(".about-section2").classList.remove("appear")
        }
        if (offset > 200){
          document.querySelector(".about-section3").classList.add("appear")
        } else {
          document.querySelector(".about-section3").classList.remove("appear")
        }
        //solo project containers
        if (offset > 800){
          document.querySelector("#project0").classList.add("appear")
        } else {
          document.querySelector("#project0").classList.remove("appear")
        }
        if (offset > 1400){
          document.querySelector("#project1").classList.add("appear")
        } else {
          document.querySelector("#project1").classList.remove("appear")
        }
        if (offset > 1900){
          document.querySelector("#project2").classList.add("appear")
        } else {
          document.querySelector("#project2").classList.remove("appear")
        }
        //contact container
        if (offset > 2500){
          document.querySelector(".contact").classList.add("appear")
        } else {
          document.querySelector(".contact").classList.remove("appear")
        }
      }else {
      //if device is tablet or computer
        //introduction paragraphs
        if (offset > 250){
          document.querySelector(".about-section1").classList.add("appear")
        } else {
          document.querySelector(".about-section1").classList.remove("appear")
        }
        if (offset > 650){
          document.querySelector(".about-section2").classList.add("appear")
        } else {
          document.querySelector(".about-section2").classList.remove("appear")
        }
        if (offset > 900){
          document.querySelector(".about-section3").classList.add("appear")
        } else {
          document.querySelector(".about-section3").classList.remove("appear")
        }
        //project container
        if (offset > 2200){
          document.querySelector(".project-container").classList.add("appear")
        } else {
          document.querySelector(".project-container").classList.remove("appear")
        }
        //contact container
        if (offset > 2700){
          document.querySelector(".contact").classList.add("appear")
        } else {
          document.querySelector(".contact").classList.remove("appear")
        }
      }
  }, [offset]);

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