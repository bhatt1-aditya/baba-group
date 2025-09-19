import React from "react";
import MainHome from "./MainHome";
import FeldsparSection from "./FeldsparSection";
import SpecificationsTable from "./SpecificationsTable";
import FiredModules from "./FiredModules";
import ImageShowcase from "./ImageShowcase";
import CatalogueSection from "./CatalogueSection";

const FeldSpar = () => {
  return (
    <div>
      <MainHome />
      <FeldsparSection />
      <SpecificationsTable />
      {/* <FiredModules /> */}
      <ImageShowcase />
      <CatalogueSection />
    </div>
  );
};

export default FeldSpar;
