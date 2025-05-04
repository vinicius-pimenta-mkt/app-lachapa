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
        {/* Novo Título Cardápio */}
        <h2 className="titulo-cardapio text-3xl font-bold bg-primary p-4 rounded-md text-center mb-8">
          <span className="texto-cardapio">Cardápio</span>
        </h2>

        {/* Categorias como Seções */}
        {categories.map((category) => (
          <div key={category.id} className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-6">{category.name}</h3>

            <div className="products-grid">
              {products
                .filter(product => product.category === category.id)
                .map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
