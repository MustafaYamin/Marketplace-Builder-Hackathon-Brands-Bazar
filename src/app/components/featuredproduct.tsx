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
      "currentslug": slug.current,
      "image_url": image.asset->url,
    }
  `);
  return product;
};

export default async function BestSeller() {
  const products = await getFtProducts();
  
  return (
    <section className="py-16 px-4 max-w-[1400px] mx-auto">
      <div className="text-center mb-12">
        <p className="text-[#737373] text-lg mb-2">Recommended Products</p>
        <h2 className="text-3xl font-bold text-[#252B42] relative inline-block">
          BESTSELLER PRODUCTS
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#2dc070]"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product: {
          id: string;
          name: string;
          price: number;
          image_url: string;
          description: string;
          currentslug: string;
        }) => (
          <div 
            key={product.id} 
            className="group bg-white rounded-lg border border-gray-200 hover:border-[#2dc070] transition-all duration-300 hover:shadow-xl"
          >
            <div className="p-4 flex flex-col h-full">
              <div className="relative h-[300px] mb-4 overflow-hidden rounded-md">
                <Image
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={product.name}
                  src={product.image_url}
                  fill
                  sizes="(max-width: 740px) 90vw, (max-width: 1000px) 40vw, 30vw"
                />
              </div>
              
              <div className="flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-[#252B42] mb-2 group-hover:text-[#2dc070] transition-colors">
                  {truncateText(product.name, 20)}
                </h3>
                
                <p className="text-[#737373] text-sm mb-4 flex-grow">
                  {truncateText(product.description, 50)}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <span className="text-slate-900 font-medium mr-2">PKR</span>
                    <span className="text-[#23856D] font-bold text-xl">
                      {product.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <Link 
                    href={`/product/${product.currentslug}`}
                    className="block w-full"
                  >
                    <button className="w-full py-3 px-6 rounded-md bg-[#F2F2F2] hover:bg-[#2dc070] hover:text-white 
                                     transition-all duration-300 font-medium text-[#252B42]">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
