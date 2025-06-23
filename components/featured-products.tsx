import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "./product-card"
import { products } from "@/lib/data" // Import mock products

export default function FeaturedProducts() {
  // Display a subset of products or all of them
  const featuredProducts = products.slice(0, 4) // Show first 4 as featured

  return (
    <section id="featured-products" className="w-full py-16 md:py-24 lg:py-32 bg-light-gray-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl font-serif text-charcoal">
              Our Signature Creations
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed font-sans">
              A curated selection of our most coveted designs, embodying unparalleled artistry and timeless appeal.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 py-8 lg:grid-cols-4 md:grid-cols-2">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/shop" prefetch={false}>
            {" "}
            {/* Link to a dedicated shop page */}
            <Button
              variant="outline"
              className="h-12 px-8 text-lg bg-charcoal text-white hover:bg-deep-brown hover:text-gold transition-colors border-charcoal dark:bg-gold dark:text-charcoal dark:hover:bg-gold/90 rounded-full"
            >
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
