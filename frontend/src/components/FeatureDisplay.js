import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Background/Header"; // Import the Header component
import Footer from "../components/Background/Footer"; // Import the Footer component
import FeatureCard from "./FeatureCard";
import earthImage from "../assets/earth.jpg";
import rocketImage from "../assets/rocket.jpg";

const FeatureDisplay = () => {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Explore the Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/apod">
            <FeatureCard
              title="APOD"
              description="Astronomy Picture of the Day"
              image={earthImage}
            />
          </Link>
          <Link to="/mars">
            <FeatureCard
              title="Mars Rover Photos"
              description="Discover stunning photos captured by NASA's Mars rovers"
              image={rocketImage}
            />
          </Link>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default FeatureDisplay;
