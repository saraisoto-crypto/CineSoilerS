import { Product } from '@/types'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/button'

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore(state => state.addItem)

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all duration-300 group">
      <div className="relative overflow-hidden h-72">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-white font-bold text-lg">{product.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-400 font-bold text-xl">${product.price}</span>
          <span className="text-gray-400 text-sm">⭐ {product.rating}</span>
        </div>
        <Button
          onClick={() => addItem(product)}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold mt-2"
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  )
}