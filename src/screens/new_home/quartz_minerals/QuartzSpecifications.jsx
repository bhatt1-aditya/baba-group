import React from "react";

const QuartzSpecifications = () => {
  const data = [
    {
      size: "0.1 mm – 0.7 mm",
      oversize: "Over 30# - Max 5",
      lower: "Min 85%",
      color: "Transparent 99.5% Min",
      sio2: "99.5% Min",
      fe2o3: "0.01% Max",
      freeIron: "Nil",
      shade: { L: "91", A: "0.2", B: "2" },
      moisture: "0.35%",
    },
    {
      size: "0.3 mm – 0.7 mm",
      oversize: "Over 20# - Max 5",
      lower: "Min 85%",
      color: "Transparent 99.5% Min",
      sio2: "99.5% Min",
      fe2o3: "0.01% Max",
      freeIron: "Nil",
      shade: { L: "88", A: "0.2", B: "1.5" },
      moisture: "0.35%",
    },
    {
      size: "0.6 mm – 1.2 mm",
      oversize: "Over 12# - Max 5",
      lower: "Min 90%",
      color: "Transparent 99.5% Min",
      sio2: "99.5% Min",
      fe2o3: "0.01% Max",
      freeIron: "Nil",
      shade: { L: "86", A: "0.2", B: "1.5" },
      moisture: "0.35%",
    },
    {
      size: "1.2 mm – 2.5 mm",
      oversize: "Over 7# - Max 5",
      lower: "Min 90%",
      color: "Transparent 99.5% Min",
      sio2: "99.5% Min",
      fe2o3: "0.01% Max",
      freeIron: "Nil",
      shade: { L: "80–75", A: "0.4", B: "1.5" },
      moisture: "0.35%",
    },
    {
      size: "2.5 mm – 4.0 mm",
      oversize: "Over 5# - Max 5",
      lower: "Min 90%",
      color: "Transparent 99.5% Min",
      sio2: "99.5% Min",
      fe2o3: "0.01% Max",
      freeIron: "Nil",
      shade: { L: "62–65", A: "0.4", B: "1.5" },
      moisture: "0.35%",
    },
    {
      size: "4.0 mm – 6.0 mm",
      oversize: "Over 3# - Max 5",
      lower: "Min 90%",
      color: "Transparent 99.5% Min",
      sio2: "99.5% Min",
      fe2o3: "0.01% Max",
      freeIron: "Nil",
      shade: { L: "61–65", A: "0.4", B: "1.5" },
      moisture: "0.35%",
    },
    {
      size: "Flour 45 Microns",
      oversize: "D97: 45 Microns (325#)",
      lower: "D50: 10–15 Microns",
      color: "Transparent 99.5% Min",
      sio2: "99.5% Min",
      fe2o3: "0.01% Max",
      freeIron: "Nil",
      shade: { L: "98", A: "0.25", B: "1" },
      moisture: "0.35%",
    },
    {
      size: "Flour 45 Microns (Coated)",
      oversize: "D97: 45 Microns (325#)",
      lower: "D50: 10–15 Microns",
      color: "Transparent 99.5% Min",
      sio2: "99.5% Min",
      fe2o3: "0.01% Max",
      freeIron: "Nil",
      shade: { L: "98", A: "0.25", B: "1" },
      moisture: "0.35%",
    },
    {
      size: "80 – 200 Mesh",
      oversize: "Over 72# - Max 5",
      lower: "Min 85%",
      color: "Transparent 99.5% Min",
      sio2: "99.5% Min",
      fe2o3: "0.01% Max",
      freeIron: "Nil",
      shade: { L: "91.25", A: "0.13", B: "2.15" },
      moisture: "0.35%",
    },
  ];

  return (
    <div className="w-full bg-white md:py-10 md:px-6 px-4 lg:px-10">
      <h2 className="text-center text-2xl font-semibold text-orange-600 mb-6">
        Specification of 1st Grade
      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 w-full text-sm text-center">
          <thead className="bg-orange-500 text-white">
            <tr className="whitespace-nowrap">
              <th className="border px-3 py-2">Baba Quartz Size Grade</th>
              <th className="border px-3 py-2">Oversize in Range</th>
              <th className="border px-3 py-2">Lower</th>
              <th className="border px-3 py-2">Color & Whiteness</th>
              <th className="border px-3 py-2">SiO₂ (Min)</th>
              <th className="border px-3 py-2">Fe₂O₃</th>
              <th className="border px-3 py-2">Free Iron</th>
              <th className="border px-3 py-2">Shade L*</th>
              <th className="border px-3 py-2">Shade A*</th>
              <th className="border px-3 py-2">Shade B*</th>
              <th className="border px-3 py-2">Moisture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-3 py-2">{row.size}</td>
                <td className="border px-3 py-2">{row.oversize}</td>
                <td className="border px-3 py-2">{row.lower}</td>
                <td className="border px-3 py-2">{row.color}</td>
                <td className="border px-3 py-2">{row.sio2}</td>
                <td className="border px-3 py-2">{row.fe2o3}</td>
                <td className="border px-3 py-2">{row.freeIron}</td>
                <td className="border px-3 py-2">{row.shade.L}</td>
                <td className="border px-3 py-2">{row.shade.A}</td>
                <td className="border px-3 py-2">{row.shade.B}</td>
                <td className="border px-3 py-2">{row.moisture}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuartzSpecifications;
