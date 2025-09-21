import image1 from "../../../Assets/new_home/coreflexx/choosecoreflexx.png"
const CoreflexxFeatures = () => {

  const features = [
    "WARRANTY",
    "WATERPROOF",
    "SOUNDPROOF",
    "ECO-FRIENDLY",
    "ENDLESS OPTIONS",
    "ULTIMATE DURABILITY",
    "TERMITE RESISTANT",
    "LOW COST INSTALLATION",
    "SAFE AND BETTER AIR QUALITY",
  ];

  return (
    <section className="pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image Section */}
        <div>
          <img
            src={image1}
            alt="Coreflexx Room"
            className="rounded-lg shadow-md object-cover w-full h-96"
          />
          <p className="text-gray-600 text-sm mt-4">
            Watch how Baba Group blends innovation, craftsmanship, and sustainability to deliver world-class surfaces.
          </p>
          <button className="text-gray-800 font-medium text-sm mt-2 flex items-center gap-1">
            Watch Now <span>›</span>
          </button>
        </div>

        {/* Right Content Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">Why Choose</h2>
          <h3 className="text-4xl font-bold text-gray-800 mb-4">COREFLEXX?</h3>
          <p className="text-gray-500 mb-8 max-w-md">
            Premium quality. Innovative designs. Durable, eco-friendly quartz surfaces with reliable global supply — crafted to elevate every space.
          </p>

          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-gray-800 text-sm font-medium">
            {features.map((feature, index) => (
              <span key={index}>{feature}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreflexxFeatures;