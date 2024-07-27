// components/HeroSection.js
'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-brown-900 flex justify-center items-center">
      <img src="/s17.jpg" alt="Hero Image" className="w-[1200px] h-[600px] object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-10 bg-black bg-opacity-40">
        <h1 className="text-white text-5xl font-bold mb-4">Scent for Serenity</h1>
        <p className="text-white text-xl">A home away from home</p>
      </div>
    </div>
  );
};

export default HeroSection;
