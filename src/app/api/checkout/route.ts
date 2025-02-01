import { NextResponse } from "next/server";
import Stripe from "stripe";

// Define types for product data
interface Product {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

// POST handler
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse JSON body
    const { products }: { products: Product[] } = body; // Specify the correct type for products

    if (!products || products.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: products.map((product) => ({
        price_data: {
          currency: "pkr",
          product_data: {
            name: product.name,
            images: [product.image], // Adding product image
          },
          unit_amount: product.price * 100, // Convert price to cents
        },
        quantity: product.quantity, // Use actual quantity from cart
      })),
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

// Handle GET requests with Method Not Allowed
export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
