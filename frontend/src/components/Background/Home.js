import React from "react";
import { Background } from "./Background";
import { NavBar } from "../NavBar/NavBar";
import { Hero } from "../Hero/Hero";

const Home = ({
  playStatus,
  heroCount,
  setPlayStatus,
  heroData,
  setHeroCount,
}) => {
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <NavBar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default Home;
