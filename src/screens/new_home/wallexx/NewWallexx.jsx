import React from "react";
import MainHome from "./MainHome";
import WallexSection from "./WallexSection";
import StatsSection from "./StatsSection";
import LuxuryWalls from "./LuxuryWalls";
import WhySPC from "./WhySPC";
import WhyWallex from "./WhyWallex";
import Categories from "./Categories";
import OtherBrands from "./OtherBrands";
import BrandCards from "./BrandCards";
import Certificates from "./Certificates";
import Gallery from "../../../components/common/Gallery";
import FAQSection from "./FAQSection";

const NewWallexx = () => {
  return (
    <div>
      <MainHome />
      <WallexSection />
      <StatsSection/>
      <LuxuryWalls />
      <WhySPC />
      <WhyWallex />
      <Categories />
      <OtherBrands />
      <BrandCards />
      <Certificates/>
      <Gallery/>
      <FAQSection/>
    </div>
  );
};

export default NewWallexx;
