import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import arrowbtn from "../../assets/arrow_btn.png";
import playIcon from "../../assets/play_icon.png";
import pauseIcon from "../../assets/pause_icon.png";

export const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        {/* Use Link to navigate to another page */}
        <Link to="/features">
          <img
            src={arrowbtn}
            alt=" "
            style={{ width: "50px", height: "50px" }}
          />
        </Link>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pauseIcon : playIcon}
            alt={playStatus ? "Pause" : "Play"}
            style={{ width: "24px", height: "24px" }} // Adjust the width and height here
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};
