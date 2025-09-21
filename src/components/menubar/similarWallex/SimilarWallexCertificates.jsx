import React from "react";
import logo1 from "../../../Assets/new_home/logo1.png"
import logo2 from "../../../Assets/new_home/logo2.png"
const certificates = [
  { id: 1, img:logo1, alt: "SGS" },
  { id: 2, img: logo2, alt: "Greenguard" },
  { id: 3, img: logo1, alt: "SGS" },
  { id: 4, img: logo2, alt: "Greenguard" },
  { id: 5, img: logo1, alt: "SGS" },
  { id: 5, img: logo2, alt: "SGS" },
];

const SimilartWallexCertificates = () => {
  return (
    <section className="py-10 bg-white text-center px-4 md:px-6 lg:px-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">
        CERTIFICATIONS.
      </h1>

      {/* Logos */}
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {certificates.map((cert) => (
          <img
            key={cert.id}
            src={cert.img}
            alt={cert.alt}
            className="lg:h-28 md:h-20 h-14 xl:h-32 object-contain transition"
          />
        ))}
      </div>
    </section>
  );
};

export default SimilartWallexCertificates;
