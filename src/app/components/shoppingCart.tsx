"use client";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";

import Link from "next/link";



export function ShoppingCart() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
  } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-xl w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex-flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="text-3xl py-6">Cart is empty</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entery) => (
                    <li key={entery.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entery.image as string}
                          alt={entery.name}
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-col flex-1">
                        <div>
                          <div className="flex justify-between text-base  font-semibold text-gray-900">
                            <h3>{entery.name}</h3>
                            <p>Rs{entery.price}</p>
                          </div>
                         
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            QTY: {entery.quantity}
                          </p>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium  text-red-500 hover:text-primary/80"
                              onClick={() => removeItem(entery.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
            <div className="border-t   border-gray-200 px-4 py-6 sm:px-6">
            <div className="  flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>{totalPrice}</p>
            </div>
        
            <><p className="mt-0.5 text-sm text-gray-500">Shiping is calculated at checkout</p>
            <Link onClick={() => removeItem(entery.id)} href="/thankyou" className="mt-6">
              <button className="bg-[#7979dbb7] hover:bg-[#8e8eeeb7] text-lg active:bg-[#8e8eeeb7] text-white font-bold rounded-md w-full py-4">Checkout</button>
            </Link></>
    
          </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="  flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>{totalPrice}</p>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
