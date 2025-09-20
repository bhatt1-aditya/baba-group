import React from "react";

const SpecificationsTable = () => {
  const headers = [
    "Content/Properties",
    "Potash (K1) TDS-1",
    "Potash (K2) TDS-1",
    "Sodium (N1) TDS-1",
    "Sodium (N2) TDS-1",
  ];

  const data = [
    ["Al2O3", "17.0-18.0", "17.0-18.0", "17.0-18.0", "17.0-18.0"],
    ["CaO", "< 0.5", "< 0.5", "< 0.5", "< 0.3"],
    ["Fe2O3", "< 0.10", "< 0.15", "< 0.3", "< 0.13"],
    ["K2O", "10-11", "7.5-8.5", "< 0.1", "1.5 (+/-0.5)"],
    ["MgO", "0.1", "< 0.1", "1.0 (+/-0.5)", "< 0.1"],
    ["Na2O", "2.5-3.5", "2.5-3.5", "< 0.1", "7.0-8.0"],
    ["SiO2", "66-68", "66-68", "9.0-10.0", "66-68"],
    ["TiO2", "< 0.01", "< 0.01", "66-68", "< 0.01"],
    ["Residue (200# ASTM)", "< 1.0", "< 1.0", "< 1.0", "< 1.0"],
    ["Moisture", "0.5 MAX.", "0.5 MAX.", "0.5 MAX.", "0.5 MAX."],
    ["Free Iron", "< 0.15", "< 0.15", "< 0.07", "< 0.1"],
  ];

  return (
    <div className="md:py-12 py-5 md:px-6 px-4 lg:px-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
        Specifications.
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-blue-900 text-white text-sm md:text-base">
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-3 border border-gray-200 whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center text-gray-700 text-sm md:text-base">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-3 border border-gray-200"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpecificationsTable;
