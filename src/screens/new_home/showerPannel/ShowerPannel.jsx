import React from "react";
import MainHome from "./MainHome";
import WallexSection from "./WallexSection";
import StatsSection from "./StatsSection";
import WallsLuxury from "./WallsLuxury";
import WhyChoose from "./WhyChoose";
import WatchNowSection from "./WatchNowSection";
import ShowerPannelProduct from "./ShowerPannelProduct";
import OtherBrands from "./OtherBrands";
import Gallery from "../../../components/common/Gallery";
import FAQSection from "./FAQSection";

const ShowerPannel = () => {
  return (
    <div>
      <MainHome />
      <WallexSection/>
      <StatsSection/>
      <WallsLuxury />
      <WhyChoose/>
      <WatchNowSection />
      <ShowerPannelProduct/>
      <OtherBrands/>
      <Gallery/>
      <FAQSection/>
    </div>
  );
};

export default ShowerPannel;
