import React from "react";

const PartnerWithUsForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start  mx-auto my-28 px-4 md:px-6 lg:px-10 gap-12">
      
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-4">
          Become a <span className="text-orange-500">DEALER</span>
        </h2>
        <p className="text-sm text-gray-600 mb-8 uppercase">
          WE ARE DEALERS IN QUARTZ SEGMENTS
        </p>

        <div className="space-y-6 text-gray-700 text-sm">
          <div>
            <h3 className="font-semibold">WHY BABA QUARTZ?</h3>
            <p className="mt-2">
              In the last four decades, by garnering experience, love and loyalty of our customers, Baba Quartz has become one of the largest manufacturers of Quartz.
            </p>
            <p className="mt-2">
              <strong>Trust:</strong> We have outlets and Baba Quartz Boutiques spanning across the world.
            </p>
            <p className="mt-2">
              <strong>Customer Support:</strong> Associating with Baba Quartz will bring in additional support for your customer by our experts.
            </p>
            <p className="mt-2">
              <strong>Customer Base:</strong> With a big name, comes a huge customer base and you can tap into it as well by joining your hands with us.
            </p>
            <p className="mt-2">
              <strong>Incentives:</strong> Heroes like most exciting part! Becoming a dealer with us will give you opportunities to earn amazing rewards for yourself.
            </p>
            <p className="mt-2">
              <strong>Latest Technology:</strong> With Baba Quartz, you will also get access to latest technology through website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">DEALER SUPPORT & PROCESSES</h3>
            <p className="mt-2">
              With 20+ years of experience in the industry, Baba Quartz's trust factor will enhance your value, equip you with latest technology and expand your customer base.
            </p>
            <p className="mt-2">
              <strong>Trust:</strong> Endorse the trust of Baba Quartz and increase footfall.
            </p>
            <p className="mt-2">
              <strong>Sales:</strong> Shoot up sales and widen your customer base.
            </p>
            <p className="mt-2">
              <strong>Support:</strong> Support in building display and branding.
            </p>
            <p className="mt-2">
              <strong>Latest Technology:</strong> Access to latest applications like 'SameLook', 'QuickLook' & 'TrueLook'. There are two ways to join hands with us.
            </p>
            <p className="mt-2">
              <strong>Become a dealer:</strong> Stock Baba Quartz products at your shop/store.
            </p>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="flex-1 bg-white p-8 shadow rounded max-w-md w-full">
        <h3 className="text-xl font-semibold text-orange-500 mb-6 text-center">PARTNER WITH US</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Enter your full name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Enter your contact no." className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="email" placeholder="Enter your mail address" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Enter your location" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Enter your company name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="url" placeholder="Enter your website URL" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Enter your business relation" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Enter your existing business" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Enter dealership monthly average sale" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Enter prospective promotion of Baba Quartz" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Enter your existing showroom area" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Enter your covered warehouse area" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />

          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition">
            Submit Enquiry
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default PartnerWithUsForm;
