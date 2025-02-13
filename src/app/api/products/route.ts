import { NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity';

interface SanityProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
}

export async function GET() {
  try {
    const query = `*[_type == "product"] {
      _id,
      name,
      description,
      price,
      "currentslug": slug.current,
      "image_url": image.asset->url,
      _createdAt
    }`;

    const products = await sanityClient.fetch(query);

    // Transform the image URLs to include the Sanity project details
    const transformedProducts = products.map((product: SanityProduct) => ({
      ...product,
      image_url: product.image_url || '/placeholder.png' // Fallback image if none exists
    }));

    return NextResponse.json(transformedProducts);
  } catch (error) {
    console.error('Error in products API:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
} 