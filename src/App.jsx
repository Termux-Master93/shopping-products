import { useState } from 'react'
import './App.css'
import { Header } from './componets/Header'

import { products as initialProducts } from './mooks/products.json'
import { Products } from './componets/Products'
import { IS_DEVELOPMENT } from './config'

import { Footer } from './componets/Footer'
import { useFilters } from './hook/useFilter'

import { Card } from './componets/Card'
import { CartProvider } from './context/Cart'
function App() {
  const [products] = useState(initialProducts)
  const { filter, filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <Header />
      <Card />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>

  )
}

export default App
