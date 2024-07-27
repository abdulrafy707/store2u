// components/ProductsSection.js
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products'); // Using the single products API
        console.log('Fetched products:', response.data); // Log the fetched products
        setProducts(response.data);
        setLoading(false);

        // Separate products into trending and recently added
        const trending = response.data.filter(product => product.isTrending); // Assuming isTrending field
        const recent = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);

        setTrendingProducts(trending);
        setRecentProducts(recent);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Trending Products</h2>
            {trendingProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {product.url ? (
                  <img
                    src={`https://appstore.store2u.ca/uploads/${product.url}`}
                    alt={product.name}
                    className="h-24 w-24 object-cover mr-4 rounded"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/default-image.png'; }} // Fallback image
                  />
                ) : (
                  <div className="h-24 w-24 bg-gray-200 mr-4 rounded flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-2">${product.price}</p>
                  <p className="text-gray-500">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Recently Added</h2>
            {recentProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {product.url ? (
                  <img
                    src={`https://appstore.store2u.ca/uploads/${product.url}`}
                    alt={product.name}
                    className="h-24 w-24 object-cover mr-4 rounded"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/default-image.png'; }} // Fallback image
                  />
                ) : (
                  <div className="h-24 w-24 bg-gray-200 mr-4 rounded flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-2">${product.price}</p>
                  <p className="text-gray-500">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
