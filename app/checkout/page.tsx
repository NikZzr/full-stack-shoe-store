"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order placement
    setTimeout(() => {
      setOrderPlaced(true)
      localStorage.setItem("cart", JSON.stringify([]))
      setIsSubmitting(false)
    }, 1000)
  }

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-white">
        <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              SneakerHub
            </Link>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="mb-6 text-6xl">✓</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">¡Orden Realizada Exitosamente!</h1>
          <p className="text-gray-600 mb-8">
            Gracias por tu compra. Tu orden ha sido confirmada y será enviada pronto.
          </p>
          <Button asChild className="bg-gray-900 hover:bg-gray-800">
            <Link href="/">Seguir Comprando</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            SneakerHub
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Pago</h1>

        <form onSubmit={handleSubmit}>
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Información de Contacto</h2>
            <Input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input
                type="text"
                name="firstName"
                placeholder="Nombre"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Dirección de Envío</h2>
            <Input
              type="text"
              name="address"
              placeholder="Dirección"
              value={formData.address}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <div className="grid grid-cols-3 gap-4 mb-4">
              <Input
                type="text"
                name="city"
                placeholder="Ciudad"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="state"
                placeholder="Región"
                value={formData.state}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="zip"
                placeholder="Código Postal"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Información de Pago</h2>
            <Input
              type="text"
              name="cardNumber"
              placeholder="Número de Tarjeta"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="mb-4"
            />
          </Card>

          <div className="flex gap-4">
            <Button asChild variant="outline" className="flex-1 bg-transparent">
              <Link href="/cart">Volver al Carrito</Link>
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1 bg-gray-900 hover:bg-gray-800">
              {isSubmitting ? "Procesando..." : "Realizar Orden"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
