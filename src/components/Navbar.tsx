"use client"

import Link from "next/link"
import { useShoppingCart } from "use-shopping-cart"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const { handleCartClick } = useShoppingCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-lg font-semibold">
                Home
              </Link>
              <Link href="/products" className="text-lg font-semibold">
                Products
              </Link>
              <Link href="/about" className="text-lg font-semibold">
                About
              </Link>
              <Link href="/contact" className="text-lg font-semibold">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">
            Your Store Name
          </span>
        </Link>

        <nav className="flex-1 items-center space-x-6 text-sm font-medium hidden lg:flex">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link href="/products" className="transition-colors hover:text-foreground/80">
            Products
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </nav>

        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            aria-label="Shopping Cart"
            onClick={() => handleCartClick()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
} 