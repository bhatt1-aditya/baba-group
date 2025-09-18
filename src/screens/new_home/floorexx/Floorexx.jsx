import React from "react";
import MainHome from "./MainHome";
import AboutSection from "./AboutSection";
import FlooringHero from "./FlooringHero";
import StatsSection from "./StatsSection";
import WhySPCSection from "./WhySPCSection";
import WhyChooseFloorexx from "./WhyChooseFloorexx";
import WhatsNew from "./WhatsNew";
import Products from "./Products";
import Certificates from "./Certificates";
import Brand from "./Brand";
import Gallery from "../../../components/common/Gallery";

const Floorexx = () => {
  return (
    <div>
      <MainHome />
      <AboutSection />
      <FlooringHero/>
      <StatsSection/>
      <WhySPCSection/>
      <WhyChooseFloorexx/>
      <WhatsNew />
      <Products />
      <Certificates/>
      <Brand/>
      <Gallery/>
    </div>
  );
};

export default Floorexx;
