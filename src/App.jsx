import React from "react";
import Navbar from "./components/navbar";
import Features from "./components/features";
import Roadmap from "./components/roadmap";
import Hug from "./components/hero_hug";
import Hero from "./components/hero";
import Tokenomics from "./components/tokenomics";
import Communities from "./components/communites";

const App = () => {
  return (
    <div className="bg-background text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Hug />
      <Features />
      <Roadmap />
      <Tokenomics />
      <Communities />
    </div>
  );
};

export default App;
