import React from "react";
import "./Hero.css";
import hand_icon from '../Assets/hand.png'
import hero_icon from '../Assets/hero-image.png'
import arrow_icon from '../Assets/arrow_icon.png'
const Hero = () => {

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt=''/>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>
            Latest Collection
          </div>
          <img src={arrow_icon} alt=''/>

        </div>
      </div>
      <div className="hero-right"></div>
      <img src={hero_icon} alt=''/>
    </div>
  );
};

export default Hero;
