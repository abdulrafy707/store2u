// customer/components/Categories.js
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    router.push(`/customer/pages/category/${categoryId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.imageUrl ? (
              <img
                src={`https://appstore.store2u.ca/uploads/${category.imageUrl}`}
                alt={category.name}
                className="w-full h-32 object-cover mb-4"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = '/fallback-image.jpg';
                }}
              />
            ) : (
              <img
                src="/fallback-image.jpg"
                alt={category.name}
                className="w-full h-32 object-cover mb-4"
              />
            )}
            <p className="text-lg font-semibold">{category.name}</p>
            <p className="text-gray-500">{category.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
