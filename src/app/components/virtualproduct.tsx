

import React from "react";
import Image from "next/image";

export default function VirtualProducts() {
  return (
    <div className="overflow-visible">
      <div className="relative bg-[#23856D] w-full h-auto flex flex-col lg:flex-row justify-center items-start p-4 lg:p-10">
        {/* Text Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 lg:pr-8 mt-10 lg:mt-20">
          <p className="font-bold text-white text-xs sm:text-sm md:text-base">
            SUMMER 2020
          </p>
          <p className="leading-tight text-white text-2xl sm:text-3xl lg:text-5xl xl:text-[4rem] font-bold">
            Vita Classic Product
          </p>
          <p className="leading-snug text-white text-sm sm:text-base lg:text-lg lg:w-[90%]">
            We know how large objects will act, we know how our objects will
            act, we know.
          </p>

          <div className="flex flex-col sm:flex-row items-baseline gap-4">
            <p className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white">
              $16.48
            </p>
            <button className="mt-4 sm:mt-0 lg:w-[228px] lg:h-[62px] bg-[#2DC071] text-white font-bold rounded-sm py-2 px-4 text-sm sm:text-base">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:w-1/2 mt-10 lg:mt-0">
          <Image
            alt="green hero section"
            src="/virtual-product.png"
            width={400}
            height={650}
            className="w-[80%] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
