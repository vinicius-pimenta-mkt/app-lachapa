'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import { Product, categories } from '@/lib/data';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const { products } = require('@/lib/data');
    setProducts(products);
  }, []);

  return (
    <div className="min-h-screen pb-20 bg-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-white mb-8 bg-primary p-4 rounded-md text-center">Cardápio</h2>

        {categories.map((category) => (
          <div key={category.id} className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-6">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
