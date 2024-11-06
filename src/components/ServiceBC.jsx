
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
          <h2 className="textshadow">{subtitle}</h2>
       
      </div>
      <div className="flip-overlay"></div>
    </div>
  </div>
  );
};



const Blockchain = () => {
  return (
    <div className='website-main'>
         <div className='website-head'>
            <h1>BLOCKCHAIN</h1>
        </div>
    <div className="centerflipcards">
       
    <FlipCard
        firstImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        secondImage={servicebg}
        title="Tokenization"
        servImage={serviceImg}
        description="Convert physical or digital assets into blockchain-based tokens, offering secure ownership, transparency, and streamlined asset management across industries. Tokenization unlocks liquidity for traditionally illiquid assets and simplifies fractional ownership. It paves the way for new opportunities in real estate, art, and intellectual property."
      />
      <FlipCard
        firstImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        secondImage={servicebg}
        title=" ICO Launch and Listing in Decentralized Exchange"
        servImage={serviceImg}
        description="Facilitating ICO launches with comprehensive support, from smart contract creation to direct listing on decentralized exchanges (DEX), granting access to global investor networks. We handle all technical, legal, and marketing aspects of the ICO process. With our expertise, your project is positioned for success from launch to listing."
      />
     <FlipCard
        firstImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        secondImage={servicebg}
        title="Enterprise Blockchain Setup"
        servImage={serviceImg}
        description="Establishing robust blockchain infrastructure for enterprises, providing a decentralized platform designed for secure transactions, data integrity, and operational efficiency. Our solutions promote trust and transparency within supply chains, finance, and healthcare. We ensure seamless integration with existing systems, driving productivity and cost savings."
      />
        
      <div className="clearfix"></div>
     
    </div>
    </div>
  )
}

export default Blockchain