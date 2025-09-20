import React from 'react'
import image1 from "../../../Assets/new_home/coreflexx/coreflexx1.png"
import image2 from "../../../Assets/new_home/coreflexx/coreflexx2.png"
import image3 from "../../../Assets/new_home/coreflexx/coreflexx3.png"
const WalleexSection = () => {
  return (
      <section className="text-center pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-10">
        <p className="text-gray-600 text-sm mb-6">
          Walleex is a premium brand under the Baba Group, delivering next-generation SPC wall and shower panel solutions. 
          Designed for modern interiors, Walleex blends style, durability, and ease of installation — offering elegant, long-lasting 
          choices for both dry and wet areas.
        </p>
        <p className="text-gray-600 text-sm mb-8">
          Our Vision is to transform Indian interiors with premium, practical, and aesthetic panel solutions for walls and bathrooms —
          panels that are effortless to install, built to endure, and elevate every space they adorn.
        </p>
        <button className="text-gray-600 text-sm font-medium flex items-center gap-1 mx-auto mb-10">
          Learn More <span>›</span>
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img
            src={image1}
            alt="Walleex process 1"
            className="rounded-lg shadow-md object-cover w-full h-60"
          />
          <img
            src={image2}
            alt="Walleex process 2"
            className="rounded-lg shadow-md object-cover w-full h-80"
          />
          <img
            src={image3}
            alt="Walleex process 3"
            className="rounded-lg shadow-md object-cover w-full h-60"
          />
        </div>
      </div>
    </section>
  )
}

export default WalleexSection


