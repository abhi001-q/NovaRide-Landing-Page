import React from "react";
import "./Background.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import Navbar from "../Navbar/Navbar";

const Background = ({ playStatus, heroCount }) => {
  const media = playStatus ? (
    <video className="background" autoPlay loop muted>
      <source src={video1} type="video/mp4" />
    </video>
  ) : heroCount === 0 ? (
    <img src={image1} className="background fade-in" alt="background image1" />
  ) : heroCount === 1 ? (
    <img src={image2} className="background fade-in" alt="background image2" />
  ) : (
    <img src={image3} className="background fade-in" alt="background image3" />
  );

  return (
    <div className="background-container">
      {media}
      <div className="background-overlay">
        <Navbar />
      </div>
    </div>
  );
};

export default Background;
