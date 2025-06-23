"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/lib/data"
import { notFound } from "next/navigation"
import { useCart } from "@/lib/cart-provider"
import { toast } from "@/hooks/use-toast"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductById(params.id)
  const { addToCart } = useCart()

  if (!product) {
    notFound() // Render 404 page if product not found
  }

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="min-h-screen bg-light-gray-bg text-charcoal dark:bg-charcoal dark:text-cream">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gold transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 dark:border-deep-brown">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.altText}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid gap-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-charcoal dark:text-gold">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-gold font-sans">${product.price.toFixed(2)}</p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{product.description}</p>
            </div>
            <div className="grid gap-4">
              <h2 className="text-xl font-semibold font-serif text-charcoal dark:text-cream">Product Details</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            <Button
              className="w-full h-12 text-lg bg-gold text-white hover:bg-gold/90 transition-colors shadow-lg font-semibold rounded-full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
