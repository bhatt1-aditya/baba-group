import React from "react";
import MainHome from "./MainHome";
import AboutSection from "./AboutSection";
import Timeline from "./timelineData";
import PopularProducts from "./PopularProducts";
import AboutSection2 from "./AboutSectio2";
import DiamondIcon from "./DiamondIcon";
import Certificates from "./Cerificates";

const BabaGroup = () => {
  return (
    <div>
      <MainHome />
      <AboutSection />
      <Timeline />
      <PopularProducts />
      <AboutSection2 />
      <DiamondIcon />
      <Certificates />{" "}
    </div>
  );
};

export default BabaGroup;
