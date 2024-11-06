import React, { useEffect, useState } from 'react';
import serviceImg from "../assets/BFC LOGO.png"
import servicebg from "../assets/blackbg.jpg"

const FlipCard = ({ firstImage, secondImage, title, description, subtitle, link,servImage }) => {
  const [bgImage1, setBgImage1] = useState('');
  const [bgImage2, setBgImage2] = useState('');

  useEffect(() => {
    // Set the background images when component mounts
    setBgImage1(firstImage);
    setBgImage2(secondImage);
  }, [firstImage, secondImage]);

  return (
    <div className="square-flip">
    <div className="square" style={{ backgroundImage: `url(${bgImage1})` }}>
      <div className="square-container">
        <div className="align-center">
          <img src="http://titanicthemes.com/files/flipbox/kallyas2.png" className="boxshadow" alt="" />
        </div>
        <img className='serv-img' src={`${servImage}`} alt="Service" />

        <h2 className="textshadow">{title}</h2>
        
      </div>
      <div className="flip-overlay"></div>
    </div>
    <div className="square2" style={{ backgroundImage: `url(${bgImage2})` }}>
      <div className="square-container2">
        <div className="align-center"></div>
        <h3 className="textshadow">{description}</h3>
       
      </div>
      <div className="flip-overlay"></div>
    </div>
  </div>
  );
};



const AI = () => {
  return (
    <div className='website-main'>
         <div className='website-head'>
            <h1>AI</h1>
        </div>
    <div className="centerflipcards">
       
    <FlipCard
        firstImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        secondImage={servicebg}
        title="Natural Language Processing"
        servImage={serviceImg}
        description="We offer advanced Natural Language Processing services, including text summarization, translation, text-to-speech, and text generation. Our AI-powered solutions help businesses process large amounts of data, convert text into different formats, and generate human-like responses for seamless interaction."
      />
      <FlipCard
        firstImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        secondImage={servicebg}
        title="Sentiment Analysis"
        servImage={serviceImg}
        description="Our sentiment analysis service deciphers the emotions behind the text, allowing businesses to gain valuable insights into customer opinions, feedback, and trends. We help you understand the tone of conversations and make data-driven decisions that improve customer experiences."
      />
     <FlipCard
        firstImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        secondImage={servicebg}
        title="Stable Diffusion (Text to Image, Text to 3D)"
        servImage={serviceImg}
        description="Our advanced Stable Diffusion technology turns your text into stunning images and 3D models. Whether you need creative visuals for marketing or detailed 3D models for product design, our AI generates visually compelling results based on simple text input."
      />
       
      <div className="clearfix"></div>
     
    </div>
    </div>
  )
}

export default AI