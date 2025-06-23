"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ShoppingBag, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart-provider"

export default function CartSheet() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5 text-charcoal hover:text-gold transition-colors" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-xs text-white">
              {cartItems.length}
            </span>
          )}
          <span className="sr-only">View cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col bg-white dark:bg-charcoal text-charcoal dark:text-cream">
        <SheetHeader className="pb-4">
          <SheetTitle className="text-2xl font-serif text-charcoal dark:text-gold">Your Cart</SheetTitle>
        </SheetHeader>
        <Separator className="bg-gray-200 dark:bg-deep-brown" />
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center text-gray-600 dark:text-gray-400">
            <ShoppingBag className="h-16 w-16 mb-4 text-gray-400 dark:text-gray-600" />
            <p className="text-lg font-sans">Your cart is empty.</p>
            <Link href="/#featured-products" className="mt-4">
              <Button className="bg-gold text-white hover:bg-gold/90">Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 py-4">
              <div className="grid gap-6 pr-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md object-cover border border-gray-100 dark:border-deep-brown"
                    />
                    <div className="grid gap-1 flex-1">
                      <h3 className="font-semibold text-lg font-serif">{item.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream hover:bg-gray-100 dark:hover:bg-deep-brown"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream hover:bg-gray-100 dark:hover:bg-deep-brown"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only">Remove item</span>
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="grid gap-4 p-4 border-t border-gray-200 dark:border-deep-brown">
              <div className="flex items-center justify-between font-semibold text-lg">
                <span>Total:</span>
                <span className="text-gold">${cartTotal.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="w-full">
                <Button className="w-full bg-gold text-white hover:bg-gold/90 h-12 text-lg font-semibold rounded-full">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
