"use client";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";

// Define CartItem type with optional image
interface CartItem {
  id: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
}

export function ShoppingCart() {
  const {
    cartCount = 0,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    clearCart,
  } = useShoppingCart();

  // Convert cartDetails into an array of CartItem[]
  const cartItems: CartItem[] = Object.values(cartDetails || {}) as CartItem[];

  // Checkout function with correctly typed cartItems
  async function handleCheckout(cartItems: CartItem[]) {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cartItems }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Clear the cart before redirecting
        clearCart();
        window.location.href = data.url;
      } else {
        throw new Error('Checkout failed');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your checkout. Please try again.');
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-xl w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="text-3xl py-6">Cart is empty</h1>
              ) : (
                <>
                  {cartItems.map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        {/* Handle optional image */}
                        {entry.image ? (
                          <Image
                            src={entry.image}
                            alt={entry.name}
                            width={100}
                            height={100}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            No Image
                          </div>
                        )}
                      </div>

                      <div className="ml-4 flex flex-col flex-1">
                        <div>
                          <div className="flex justify-between text-base font-semibold text-gray-900">
                            <h3>{entry.name}</h3>
                            <p>Rs {entry.price}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-red-500 hover:text-primary/80"
                              onClick={() => removeItem(entry.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal:</p>
            <p>Rs {totalPrice}</p>
          </div>

          {cartCount > 0 && (
            <>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping is calculated at checkout
              </p>
              <button
                onClick={() => handleCheckout(cartItems)}
                className="bg-[#7979dbb7] hover:bg-[#8e8eeeb7] text-lg active:bg-[#8e8eeeb7] text-white font-bold rounded-md w-full py-4"
              >
                Checkout
              </button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
