'use client';

import Link from 'next/link';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card mb-4">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="product-title text-lg">{product.name}</h3>
          <span className="product-price">R$ {product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <Link
          href={`/product/${product.id}`}
          className="add-button w-full block text-center"
        >
          Adicionar
        </Link>
      </div>
    </div>
  );
}
