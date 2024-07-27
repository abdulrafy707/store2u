// components/ProductList.js

'use client';

import React from 'react';

const images = [
  's1.jpg', 's2.jpg', 's3.jpg', 's4.jpg',
  's5.jpg', 's6.jpg', 's7.jpg', 's8.jpg',
  's9.jpg', 's10.jpg', 's11.jpg', 's12.jpg',
  's13.jpg', 's14.jpg', 's15.jpg', 's16.jpg'
];

const ProductList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={`/${image}`}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover mb-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/fallback-image.jpg'; // Replace with a path to a fallback image
              }}
            />
            <p className="text-gray-700">Product Name {index + 1}</p>
            <p className="text-gray-500">2,090.00 THB</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
