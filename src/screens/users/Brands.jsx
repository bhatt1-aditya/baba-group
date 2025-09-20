import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../Assets/brands/backgroundImge.svg";
import polygon1 from "../../Assets/brands/Polygon 1.svg";
import polygon2 from "../../Assets/brands/Polygon 2.svg";
import polygon3 from "../../Assets/brands/Polygon 3.svg";
import polygon4 from "../../Assets/brands/Polygon 4.svg";
import polygon5 from "../../Assets/brands/Polygon 5.svg";
import polygon6 from "../../Assets/brands/Polygon 6.svg";

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;
    if (!section || !scrollContainer) return;

    const updateScroll = () => {
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      const horizontalScrollLength = scrollWidth - clientWidth;

      gsap.to(scrollContainer, {
        x: -horizontalScrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${horizontalScrollLength}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    };

    updateScroll();
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("resize", updateScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const brands = [
    {
      title: "NATURAL STONE",
      images: [
        { img: polygon1, text: "Premium Stone" },
        { img: polygon2, text: "Elegant Texture" },
      ],
    },
    {
      title: "CERAMIC TILES",
      images: [
        { img: polygon4, text: "Modern Tiles" },
        { img: polygon3, text: "Stylish Finish" },
      ],
    },
    {
      title: "GLASS TILES",
      images: [
        { img: polygon5, text: "Luxury Glass" },
        { img: polygon6, text: "Crystal Finish" },
      ],
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative bg-white min-h-screen xl:flex hidden items-center justify-center overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-32 right-1/3 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black/80 to-transparent z-0" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat object-fill"
        style={{ backgroundImage: `url(${logo})` }}
      />

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="relative z-10 flex flex-row gap-40 w-full px-8 md:px-16 lg:px-24 py-10 items-center"
        style={{ minHeight: "100vh", fontSize: "1.35rem", willChange: "transform" }}
      >
        {/* Heading */}
        <div className="flex flex-col items-center min-w-[350px] max-w-[400px]">
          <h1 className="text-5xl font-bold tracking-wider mb-8 uppercase text-black">
            PREMIUM <br /> BRANDS
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded mb-6" />
        </div>

        {/* Brand Cards */}
        {brands.map((brand, i) => (
          <div key={i} className="flex flex-col min-w-[600px] max-w-[650px] relative">
            <div className="grid grid-cols-2 gap-12">
              {brand.images.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center cursor-pointer transition-transform duration-500 hover:scale-110 hover:-rotate-2"
                >
                  <img
                    src={item.img}
                    alt=""
                    className={`object-contain ${idx === 0 ? "w-[600px] h-[600px]" : "w-[420px] h-[420px]"}`}
                  />
                  <p className="mt-2 text-black font-medium text-lg">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex pl-2 absolute bottom-36">
              <h1 className="text-4xl font-semibold tracking-wider text-black">{brand.title}</h1>
            </div>
          </div>
        ))}

        {/* Tap to Explore Button */}
        <div className="flex flex-col gap-4 items-center justify-center min-w-[300px] max-w-[350px] z-10">
          <button
            onClick={() => console.log("Explore clicked!")}
            className="mt-4 px-8 py-4 bg-gradient-to-r from-purple-400 to-blue-400 text-white font-bold rounded-full shadow-lg animate-pulse hover:scale-110 transition-all duration-300"
          >
            Tap to Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brands;
