import React from "react";

const Specifications = () => {
  const data = [
    {
      product: "BABA-CALC/A/B (GCC)",
      country: "India",
      particleD97: "11.5 μm",
      particleD50: "2.7 μm",
      CaCO3: "98%",
      SiO2: "1.00%",
      whiteness: "97.00%",
      brightness: "96.00%",
      moisture: "0.5",
      pH: "9.0",
      sg: "2.7",
      coating: "NE",
    },
    {
      product: "BABA-CALC/GS MA-02 (GCC)",
      country: "India",
      particleD97: "11.5 μm",
      particleD50: "3.2 μm",
      CaCO3: "98%",
      SiO2: "1.00%",
      whiteness: "97.00%",
      brightness: "96.00%",
      moisture: "0.5",
      pH: "9.0",
      sg: "2.7",
      coating: "NE",
    },
    {
      product: "BABA-CALC/O-AB (Coated)",
      country: "India",
      particleD97: "11.5 μm",
      particleD50: "3.7 μm",
      CaCO3: "98%",
      SiO2: "1.00%",
      whiteness: "97.00%",
      brightness: "96.00%",
      moisture: "0.5",
      pH: "9.0",
      sg: "2.7",
      coating: "1 ± 0.5",
    },
    {
      product: "BABA-CALC/O-AC (Coated)",
      country: "India",
      particleD97: "10.0 μm",
      particleD50: "3.0 μm",
      CaCO3: "98%",
      SiO2: "1.00%",
      whiteness: "97.00%",
      brightness: "96.00%",
      moisture: "0.5",
      pH: "9.0",
      sg: "2.7",
      coating: "1 ± 0.5",
    },
    {
      product: "BABA-Q-HOF/12 (Vietnam)",
      country: "Vietnam",
      particleD97: "10.0 μm",
      particleD50: "2.5 μm",
      CaCO3: "98%",
      SiO2: "1.00%",
      whiteness: "97.00%",
      brightness: "96.00%",
      moisture: "0.5",
      pH: "9.0",
      sg: "2.6",
      coating: "NE",
    },
    {
      product: "BABA-Q-HOF/12F (Vietnam, Coated)",
      country: "Vietnam",
      particleD97: "10.0 μm",
      particleD50: "2.5 μm",
      CaCO3: "98%",
      SiO2: "1.00%",
      whiteness: "97.00%",
      brightness: "96.00%",
      moisture: "0.5",
      pH: "9.0",
      sg: "2.6",
      coating: "1%",
    },
    {
      product: "BABA-CAL/SPC-MA-01",
      country: "India",
      particleD97: "350#",
      particleD50: "-",
      CaCO3: "98%",
      SiO2: "1.25%",
      whiteness: "95%",
      brightness: "94%",
      moisture: "0.5",
      pH: "9.0",
      sg: "2.7",
      coating: "-",
    },
  ];

  return (
    <div className="w-full bg-white py-10 md:px-4 lg:px-10 px-6">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Specifications
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 w-full text-sm">
          <thead className="bg-gray-100">
            <tr className="whitespace-nowrap">
              <th className="border px-3 py-2">Product Name</th>
              <th className="border px-3 py-2">Country</th>
              <th className="border px-3 py-2">Particle D97</th>
              <th className="border px-3 py-2">Particle D50</th>
              <th className="border px-3 py-2">CaCO3</th>
              <th className="border px-3 py-2">SiO2</th>
              <th className="border px-3 py-2">Whiteness</th>
              <th className="border px-3 py-2">Brightness</th>
              <th className="border px-3 py-2">Moisture</th>
              <th className="border px-3 py-2">pH</th>
              <th className="border px-3 py-2">Spec. Gravity</th>
              <th className="border px-3 py-2">Coating Ratio</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-3 py-2">{row.product}</td>
                <td className="border px-3 py-2">{row.country}</td>
                <td className="border px-3 py-2">{row.particleD97}</td>
                <td className="border px-3 py-2">{row.particleD50}</td>
                <td className="border px-3 py-2">{row.CaCO3}</td>
                <td className="border px-3 py-2">{row.SiO2}</td>
                <td className="border px-3 py-2">{row.whiteness}</td>
                <td className="border px-3 py-2">{row.brightness}</td>
                <td className="border px-3 py-2">{row.moisture}</td>
                <td className="border px-3 py-2">{row.pH}</td>
                <td className="border px-3 py-2">{row.sg}</td>
                <td className="border px-3 py-2">{row.coating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Specifications;
