"use client";


import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingCart, Eye } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { toast } from "sonner";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  currentslug: string;
  image_url: string;
}

interface ProductListProps {
  sortBy: string;
  layout: string;
}

function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

const ProductSkeleton = ({ layout }: { layout: string }) => (
  <div className={`bg-white rounded-xl overflow-hidden shadow-sm ${
    layout === 'list' ? 'flex-row h-[200px] flex' : 'flex flex-col'
  }`}>
    <div className={`relative ${
      layout === 'list' ? 'w-[200px] h-full' : 'w-full pt-[100%]'
    }`}>
      <div className="absolute inset-0 p-4">
        <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse" />
      </div>
    </div>
    
    <div className={`${
      layout === 'list' 
        ? 'flex-1 p-4 flex flex-col justify-between' 
        : 'p-4 flex flex-col flex-grow'
    }`}>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3" />
      </div>
      <div className="mt-4 space-y-3">
        <div className="h-5 bg-gray-200 rounded animate-pulse w-1/4" />
        <div className="h-8 bg-gray-200 rounded animate-pulse w-full" />
      </div>
    </div>
  </div>
);

const ProductList = ({ sortBy, layout }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const { addItem } = useShoppingCart();
  const [addingToCart, setAddingToCart] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/products');
        const data = await response.json();

        const sortedProducts = [...data];
        switch (sortBy) {
          case 'newest':
            sortedProducts.sort((a, b) => 
              (new Date(b.createdAt).getTime()) - (new Date(a.createdAt).getTime())
            );
            break;
          case 'lowToHigh':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
          case 'highToLow':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
          default:
            break;
        }
        
        setProducts(sortedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [sortBy]);

  const handleAddToCart = async (product: Product) => {
    try {
      setAddingToCart(product._id);
      addItem({
        name: product.name,
        id: product._id,
        price: product.price,
        currency: 'PKR',
        image: product.image_url,
      });
      toast.success('Added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add to cart');
    } finally {
      setAddingToCart(null);
    }
  };

  if (loading) {
    return (
      <div className={`grid ${
        layout === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
          : 'grid-cols-1 gap-4'
      }`}>
        {[...Array(8)].map((_, index) => (
          <ProductSkeleton key={index} layout={layout} />
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No products found. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className={`grid ${
      layout === 'grid' 
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
        : 'grid-cols-1 gap-4'
    }`}>
      {products.map((product) => (
        <div
          key={product._id}
          className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex ${
            layout === 'list' ? 'flex-row h-[200px]' : 'flex-col'
          }`}
          onMouseEnter={() => setHoveredProduct(product._id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className={`relative ${
            layout === 'list' ? 'w-[200px] h-full' : 'w-full pt-[100%]'
          }`}>
            <div className={`${layout === 'list' ? 'absolute inset-0 p-2' : 'absolute inset-0 p-4'}`}>
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  alt={product.name || "Product"}
                  src={product.image_url || "/placeholder.png"}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>

            <div className={`absolute right-6 top-6 flex flex-col gap-2 transition-all duration-300 ${
              hoveredProduct === product._id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
              <button 
                onClick={() => handleAddToCart(product)}
                disabled={addingToCart === product._id}
                className="p-2 bg-white rounded-full shadow-md hover:bg-[#2dc070] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Add to cart"
              >
                {addingToCart === product._id ? (
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <ShoppingCart size={18} />
                )}
              </button>
              <Link href={`/product/${product.currentslug}`}>
                <button 
                  className="p-2 bg-white rounded-full shadow-md hover:bg-[#2dc070] hover:text-white transition-colors"
                  aria-label="Quick view"
                >
                  <Eye size={18} />
                </button>
              </Link>
            </div>

            <div className="absolute top-6 left-6">
              <span className="bg-[#2dc070] text-white text-xs px-3 py-1 rounded-full">
                Sale
              </span>
            </div>
          </div>

          <div className={`${
            layout === 'list' 
              ? 'flex-1 p-4 flex flex-col justify-between' 
              : 'p-4 flex flex-col flex-grow'
          }`}>
            <div className="mb-auto">
              <h3 className={`font-semibold text-[#252B42] group-hover:text-[#2dc070] transition-colors mb-1 ${
                layout === 'list' ? 'text-lg' : 'text-base'
              }`}>
                {truncateText(product.name || "Unknown Product", layout === 'list' ? 40 : 20)}
              </h3>
              <p className="text-sm text-[#737373] mb-3">
                {truncateText(product.description || "No description available", layout === 'list' ? 100 : 50)}
              </p>
            </div>

            <div className={`space-y-3 ${layout === 'list' ? 'flex items-center gap-4 space-y-0' : ''}`}>
              <div className="flex items-center gap-2">
                <span className="text-[#23856D] font-bold text-base">
                  PKR {product.price?.toLocaleString() || "N/A"}
                </span>
                <span className="text-[#737373] line-through text-sm">
                  PKR {(product.price * 1.2).toFixed(0)}
                </span>
              </div>

              <Link 
                href={`/product/${product.currentslug}`}
                className={`${layout === 'list' ? 'w-auto' : 'block w-full mt-2'}`}
              >
                <button className={`py-2 px-4 bg-[#F2F2F2] hover:bg-[#2dc070] hover:text-white 
                                 transition-all duration-300 rounded-md font-medium text-[#252B42] text-sm
                                 ${layout === 'list' ? 'w-auto' : 'w-full'}`}>
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
