import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


import fp from "../assets/mockups/FP.png"
import pc from "../assets/mockups/PC.png"
import synergist from "../assets/mockups/Synergist.png"
import eeb from "../assets/mockups/EEB.png"
import bfc from "../assets/mockups/bfc.png"
import nexus from "../assets/mockups/nexus.png"
import spices from "../assets/mockups/FP-spices.png"
import blogs from "../assets/mockups/PC-blogs.png"
import nlp from "../assets/projects/nature-themed.png"
// import aiv from "../assets/projects/AI-voice.mp4"
import stable1 from "../assets/projects/stable1.png"
import stable2 from "../assets/projects/stable2.png"
import stable3 from "../assets/projects/stable3.png"
import stable4 from "../assets/projects/stable4.png"

const Mockups = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
  };
  return (
    <div className='mockups-main'>
      <div className='mockups-head'>
        <h1 className='mockup-title title'>Our projects</h1>
        <h1 className='about-txt-bg'>our projects</h1>
      </div>
      <div className="heading">
        <h1 className="heading-text text-center">Websites</h1>
      </div>
        <div className='mockups-projects'>
            <div className='mockup-img'>
              <img className='magicBorder' src={fp}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder' src={pc}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder' src={synergist}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder' src={eeb}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder' src={nexus}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder' src={spices}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder' src={blogs}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder' src={bfc}/>
            </div>
        </div>
        <div className="heading">
            <h1 className="heading-text text-center">AI</h1>
          </div>
        <div className="mockups-projects">
          <div className="mockup-img">
            <Slider {...settings}>
              <div>
                <img className="magicBorder" src={stable1} alt="Slide 1" />
              </div>
              <div>
                <img className="magicBorder" src={stable2} alt="Slide 2" />
              </div>
              <div>
                <img className="magicBorder" src={stable3} alt="Slide 3" />
              </div>
              <div>
                <img className="magicBorder" src={stable4} alt="Slide 4" />
              </div>
            </Slider>
          </div>
            <div className='mockup-img'>
              <video autoPlay  loop muted className='magicBorder' src={nlp} type="video/mp4"/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder' src={nlp}/>
            </div>
        </div>

     

    </div>
  )
}

export default Mockups








const images = [
  '../assets/testi.jpeg',
  '../assets/blockchain.png',
  'path/to/image3.jpg',
  'path/to/image4.jpg',
  'path/to/image5.jpg',
];




