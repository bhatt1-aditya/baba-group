import React from "react";
import MainHome from "./MainHome";
import QuartzShowcase from "./QuartzShowcase";
import QuartzSpecifications from "./QuartzSpecifications";
import ImageGallery from "./ImageGallery";
import CatalogueSection from "../calcite/CatalogueSection";

const QuartzMinerals = () => {
  return (
    <div>
      <MainHome />
      <QuartzShowcase />
      <QuartzSpecifications />
      <ImageGallery />
      <CatalogueSection />
    </div>
  );
};

export default QuartzMinerals;
