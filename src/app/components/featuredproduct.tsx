import React from "react";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

const getFtProducts = async () => {
  const product = await client.fetch(`
    *[_type == "product"][0..11]{
  _id,
    name,
    description,
    price,
    "currentslug" : slug.current,
    "image_url": image.asset->url,
}
    `);
  return product;
};
export default async function BestSeller() {
  const products = await getFtProducts();
  return (
    <div className="flex py-7 flex-col items-center">
      <h1 className="leading-[30px] text-[#737373]">Recommended Products</h1>
      <h2 className="leading-[32px] font-bold text-[#252B42] ">
        BESTSELLER PRODUCTS
      </h2>
      

      <div className="pt-6 gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(
          (product: {
            id: string;
            name: string;
            price: number;
            image_url: string;
            description: string;
            currentslug: string;
          }) => (
            <div key={product.id} className="rounded-lg border-[1.5px] border-gray-300 shadow-lg p-3">

            <div className="w-[250px]  h-[470px]  " >
              <Image
                className="h-80 "
                alt={product.name}
                src={product.image_url}
                width={239}
                height={420}
                />
              <div className="w-[239px] h-[188px] flex flex-col pt-1 items-center  ">
                <h1 className="font-bold text-[16px] text-[#252B42] leading-[24px]">
                  {truncateText(product.name, 20)}
                </h1>
                <p className="text-[14px] leading-[24px] font-bold text-[#737373]">
                  {truncateText(product.description, 50)}
                </p>
                <div className="flex gap-1 items-center">
                  <p className="font-bold text-[16px] flex gap-2 text-[#23856D] ">
                    
                      <span className="font-bold text-[16px] text-slate-900">PKR</span>
                      {product.price}
                  </p>
                </div>
                <div className="py-3 flex gap-2">
                                    
                  <Link href={`/product/${product.currentslug}`}>
                  <button className="bg-[#F2F2F2] hover:bg-[#dbdada] active:bg-[#dbdada] font-medium text-[#252B42] w-[200px] h-[40px] rounded-md">
                    View Details

                  </button>
                  </Link>
                </div>
              </div>
            </div>
                </div>
          )
        )}
      </div>
    </div>
  );
}
