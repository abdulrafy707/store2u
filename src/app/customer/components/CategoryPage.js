'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const CategoryPage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const categoryResponse = await axios.get(`/api/categories/${id}`);
        setCategory(categoryResponse.data);

        const subcategoriesResponse = await axios.get(`/api/subcategories?categoryId=${id}`);
        setSubcategories(subcategoriesResponse.data);

        const productsResponse = await axios.get(`/api/products?categoryId=${id}`);
        setProducts(productsResponse.data);
        setFilteredProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchCategoryData();
  }, [id]);

  const handleSubcategoryClick = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
    const filtered = products.filter(product => product.subcategoryId === subcategoryId);
    setFilteredProducts(filtered);
  };

  const handleShowAllProducts = () => {
    setSelectedSubcategory(null);
    setFilteredProducts(products);
  };

  if (!category) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        <button
          className={`cursor-pointer p-2 rounded ${!selectedSubcategory ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
          onClick={handleShowAllProducts}
        >
          All
        </button>
        {subcategories.map((subcategory) => (
          <button
            key={subcategory.id}
            className={`cursor-pointer p-2 rounded ${selectedSubcategory === subcategory.id ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => handleSubcategoryClick(subcategory.id)}
          >
            {subcategory.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            {product.url ? (
              <img
                src={`https://appstore.store2u.ca/uploads/${product.url}`}
                alt={product.name}
                className="h-48 w-full object-cover mb-4 rounded"
                onError={(e) => { e.target.onerror = null; e.target.src = '/default-image.png'; }} // Fallback image
              />
            ) : (
              <div className="h-48 w-full bg-gray-200 mb-4 rounded flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-lg font-medium text-gray-700 mb-1">Rs.{product.price}</p>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
