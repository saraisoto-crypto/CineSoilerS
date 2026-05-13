import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'

export function Cart() {
  const { items, removeItem, updateQuantity, total } = useCartStore()
  const itemCount = items.reduce((acc, i) => acc + i.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
          🛒 Carrito
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs w-5 h-5 flex items-center justify-center p-0 rounded-full">
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-900 border-gray-800 text-white w-96">
        <SheetHeader>
          <SheetTitle className="text-yellow-400 text-xl">Tu Carrito 🎬</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400">
            <span className="text-5xl mb-4">🍿</span>
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 bg-gray-800 rounded-lg p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-sm">{product.title}</p>
                    <p className="text-yellow-400 font-bold">${product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(product.id, Math.max(1, quantity - 1))}
                        className="w-6 h-6 bg-gray-700 rounded text-white hover:bg-yellow-400 hover:text-gray-900"
                      >
                        -
                      </button>
                      <span className="text-sm">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-6 h-6 bg-gray-700 rounded text-white hover:bg-yellow-400 hover:text-gray-900"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="ml-auto text-red-400 hover:text-red-300 text-sm"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-4 pb-8 space-y-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-yellow-400">${total().toFixed(2)}</span>
              </div>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold">
                Proceder al pago
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}