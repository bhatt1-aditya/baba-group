import React from "react";
import contactImage from "../../Assets/componentImage/contactus.png"; 

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row my-16 justify-between items-start md:items-center px-4 md:px-6 lg:px-10 py-12 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2 text-gray-800 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Contact Us
        </h2>
        <p className="text-orange-500 italic text-center md:text-left">
          Baba Quartz (Baba Super Minerals Pvt. Ltd.)
        </p>

        {/* Our Address */}
        <div>
          <h3 className="font-semibold mb-1">OUR ADDRESS:</h3>
          <p className="text-sm leading-relaxed">
            E-4/5/6, Baba House Laxminarayan Vihar Colony, Ajmer Road,
            Madanganj – Kishangarh, Dist : Ajmer, Rajasthan, India,
            Pin - 305801
          </p>
        </div>

        {/* Factory Address */}
        <div>
          <h3 className="font-semibold mb-1">FACTORY ADDRESS:</h3>
          <p className="text-sm leading-relaxed">
            Shrinagar Industrial Zone, NH79, Village - Shrinagar Tehsil -
            Nasirabad, District - Ajmer (Rajasthan), India
          </p>
        </div>

        {/* Mail */}
        <div>
          <h3 className="font-semibold mb-1">OUR MAIL:</h3>
          <p className="text-sm">info@baba-group.in</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-1">CONTACT:</h3>
          <p className="text-sm">+91-98291-90921</p>
          <p className="text-sm">+91 73400 44121</p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={contactImage}
          alt="Contact"
          className="rounded-lg shadow-lg max-w-md w-full"
        />
      </div>
    </div>
  );
};

export default ContactUs;
