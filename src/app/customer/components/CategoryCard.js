'use client';

import React from 'react';

const CategoryCard = ({ imageUrl, name, tagline, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      {imageUrl ? (
        <img
          src={`https://appstore.store2u.ca/uploads/${imageUrl}`}
          alt={name}
          className="w-full h-32 object-cover mb-4 transform transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/fallback-image.jpg';
          }}
        />
      ) : (
        <img
          src="/fallback-image.jpg"
          alt={name}
          className="w-full h-32 object-cover mb-4"
        />
      )}
      <p className="text-lg font-semibold">{name}</p>
      {tagline && <p className="text-gray-500">{tagline}</p>}
    </div>
  );
};

export default CategoryCard;
