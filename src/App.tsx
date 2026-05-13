import { products } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <h1 className="text-2xl font-bold text-yellow-400">CineSoilerS 🎬</h1>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-white text-3xl font-bold mb-8">Catálogo de Películas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App