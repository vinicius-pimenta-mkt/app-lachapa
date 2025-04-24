'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import { Product, categories } from '@/lib/data';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('burgers-tradicionais');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Importação dinâmica para evitar problemas de SSR
    const { products } = require('@/lib/data');
    setProducts(products);
  }, []);

  // Filtrar produtos pela categoria selecionada
  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <h2 className="text-2xl font-bold mb-4">Cardápio</h2>
        
        {/* Categorias */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Lista de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
