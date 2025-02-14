"use client";
import Parteners from "../components/partners";
import React, { useState } from "react";
import ProductList from "../components/productlisting";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

const ProductListingPage = () => {
  const { scrollYProgress } = useScroll();
  const [sortBy, setSortBy] = useState('popular');
  const [layout, setLayout] = useState('grid');

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
    >
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#252B42]">
              Shop
            </h1>
            <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
              <Link href="/" className="text-[#252B42] hover:text-[#2dc070]">
                Home
              </Link>
              <span className="text-[#737373]">/</span>
              <span className="text-[#737373]">Shop</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-8">
       

        {/* Product Grid */}
        <div className="mb-12">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-[#252B42]">Our Products</h2>
                <p className="text-[#737373]">Discover our curated collection</p>
              </div>
              <div className="flex items-center gap-4">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border rounded-md bg-white hover:border-[#2dc070] focus:outline-none focus:border-[#2dc070] transition-colors"
                >
                 
                  <option value="newest">Newest</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setLayout('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      layout === 'grid' 
                        ? 'bg-[#2dc070] text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                  </button>
                  <button 
                    onClick={() => setLayout('list')}
                    className={`p-2 rounded-md transition-colors ${
                      layout === 'list' 
                        ? 'bg-[#2dc070] text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <ProductList 
              sortBy={sortBy} 
              layout={layout}
            />
          </div>
        </div>

        {/* Partners Section - Mobile */}
        <div className="lg:hidden mt-12">
          <Parteners />
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-[#2dc070]"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%"
        }}
      />
    </motion.div>
  );
};

export default ProductListingPage;
