import Link from "next/link"
import MainNav from "@/components/main-nav"
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-light-gray-bg">
      <MainNav />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-8 border-t border-gray-200 bg-white text-charcoal">
        <p className="text-sm text-gray-600 dark:text-gray-400 font-sans">
          &copy; 2024 VogueVault. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-6 sm:gap-8">
          <Link
            href="/terms" // Placeholder
            className="text-sm hover:underline underline-offset-4 text-charcoal hover:text-gold transition-colors font-sans"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy" // Placeholder
            className="text-sm hover:underline underline-offset-4 text-charcoal hover:text-gold transition-colors font-sans"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="/shipping" // Placeholder
            className="text-sm hover:underline underline-offset-4 text-charcoal hover:text-gold transition-colors font-sans"
            prefetch={false}
          >
            Shipping & Returns
          </Link>
        </nav>
      </footer>
    </div>
  )
}
