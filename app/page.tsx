"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductGrid from "@/components/product-grid"
import { ShoppingCart } from "lucide-react"

export default function Home() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartCount(cart.length)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            SneakerHub
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            <ShoppingCart size={20} />
            <span className="font-semibold">{cartCount}</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Tenis Premium para Cada Estilo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 text-balance">
              Descubre nuestra colección seleccionada de tenis Nike auténticos. Calidad premium, diseños exclusivos y
              envío rápido.
            </p>
            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
              <a href="#products">Comprar Ahora</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Colección Destacada</h2>
        <ProductGrid onCartUpdate={() => setCartCount((prev) => prev + 1)} />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Tienda</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Todos los Tenis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Nuevos Lanzamientos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Ofertas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Información de Envío
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Devoluciones
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Empleos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 SneakerHub. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
