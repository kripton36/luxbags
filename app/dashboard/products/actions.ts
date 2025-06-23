"use server"

import { addProduct, type Product } from "@/lib/data"
import { revalidatePath } from "next/cache"

export async function createProduct(formData: FormData) {
  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const price = Number.parseFloat(formData.get("price") as string)
  const imageUrl = formData.get("imageUrl") as string
  const altText = formData.get("altText") as string
  const description = formData.get("description") as string
  const category = formData.get("category") as string
  const details = (formData.get("details") as string)
    .split("\n")
    .map((d) => d.trim())
    .filter((d) => d.length > 0)

  if (!name || !price || !imageUrl || !description || !category) {
    return { success: false, message: "Missing required fields." }
  }

  const newProduct: Omit<Product, "id"> = {
    name,
    price,
    imageUrl,
    altText: altText || name, // Default altText if not provided
    description,
    details,
    category,
  }

  try {
    const addedProduct = addProduct(newProduct)
    console.log("New product added:", addedProduct)
    revalidatePath("/dashboard/products") // Revalidate the products listing page if you had one
    revalidatePath("/") // Revalidate the homepage to show new featured products
    return { success: true, message: `Product "${name}" uploaded successfully!` }
  } catch (error) {
    console.error("Error adding product:", error)
    return { success: false, message: "Failed to upload product." }
  }
}
