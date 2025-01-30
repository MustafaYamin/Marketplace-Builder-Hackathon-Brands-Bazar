// "use client";
import Parteners from "../components/partners";
import React from "react";
import ProductList from "../components/productlisting";


const ProductListingPage = () => {
  return (
    // <div>
    <div>
      <div className="bg-[#FAFAFA] w-[100vw]">
       

        <div className="hidden lg:block">
          <Parteners />
        </div>

  <ProductList />[]
        

        
        <div className="lg:hidden ">
          <Parteners />
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
