import React from "react";
import MainHome from "./MainHome";
import WallexxSection from "./WallexxSection";
import LuxuryBanner from "./LuxuryBanner";
import StatsSection from "./StatsSection";
import WatchSection from "./WatchSection";
import WhyChoose from "./WhyChoose";
import ExplorePanel from "./ExplorePanel";
import OtherBrands from "./OtherBrands";
import Certificates from "./Certificates";
import Gallery from "../../../components/common/Gallery";
import FAQSection from "./FAQSection";

const WallPannel = () => {
  return (
    <div>
      <MainHome />
      <WallexxSection />
      <LuxuryBanner />
      <StatsSection/>
      <WatchSection/>
    <WhyChoose />
    <ExplorePanel />
    <OtherBrands />
    <Certificates/>
    <Gallery/>
    <FAQSection/>
    </div>
  );
};

export default WallPannel;
