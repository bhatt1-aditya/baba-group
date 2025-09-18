import React from 'react'
import image1 from "../../../Assets/new_home/coreflexx/babagroup1.png"
const BabaGroupSection = () => {
  return (
<section className="text-center py-16 bg-white">
<div className="max-w-3xl mx-auto px-4">
<p className="text-gray-700 text-sm mb-6">
Watch how Baba Group blends innovation, craftsmanship, and sustainability to deliver world-class surfaces.
</p>
<button className="text-gray-600 text-sm font-medium flex items-center gap-1 mx-auto mb-8">
Watch Now <span>›</span>
</button>
<div className="flex justify-center">
<img
src={image1}
alt="Baba Group showcase"
className="rounded-lg shadow-md object-cover w-full max-w-xl h-72"
/>
</div>
</div>
</section>
);
}

export default BabaGroupSection