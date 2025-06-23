"use client" // This component needs client-side interactivity for the cart

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/data" // Import Product type
import { useCart } from "@/lib/cart-provider" // Import useCart hook
import { toast } from "@/hooks/use-toast" // Assuming use-toast is available

interface ProductCardProps {
  product: Product // Pass the full product object
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Card className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out bg-white border border-gray-100">
      <Link href={`/products/${product.id}`} className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View {product.name}</span>
      </Link>
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.altText}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <CardContent className="p-5 bg-white dark:bg-charcoal text-charcoal dark:text-cream">
        <h3 className="text-xl font-semibold tracking-tight font-serif">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{product.category}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-gold font-sans">${product.price.toFixed(2)}</span>
          <Button
            variant="outline"
            className="bg-charcoal text-white hover:bg-deep-brown hover:text-gold transition-colors border-charcoal dark:bg-gold dark:text-charcoal dark:hover:bg-gold/90"
            onClick={(e) => {
              e.preventDefault() // Prevent navigating to product page
              handleAddToCart()
            }}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
