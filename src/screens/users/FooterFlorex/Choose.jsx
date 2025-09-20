import React from "react";

const Choose = () => {
  return (
    <div className="text-white p-10 min-h-screen">
      <div>
        <h1 className="  whitespace-nowrap leading-none font-normal font-libertinus text-center pb-20">
          <h1 className="text-xl"> Why Choose </h1>
          <br />
          <span className="text-4xl">CRISTALLOO?</span>
        </h1>
        <div className=" divide-y gap-10 flex flex-col">
            <div className="grid grid-cols-3 place-items-center">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-white"></div>
                    <h1>Soundproof</h1>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-white"></div>
                    <h1>Safe & Better Air Quality</h1>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-white"></div>
                    <h1>Warranty</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 place-items-center">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-white"></div>
                    <h1>Endless Options</h1>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-white"></div>
                    <h1>Low Cost Installation</h1>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-white"></div>
                    <h1>Ultimate Durability</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 place-items-center">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-white"></div>
                    <h1>Termite Resistant</h1>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-white"></div>
                    <h1>Eco-friendly</h1>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-white"></div>
                    <h1>Waterproof</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
