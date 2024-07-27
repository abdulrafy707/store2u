'use client'
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import FlashSale from './components/FlashSale';
import BenefitsBar from './components/BenefitsBar';
import Testimonials from './components/Testimonials';
import TopCategories from './components/TopCategories';
import Products from './components/Products';
import Features from './components/Features';
import ProductsSection from './components/ProductsSection';
import BrowseCategories from './components/BrowseCategories';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import ScrollingInfo from './components/ScrollingInfo';
import ProductList from './components/ProductList';
import HeroSection from './components/HeroSection';
import Slider from './components/Carousel';
import ResumeTemplate from './components/ResumeTemplate';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import CategoryProductsComponent from './components/CategoryProductsComponent';

const categoriesData = [
  { name: 'Wardrobe Organisers', image: '/wardrobe-organisers.jpg' },
  { name: 'Moisturizers', image: '/moisturizers.jpg' },
  { name: 'Studio Headphones', image: '/studio-headphones.jpg' },
  { name: 'Shampoo', image: '/shampoo.jpg' },
  { name: 'Space Savers', image: '/space-savers.jpg' },
  { name: 'Clips, Pins & Tacks', image: '/clips-pins-tacks.jpg' },
  { name: 'Wardrobe Organisers', image: '/wardrobe-organisers.jpg' },
  { name: 'Moisturizers', image: '/moisturizers.jpg' },
  { name: 'Studio Headphones', image: '/studio-headphones.jpg' },
  { name: 'Shampoo', image: '/shampoo.jpg' },
  { name: 'Space Savers', image: '/space-savers.jpg' },
  { name: 'Clips, Pins & Tacks', image: '/clips-pins-tacks.jpg' },
];

const CustomerPage = () => {
  // const [formData, setFormData] = useState({});

  return (
    <div>
      {/* <div className="min-h-screen bg-gray-200 flex">
      <ResumeForm onChange={setFormData} />
      <ResumePreview formData={formData} />
    </div> */}
      <carousel/>
      
      {/* <TopBar/> */}
      {/* <Header /> */}
      <Slider/>
      {/* <ResumeTemplate/> */}
      {/* <HeroSection/> */}
      
      
      {/* <ProductList/> */}
      {/* <Header/> */}
      {/* <ScrollingInfo/> */}
      <main className="p-4">
        {/* <BrowseCategories/> */}
        
        {/* <BenefitsBar/> */}
        
        <FlashSale />
        <TopCategories/>
        <Products/>
        <Features/>
        <CategoryProductsComponent/>
        {/* <ProductsSection/> */}
        {/* <Footer/> */}
        {/* <Categories categories={categoriesData} /> */}
      
        {/* <Testimonials/> */}
        
        {/* <Footer/> */}
      </main>
    </div>
  );
};

export default CustomerPage;
