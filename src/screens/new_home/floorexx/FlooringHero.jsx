
import mainImage from "../../../Assets/new_home/floorexx/home.png";
const FlooringHero = () => {
  return (
    <div>

    <section className="px-4 md:px-6 lg:px-10 md:py-12 pb-6 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-light text-gray-800">
        The flooring of the future –
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mt-2">
        FLOOREXX
      </h1>
      <p className="text-sm text-gray-600 mt-1">
        quality as high as possible & cost as economical as possible.
      </p>

      {/* Image with overlay caption */}
      <div className="mt-8 relative">
        <img
          src={mainImage}
          alt="Modern flooring"
          className="w-full rounded-lg shadow-md"
        />
        <p className="absolute bottom-4 left-4 text-white text-xs md:text-sm bg-black/50 px-3 py-1 rounded">
          Watch how Floorexx blends innovation, craftsmanship, and
          sustainability to deliver world-class surfaces.
        </p>
      </div>
    </section>
    </div>


  );
};
export default FlooringHero;
