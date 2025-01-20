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
        

        {/* <div className="w-[100vw] py-7 flex items-center justify-center">
          <div className="w-72  flex  border-2 border-[#BDBDBD] rounded-md ">
            <div className="h-16 font-bold cursor-pointer active:bg-[#BDBDBD] active:text-[#F3F3F3] flex items-center justify-center text-[#BDBDBD] bg-[#F3F3F3]  border-r-2 w-[84px] border-[#BDBDBD]">
              First
            </div>
            <div className="h-16 font-bold cursor-pointer active:text-white active:bg-[#23A6F0]  flex items-center justify-center text-[#23A6F0]  border-r-2 w-11 border-[#BDBDBD]">
              1
            </div>
            <div className="h-16 font-bold cursor-pointer active:text-white active:bg-[#23A6F0]  flex items-center justify-center text-[#23A6F0]  border-r-2 w-11 border-[#BDBDBD]">
              2
            </div>
            <div className="h-16 font-bold cursor-pointer active:text-white active:bg-[#23A6F0]  flex items-center justify-center text-[#23A6F0]  border-r-2 w-11 border-[#BDBDBD]">
              3
            </div>
            <div className="h-16 font-bold cursor-pointer active:text-white active:bg-[#23A6F0] flex items-center justify-center text-[#23A6F0] w-[84px] ">
              Next
            </div>
          </div>
        </div> */}

        <div className="lg:hidden ">
          <Parteners />
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
