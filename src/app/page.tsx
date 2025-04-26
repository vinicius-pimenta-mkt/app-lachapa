'use client';
import { useState } from 'react';
import { categories, products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import CartButton from '@/components/CartButton';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('tradicionais');

  // Filtrar produtos pela categoria selecionada
  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      <CartButton />
    </div>
  );
}
