"use client"

import React from "react"

import { useActionState } from "react"
import { createProduct } from "../actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function ProductUploadPage() {
  const [state, formAction, isPending] = useActionState(createProduct, null)
  const { toast } = useToast()

  // Show toast messages based on action state
  React.useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success!",
        description: state.message,
        variant: "default",
      })
    } else if (state?.success === false) {
      toast({
        title: "Error!",
        description: state.message,
        variant: "destructive",
      })
    }
  }, [state, toast])

  return (
    <div className="max-w-3xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-charcoal">Upload New Product</CardTitle>
          <CardDescription>Fill in the details below to add a new luxury bag to your inventory.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" name="name" placeholder="e.g., The Grandeur Tote" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input id="price" name="price" type="number" step="0.01" placeholder="e.g., 2500.00" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input id="imageUrl" name="imageUrl" placeholder="e.g., /placeholder.svg?text=LuxuryBag" required />
              <p className="text-sm text-gray-500">
                For a real website, you would integrate with a file upload service (e.g., Vercel Blob, Cloudinary).
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="altText">Image Alt Text (Optional)</Label>
              <Input id="altText" name="altText" placeholder="e.g., Elegant black leather handbag" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="A detailed description of the product..."
                rows={4}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select name="category" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Totes">Totes</SelectItem>
                  <SelectItem value="Clutches">Clutches</SelectItem>
                  <SelectItem value="Satchels">Satchels</SelectItem>
                  <SelectItem value="Shoulder Bags">Shoulder Bags</SelectItem>
                  <SelectItem value="Backpacks">Backpacks</SelectItem>
                  <SelectItem value="Crossbody Bags">Crossbody Bags</SelectItem>
                  <SelectItem value="Wallets">Wallets</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="details">Product Details (one per line)</Label>
              <Textarea
                id="details"
                name="details"
                placeholder="e.g.,\nFull-grain Italian leather\nHand-stitched detailing\nGold-plated hardware"
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full bg-charcoal hover:bg-deep-brown text-white" disabled={isPending}>
              {isPending ? "Uploading Product..." : "Upload Product"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
