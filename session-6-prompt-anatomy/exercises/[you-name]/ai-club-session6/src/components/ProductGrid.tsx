import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '../types/product'

// Sample data for demonstration
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    price: 2499,
    image: 'https://via.placeholder.com/300x200?text=MacBook+Pro',
    inStock: true,
    category: 'Electronics',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    price: 999,
    image: 'https://via.placeholder.com/300x200?text=iPhone+15',
    inStock: true,
    category: 'Electronics',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'AirPods Pro',
    price: 249,
    image: 'https://via.placeholder.com/300x200?text=AirPods+Pro',
    inStock: false,
    category: 'Electronics',
    rating: 4.7,
  },
]

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sampleProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
