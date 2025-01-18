import React from "react";
import { client } from "../../sanity/lib/client";
import Image from "next/image";

function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

const getFtProducts = async () => {
  const product = await client.fetch(`
    *[_type == "product"][0..7]{
  _id,
    name,
    
    price,
    
    "image_url": image.asset->url,
}
    `);
  return product;
};
export default async function BestSeller() {
  const products = await getFtProducts();
  // console.log(products);
  return (
    <div className="flex py-7 flex-col items-center">
      <h1 className="leading-[30px] text-[#737373]">Featured Products</h1>
      <h2 className="leading-[32px] font-bold text-[#252B42] ">
        BESTSELLER PRODUCTS
      </h2>
      <p className="leading-[20px] text-[14px] font-[14px] text-[#737373]">
        Problems trying to resolve the conflict between
      </p>

      <div className="pt-6 gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(
          (product: {
            id: string;
            name: string;
            price: number;
            image_url: string;
          }) => (
            <div className="w-[241px] h-[639px] " key={product.id}>
              <Image
                className="h-80 "
                alt={product.name}
                src={product.image_url}
                width={239}
                height={420}
              />
              <div className="w-[239px] h-[188px] flex flex-col pt-1 items-center gap-2 ">
                <h1 className="font-bold text-[16px] text-[#252B42] leading-[24px]">
                  {truncateText(product.name, 20)}
                </h1>
                <p className="text-[14px] leading-[24px] font-bold text-[#737373]">
                  English Department
                </p>
                <div className="flex gap-1 items-center">
                  <p className="font-bold text-[16px] text-[#23856D] ">
                    {product.price}
                  </p>
                </div>
                <div className="py-3 flex gap-2">
                  <div className="rounded-full w-[16px] h-[16px] bg-[#23A6F0] "></div>
                  <div className="rounded-full w-[16px] h-[16px] bg-[#23856D]"></div>
                  <div className="rounded-full w-[16px] h-[16px] bg-[#E77C40]"></div>
                  <div className="rounded-full w-[16px] h-[16px] bg-[#252B42]"></div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
