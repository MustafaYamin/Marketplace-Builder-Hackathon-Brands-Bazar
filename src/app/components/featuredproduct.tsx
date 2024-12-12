// import React from "react";
import BestsellerProp from "./props/bestseller";
export default function BestSeller() {
  return (
    <div className="flex py-7 flex-col items-center">
      <h1 className="leading-[30px] text-[#737373]">Featured Products</h1>
      <h2 className="leading-[32px] font-bold text-[#252B42] ">
        BESTSELLER PRODUCTS
      </h2>
      <p className="leading-[20px] text-[14px] font-[14px] text-[#737373]">
        Problems trying to resolve the conflict between
      </p>

      <div className="pt-6 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <BestsellerProp src="/bsp1.png" alt="bsp 1" />
        <BestsellerProp src="/bsp2.png" alt="bsp 2" />
        <BestsellerProp src="/bsp3.png" alt="bsp 3" />
        <BestsellerProp src="/bsp4.png" alt="bsp 4" />
        <BestsellerProp src="/bsp5.png" alt="bsp 5" />
        <BestsellerProp src="/bsp6.png" alt="bsp 6" />
        <BestsellerProp src="/bsp7.png" alt="bsp 7" />
        <BestsellerProp src="/bsp8.png" alt="bsp 8" />
      </div>
    </div>
  );
}
