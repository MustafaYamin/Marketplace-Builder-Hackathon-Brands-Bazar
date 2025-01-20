"use client";

import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  currentslug: string;
  image_url: string;
}


function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

const getFtProducts = async () => {
  try {
    const product = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        description,
        price,
        "currentslug": slug.current,
        "image_url": image.asset->url,
      }
    `);
    return product;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default function ProductList() {
  const [products, setProducts] = useState <Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getFtProducts();
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex py-7 flex-col items-center">
      <div className="pt-6 gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            className="rounded-lg border-[1.5px] border-gray-300 shadow-lg p-3"
            key={product._id}
          >
            <div className="w-[250px] h-[470px]">
              <Image
                className="h-80"
                alt={product.name || "Product"}
                src={product.image_url || "/placeholder.png"}
                width={239}
                height={420}
              />
              <div className="w-[239px] h-[188px] flex flex-col pt-1 items-center">
                <h1 className="font-bold text-[16px] text-[#252B42] leading-[24px]">
                  {truncateText(product.name || "Unknown Product", 20)}
                </h1>
                <p className="text-[14px] leading-[24px] text-[#737373]">
                  {truncateText(
                    product.description || "No description available",
                    50
                  )}
                </p>
                <div className="flex gap-1 items-center">
                  <p className="font-bold text-[16px] flex gap-2 text-[#23856D]">
                    <span className="font-bold text-[16px] text-slate-900">
                      PKR
                    </span>
                    {product.price || "N/A"}
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
        ))}
      </div>
    </div>
  );
}
