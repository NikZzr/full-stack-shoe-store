'use client'

interface CartSummaryProps {
  subtotal: number
  tax: number
  total: number
}

export default function CartSummary({ subtotal, tax, total }: CartSummaryProps) {
  return (
    <div className="space-y-3 mb-6">
      <div className="flex justify-between text-gray-600">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-gray-600">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-900">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  )
}
