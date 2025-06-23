import Link from "next/link"
import { ShoppingBag, Search, User } from "lucide-react"
import CartSheet from "./cart-sheet" // Import the CartSheet component

export default function MainNav() {
  return (
    <header className="px-4 lg:px-8 h-16 flex items-center justify-between border-b border-gray-200 bg-white shadow-sm">
      <Link
        href="/" // Link to home page
        className="flex items-center justify-center text-charcoal hover:text-gold transition-colors"
        prefetch={false}
      >
        <ShoppingBag className="h-7 w-7 mr-2" />
        <span className="text-xl font-bold tracking-wide font-serif">VogueVault</span>
      </Link>
      <nav className="flex gap-6 sm:gap-8 items-center">
        <Link
          href="/#featured-products" // Link to featured products section
          className="text-sm font-medium text-charcoal hover:text-gold transition-colors underline-offset-4"
          prefetch={false}
        >
          Shop
        </Link>
        <Link
          href="/collections/new-arrivals" // Placeholder for new arrivals page
          className="text-sm font-medium text-charcoal hover:text-gold transition-colors underline-offset-4"
          prefetch={false}
        >
          New Arrivals
        </Link>
        <Link
          href="/collections" // Placeholder for collections page
          className="text-sm font-medium text-charcoal hover:text-gold transition-colors underline-offset-4"
          prefetch={false}
        >
          Collections
        </Link>
        <Link
          href="/about" // Placeholder for about us page
          className="text-sm font-medium text-charcoal hover:text-gold transition-colors underline-offset-4"
          prefetch={false}
        >
          About Us
        </Link>
        <Link
          href="/contact" // Placeholder for contact page
          className="text-sm font-medium text-charcoal hover:text-gold transition-colors underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
        <div className="flex items-center gap-4 ml-4">
          <Link href="/search" className="text-charcoal hover:text-gold transition-colors" prefetch={false}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Link>
          <Link href="/sign-in" className="text-charcoal hover:text-gold transition-colors" prefetch={false}>
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Link>
          <CartSheet /> {/* Integrate the CartSheet component */}
        </div>
      </nav>
    </header>
  )
}
