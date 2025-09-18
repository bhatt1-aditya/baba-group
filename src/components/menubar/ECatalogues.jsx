import React from "react";
import { FaDownload } from "react-icons/fa";

const catalogues = [
  "Quartz Overseas Catalogue",
  "Quartz Domestic Catalogue",
  "Semi Precious Catalogue",
  "Quartz Fluted Catalogue",
  "Super Jumbo Catalogue",
  "Cristalloo Catalogue",
  "Prefeb Catalogue",
];

const ECatalogues = () => {
  return (
    <div className="text-center my-28 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-semibold mb-8">
        <span className="text-orange-500">E</span>-Catalogues
      </h2>

      <div className=" mx-auto bg-white shadow rounded-lg p-6">
        <ul>
          {catalogues.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b border-orange-200 py-4"
            >
              <span className="text-left">{item}</span>
              <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition duration-300">
                <FaDownload />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ECatalogues;
