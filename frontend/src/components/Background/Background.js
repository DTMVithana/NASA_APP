import React, { useState, useEffect } from "react";
import "./Background.css";
import video1 from "../../assets/video.mp4";
import imag1 from "../../assets/man.jpg";
import imag2 from "../../assets/earth.jpg";
import imag3 from "../../assets/rocket.jpg";
import imag4 from "../../assets/color.jpg";

const backgroundImages = [imag1, imag2, imag3, imag4];

export const Background = ({ playStatus }) => {
  const [currentBackground, setCurrentBackground] = useState(imag1);

  useEffect(() => {
    let timeoutId;

    const changeBackground = () => {
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      setCurrentBackground(backgroundImages[randomIndex]);
      timeoutId = setTimeout(changeBackground, 2000); // Change background every 2 seconds
    };

    if (!playStatus) {
      // Video stopped, change background after 2 seconds initially
      timeoutId = setTimeout(changeBackground, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [playStatus]);

  return (
    <>
      {playStatus ? (
        <video className="background" autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
      ) : (
        <img src={currentBackground} className="background" alt="Background" />
      )}
    </>
  );
};
