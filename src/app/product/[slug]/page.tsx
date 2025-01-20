"use client";

import Parteners from "../../components/partners";
import Image from "next/image";
import { useEffect, useState } from "react";
import BestSeller from "../../components/featuredproduct";
import { client } from "@/sanity/lib/client";
import AddToCart from "@/app/components/addToCart";


interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  currentslug: string;
  image_url: string;
  quantity?: number; // Optional field
}


async function getData(slug: string): Promise <Product[]> {
  const query = `
    *[_type == "product" && slug.current == $slug] {
      _id,
      name,
      description,
      price,
      "currentslug": slug.current,
      "image_url": image.asset->url,
    }
  `;
  const data: Product[] = await client.fetch(query, { slug });
  return data;
}

export default function Product({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product[]>([]);
  const [bestSellerComponent, setBestSellerComponent] =
    useState<JSX.Element | null>(null);

  // Fetch product data based on slug
  useEffect(() => {
    async function fetchData() {
      const res = await getData(params.slug);
      setProduct(res || []);
    }
    fetchData();
  }, [params.slug]);

  // Load BestSeller component dynamically
  useEffect(() => {
    const fetchBestSeller = async () => {
      const component = await BestSeller();
      setBestSellerComponent(component);
    };
    fetchBestSeller();
  }, []);

  return (
    <div>
      {product.length > 0 ? (
        product.map((products) => (
          <div
            key={products._id}
            className="w-[100vw] flex flex-col lg:flex-row pl-3  gap-56 bg-[#ECECEC] h-auto py-20"
          >
            {/* Product Image */}
            <div className="relative md:left-24 -top-8 ">
              <Image
                className="lg:w-[700px] lg:h-[400px] md:w-[400px] md:h-[300px] w-[300px] h-[300px]"
                src={products.image_url}
                alt={products.name}
                width={500}
                height={400}
              />
             
            </div>

            {/* Product Details */}
            <div className=" flex flex-col  w-[100vw]  gap-6  items-center lg:items-start  lg:-top-0 relative -top-28  ">
              <p className="text-[20px]  md:w-[30rem] font-semibold leading-[30px] text-[#252B42]">
                {products.name}
              </p>
              <div className="font-bold w-[105px] text-[#252B42] text-[24px] leading-8">
                Rs.{products.price}
              </div>
              <div className="flex gap-2 w-40 font-bold text-[14px] leading-6">
                <p className="text-[#737373]">Available:</p>
                <p className="text-[#23A6F0]">In Stock</p>
              </div>
              <div className="w-[270px] md:w-[400px] h-[60px] text-[#858585] pb-24 border-b-[1px] border-[#BDBDBD] text-[14px] leading-[20px]">
                {products.description}
                <div className="flex  md:flex-row items-center gap-4">
                  <AddToCart currency="PKR" description={products.description} image={products.image_url} name={products.name} price={products.price} 
                  quantity={products.quantity?.toString() || ''} key={products._id} id={products._id}/>
                  
                  {/* <button className="w-36 h-11 mt-16 sm:mt-8 rounded-md hover:bg-blue-200 hover:text-white bg-[#23A6F0] text-white">
                    Add to cart
                  </button> */}
                  <button className="w-36 hover:bg-gray-300 h-11 mt-16 sm:mt-8 rounded-md bg-[#c4c5c5] text-[#1a1a1a]">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No product found.</div>
      )}

      {/* Best Seller Component */}
      {bestSellerComponent}

      {/* Partners */}
      <Parteners />
    </div>
  );
}
