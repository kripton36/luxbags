import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-provider" // Import CartProvider
import { Toaster } from "@/components/ui/toaster" // Assuming shadcn toaster is available

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VogueVault - Luxury Bags",
  description: "Discover unrivaled elegance with VogueVault's exclusive collection of luxury handbags.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          {" "}
          {/* Wrap children with CartProvider */}
          {children}
        </CartProvider>
        <Toaster /> {/* Add Toaster for notifications */}
      </body>
    </html>
  )
}
