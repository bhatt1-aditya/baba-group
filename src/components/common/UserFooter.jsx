import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const UserFooter = () => {
  const navigate = useNavigate();

  const items = [
    { name: "Florexx", path: "/floorrex" },
    { name: "Corflexx", path: "/corflexx" },
    { name: "Wallex", path: "/wallexx" },
    { name: "Cristalo flexx", path: "/cristalo-flexx" },
    { name: "Quartz", path: "/quartz" },
  ];

  return (
    <footer className="bg-black text-white py-12  md:px-6 lg:px-10 px-4">
      {/* Main Footer Grid */}
      <div className="flex flex-col border-b pb-10">
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8  border-gray-700 pb-10">
          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            {["About Us", "Our Story", "Careers", "Contact"].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-white/30 py-1 hover:underline cursor-pointer"
              >
                <span>{item}</span>
                <span>↗</span>
              </div>
            ))}
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 md:mt-20">PRODUCTS</h3>
            {[
              "Flooring tiles",
              "Wall tiles",
              "SPC Composite",
              "Glass tiles",
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-white/30 py-1 hover:underline cursor-pointer"
              >
                <span>{item}</span>
                <span>↗</span>
              </div>
            ))}
          </div>

          {/* BRANDS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">BRANDS</h3>
            {items.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(item.path);
                  window.scrollTo({ top: 0, behavior: "smooth" }); 
                }}
                className="flex justify-between items-center border-b border-white/30 py-1 hover:underline cursor-pointer"
              >
                <span>{item.name}</span>
                <span>↗</span>
              </div>
            ))}
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 md:mt-20">SUPPORT</h3>
            {["Help center", "Installation desk", "Warranty", "Returns"].map(
              (item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-white/30 py-1 hover:underline cursor-pointer"
                >
                  <span>{item}</span>
                  <span>↗</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="text-sm space-y-4 flex md:flex-row flex-col justify-between items-center">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-white mt-1" />
            <span>
              123 Premium Ave,
              <br />
              Design District, NY 10001
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <span>info@babagroup.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        {/* Branding */}
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-white">BABA</p>
          <p className="tracking-widest">GROUP</p>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap gap-4 justify-center items-center flex-col">
          <p>© 2025 BABA Group. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:underline cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:underline cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 text-white text-xl">
          <FaFacebookF className="cursor-pointer hover:text-blue-500" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-300" />
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
