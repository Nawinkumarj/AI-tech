
import React, { useEffect, useState } from 'react';
// Banner
import webbanner from "../assets/service/Website.png"
import ecombanner from "../assets/service/E-com.png"
import webappbanner from "../assets/service/Webapp.png"
import uiuxbanner from "../assets/service/uiux.png"

// Icons
import website from "../assets/service/website.svg"
import ecom from "../assets/service/e-commerce.svg"
import landing from "../assets/service/landing-page.svg"
import webapp from "../assets/service/web-app.svg"
import uiux from "../assets/service/web-design.svg"
import webmaintanance from "../assets/service/web-maintainance.svg"

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



const Website = () => {
  return (
    <div className='website-main'>
         <div className='website-head'>
            <h1>WEBSITES</h1>
        </div>
    <div className="centerflipcards">
       
      <FlipCard
        firstImage={uiuxbanner}
        secondImage={servicebg}
        description="Offering expert web designing services that combine intuitive UI/UX design, creating visually appealing and user-friendly websites. We design engaging digital experiences exclusively for your brand and target audience."
      />
      <FlipCard
        firstImage={ecombanner}
        secondImage={servicebg}
        description="Specializing in e-commerce website development, we create seamless, secure, and scalable online stores. Our solutions provide an exceptional shopping experience with easy navigation, user-friendly interfaces, and integrated payment gateways."
      />
     <FlipCard
        firstImage={webappbanner}
        secondImage={servicebg}
        description="Building bespoke web applications designed for efficiency, scalability, and optimal user engagement, tailored to meet the specific requirements of your business and enhance operational workflows."
      />
        <FlipCard
        firstImage={webbanner}
        secondImage={servicebg}
        description="Developing responsive, secure, and high-performing websites using advanced technologies, Assuring a strong digital presence that drives your business goals and delivers a seamless user experience."
      />
        <FlipCard
        firstImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        secondImage={servicebg}
        description="Creating conversion-focused landing pages with clear messaging and strategic calls-to-action, focusing to maximize engagement and optimize your marketing campaigns."
      />
       <FlipCard
        firstImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        secondImage={servicebg}
        description="Providing proactive web maintenance services that make sure your website remains secure, up-to-date, and performs flawlessly, minimizing downtime and keeping your business running smoothly."
      />
      <div className="clearfix"></div>
    </div>
    </div>
  )
}

export default Website