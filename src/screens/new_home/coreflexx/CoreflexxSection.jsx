import React from 'react'

const CoreflexxSection = () => {
 return (
<section className="text-center py-16 bg-white">
<div className="max-w-5xl mx-auto px-4">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 items-center">
<img
src="/images/coreflexx1.jpg"
alt="Coreflexx design 1"
className="rounded-lg shadow-md object-cover w-full h-48"
/>
<img
src="/images/coreflexx2.jpg"
alt="Coreflexx design 2"
className="rounded-lg shadow-md object-cover w-full h-48 sm:col-span-1 col-span-2"
/>
<img
src="/images/coreflexx3.jpg"
alt="Coreflexx design 3"
className="rounded-lg shadow-md object-cover w-full h-48"
/>
<img
src="/images/coreflexx4.jpg"
alt="Coreflexx design 4"
className="rounded-lg shadow-md object-cover w-full h-48"
/>
</div>
<button className="text-gray-600 text-sm font-medium flex items-center gap-1 mx-auto mb-4">
Explore More <span>›</span>
</button>
<h2 className="text-3xl font-semibold text-gray-900 mb-2">What’s New at</h2>
<h3 className="text-4xl font-bold text-gray-800 mb-4">COREFLEXX?</h3>
<p className="text-gray-600 max-w-3xl mx-auto">
Discover our upgraded flooring and panel innovations built for flexibility, strength, and sustainability.
Coreflexx keeps pushing boundaries to give your projects a durable, future-ready edge.
</p>
</div>
</section>
);
}

export default CoreflexxSection