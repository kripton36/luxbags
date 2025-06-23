"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-provider"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"

export default function CheckoutPage() {
  // This is a placeholder for a real checkout process.
  // In a real application, you would integrate with a payment gateway (e.g., Stripe, PayPal).

  const { cartItems, cartTotal, clearCart } = useCart()

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate order placement
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase from VogueVault. Your order is being processed.",
    })
    clearCart() // Clear cart after successful order
    // Redirect to an order confirmation page
    // router.push('/order-confirmation');
  }

  return (
    <div className="min-h-screen bg-light-gray-bg text-charcoal dark:bg-charcoal dark:text-cream py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold font-serif text-center mb-10 text-charcoal dark:text-gold">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Shipping Information */}
          <div className="bg-white dark:bg-deep-brown p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold font-serif mb-6 text-charcoal dark:text-gold">
              Shipping Information
            </h2>
            <form className="grid gap-6" onSubmit={handlePlaceOrder}>
              <div className="grid gap-2">
                <Label htmlFor="fullName" className="text-charcoal dark:text-cream">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  required
                  className="bg-white dark:bg-charcoal border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream focus:ring-gold focus:border-gold"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address" className="text-charcoal dark:text-cream">
                  Address
                </Label>
                <Input
                  id="address"
                  placeholder="123 Luxury Lane"
                  required
                  className="bg-white dark:bg-charcoal border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream focus:ring-gold focus:border-gold"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="city" className="text-charcoal dark:text-cream">
                    City
                  </Label>
                  <Input
                    id="city"
                    placeholder="New York"
                    required
                    className="bg-white dark:bg-charcoal border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream focus:ring-gold focus:border-gold"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="zip" className="text-charcoal dark:text-cream">
                    Zip Code
                  </Label>
                  <Input
                    id="zip"
                    placeholder="10001"
                    required
                    className="bg-white dark:bg-charcoal border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream focus:ring-gold focus:border-gold"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-charcoal dark:text-cream">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                  className="bg-white dark:bg-charcoal border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream focus:ring-gold focus:border-gold"
                />
              </div>

              <h2 className="text-2xl font-semibold font-serif mt-8 mb-6 text-charcoal dark:text-gold">
                Payment Information
              </h2>
              <div className="grid gap-2">
                <Label htmlFor="cardNumber" className="text-charcoal dark:text-cream">
                  Card Number
                </Label>
                <Input
                  id="cardNumber"
                  placeholder="**** **** **** ****"
                  required
                  className="bg-white dark:bg-charcoal border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream focus:ring-gold focus:border-gold"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expMonth" className="text-charcoal dark:text-cream">
                    Exp. Month
                  </Label>
                  <Input
                    id="expMonth"
                    placeholder="MM"
                    required
                    className="bg-white dark:bg-charcoal border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream focus:ring-gold focus:border-gold"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="expYear" className="text-charcoal dark:text-cream">
                    Exp. Year
                  </Label>
                  <Input
                    id="expYear"
                    placeholder="YY"
                    required
                    className="bg-white dark:bg-charcoal border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream focus:ring-gold focus:border-gold"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc" className="text-charcoal dark:text-cream">
                    CVC
                  </Label>
                  <Input
                    id="cvc"
                    placeholder="123"
                    required
                    className="bg-white dark:bg-charcoal border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream focus:ring-gold focus:border-gold"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-lg bg-gold text-white hover:bg-gold/90 transition-colors shadow-lg font-semibold rounded-full mt-8"
              >
                Place Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-deep-brown p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold font-serif mb-6 text-charcoal dark:text-gold">Order Summary</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">Your cart is empty. Please add items to proceed.</p>
            ) : (
              <>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.imageUrl || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded-md object-cover"
                        />
                        <div>
                          <p className="font-medium text-charcoal dark:text-cream">{item.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-charcoal dark:text-cream">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
                <div className="flex justify-between items-center text-xl font-bold text-charcoal dark:text-gold">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </>
            )}
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-gold dark:text-gray-400 dark:hover:text-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
