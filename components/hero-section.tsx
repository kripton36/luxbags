import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] overflow-hidden">
      <Image
        src="/placeholder.svg?height=900&width=1600"
        width={1600}
        height={900}
        alt="Elegant Luxury Handbag"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-4">
        <div className="max-w-3xl space-y-6 text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight font-serif drop-shadow-lg">
            Discover Unrivaled Elegance
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto font-sans">
            Experience the pinnacle of craftsmanship and design with our exclusive collection of luxury handbags.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="#" prefetch={false}>
              <Button className="h-12 px-8 text-lg bg-gold text-white hover:bg-gold/90 transition-colors shadow-lg font-semibold rounded-full">
                Explore Collections
              </Button>
            </Link>
            <Link href="#" prefetch={false}>
              <Button
                variant="outline"
                className="h-12 px-8 text-lg border-2 border-white text-white bg-transparent hover:bg-white/10 transition-colors font-semibold rounded-full"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
