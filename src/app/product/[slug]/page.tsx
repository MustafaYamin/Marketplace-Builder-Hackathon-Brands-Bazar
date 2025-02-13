"use client";

import Parteners from "../../components/partners";
import Image from "next/image";
import { useEffect, useState, use, type JSX } from "react";
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

export default function Product(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
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
    <div className="min-h-screen bg-gray-50">
      {product.length > 0 ? (
        product.map((products) => (
          <div
            key={products._id}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          >
            <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-lg p-8">
              {/* Product Image */}
              <div className="lg:w-1/2">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-300"
                    src={products.image_url}
                    alt={products.name}
                    width={800}
                    height={800}
                    priority
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="lg:w-1/2 flex flex-col gap-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {products.name}
                  </h1>
                  <div className="flex items-center gap-4">
                    <p className="text-3xl font-bold text-indigo-600">
                      Rs.{products.price.toLocaleString()}
                    </p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      In Stock
                    </span>
                  </div>
                </div>

                <div className="prose prose-sm text-gray-500">
                  <p className="text-base leading-relaxed">
                    {products.description}
                  </p>
                </div>

                <div className="mt-6">
                  <AddToCart
                    currency="PKR"
                    description={products.description}
                    image={products.image_url}
                    name={products.name}
                    price={products.price}
                    quantity={products.quantity?.toString() || ''}
                    key={products._id}
                    id={products._id}
                  />
                </div>

                {/* Additional Product Features */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Free Delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600">Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="text-gray-600">Easy Returns</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center p-8 rounded-lg bg-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Product Not Found</h2>
            <p className="text-gray-600">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          </div>
        </div>
      )}

      {/* Best Seller Component with improved spacing */}
      <div className="mt-16 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {bestSellerComponent}
        </div>
      </div>

      {/* Partners with improved spacing */}
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full overflow-hidden">
            <Parteners />
          </div>
        </div>
      </div>
    </div>
  );
}
