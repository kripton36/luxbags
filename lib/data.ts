// This file mocks product data. In a real application, this would come from a database.

export type Product = {
  id: string
  name: string
  price: number
  imageUrl: string
  altText: string
  description: string
  details: string[]
  category: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "The Grandeur Tote",
    price: 2500.0,
    imageUrl: "/placeholder.svg?height=400&width=500&text=Grandeur Tote",
    altText: "Luxury Leather Tote Bag",
    description:
      "A timeless piece crafted from the finest Italian leather, designed for the modern connoisseur. Spacious and elegant, perfect for daily essentials and more.",
    details: [
      "Full-grain Italian leather",
      "Hand-stitched detailing",
      "Gold-plated hardware",
      "Interior zip pocket and two slip pockets",
      'Dimensions: 14"W x 12"H x 6"D',
    ],
    category: "Totes",
  },
  {
    id: "2",
    name: "Opulent Evening Clutch",
    price: 1800.0,
    imageUrl: "/placeholder.svg?height=400&width=500&text=Evening Clutch",
    altText: "Opulent Evening Clutch Bag",
    description:
      "Dazzle at any event with this exquisite clutch, adorned with delicate crystals and a silk lining. A true statement of luxury.",
    details: [
      "Embellished with Swarovski crystals",
      "Pure silk interior lining",
      "Detachable chain strap",
      "Magnetic snap closure",
      'Dimensions: 8"W x 5"H x 2"D',
    ],
    category: "Clutches",
  },
  {
    id: "3",
    name: "Metropolitan Satchel",
    price: 2100.0,
    imageUrl: "/placeholder.svg?height=400&width=500&text=Metropolitan Satchel",
    altText: "Sophisticated Metropolitan Satchel Bag",
    description:
      "The perfect blend of sophistication and practicality. This satchel offers versatile carrying options and ample space for your urban adventures.",
    details: [
      "Premium Saffiano leather",
      "Adjustable and detachable shoulder strap",
      "Multiple compartments for organization",
      "Protective metal feet",
      'Dimensions: 13"W x 10"H x 5"D',
    ],
    category: "Satchels",
  },
  {
    id: "4",
    name: "Timeless Shoulder Bag",
    price: 2900.0,
    imageUrl: "/placeholder.svg?height=400&width=500&text=Shoulder Bag",
    altText: "Timeless Classic Shoulder Bag",
    description:
      "An iconic design that transcends seasons. This shoulder bag is a testament to enduring style and impeccable craftsmanship.",
    details: [
      "Quilted lambskin leather",
      "Signature chain-link strap",
      "Turn-lock closure with engraved logo",
      "Interior slip pocket",
      'Dimensions: 10"W x 7"H x 3"D',
    ],
    category: "Shoulder Bags",
  },
  {
    id: "5",
    name: "Voyager Backpack",
    price: 1950.0,
    imageUrl: "/placeholder.svg?height=400&width=500&text=Voyager Backpack",
    altText: "Luxury Voyager Backpack",
    description:
      "Designed for the discerning traveler, this luxury backpack combines comfort with high-end style. Perfect for short trips or daily commutes.",
    details: [
      "Durable canvas with leather trim",
      "Padded laptop compartment",
      "Ergonomic shoulder straps",
      "Multiple exterior and interior pockets",
      'Dimensions: 12"W x 16"H x 7"D',
    ],
    category: "Backpacks",
  },
  {
    id: "6",
    name: "Petite Crossbody",
    price: 1100.0,
    imageUrl: "/placeholder.svg?height=400&width=500&text=Petite Crossbody",
    altText: "Elegant Petite Crossbody Bag",
    description:
      "A charming and compact crossbody bag, ideal for carrying your essentials with effortless grace. Perfect for a night out or a casual day.",
    details: [
      "Smooth calfskin leather",
      "Adjustable slender strap",
      "Secure magnetic flap closure",
      "Interior card slots",
      'Dimensions: 7"W x 5"H x 2.5"D',
    ],
    category: "Crossbody Bags",
  },
]

export const getProductById = (id: string) => products.find((product) => product.id === id)
