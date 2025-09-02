import React from "react";
import Hero from "./Hero";
import Collections from "./Collections";
import Products from "./Products";
import CoreFlexxProducts from "./Products";
import WhyChoose from "./WhyChoose";
import LocateDealer from "./LocateDealer";
import Inspirations from "./Inspirations";
import About from "./About";
import Faqs from "./Faqs";
import Benefits from "./Benefits";
import { Info } from "lucide-react";
import WallexxProducts from "./wallexxproducts";
import Projects from "./Projects";
import AboutSection from "./Aboutsection";
import AwardsAchievements from "./AwardsAchievements";
import Events from "./Events";
// import info from './info'

const Wallexx = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <Collections />
      <CoreFlexxProducts />
      <WhyChoose />
      <LocateDealer />
      <Inspirations />
      <Benefits />
      <Faqs />
      <About />
      <WallexxProducts />
      <AwardsAchievements />
      <Events />
      <Projects />
      {/* <Info/> */}
    </div>
  );
};

export default Wallexx;
