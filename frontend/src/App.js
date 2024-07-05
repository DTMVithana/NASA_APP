import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Background/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import APOD from "./components/APOD";
import MarsRoverPhotos from "./components/MarsRoverPhotos";
import Profile from "./pages/Profile";

import FeatureDisplay from "./components/FeatureDisplay";

export default function App() {
  const heroData = [
    { text1: "Journey Beyond", text2: "the Stars" },
    { text1: "Your Portal", text2: "to the Universe" },
    { text1: "Your Gateway", text2: "to Space" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              playStatus={playStatus}
              heroCount={heroCount}
              setPlayStatus={setPlayStatus}
              heroData={heroData} // Pass heroData as a prop
              setHeroCount={setHeroCount}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apod" element={<APOD />} />
        <Route path="/mars" element={<MarsRoverPhotos />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/features" element={<FeatureDisplay />} />
      </Routes>
    </Router>
  );
}
