import image1 from "../../../Assets/new_home/floorexx/floorexx1.png"
import image2 from "../../../Assets/new_home/floorexx/floorexx2.png"
import image3 from "../../../Assets/new_home/floorexx/floorexx3.png"
const AboutSection=()=> {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left - Image */}
        <div>
          <img
            src={image1}
            alt="Factory production"
            className="rounded-lg shadow-md"
          />
          <p className="mt-4 text-sm text-gray-700 leading-relaxed py-6">
            Baba flooring Pvt Ltd is the Manufacturer & Exporter of rigid core
            Luxury Vinyl Flooring, a new era of LVT, additionally called Stone
            Plastic Composite or Stone Polymer Composite (SPC) by using the
            emblem call <span className="font-semibold text-orange-600">“FLOORREX.”</span>
          </p>
          <img
            src={image3}
            alt="Factory inside view"
            className="mt-6 rounded-lg shadow-md mx-auto"
          />
        </div>

        {/* Right - Text */}
        <div>
          <p className="text-gray-800 leading-relaxed mb-6">
            Baba holds its quarry and sustainably source CaCO₃, the main
            ingredient of SPC products.{" "}
            <span className="font-semibold text-orange-600">FLOORREX</span> is
            the only SPC producing company in India with in-house source of
            CaCO₃ which helps us to maintain consistent quality in our products
            with highest standards at very attractive prices.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            Baba Group’s cutting-edge products are available globally in over 20
            countries, and so for Floorrex SPC products – crafted passionately
            and bringing you the excellence thru our German Technology products
            at every home across the world.
          </p>
           <img
            src={image2}
            alt="Factory inside view"
            className="mt-6 rounded-lg shadow-md flex justify-center items-center mx-auto"
          />
          <a
            href="#"
            className="my-4 text-orange-600 font-medium hover:underline mx-auto text-center flex justify-center items-center"
          >
            Learn More &gt;
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;