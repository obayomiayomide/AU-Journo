import React from "react";
import Hero from "../Landing Page Sections/Hero";
import LevelUp from "../Landing Page Sections/LevelUp";
import Explore from "../Landing Page Sections/Explore";
import Nav from "../Nav";
import Footer from "../Landing Page Sections/Footer";

function LandingPage() {
  return (
    <div>
      <Nav navlinks={true} />
      <Hero />
      <LevelUp />
      <Explore />
      <Footer />
    </div>
  );
}

export default LandingPage;
