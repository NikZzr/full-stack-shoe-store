"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface Product {
  id: number
  title: string
  price: number
  image: string
  category: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Nike Air Force 1 '07",
    price: 129.99,
    image: "/white-nike-air-force-1.png",
    category: "Classic",
  },
  {
    id: 2,
    title: "Nike Air Max 90",
    price: 149.99,
    image: "/black-nike-air-max-90-sneaker.jpg",
    category: "Air Max",
  },
  {
    id: 3,
    title: "Nike React Infinity",
    price: 179.99,
    image: "/blue-nike-running-sneaker.jpg",
    category: "Running",
  },
  {
    id: 4,
    title: "Nike Blazer Mid",
    price: 119.99,
    image: "/red-nike-blazer-mid-sneaker.jpg",
    category: "Classic",
  },
  {
    id: 5,
    title: "Nike Court Legacy",
    price: 99.99,
    image: "/white-nike-court-sneaker.jpg",
    category: "Basketball",
  },
  {
    id: 6,
    title: "Nike Revolution 7",
    price: 79.99,
    image: "/gray-nike-revolution-running-shoe.jpg",
    category: "Running",
  },
  {
    id: 7,
    title: "Nike LeBron Witness",
    price: 189.99,
    image: "/black-basketball-nike-sneaker.jpg",
    category: "Basketball",
  },
  {
    id: 8,
    title: "Nike Pegasus 40",
    price: 139.99,
    image: "/orange-nike-pegasus-running.jpg",
    category: "Running",
  },
]

interface ProductGridProps {
  onCartUpdate: () => void
}

export default function ProductGrid({ onCartUpdate }: ProductGridProps) {
  const [filter, setFilter] = useState<string>("All")
  const [addedToCart, setAddedToCart] = useState<Set<number>>(new Set())

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))]
  const filteredProducts = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existingItem = cart.find((item: any) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    setAddedToCart((prev) => new Set([...prev, product.id]))
    onCartUpdate()

    setTimeout(() => {
      setAddedToCart((prev) => {
        const newSet = new Set(prev)
        newSet.delete(product.id)
        return newSet
      })
    }, 1500)
  }

  return (
    <div>
      {/* Filter */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
              filter === cat ? "bg-gray-900 text-white" : "border border-gray-300 text-gray-900 hover:border-gray-400"
            }`}
          >
            {cat === "All"
              ? "Todos"
              : cat === "Classic"
                ? "Clásicos"
                : cat === "Air Max"
                  ? "Air Max"
                  : cat === "Running"
                    ? "Correr"
                    : "Básquetbol"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition group">
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-1">{product.category}</p>
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.title}</h3>
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
                <Button
                  size="sm"
                  onClick={() => addToCart(product)}
                  className={`transition ${
                    addedToCart.has(product.id) ? "bg-green-600 hover:bg-green-700" : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  {addedToCart.has(product.id) ? "✓" : <ShoppingCart size={16} />}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
