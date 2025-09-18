import React from "react";
import worldMap from "../../Assets/componentImage/worldmap.png"; // Update the path as needed

const GlobalPresence = () => {
  return (
    <div className="text-center my-28 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-semibold mb-8">Global Presence</h2>
      
      <div className="flex justify-center">
        <img
          src={worldMap}
          alt="World Map showing global presence"
          className="max-w-full h-auto  rounded"
        />
      </div>
    </div>
  );
};

export default GlobalPresence;
